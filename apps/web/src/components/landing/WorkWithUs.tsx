"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function WorkWithUs() {
  const parentRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (parentRef.current) observer.observe(parentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={parentRef} className="flex flex-col items-center gap-8 h-auto py-16">
		<div className="mx-auto inline-block text-center">
			<h1 className="font-racing text-5xl text-white drop-shadow-md md:text-3xl">
        		Interested in helping or sponsoring?
      		</h1>
		</div>

      <motion.div
        initial={{ x: "-100vw" }}
        animate={inView ? { x: 0 } : {}}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="lg:w-[50%] md:w-[65%] sm:w-[75%] w-[75%] h-auto"
      >
         <Link href=" https://tally.so/r/jalpWR" className="flex items-center justify-center inline-block transition-transform duration-300 hover:scale-105"> 
			<img
				src="/img/judge_ticket.png"
				alt="Navigate to page"
				className="w-full h-auto"
			/>
		</Link>
      </motion.div>

      <motion.div
        initial={{ x: "100vw" }}
        animate={inView ? { x: 0 } : {}}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="lg:w-[50%] md:w-[65%] sm:w-[75%] w-[75%] h-auto"
      >
        <Link href="https://tally.so/r/68jq1N" className="flex items-center justify-center inline-block transition-transform duration-300 hover:scale-105">
			<img
				src="/img/mentor_ticket.png"
				alt="Navigate to page"
				className="w-full h-auto"
			/>
		</Link>
      </motion.div>

      <motion.div
        initial={{ x: "-100vw" }}
        animate={inView ? { x: 0 } : {}}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="lg:w-[50%] md:w-[65%] sm:w-[75%] w-[75%] h-auto"
      >
        
		<Link href="https://tally.so/r/ZjExgo" className="flex items-center justify-center inline-block transition-transform duration-300 hover:scale-105">
			<img
				src="/img/volunteer_ticket.png"
				alt="Navigate to page"
				className="w-full h-auto"
			/>
		</Link>
      </motion.div>

    </section>
  );
}
