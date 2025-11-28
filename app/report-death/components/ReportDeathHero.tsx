import Image from 'next/image';

export default function ReportDeathHero() {
  return (
    <section className="w-full bg-white">
      <Image
        src="/images/fortdoge-masjid.jpg"
        alt="Fort Dodge Islamic Center exterior"
        width={1920}
        height={960}
        className="w-full max-h-[750px] object-cover"
        priority
      />
      <span className="sr-only">Exterior of Fort Dodge Islamic Center</span>
    </section>
  );
}

