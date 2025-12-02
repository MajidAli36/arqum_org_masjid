import Image from "next/image";
import { resolveStorageImageUrl } from "../../lib/storage.service";

// Shape of the hero section data coming from Supabase.
// All fields are optional so the component can handle partial JSON safely.
export type HeroSectionData = {
  title?: string;
  subtitle?: string;
  heroImage?: string;
  heroImageAlt?: string;
};

export type HeroSectionProps = {
  data?: HeroSectionData | null;
};

export default function HeroSection({ data }: HeroSectionProps) {
  const resolvedImage = resolveStorageImageUrl(data?.heroImage, {
    bucket: "Public",
    folder: "Home",
  });

  console.log("[Hero Image URL]", resolvedImage);

  const imageAlt =
    data?.heroImageAlt ?? "Fort Dodge Islamic Center exterior";

  return (
    <section className="w-full bg-white">
      {resolvedImage && (
        <Image
          src={resolvedImage}
          alt={imageAlt}
          width={1920}
          height={960}
          className="w-full max-h-[750px] object-cover"
          priority
        />
      )}
      {(data?.title || data?.subtitle) && (
        <div className="mx-auto max-w-5xl px-4 py-6 text-center text-slate-900">
          {data?.title && (
            <h1 className="text-3xl font-semibold sm:text-4xl">
              {data.title}
            </h1>
          )}
          {data?.subtitle && (
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              {data.subtitle}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
