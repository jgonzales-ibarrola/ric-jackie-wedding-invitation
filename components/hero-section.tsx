"use client";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Direct window hook optimized for element tracking at the top of the viewport
      setOffsetY(window.scrollY * 0.25);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Relative container boundary wrapper to contain the sliding parallax art canvas
    <div className="relative min-h-screen w-full overflow-hidden bg-[#2E2522]">
      
      {/* ── CINEMATIC PARALLAX BACKGROUND CANVAS ── */}
      <div 
        className="absolute inset-0 w-full h-[125%] -top-[10%] bg-cover bg-center pointer-events-none will-change-transform scale-105"
        style={{ 
          // Ultra-fine grain texture overlay showing premium blurred fairy lights & luxury space
          backgroundImage: "url('https://images.unsplash.com/photo-1507504038482-7621c6784ccd?auto=format&fit=crop&w=1920&q=50')",
          transform: `translateY(${offsetY}px)`,
        }}
      />
      
      {/* Luxury Color-Blending Matrix Scrim Layer (Gives deep rich shadows to optimize contrast) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2E2522]/90 via-[#2E2522]/65 to-[#2E2522]/95 mix-blend-multiply z-0" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#2E2522]/10 to-[#2E2522]/80 z-0" />

      {/* ── MAIN HERO LAYOUT CONTAINER ── */}
      <section className="relative z-10 min-h-screen flex flex-col justify-between items-center text-center p-6">
        
        {/* Top Header Block: Elevated Typography Hierarchy */}
        <div className="pt-20 md:pt-24 animate-fade-in">
          <span className="tracking-[0.35em] text-[11px] uppercase text-[#E5D3B3] block mb-4 font-bold drop-shadow-sm">
            Together with our families
          </span>
          <h1 className="font-serif text-6xl md:text-8xl font-light text-white tracking-wide my-4 drop-shadow-md">
            RIC{" "}
            <span className="text-[#9CAF88] font-normal italic">&amp;</span>{" "}
            JACKIE
          </h1>
          {/* Elegant structural divider separator */}
          <div className="w-16 h-[1px] bg-[#D4AF37]/40 mx-auto my-5" />
          <p className="tracking-[0.25em] text-xs uppercase text-[#E5D3B3]/80 max-w-xs md:max-w-md mx-auto leading-relaxed font-light">
            Invite you to our wedding celebration
          </p>
        </div>

        {/* Central Portrait Frame: High-Fidelity Depth Treatment */}
        <div className="w-full max-w-4xl h-112.5 md:h-150 my-10 rounded-[2rem] shadow-[0_35px_80px_rgba(0,0,0,0.6)] overflow-hidden relative border border-white/10 group bg-gray-950/40 backdrop-blur-sm">
          {/* Subtle gradient vignette on portrait card */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-40" />
          
          {/* High-Resolution Couple Image Stream Frame with dynamic kinetic hover */}
          <div
            className="w-full h-full bg-cover bg-center transition-all duration-1000 ease-out transform scale-100 group-hover:scale-[1.04]"
            style={{ backgroundImage: "url('/images/NZF_3457.jpg')" }}
          />

          {/* Premium Inner Frameline Accent Accentuation */}
          <div className="absolute inset-4 border border-white/10 rounded-[1.5rem] pointer-events-none z-20" />
        </div>

        {/* Bottom Metadata Block: High Contrast Time & Date Flag */}
        <div className="pb-16 md:pb-20">
          <p className="font-serif text-2xl md:text-3xl text-[#F3E5AB] font-light tracking-wide drop-shadow-sm">
            August 22, 2026
          </p>
          <p className="tracking-[0.3em] text-[10px] uppercase text-[#E5D3B3]/60 mt-2 font-bold">
            Saturday at 2:00 P.M.
          </p>
        </div>

      </section>
    </div>
  );
}