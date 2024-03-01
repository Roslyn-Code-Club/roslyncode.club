import roslyncodeclub from "../../../public/img/roslyncodeclub.svg";
import Image from "next/image";
import Link from "next/link";
import navLinks from "../../data/navLinks";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import ThemeSwitch from "./ThemeSwitch";
import { useSession, signOut, getSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [tooltip, setTooltip] = useState(false);
  const [hamButton, setHamButton] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="flex flex-col gap-4">
      <div className="fixed text-white text-xs w-full py-2 sm:text-base sm:py-1 bg-[#465bc7] font-bold z-50 text-center cursor-pointer brightness-95">
        <span className="animate-pulse">
          <Link href="/hackathon/2023">
            REGISTER FOR CODE OVERLOAD ON MARCH 25TH
          </Link>
        </span>
      </div>
      <div className="fixed w-full top-8 z-50 h-20 bg-roslyn flex flex-row items-center px-5 justify-between xl:justify-center shadow-xl">
        <div className="xl:max-w-7xl w-full flex flex-row items-center justify-between">
          <Link href="/">
            <div className="relative w-[4.25rem] h-[4.25rem] cursor-pointer hover:scale-110 hover:rotate-[-12deg] active:scale-[0.98] transition-[3s] ease-linear">
              <Image
                alt="Roslyn Code Club"
                src={roslyncodeclub}
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                draggable="false"
              />
            </div>
          </Link>
          <div className="w-[65%] xl:flex flex-row items-center justify-around translate-y-[0.125rem] hidden">
            {navLinks.map((e, key) => (
              <Link href={e.href} key={key}>
                <h1 className="text-2xl text-white tracking-tight font-mono font-semibold cursor-pointer w-min transition-[3s] border-b-2 border-white border-opacity-0 hover:border-opacity-100 ease-linear">
                  {`<${e.title.toLowerCase()}/>`}
                </h1>
              </Link>
            ))}
          </div>
        </div>
        {/* Rest of your code */}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: { session },
  };
}
