import Image from 'next/image';

export default function ReportDeathHero() {
  return (
    <section className="w-full">
      <div className="relative h-[280px] w-full md:h-[420px]">
        <Image
          src="/images/arqum.jpg"
          alt="Darul Arqum Islamic Center dome"
          fill
          className="object-cover"
          priority
        />
        <span className="sr-only">Exterior of Darul Arqum Islamic Center</span>
      </div>
    </section>
  );
}

