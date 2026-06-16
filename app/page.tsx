import AudioPlayer from "@/components/audio-player";
import CountdownTimer from "@/components/countdown-timer";
import Entourage from "@/components/entourage";
import HeroSection from "@/components/hero-section";
import Logistics from "@/components/logistics";
import Registry from "@/components/registry";
import RSVPForm from "@/components/RSVP-form";
import Timeline from "@/components/timeline";

export default function WeddingInvitationPage() {
	return (
		<main className="min-h-screen bg-[#F9F8F6] text-gray-800 antialiased overflow-x-hidden selection:bg-[#9CAF88]/20">
			{/* Background Ambient Audio Deck Widget */}
			{/* <AudioPlayer /> */}

			{/* Narrative Page Section Node Stack */}
			<HeroSection />
			<CountdownTimer />
			<Logistics />
			<Timeline />
			<Entourage />
			<Registry />
			<RSVPForm />
		</main>
	);
}
