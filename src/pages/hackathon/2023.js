import BodySection from "../../components/global/BodySection";
import { useState } from "react";
import Image from "next/image";
import grain from "../../../public/img/grain.png";

export default function Hackathon() {
  return (
    <>
      <BodySection css={"dark:bg-darkbg items-center justify-center"}>
        <main className="flex flex-col gap-y-8 max-w-7xl p-8 w-full h-full">
          <h1 className="text-center text-6xl md:text-7xl 2xl:text-8xl font-bold tracking-tight select-none">
            Roslyn Code
            <br />
            Overload<span className="text-roslyn font-bold drop-shadow-lg shadow-white">{`</>`}</span>
          </h1>
        </main>
      </BodySection>
    </>
  );
}
