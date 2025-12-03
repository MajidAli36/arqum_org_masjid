"use client";

import { useEffect, useState } from "react";
import PageEditorLayout from "../components/PageEditorLayout";
import SectionEditor from "../components/SectionEditor";
import { SectionField } from "@/lib/home-default-sections";
import { getRamzanDefaultSections } from "@/lib/ramzan-default-sections";

export default function RamzanPageEditor() {
  const [sections, setSections] = useState<Record<string, SectionField[]>>(
    getRamzanDefaultSections()
  );
  const [activeTab, setActiveTab] = useState<string>("hero");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<Record<string, boolean>>({});

  useEffect(() => {
    async function fetchRamzanData() {
      try {
        const response = await fetch("/api/ramzan");
        const result = await response.json();

        if (result.ok && result.ramzan?.data) {
          const data = result.ramzan.data;

          // Support both shapes:
          // 1) { page, hero, ... }
          // 2) { page, data: { hero, ... } }
          const sectionsSource =
            data.data && typeof data.data === "object" ? data.data : data;
          const transformed = getRamzanDefaultSections();

          const heroSource =
            sectionsSource.heroSection ?? sectionsSource.hero ?? null;

          if (heroSource?.data) {
            const heroData = heroSource.data as any;
            transformed.hero = [
              {
                id: "hero-image",
                label: "Hero Banner Image",
                type: "image",
                value: heroData.heroImage || "/images/ramzan-aq.png",
              },
            ];
          }

          // Map existing Daily Lessons data from Supabase into editor fields
          const lessonsSource = sectionsSource.daily_lessons ?? null;
          if (lessonsSource?.data) {
            const lessonsData = lessonsSource.data as any;
            transformed.daily_lessons = transformed.daily_lessons.map(
              (field) => {
                switch (field.id) {
                  case "lessons-image":
                    return {
                      ...field,
                      value: lessonsData.image || field.value,
                    };
                  case "lessons-title":
                    return {
                      ...field,
                      value: lessonsData.title || field.value,
                    };
                  case "lessons-description":
                    return {
                      ...field,
                      value: lessonsData.description || field.value,
                    };
                  case "lessons-location":
                    return {
                      ...field,
                      value: lessonsData.location || field.value,
                    };
                  case "lessons-time":
                    return {
                      ...field,
                      value: lessonsData.time || field.value,
                    };
                  case "lessons-bullet-1":
                    return {
                      ...field,
                      value: lessonsData.bullet1 || field.value,
                    };
                  case "lessons-bullet-2":
                    return {
                      ...field,
                      value: lessonsData.bullet2 || field.value,
                    };
                  case "lessons-bullet-3":
                    return {
                      ...field,
                      value: lessonsData.bullet3 || field.value,
                    };
                  case "lessons-cta-label":
                    return {
                      ...field,
                      value: lessonsData.ctaLabel || field.value,
                    };
                  case "lessons-cta-url":
                    return {
                      ...field,
                      value: lessonsData.ctaUrl || field.value,
                    };
                  default:
                    return field;
                }
              }
            );
          }

          setSections(transformed);
        }
      } catch (error) {
        console.error("Failed to fetch ramzan data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRamzanData();
  }, []);

  const handleSectionUpdate = (sectionId: string, fields: SectionField[]) => {
    setSections((prev) => ({
      ...prev,
      [sectionId]: fields,
    }));
  };

  const transformFieldsToSupabase = (
    sectionId: string,
    fields: SectionField[]
  ): any => {
    const data: any = {};

    fields.forEach((field) => {
      if (field.type === "array" || field.type === "table") {
        data[field.id] = Array.isArray(field.value) ? field.value : [];
      } else {
        data[field.id] =
          typeof field.value === "string" ? field.value : "";
      }
    });

    const mapping: Record<string, (d: any) => any> = {
      hero: (d) => ({
        heroImage: d["hero-image"] || "",
      }),
      daily_lessons: (d) => ({
        image: d["lessons-image"] || "",
        title: d["lessons-title"] || "",
        description: d["lessons-description"] || "",
        location: d["lessons-location"] || "",
        time: d["lessons-time"] || "",
        bullet1: d["lessons-bullet-1"] || "",
        bullet2: d["lessons-bullet-2"] || "",
        bullet3: d["lessons-bullet-3"] || "",
        ctaLabel: d["lessons-cta-label"] || "",
        ctaUrl: d["lessons-cta-url"] || "",
      }),
      zakat_ul_fitr: (d) => ({
        title: d["zakat-title"] || "",
        amount: d["zakat-amount"] || "",
        description: d["zakat-description"] || "",
      }),
      community_iftars: (d) => ({
        intro: d["iftar-intro"] || "",
        iftarDates: Array.isArray(d["iftar-dates"]) ? d["iftar-dates"] : [],
      }),
    };

    const mapper = mapping[sectionId];
    return mapper ? mapper(data) : data;
  };

  const handleSave = async (sectionId: string) => {
    setSaving((prev) => ({ ...prev, [sectionId]: true }));

    try {
      const fields = sections[sectionId];
      const sectionData = transformFieldsToSupabase(sectionId, fields);

      // Match Home page structure: hero uses "heroSection" key in Supabase JSON.
      const supabaseKey = sectionId === "hero" ? "heroSection" : sectionId;

      const requestBody = {
        sectionKey: supabaseKey,
        sectionData: {
          enabled: true,
          data: sectionData,
        },
      };

      const response = await fetch("/api/ramzan/update-section", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const result = await response.json();

      if (result.ok) {
        alert(`${sectionId} saved successfully!`);
        window.location.reload();
      } else {
        alert(result.message || "Failed to save");
      }
    } catch (error: any) {
      alert(error?.message || "Failed to save");
    } finally {
      setSaving((prev) => ({ ...prev, [sectionId]: false }));
    }
  };

  const tabs = [
    { id: "hero", label: "Hero Banner", icon: "🕌" },
    { id: "daily_lessons", label: "Daily Lessons", icon: "📖" },
    { id: "zakat_ul_fitr", label: "Zakat-ul-Fitr", icon: "💝" },
    { id: "community_iftars", label: "Community Iftars", icon: "🥘" },
  ];

  return (
    <PageEditorLayout
      pageTitle="Edit Ramzan Page"
      pageDescription="Manage hero banner, lessons, zakat, and community iftars."
    >
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="border-b border-gray-200">
          <div className="w-full overflow-x-auto horizontal-scroll">
            <nav
              className="inline-flex min-w-max scroll-px-4 px-8 py-2 md:px-0"
              aria-label="Tabs"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    mr-2 flex items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-xs sm:text-sm font-medium border-2 transition-colors last:mr-0
                    ${
                      activeTab === tab.id
                        ? "border-sky-600 bg-sky-50 text-sky-700"
                        : "border-transparent bg-gray-50 text-gray-600 hover:border-gray-300 hover:bg-white hover:text-gray-800"
                    }
                  `}
                >
                  <span className="text-base sm:text-lg">{tab.icon}</span>
                  <span className="text-left leading-snug">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="text-center py-8">
              <p className="text-gray-600">Loading...</p>
            </div>
          ) : (
            <>
              {tabs.map((tab) => (
                <div key={tab.id}>
                  {activeTab === tab.id && (
                    <SectionEditor
                      sectionId={tab.id}
                      sectionTitle={tab.label}
                      fields={sections[tab.id]}
                      onUpdate={handleSectionUpdate}
                      onSave={() => handleSave(tab.id)}
                      saving={saving[tab.id] || false}
                      alwaysExpanded={true}
                      bucket="Public"
                      folder="ramzan"
                    />
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </PageEditorLayout>
  );
}


