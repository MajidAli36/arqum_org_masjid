import Link from "next/link";

export default function IntroductionSection() {
  return (
    <section className="mb-12 sm:mb-16">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            About Us
          </p>
          <h1 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            Welcome to Fort Dodge Islamic Center
          </h1>
        </div>

        <div className="space-y-4 text-base leading-relaxed text-gray-700 sm:text-lg">
          <p>
            The Fort Dodge Islamic Center is a non-profit organization founded
            in 2002 by Muslims to create a place for prayer, learning, and
            socialization. The center is a vibrant and welcoming community
            that is committed to providing resources and support for its members
            to live according to Islamic principles.
          </p>

          <div className="rounded-lg border border-sky-100 bg-sky-50 p-4 sm:p-5">
            <p className="text-sm text-gray-700 sm:text-base">
              You can find the{" "}
              <Link
                href="https://drive.google.com/file/d/1xFQ6g0plhCzVIaCvglVPC1nykuICqRWL/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-800 transition-colors"
              >
                "By Laws"
              </Link>{" "}
              under{" "}
              <Link
                href="/resources"
                className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-800 transition-colors"
              >
                Resources &gt; By Laws
              </Link>{" "}
              in the menu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

