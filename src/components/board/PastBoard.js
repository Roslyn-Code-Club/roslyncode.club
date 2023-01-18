import placeholder from "../../../public/img/roslyncodeclub.svg";
import { pastBoardData } from "../../data/boardMembers";
import Image from "next/image";
import React from "react";

export default function PastBoard() {
  return (
    <>
      {pastBoardData.map((year, key) => (
        <React.Fragment key={key}>
          <h1 className="pt-16 text-4xl md:text-5xl 2xl:text-6xl font-bold tracking-tighter">
            {year.year}-{year.year + 1} Board
          </h1>
          <ul className="w-full grid grid-cols-1 max-w-lg lg:max-w-none lg:grid-cols-2 2xl:grid-cols-3 gap-8">
            {year.boardMembers.map((e, key) => (
              <li
                className="flex flex-col p-4 sm:p-6 md:p-10 w-auto whitespace-nowrap bg-gray-100 dark:bg-darkbgcontrast rounded-lg shadow-lg gap-y-8 items-center h-full justify-between"
                key={key}
              >
                <div className="flex flex-row items-center gap-x-4 w-full">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 2xl:w-24 2xl:h-24 rounded-full overflow-hidden shadow-lg">
                    <Image
                      alt={e.name}
                      src={
                        e.img ? `/img/board/${year.year}/${e.img}` : placeholder
                      }
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center center"
                      draggable="false"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-xl md:text-2xl 2xl:text-3xl font-semibold tracking-tighter whitespace-pre-wrap">
                      {e.name}
                    </h1>
                    <h2 className="text-base md:text-lg 2xl:text-xl font-medium dark:text-gray-200 text-lighterbgcontrast tracking-tight">
                      {e.position}
                    </h2>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </>
  );
}
