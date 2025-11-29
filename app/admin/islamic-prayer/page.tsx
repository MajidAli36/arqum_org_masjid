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

export default function IslamicPrayerPageEditor() {
  const [sections, setSections] = useState<Record<string, SectionField[]>>({
    hero: [
      { id: "hero-image", label: "Hero Image", type: "image", value: "/images/fortdoge-masjid.jpg" },
    ],
    intro: [
      { id: "intro-content", label: "Introduction Content", type: "rich-text", value: "Muslims pray five times a day. The salah (Arabic word for prayer) generally lasts five to ten minutes and is led by the Imam. He leads the congregation from the front and faces towards the direction of Makkah, as does the rest of the congregation. The congregation will form straight lines and act in unison during the entire prayer and follow the motions of the Imam. Here are translations to what's being said during salah:" },
    ],
    standing: [
      { id: "standing-title", label: "Section Title", type: "text", value: "WHILE STANDING" },
      { id: "standing-intro", label: "Introduction", type: "rich-text", value: "While standing, the first chapter of the Quran is recited. This chapter can be translated as follows:" },
      { id: "standing-quote", label: "Quote/Translation", type: "rich-text", value: "\"In the name of Allah, Most Gracious, Most Merciful. Praise be to Allah, Lord of the Worlds. Most Gracious, Most Merciful. Master of the Day of Judgment. Thee (alone) we worship and Thee (alone) we ask for help. Show us the straight path. The path of those whom Thou hast favoured; Not (the path) of those who earn Thine anger nor of those who go astray.\" (1:1-7)" },
      { id: "standing-outro", label: "Outro", type: "rich-text", value: "After the first chapter, any other passage from the Quran is recited. Depending on the time (and type) of the prayers, some recitations are done silently." },
    ],
    bowing: [
      { id: "bowing-title", label: "Section Title", type: "text", value: "WHILE BOWING" },
      { id: "bowing-content", label: "Content", type: "rich-text", value: "Muslims then bow to God and glorify Him. This glorification can be translated as follows: \"Glory be to my Lord, the Almighty.\"" },
    ],
    prostrating: [
      { id: "prostrating-title", label: "Section Title", type: "text", value: "WHILE PROSTRATING" },
      { id: "prostrating-quote", label: "Quote/Translation", type: "rich-text", value: "\"Glory be to my Lord, the most High.\"" },
      { id: "prostrating-content", label: "Content", type: "rich-text", value: "Muslims then sit for a few seconds and prostrate one more time before standing up again. Depending on the time (and type) of the prayer, Muslims repeat this cycle once, twice or thrice in each prayer." },
    ],
    sitting: [
      { id: "sitting-title", label: "Section Title", type: "text", value: "WHILE SITTING" },
      { id: "sitting-intro", label: "Introduction", type: "rich-text", value: "In the end (and also in the middle for some prayers) Muslims sit and testify before God that:" },
      { id: "sitting-quote", label: "Quote/Translation", type: "rich-text", value: "\"All service is for Allah and all acts of worship and good deeds are for Him. Peace and the mercy and blessings of Allah be upon you O Prophet. Peace be upon us and all of Allah's righteous slaves. I bear witness that none has the right to be worshipped except Allah and I bear witness that Muhammad is His slave and Messenger. O Allah exalt Muhammad and the followers of Muhammad, just as you exalted Abraham and the followers of Abraham. Verily you are full of praise and majesty. O Allah send blessings on Muhammad and the family of Muhammad, just as you sent blessings on Abraham and upon the followers of Abraham. Verily you are full of praise and majesty.\"" },
      { id: "sitting-outro", label: "Outro", type: "rich-text", value: "At the very end, Muslims turn their face to the right and the left, sending God's Peace on the angels surrounding them, saying: \"Peace be upon you and the mercy of Allah\"" },
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
      pageTitle="Edit Islamic Prayer Page"
      pageDescription="Edit all sections of the Islamic Prayer page including hero, introduction, and prayer postures."
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
          sectionId="standing"
          sectionTitle="While Standing Section"
          fields={sections.standing}
          onUpdate={handleSectionUpdate}
        />

        <SectionEditor
          sectionId="bowing"
          sectionTitle="While Bowing Section"
          fields={sections.bowing}
          onUpdate={handleSectionUpdate}
        />

        <SectionEditor
          sectionId="prostrating"
          sectionTitle="While Prostrating Section"
          fields={sections.prostrating}
          onUpdate={handleSectionUpdate}
        />

        <SectionEditor
          sectionId="sitting"
          sectionTitle="While Sitting Section"
          fields={sections.sitting}
          onUpdate={handleSectionUpdate}
        />
      </div>
    </PageEditorLayout>
  );
}

