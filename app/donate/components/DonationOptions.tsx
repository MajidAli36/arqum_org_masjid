const options = [
  {
    title: "Donation Box",
    description:
      "Boxes are located in the main prayer hall and sisters’ prayer hall. Use designated envelopes to direct your contribution.",
    bullets: [
      "Deposit cash securely in any of the donation boxes.",
      "Clearly mark the envelope with your intended fund.",
    ],
  },
  {
    title: "Checks",
    description:
      "Write checks payable to Fort Dodge Islamic Center and include the designated fund in the memo line.",
  },
  {
    title: "MOHID Kiosk",
    description:
      "Located in the main prayer hall and accepts major credit cards for one-time or recurring donations.",
    bullets: [
      "Select the fund you would like to support directly on the kiosk.",
      "Receive an instant receipt for your records.",
    ],
  },
  {
    title: "MOHID Online",
    description:
      "Submit donations via the MOHID online portal. Choose your fund and donate from anywhere.",
    linkLabel: "us.mohid.co/ia/desmoines/daic/masjid/online/donation",
    linkHref:
      "https://us.mohid.co/ia/desmoines/daic/masjid/online/donation",
  },
  {
    title: "Venmo",
    description: "Give through Venmo at Fort Dodge Islamic Center.",
    linkLabel: "venmo.com/DarulArqumIslamicCenter",
    linkHref: "https://venmo.com/DarulArqumIslamicCenter",
  },
  {
    title: "PayPal",
    description: "Donate quickly and securely using PayPal.",
    linkLabel: "paypal.me/daicpaypal",
    linkHref: "https://paypal.me/daicpaypal",
  },
  {
    title: "Direct Transfer to the Bank",
    description:
      "Contact our treasurer to set up a direct bank transfer for larger or recurring gifts.",
    linkLabel: "treasurer@arqum.org",
    linkHref: "mailto:treasurer@arqum.org",
  },
];

export default function DonationOptions() {
  return (
    <section className="space-y-6 rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/70 ring-1 ring-slate-100 sm:p-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 sm:text-sm">
          Donation Options
        </p>
        <h2 className="mt-2 text-xl font-semibold text-slate-900 sm:mt-3 sm:text-3xl">
          Choose the method that works best for you
        </h2>
      </div>

      <div className="space-y-5">
        {options.map(
          ({ title, description, bullets, linkLabel, linkHref }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-100 p-5 shadow-md shadow-slate-200/60"
            >
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                {title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>

              {bullets && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}

              {linkHref && linkLabel && (
                <a
                  href={linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex max-w-full flex-wrap gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-900"
                >
                  <span className="break-all">{linkLabel}</span>
                  <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          )
        )}
      </div>
    </section>
  );
}


