import Link from "next/link";
import React from "react";
import Info from "../../components/hackathon/Info";
import About from "../../components/hackathon/About";
import Schedule from "../../components/hackathon/Schedule";
import FAQ from "../../components/hackathon/FAQ";

export default function Hackathon() {
  return (
    <>
      <main className="animated-grid flex justify-center">
        <div className="grid-fade" />
        <div className="grid-lines" />
        <div className="flex flex-col items-center gap-y-8 max-w-7xl p-8 w-full h-full absolute z-50 top-1/3 scale-110">
          <h1 className="text-center text-5xl sm:text-7xl 2xl:text-8xl font-bold select-none glow-white">
            Roslyn Code
            <br />
            Overload
            <span className="text-roslyn tracking-tighter font-extrabold drop-shadow-lg shadow-white glow-roslyn">{`</>`}</span>
          </h1>
          <section className="flex flex-row justify-center gap-4 2xl:gap-16 w-fit">
            <Link href="/">
              <span className="w-fit text-center cursor-pointer px-6 py-3 border-2 border-white hover:border-roslyn rounded-xl bg-white bg-opacity-10 backdrop-blur-md hover:bg-roslyn font-semibold text-sm md:text-base lg:text-lg 2xl:text-xl transition ease-linear shadow-gray-700 shadow-lg hover:shadow-[#5d77fcb7]">
                Register Here
              </span>
            </Link>
            <Link href="#event-schedule">
              <span className="w-fit text-center cursor-pointer px-6 py-3 border-2 border-white hover:border-roslyn rounded-xl bg-white bg-opacity-10 backdrop-blur-md hover:bg-roslyn font-bold text-sm md:text-base lg:text-lg 2xl:text-xl transition ease-linear shadow-gray-700 shadow-lg hover:shadow-[#5d77fcb7]">
                Event Schedule
              </span>
            </Link>
          </section>
        </div>
      </main>
      <section className="bg-white text-black w-full min-h-screen flex flex-col gap-16 justify-around items-center px-8 py-24">
        <Info />
        <About />
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        version="1.1"
        viewBox="0 0 900 100"
      >
        <path fill="#fff" d="M0 0H900V100H0z" />
        <path
          fill="#5d78Fc"
          strokeLinecap="round"
          d="M0 69l21.5.3c21.5.4 64.5 1 107.3-6.5 42.9-7.5 85.5-23.1 128.4-29.6 42.8-6.5 85.8-3.9 128.6 1.5C428.7 40 471.3 48 514.2 47.5 557 47 600 38 642.8 38.7c42.9.6 85.5 11 128.4 17.5 42.8 6.5 85.8 9.1 107.3 10.5L900 68v33H0z"
        />
      </svg>
      <section
        className="bg-roslyn text-white w-full min-h-screen flex flex-col gap-16 items-center px-8 py-24"
        id="event-schedule"
      >
        <Schedule />
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        version="1.1"
        viewBox="0 0 900 100"
      >
        <path fill="#5d78Fc" d="M0 0H900V100H0z" />
        <path
          fill="#fff"
          strokeLinecap="round"
          d="M0 69l21.5.3c21.5.4 64.5 1 107.3-6.5 42.9-7.5 85.5-23.1 128.4-29.6 42.8-6.5 85.8-3.9 128.6 1.5C428.7 40 471.3 48 514.2 47.5 557 47 600 38 642.8 38.7c42.9.6 85.5 11 128.4 17.5 42.8 6.5 85.8 9.1 107.3 10.5L900 68v33H0z"
        />
      </svg>
      <section
        className="bg-white text-black w-full min-h-screen flex flex-col gap-24 items-center px-8 py-24"
        id="event-schedule"
      >
        <FAQ />
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      hackathon: true,
    },
  };
}
