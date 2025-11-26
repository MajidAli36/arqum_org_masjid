const needs = [
  {
    title: "General Fund",
    description:
      "Supports the general operation of the Islamic Center, including maintenance, landscaping, cleaning, utilities, and other day-to-day expenses.",
  },
  {
    title: "Imam Fund",
    description:
      "Goes directly toward paying the Imam's salary. The Imam plays a vital role in serving the community.",
  },
  {
    title: "Islamic School Fund",
    description:
      "Operates and manages the Islamic school — hiring teachers, purchasing supplies, and providing student support.",
  },
  {
    title: "Sadaqa & Zakat Al-Mal Fund",
    description:
      "Helps needy people in Ames through financial assistance, food banks, and other social service programs.",
  },
];

export default function NeedForDonations() {
  return (
    <section className="space-y-6 rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/70 ring-1 ring-slate-100 sm:p-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 sm:text-sm">
          Need for Donations
        </p>
        <h2 className="mt-2 text-xl font-semibold text-slate-900 sm:mt-3 sm:text-3xl">
          Your support sustains vital programs and services
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {needs.map(({ title, description }) => (
          <div
            key={title}
            className="flex h-full flex-col rounded-2xl border border-slate-100 p-5 shadow-md shadow-slate-200/60"
          >
            <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
              {title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


