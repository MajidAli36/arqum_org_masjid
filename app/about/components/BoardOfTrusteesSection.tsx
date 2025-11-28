export default function BoardOfTrusteesSection() {
  const trustees = [
    "Br. Salah Mahjoub",
    "Br. Ashfaq Khokhar",
    "Br. Saleem Baig",
    "Br. Hasan Basri",
    "Br. Ahmed Tamrawi",
  ];

  return (
    <section className="mb-12 sm:mb-16">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
          Financial Oversight
        </p>
        <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
          Members of the Board of Trustees
        </h2>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {trustees.map((trustee, index) => (
            <div
              key={trustee}
              className="group flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-4 transition-all duration-300 hover:border-blue-300 hover:shadow-md sm:p-5"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sky-800 text-white font-semibold">
                {index + 1}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-sky-800 sm:text-sm">
                  Trustee
                </p>
                <p className="text-base font-semibold text-gray-900 sm:text-lg">
                  {trustee}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

