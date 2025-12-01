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

export default function DonatePageEditor() {
  const [sections, setSections] = useState<Record<string, SectionField[]>>({
    hero: [
      { id: "hero-image", label: "Hero Image", type: "image", value: "/images/fortdoge-masjid.jpg" },
    ],
    intro: [
      { id: "quote", label: "Quranic Quote", type: "textarea", value: "Those who give charity night and day, secretly and openly, have their reward with their Lord. They will have no fear, and they will not grieve." },
      { id: "quote-reference", label: "Quote Reference", type: "text", value: "-Quran 2:274" },
      { id: "intro-content", label: "Introduction Content", type: "rich-text", value: "Fort Dodge Islamic Center is a non-profit organization that provides a variety of religious, educational, and social services to the Muslim community in Ames, Iowa. The center is a vital part of the community, relying on donations from generous individuals and businesses to operate." },
    ],
    need: [
      { id: "need-subtitle", label: "Section Subtitle", type: "text", value: "NEED FOR DONATIONS" },
      { id: "need-title", label: "Section Title", type: "text", value: "Your support sustains vital programs and services" },
      { 
        id: "funds", 
        label: "Donation Funds", 
        type: "array", 
        value: [
          { title: "General Fund", description: "Supports the general operation of the Islamic Center, including maintenance, landscaping, cleaning, utilities, and other day-to-day expenses." },
          { title: "Imam Fund", description: "Goes directly toward paying the Imam's salary. The Imam plays a vital role in serving the community." },
          { title: "Islamic School Fund", description: "Operates and manages the Islamic school — hiring teachers, purchasing supplies, and providing student support." },
          { title: "Sadaqa & Zakat Al-Mal Fund", description: "Helps needy people in Ames through financial assistance, food banks, and other social service programs." },
        ],
        arrayItemSchema: [
          { id: "title", label: "Fund Title", type: "text" },
          { id: "description", label: "Fund Description", type: "textarea" },
        ],
      },
    ],
    options: [
      { id: "options-subtitle", label: "Section Subtitle", type: "text", value: "DONATION OPTIONS" },
      { id: "options-title", label: "Section Title", type: "text", value: "Choose the method that works best for you" },
      { 
        id: "donation-methods", 
        label: "Donation Methods", 
        type: "array", 
        value: [
          { 
            title: "Donation Box", 
            description: "Located in the main prayer hall and sisters' prayer hall. Use designated envelopes to direct your contribution.",
            bullets: "Deposit cash securely in any of the donation boxes.\nClearly mark the envelope with your intended fund."
          },
          { 
            title: "Checks", 
            description: "Write checks payable to Fort Dodge Islamic Center and include the designated fund in the memo line.",
            bullets: ""
          },
          { 
            title: "MOHID Kiosk", 
            description: "Located in the main prayer hall and accepts major credit cards for one-time or recurring donations.",
            bullets: "Select the fund you would like to support directly on the kiosk.\nReceive an instant receipt for your records."
          },
          { 
            title: "MOHID Online", 
            description: "Submit donations via the MOHID online portal. Choose your fund and donate from anywhere.",
            linkLabel: "us.mohid.co/ia/desmoines/daic/masjid/online/donation",
            linkHref: "https://us.mohid.co/ia/desmoines/daic/masjid/online/donation",
            bullets: ""
          },
          { 
            title: "Venmo", 
            description: "Give through Venmo at Fort Dodge Islamic Center.",
            linkLabel: "venmo.com/DarulArqumIslamicCenter",
            linkHref: "https://venmo.com/DarulArqumIslamicCenter",
            bullets: ""
          },
          { 
            title: "PayPal", 
            description: "Donate quickly and securely using PayPal.",
            linkLabel: "paypal.me/daicpaypal",
            linkHref: "https://paypal.me/daicpaypal",
            bullets: ""
          },
          { 
            title: "Direct Transfer to the Bank", 
            description: "Contact our treasurer to set up a direct bank transfer for larger or recurring gifts.",
            linkLabel: "treasurer@arqum.org",
            linkHref: "mailto:treasurer@arqum.org",
            bullets: ""
          },
        ],
        arrayItemSchema: [
          { id: "title", label: "Method Title", type: "text" },
          { id: "description", label: "Description", type: "textarea" },
          { id: "bullets", label: "Bullet Points (one per line)", type: "textarea" },
          { id: "linkLabel", label: "Link Label (optional)", type: "text" },
          { id: "linkHref", label: "Link URL (optional)", type: "url" },
        ],
      },
    ],
    closing: [
      { id: "closing-content", label: "Closing Message", type: "rich-text", value: "Fort Dodge Islamic Center is a vital part of the Muslim community in Ames, Iowa. The center relies on donations from generous individuals and businesses to operate. Your donation helps support programs and services that benefit many people. Jazakum Allah Khairan for your generosity." },
    ],
    giveToday: [
      { id: "give-subtitle", label: "Section Subtitle", type: "text", value: "GIVE TODAY" },
      { id: "give-title", label: "Section Title", type: "text", value: "Click or Scan QR to Donate Now" },
      { id: "give-description", label: "Section Description", type: "textarea", value: "Every contribution sustains programs, outreach, and community services at Fort Dodge Islamic Center." },
      { id: "qr-image", label: "QR Codes Image", type: "image", value: "" },
      { 
        id: "quick-links", 
        label: "Quick Action Links", 
        type: "array", 
        value: [
          { label: "PayPal", href: "https://paypal.me/daicpaypal", description: "Open PayPal donation page" },
          { label: "Venmo", href: "https://venmo.com/DarulArqumIslamicCenter", description: "Open Venmo donation page" },
          { label: "Mohid", href: "https://us.mohid.co/ia/desmoines/daic/masjid/online/donation", description: "Open Mohid donation page" },
        ],
        arrayItemSchema: [
          { id: "label", label: "Link Label", type: "text" },
          { id: "href", label: "Link URL", type: "url" },
          { id: "description", label: "Link Description", type: "text" },
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
    { id: "intro", label: "Introduction", icon: "📝" },
    { id: "need", label: "Need for Donations", icon: "💝" },
    { id: "options", label: "Donation Options", icon: "💳" },
    { id: "closing", label: "Closing Message", icon: "✍️" },
    { id: "giveToday", label: "Give Today", icon: "📱" },
  ];

  const getSectionTitle = (sectionId: string) => {
    const titles: Record<string, string> = {
      hero: "Hero Section",
      intro: "Introduction Section",
      need: "Need for Donations Section",
      options: "Donation Options Section",
      closing: "Closing Message Section",
      giveToday: "Give Today Section",
    };
    return titles[sectionId] || sectionId;
  };

  return (
    <PageEditorLayout
      pageTitle="Edit Donate Page"
      pageDescription="Edit all sections of the donation page including hero, introduction, donation options, and closing message."
    >
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <div className="w-full overflow-x-auto horizontal-scroll">
            <nav className="inline-flex min-w-max scroll-px-4 px-8 py-2 md:px-0" aria-label="Tabs">
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

          {activeTab === "intro" && (
            <SectionEditor
              sectionId="intro"
              sectionTitle={getSectionTitle("intro")}
              fields={sections.intro}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "need" && (
            <SectionEditor
              sectionId="need"
              sectionTitle={getSectionTitle("need")}
              fields={sections.need}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "options" && (
            <SectionEditor
              sectionId="options"
              sectionTitle={getSectionTitle("options")}
              fields={sections.options}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "closing" && (
            <SectionEditor
              sectionId="closing"
              sectionTitle={getSectionTitle("closing")}
              fields={sections.closing}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "giveToday" && (
            <SectionEditor
              sectionId="giveToday"
              sectionTitle={getSectionTitle("giveToday")}
              fields={sections.giveToday}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}
        </div>
      </div>
    </PageEditorLayout>
  );
}

