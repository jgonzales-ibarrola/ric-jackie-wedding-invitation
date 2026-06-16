"use client";
import { useState } from "react";
import { PLAYLIST } from "@/constants/wedding-data";

export default function AudioPlayer() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [trackIndex, setTrackIndex] = useState(0);

	const togglePlayback = () => setIsPlaying(!isPlaying);
	const skipTrack = () =>
		setTrackIndex((prev) => (prev + 1) % PLAYLIST.length);

	return (
		<div className="fixed bottom-6 right-6 z-50 bg-white/90 backdrop-blur-md shadow-xl border border-[#9CAF88]/20 px-4 py-3 rounded-full flex items-center space-x-3 transition-transform duration-300 hover:scale-105">
			<div className="text-xs max-w-35 truncate font-medium text-[#8A7968]">
				{isPlaying ? `🎵 ${PLAYLIST[trackIndex]}` : "Music Paused"}
			</div>
			<button
				onClick={togglePlayback}
				className="w-8 h-8 rounded-full bg-[#9CAF88] text-white flex items-center justify-center text-sm font-bold hover:bg-[#8A7968] transition-colors"
				aria-label={isPlaying ? "Pause music" : "Play music"}
			>
				{isPlaying ? "⏸" : "▶"}
			</button>
			<button
				onClick={skipTrack}
				className="text-gray-400 hover:text-[#9CAF88] text-sm font-medium px-1 transition-colors"
				aria-label="Next track"
			>
				⏭
			</button>
		</div>
	);
}
