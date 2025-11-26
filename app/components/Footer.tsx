import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Ramadan", href: "/ramadan" },
  { label: "New Muslims", href: "/new-muslims" },
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
              src="/images/aq-logo.png"
              alt="Darul Arqam Islamic Center"
              width={56}
              height={56}
              className="object-contain"
            />
            <div className="text-sm">
              <p className="uppercase tracking-wide text-[#5A6B7D]">
                Darul Arqam Islamic Center
              </p>
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
          <span>© {new Date().getFullYear()} Darul Arqam Islamic Center</span>
          <span>Building faith, service, and community</span>
        </div>
      </div>
    </footer>
  );
}

