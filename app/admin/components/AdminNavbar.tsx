"use client";

import Image from "next/image";
import Link from "next/link";

export default function AdminNavbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="px-6 py-3 flex items-center justify-between">
        {/* Left side: Logo and Admin Dashboard text */}
        <Link href="/admin" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image
            src="/images/fortlogos.png"
            alt="Fort Dodge Islamic Center logo"
            width={400}
            height={100}
            className="h-12 w-auto"
            priority
          />
          <span className="text-gray-800 font-semibold text-base">Admin Dashboard</span>
        </Link>

        {/* Right side: View Site button */}
        <div className="flex items-center gap-4">
          {/* View Site Button */}
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200"
          >
            View Site
          </Link>
        </div>
      </div>
    </nav>
  );
}

