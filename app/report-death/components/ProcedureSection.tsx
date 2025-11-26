const informationNeeded = [
  "The caller’s name and phone number",
  "Name and location of deceased",
  "Birth date and date of death",
  "If hospice/doctor has been notified",
];

const funeralServices = [
  "Transferring the deceased from the hospital to the funeral home",
  "Use of bathing room facilities for washing the deceased",
  "Casket for transporting the deceased",
  "Funeral van for one day",
];

export default function ProcedureSection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold uppercase tracking-wide text-slate-900 sm:text-3xl">Procedure</h2>
          <p className="text-base leading-relaxed text-slate-700">
            Preparing the dead for burial is a <span className="font-semibold">Farḍ Kifayah</span> duty, meaning that if some Muslims properly
            carry out this duty, others are exempt. The process includes bathing the deceased, wrapping the body with a shroud, praying,
            and burying the body. At Darul Arqum Islamic Center, the Cemetery and Burial Committee coordinates arrangements in consultation
            with the family.
          </p>

          <ol className="space-y-6 pl-5 text-base leading-relaxed text-slate-700">
            <li className="marker:text-slate-900">
              The family members should contact <span className="font-semibold">Br. Yassir Obeid @ (515) 441-1918</span> as soon as possible to make the
              necessary arrangements for preparing the dead for burial.
            </li>
            <li className="marker:text-slate-900">
              Next, the family members should call <span className="font-semibold">Adams Funeral Home in Ames @ (515) 232-5121</span> to make arrangements to
              pick up the deceased from the hospital and transport to Adams Funeral Home for washing and preparing the body for burial. The address is:
              <span className="font-semibold"> 502 Douglas Ave, Ames, IA</span>
            </li>
            <li className="marker:text-slate-900">
              The funeral director will take the following information from the family member:
              <ul className="mt-3 list-disc space-y-1 pl-5">
                {informationNeeded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>

            <li className="marker:text-slate-900">
              Services provided by the Funeral Home:
              <ul className="mt-3 list-disc space-y-1 pl-5">
                {funeralServices.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>

            <li className="marker:text-slate-900">
              The ritual bathing and preparation of the body is done by Muslim Brother(s)/Sister(s) in conjunction with a funeral home. Men for the men and
              women for the women. It is permissible for either spouse to wash the other after death.
            </li>
            <li className="marker:text-slate-900">
              The funeral director and staff will take the deceased to the masjid for the Janazah Prayer then to the cemetery for the burial.
            </li>
            <li className="marker:text-slate-900">
              Approximate cost of burial (may change) [See below]. Make checks payable to <span className="font-semibold">Darul Arqum Islamic Center</span> for
              the total cost of burial.
            </li>
          </ol>

          <p className="text-sm italic text-slate-500">Source: Authentic Step by Step Illustrated Janazah Guide</p>
        </div>
      </div>
    </section>
  );
}

