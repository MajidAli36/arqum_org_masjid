import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-white">
      <Image
        src="/images/arqum.jpg"
        alt="Darul Arqam Islamic Center exterior"
        width={1920}
        height={960}
        className="w-full max-h-[420px] object-cover"
        priority
      />
    </section>
  );
}
