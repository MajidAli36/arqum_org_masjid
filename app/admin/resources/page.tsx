"use client";

import { useState, useEffect } from "react";
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

export default function ResourcesPageEditor() {
  const [sections, setSections] = useState<Record<string, SectionField[]>>({
    hero: [
      { id: "hero-image", label: "Hero Image", type: "image", value: "/images/fortdoge-masjid.jpg" },
    ],
    mainContent: [
      { id: "content-subtitle", label: "Section Subtitle", type: "text", value: "Community Resources" },
      { id: "content-title", label: "Section Title", type: "text", value: "Helpful information, forms, and policies in one place" },
      { id: "content-description", label: "Description", type: "textarea", value: "Use the cards below to find visitor information, request speakers or visits, review policies, and access other important documents from Fort Dodge Islamic Center Islamic Center." },
    ],
    requestSpeaker: [
      { id: "title", label: "Title", type: "text", value: "Request a Speaker" },
      { id: "description", label: "Description", type: "textarea", value: "Invite a qualified speaker from Fort Dodge Islamic Center for your school, organization, or community event. Share basic details about the audience, topic, and preferred date so we can best accommodate your request." },
    ],
    requestVisit: [
      { id: "title", label: "Title", type: "text", value: "Request a Visit" },
      { id: "description", label: "Description", type: "textarea", value: "Plan a guided visit to our center for classes, faith groups, or community organizations. We offer tours of the prayer area, a short presentation on Islam, and time for Q&A, tailored to your group's needs." },
    ],
    visitorsGuide: [
      { id: "title", label: "Title", type: "text", value: "Visitors Guide" },
      { id: "description", label: "Description", type: "textarea", value: "Learn what to expect when visiting the masjid for the first time, including dress guidelines, prayer times, etiquette in the prayer hall, and tips for school and community groups." },
    ],
    islamicPrayer: [
      { id: "title", label: "Title", type: "text", value: "Islamic Prayer" },
      { id: "description", label: "Description", type: "textarea", value: "Overview of the daily prayers, how they are performed, and how visitors can respectfully observe. This section can link to printable guides, videos, or recommended beginner resources." },
    ],
    islamicSchool: [
      { id: "title", label: "Title", type: "text", value: "Islamic School" },
      { id: "description", label: "Description", type: "textarea", value: "Information about our weekend or full-time Islamic school programs, class times, curriculum focus, and how to enroll your child or volunteer as a teacher or helper." },
    ],
    electionsNominations: [
      { id: "title", label: "Title", type: "text", value: "Elections & Nominations" },
      { id: "description", label: "Description", type: "textarea", value: "Details on community leadership elections, eligibility requirements, the nomination process, and important dates for upcoming elections at the center." },
    ],
    applyRenewMembership: [
      { id: "title", label: "Title", type: "text", value: "Apply/Renew Membership" },
      { id: "description", label: "Description", type: "textarea", value: "Become a member or renew your membership with Fort Dodge Islamic Center. Membership helps support our operations and may grant voting rights and other member benefits." },
    ],
    byLaws: [
      { id: "title", label: "Title", type: "text", value: "By Laws" },
      { id: "description", label: "Description", type: "textarea", value: "Access the governing by-laws of Fort Dodge Islamic Center, including organizational structure, board responsibilities, and membership guidelines." },
    ],
    fundraisingPolicy: [
      { id: "title", label: "Title", type: "text", value: "Fundraising Policy" },
      { id: "description", label: "Description", type: "textarea", value: "Review our policies for fundraising and solicitation at the masjid, including how to request approval for campaigns and what is and is not permitted on site." },
    ],
    meetingMinutes: [
      { id: "title", label: "Title", type: "text", value: "Meeting Minutes" },
      { id: "description", label: "Description", type: "textarea", value: "Browse archived minutes from board and general body meetings so community members can stay informed about key decisions and ongoing initiatives." },
    ],
    financialAssistance: [
      { id: "title", label: "Title", type: "text", value: "Financial Assistance" },
      { id: "description", label: "Description", type: "textarea", value: "Learn about local zakat and sadaqah assistance programs, eligibility criteria, and how to confidentially request financial support." },
    ],
    requestDoorAccess: [
      { id: "title", label: "Title", type: "text", value: "Request Door Access" },
      { id: "description", label: "Description", type: "textarea", value: "Submit a request for electronic door access (key fob or code) for approved volunteers, teachers, and regular attendees, subject to center policies." },
    ],
    reserveBasement: [
      { id: "title", label: "Title", type: "text", value: "Reserve Basement" },
      { id: "description", label: "Description", type: "textarea", value: "Request use of the basement or social hall for classes, meetings, or small events. Include your event type, expected attendance, and preferred dates." },
    ],
  });

  const [activeTab, setActiveTab] = useState<string>("hero");

  useEffect(() => {
    // Check if there's a tab ID stored in sessionStorage from sidebar navigation
    if (typeof window !== "undefined") {
      const storedTab = sessionStorage.getItem("activeResourceTab");
      if (storedTab) {
        setActiveTab(storedTab);
        // Clear it after using it so it doesn't persist on refresh
        sessionStorage.removeItem("activeResourceTab");
      }
    }
  }, []);

  const handleSectionUpdate = (sectionId: string, fields: SectionField[]) => {
    setSections((prev) => ({
      ...prev,
      [sectionId]: fields,
    }));
  };

  const tabs = [
    { id: "hero", label: "Hero Section", icon: "🖼️" },
    { id: "mainContent", label: "Main Content", icon: "📝" },
    { id: "requestSpeaker", label: "Request a Speaker", icon: "🎤" },
    { id: "requestVisit", label: "Request a Visit", icon: "📍" },
    { id: "visitorsGuide", label: "Visitors Guide", icon: "📖" },
    { id: "islamicPrayer", label: "Islamic Prayer", icon: "🕐" },
    { id: "islamicSchool", label: "Islamic School", icon: "🎓" },
    { id: "electionsNominations", label: "Elections & Nominations", icon: "🗳️" },
    { id: "applyRenewMembership", label: "Apply/Renew Membership", icon: "👥" },
    { id: "byLaws", label: "By Laws", icon: "📄" },
    { id: "fundraisingPolicy", label: "Fundraising Policy", icon: "💝" },
    { id: "meetingMinutes", label: "Meeting Minutes", icon: "⏰" },
    { id: "financialAssistance", label: "Financial Assistance", icon: "💰" },
    { id: "requestDoorAccess", label: "Request Door Access", icon: "🚪" },
    { id: "reserveBasement", label: "Reserve Basement", icon: "📅" },
  ];

  const getSectionTitle = (sectionId: string) => {
    const titles: Record<string, string> = {
      hero: "Hero Section",
      mainContent: "Main Content Section",
      requestSpeaker: "Request a Speaker Section",
      requestVisit: "Request a Visit Section",
      visitorsGuide: "Visitors Guide Section",
      islamicPrayer: "Islamic Prayer Section",
      islamicSchool: "Islamic School Section",
      electionsNominations: "Elections & Nominations Section",
      applyRenewMembership: "Apply/Renew Membership Section",
      byLaws: "By Laws Section",
      fundraisingPolicy: "Fundraising Policy Section",
      meetingMinutes: "Meeting Minutes Section",
      financialAssistance: "Financial Assistance Section",
      requestDoorAccess: "Request Door Access Section",
      reserveBasement: "Reserve Basement Section",
    };
    return titles[sectionId] || sectionId;
  };

  return (
    <PageEditorLayout
      pageTitle="Edit Resources Page"
      pageDescription="Edit all sections of the resources page including hero, main content, and all resource sections."
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

          {activeTab === "mainContent" && (
            <SectionEditor
              sectionId="mainContent"
              sectionTitle={getSectionTitle("mainContent")}
              fields={sections.mainContent}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "requestSpeaker" && (
            <SectionEditor
              sectionId="requestSpeaker"
              sectionTitle={getSectionTitle("requestSpeaker")}
              fields={sections.requestSpeaker}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "requestVisit" && (
            <SectionEditor
              sectionId="requestVisit"
              sectionTitle={getSectionTitle("requestVisit")}
              fields={sections.requestVisit}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "visitorsGuide" && (
            <SectionEditor
              sectionId="visitorsGuide"
              sectionTitle={getSectionTitle("visitorsGuide")}
              fields={sections.visitorsGuide}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "islamicPrayer" && (
            <SectionEditor
              sectionId="islamicPrayer"
              sectionTitle={getSectionTitle("islamicPrayer")}
              fields={sections.islamicPrayer}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "islamicSchool" && (
            <SectionEditor
              sectionId="islamicSchool"
              sectionTitle={getSectionTitle("islamicSchool")}
              fields={sections.islamicSchool}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "electionsNominations" && (
            <SectionEditor
              sectionId="electionsNominations"
              sectionTitle={getSectionTitle("electionsNominations")}
              fields={sections.electionsNominations}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "applyRenewMembership" && (
            <SectionEditor
              sectionId="applyRenewMembership"
              sectionTitle={getSectionTitle("applyRenewMembership")}
              fields={sections.applyRenewMembership}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "byLaws" && (
            <SectionEditor
              sectionId="byLaws"
              sectionTitle={getSectionTitle("byLaws")}
              fields={sections.byLaws}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "fundraisingPolicy" && (
            <SectionEditor
              sectionId="fundraisingPolicy"
              sectionTitle={getSectionTitle("fundraisingPolicy")}
              fields={sections.fundraisingPolicy}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "meetingMinutes" && (
            <SectionEditor
              sectionId="meetingMinutes"
              sectionTitle={getSectionTitle("meetingMinutes")}
              fields={sections.meetingMinutes}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "financialAssistance" && (
            <SectionEditor
              sectionId="financialAssistance"
              sectionTitle={getSectionTitle("financialAssistance")}
              fields={sections.financialAssistance}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "requestDoorAccess" && (
            <SectionEditor
              sectionId="requestDoorAccess"
              sectionTitle={getSectionTitle("requestDoorAccess")}
              fields={sections.requestDoorAccess}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}

          {activeTab === "reserveBasement" && (
            <SectionEditor
              sectionId="reserveBasement"
              sectionTitle={getSectionTitle("reserveBasement")}
              fields={sections.reserveBasement}
              onUpdate={handleSectionUpdate}
              alwaysExpanded={true}
            />
          )}
        </div>
      </div>
    </PageEditorLayout>
  );
}
