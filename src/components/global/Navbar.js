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
      <Link href="/hackathon/2023">
        <div className="fixed text-white text-xs w-full py-2 sm:text-base sm:py-1 bg-[#465bc7] font-bold z-50 text-center cursor-pointer brightness-95">
          <span className="animate-pulse">REGISTER FOR CODE OVERLOAD ON MARCH 25TH</span>
        </div>
      </Link>
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
        <div className="flex flex-row gap-x-4 items-center justify-end w-auto flex-shrink-0">
          <ThemeSwitch />
          {status === "authenticated" ? (
            <>
              <Link href="/attendance">
                <div
                  onMouseEnter={() => setTooltip(true)}
                  onMouseLeave={() => setTooltip(false)}
                  className="relative w-8 h-8 rounded-full overflow-hidden cursor-pointer border-2 border-transparent hover:border-white transition ease-linear"
                >
                  <Image
                    src={session.user.image}
                    alt={session.user.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center center"
                    draggable="false"
                  />
                </div>
              </Link>
              <span
                className={`text-xs px-2 py-1 bg-gray-700 rounded-lg absolute top-16 bg-opacity-60 backdrop-blur-sm text-white ${
                  tooltip ? "block" : "hidden"
                }`}
              >
                Sign In Attendance
              </span>
            </>
          ) : null}
          {status === "authenticated" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-8 hidden xl:block cursor-pointer hover:scale-105 ease-linear transition-[3s] active:scale-95"
              fill="none"
              onClick={() => signOut()}
              viewBox="0 0 24 24"
              stroke="#fff"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          ) : (
            <Link href="/sign-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto w-8 hidden xl:block cursor-pointer hover:scale-105 ease-linear transition-[3s] active:scale-95"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            </Link>
          )}
          {hamButton ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-8 xl:hidden"
              onClick={() => setMenuOpen(true)}
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-8 xl:hidden opacity-0"
              onClick={() => setMenuOpen(true)}
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </div>
        <CSSTransition
          in={menuOpen}
          timeout={300}
          unmountOnExit
          classNames="mobileNav"
          onEnter={() => setHamButton(false)}
          onExited={() => setHamButton(true)}
        >
          <div
            className="fixed top-0 left-0 flex flex-col backdrop-blur-xl backdrop-brightness-50 w-full z-50 h-screen px-4 py-6 text-white"
            onClose={() => setMenuOpen(false)}
          >
            <div className="flex flex-row w-full justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto w-8 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setMenuOpen(false)}
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="flex flex-col text-center w-full h-full gap-12 justify-center pb-28 items-center">
              {navLinks.map((e, key) => (
                <Link href={e.href} key={key}>
                  <h1
                    onClick={() => setMenuOpen(false)}
                    className="text-3xl leading-tight font-black font-mono cursor-pointer w-min transition-[3s] border-b-2 border-white border-opacity-0 hover:border-opacity-100 ease-linear"
                  >
                    {`<${e.title.toLowerCase()}/>`}
                  </h1>
                </Link>
              ))}
              {status === "authenticated" ? (
                <>
                  <h1
                    onClick={() => signOut()}
                    className="text-3xl leading-tight font-black font-mono cursor-pointer w-min transition-[3s] border-b-2 border-white border-opacity-0 hover:border-opacity-100 ease-linear whitespace-nowrap"
                  >
                    {`<sign out/>`}
                  </h1>
                </>
              ) : (
                <Link href="/sign-in">
                  <h1
                    onClick={() => setMenuOpen(false)}
                    className="text-3xl leading-tight font-black font-mono cursor-pointer w-min transition-[3s] border-b-2 border-white border-opacity-0 hover:border-opacity-100 ease-linear whitespace-nowrap"
                  >
                    {`<sign in/>`}
                  </h1>
                </Link>
              )}
            </div>
          </div>
        </CSSTransition>
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
