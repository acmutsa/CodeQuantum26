import Image from "next/image";
import Link from "next/link";
import { Button } from "../shadcn/ui/button";

export default function Hero() {
	return (
		<section className="grid w-full grid-cols-1 overflow-hidden">
			<div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat" 
     			style={{ backgroundImage: "url('/img/hero-bg.jpeg')" }}>
				{/* Dark overlay */}
				<div className="absolute inset-0 bg-black/50 z-0"></div>
				
				<div className="relative z-10">
					<div className="flex flex-col items-center gap-3">
						<h1 
							className="font-racing text-[4rem] text-white md:text-[10rem]"
							style={{
								background: 'linear-gradient(to bottom, #ffffff 0%, #e8e8e8 50%, #ffffff 100%)',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								textShadow: '0 1px 2px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.5)'
							}}
						>
							CodeQuantum
						</h1>
						<p
							className="font-racing text-[1rem] text-white md:text-[2rem]"
							style={{
								background: 'linear-gradient(to bottom, #ffffff 0%, #e8e8e8 50%, #ffffff 100%)',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								textShadow: '0 1px 2px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.5)'
							}}
						>
							3/28 @ UTSA Business Building
						</p>
					</div>
					<div className="mt-6 flex justify-center">
					</div>
				</div>
			</div>
		</section>
	);
}
