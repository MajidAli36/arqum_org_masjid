export default function FoundationsSection() {
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-10 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            The Foundations
          </p>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
            Build steady knowledge roots
          </h2>
          <p className="mt-4 max-w-3xl text-base text-gray-600 sm:text-lg">
            Start with reliable resources covering the Quran, the Sunnah, and the shining example of Prophet Muhammad ﷺ.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-gray-100 bg-white p-5 shadow-lg shadow-gray-100 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white font-semibold">
                01
              </span>
              <div>
                <p className="text-base font-semibold uppercase tracking-wide text-slate-700">
                  Quranic Resources
                </p>
              </div>
            </div>
            <ul className="mt-6 space-y-4 text-sm text-gray-700">
              <li className="rounded-2xl bg-slate-50 p-4">
                <p className="text-base font-medium text-gray-900">
                  The Clear Quran by Dr. Mustafa Khattab
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  (Web:{" "}
                  <a
                    href="https://online.theclearquran.org/surah"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-700 underline-offset-4 hover:underline"
                  >
                    https://online.theclearquran.org/surah
                  </a>
                  , Mobile App:{" "}
                  <a
                    href="https://theclearquran.org/tcq-app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-700 underline-offset-4 hover:underline"
                  >
                    https://theclearquran.org/tcq-app/
                  </a>
                  )
                </p>
              </li>
              <li className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-gray-700">
                  Quran translation:{" "}
                  <a
                    href="http://www.islamicstudies.info/quran/saheeh/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-700 underline-offset-4 hover:underline"
                  >
                    http://www.islamicstudies.info/quran/saheeh/
                  </a>
                </p>
              </li>
              <li className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-gray-700">
                  An annotated linguistic resource which shows the Arabic grammar, syntax, and morphology for each word in the Holy
                  Quran (
                  <a
                    href="http://corpus.quran.com/wordbyword.jsp"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-700 underline-offset-4 hover:underline"
                  >
                    http://corpus.quran.com/wordbyword.jsp
                  </a>
                  )
                </p>
              </li>
              <li className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-gray-700">
                  Quran recitation/memorizing – various reciters (
                  <a
                    href="https://quranexplorer.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-700 underline-offset-4 hover:underline"
                  >
                    Quranexplorer.com
                  </a>
                  )
                </p>
              </li>
            </ul>
          </article>

          <article className="rounded-3xl border border-gray-100 bg-white p-5 shadow-lg shadow-gray-100 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white font-semibold">
                02
              </span>
              <div>
                <p className="text-base font-semibold uppercase tracking-wide text-slate-700">
                  Sunnah Resources
                </p>
                <p className="text-sm text-gray-600">
                  example of Prophet Muhammad, peace be upon him
                </p>
              </div>
            </div>
            <ul className="mt-6 space-y-4 text-sm text-gray-700">
              <li className="rounded-2xl bg-slate-50 p-4">
                <p className="text-base font-medium text-gray-900">
                  The Sealed Nectar [PDF]– book on the biography of the Prophet
                </p>
              </li>
              <li className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-gray-700">
                  Riyad us Saleheen [
                  <a
                    href="https://sunnah.com/riyadussalihin"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-700 underline-offset-4 hover:underline"
                  >
                    https://sunnah.com/riyadussalihin
                  </a>
                  ] – A comprehensive list of says of the Prophet
                </p>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}


