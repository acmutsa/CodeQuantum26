import partnerData from "./partners.json";
import PartnerCard from "./PartnerCard";
import Image from "next/image";

type Partner = {
	name: string;
	logo: string;
	url: string;
	tier: string;
	active?: boolean;
	desc?: string;
};

type Row = {
	name: string;
	tier: string;
	url: string;
	desc: string;
	logo: string;
};

export default function Partners() {
	const partners = (partnerData as { partners: Partner[] }).partners
		.filter((p) => p.active === true) // only active partners
		.filter((p) => Boolean(p.url) && Boolean(p.name));
	const LOGO_BASE = "/img/partners";

	const rows = partners.map((p) => ({
		name: p.name,
		tier: p.tier,
		url: p.url,
		logo: p.logo,
		desc: "Supporting local hackathon", // swapping later
	}));

	return (
		<section className="relative w-full overflow-hidden text-white">
			{/* background car */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				{/* left car */}
				<div className="absolute left-[-140px] top-10 h-[260px] w-[560px] opacity-[0.14] blur-[0.3px] md:opacity-[0.18]">
					<Image
						src="/img/partners/CQ-F1-Car.png"
						alt=""
						fill
						sizes="560px"
						className="object-contain"
						priority
					/>
				</div>

				{/* right car*/}
				<div className="absolute bottom-10 right-[-170px] h-[260px] w-[560px] opacity-[0.10] blur-[0.4px] md:opacity-[0.14]">
					<Image
						src="/img/partners/CQ-F1-Car.png"
						alt=""
						fill
						sizes="560px"
						className="scale-x-[-1] object-contain"
					/>
				</div>
			</div>

			{/* finish lines
			<div className="pointer-events-none absolute right-6 top-0 h-full w-10 opacity-90 hidden md:block z-10
				bg-[length:40px_40px]
				bg-[linear-gradient(45deg,#d6d6d6_25%,transparent_25%,transparent_75%,#d6d6d6_75%,#d6d6d6),linear-gradient(45deg,#d6d6d6_25%,transparent_25%,transparent_75%,#d6d6d6_75%,#d6d6d6)]
				bg-[position:0_0,20px_20px]"/>
			<div className="pointer-events-none absolute right-16 top-0 h-full w-10 opacity-90 hidden md:block z-10
				bg-[length:40px_40px]
				bg-[linear-gradient(45deg,#d6d6d6_25%,transparent_25%,transparent_75%,#d6d6d6_75%,#d6d6d6),linear-gradient(45deg,#d6d6d6_25%,transparent_25%,transparent_75%,#d6d6d6_75%,#d6d6d6)]
				bg-[position:0_0,20px_20px]"/>
			<div className="pointer-events-none absolute left-6 top-0 h-full w-10 opacity-90 hidden md:block z-10
				bg-[length:40px_40px]
				bg-[linear-gradient(45deg,#d6d6d6_25%,transparent_25%,transparent_75%,#d6d6d6_75%,#d6d6d6),linear-gradient(45deg,#d6d6d6_25%,transparent_25%,transparent_75%,#d6d6d6_75%,#d6d6d6)]
				bg-[position:0_0,20px_20px]"/>
			<div className="pointer-events-none absolute left-16 top-0 h-full w-10 opacity-90 hidden md:block z-10
				bg-[length:40px_40px]
				bg-[linear-gradient(45deg,#d6d6d6_25%,transparent_25%,transparent_75%,#d6d6d6_75%,#d6d6d6),linear-gradient(45deg,#d6d6d6_25%,transparent_25%,transparent_75%,#d6d6d6_75%,#d6d6d6)]
				bg-[position:0_0,20px_20px]"/> */}

			<div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-7">
				<h1 className="text-center text-4xl font-black tracking-tight text-white md:text-5xl">
					Sponsors &amp; Partners
				</h1>

				<p className="mx-auto mt-4 max-w-xl text-center text-sm text-white/70">
					Thank you to all of our sponsors and partners supporting
					Code Quantum 2026.
				</p>

				<p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
					{rows.length} partner{rows.length !== 1 ? "s" : ""} &middot;
					2026 season
				</p>

				<div className="mx-auto mt-10 max-w-4xl">
					<div className="space-y-4">
						{rows.map((r, idx) => (
							<a
								key={r.name}
								href={r.url}
								target="_blank"
								rel="noopener noreferrer"
								className="relative block cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.7)] backdrop-blur-md transition-all duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_24px_60px_rgba(0,0,0,0.9)] active:scale-[0.98] active:shadow-[0_12px_30px_rgba(0,0,0,0.8)] sm:px-5 sm:py-5"
							>
								<div className="pointer-events-none absolute inset-x-0 -top-16 h-24 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_60%)]" />

								<div className="relative flex flex-col gap-3 md:grid md:grid-cols-[minmax(200px,320px)_1fr] md:items-center md:gap-6">
									{/* mobile: logo and name/tier in one row */}
									<div className="flex items-center gap-4 md:hidden">
										<div className="shrink-0">
											<div className="relative h-20 w-40">
												<Image
													src={`${LOGO_BASE}/${r.logo}`}
													alt={`${r.name} logo`}
													fill
													sizes="192px"
													className="object-contain"
													priority={idx < 3}
												/>
											</div>
										</div>

										<div className="hidden min-w-0 md:block">
											<div className="block truncate text-2xl font-extrabold tracking-wide md:hidden">
												{r.name}
											</div>
											<div className="mt-1 text-base font-semibold text-[#C9A227]">
												{r.tier}{" "}
											</div>
										</div>

										<div className="ml-auto text-white/60">
											🤝
										</div>
									</div>

									{/* mobile description */}
									<p className="hidden text-lg text-white/85">
										{r.desc}
									</p>

									{/*desktop display with left logo */}
									<div className="hidden md:flex md:justify-start">
										<div className="shrink-0">
											<div className="relative h-20 w-44 lg:h-24 lg:w-64">
												<Image
													src={`${LOGO_BASE}/${r.logo}`}
													alt={`${r.name} logo`}
													fill
													sizes="176px"
													className="scale-110 object-contain"
													priority={idx < 3}
												/>
											</div>
										</div>
									</div>

									{/* desktop right content*/}
									<div className="hidden md:block">
										<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
											<div className="flex items-center gap-4">
												<div className="text-3xl font-extrabold tracking-wide">
													{r.name}
												</div>

												<div className="h-6 w-px bg-[#C9A227]/70" />

												<div className="text-lg font-semibold text-[#C9A227]">
													{r.tier}
												</div>
											</div>

											<div className="text-white/60">
												🤝
											</div>
										</div>

										<p className="mt-2 text-lg text-white/85">
											{r.desc}
										</p>
									</div>
								</div>
							</a>
						))}
					</div>

					{/* CTA*/}
					<div className="mt-10 flex justify-center">
						<div className="w-half sm:max-w-3x1 max-w-[90%] rounded-2xl border border-white/20 bg-white/5 px-6 py-6 backdrop-blur-md sm:px-2 sm:py-2">
							<h3 className="text-center text-xl font-bold text-white">
								{" "}
								Interested in partnering with us?{" "}
							</h3>

							<p className="mx-auto mt-4 hidden max-w-xl text-center text-sm text-white/70 md:block">
								Join us in supporting innovation, students, and
								the
								<br />
								tech community here at UTSA!
							</p>

							<div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
								<a
									href="mailto:team@acmutsa.org"
									className="inline-flex items-center gap-2 rounded-lg border border-[#C9A227] px-6 py-3 font-semibold text-[#C9A227] transition hover:bg-[#C9A227] hover:text-black"
								>
									Contact us
								</a>

								<a
									href="https://acmutsa.org/sponsorship/"
									className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
								>
									Learn more
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
