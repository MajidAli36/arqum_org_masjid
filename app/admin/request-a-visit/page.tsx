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

export default function RequestVisitPageEditor() {
  const [sections, setSections] = useState<Record<string, SectionField[]>>({
    hero: [
    
      { id: "hero-image", label: "Hero Image", type: "image", value: "/images/fortdoge-masjid.jpg" },
    ],
    content: [
      { id: "greeting", label: "Greeting", type: "text", value: "Peace!" },
      { id: "intro-paragraph", label: "Introduction Paragraph", type: "rich-text", value: "The members of Fort Dodge Islamic Center are available to present programs to you, your school or college, church or faith group, or civil organization about Islam. We hope that our programs about Islam and Muslims will be informative, build understanding, correct misconceptions, and promote tolerance and diversity within the community." },
      { id: "programs-paragraph", label: "Programs Paragraph", type: "rich-text", value: "Members of the Public Relations Committee would be happy to speak with you about several types of programs about Islam we can present to you. A wide variety of program subjects are available, including Islam as it relates to history, political science, social studies, world religions, or any other relevant subject headings." },
      { id: "visit-paragraph", label: "Visit Paragraph", type: "rich-text", value: "In an attempt to be informative about Islamic religious beliefs and practices, we are also happy to host individuals and groups at Fort Dodge Islamic Center. Should you be interested in visiting our mosque, please contact us to schedule your visit." },
      { id: "contact-paragraph", label: "Contact Paragraph", type: "rich-text", value: "Please contact us or email us at info@arqum.org. You can also leave a message at (515) 292-3683. We will contact you as soon as possible to work out the details." },
      { id: "closing-paragraph", label: "Closing Paragraph", type: "rich-text", value: "In addition, we would appreciate receiving notification of any events in your organization where our participation would be appropriate. Our members represent a wide range of diverse regions and cultures in the world and contribute to the wonderful diversity of Ames and the surrounding communities." },
      { id: "thank-you", label: "Thank You", type: "text", value: "Thank you," },
      { id: "signature", label: "Signature", type: "text", value: "Public Relations Committee" },
      { id: "organization", label: "Organization", type: "text", value: "Fort Dodge Islamic Center" },
      { id: "email-label", label: "Email Label", type: "text", value: "Email:" },
      { id: "email", label: "Email", type: "text", value: "info@arqum.org" },
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
      pageTitle="Edit Request a Visit Page"
      pageDescription="Edit all sections of the request a visit page including hero and content sections."
    >
      <div className="space-y-6">
        <SectionEditor
          sectionId="hero"
          sectionTitle="Hero Section"
          fields={sections.hero}
          onUpdate={handleSectionUpdate}
        />

        <SectionEditor
          sectionId="content"
          sectionTitle="Content Section"
          fields={sections.content}
          onUpdate={handleSectionUpdate}
        />
      </div>
    </PageEditorLayout>
  );
}

