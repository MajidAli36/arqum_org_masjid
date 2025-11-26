import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ResourcesHero from "../components/ResourcesHero";

export const metadata = {
  title: "Elections & Nominations | Darul Arqam Islamic Center",
  description:
    "Information about the DAIC Board of Directors election, nomination process, membership requirements, and ways to renew your membership.",
};

export default function ElectionsNominationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="bg-white">
        <ResourcesHero />

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
            <section className="rounded-3xl border border-gray-200 bg-zinc-50/60 px-5 py-5 sm:px-7 sm:py-6 shadow-sm">
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                DAIC Board of Directors Election
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                The DAIC Board of Directors Election will be held on Sunday,
                September 28th 2025 after Dhuhr Prayer. Nomination forms are
                available on the DAIC bulletin boards and via the link below:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                <li>
                  <a
                    href="/files/board-of-directors-nomination-form.pdf"
                    className="font-medium text-sky-700 underline underline-offset-2"
                  >
                    Board of Directors Nomination Form
                  </a>
                </li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                If you would like to nominate someone, please complete the
                appropriate form, and submit it by Isha prayer on Friday,
                September 26th.
              </p>
            </section>

            <section className="mt-10 border-t border-gray-200 pt-8 sm:mt-12 sm:pt-10">
              <h2 className="text-xl font-semibold tracking-[0.11em] text-sky-700 sm:text-2xl">
                MEMBERSHIP &amp; VOTING
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                To vote in the upcoming election you must be a DAIC member. The
                membership dues are <span className="font-semibold">$30</span>{" "}
                per person for a one-year membership. You can renew your
                membership in one of the following ways:
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-6 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                <li>
                  <span className="font-semibold">Donation Box:</span> Drop off
                  an envelope in the Islamic Center Donation Box with your NAME
                  and &quot;MEMBERSHIP&quot; written on the envelope.
                </li>
                <li>
                  <span className="font-semibold">Mohid Kiosk:</span> Select the
                  Membership option on the kiosk and follow the instructions.
                </li>
                <li>
                  <span className="font-semibold">Online:</span> Membership dues
                  can also be paid through the Islamic Center website. To pay
                  dues online go to{" "}
                  <a
                    href="https://www.arqum.org"
                    className="font-medium text-sky-700 underline underline-offset-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.arqum.org
                  </a>{" "}
                  and press the donate button, then choose DAIC Membership in
                  the category and follow the instructions.
                </li>
              </ul>
            </section>

            <section className="mt-10 border-t border-gray-200 pt-8 sm:mt-12 sm:pt-10">
              <h2 className="text-xl font-semibold tracking-[0.11em] text-sky-700 sm:text-2xl">
                QUESTIONS
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                For any further questions contact DAIC Treasurer at{" "}
                <a
                  href="mailto:treasurer@arqum.org"
                  className="font-medium text-sky-700 underline underline-offset-2"
                >
                  treasurer@arqum.org
                </a>
                .
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


