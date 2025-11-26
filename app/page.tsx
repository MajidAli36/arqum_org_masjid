import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InfoBanner from "./components/infobanner";
import PrayerTimes from "./components/prayertime";
import DonationSection from "./components/DonationSection";
import FridayPrayers from "./components/Fridayprayer";
import CalendarSection from "./components/calendersection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      <HeroSection />
      <PrayerTimes />
      <FridayPrayers />
      <DonationSection />
      <InfoBanner />
      <CalendarSection />
      <Footer />
    </div>
  );
}
