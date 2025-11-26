import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CostBreakdown from './components/CostBreakdown';
import GuidanceSection from './components/GuidanceSection';
import HeroIntroContent from './components/HeroIntroContent';
import ProcedureSection from './components/ProcedureSection';
import ReportDeathHero from './components/ReportDeathHero';
import SectionDivider from './components/SectionDivider';

export default function ReportDeathPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <ReportDeathHero />
        <SectionDivider />
        <HeroIntroContent />
        <SectionDivider />
        <GuidanceSection />
        <SectionDivider />
        <ProcedureSection />
        <SectionDivider />
        <CostBreakdown />
      </main>
      <Footer />
    </>
  );
}

