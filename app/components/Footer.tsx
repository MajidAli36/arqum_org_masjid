import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Ramadan", href: "/ramzan" },
  { label: "New Muslims", href: "/new-musilm" },
  { label: "Resources", href: "/resources" },
];

const supportLinks = [
  { label: "Donate", href: "/donate" },
  { label: "Report A Death", href: "/report" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Contact Us", href: "/contact" },
];

const contactDetails = [
  "2414 W. 51st Street, Chicago, IL 60632",
  "info@darularqam.org",
  "(773) 531-5955",
];

export default function Footer() {
  return (
    <footer className="bg-[#F4F6F8] text-[#1F2A37] border-t border-[#E1E6EA]">
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/fortlogos.png"
              alt="Fort Dodge Islamic Center"
              width={200}
              height={80}
              className=" h-16 w-auto"
            />
            <div className="text-sm">
              {/* <p className="uppercase tracking-wide text-[#5A6B7D]">
                Fort Dodge Islamic Center
              </p> */}
              <p className="text-[#6B7C8F]">
                Serving the Chicago Muslim community with compassion and care.
              </p>
            </div>
          </div>
          <div className="space-y-1.5 text-sm text-[#4B5563]">
            {contactDetails.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-3 text-[#1F2A37]">
            Quick Links
          </h3>
          <ul className="space-y-1.5 text-sm text-[#4B5563]">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-[#1F2A37]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-3 text-[#1F2A37]">
            Support & Services
          </h3>
          <ul className="space-y-1.5 text-sm text-[#4B5563]">
            {supportLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-[#1F2A37]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white border-t border-[#E1E6EA]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[#6B7C8F] uppercase tracking-wide">
          <span>© {new Date().getFullYear()} Fort Dodge Islamic Center</span>
          <span>Building faith, service, and community</span>
        </div>
      </div>
    </footer>
  );
}

