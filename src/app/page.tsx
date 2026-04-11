"use client";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import { useState } from "react";
import { translations } from "@/lib/translations";

export default function Home() {
  const [lang, setLang] = useState<"en" | "bn">("en");
  const t = translations[lang];

  return (
    <main className={`flex flex-col md:flex-row min-h-screen w-full relative transition-colors duration-700 ease-in-out ${lang === "en" ? "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" : "bg-gradient-to-br from-green-950 via-teal-900 to-emerald-900"}`}>
      
      {/* Sticky Header for Mobile */}
      <div className="sticky top-0 z-50 flex sm:hidden items-center justify-end px-6 py-4 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg w-full transition-colors duration-700">
        <button 
          onClick={() => setLang(lang === "en" ? "bn" : "en")}
          className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-semibold py-1.5 px-4 rounded-full shadow-md hover:bg-white/30 transition-all cursor-pointer"
          aria-label="Toggle Language"
        >
          {lang === "en" ? "বাংলা" : "English"}
        </button>
      </div>

      {/* Floating Glass Language Toggle Button (Desktop) */}
      <button 
        onClick={() => setLang(lang === "en" ? "bn" : "en")}
        className="hidden sm:block fixed top-6 right-6 z-50 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-white/20 transition-all cursor-pointer"
        aria-label="Toggle Language"
      >
        {lang === "en" ? "বাংলা" : "English"}
      </button>

      {/* Sidebar: Fixed width on Desktop, Full width on Mobile */}
      <aside className="w-full md:w-80 lg:w-96 xl:w-[400px] flex-shrink-0 z-20">
        <Sidebar t={t} lang={lang} />
      </aside>
      
      {/* Main Content Area */}
      <div className="flex-1 w-full min-w-0">
        <MainContent t={t} lang={lang} />
      </div>
    </main>
  );
}
