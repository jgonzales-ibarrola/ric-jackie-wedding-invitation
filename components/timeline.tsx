'use client';
import { useState, useEffect, useRef } from 'react';
import { EXACT_TIMELINE } from '@/constants/wedding-data';
import { useIntersectionOptions } from '@/hooks/use-intersection';

export default function Timeline() {
  const [ref, isVisible] = useIntersectionOptions();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // High-performance scroll tracking for smooth parallax calculation
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      // Calculate how far the section is from the viewport top
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolledPast = window.innerHeight - rect.top;
      
      if (scrolledPast > 0 && rect.bottom > 0) {
        // 0.15 is the velocity speed. Lower = slower/subtler motion
        setOffsetY(scrolledPast * 0.15);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? EXACT_TIMELINE.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === EXACT_TIMELINE.length - 1 ? 0 : prev + 1));
  };

  return (
    // Modified root to be a relative full-bleed wrapper to house the parallax canvas
    <div ref={sectionRef} className="relative w-full overflow-hidden bg-[#2E2522]">
      
      {/* ── PARALLAX BACKGROUND CANVAS LAYER ── */}
      <div 
        className="absolute inset-0 w-full h-[130%] -top-[15%] bg-cover bg-center pointer-events-none will-change-transform scale-105"
        style={{ 
          // High-end cinematic placeholder of blurred string lights & venue ambiance
          backgroundImage: `url('https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&w=1920&q=40')`,
          transform: `translateY(${offsetY}px)`,
        }}
      />
      
      {/* Editorial Luxury Scrim Overlay (Blends the parallax image gracefully into the dark theme) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2E2522]/90 via-[#2E2522]/75 to-[#2E2522]/95 mix-blend-multiply z-0" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#2E2522]/90 z-0" />

      {/* ── MAIN CONTENT CONTAINER (Stays perfectly aligned & un-shifted) ── */}
      <section ref={ref} className={`relative z-10 py-28 px-4 max-w-6xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        
        {/* Editorial Header Section */}
        <div className="text-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#E5D3B3] block mb-2">
            The Celebration Roadmap
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-wide font-light">
            Wedding Timeline
          </h2>
          <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Main Layout Container */}
        <div className="bg-white/95 backdrop-blur-md rounded-[2rem] p-6 md:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.4)] border border-white/10">
          
          {/* Step 1: Horizontal Progression Track Indicator */}
          <div className="relative mb-12 hidden md:block">
            <div className="absolute top-[18px] left-4 right-4 h-[2px] bg-gray-100 z-0" />
            <div 
              className="absolute top-[18px] left-4 h-[2px] bg-gradient-to-r from-[#4A6B53] to-[#D4AF37] transition-all duration-500 z-0" 
              style={{ width: `${(currentIndex / (EXACT_TIMELINE.length - 1)) * 95}%` }}
            />

            <div className="relative z-10 flex justify-between">
              {EXACT_TIMELINE.map((item, idx) => {
                const isPastOrCurrent = idx <= currentIndex;
                const isCurrent = idx === currentIndex;
                return (
                  <button
                    key={item.time}
                    onClick={() => setCurrentIndex(idx)}
                    className="flex flex-col items-center group focus:outline-none"
                  >
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-500 ${
                      isCurrent 
                        ? 'bg-[#4A6B53] text-white shadow-lg ring-4 ring-[#4A6B53]/10 scale-110' 
                        : isPastOrCurrent 
                          ? 'bg-[#4A6B53]/10 text-[#4A6B53] border border-[#4A6B53]/30' 
                          : 'bg-white text-gray-400 border border-gray-200 group-hover:border-gray-400'
                    }`}>
                      {idx + 1}
                    </div>
                    <span className={`text-[11px] font-bold tracking-wide mt-3 transition-colors duration-300 ${isCurrent ? 'text-[#4A6B53]' : 'text-gray-400 group-hover:text-gray-700'}`}>
                      {item.time}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Immersive Large Interactive Card Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gray-50/60 rounded-3xl p-4 md:p-8 border border-gray-100">
            
            {/* Animated Hero Canvas */}
            <div className="lg:col-span-7 h-[300px] md:h-[420px] w-full rounded-2xl overflow-hidden relative group shadow-xl border border-white">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              
              {EXACT_TIMELINE.map((item, idx) => (
                <div
                  key={item.image}
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out transform ${
                    idx === currentIndex ? 'opacity-100 scale-100 z-0' : 'opacity-0 scale-105 pointer-events-none'
                  }`}
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
              ))}

              {/* Mobile-only Timestamp Overlay Floating Badge */}
              <span className="md:hidden absolute top-4 left-4 z-20 bg-white/95 text-[#4A6B53] font-mono text-xs font-bold px-3 py-1 rounded-lg shadow-md">
                {EXACT_TIMELINE[currentIndex].time}
              </span>
            </div>

            {/* Synchronized Content Details Column */}
            <div className="lg:col-span-5 px-2 md:px-6 flex flex-col justify-between h-full py-4">
              <div>
                <span className="hidden md:inline-block font-mono text-xs font-bold text-[#D4AF37] tracking-widest uppercase mb-1">
                  {EXACT_TIMELINE[currentIndex].time}
                </span>
                <h3 className="font-serif text-3xl font-light text-[#2E2522] tracking-wide mb-4 transition-all duration-300">
                  {EXACT_TIMELINE[currentIndex].title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light min-h-[72px]">
                  {EXACT_TIMELINE[currentIndex].description}
                </p>
              </div>

              {/* Step 3: Premium Navigation Controllers */}
              <div className="flex items-center space-x-4 mt-8 lg:mt-0">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border border-gray-200 bg-white hover:border-[#4A6B53] hover:text-[#4A6B53] text-gray-500 flex items-center justify-center transition-all duration-300 active:scale-90 hover:shadow-md"
                  aria-label="Previous step"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  className="flex-1 md:flex-none h-12 px-6 rounded-full bg-[#4A6B53] hover:bg-[#3B5442] text-white font-medium text-xs tracking-widest uppercase flex items-center justify-center space-x-2 shadow-lg shadow-[#4A6B53]/10 transition-all duration-300 active:scale-95"
                  aria-label="Next step"
                >
                  <span>Next Milestone</span>
                  <span>➔</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}