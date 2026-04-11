"use client";
import React, { useState } from "react";
import { Phone, MapPin, Home, ChevronDown, Mail } from "lucide-react";
import { TranslationDict } from "@/lib/translations";

function AccordionSection({ title, children, lang, sectionTitleColor, isOpen, onToggle }: any) {
  const mobileActiveStyles = isOpen
    ? lang === "en" 
      ? "max-sm:bg-blue-900/30 max-sm:border-blue-400/40 max-sm:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
      : "max-sm:bg-emerald-900/30 max-sm:border-emerald-400/40 max-sm:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
    : "max-sm:bg-white/5 max-sm:border-white/10";

  return (
    <section className={`group max-sm:backdrop-blur-md max-sm:border max-sm:rounded-2xl max-sm:p-5 transition-all duration-300 ${mobileActiveStyles}`}>
      <div 
        className="flex justify-between items-center cursor-pointer sm:cursor-default transition-all duration-300 max-sm:active:bg-white/10 max-sm:active:scale-[0.98] max-sm:-m-5 max-sm:p-5 max-sm:rounded-xl" 
        onClick={onToggle}
      >
        <h2 className={`text-xl sm:text-2xl font-bold flex items-center gap-2 sm:mb-4 sm:border-b border-white/30 sm:pb-2 tracking-wide transition-colors duration-700 ${sectionTitleColor} ${lang === "bn" ? "font-bangla" : ""}`}>
          {title}
        </h2>
        <div className="sm:hidden text-white/50 group-hover:text-white/80 transition-colors">
          <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </div>
      <div className={`grid transition-all duration-300 ease-in-out sm:grid-rows-[1fr] sm:opacity-100 sm:mt-0 ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
        <div className="overflow-hidden">
          <div className="pt-2 sm:pt-0">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Sidebar({ t, lang }: { t: TranslationDict, lang: "en" | "bn" }) {
  const accentColor = lang === "en" ? "text-blue-300" : "text-teal-300";
  const sectionTitleColor = lang === "en" ? "text-blue-200" : "text-teal-300";
  const ringBg = lang === "en" ? "bg-[#1a3d5c]" : "bg-[#064e3b]"; // bg-green-900
  const profileHalo = lang === "en" ? "hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]" : "hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]";

  // Accordion state
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="md:sticky md:top-0 md:h-screen md:overflow-y-auto custom-scrollbar-wrapper max-sm:px-0 max-sm:pt-6 sm:p-8 md:p-10 sm:bg-white/10 sm:backdrop-blur-lg sm:border-r border-white/20 sm:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-white flex flex-col items-center md:items-start w-full transition-colors duration-700">
      
      {/* Profile Stage with Glow */}
      <div className="relative mb-4">
        {/* Animated Radial Glow behind Profile Image */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full blur-xl -z-10 animate-pulse mix-blend-screen sm:hidden"></div>
        <div className={`w-48 h-48 sm:w-56 sm:h-56 flex-shrink-0 mx-auto rounded-full p-2.5 sm:p-3 shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 cursor-pointer ${ringBg} ${profileHalo}`}>
          <div className="w-full h-full rounded-full border-4 border-white overflow-hidden relative bg-black/20">
            <img
              src="/images/profile.jpg"
              alt={`${t.name} Profile`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center mt-2 mb-6 sm:mb-10 mx-auto md:hidden flex flex-col items-center w-full px-6">
        <h1 className={`text-2xl md:text-3xl font-bold ${lang === "bn" ? "font-bangla" : ""}`}>
          {t.name}
        </h1>
        <p className={`text-sm md:text-base opacity-80 mt-1 mb-2 sm:mb-0 ${lang === "bn" ? "font-bangla" : ""}`}>
          {t.title}
        </p>
      </div>

      {/* Native App "Quick Actions" Bar (Mobile Only) */}
      <div className="flex gap-3 w-full px-6 sm:hidden max-w-sm mx-auto mb-2">
        <a href={`tel:${t.phone}`} className="flex-1 py-3 flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/5 backdrop-blur-md text-sm font-medium transition-all active:scale-95 shadow-sm text-white">
          <Phone className="w-4 h-4"/> 
          {lang === "bn" ? "কল করুন" : "Call"}
        </a>
        <a href={`mailto:hello@example.com`} className="flex-1 py-3 flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/5 backdrop-blur-md text-sm font-medium transition-all active:scale-95 shadow-sm text-white">
          <Mail className="w-4 h-4"/>
          {lang === "bn" ? "ইমেইল" : "Email"}
        </a>
      </div>

      {/* Bottom Sheet Container (Starts Here) */}
      <div className="w-full sm:space-y-10 max-sm:mt-8 max-sm:bg-black/10 max-sm:backdrop-blur-xl max-sm:border-t max-sm:border-white/10 max-sm:rounded-t-[40px] max-sm:p-6 max-sm:pb-4 max-sm:shadow-[0_-10px_40px_rgba(0,0,0,0.1)] max-sm:flex max-sm:flex-col max-sm:gap-3">
        {/* About Me Section */}
        <AccordionSection 
          title={t.aboutMe} 
          lang={lang} 
          sectionTitleColor={sectionTitleColor}
          isOpen={openSection === 'about'}
          onToggle={() => toggleSection('about')}
        >
          <ul className="space-y-3 text-sm sm:text-base text-gray-200">
            <li><span className="font-semibold text-white">{t.dobLabel}</span>{t.dobValue}</li>
            <li><span className="font-semibold text-white">{t.heightLabel}</span>{t.heightValue}</li>
            <li><span className="font-semibold text-white">{t.weightLabel}</span>{t.weightValue}</li>
            <li><span className="font-semibold text-white">{t.bloodLabel}</span>{t.bloodValue}</li>
            <li><span className="font-semibold text-white">{t.natLabel}</span>{t.natValue}</li>
            <li><span className="font-semibold text-white">{t.relLabel}</span>{t.relValue}</li>
          </ul>
        </AccordionSection>

        {/* Contact Section */}
        <AccordionSection 
          title={t.contact} 
          lang={lang} 
          sectionTitleColor={sectionTitleColor}
          isOpen={openSection === 'contact'}
          onToggle={() => toggleSection('contact')}
        >
          <ul className="space-y-4 text-sm sm:text-base text-gray-200">
            <li className="flex items-start gap-3">
              <Phone className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-colors duration-700 ${accentColor}`} />
              <span>{t.phone}</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-colors duration-700 ${accentColor}`} />
              <span>
                <span className="font-semibold text-white block">{t.presentLabel}</span>
                {t.presentValue}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Home className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-colors duration-700 ${accentColor}`} />
              <span>
                <span className="font-semibold text-white block">{t.permLabel}</span>
                {t.permValue}
              </span>
            </li>
          </ul>
        </AccordionSection>

        {/* Hobbies Section */}
        <AccordionSection 
          title={t.hobbies} 
          lang={lang} 
          sectionTitleColor={sectionTitleColor}
          isOpen={openSection === 'hobbies'}
          onToggle={() => toggleSection('hobbies')}
        >
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-200 ml-2">
            <li>{t.hobby1}</li>
            <li>{t.hobby2}</li>
            <li>{t.hobby3}</li>
            <li>{t.hobby4}</li>
          </ul>
        </AccordionSection>
      </div>
    </div>
  );
}
