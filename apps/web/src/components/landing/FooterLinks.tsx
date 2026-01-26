import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "../shadcn/ui/dropdown-menu";
import Link from "next/link";

const resources = [
  { name: "Register", link: "/auth" },
  { name: "ACM-W", link: "https://acmutsa.org/suborg_acmw/" },
  { name: "ACM UTSA", link: "https://acmutsa.org/" },
] as const;

const links = [
  { name: "Open Source", link: "https://github.com/acmutsa/CodeQuantum26.git" }
] as const;

const hackathons = [
  { name: "RowdyHacks", link: "https://rowdyhacks.org/" },
  { name: "RowdyDatathon", link: "https://rowdydatathon.org/" },
  { name: "TAMUhack", link: "https://tamuhack.com/" },
  { name: "WEHack", link: "https://wehackutd.com/" },
  { name: "HackUTD", link: "https://hackutd.co/" },
  { name: "HackTX", link: "https://hacktx.com/" },
  { name: "HackUNT", link: "https://unthackathon.com/#/" },
  { name: "HackUTA", link: "https://hackuta.org/" },
  { name: "Hacklahoma", link: "https://hacklahoma.org/" },
] as const;

const socials = [
  { name: "GirHub", link: "https://github.com/acmutsa/CodeQuantum26.git"},
  { name: "Discord", link: ""},
  { name: "Instagram", link: "http://instagram.com/cqhacks/" },
  { name: "Facebook", link: "https://www.facebook.com/UTSA.ACM" },
  { name: "X", link: "" },
] as const;

export default function FooterLinks({ title, data,}: { title: string; data: Readonly<{ name: string; link: string }[]>;}) {
  return (
    <>
      {/* Mobile Dropdown */}
      <div className="col-span-2 flex w-full lg:col-span-1 lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-md mx-auto font-bold">
            <span className="font-racing text-2xl text-white drop-shadow-md md:text-1xl">{title}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="relative overflow-hidden rounded-[23px] border border-white/10 bg-zinc-950/90 p-4 shadow-[0_22px_60px_rgba(0,0,0,0.35)] md:p-5 lg:p-6">
            {data.map(({ name, link }, idx) => (
              <DropdownMenuItem key={idx}>
                <Link
                  
                  className="block text-sm font-semibold text-white"
                  href={link}
                >
                  {name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop List */}
      <div className="hidden flex-col lg:flex">
        
        <h2 className="font-racing text-2xl text-white drop-shadow-md md:text-1xl">{title}</h2>
        {data.map(({ link, name }, idx) => (
          <Link
            href={link}
            className="text-sm text-white hover:underline"
            key={idx}
          >
            <span className="font-semibold">{name}</span>
          </Link>
        ))}
      </div>
    </>
  );
}

export const footerSections = [
  { title: "Resources", data: resources },
  { title: "Links", data: links },
  { title: "Other Hackathons", data: hackathons },
  { title: "Socials", data: socials },
] as const;
