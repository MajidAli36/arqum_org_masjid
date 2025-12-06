import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CostBreakdown from "./components/CostBreakdown";
import GuidanceSection from "./components/GuidanceSection";
import HeroIntroContent from "./components/HeroIntroContent";
import ProcedureSection from "./components/ProcedureSection";
import ReportDeathHero from "./components/ReportDeathHero";
import SectionDivider from "./components/SectionDivider";
import {
  getReportDeathContent,
  ReportDeathContent,
  ReportDeathContentJson,
} from "@/lib/report-death.service";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = generateSEOMetadata({
  title: "Report a Death",
  description:
    "Guidance and procedures for reporting a death at Fort Dodge Islamic Center. Learn about Islamic funeral services, burial procedures, cost breakdown, and how to request assistance during this difficult time.",
  path: "/report-death",
  keywords: [
    "report death Fort Dodge",
    "Islamic funeral services",
    "Muslim burial procedures",
    "funeral services Iowa",
    "Islamic death rites",
    "funeral cost breakdown",
  ],
});

function getSections(reportDeath: ReportDeathContent | null): ReportDeathContentJson {
  const root = (reportDeath?.data ?? {}) as ReportDeathContentJson;

  // If there's a nested `data` object, that's where sections live.
  if (root.data && typeof root.data === "object") {
    return root.data as ReportDeathContentJson;
  }

  // Otherwise, assume flat shape.
  return root;
}

export default async function ReportDeathPage() {
  const reportDeath = await getReportDeathContent();
  const sections = getSections(reportDeath);

  const heroConfig = sections.hero ?? null;
  const introConfig = sections.intro ?? null;
  const guidanceConfig = sections.guidance ?? null;
  const procedureConfig = sections.procedure ?? null;
  const costConfig = sections.costBreakdown ?? null;

  const heroData = (heroConfig?.data ?? null) as any;
  const introData = (introConfig?.data ?? null) as any;
  const guidanceData = (guidanceConfig?.data ?? null) as any;
  const procedureData = (procedureConfig?.data ?? null) as any;
  const costData = (costConfig?.data ?? null) as any;

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <ReportDeathHero data={heroData} />
        <HeroIntroContent data={introData} />
        <SectionDivider />
        <GuidanceSection data={guidanceData} />
        <SectionDivider />
        <ProcedureSection data={procedureData} />
        <SectionDivider />
        <CostBreakdown data={costData} />
      </main>
      <Footer />
    </>
  );
}

