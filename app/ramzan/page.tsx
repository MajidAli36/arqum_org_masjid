import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import CommunityIftars from "./components/CommunityIftars";
import HeroBanner from "./components/HeroBanner";
import TafsirSeries from "./components/TafsirSeries";
import ZakatSection from "./components/ZakatSection";
import {
  getRamzanContent,
  RamzanContent,
  RamzanContentJson,
} from "@/lib/ramzan.service";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = generateSEOMetadata({
  title: "Ramadan",
  description:
    "Ramadan resources and programs at Fort Dodge Islamic Center. Find information about daily tafsir series, community iftars, zakat ul-fitr, and special Ramadan activities for the Muslim community in Fort Dodge, Iowa.",
  path: "/ramzan",
  keywords: [
    "Ramadan Fort Dodge",
    "Ramadan programs",
    "iftar community",
    "zakat ul-fitr",
    "Ramadan tafsir",
    "Islamic month of fasting",
    "Ramadan activities Iowa",
  ],
});

function getSections(ramzan: RamzanContent | null): RamzanContentJson {
  const root = (ramzan?.data ?? {}) as RamzanContentJson;

  // If there's a nested `data` object, that's where sections live.
  if (root.data && typeof root.data === "object") {
    return root.data as RamzanContentJson;
  }

  // Otherwise, assume flat shape.
  return root;
}

export default async function RamzanPage() {
  const ramzan = await getRamzanContent();
  const sections = getSections(ramzan);

  const heroConfig =
    // Prefer Home-style "heroSection" key if present.
    (sections as any).heroSection ?? sections.hero ?? null;
  const lessonsConfig = sections.daily_lessons ?? null;
  const zakatConfig = sections.zakat_ul_fitr ?? null;
  const iftarsConfig = sections.community_iftars ?? null;

  const heroData = (heroConfig?.data ?? null) as any;
  const lessonsData = (lessonsConfig?.data ?? null) as any;
  const zakatData = (zakatConfig?.data ?? null) as any;
  const iftarsData = (iftarsConfig?.data ?? null) as any;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <HeroBanner data={heroData} />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-6 sm:space-y-10 sm:px-6 sm:py-8 md:space-y-12 md:px-8 md:py-12">
        <ZakatSection data={zakatData} />
        <TafsirSeries data={lessonsData} />
        <CommunityIftars data={iftarsData} />
      </main>
      <Footer />
    </div>
  );
}
