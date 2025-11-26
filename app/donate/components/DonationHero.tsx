import Image from "next/image";

export default function DonationHero() {
  return (
    <section className="relative isolate">
      <div className="relative h-[260px] w-full overflow-hidden bg-slate-900 sm:h-[320px] md:h-[420px]">
        <Image
          src="/images/arqum.jpg"
          alt="Darul Arqam Islamic Center dome"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-95"
        />
        <div className="absolute inset-0 bg-slate-900/65" />
      </div>

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-5xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-22">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-amber-200 sm:text-xs">
            Support Your Masjid
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-white sm:mt-3 sm:text-4xl lg:text-5xl">
            Donate to Darul Arqam Islamic Center
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-100 sm:mt-3 sm:text-lg">
            Your generosity keeps religious, educational, and social services
            thriving for our community in Ames, Iowa.
          </p>
        </div>
      </div>
    </section>
  );
}


