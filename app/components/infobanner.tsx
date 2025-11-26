import Image from "next/image";

const bannerCards = [
  "Our Islamic Center is solely dependent on generous donations. Your support keeps every program running.",
  "Need help or know someone who needs help? Try our IhsanConnect line so we can support the community together.",
];

const iconItems = [
  { label: "By Laws", src: "/images/laws-aq.png" },
  { label: "Report a Death", src: "/images/phone-aq.png" },
  { label: "Financial Assistance", src: "/images/financial-aq.png" },
  { label: "Request a Visit", src: "/images/request-aq.png" },
  { label: "Visitor Guide", src: "/images/visit-aq.png" },
  { label: "New Muslim", src: "/images/new-aq.png" },
  { label: "Become a Member", src: "/images/member-aq.png" },
  { label: "Monthly Prayer Times", src: "/images/time-aq.png" },
  { label: "Meeting Minutes", src: "/images/meetin-aq.png" },
  { label: "Contact Us", src: "/images/contact-aq.png" },
  { label: "Reserve Basement", src: "/images/reserve-aq.png" },
  { label: "Request Door Access", src: "/images/door-aq.png" },
];

export default function InfoBanner() {
  return (
    <section className="w-full mt-10">
      <div className="bg-[#5E7A8A] px-4 py-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-4 md:flex-row md:gap-6">
          {bannerCards.map((text) => (
            <div
              key={text}
              className="flex-1 rounded-md bg-[#EFF4F7] px-5 py-4 text-center text-sm text-[#355160] shadow md:text-left"
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#F3F3F3] px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-6">
          {iconItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center space-y-3 text-center text-xs font-semibold text-[#2E2E2E] leading-tight transition-transform hover:-translate-y-1"
            >
              <Image
                src={item.src}
                alt={item.label}
                width={56}
                height={56}
                className="object-contain"
              />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}