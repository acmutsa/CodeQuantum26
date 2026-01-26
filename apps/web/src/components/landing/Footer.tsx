"use client";

import { type FunctionComponent, useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import CreatedWithHackkit from "@/components/landing/CreatedWithHackkit";
import FooterLinks, { footerSections } from "./FooterLinks";
import { motion } from "framer-motion";

interface Props {
	className?: string;
}

interface CarAnimationProps {
  parentRef: React.RefObject<HTMLDivElement>;
}

export function CarAnimation({ parentRef }: CarAnimationProps) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!parentRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 } 
    );

    observer.observe(parentRef.current);

    return () => observer.disconnect();
  }, [parentRef]);

  return (
    <motion.img
      src="/img/sideveiwF1.png"
      alt="F1"
      className="w-[20%] h-auto"
      initial={{ x: 0 }}           
      animate={inView ? { x: "100vw" } : {}}
      transition={inView ? { duration: 4.5, ease: "easeOut", delay: 1 }: { duration: 0.1, ease: "easeOut", delay: 0 }}
    />
  );
}


export default function Footer() {
	const raceTrackRef = useRef<HTMLDivElement>(null);
	return (
		<>
			<div
			ref={raceTrackRef}
			className="relative flex min-h-[20vh] w-full items-center justify-start bg-contain bg-center bg-no-repeat"
			style={{ backgroundImage: "url('/img/race_track.png')" }}
			>
				<CarAnimation parentRef={raceTrackRef} />
			</div>

			<footer className="relative bottom-0 min-h-[375px] w-full flex flex-col items-center justify-center gap-8 border-muted-foreground p-1 py-8 sm:p-8 md:px-10">
				<div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 md:justify-items-center lg:grid-cols-4 lg:justify-items-center">
		
					{footerSections.map((section) => (
						<FooterLinks
							key={section.title}
							title={section.title}
							data={section.data}
						/> 
					))}

				</div>

				<p className="text-white-500 col-span-2 self-center justify-self-center text-center font-mono text-xs sm:col-start-2 md:py-0 lg:col-span-3 lg:col-start-2 lg:row-start-2 lg:w-11/12">
					Made with &lt;/&gt; &amp; ♥ @ Code Quantum
					<br />© Code Quantum &amp; Association of Computing
					Machinery at UTSA 2025. All Rights Reserved.
				</p>

				<div className="col-span-2 flex flex-col gap-y-3 justify-self-center lg:col-span-1">
					<CreatedWithHackkit />
				</div>
				
			</footer>
		</>
	);
}