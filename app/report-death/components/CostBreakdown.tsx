const costs = [
  { item: 'Cost of Gravesite', cost: '*FREE' },
  { item: 'Washing the body', cost: 'FREE' },
  { item: 'Burial kit, Wood', cost: '$100' },
  { item: 'Opening and closing the grave', cost: '$1000 - $1200' },
  { item: 'Funeral Home (see services description above)', cost: '$3250' },
];

export default function CostBreakdown() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-10">
          <h2 className="text-2xl font-semibold uppercase tracking-wide text-slate-900 sm:text-3xl">Approximate Costs</h2>
          <p className="mt-3 text-sm text-slate-600">Make the cashier&apos;s check payable to Darul Arqum Islamic Center.</p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/60 bg-white">
            <table className="min-w-full divide-y divide-slate-100 text-left text-base text-slate-800">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold uppercase tracking-wide sm:px-6">Items</th>
                  <th className="px-4 py-3 text-right font-semibold uppercase tracking-wide sm:px-6">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {costs.map((row) => (
                  <tr key={row.item}>
                    <td className="px-4 py-4 text-sm sm:px-6 sm:text-base">{row.item}</td>
                    <td className="px-4 py-4 text-right font-semibold sm:px-6">{row.cost}</td>
                  </tr>
                ))}
                <tr className="bg-slate-100 font-semibold">
                  <td className="px-4 py-4 sm:px-6">Total costs for burial in the Sunset Gardens Islamic Cemetery</td>
                  <td className="px-4 py-4 text-right sm:px-6">$3600 - $4850</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-slate-600">
            *There is an additional charge of $350 for non-residents of Ames.
          </p>
        </div>
      </div>
    </section>
  );
}

