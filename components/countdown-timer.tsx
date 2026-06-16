"use client";
import { useState, useEffect, useRef } from "react";
import { useIntersectionOptions } from "@/hooks/use-intersection";

export default function CountdownTimer() {
	const [ref, isVisible] = useIntersectionOptions();
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	// High-performance scroll tracking for hardware-accelerated parallax motion
	const containerRef = useRef<HTMLDivElement>(null);
	const [offsetY, setOffsetY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (!containerRef.current) return;
			const rect = containerRef.current.getBoundingClientRect();
			const scrolledPast = window.innerHeight - rect.top;

			if (scrolledPast > 0 && rect.bottom > 0) {
				// 0.12 velocity coefficient prevents clipping and keeps the scroll organic
				setOffsetY(scrolledPast * 0.12);
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const weddingDate = new Date("2026-08-22T14:00:00").getTime();

		const interval = setInterval(() => {
			const now = new Date().getTime();
			const difference = weddingDate - now;

			if (difference <= 0) {
				clearInterval(interval);
				return;
			}

			setTimeLeft({
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor(
					(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
				),
				minutes: Math.floor(
					(difference % (1000 * 60 * 60)) / (1000 * 60),
				),
				seconds: Math.floor((difference % (1000 * 60)) / 1000),
			});
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		// Outer relative wrapper to house the moving layer
		<div
			ref={containerRef}
			className="relative w-full overflow-hidden bg-[#2E2522]"
		>
			{/* ── PARALLAX CANVAS LAYER ── */}
			<div
				className="absolute inset-0 w-full h-[130%] -top-[15%] bg-cover bg-center pointer-events-none will-change-transform scale-105"
				style={{
					// High-end cinematic visual backdrop (magical evening lighting)
					// https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1920&q=50
					backgroundImage: `url('/images/NZF_3260.jpg')`,
					transform: `translateY(${offsetY}px)`,
				}}
			/>

			{/* Luxury Scrim Overlay Container to handle typography readability */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#2E2522]/95 via-[#2E2522]/75 to-[#2E2522]/95 mix-blend-multiply z-0" />
			<div className="absolute inset-0 bg-radial-gradient from-transparent via-[#2E2522]/40 to-[#2E2522]/90 z-0" />

			{/* ── MAIN LAYOUT CONTENT BLOCK ── */}
			<div
				ref={ref}
				className={`relative z-10 py-28 px-4 max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
			>
				<h3 className="text-[#E5D3B3] font-serif text-lg md:text-xl tracking-widest mb-10 italic drop-shadow-sm">
					&quot;The countdown to forever has begun...&quot;
				</h3>

				{/* Upgraded High-Fidelity Vibrant Cards */}
				<div className="grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto mb-14">
					{Object.entries(timeLeft).map(([label, value]) => (
						<div
							key={label}
							className="bg-white/95 shadow-[0_15px_35px_rgba(0,0,0,0.35)] border border-[#E5D3B3]/40 p-4 md:p-6 rounded-2xl backdrop-blur-md transform transition-all duration-300 hover:scale-[1.03] hover:border-[#D4AF37]/60"
						>
							<span className="block font-bold text-3xl md:text-5xl text-[#4A6B53] font-mono tracking-tight">
								{String(value).padStart(2, "0")}
							</span>
							<span className="block text-[10px] tracking-[0.2em] text-[#8A7968] uppercase font-bold mt-2">
								{label}
							</span>
						</div>
					))}
				</div>

				{/* Framing Scripture Quote Block */}
				<div className="border-t border-b border-[#E5D3B3]/20 py-8 max-w-xl mx-auto">
					<p className="font-serif text-[#F3E5AB] text-base md:text-xl italic leading-relaxed px-4 drop-shadow-sm">
						“When the time is right, I, the Lord will make it
						happen”
					</p>
					<span className="block text-[11px] uppercase tracking-[0.25em] font-bold text-[#D4AF37] mt-3">
						Isaiah 60:22
					</span>
				</div>

				<p className="text-sm font-bold text-[#9CAF88] tracking-[0.3em] uppercase mt-10 animate-pulse">
					We can&apos;t wait to celebrate with you!
				</p>
			</div>
		</div>
	);
}
