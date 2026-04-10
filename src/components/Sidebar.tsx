import React from "react";
import { Phone, MapPin, Home } from "lucide-react";
import { TranslationDict } from "@/lib/translations";

export default function Sidebar({ t, lang }: { t: TranslationDict, lang: "en" | "bn" }) {
  const accentColor = lang === "en" ? "text-blue-300" : "text-teal-300";
  const sectionTitleColor = lang === "en" ? "text-blue-200" : "text-teal-300";
  const ringBg = lang === "en" ? "bg-[#1a3d5c]" : "bg-[#064e3b]"; // bg-green-900
  const profileHalo = lang === "en" ? "hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]" : "hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]";

  return (
    <div className="md:sticky md:top-0 md:h-screen md:overflow-y-auto custom-scrollbar-wrapper bg-white/10 backdrop-blur-lg border-r border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-white p-8 md:p-10 flex flex-col items-center md:items-start w-full transition-colors duration-700">
      {/* Profile Image */}
      <div className={`w-48 h-48 sm:w-56 sm:h-56 flex-shrink-0 mx-auto mb-10 rounded-full p-2.5 sm:p-3 shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 cursor-pointer ${ringBg} ${profileHalo}`}>
        <div className="w-full h-full rounded-full border-4 border-white overflow-hidden">
          <img
            src="/images/profile.jpg"
            alt={`${t.name} Profile`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-full space-y-10">
        {/* About Me Section */}
        <section>
          <h2 className={`text-2xl font-bold mb-4 border-b border-white/30 pb-2 inline-block tracking-wide transition-colors duration-700 ${sectionTitleColor} ${lang === "bn" ? "font-bangla" : ""}`}>
            {t.aboutMe}
          </h2>
          <ul className="space-y-3 text-sm sm:text-base text-gray-200">
            <li>
              <span className="font-semibold text-white">{t.dobLabel}</span>{t.dobValue}
            </li>
            <li>
              <span className="font-semibold text-white">{t.heightLabel}</span>{t.heightValue}
            </li>
            <li>
              <span className="font-semibold text-white">{t.weightLabel}</span>{t.weightValue}
            </li>
            <li>
              <span className="font-semibold text-white">{t.bloodLabel}</span>{t.bloodValue}
            </li>
            <li>
              <span className="font-semibold text-white">{t.natLabel}</span>{t.natValue}
            </li>
            <li>
              <span className="font-semibold text-white">{t.relLabel}</span>{t.relValue}
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className={`text-2xl font-bold mb-4 border-b border-white/30 pb-2 inline-block tracking-wide transition-colors duration-700 ${sectionTitleColor} ${lang === "bn" ? "font-bangla" : ""}`}>
            {t.contact}
          </h2>
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
        </section>

        {/* Hobbies Section */}
        <section>
          <h2 className={`text-2xl font-bold mb-4 border-b border-white/30 pb-2 inline-block tracking-wide transition-colors duration-700 ${sectionTitleColor} ${lang === "bn" ? "font-bangla" : ""}`}>
            {t.hobbies}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-200">
            <li>{t.hobby1}</li>
            <li>{t.hobby2}</li>
            <li>{t.hobby3}</li>
            <li>{t.hobby4}</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
