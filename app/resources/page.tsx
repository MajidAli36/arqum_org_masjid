import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ResourcesHero from "./components/ResourcesHero";

const resourcesSections = [
  {
    id: "request-speaker",
    title: "Request a Speaker",
    description:
      "Invite a qualified speaker from Darul Arqam Islamic Center for your school, organization, or community event. Share basic details about the audience, topic, and preferred date so we can best accommodate your request.",
  },
  {
    id: "request-visit",
    title: "Request a Visit",
    description:
      "Plan a guided visit to our center for classes, faith groups, or community organizations. We offer tours of the prayer area, a short presentation on Islam, and time for Q&A, tailored to your group’s needs.",
  },
  {
    id: "visitors-guide",
    title: "Visitors Guide",
    description:
      "Learn what to expect when visiting the masjid for the first time, including dress guidelines, prayer times, etiquette in the prayer hall, and tips for school and community groups.",
    href: "/resources/visitors-guide",
  },
  {
    id: "islamic-prayer",
    title: "Islamic Prayer",
    description:
      "Overview of the daily prayers, how they are performed, and how visitors can respectfully observe. This section can link to printable guides, videos, or recommended beginner resources.",
    href: "/resources/islamic-prayer",
  },
  {
    id: "islamic-school",
    title: "Islamic School",
    description:
      "Information about our weekend or full-time Islamic school programs, class times, curriculum focus, and how to enroll your child or volunteer as a teacher or helper.",
  },
  {
    id: "elections-nominations",
    title: "Elections & Nominations",
    description:
      "Details on community leadership elections, eligibility requirements, the nomination process, and important dates for upcoming elections at the center.",
  },
  {
    id: "apply-renew-membership",
    title: "Apply/Renew Membership",
    description:
      "Become a member or renew your membership with Darul Arqam Islamic Center. Membership helps support our operations and may grant voting rights and other member benefits.",
  },
  {
    id: "by-laws",
    title: "By Laws",
    description:
      "Access the governing by-laws of Darul Arqam Islamic Center, including organizational structure, board responsibilities, and membership guidelines.",
  },
  {
    id: "fundraising-policy",
    title: "Fundraising Policy",
    description:
      "Review our policies for fundraising and solicitation at the masjid, including how to request approval for campaigns and what is and is not permitted on site.",
  },
  {
    id: "meeting-minutes",
    title: "Meeting Minutes",
    description:
      "Browse archived minutes from board and general body meetings so community members can stay informed about key decisions and ongoing initiatives.",
  },
  {
    id: "financial-assistance",
    title: "Financial Assistance",
    description:
      "Learn about local zakat and sadaqah assistance programs, eligibility criteria, and how to confidentially request financial support.",
  },
  {
    id: "request-door-access",
    title: "Request Door Access",
    description:
      "Submit a request for electronic door access (key fob or code) for approved volunteers, teachers, and regular attendees, subject to center policies.",
  },
  {
    id: "reserve-basement",
    title: "Reserve Basement",
    description:
      "Request use of the basement or social hall for classes, meetings, or small events. Include your event type, expected attendance, and preferred dates.",
  },
];

export const metadata = {
  title: "Resources | Darul Arqam Islamic Center",
  description:
    "Central hub for visitor information, community policies, membership, facility requests, and other resources at Darul Arqam Islamic Center.",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="bg-white">
        <ResourcesHero />

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
            <header className="mb-8 text-center sm:mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                Community Resources
              </p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Helpful information, forms, and policies in one place
              </h1>
              <p className="mt-3 max-w-2xl mx-auto text-sm text-gray-600 sm:text-base">
                Use the cards below to find visitor information, request speakers or visits,
                review policies, and access other important documents from Darul Arqam
                Islamic Center.
              </p>
            </header>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-7">
              {resourcesSections.map((section) => {
                const content = (
                  <article
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-32 h-full rounded-3xl border border-gray-100 bg-zinc-50 p-5 shadow-sm shadow-gray-100 transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md sm:p-6"
                  >
                    <h2 className="text-base font-semibold tracking-tight text-gray-900 sm:text-lg">
                      {section.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-[0.94rem]">
                      {section.description}
                    </p>
                    <p className="mt-3 text-[0.7rem] uppercase tracking-[0.18em] text-gray-500">
                      If you already have a form or PDF for this item, you can link it here later.
                    </p>
                  </article>
                );

                return section.href ? (
                  <Link key={section.id} href={section.href}>
                    {content}
                  </Link>
                ) : (
                  content
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

