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

export default function VisitorsGuidePageEditor() {
  const [sections, setSections] = useState<Record<string, SectionField[]>>({
    hero: [
    
      { id: "hero-image", label: "Hero Image", type: "image", value: "/images/fortdoge-masjid.jpg" },
    ],
    intro: [
      { id: "intro-content", label: "Introduction Content", type: "rich-text", value: "Thank you for your interest in visiting Fort Dodge Islamic Center. Our center welcomes all visitors and request that the following guidelines are closely followed:" },
    ],
    dressCode: [
      { id: "dress-title", label: "Section Title", type: "text", value: "DRESS CODE" },
      {
        id: "dress-items",
        label: "Dress Code Items",
        type: "array",
        value: [
          "Clothing should be modest for both men and women. This means an ankle length skirt or trousers, which should not be tight fitting or translucent, together with a long sleeved and high-necked top. A headscarf (of any color) is encouraged for women.",
          "Before entering the prayer hall one must remove any footwear and place it on a rack. Clean and presentable socks, stockings, or tights are therefore a good idea.",
        ],
        arrayItemSchema: [
          { id: "text", label: "Item Text", type: "textarea" },
        ],
      },
    ],
    enteringCenter: [
      { id: "entering-title", label: "Section Title", type: "text", value: "ENTERING THE CENTER" },
      {
        id: "entering-items",
        label: "Entering Center Items",
        type: "array",
        value: [
          "Visitors may be greeted by the Arabic greeting \"As-salam Alaikum\" which means \"peace be upon you.\" The answer, if the visitor chooses to use it, is \"Wa alaikum-as-salam\", which means \"peace be upon you too\".",
          "Do not offer, or expect, to shake hands with people of the opposite sex.",
          "Before entering the prayer hall or prayer room, Muslim men and women perform wudhu or cleansing ablutions if they have not already done so earlier or from home. This is not necessary for non-Muslim visitors who do not join in the prayer.",
        ],
        arrayItemSchema: [
          { id: "text", label: "Item Text", type: "textarea" },
        ],
      },
    ],
    multipurposeRoom: [
      { id: "multipurpose-title", label: "Section Title", type: "text", value: "THE MULTIPURPOSE ROOM" },
      { id: "multipurpose-content", label: "Content", type: "rich-text", value: "There are multipurpose rooms in Fort Dodge Islamic Center in which community gatherings and meetings take place. Visitors are welcomed in one of these rooms before being escorted to the Prayer Halls." },
    ],
    prayerHall: [
      { id: "prayer-title", label: "Section Title", type: "text", value: "THE PRAYER HALL" },
      {
        id: "prayer-items",
        label: "Prayer Hall Items",
        type: "array",
        value: [
          "Before you enter the prayer hall, ensure that your phone is turned on silent, your footwear is removed, and all food and drink items (if any) have been stored or discarded.",
          "Enter the prayer hall quietly. Muslims sit and pray on the floor in the prayer hall. Chairs are available for visitors in the rear of the prayer hall but you are welcome to sit on the floor as well.",
          "If visiting as a group during a time when prayers are taking place, sit together toward the rear of the hall.",
          "If a visitor arrives when the prayer is in progress, he or she should find a place near the rear wall and quietly observe the prayer.",
          "Muslims do not make sacred offerings or carry out blessing of food during prayer. Additionally, there are no sacred or holy objects in the masjid, except copies of the Quran on bookshelves along the side walls or elsewhere in the prayer hall. Note that Quran copies can only be touched by those who have performed wudhu.",
          "The only gestures expected of visitors are to remove their shoes, act respectfully in the prayer hall and silently observe the ritual of prayer.",
        ],
        arrayItemSchema: [
          { id: "text", label: "Item Text", type: "textarea" },
        ],
      },
    ],
    closing: [
      { id: "closing-content", label: "Closing Content", type: "rich-text", value: "Thank you once again for your interest in visiting us. If you have any questions or require clarification, please e-mail us at info@arqum.org. We also invite you to write about your visit experience. Enjoy Your Visit." },
      { id: "contact-email", label: "Contact Email", type: "text", value: "info@arqum.org" },
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
      pageTitle="Edit Visitors Guide Page"
      pageDescription="Edit all sections of the visitors guide page including hero, introduction, dress code, behavior, and prayer hall information."
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
          sectionId="dressCode"
          sectionTitle="Dress Code Section"
          fields={sections.dressCode}
          onUpdate={handleSectionUpdate}
        />

        <SectionEditor
          sectionId="enteringCenter"
          sectionTitle="Entering the Center Section"
          fields={sections.enteringCenter}
          onUpdate={handleSectionUpdate}
        />

        <SectionEditor
          sectionId="multipurposeRoom"
          sectionTitle="Multipurpose Room Section"
          fields={sections.multipurposeRoom}
          onUpdate={handleSectionUpdate}
        />

        <SectionEditor
          sectionId="prayerHall"
          sectionTitle="Prayer Hall Section"
          fields={sections.prayerHall}
          onUpdate={handleSectionUpdate}
        />

        <SectionEditor
          sectionId="closing"
          sectionTitle="Closing Section"
          fields={sections.closing}
          onUpdate={handleSectionUpdate}
        />
      </div>
    </PageEditorLayout>
  );
}

