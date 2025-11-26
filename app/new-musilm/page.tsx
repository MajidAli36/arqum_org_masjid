import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewMuslimHero from "./components/NewMuslimHero";
import JourneyIntro from "./components/JourneyIntro";
import FoundationsSection from "./components/FoundationsSection";
import SupportAndCommunitySection from "./components/SupportAndCommunitySection";
import ResourcesSection from "./components/ResourcesSection";
import ExploreFurtherSection from "./components/ExploreFurtherSection";

export const metadata = {
  title: "New Muslim Resources | Darul Arqam Islamic Center",
  description:
    "Guidance, classes, and curated resources to help new Muslims grow in faith with confidence.",
};

export default function NewMuslimPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      <main>
        <NewMuslimHero />
        <JourneyIntro />
        <FoundationsSection />
        <SupportAndCommunitySection />
        <ResourcesSection />
        <ExploreFurtherSection />
      </main>
      <Footer />
    </div>
  );
}

