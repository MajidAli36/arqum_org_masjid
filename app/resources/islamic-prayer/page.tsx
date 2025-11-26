import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ResourcesHero from "../components/ResourcesHero";

export const metadata = {
  title: "Islamic Prayer | Darul Arqam Islamic Center",
  description:
    "Overview of the daily salah (Islamic prayer), its postures, and what is recited while standing, bowing, prostrating, and sitting.",
};

export default function IslamicPrayerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="bg-white">
        <ResourcesHero />

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
            <div className="rounded-3xl border border-gray-200 bg-zinc-50/60 px-5 py-5 sm:px-7 sm:py-6 shadow-sm">
              <p className="text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                Muslims pray five times a day. The salah (Arabic word for
                prayer) generally lasts five to ten minutes and is led by the
                Imam. He leads the congregation from the front and faces towards
                the direction of Makkah, as does the rest of the congregation.
                The congregation will form straight lines and act in unison
                during the entire prayer and follow the motions of the Imam.
                Here are translations to what&apos;s being said during salah:
              </p>
            </div>

            <section className="mt-10 border-t border-gray-200 pt-8 sm:mt-12 sm:pt-10">
              <h1 className="text-xl font-semibold tracking-[0.11em] text-sky-700 sm:text-2xl">
                WHILE STANDING
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                While standing, the first chapter of the Quran is recited. This
                chapter can be translated as follows:
              </p>
              <p className="mt-4 text-center text-sm italic leading-relaxed text-gray-800 sm:text-[0.95rem]">
                &quot;In the name of Allah, Most Gracious, Most Merciful. Praise
                be to Allah, Lord of the Worlds. Most Gracious, Most Merciful.
                Master of the Day of Judgment. Thee (alone) we worship and Thee
                (alone) we ask for help. Show us the straight path. The path of
                those whom Thou hast favoured; Not (the path) of those who earn
                Thine anger nor of those who go astray.&quot; (1:1-7)
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                After the first chapter, any other passage from the Quran is
                recited. Depending on the time (and type) of the prayers, some
                recitations are done silently.
              </p>
            </section>

            <section className="mt-10 border-t border-gray-200 pt-8 sm:mt-12 sm:pt-10">
              <h2 className="text-xl font-semibold tracking-[0.11em] text-sky-700 sm:text-2xl">
                WHILE BOWING
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                Muslims then bow to God and glorify Him. This glorification can
                be translated as follows:&nbsp;
                <span className="italic">
                  &quot;Glory be to my Lord, the Almighty.&quot;
                </span>
              </p>
            </section>

            <section className="mt-10 border-t border-gray-200 pt-8 sm:mt-12 sm:pt-10">
              <h2 className="text-xl font-semibold tracking-[0.11em] text-sky-700 sm:text-2xl">
                WHILE PROSTRATING
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                Muslims glorify God as follows:&nbsp;
                <span className="italic">
                  &quot;Glory be to my Lord, the most High.&quot;
                </span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                Muslims then sit for a few seconds and prostrate one more time
                before standing up again. Depending on the time (and type) of
                the prayer, Muslims repeat this cycle once, twice or thrice in
                each prayer.
              </p>
            </section>

            <section className="mt-10 border-t border-gray-200 pt-8 sm:mt-12 sm:pt-10">
              <h2 className="text-xl font-semibold tracking-[0.11em] text-sky-700 sm:text-2xl">
                WHILE SITTING
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                In the end (and also in the middle for some prayers) Muslims sit
                and testify before God that:
              </p>
              <p className="mt-4 text-center text-sm italic leading-relaxed text-gray-800 sm:text-[0.95rem]">
                &quot;All service is for Allah and all acts of worship and good
                deeds are for Him. Peace and the mercy and blessings of Allah be
                upon you O Prophet. Peace be upon us and all of Allah&apos;s
                righteous slaves. I bear witness that none has the right to be
                worshipped except Allah and I bear witness that Muhammad is His
                slave and Messenger. O Allah exalt Muhammad and the followers of
                Muhammad, just as you exalted Abraham and the followers of
                Abraham. Verily you are full of praise and majesty. O Allah send
                blessings on Muhammad and the family of Muhammad, just as you
                sent blessings on Abraham and upon the followers of Abraham.
                Verily you are full of praise and majesty.&quot;
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                At the very end, Muslims turn their face to the right and the
                left, sending God&apos;s Peace on the angels surrounding them,
                saying:&nbsp;
                <span className="italic">
                  &quot;Peace be upon you and the mercy of Allah&quot;
                </span>
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


