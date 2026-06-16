"use client";
import { useIntersectionOptions } from "@/hooks/use-intersection";

export default function RSVPForm() {
	const [ref, isVisible] = useIntersectionOptions();

	return (
		<section
			ref={ref}
			className={`py-24 px-4 bg-white transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
		>
			<div className="max-w-2xl mx-auto text-center">
				<div className="mb-10">
					<h2 className="font-serif text-3xl md:text-4xl text-[#8A7968] tracking-wide mb-3">
						Ready to Celebrate?
					</h2>
					<p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
						Please fill out the RSVP form below to let us know if
						you’ll be joining us for our special celebration.
					</p>
					<div className="inline-block mt-4 border border-dashed border-[#9CAF88] px-4 py-1.5 rounded-full">
						<span className="text-xs font-bold uppercase tracking-widest text-[#9CAF88]">
							Kindly Respond By July 22
						</span>
					</div>
				</div>

				{/* Embedded Dynamic Form Wrapper */}
				<div className="w-full rounded-2xl shadow-2xl border border-gray-100 overflow-hidden bg-gray-50 h-162.5 relative">
					<iframe
						src="https://canva-embed.com/api/iframe?url=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSd5749l_uiN85jFLwjtEEh8hSGqbEhyNo8N4Grd4fZEH-choQ%2Fviewform&key=462812a26b593f2dbfbfcbb14f6d699a"
						className="absolute inset-0 w-full h-full border-0"
						title="Ric and Jackie Wedding RSVP Questionnaire"
					>
						Loading form module...
					</iframe>
				</div>
			</div>
		</section>
	);
}
