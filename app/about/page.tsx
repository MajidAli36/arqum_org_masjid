import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AboutHero from "./components/AboutHero";
import IntroductionSection from "./components/IntroductionSection";
import ProgramsServicesSection from "./components/ProgramsServicesSection";
import GovernanceStructureSection from "./components/GovernanceStructureSection";
import BoardOfDirectorsSection from "./components/BoardOfDirectorsSection";
import BoardOfTrusteesSection from "./components/BoardOfTrusteesSection";
import FormationSection from "./components/FormationSection";

export const metadata = {
  title: "About Us | Fort Dodge Islamic Center",
  description:
    "Learn about Fort Dodge Islamic Center, a non-profit organization founded in 2002, providing prayer, learning, and community services to Muslims in the area.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="bg-white">
        <AboutHero />

        <section className="bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
            <IntroductionSection />
            <ProgramsServicesSection />
            <GovernanceStructureSection />
            <BoardOfDirectorsSection />
            <BoardOfTrusteesSection />
            <FormationSection />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

