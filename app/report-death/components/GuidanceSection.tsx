const dyingGuidance = [
  'It is recommended by the Prophet Muhammad (S.A.W.) to do the following:',
  'The dying person should be asked to pronounce, "Laa ilaaha illal Lah." (There is no God but Allah.) before death. The Prophet Muhammad (S.A.W.) said: "Ask your dying fellows to pronounce, \'Laa ilaaha illal Lah.\' (There is no God but Allah.)" [Reported by Imams Muslim, Abu Dawood, At-Tirmithi, An-Nisa’I and Ibn Majah]',
  'The Prophet Muhammad (S.A.W.) also said: "The one whose last words are \'Laa Ilaaha Illal Lah.\' (There is no God but Allah) will enter Paradise." [Reported by Imams Abu Dawood]',
];

const deathSteps = [
  "Close the eyes of the deceased. The Messenger of Allah (S.A.W.) visited Abu Salama after he died and found his eyes open, so he closed them and said, \"When the soul is taken away the eyesight follows it.\" [Reported by Imam Muslim]",
  "Bind the lower jaw so it is held and does not sag.",
  "Cover the body completely with a clean sheet. The Prophet Muhammad (S.A.W.) was wrapped with a striped cloth upon his death. [Reported by Imams Bukhari and Muslim]",
  "Make dua to Allah to forgive the deceased.",
  "Hasten to prepare the body for washing, shrouding, and burial.",
  "Pay the deceased's debts from their money. If there is not enough, family members should cover it. The Prophet Muhammad (S.A.W.) said: \"The believer’s soul is attached to his debt until it is paid.\" [Reported by Imams Ahmad, Ibn Majah, and At-Tirmithi]",
];

export default function GuidanceSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
        <div className="space-y-12">
          <article>
            <h2 className="text-2xl font-semibold uppercase tracking-wide text-slate-900 sm:text-3xl">When a Muslim Is Dying</h2>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-relaxed text-slate-700">
              {dyingGuidance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article>
            <h2 className="text-2xl font-semibold uppercase tracking-wide text-slate-900 sm:text-3xl">When a Muslim Has Died</h2>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-relaxed text-slate-700">
              {deathSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

