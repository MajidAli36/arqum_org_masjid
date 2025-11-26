import Link from "next/link";

const zakatMethods = [
  { label: "Online via Mohid", href: "https://www.mohid.com" },
  { label: "Mohid kiosk in the main prayer hall" },
  { label: "Labeled envelopes in both prayer halls (forthcoming)" },
];

export default function ZakatSection() {
  return (
    <section className="rounded-2xl border border-amber-100 bg-white p-4 shadow-lg sm:rounded-3xl sm:p-6 md:p-8">
      <div className="space-y-4 sm:space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 sm:text-sm">
            Zakat-ul-Fitr
          </p>
          <h2 className="mt-1 text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl">
            <span className="block sm:inline">$10 per person</span>
            <span className="hidden sm:inline"> • </span>
            <span className="block mt-1 text-base sm:mt-0 sm:inline sm:text-inherit">
              Due by end of Taraweeh on Friday, March 28th
            </span>
          </h2>
        </div>
        <p className="text-sm text-gray-600 sm:text-base">
          DAIC distributes Zakat-ul-Fitr (Fitrana) to eligible members of our
          community. Please meet the deadline so we can ensure distribution to
          families in need.
        </p>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 sm:rounded-2xl sm:p-6">
          <h3 className="text-lg font-semibold text-amber-900 sm:text-xl">
            Accepted Submission Methods
          </h3>
          <ul className="mt-3 space-y-2.5 text-sm text-amber-950 sm:mt-4 sm:space-y-3 sm:text-base">
            {zakatMethods.map((method) => (
              <li key={method.label} className="flex items-start gap-2.5 sm:gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500 sm:mt-1 sm:h-2.5 sm:w-2.5" />
                {method.href ? (
                  <Link
                    href={method.href}
                    className="break-words text-amber-900 underline decoration-dotted underline-offset-4 transition hover:text-amber-700"
                    target="_blank"
                  >
                    {method.label}
                  </Link>
                ) : (
                  <span className="break-words">{method.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-xs text-gray-500 sm:text-sm">
          Prefer giving to a food distribution charity? Consider trusted partners
          such as the{" "}
          <Link
            href="https://www.amoudfoundation.org/"
            className="font-medium text-amber-700 underline underline-offset-2"
            target="_blank"
          >
            Amoud Foundation
          </Link>
          . DAIC does not endorse specific charities—please do your own due
          diligence.
        </p>
      </div>
    </section>
  );
}

