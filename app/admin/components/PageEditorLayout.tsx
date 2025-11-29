"use client";

import { type ReactNode } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

type PageEditorLayoutProps = {
  children: ReactNode;
  pageTitle: string;
  pageDescription?: string;
};

export default function PageEditorLayout({
  children,
  pageTitle,
  pageDescription,
}: PageEditorLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-50">
      <AdminNavbar />
      <div className="flex pt-16">
        <AdminSidebar />
        <main className="flex-1 ml-64 min-h-[calc(100vh-4rem)] p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-sky-900 mb-2">{pageTitle}</h1>
              {pageDescription && (
                <p className="text-gray-600">{pageDescription}</p>
              )}
            </div>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

