'use client';
import { useIntersectionOptions } from '@/hooks/use-intersection';

export default function Registry() {
  const [ref, isVisible] = useIntersectionOptions();

  return (
    <div className="relative w-full overflow-hidden bg-[#2E2522]">
      {/* Luxury Color-Blending Matrix Scrim Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2E2522]/95 via-[#2E2522]/80 to-[#2E2522]/95 mix-blend-multiply z-0" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#2E2522]/30 to-[#2E2522]/90 z-0" />

      <section 
        ref={ref} 
        className={`relative z-10 py-32 px-4 max-w-5xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* ── CINEMATIC UNPLUGGED ETIQUETTE FRAME (Hero Dark language) ── */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1A1513]/95 to-[#2E2522]/90 p-10 rounded-[2.5rem] text-white border border-white/10 flex flex-col justify-center items-center relative overflow-hidden group text-center shadow-[0_35px_80px_rgba(0,0,0,0.6)] backdrop-blur-md transform transition-all duration-500 hover:scale-[1.01]">
            {/* Elegant Inner Line Accent Frame */}
            <div className="absolute inset-4 border border-white/10 rounded-[1.8rem] pointer-events-none z-20" />
            
            <div className="relative z-10 flex flex-col items-center">
              {/* Refined Minimalist Graphic Placeholder */}
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-inner text-2xl group-hover:border-[#D4AF37]/40 transition-colors duration-500">
                <svg className="w-6 h-6 text-[#E5D3B3]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H13.5M10.5 22.5H13.5M19.5 4.5V19.5C19.5 20.3284 18.8284 21 18 21H6C5.17157 21 4.5 20.3284 4.5 19.5V4.5C4.5 3.67157 5.17157 3 6 3H18C18.8284 3 19.5 3.67157 19.5 4.5Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3L21 21" strokeWidth="1.5" className="stroke-[#D4AF37]" />
                </svg>
              </div>
              
              <span className="tracking-[0.35em] text-[10px] uppercase text-[#D4AF37] block mb-3 font-bold drop-shadow-sm">
                Ceremony Etiquette
              </span>
              <h3 className="font-serif text-3xl font-light mb-5 tracking-wide text-white drop-shadow-md">
                Unplugged Ceremony
              </h3>
              <div className="w-12 h-[1px] bg-[#D4AF37]/30 mb-6" />
              
              <p className="text-gray-300 text-xs md:text-sm font-light italic leading-relaxed max-w-xs px-2 opacity-90">
                &ldquo;We have but one plea, please keep our ceremony CAMERA-FREE. Though our I DO’s are unplugged, our reception is not. Once the ceremony is over, you can start snapping shots.&rdquo;
              </p>
            </div>
          </div>

          {/* ── PREMIUM CONTRIBUTIONS CARD (Countdown Glass language) ── */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-md p-10 md:p-12 rounded-[2.5rem] shadow-[0_35px_80px_rgba(0,0,0,0.5)] border border-[#E5D3B3]/50 flex flex-col justify-between transform transition-all duration-500 hover:scale-[1.01]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#4A6B53] block mb-1.5">
                Registry Details
              </span>
              <h3 className="font-serif text-4xl text-[#2E2522] mb-4 tracking-wide font-light drop-shadow-xs">
                Wedding Wishes &amp; Gifts
              </h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-light mb-10">
                Your presence and prayers are the greatest gift of all. However, if you wish to honor us with a gesture, a monetary contribution would be greatly appreciated to support us as we begin our new path together.
              </p>
            </div>
            
            {/* Transaction Grid Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* PNB Node */}
              <div className="border border-[#E5D3B3]/40 p-6 rounded-2xl bg-[#2E2522]/5 hover:bg-white hover:border-[#D4AF37]/60 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center transform hover:scale-[1.02]">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-4 block">
                  PNB Bank Transfer
                </span>
                {/* Elevated QR Picture Frame Container */}
                <div className="w-32 h-32 bg-white rounded-2xl mb-5 p-2 shadow-md border border-gray-100 flex items-center justify-center group-hover:shadow-inner transition-shadow duration-300">
                  <div 
                    className="w-full h-full bg-cover bg-center rounded-xl" 
                    style={{ backgroundImage: "url('/images/pnb_qr.jpg')" }} 
                  />
                </div>
                <p className="text-xs font-semibold text-[#2E2522] tracking-wide">Account Name: RicJackie</p>
                <p className="text-[10px] font-mono font-bold text-gray-500 bg-gray-200/60 px-4 py-1.5 rounded-full mt-3 group-hover:bg-[#4A6B53]/10 group-hover:text-[#4A6B53] transition-colors">
                  XXXX XXXX 2152
                </p>
              </div>

              {/* GCash Node */}
              <div className="border border-[#E5D3B3]/40 p-6 rounded-2xl bg-[#2E2522]/5 hover:bg-white hover:border-[#D4AF37]/60 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center transform hover:scale-[1.02]">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-4 block">
                  GCash Smart Wallet
                </span>
                {/* Elevated QR Picture Frame Container */}
                <div className="w-32 h-32 bg-white rounded-2xl mb-5 p-2 shadow-md border border-gray-100 flex items-center justify-center group-hover:shadow-inner transition-shadow duration-300">
                  <div 
                    className="w-full h-full bg-cover bg-center rounded-xl" 
                    style={{ backgroundImage: "url('/images/gcash_qr.jpg')" }} 
                  />
                </div>
                <p className="text-xs font-semibold text-[#2E2522] tracking-wide">Account Holder: JA*******E G.</p>
                <p className="text-[10px] font-mono font-bold text-gray-500 bg-gray-200/60 px-4 py-1.5 rounded-full mt-3 group-hover:bg-[#4A6B53]/10 group-hover:text-[#4A6B53] transition-colors">
                  Scan Secure QR Code
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}