import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import DonationHero from "./components/DonationHero";
import DonationIntro from "./components/DonationIntro";
import NeedForDonations from "./components/NeedForDonations";
import DonationOptions from "./components/DonationOptions";
import DonationSection from "@/app/components/DonationSection";

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <DonationHero />
      <main className="mx-auto w-full max-w-5xl space-y-8 px-4 py-10 sm:space-y-10 sm:px-6 lg:space-y-12 lg:px-8 lg:py-14">
        <DonationIntro />
        <NeedForDonations />
        <DonationOptions />
        <section className="rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/70 ring-1 ring-slate-100">
          <p className="text-base text-slate-600">
            Darul Arqam Islamic Center is a vital part of the Muslim community
            in Ames, Iowa. The center relies on donations from generous
            individuals and businesses to operate. Your donation helps support
            programs and services that benefit many people. Jazakum Allah
            Khairan for your generosity.
          </p>
        </section>
        <DonationSection />
      </main>
      <Footer />
    </div>
  );
}


