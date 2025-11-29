"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type MenuItem = {
  label: string;
  href: string;
  icon?: string;
  children?: { label: string; href: string; tabId?: string }[];
};

const menuItems: MenuItem[] = [
  { label: "Home", href: "/admin/home" },
  { label: "About", href: "/admin/about" },
  { label: "Donate", href: "/admin/donate" },
  { label: "New Muslim", href: "/admin/new-muslim" },
  { label: "Ramadan", href: "/admin/ramadan" },
  { label: "Report a Death", href: "/admin/report-death" },
  {
    label: "Resources",
    href: "/admin/resources",
    children: [
      { label: "Request a Speaker", href: "/admin/request-a-speaker" },
      { label: "Request a Visit", href: "/admin/request-a-visit" },
      { label: "Visitors Guide", href: "/admin/visitors-guide" },
      { label: "Islamic Prayer", href: "/admin/islamic-prayer" },
      { label: "Islamic School", href: "/admin/islamic-school" },
      { label: "Elections & Nominations", href: "/admin/elections-nominations" },
      { label: "Apply/Renew Membership", href: "/admin/apply-renew-membership" },
      { label: "By Laws", href: "/admin/by-laws" },
      { label: "Fundraising Policy", href: "/admin/fundraising-policy" },
      { label: "Meeting Minutes", href: "/admin/meeting-minutes" },
      { label: "Financial Assistance", href: "/admin/financial-assistance" },
      { label: "Request Door Access", href: "/admin/request-door-access" },
      { label: "Reserve Basement", href: "/admin/reserve-basement" },
    ],
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({
    resources: pathname === "/admin/resources",
  });

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label.toLowerCase()]: !prev[label.toLowerCase()],
    }));
  };


  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-[calc(100vh-4rem)] fixed left-0 top-16 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-bold text-sky-900 mb-4">Page Editors</h2>
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const active = isActive(item.href);
            const hasChildren = item.children && item.children.length > 0;
            const isDropdownOpen = openDropdowns[item.label.toLowerCase()] || false;

            if (hasChildren) {
              return (
                <div key={item.label}>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-md transition-colors duration-200 relative ${
                      active
                        ? "bg-blue-100 text-sky-900 font-bold border-l-4 border-blue-600"
                        : "text-sky-900 hover:bg-gray-100 font-semibold"
                    }`}
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-2">
                      {item.children!.map((child) => {
                        const childActive = pathname === child.href;
                        return (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`block px-4 py-2 rounded-md text-sm transition-colors duration-200 ${
                              childActive
                                ? "text-sky-900 font-semibold bg-blue-50"
                                : "text-gray-700 hover:text-sky-900 hover:bg-gray-50"
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`block px-4 py-2.5 rounded-md transition-colors duration-200 relative ${
                  active
                    ? "bg-blue-100 text-sky-900 font-bold border-l-4 border-blue-600"
                    : "text-sky-900 hover:bg-gray-100 font-semibold"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

