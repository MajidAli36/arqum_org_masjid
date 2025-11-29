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

export default function IslamicSchoolPageEditor() {
  const [sections, setSections] = useState<Record<string, SectionField[]>>({
    hero: [
      { id: "hero-image", label: "Hero Image", type: "image", value: "/images/fortdoge-masjid.jpg" },
    ],
    intro: [
      { id: "intro-title", label: "Title", type: "text", value: "Islamic School" },
      { id: "intro-content", label: "Content", type: "rich-text", value: "Fort Dodge Islamic School (DAIS) is our weekend educational program dedicated to providing quality Islamic education to children in our community." },
    ],
    vision: [
      { id: "vision-title", label: "Section Title", type: "text", value: "VISION" },
      { id: "vision-content", label: "Content", type: "rich-text", value: "DAIS' vision is to cultivate tomorrow's leaders; proud, and practicing Muslims who will positively shape our families, communities, nation, and the world inshaAllah." },
    ],
    mission: [
      { id: "mission-title", label: "Section Title", type: "text", value: "MISSION" },
      { id: "mission-content", label: "Content", type: "rich-text", value: "DAIS — a Sunday school — provides Islamic education based on the Quran and Sunnah to elementary and middle school students at DAIC. DAIS prepares students to meet the challenges of our changing world by teaching them Quran, Islamic studies, and Arabic in an enriching and stimulating Islamic environment." },
    ],
    principal: [
      { id: "principal-title", label: "Section Title", type: "text", value: "HIRING A PRINCIPAL FOR THE ISLAMIC SCHOOL" },
      { id: "principal-content", label: "Content", type: "rich-text", value: "We are looking for a principal for our Islamic school. Please check the principal position description and apply by sending your CV and any supported documents to: education@arqum.org." },
      { id: "principal-pdf-link", label: "Principal Position PDF Link", type: "url", value: "/files/dais-principal-position-description.pdf" },
      { id: "principal-email", label: "Contact Email", type: "text", value: "education@arqum.org" },
    ],
    administration: [
      { id: "admin-title", label: "Section Title", type: "text", value: "ADMINISTRATION" },
      { id: "admin-principal-label", label: "Principal Label", type: "text", value: "Principal:" },
      { id: "admin-principal", label: "Principal Name", type: "text", value: "(To be announced)" },
      { id: "admin-info-text", label: "Info Text", type: "rich-text", value: "For more information e-mail us at education@arqum.org." },
      { id: "admin-email", label: "Contact Email", type: "text", value: "education@arqum.org" },
      { id: "admin-note", label: "Additional Note", type: "rich-text", value: "Information about the starting date of the school and the deadline for registration will be posted as soon as they are available." },
    ],
  });

  const handleSectionUpdate = (sectionId: string, fields: SectionField[]) => {
    setSections((prev) => ({
      ...prev,
      [sectionId]: fields,
    }));
  };

  return (
    <PageEditorLayout
      pageTitle="Edit Islamic School Page"
      pageDescription="Edit all sections of the Islamic School page including hero, vision, mission, principal hiring, and administration."
    >
      <div className="space-y-6">
        <SectionEditor
          sectionId="hero"
          sectionTitle="Hero Section"
          fields={sections.hero}
          onUpdate={handleSectionUpdate}
        />

        <SectionEditor
          sectionId="intro"
          sectionTitle="Introduction Section"
          fields={sections.intro}
          onUpdate={handleSectionUpdate}
        />

        <SectionEditor
          sectionId="vision"
          sectionTitle="Vision Section"
          fields={sections.vision}
          onUpdate={handleSectionUpdate}
        />

        <SectionEditor
          sectionId="mission"
          sectionTitle="Mission Section"
          fields={sections.mission}
          onUpdate={handleSectionUpdate}
        />

        <SectionEditor
          sectionId="principal"
          sectionTitle="Principal Hiring Section"
          fields={sections.principal}
          onUpdate={handleSectionUpdate}
        />

        <SectionEditor
          sectionId="administration"
          sectionTitle="Administration Section"
          fields={sections.administration}
          onUpdate={handleSectionUpdate}
        />
      </div>
    </PageEditorLayout>
  );
}

