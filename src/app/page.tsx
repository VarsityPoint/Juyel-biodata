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
      
      {/* Floating Glass Language Toggle Button */}
      <button 
        onClick={() => setLang(lang === "en" ? "bn" : "en")}
        className="fixed top-6 right-6 z-50 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-white/20 transition-all cursor-pointer"
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
