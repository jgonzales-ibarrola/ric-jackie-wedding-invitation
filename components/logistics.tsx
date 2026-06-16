'use client';
import { useState, useEffect, useRef } from 'react';
import { PREMIUM_COLORS } from '@/constants/wedding-data';
import { useIntersectionOptions } from '@/hooks/use-intersection';

export default function Logistics() {
  const [ref, isVisible] = useIntersectionOptions();
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrolledPast = window.innerHeight - rect.top;
      if (scrolledPast > 0 && rect.bottom > 0) {
        setOffsetY(scrolledPast * 0.12);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-[#2E2522]">
      {/* ── CINEMATIC PARALLAX LAYER ── */}
      <div 
        className="absolute inset-0 w-full h-[130%] -top-[15%] bg-cover bg-center pointer-events-none will-change-transform scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1445510491599-c391e8046a68?auto=format&fit=crop&w=1920&q=50')`,
          transform: `translateY(${offsetY}px)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2E2522]/95 via-[#2E2522]/75 to-[#2E2522]/95 mix-blend-multiply z-0" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#2E2522]/20 to-[#2E2522]/90 z-0" />

      {/* ── MAIN LAYOUT CONTENT ── */}
      <section 
        ref={ref} 
        className={`relative z-10 py-32 px-4 max-w-6xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Destination Luxury Card (Hero-Frame Language) */}
          <div className="bg-gradient-to-br from-[#1A1513]/95 to-[#2E2522]/90 p-10 md:p-14 rounded-[2.5rem] text-white shadow-[0_35px_80px_rgba(0,0,0,0.6)] border border-white/10 flex flex-col justify-between relative overflow-hidden group backdrop-blur-md transform transition-all duration-500 hover:scale-[1.01]">
            {/* Elegant Inner Accent Line Frame */}
            <div className="absolute inset-4 border border-white/10 rounded-[1.8rem] pointer-events-none z-20" />
            
            <div className="relative z-10">
              <span className="tracking-[0.35em] text-[10px] uppercase text-[#D4AF37] block mb-3 font-bold drop-shadow-sm">
                Location Venue
              </span>
              <h2 className="font-serif text-4xl font-light mb-6 tracking-wide text-white drop-shadow-md">
                Directions
              </h2>
              <div className="w-12 h-[1px] bg-[#D4AF37]/30 mb-8" />
              
              <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-md font-light">
                We look forward to sharing our special day with you. The entire celebration ceremony and high-end reception will take place at:
              </p>
              
              <div className="text-white font-medium text-lg leading-snug tracking-wide bg-black/30 p-6 rounded-2xl border border-white/15 shadow-inner backdrop-blur-sm">
                📍 Nawawalang Paraiso Resort &amp; Hotel
                <span className="text-xs text-gray-400 font-normal block mt-2 tracking-wide">
                  Brgy. Camaysa Tayabas, Quezon Province 4327
                </span>
              </div>
            </div>

            <div className="relative z-10 mt-10">
              <a 
                href="https://maps.app.goo.gl/JhbLJRRoJuCJ9Aep7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 w-full sm:w-auto bg-gradient-to-r from-[#D4AF37] to-[#BDA131] hover:from-[#E6C242] hover:to-[#D4AF37] text-gray-900 font-semibold text-xs tracking-[0.25em] uppercase px-10 py-4 rounded-full shadow-[0_15px_30px_rgba(212,175,55,0.25)] transition-all duration-300 transform active:scale-95 hover:-translate-y-0.5"
              >
                <span>Open in Google Maps</span>
                <span className="text-xs">➔</span>
              </a>
            </div>
          </div>

          {/* Guest Attire Luxury Dashboard (Countdown Card Language) */}
          <div className="bg-white/95 backdrop-blur-md p-10 md:p-14 rounded-[2.5rem] shadow-[0_35px_80px_rgba(0,0,0,0.5)] border border-[#E5D3B3]/50 flex flex-col justify-between transform transition-all duration-500 hover:scale-[1.01]">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#4A6B53] block mb-1">
                    Dress Code
                  </span>
                  <h2 className="font-serif text-4xl text-[#2E2522] tracking-wide font-light drop-shadow-xs">
                    Guest Attire
                  </h2>
                </div>
                <span className="self-start sm:self-center bg-[#4A6B53] text-white text-[10px] font-bold px-5 py-2 rounded-full uppercase tracking-[0.2em] shadow-md border border-[#4A6B53]/20">
                  Cocktail Attire
                </span>
              </div>

              <div className="space-y-6 text-xs md:text-sm text-gray-600 border-b border-gray-100 pb-8 mb-8 font-light">
                <div className="bg-[#2E2522]/5 p-5 rounded-2xl border border-[#2E2522]/5">
                  <strong className="font-semibold uppercase tracking-[0.15em] text-[11px] block mb-1 text-[#4A6B53]">
                    Principal Sponsors (Gentlemen)
                  </strong>
                  <p className="text-gray-600 leading-relaxed">Tailored black coat and trousers paired with a classic tie matching shades of beige.</p>
                </div>
                <div className="bg-[#2E2522]/5 p-5 rounded-2xl border border-[#2E2522]/5">
                  <strong className="font-semibold uppercase tracking-[0.15em] text-[11px] block mb-1 text-[#4A6B53]">
                    Principal Sponsors (Ladies)
                  </strong>
                  <p className="text-gray-600 leading-relaxed">Floor-length gowns and elegant long evening dresses displaying the palette color choices.</p>
                </div>
                <div className="bg-[#2E2522]/5 p-5 rounded-2xl border border-[#2E2522]/5">
                  <strong className="font-semibold uppercase tracking-[0.15em] text-[11px] block mb-1 text-[#4A6B53]">
                    General Guests
                  </strong>
                  <p className="text-gray-600 leading-relaxed">Semi-formal styling curated beautifully inside our official thematic color system palette.</p>
                </div>
              </div>
            </div>

            {/* Premium Color Palette Grid Framework */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-5">
                Official Wedding Color Palette
              </h4>
              <div className="grid grid-cols-5 gap-3.5">
                {PREMIUM_COLORS.map((color) => (
                  <div key={color.name} className="flex flex-col items-center group cursor-pointer">
                    <div 
                      className="w-full aspect-square rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] border border-gray-200 transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] relative overflow-hidden"
                      style={{ backgroundColor: color.hex }}
                    >
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <span className="text-[9px] mt-2.5 text-gray-500 font-bold tracking-wider text-center truncate w-full opacity-75 group-hover:opacity-100 transition-opacity uppercase">
                      {color.name.split(' ')[1] || color.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}