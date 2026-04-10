"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { TranslationDict } from "@/lib/translations";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function MainContent({ t, lang }: { t: TranslationDict, lang: "en" | "bn" }) {
  const isEn = lang === "en";
  const titleColor = isEn ? "text-blue-200" : "text-emerald-200";
  const subheadColor = isEn ? "text-blue-100" : "text-emerald-100";
  const badgeColor = isEn ? "bg-blue-500/80" : "bg-emerald-500/80";
  const mutedAccentColor = isEn ? "text-blue-200/80" : "text-teal-200/80";
  const sectionTitleColor = isEn ? "text-blue-300" : "text-teal-300";
  const headerLineColor = isEn ? "bg-blue-300" : "bg-teal-300";
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    '/gallery/photo1.png',
    '/gallery/photo2.png',
    '/gallery/photo3.jpeg',
    '/gallery/photo4.jpeg',
    '/gallery/photo5.jpeg',
    '/gallery/photo6.jpg'
  ];

  return (
    <div className="p-8 md:p-12 lg:p-16 w-full flex flex-col gap-12 text-white">
      {/* Header */}
      <header className="mb-4">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-wider mb-2 drop-shadow-md ${lang === "bn" ? "font-bangla" : ""}`}>
          {t.name.split(" ").map((word, index) => (
            <React.Fragment key={index}>
              {word}{" "}
            </React.Fragment>
          ))}
        </h1>
        <h2 className={`text-2xl md:text-3xl font-bold drop-shadow transition-colors duration-700 ${titleColor} ${lang === "bn" ? "font-bangla" : ""}`}>
          {t.title}
        </h2>
      </header>

      {/* Professional Career */}
      <section className="group bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl active:scale-[0.98]">
        <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 transition-colors duration-700 ${sectionTitleColor} ${lang === "bn" ? "font-bangla" : ""}`}>
          <span className="w-8 group-hover:w-12 h-1 rounded-full inline-block bg-white transition-all duration-300"></span>
          {t.professionalCareer}
        </h3>
        <div className="pl-4 border-l-2 border-white/30">
          <h4 className="text-xl font-bold text-white">{t.jobTitle}</h4>
          <p className={`mt-1 font-medium transition-colors duration-700 ${subheadColor}`}>{t.jobCompany}</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-3 text-sm text-gray-300">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full font-medium border border-white/10">{t.jobSince}</span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full font-medium border border-white/10">{t.jobEmail}</span>
          </div>
        </div>
      </section>

      {/* Educational Background */}
      <section className="group bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl active:scale-[0.98]">
        <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 transition-colors duration-700 ${sectionTitleColor} ${lang === "bn" ? "font-bangla" : ""}`}>
          <span className="w-8 group-hover:w-12 h-1 rounded-full inline-block bg-white transition-all duration-300"></span>
          {t.educationalBackground}
        </h3>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-white/20">
          
          {/* Item 3 */}
          <div className="relative flex items-start gap-6 md:gap-8 group">
            <div className={`sticky top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/40 flex-shrink-0 z-10 shadow-sm transition-transform duration-300 group-hover:scale-125`}></div>
            <div className="flex-1 pb-2">
              <h4 className="text-lg md:text-xl font-bold text-white">{t.bsc}</h4>
              <p className={`font-semibold mt-1 transition-colors duration-700 ${titleColor}`}>{t.bscInst}</p>
              <p className="text-gray-300 text-sm mt-1">{t.bscLoc}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm text-gray-200 bg-white/5 inline-block p-3 rounded-lg border border-white/10">
                <span className="font-medium bg-white/10 px-2 py-0.5 rounded shadow-sm border border-white/5">{t.bscSession}</span>
                <span className="font-medium bg-white/10 px-2 py-0.5 rounded shadow-sm border border-white/5">{t.bscDept}</span>
                <span className={`font-medium text-white px-2 py-0.5 rounded shadow-sm border border-white/10 transition-colors duration-700 ${badgeColor}`}>{t.bscYear}</span>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative flex items-start gap-6 md:gap-8 group">
            <div className="sticky top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex-shrink-0 z-10 shadow-sm transition-transform duration-300 group-hover:scale-125"></div>
            <div className="flex-1 pb-2">
              <h4 className="text-lg md:text-xl font-bold text-white">{t.hsc}</h4>
              <p className={`font-semibold mt-1 transition-colors duration-700 ${titleColor}`}>{t.hscInst}</p>
              <p className="text-gray-300 text-sm mt-1">{t.hscLoc}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm text-gray-200 bg-white/5 inline-block p-3 rounded-lg border border-white/10">
                <span className="font-medium bg-white/10 px-2 py-0.5 rounded shadow-sm border border-white/5">{t.hscGroup}</span>
                <span className="font-medium bg-white/10 px-2 py-0.5 rounded shadow-sm border border-white/5">{t.hscBoard}</span>
                <span className={`font-medium bg-white/10 px-2 py-0.5 rounded shadow-sm border border-white/5 transition-colors duration-700 ${subheadColor}`}>{t.hscGpa}</span>
              </div>
            </div>
          </div>

          {/* Item 1 */}
          <div className="relative flex items-start gap-6 md:gap-8 group">
            <div className="sticky top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/20 flex-shrink-0 z-10 shadow-sm transition-transform duration-300 group-hover:scale-125"></div>
            <div className="flex-1 pb-2">
              <h4 className="text-lg md:text-xl font-bold text-white">{t.ssc}</h4>
              <p className={`font-semibold mt-1 transition-colors duration-700 ${titleColor}`}>{t.sscInst}</p>
              <p className="text-gray-300 text-sm mt-1">{t.sscLoc}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm text-gray-200 bg-white/5 inline-block p-3 rounded-lg border border-white/10">
                <span className="font-medium bg-white/10 px-2 py-0.5 rounded shadow-sm border border-white/5">{t.sscGroup}</span>
                <span className="font-medium bg-white/10 px-2 py-0.5 rounded shadow-sm border border-white/5">{t.sscBoard}</span>
                <span className={`font-medium bg-white/10 px-2 py-0.5 rounded shadow-sm border border-white/5 transition-colors duration-700 ${subheadColor}`}>{t.sscGpa}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Family Details */}
      <section className="group bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl active:scale-[0.98]">
        <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 transition-colors duration-700 ${sectionTitleColor} ${lang === "bn" ? "font-bangla" : ""}`}>
          <span className="w-8 group-hover:w-12 h-1 rounded-full inline-block bg-white transition-all duration-300"></span>
          {t.familyDetails}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 p-5 rounded-xl transition-transform duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg">
            <p className={`text-xs uppercase tracking-wider font-bold mb-1 transition-colors duration-700 ${mutedAccentColor}`}>{t.fatherLabel}</p>
            <p className="text-lg font-bold text-white">{t.fatherName}</p>
            <p className="text-gray-300 font-medium text-sm mt-1">{t.fatherDesc}</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-5 rounded-xl transition-transform duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg">
            <p className={`text-xs uppercase tracking-wider font-bold mb-1 transition-colors duration-700 ${mutedAccentColor}`}>{t.motherLabel}</p>
            <p className="text-lg font-bold text-white">{t.motherName}</p>
            <p className="text-gray-300 font-medium text-sm mt-1">{t.motherDesc}</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-5 rounded-xl transition-transform duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg md:col-span-2">
            <p className={`text-xs uppercase tracking-wider font-bold mb-1 transition-colors duration-700 ${mutedAccentColor}`}>{t.siblingLabel}</p>
            <p className="text-lg font-bold text-white">{t.siblingName}</p>
            <p className="text-gray-300 font-medium text-sm mt-1">{t.siblingDesc}</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="group bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl active:scale-[0.98]">
        <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 transition-colors duration-700 ${sectionTitleColor} ${lang === "bn" ? "font-bangla" : ""}`}>
          <span className="w-8 group-hover:w-12 h-1 rounded-full inline-block bg-white transition-all duration-300"></span>
          {t.gallery}
        </h3>
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
      </section>

      {/* Footer / Credit Line */}
      <footer className="mt-12 py-6 border-t border-white/10 text-center text-sm text-white/50 transition-colors duration-300 hover:text-white/80">
        <p className={`${lang === "bn" ? "font-bangla tracking-wide" : ""}`}>
          {isEn ? (
            <>
              Developed with ❤️ by <span className="font-bold text-blue-300">K M Habibullah</span> |{" "}
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-all cursor-pointer"
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
