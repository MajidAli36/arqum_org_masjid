import Image from "next/image";
import { resolveStorageImageUrl } from "../../../lib/storage.service";

export default function HeroSection() {
  const resolvedImage =
    resolveStorageImageUrl("/images/fortdoge-masjid.jpg", {
      bucket: "Public",
      folder: "Home",
    }) ?? null;

  return (
    <section className="w-full bg-white">
      {resolvedImage && (
        <Image
          src={resolvedImage}
          alt="Fort Dodge Islamic Center exterior"
          width={1920}
          height={960}
          className="w-full max-h-[750px] object-cover"
          priority
        />
      )}
    </section>
  );
}
