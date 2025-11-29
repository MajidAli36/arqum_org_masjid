"use client";

import { useState } from "react";
import PageEditorLayout from "../components/PageEditorLayout";
import SectionEditor from "../components/SectionEditor";

type SectionField = {
  id: string;
  label: string;
  type: "text" | "textarea" | "image" | "rich-text" | "url" | "time" | "array" | "table";
  value: string | any[];
  placeholder?: string;
  arrayItemSchema?: { id: string; label: string; type: string }[];
  tableColumns?: { id: string; label: string }[];
};

export default function RamadanPageEditor() {
  const [sections, setSections] = useState<Record<string, SectionField[]>>({
    hero: [
      { id: "hero-image", label: "Hero Image", type: "image", value: "/images/ramzan-aq.png" },
      { id: "announcement-text", label: "Announcement Text", type: "rich-text", value: "ISNA and the Fiqh Council of North America have announced the first day of Ramadan will be on Saturday, March 1st. Taraweeh will begin on Friday, February 28th." },
      { id: "announcement-link", label: "Announcement Link URL", type: "url", value: "https://www.fiqhcouncil.org" },
      { id: "ramadan-start-date", label: "Ramadan Start Date", type: "text", value: "Saturday, March 1st" },
      { id: "taraweeh-start-date", label: "Taraweeh Start Date", type: "text", value: "Friday, February 28th" },
      { id: "eid-date", label: "Eid Date", type: "text", value: "Sunday, March 30th" },
    ],
    zakat: [
      { id: "zakat-subtitle", label: "Section Subtitle", type: "text", value: "Zakat-ul-Fitr" },
      { id: "zakat-amount", label: "Amount per Person", type: "text", value: "$10 per person" },
      { id: "zakat-deadline", label: "Deadline", type: "text", value: "Due by end of Taraweeh on Friday, March 28th" },
      { id: "zakat-description", label: "Description", type: "rich-text", value: "DAIC distributes Zakat-ul-Fitr (Fitrana) to eligible members of our community. Please meet the deadline so we can ensure distribution to families in need." },
      {
        id: "submission-methods",
        label: "Accepted Submission Methods",
        type: "array",
        value: [
          { label: "Online via Mohid", href: "https://www.mohid.com" },
          { label: "Mohid kiosk in the main prayer hall", href: "" },
          { label: "Labeled envelopes in both prayer halls (forthcoming)", href: "" },
        ],
        arrayItemSchema: [
          { id: "label", label: "Method Label", type: "text" },
          { id: "href", label: "Link URL (optional)", type: "url" },
        ],
      },
      { id: "charity-note", label: "Charity Note Text", type: "rich-text", value: "Prefer giving to a food distribution charity? Consider trusted partners such as the Amoud Foundation. DAIC does not endorse specific charities—please do your own due diligence." },
      { id: "charity-link", label: "Charity Link URL", type: "url", value: "https://www.amoudfoundation.org/" },
    ],
    tafsir: [
      { id: "tafsir-image", label: "Tafsir Image", type: "image", value: "/images/quran-aq.jpg" },
      { id: "tafsir-title", label: "Title", type: "text", value: "A Tour of the Qur'an" },
      { id: "tafsir-description", label: "Description", type: "rich-text", value: "Join us for nightly reflections with Br. Mohammed Badawi as we walk through the Qur'an together this Ramadan." },
      { id: "tafsir-location", label: "Location", type: "text", value: "1212 Iowa Ave, Ames, IA 50014" },
      { id: "tafsir-time", label: "Time", type: "text", value: "After Maghrib • Some nights post-Taraweeh" },
      {
        id: "tafsir-bullet-points",
        label: "Key Features",
        type: "array",
        value: [
          { point: "Some sessions will be between Maghrib and Isha" },
          { point: "Other dates will follow Taraweeh to accommodate volunteers" },
          { point: "Daily reflections lead by Br. Mohammed Badawi" },
        ],
        arrayItemSchema: [
          { id: "point", label: "Feature Point", type: "text" },
        ],
      },
      { id: "schedule-link", label: "Schedule Link URL", type: "url", value: "https://drive.google.com/file/d/13A_rP39iS9XukHmQYbHyCn2jG4qFCMii/view" },
    ],
    iftars: [
      { id: "iftars-subtitle", label: "Section Subtitle", type: "text", value: "Community Iftars" },
      { id: "iftars-title", label: "Title", type: "text", value: "Five Saturdays" },
      { id: "iftars-subtitle-note", label: "Subtitle Note", type: "text", value: "No open community iftar on March 1st" },
      { id: "iftars-description", label: "Description", type: "rich-text", value: "Each Saturday features a community-led iftar. Hosts welcome everyone to connect, share a meal, and reflect together. To reserve a date, email Sr. Kylie Anderson at social@arqum.org." },
      { id: "contact-email", label: "Contact Email", type: "text", value: "social@arqum.org" },
      {
        id: "iftar-dates",
        label: "Iftar Dates",
        type: "array",
        value: [
          { date: "Saturday 3/8/2024", community: "The Sudanese Community" },
          { date: "Saturday 3/15/2024", community: "The Arab Community" },
          { date: "Saturday 3/22/2024", community: "The Indian & Pakistani Communities" },
          { date: "Saturday 3/29/2024", community: "The Bangladeshi Community" },
        ],
        arrayItemSchema: [
          { id: "date", label: "Date", type: "text" },
          { id: "community", label: "Community", type: "text" },
        ],
      },
    ],
  });

  const [activeTab, setActiveTab] = useState<string>("hero");

  const handleSectionUpdate = (sectionId: string, fields: SectionField[]) => {
    setSections((prev) => ({
      ...prev,
      [sectionId]: fields,
    }));
  };

  const tabs = [
    { id: "hero", label: "Hero Section", icon: "🖼️" },
    { id: "zakat", label: "Zakat Section", icon: "💰" },
    { id: "tafsir", label: "Tafsir Series", icon: "📖" },
    { id: "iftars", label: "Community Iftars", icon: "🍽️" },
  ];

  const getSectionTitle = (sectionId: string) => {
    const titles: Record<string, string> = {
      hero: "Hero Section",
      zakat: "Zakat Section",
      tafsir: "Tafsir Series Section",
      iftars: "Community Iftars Section",
    };
    return titles[sectionId] || sectionId;
  };

  return (
    <PageEditorLayout
      pageTitle="Edit Ramadan Page"
      pageDescription="Edit all sections of the Ramadan page including hero, Zakat, Tafsir series, and community iftars."
    >
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors
                  ${
                    activeTab === tab.id
                      ? "border-sky-600 text-sky-600 bg-sky-50"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }
                `}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "hero" && (
            <SectionEditor
              sectionId="hero"
              sectionTitle={getSectionTitle("hero")}
              fields={sections.hero}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "zakat" && (
            <SectionEditor
              sectionId="zakat"
              sectionTitle={getSectionTitle("zakat")}
              fields={sections.zakat}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "tafsir" && (
            <SectionEditor
              sectionId="tafsir"
              sectionTitle={getSectionTitle("tafsir")}
              fields={sections.tafsir}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "iftars" && (
            <SectionEditor
              sectionId="iftars"
              sectionTitle={getSectionTitle("iftars")}
              fields={sections.iftars}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}
        </div>
      </div>
    </PageEditorLayout>
  );
}

