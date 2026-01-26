import Image from "next/image";
import Link from "next/link";
export default function CreatedWithHackkit() {
	return (

		<div className="flex items-center gap-x-2 rounded-[23px] border border-white/10 bg-zinc-950/90 p-4 shadow-[0_22px_60px_rgba(0,0,0,0.35)] md:p-5 lg:p-6">
			<Image
				src="/img/logo/hackkit.svg"
				alt="HackKit Logo"
				width={35}
				height={35}
			/>
			<div className="flex text-sm">
				<Link
					href="https://github.com/acmutsa/HackKit"
					className="text-center hover:underline"
				>
					Created with HackKit
				</Link>
			</div>
		</div>
	);
}
