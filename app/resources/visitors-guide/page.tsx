import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ResourcesHero from "../components/ResourcesHero";

export const metadata = {
  title: "Visitors Guide | Darul Arqam Islamic Center",
  description:
    "Visitor guidelines for Darul Arqam Islamic Center, including dress code, entering the center, multipurpose room etiquette, and behavior in the prayer hall.",
};

export default function VisitorsGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="bg-white">
        <ResourcesHero />

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
            <div className="rounded-3xl border border-gray-200 bg-zinc-50/60 px-5 py-5 sm:px-7 sm:py-6 shadow-sm">
              <p className="text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
              Thank you for your interest in visiting Darul Arqam Islamic
              Center. Our center welcomes all visitors and request that the
              following guidelines are closely followed:
              </p>
            </div>

            <section className="mt-10 border-t border-gray-200 pt-8 sm:mt-12 sm:pt-10">
              <h1 className="text-xl font-semibold tracking-[0.11em] text-sky-700 sm:text-2xl">
                DRESS CODE
              </h1>
              <ul className="mt-4 list-disc space-y-3 pl-6 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                <li>
                  Clothing should be modest for both men and women. This means
                  an ankle length skirt or trousers, which should not be tight
                  fitting or translucent, together with a long sleeved and
                  high-necked top. A headscarf (of any color) is encouraged for
                  women.
                </li>
                <li>
                  Before entering the prayer hall one must remove any footwear
                  and place it on a rack. Clean and presentable socks,
                  stockings, or tights are therefore a good idea.
                </li>
              </ul>
            </section>

            <section className="mt-10 border-t border-gray-200 pt-8 sm:mt-12 sm:pt-10">
              <h2 className="text-xl font-semibold tracking-[0.11em] text-sky-700 sm:text-2xl">
                ENTERING THE CENTER
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-6 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                <li>
                  Visitors may be greeted by the Arabic greeting &quot;As-salam
                  Alaikum&quot; which means &quot;peace be upon you.&quot; The
                  answer, if the visitor chooses to use it, is
                  &quot;Wa alaikum-as-salam&quot;, which means &quot;peace be
                  upon you too&quot;.
                </li>
                <li>
                  Do not offer, or expect, to shake hands with people of the
                  opposite sex.
                </li>
                <li>
                  Before entering the prayer hall or prayer room, Muslim men and
                  women perform wudhu or cleansing ablutions if they have not
                  already done so earlier or from home. This is not necessary
                  for non-Muslim visitors who do not join in the prayer.
                </li>
              </ul>
            </section>

            <section className="mt-10 border-t border-gray-200 pt-8 sm:mt-12 sm:pt-10">
              <h2 className="text-xl font-semibold tracking-[0.11em] text-sky-700 sm:text-2xl">
                THE MULTIPURPOSE ROOM
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                There are multipurpose rooms in Darul Arqam Islamic Center in
                which community gatherings and meetings take place. Visitors are
                welcomed in one of these rooms before being escorted to the
                Prayer Halls.
              </p>
            </section>

            <section className="mt-10 border-t border-gray-200 pt-8 sm:mt-12 sm:pt-10">
              <h2 className="text-xl font-semibold tracking-[0.11em] text-sky-700 sm:text-2xl">
                THE PRAYER HALL
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-6 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
                <li>
                  Before you enter the prayer hall, ensure that your phone is
                  turned on silent, your footwear is removed, and all food and
                  drink items (if any) have been stored or discarded.
                </li>
                <li>
                  Enter the prayer hall quietly. Muslims sit and pray on the
                  floor in the prayer hall. Chairs are available for visitors in
                  the rear of the prayer hall but you are welcome to sit on the
                  floor as well.
                </li>
                <li>
                  If visiting as a group during a time when prayers are taking
                  place, sit together toward the rear of the hall.
                </li>
                <li>
                  If a visitor arrives when the prayer is in progress, he or she
                  should find a place near the rear wall and quietly observe the
                  prayer.
                </li>
                <li>
                  Muslims do not make sacred offerings or carry out blessing of
                  food during prayer. Additionally, there are no sacred or holy
                  objects in the masjid, except copies of the Quran on
                  bookshelves along the side walls or elsewhere in the prayer
                  hall. Note that Quran copies can only be touched by those who
                  have performed wudhu.
                </li>
                <li>
                  The only gestures expected of visitors are to remove their
                  shoes, act respectfully in the prayer hall and silently
                  observe the ritual of prayer.
                </li>
              </ul>
            </section>

            <p className="mt-12 border-t border-gray-200 pt-8 text-sm leading-relaxed text-gray-800 sm:text-[0.95rem]">
              Thank you once again for your interest in visiting us. If you have
              any questions or require clarification, please e-mail us at{" "}
              <a
                href="mailto:info@arqum.org"
                className="font-medium text-sky-700 underline underline-offset-2"
              >
                info@arqum.org
              </a>
              . We also invite you to write about your visit experience. Enjoy
              Your Visit.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


