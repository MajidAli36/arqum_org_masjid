import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <header className="w-full bg-white">
      <div className="relative w-full overflow-hidden">
        <div className="relative aspect-[1925/500] w-full">
          <Image
            src="/images/ramzan-aq.png"
            alt="Ramadan Kareem banner"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="space-y-3 border-t border-gray-100 bg-gray-50 px-4 py-4 text-center text-gray-800 sm:space-y-4 sm:px-6 sm:py-6">
        <p className="text-xs leading-relaxed sm:text-sm">
          ISNA and the Fiqh Council of North America have{" "}
          <Link
            href="https://www.fiqhcouncil.org"
            className="font-medium text-blue-700 underline"
            target="_blank"
          >
            announced
          </Link>{" "}
          the first day of Ramadan will be on{" "}
          <span className="font-semibold text-red-600">Saturday, March 1st</span>
          . Taraweeh will begin on Friday, February 28th.
        </p>
        <p className="text-sm font-semibold text-gray-900 sm:text-base">Eid is Sunday, March 30th.</p>
      </div>
    </header>
  );
}

