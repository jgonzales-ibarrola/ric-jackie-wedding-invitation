'use client';
import { useState, useEffect, useRef } from "react";
import { ENTOURAGE } from "@/constants/wedding-data";
import { useIntersectionOptions } from "@/hooks/use-intersection";

export default function Entourage() {
  const [ref, isVisible] = useIntersectionOptions();
  
  // Separate parallax tracking for both visual acts to prevent clipping
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const [offsetY1, setOffsetY1] = useState(0);
  const [offsetY2, setOffsetY2] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Act 1 scroll mapping
      if (containerRef1.current) {
        const rect1 = containerRef1.current.getBoundingClientRect();
        const scrolledPast1 = window.innerHeight - rect1.top;
        if (scrolledPast1 > 0 && rect1.bottom > 0) {
          setOffsetY1(scrolledPast1 * 0.10);
        }
      }
      
      // Act 2 scroll mapping
      if (containerRef2.current) {
        const rect2 = containerRef2.current.getBoundingClientRect();
        const scrolledPast2 = window.innerHeight - rect2.top;
        if (scrolledPast2 > 0 && rect2.bottom > 0) {
          setOffsetY2(scrolledPast2 * 0.08);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cleanName = (name: string) => name.replace(/^\d+\.\s*/, '');

  return (
    <div className="w-full bg-[#2E2522]">
      
      {/* ─── ACT I: THE COURT & LEADERS (Landscape Bokeh Background) ─── */}
      <div ref={containerRef1} className="relative w-full overflow-hidden border-b border-white/5">
        {/* Cinematic Parallax Backdrop 1 */}
        <div 
          className="absolute inset-0 w-full h-[130%] -top-[15%] bg-cover bg-center pointer-events-none will-change-transform scale-105 opacity-30"
          style={{ 
            backgroundImage: `url('/images/NZF_3192.jpg')`,
            transform: `translateY(${offsetY1}px)`,
          }}
        />
        {/* Luxury Matrix Scrims */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E2522]/95 via-[#2E2522]/85 to-[#2E2522]/95 mix-blend-multiply z-0" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#2E2522]/30 to-[#2E2522]/90 z-0" />

        <section ref={ref} className={`relative z-10 pt-32 pb-16 px-4 max-w-5xl mx-auto transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {/* Header Block */}
          <div className="text-center mb-24">
            <span className="tracking-[0.35em] text-[11px] uppercase text-[#E5D3B3] block mb-3 font-bold drop-shadow-sm">
              Our Wedding Court
            </span>
            <h2 className="font-serif text-5xl font-light tracking-wide text-white mb-4 drop-shadow-md">
              The Entourage
            </h2>
            <div className="w-16 h-[1px] bg-[#D4AF37]/40 mx-auto mb-6" />
            <p className="tracking-[0.25em] text-xs uppercase text-[#F3E5AB] max-w-xs md:max-w-md mx-auto font-light bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-sm inline-block">
              {ENTOURAGE.couple.hashtag}
            </p>
          </div>

          {/* Parents Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-3xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-[#E5D3B3]/40 text-center transform transition-all duration-300 hover:scale-[1.02]">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#4A6B53] block mb-4">
                Parents of the Bride
              </span>
              <div className="space-y-1.5 border-t border-gray-100 pt-4">
                <p className="text-base font-serif font-light tracking-wide text-[#2E2522]">{ENTOURAGE.brideParents.father}</p>
                <p className="text-base font-serif font-light tracking-wide text-[#2E2522]">{ENTOURAGE.brideParents.mother}</p>
              </div>
            </div>
            
            <div className="bg-white/95 backdrop-blur-md p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-[#E5D3B3]/40 text-center transform transition-all duration-300 hover:scale-[1.02]">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#4A6B53] block mb-4">
                Parents of the Groom
              </span>
              <div className="space-y-1.5 border-t border-gray-100 pt-4">
                <p className="text-base font-serif font-light tracking-wide text-[#2E2522]">{ENTOURAGE.groomParents.father}</p>
                <p className="text-base font-serif font-light tracking-wide text-[#2E2522]">{ENTOURAGE.groomParents.mother}</p>
              </div>
            </div>
          </div>

          {/* Ritual Leaders Frame */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto text-center border border-white/10 py-12 bg-black/20 backdrop-blur-sm rounded-[2.5rem] px-6 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-3 border border-white/5 rounded-[2rem] pointer-events-none" />
            <div className="group relative z-10">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#D4AF37] block mb-2 transition-all duration-300 group-hover:tracking-[0.35em]">
                Best Man
              </span>
              <p className="text-2xl font-serif font-light text-white tracking-wide drop-shadow-sm">
                {ENTOURAGE.leaders.bestMan}
              </p>
            </div>
            <div className="group mt-8 md:mt-0 relative z-10">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#D4AF37] block mb-2 transition-all duration-300 group-hover:tracking-[0.35em]">
                Maid of Honor
              </span>
              <p className="text-2xl font-serif font-light text-white tracking-wide drop-shadow-sm">
                {ENTOURAGE.leaders.maidOfHonor}
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ─── ACT II: THE MATRICES & WITNESSES (Portrait Bridge Background) ─── */}
      <div ref={containerRef2} className="relative w-full overflow-hidden">
        {/* Cinematic Parallax Backdrop 2 */}
        <div 
          className="absolute inset-0 w-full h-[130%] -top-[15%] bg-cover bg-center pointer-events-none will-change-transform scale-105 opacity-25"
          style={{ 
            backgroundImage: `url('/images/NZF_3205.jpg')`,
            transform: `translateY(${offsetY2}px)`,
          }}
        />
        {/* Intersecting Shadow Transition Scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E2522]/95 via-[#2E2522]/80 to-[#2E2522]/95 mix-blend-multiply z-0" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#2E2522]/40 to-[#2E2522]/95 z-0" />

        <section className="relative z-10 pb-32 pt-16 px-4 max-w-5xl mx-auto">
          
          {/* Core Party List Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 max-w-4xl mx-auto">
            {/* Groomsmen Container */}
            <div className="bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-[#E5D3B3]/40 transform transition-all duration-500 hover:scale-[1.01]">
              <h4 className="text-xs uppercase tracking-[0.25em] font-bold border-b border-gray-200 pb-4 mb-6 text-[#2E2522] text-center">
                Groomsmen
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-xs font-semibold text-gray-600 text-center md:text-left tracking-wide pl-2">
                {ENTOURAGE.groomsmen.map((man) => (
                  <li key={man} className="hover:text-[#4A6B53] transition-colors duration-200 list-none md:list-disc md:marker:text-[#D4AF37]/60">
                    {man}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bridesmaids Container */}
            <div className="bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-[#E5D3B3]/40 transform transition-all duration-500 hover:scale-[1.01]">
              <h4 className="text-xs uppercase tracking-[0.25em] font-bold border-b border-gray-200 pb-4 mb-6 text-[#2E2522] text-center">
                Bridesmaids
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-xs font-semibold text-gray-600 text-center md:text-left tracking-wide pl-2">
                {ENTOURAGE.bridesmaids.map((girl) => (
                  <li key={girl} className="hover:text-[#4A6B53] transition-colors duration-200 list-none md:list-disc md:marker:text-[#D4AF37]/60">
                    {girl}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Secondary Symbolic Sponsors Frame */}
          <div className="bg-gradient-to-br from-[#1A1513]/95 to-[#2E2522]/95 p-10 rounded-[2.5rem] border border-white/10 shadow-[0_35px_80px_rgba(0,0,0,0.5)] max-w-4xl mx-auto mb-16 relative overflow-hidden">
            <div className="absolute inset-4 border border-white/5 rounded-[2rem] pointer-events-none" />
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-[#D4AF37] mb-10 text-center drop-shadow-sm">
              Secondary Sponsors
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
              <div className="md:border-r border-white/10 pr-0 md:pr-4">
                <span className="block text-[9px] uppercase tracking-[0.2em] font-bold text-[#E5D3B3]/60 mb-3">Candle</span>
                <p className="font-serif font-light text-sm text-white mb-1">{ENTOURAGE.sponsors.candle.male}</p>
                <p className="font-serif font-light text-sm text-white">{ENTOURAGE.sponsors.candle.female}</p>
              </div>
              <div className="md:border-r border-white/10 pr-0 md:pr-4">
                <span className="block text-[9px] uppercase tracking-[0.2em] font-bold text-[#E5D3B3]/60 mb-3">Veil</span>
                <p className="font-serif font-light text-sm text-white mb-1">{ENTOURAGE.sponsors.veil.male}</p>
                <p className="font-serif font-light text-sm text-white">{ENTOURAGE.sponsors.veil.female}</p>
              </div>
              <div>
                <span className="block text-[9px] uppercase tracking-[0.2em] font-bold text-[#E5D3B3]/60 mb-3">Cord</span>
                <p className="font-serif font-light text-sm text-white mb-1">{ENTOURAGE.sponsors.cord.male}</p>
                <p className="font-serif font-light text-sm text-white">{ENTOURAGE.sponsors.cord.female}</p>
              </div>
            </div>
          </div>

          {/* Bearers & Flowers Grid */}
          <div className="bg-white/95 backdrop-blur-md p-10 rounded-[2.5rem] border border-[#E5D3B3]/40 shadow-[0_35px_80px_rgba(0,0,0,0.4)] max-w-4xl mx-auto mb-20">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-[#4A6B53] mb-8 text-center">
              Bearers &amp; Flower Girls
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-sm">
              <div className="bg-[#2E2522]/5 p-4 rounded-xl">
                <span className="block text-[9px] uppercase tracking-wider font-bold text-gray-400 mb-2">Ring Bearer</span>
                <p className="font-medium text-xs text-gray-800">{ENTOURAGE.children.ringBearer}</p>
              </div>
              <div className="bg-[#2E2522]/5 p-4 rounded-xl">
                <span className="block text-[9px] uppercase tracking-wider font-bold text-gray-400 mb-2">Coin Bearer</span>
                <p className="font-medium text-xs text-gray-800">{ENTOURAGE.children.coinBearer}</p>
              </div>
              <div className="bg-[#2E2522]/5 p-4 rounded-xl">
                <span className="block text-[9px] uppercase tracking-wider font-bold text-gray-400 mb-2">Bible Bearer</span>
                <p className="font-medium text-xs text-gray-800">{ENTOURAGE.children.bibleBearer}</p>
              </div>
              <div className="bg-[#2E2522]/5 p-4 rounded-xl">
                <span className="block text-[9px] uppercase tracking-wider font-bold text-gray-400 mb-2">Flower Girls</span>
                <div className="space-y-1 text-xs font-semibold text-gray-800">
                  {ENTOURAGE.children.flowerGirls.map((girl) => (
                    <p key={girl}>{girl}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Covenant Witnesses (Principal Sponsors) */}
          <div className="border-t border-white/15 pt-20 max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#D4AF37] block mb-2 drop-shadow-sm">
                Witnesses of Covenant
              </span>
              <h3 className="font-serif text-4xl text-white tracking-wide font-light drop-shadow-md">
                Principal Sponsors
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm">
              {/* Ninongs Card */}
              <div className="bg-white/95 backdrop-blur-md p-8 rounded-[2rem] border border-[#E5D3B3]/40 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                <h5 className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#4A6B53] mb-6 text-center border-b border-gray-100 pb-3">
                  Ninongs
                </h5>
                <ul className="space-y-3 text-gray-600 font-semibold text-xs md:text-sm pl-4">
                  {ENTOURAGE.principalSponsors.map((item, index) => (
                    <li key={index} className="list-disc marker:text-[#D4AF37] tracking-wide hover:text-[#4A6B53] transition-colors">
                      {cleanName(item.ninong)}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ninangs Card */}
              <div className="bg-white/95 backdrop-blur-md p-8 rounded-[2rem] border border-[#E5D3B3]/40 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                <h5 className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#4A6B53] mb-6 text-center border-b border-gray-100 pb-3">
                  Ninangs
                </h5>
                <ul className="space-y-3 text-gray-600 font-semibold text-xs md:text-sm pl-4">
                  {ENTOURAGE.principalSponsors.map((item, index) => (
                    <li key={index} className="list-disc marker:text-[#D4AF37] tracking-wide hover:text-[#4A6B53] transition-colors">
                      {cleanName(item.ninang)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </section>
      </div>

    </div>
  );
}