import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import CommunityIftars from "./components/CommunityIftars";
import HeroBanner from "./components/HeroBanner";
import TafsirSeries from "./components/TafsirSeries";
import ZakatSection from "./components/ZakatSection";

export default function RamzanPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <HeroBanner />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-6 sm:space-y-10 sm:px-6 sm:py-8 md:space-y-12 md:px-8 md:py-12">
        <ZakatSection />
        <TafsirSeries />
        <CommunityIftars />
      </main>
      <Footer />
    </div>
  );
}
