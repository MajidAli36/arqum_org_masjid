import Image from "next/image";

export default function NewMuslimHero() {
  return (
    <section className="w-full bg-white">
      <Image
        src="/images/arqum.jpg"
        alt="Darul Arqam Islamic Center exterior"
        width={1920}
        height={960}
        priority
        className="h-56 w-full object-cover sm:h-[420px]"
      />
    </section>
  );
}




