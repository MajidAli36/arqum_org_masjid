import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ResourcesHero from "../components/ResourcesHero";

export const metadata = {
  title: "Islamic School | Fort Dodge Islamic Center",
  description:
    "Vision, mission, and administration information for Fort Dodge Islamic School, including principal position details and contact information.",
};

export default function IslamicSchoolPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="bg-white">
        <ResourcesHero />

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
            <section className="rounded-3xl border border-gray-200 bg-zinc-50/60 px-5 py-5 sm:px-7 sm:py-6 shadow-sm">
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Islamic School
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                Fort Dodge Islamic School (DAIS) is our weekend educational
                program dedicated to providing quality Islamic education to
                children in our community.
              </p>
            </section>

            <section className="mt-10 border-t border-gray-200 pt-8 sm:mt-12 sm:pt-10">
              <h2 className="text-xl font-semibold tracking-[0.11em] text-sky-700 sm:text-2xl">
                VISION
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                DAIS&apos; vision is to cultivate tomorrow&apos;s leaders;
                proud, and practicing Muslims who will positively shape our
                families, communities, nation, and the world inshaAllah.
              </p>
            </section>

            <section className="mt-10 border-t border-gray-200 pt-8 sm:mt-12 sm:pt-10">
              <h2 className="text-xl font-semibold tracking-[0.11em] text-sky-700 sm:text-2xl">
                MISSION
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                DAIS &mdash; a Sunday school &mdash; provides Islamic education
                based on the Quran and Sunnah to elementary and middle school
                students at DAIC. DAIS prepares students to meet the challenges
                of our changing world by teaching them Quran, Islamic studies,
                and Arabic in an enriching and stimulating Islamic environment.
              </p>
            </section>

            <section className="mt-10 border-t border-gray-200 pt-8 sm:mt-12 sm:pt-10">
              <h2 className="text-xl font-semibold tracking-[0.11em] text-sky-700 sm:text-2xl">
                HIRING A PRINCIPAL FOR THE ISLAMIC SCHOOL
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                We are looking for a principal for our Islamic school. Please
                check the{" "}
                <a
                  href="/files/dais-principal-position-description.pdf"
                  className="font-medium text-sky-700 underline underline-offset-2"
                >
                  principal position description
                </a>{" "}
                and apply by sending your CV and any supported documents to:{" "}
                <a
                  href="mailto:education@arqum.org"
                  className="font-medium text-sky-700 underline underline-offset-2"
                >
                  education@arqum.org
                </a>
                .
              </p>
            </section>

            <section className="mt-10 border-t border-gray-200 pt-8 sm:mt-12 sm:pt-10">
              <h2 className="text-xl font-semibold tracking-[0.11em] text-sky-700 sm:text-2xl">
                ADMINISTRATION
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                <span className="font-semibold">Principal:</span> (To be
                announced)
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                For more information e-mail us at{" "}
                <a
                  href="mailto:education@arqum.org"
                  className="font-medium text-sky-700 underline underline-offset-2"
                >
                  education@arqum.org
                </a>
                .
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                Information about the starting date of the school and the
                deadline for registration will be posted as soon as they are
                available.
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


