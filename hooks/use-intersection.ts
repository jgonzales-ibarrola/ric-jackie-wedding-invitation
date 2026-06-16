"use client";
import { useEffect, useState, useRef, RefObject } from "react";

export function useIntersectionOptions(
	options?: IntersectionObserverInit,
): [RefObject<HTMLDivElement | null>, boolean] {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const element = containerRef.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(element);
				}
			},
			options || { threshold: 0.1 },
		);

		observer.observe(element);
		return () => {
			if (element) observer.unobserve(element);
		};
	}, [options]);

	return [containerRef, isVisible];
}
