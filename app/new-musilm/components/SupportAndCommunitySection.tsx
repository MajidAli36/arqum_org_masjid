export default function SupportAndCommunitySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6 sm:py-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Learning and Support
          </p>
          <div className="mt-4 rounded-3xl border border-gray-100 bg-white p-5 shadow-lg shadow-gray-100 sm:p-6">
            <ul className="space-y-6 text-base text-gray-800">
              <li className="rounded-2xl bg-slate-50 p-5">
                <p className="font-semibold text-gray-900">
                  24-Hour Hotline for Non-Muslims and New Muslims
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  Toll-Free: 1-800-662-ISLAM (4752)
                </p>
              </li>
              <li className="rounded-2xl bg-slate-50 p-5">
                <p className="font-semibold text-gray-900">
                  New Muslim Academy (
                  <a
                    href="https://www.newmuslimacademy.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-700 underline-offset-4 hover:underline"
                  >
                    https://www.newmuslimacademy.org/
                  </a>
                  )
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  Andrew&apos;s story (YouTube Video) New Muslim Academy is an online platform designed to support new Muslims in
                  learning about their faith. It offers free access to structured video classes, webinars, and live interactions with
                  qualified mentors and instructors.
                </p>
              </li>
              <li className="rounded-2xl bg-slate-50 p-5">
                <p className="font-semibold text-gray-900">
                  Zad Academy Program (
                  <a
                    href="https://zad-academy.com/en"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-700 underline-offset-4 hover:underline"
                  >
                    https://zad-academy.com/en
                  </a>
                  )
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  Embark on a 2-year learning journey with free online program. Learn the core principles, beliefs, and teachings of
                  Islam taught by renowned scholars, all from the comfort of your own home.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Connect with your community
          </p>
          <div className="mt-4 rounded-3xl border border-gray-100 bg-zinc-50 p-5 shadow-inner sm:p-6">
            <p className="text-base text-gray-800">
              Find a local mosque near you using The Islamic Finder (
              <a
                href="https://www.islamicfinder.org/"
                target="_blank"
                rel="noreferrer"
                className="text-sky-700 underline-offset-4 hover:underline"
              >
                https://www.islamicfinder.org/
              </a>
              ).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


