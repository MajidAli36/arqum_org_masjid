export default function HeroIntroContent() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl backdrop-blur">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Darul Arqum Islamic Center</p>
          <h1 className="mt-4 text-3xl font-bold uppercase tracking-[0.15em] text-slate-900 md:text-4xl">Report a Death</h1>

          <div className="mt-8 rounded-2xl border-l-4 border-slate-900/60 bg-slate-50 px-6 py-6 text-slate-700">
            <p className="text-lg italic leading-relaxed">
              “Every soul will taste death, and you will only be given your (full) compensation on the Day of Resurrection. So the one
              who is drawn away from the Fire and admitted to Paradise has attained (his desire); and what is the life of this world
              except the enjoyment of delusion.” <span className="font-semibold">Quran 3:185</span>
            </p>
          </div>

          <p className="mt-8 text-base leading-relaxed text-slate-700">
            It is requested that Muslims become familiar with these issues at all times since death can approach anyone at any given time
            or place.
          </p>
        </div>
      </div>
    </section>
  );
}

