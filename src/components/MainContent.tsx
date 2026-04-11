"use client";
import React, { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { TranslationDict } from "@/lib/translations";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function AccordionSection({ title, children, lang, sectionTitleColor, isOpen, onToggle }: any) {
  const mobileActiveStyles = isOpen
    ? lang === "en" 
      ? "max-sm:bg-blue-900/30 max-sm:border-blue-400/40 max-sm:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
      : "max-sm:bg-emerald-900/30 max-sm:border-emerald-400/40 max-sm:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
    : "max-sm:bg-white/5 max-sm:border-white/10";

  return (
    <section className={`group transition-all duration-300 sm:bg-white/10 sm:backdrop-blur-md sm:border sm:border-white/20 sm:shadow-xl sm:rounded-2xl sm:p-6 md:p-8 sm:hover:bg-white/20 sm:hover:-translate-y-1 sm:hover:shadow-2xl sm:active:scale-[0.98] max-sm:backdrop-blur-md max-sm:border max-sm:rounded-2xl max-sm:p-5 ${mobileActiveStyles}`}>
      <div 
        className="flex justify-between items-center cursor-pointer sm:cursor-default transition-all duration-300 max-sm:active:bg-white/10 max-sm:active:scale-[0.98] max-sm:-m-5 max-sm:p-5 max-sm:rounded-xl" 
        onClick={onToggle}
      >
        <h3 className={`text-xl sm:text-2xl font-bold flex items-center gap-2 sm:gap-3 transition-colors duration-700 ${sectionTitleColor} ${lang === "bn" ? "font-bangla" : ""}`}>
          <span className="hidden sm:inline-block w-8 group-hover:w-12 h-1 rounded-full bg-white transition-all duration-300"></span>
          {title}
        </h3>
        <div className="sm:hidden text-white/50 group-hover:text-white/80 transition-colors">
          <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </div>
      <div className={`grid transition-all duration-300 ease-in-out sm:grid-rows-[1fr] sm:opacity-100 ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
        <div className="overflow-hidden">
          <div className="pt-2 sm:pt-6">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MainContent({ t, lang }: { t: TranslationDict, lang: "en" | "bn" }) {
  const isEn = lang === "en";
  const titleColor = isEn ? "text-blue-200" : "text-emerald-200";
  const subheadColor = isEn ? "text-blue-100" : "text-emerald-100";
  const badgeColor = isEn ? "bg-blue-500/80" : "bg-emerald-500/80";
  const mutedAccentColor = isEn ? "text-blue-200/80" : "text-teal-200/80";
  const sectionTitleColor = isEn ? "text-blue-300" : "text-teal-300";
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);
  
  const galleryImages = [
    '/gallery/photo1.png',
    '/gallery/photo2.png',
    '/gallery/photo3.jpeg',
    '/gallery/photo4.jpeg',
    '/gallery/photo5.jpeg',
    '/gallery/photo6.jpg'
  ];

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="max-sm:px-6 max-sm:pb-24 sm:p-8 md:p-12 lg:p-16 w-full flex flex-col max-sm:gap-3 sm:gap-12 text-white max-sm:bg-black/10 max-sm:backdrop-blur-xl">
      {/* Professional Career */}
      <AccordionSection 
        title={t.professionalCareer} 
        lang={lang} 
        sectionTitleColor={sectionTitleColor}
        isOpen={openSection === 'career'}
        onToggle={() => toggleSection('career')}
      >
        <div className="pl-3 sm:pl-4 border-l-2 border-white/30">
          <h4 className="text-lg sm:text-xl font-bold text-white">{t.jobTitle}</h4>
          <p className={`mt-1 text-sm sm:text-base font-medium transition-colors duration-700 ${subheadColor}`}>{t.jobCompany}</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-6 mt-3 text-xs sm:text-sm text-gray-300">
            <span className="flex items-center gap-1.5 bg-white/10 px-2 sm:px-3 py-1 rounded-full font-medium border border-white/10 w-fit">{t.jobSince}</span>
            <span className="flex items-center gap-1.5 bg-white/10 px-2 sm:px-3 py-1 rounded-full font-medium border border-white/10 w-fit">{t.jobEmail}</span>
          </div>
        </div>
      </AccordionSection>

      {/* Educational Background */}
      <AccordionSection 
        title={t.educationalBackground} 
        lang={lang} 
        sectionTitleColor={sectionTitleColor}
        isOpen={openSection === 'education'}
        onToggle={() => toggleSection('education')}
      >
        <div className="space-y-6 md:space-y-8 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-white/20">
          
          {/* Item 3 */}
          <div className="relative flex items-start gap-4 sm:gap-6 md:gap-8 group">
            <div className={`sticky top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/40 flex-shrink-0 z-10 shadow-sm transition-transform duration-300 group-hover:scale-125`}></div>
            <div className="flex-1 pb-1 sm:pb-2">
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">{t.bsc}</h4>
              <p className={`text-sm sm:text-base font-semibold mt-1 transition-colors duration-700 ${titleColor}`}>{t.bscInst}</p>
              <p className="text-gray-300 text-xs sm:text-sm mt-1">{t.bscLoc}</p>
              <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-200 bg-white/5 inline-block p-2 sm:p-3 rounded-lg border border-white/10">
                <span className="font-medium bg-white/10 px-1.5 sm:px-2 py-0.5 rounded shadow-sm border border-white/5">{t.bscSession}</span>
                <span className="font-medium bg-white/10 px-1.5 sm:px-2 py-0.5 rounded shadow-sm border border-white/5">{t.bscDept}</span>
                <span className={`font-medium text-white px-1.5 sm:px-2 py-0.5 rounded shadow-sm border border-white/10 transition-colors duration-700 ${badgeColor}`}>{t.bscYear}</span>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative flex items-start gap-4 sm:gap-6 md:gap-8 group">
            <div className="sticky top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex-shrink-0 z-10 shadow-sm transition-transform duration-300 group-hover:scale-125"></div>
            <div className="flex-1 pb-1 sm:pb-2">
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">{t.hsc}</h4>
              <p className={`text-sm sm:text-base font-semibold mt-1 transition-colors duration-700 ${titleColor}`}>{t.hscInst}</p>
              <p className="text-gray-300 text-xs sm:text-sm mt-1">{t.hscLoc}</p>
              <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-200 bg-white/5 inline-block p-2 sm:p-3 rounded-lg border border-white/10">
                <span className="font-medium bg-white/10 px-1.5 sm:px-2 py-0.5 rounded shadow-sm border border-white/5">{t.hscGroup}</span>
                <span className="font-medium bg-white/10 px-1.5 sm:px-2 py-0.5 rounded shadow-sm border border-white/5">{t.hscBoard}</span>
                <span className={`font-medium bg-white/10 px-1.5 sm:px-2 py-0.5 rounded shadow-sm border border-white/5 transition-colors duration-700 ${subheadColor}`}>{t.hscGpa}</span>
              </div>
            </div>
          </div>

          {/* Item 1 */}
          <div className="relative flex items-start gap-4 sm:gap-6 md:gap-8 group">
            <div className="sticky top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/20 flex-shrink-0 z-10 shadow-sm transition-transform duration-300 group-hover:scale-125"></div>
            <div className="flex-1 pb-1 sm:pb-2">
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">{t.ssc}</h4>
              <p className={`text-sm sm:text-base font-semibold mt-1 transition-colors duration-700 ${titleColor}`}>{t.sscInst}</p>
              <p className="text-gray-300 text-xs sm:text-sm mt-1">{t.sscLoc}</p>
              <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-200 bg-white/5 inline-block p-2 sm:p-3 rounded-lg border border-white/10">
                <span className="font-medium bg-white/10 px-1.5 sm:px-2 py-0.5 rounded shadow-sm border border-white/5">{t.sscGroup}</span>
                <span className="font-medium bg-white/10 px-1.5 sm:px-2 py-0.5 rounded shadow-sm border border-white/5">{t.sscBoard}</span>
                <span className={`font-medium bg-white/10 px-1.5 sm:px-2 py-0.5 rounded shadow-sm border border-white/5 transition-colors duration-700 ${subheadColor}`}>{t.sscGpa}</span>
              </div>
            </div>
          </div>

        </div>
      </AccordionSection>

      {/* Family Details */}
      <AccordionSection 
        title={t.familyDetails} 
        lang={lang} 
        sectionTitleColor={sectionTitleColor}
        isOpen={openSection === 'family'}
        onToggle={() => toggleSection('family')}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white/5 border border-white/10 p-4 sm:p-5 rounded-xl transition-transform duration-300 sm:hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg">
            <p className={`text-[10px] sm:text-xs uppercase tracking-wider font-bold mb-1 transition-colors duration-700 ${mutedAccentColor}`}>{t.fatherLabel}</p>
            <p className="text-base sm:text-lg font-bold text-white">{t.fatherName}</p>
            <p className="text-gray-300 font-medium text-xs sm:text-sm mt-1">{t.fatherDesc}</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 sm:p-5 rounded-xl transition-transform duration-300 sm:hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg">
            <p className={`text-[10px] sm:text-xs uppercase tracking-wider font-bold mb-1 transition-colors duration-700 ${mutedAccentColor}`}>{t.motherLabel}</p>
            <p className="text-base sm:text-lg font-bold text-white">{t.motherName}</p>
            <p className="text-gray-300 font-medium text-xs sm:text-sm mt-1">{t.motherDesc}</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 sm:p-5 rounded-xl transition-transform duration-300 sm:hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg md:col-span-2">
            <p className={`text-[10px] sm:text-xs uppercase tracking-wider font-bold mb-1 transition-colors duration-700 ${mutedAccentColor}`}>{t.siblingLabel}</p>
            <p className="text-base sm:text-lg font-bold text-white">{t.siblingName}</p>
            <p className="text-gray-300 font-medium text-xs sm:text-sm mt-1">{t.siblingDesc}</p>
          </div>
        </div>
      </AccordionSection>

      {/* Gallery Section */}
      <AccordionSection 
        title={t.gallery} 
        lang={lang} 
        sectionTitleColor={sectionTitleColor}
        isOpen={openSection === 'gallery'}
        onToggle={() => toggleSection('gallery')}
      >
        {/* Desktop 3D Swiper */}
        <div className="hidden sm:block">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={600}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full py-10"
          >
            {galleryImages.map((src, index) => (
              <SwiperSlide key={index} className="max-w-[300px] sm:max-w-[400px]">
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-[350px] sm:h-[450px] object-contain bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg cursor-pointer"
                  onClick={() => setSelectedImage(src)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile Horizontal Swiper */}
        <div className="block sm:hidden w-full">
          <Swiper
            spaceBetween={12}
            slidesPerView={1.05}
            centeredSlides={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
            className="w-full py-4 pb-12 gallery-mobile"
          >
            {galleryImages.map((src, index) => (
              <SwiperSlide key={index} className="w-full flex justify-center">
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full max-h-[300px] object-cover bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-md cursor-pointer"
                  onClick={() => setSelectedImage(src)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </AccordionSection>

      {/* Footer / Credit Line */}
      <footer className="mt-8 sm:mt-12 py-6 border-t border-white/10 text-center text-xs sm:text-sm text-white/50 transition-colors duration-300 hover:text-white/80">
        <p className={`${lang === "bn" ? "font-bangla tracking-wide" : ""}`}>
          {isEn ? (
            <>
              Developed by <span className="font-bold text-blue-300">K M Habibullah</span> |{" "}
              <a href="tel:01700905062" className="hover:text-white transition-colors">+880 1700905062</a>
            </>
          ) : (
            <>
              ডিজাইন এবং ডেভেলপমেন্টে: <span className="font-bold text-emerald-300">কে এম হাবিবুল্লাহ</span> |{" "}
              <a href="tel:01700905062" className="hover:text-white transition-colors">+৮৮০ ১৭০০৯০৫০৬২</a>
            </>
          )}
        </p>
      </footer>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-all cursor-pointer z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </div>
          <img 
            src={selectedImage} 
            alt="Full screen gallery image" 
            className="max-w-full max-h-full rounded-xl shadow-2xl object-contain cursor-default" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

    </div>
  );
}
