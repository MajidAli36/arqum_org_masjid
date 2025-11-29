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

export default function ElectionsNominationsPageEditor() {
  const [sections, setSections] = useState<Record<string, SectionField[]>>({
    hero: [
      { id: "hero-image", label: "Hero Image", type: "image", value: "/images/fortdoge-masjid.jpg" },
    ],
    election: [
      { id: "election-title", label: "Section Title", type: "text", value: "DAIC Board of Directors Election" },
      { id: "election-intro", label: "Introduction", type: "rich-text", value: "The DAIC Board of Directors Election will be held on Sunday, September 28th 2025 after Dhuhr Prayer. Nomination forms are available on the DAIC bulletin boards and via the link below:" },
      { id: "nomination-form-link", label: "Nomination Form Link", type: "url", value: "/files/board-of-directors-nomination-form.pdf" },
      { id: "nomination-form-label", label: "Nomination Form Label", type: "text", value: "Board of Directors Nomination Form" },
      { id: "nomination-deadline", label: "Nomination Deadline", type: "rich-text", value: "If you would like to nominate someone, please complete the appropriate form, and submit it by Isha prayer on Friday, September 26th." },
    ],
    membership: [
      { id: "membership-title", label: "Section Title", type: "text", value: "MEMBERSHIP & VOTING" },
      { id: "membership-intro", label: "Introduction", type: "rich-text", value: "To vote in the upcoming election you must be a DAIC member. The membership dues are $30 per person for a one-year membership. You can renew your membership in one of the following ways:" },
      {
        id: "membership-methods",
        label: "Membership Payment Methods",
        type: "array",
        value: [
          { method: "Donation Box", description: "Drop off an envelope in the Islamic Center Donation Box with your NAME and \"MEMBERSHIP\" written on the envelope." },
          { method: "Mohid Kiosk", description: "Select the Membership option on the kiosk and follow the instructions." },
          { method: "Online", description: "Membership dues can also be paid through the Islamic Center website. To pay dues online go to www.arqum.org and press the donate button, then choose DAIC Membership in the category and follow the instructions.", link: "https://www.arqum.org" },
        ],
        arrayItemSchema: [
          { id: "method", label: "Method Name", type: "text" },
          { id: "description", label: "Description", type: "textarea" },
          { id: "link", label: "Link URL (optional)", type: "url" },
        ],
      },
    ],
    questions: [
      { id: "questions-title", label: "Section Title", type: "text", value: "QUESTIONS" },
      { id: "questions-content", label: "Content", type: "rich-text", value: "For any further questions contact DAIC Treasurer at treasurer@arqum.org." },
      { id: "treasurer-email", label: "Treasurer Email", type: "text", value: "treasurer@arqum.org" },
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
      pageTitle="Edit Elections & Nominations Page"
      pageDescription="Edit all sections of the Elections & Nominations page including hero and content sections."
    >
      <div className="space-y-6">
        <SectionEditor
          sectionId="hero"
          sectionTitle="Hero Section"
          fields={sections.hero}
          onUpdate={handleSectionUpdate}
        />

        <SectionEditor
          sectionId="election"
          sectionTitle="Election Section"
          fields={sections.election}
          onUpdate={handleSectionUpdate}
        />

        <SectionEditor
          sectionId="membership"
          sectionTitle="Membership & Voting Section"
          fields={sections.membership}
          onUpdate={handleSectionUpdate}
        />

        <SectionEditor
          sectionId="questions"
          sectionTitle="Questions Section"
          fields={sections.questions}
          onUpdate={handleSectionUpdate}
        />
      </div>
    </PageEditorLayout>
  );
}

