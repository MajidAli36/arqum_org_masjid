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

export default function NewMuslimPageEditor() {
  const [sections, setSections] = useState<Record<string, SectionField[]>>({
    hero: [
      { id: "hero-image", label: "Hero Image", type: "image", value: "/images/fortdoge-masjid.jpg" },
    ],
    journeyIntro: [
      { id: "intro-subtitle", label: "Section Subtitle", type: "text", value: "Fort Dodge Islamic Center" },
      { id: "intro-title", label: "Section Title", type: "text", value: "Welcome to Your Islamic Journey" },
      { id: "intro-quote", label: "Quote", type: "textarea", value: "Whoever follows a path in the pursuit of knowledge, Allah will make a path to Paradise easy for him." },
      { id: "intro-quote-source", label: "Quote Source", type: "text", value: "(Bukhaari)" },
      { id: "intro-content-1", label: "Introduction Content - Paragraph 1", type: "rich-text", value: "It is our pleasure to accompany you on this important path to deepening your knowledge of Islam. The Prophet Muhammad (peace and blessings be upon him) emphasized that seeking knowledge is a fundamental duty for every Muslim, and that the scholars are the heirs of the Prophets—passing on the priceless inheritance of guidance." },
      { id: "intro-content-2", label: "Introduction Content - Paragraph 2", type: "rich-text", value: "To assist you on this journey, we have compiled authentic resources rooted in the Quran—the word of Allah—and the Sunnah, the example of Prophet Muhammad (peace be upon him). Become familiar with these essentials as you continue to nurture your faith and understanding." },
    ],
    foundations: [
      { id: "foundations-subtitle", label: "Section Subtitle", type: "text", value: "The Foundations" },
      { id: "foundations-title", label: "Section Title", type: "text", value: "Build steady knowledge roots" },
      { id: "foundations-description", label: "Section Description", type: "textarea", value: "Start with reliable resources covering the Quran, the Sunnah, and the shining example of Prophet Muhammad ﷺ." },
      {
        id: "quranic-resources",
        label: "Quranic Resources",
        type: "array",
        value: [
          {
            title: "The Clear Quran by Dr. Mustafa Khattab",
            webUrl: "https://online.theclearquran.org/surah",
            mobileUrl: "https://theclearquran.org/tcq-app/",
            description: "",
          },
          {
            title: "Quran translation",
            webUrl: "http://www.islamicstudies.info/quran/saheeh/",
            mobileUrl: "",
            description: "",
          },
          {
            title: "An annotated linguistic resource which shows the Arabic grammar, syntax, and morphology for each word in the Holy Quran",
            webUrl: "http://corpus.quran.com/wordbyword.jsp",
            mobileUrl: "",
            description: "",
          },
          {
            title: "Quran recitation/memorizing – various reciters",
            webUrl: "https://quranexplorer.com",
            mobileUrl: "",
            description: "",
          },
        ],
        arrayItemSchema: [
          { id: "title", label: "Resource Title", type: "text" },
          { id: "webUrl", label: "Web URL", type: "url" },
          { id: "mobileUrl", label: "Mobile App URL (optional)", type: "url" },
          { id: "description", label: "Description (optional)", type: "textarea" },
        ],
      },
      {
        id: "sunnah-resources",
        label: "Sunnah Resources",
        type: "array",
        value: [
          {
            title: "The Sealed Nectar [PDF]– book on the biography of the Prophet",
            url: "",
            description: "",
          },
          {
            title: "Riyad us Saleheen",
            url: "https://sunnah.com/riyadussalihin",
            description: "A comprehensive list of says of the Prophet",
          },
        ],
        arrayItemSchema: [
          { id: "title", label: "Resource Title", type: "text" },
          { id: "url", label: "URL (optional)", type: "url" },
          { id: "description", label: "Description (optional)", type: "textarea" },
        ],
      },
    ],
    support: [
      { id: "support-subtitle", label: "Learning and Support Subtitle", type: "text", value: "Learning and Support" },
      {
        id: "support-items",
        label: "Support Items",
        type: "array",
        value: [
          {
            title: "24-Hour Hotline for Non-Muslims and New Muslims",
            phone: "1-800-662-ISLAM (4752)",
            url: "",
            description: "",
          },
          {
            title: "New Muslim Academy",
            phone: "",
            url: "https://www.newmuslimacademy.org/",
            description: "Andrew's story (YouTube Video) New Muslim Academy is an online platform designed to support new Muslims in learning about their faith. It offers free access to structured video classes, webinars, and live interactions with qualified mentors and instructors.",
          },
          {
            title: "Zad Academy Program",
            phone: "",
            url: "https://zad-academy.com/en",
            description: "Embark on a 2-year learning journey with free online program. Learn the core principles, beliefs, and teachings of Islam taught by renowned scholars, all from the comfort of your own home.",
          },
        ],
        arrayItemSchema: [
          { id: "title", label: "Title", type: "text" },
          { id: "phone", label: "Phone Number (optional)", type: "text" },
          { id: "url", label: "URL (optional)", type: "url" },
          { id: "description", label: "Description (optional)", type: "textarea" },
        ],
      },
      { id: "community-subtitle", label: "Connect with Community Subtitle", type: "text", value: "Connect with your community" },
      { id: "community-text", label: "Community Text", type: "rich-text", value: "Find a local mosque near you using The Islamic Finder (https://www.islamicfinder.org/)." },
    ],
    resources: [
      { id: "resources-subtitle", label: "Section Subtitle", type: "text", value: "Resources on Islam" },
      { id: "resources-title", label: "Section Title", type: "text", value: "Study, review, and grow with confidence" },
      {
        id: "resource-items",
        label: "Resource Items",
        type: "array",
        value: [
          {
            title: "The New Muslim Guide",
            pdfUrl: "https://www.newmuslimguide.com/en/download/",
            hardCopyUrl: "https://www.newmuslimguide.com/en/order/",
            wikiUrl: "",
            description: "Simple rules and important Islamic guidelines for new Muslims in all aspects of life. This exquisitely illustrated guide presents you with the first step and the foundation stage in learning about this great religion, which is undoubtedly the best blessing Allah has bestowed on upon man.",
          },
          {
            title: "Tell Me How To Pray",
            pdfUrl: "https://www.newmuslimguide.com/en/wp-content/uploads/2020/10/Tell-Me-How-to-Pray.pdf",
            hardCopyUrl: "https://www.newmuslimguide.com/en/order/",
            wikiUrl: "https://en.wikipedia.org/wiki/Salah",
            description: "Learn the basics of praying, from making wudu to positioning your hands in prayer. The basics are covered for you in this detailed guide so that you can gain a better understanding.",
          },
          {
            title: "Tell Me About Allah",
            pdfUrl: "",
            hardCopyUrl: "https://www.newmuslimguide.com/en/order/",
            wikiUrl: "",
            description: "This little gem of a book guides you through all the 99 of Allah (SWT) so you can get to know Allah (SWT) In sha Allah.",
          },
          {
            title: "Tell Me About Islam",
            pdfUrl: "",
            hardCopyUrl: "https://www.newmuslimguide.com/en/order/",
            wikiUrl: "",
            description: "This guide takes you through the six articles of faith in detail, followed by the five pillars and some further aspects of Islam.",
          },
          {
            title: "New Muslim Guide",
            pdfUrl: "",
            hardCopyUrl: "",
            wikiUrl: "",
            url: "https://www.newmuslimguide.com/",
            description: "",
          },
        ],
        arrayItemSchema: [
          { id: "title", label: "Resource Title", type: "text" },
          { id: "pdfUrl", label: "PDF URL (optional)", type: "url" },
          { id: "hardCopyUrl", label: "Hard Copy URL (optional)", type: "url" },
          { id: "wikiUrl", label: "Wiki URL (optional)", type: "url" },
          { id: "url", label: "General URL (optional)", type: "url" },
          { id: "description", label: "Description (optional)", type: "textarea" },
        ],
      },
    ],
    explore: [
      { id: "explore-subtitle", label: "Section Subtitle", type: "text", value: "Explore further" },
      { id: "explore-title", label: "Section Title", type: "text", value: "Expand your circle of learning" },
      { id: "explore-description", label: "Section Description", type: "textarea", value: "We hope these resources guide you on your path to gaining beneficial knowledge and bringing you closer to Allah." },
      {
        id: "explore-items",
        label: "Explore Items",
        type: "array",
        value: [
          {
            title: "GainPeace",
            url: "https://gainpeace.com",
            description: "is a non-profit organization whose main goal is to educate the general public about Islam and clarify many misconceptions they may hold.",
          },
          {
            title: "Islamic Circle of North America",
            url: "https://www.icna.org",
            description: "The Mission of ICNA is to seek the pleasure of Allah (SWT) through the struggle for Iqamat-ud-Deen (application of the Islamic system of life) as spelled out in the Qur'an and the Sunnah of Prophet Muhammad (SAW).",
          },
          {
            title: "Islam Web",
            url: "http://www.islamweb.net/en/",
            description: "includes a comprehensive Islamic resource offering a wide range of content including fatwas, articles, Quran recitations, lectures, and prayer times.",
          },
          {
            title: "Discover Islam",
            url: "http://www.ediscoverislam.com/",
            description: "offers a platform with comprehensive resources about Islam, the Quran, and Prophet Muhammad. The site includes sections on the Quran, the purpose of life, scientific aspects of Islam, prophets and messengers, and various Islamic resources. It also provides free literature.",
          },
          {
            title: "New Muslims",
            url: "https://www.newmuslims.com/",
            description: "It is for new Muslim reverts who would like to learn their new religion in an easy and systematic way. Lessons here are organized under levels. So first you go to lesson 1 under level 1. Study it and then take its quiz. When you pass it move on to lesson 2 and so on. Best wishes.",
          },
        ],
        arrayItemSchema: [
          { id: "title", label: "Resource Title", type: "text" },
          { id: "url", label: "URL", type: "url" },
          { id: "description", label: "Description (optional)", type: "textarea" },
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
    { id: "journeyIntro", label: "Journey Introduction", icon: "📖" },
    { id: "foundations", label: "Foundations", icon: "🏛️" },
    { id: "support", label: "Support & Community", icon: "🤝" },
    { id: "resources", label: "Resources", icon: "📚" },
    { id: "explore", label: "Explore Further", icon: "🔍" },
  ];

  const getSectionTitle = (sectionId: string) => {
    const titles: Record<string, string> = {
      hero: "Hero Section",
      journeyIntro: "Journey Introduction Section",
      foundations: "Foundations Section",
      support: "Support and Community Section",
      resources: "Resources Section",
      explore: "Explore Further Section",
    };
    return titles[sectionId] || sectionId;
  };

  return (
    <PageEditorLayout
      pageTitle="Edit New Muslim Page"
      pageDescription="Edit all sections of the new Muslim page including journey introduction, foundations, support, and resources."
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

          {activeTab === "journeyIntro" && (
            <SectionEditor
              sectionId="journeyIntro"
              sectionTitle={getSectionTitle("journeyIntro")}
              fields={sections.journeyIntro}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "foundations" && (
            <SectionEditor
              sectionId="foundations"
              sectionTitle={getSectionTitle("foundations")}
              fields={sections.foundations}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "support" && (
            <SectionEditor
              sectionId="support"
              sectionTitle={getSectionTitle("support")}
              fields={sections.support}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "resources" && (
            <SectionEditor
              sectionId="resources"
              sectionTitle={getSectionTitle("resources")}
              fields={sections.resources}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "explore" && (
            <SectionEditor
              sectionId="explore"
              sectionTitle={getSectionTitle("explore")}
              fields={sections.explore}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}
        </div>
      </div>
    </PageEditorLayout>
  );
}

