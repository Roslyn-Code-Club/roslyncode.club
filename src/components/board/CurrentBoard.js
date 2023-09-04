import placeholder from "../../../public/img/roslyncodeclub.svg";
import { boardData } from "../../data/boardMembers";
import Image from "next/image";

export default function CurrentBoard() {
  let tenure = `${boardData.year}-${boardData.year + 1}`;
  let month = new Date().getMonth();
  //If it's past September, we'll adjust for the next school year
  // if (month + 1 >= 9) tenure = `${boardData.year + 1}-${boardData.year + 2}`;
  return (
    <>
      <h1 className="pt-16 text-5xl md:text-6xl 2xl:text-7xl font-bold tracking-tighter">
        {tenure} Board
      </h1>
      <ul className="w-full grid grid-cols-1 max-w-lg lg:max-w-none lg:grid-cols-2 2xl:grid-cols-3 gap-8">
        <li className="flex flex-col p-4 sm:p-6 md:p-10 w-auto whitespace-nowrap bg-gray-100 dark:bg-darkbgcontrast rounded-lg shadow-lg gap-y-8 items-center h-full justify-between">
          <div className="flex flex-row items-center gap-x-4 w-full">
            <div className="relative w-16 h-16 md:w-20 md:h-20 2xl:w-24 2xl:h-24 rounded-full overflow-hidden shadow-lg">
              <Image
                alt="Brian Ciavarella"
                src={`/img/board/ciavarella.jpg`}
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                draggable="false"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold tracking-tighter whitespace-pre-wrap">
                Brian Ciavarella
              </h1>
              <h2 className="text-lg md:text-xl 2xl:text-2xl font-medium dark:text-gray-200 text-lighterbgcontrast tracking-tight">
                Club Advisor
              </h2>
            </div>
          </div>
          <a
            href={`mailto:bciavarella@roslynschools.org`}
            className="bg-roslyn px-4 py-2 w-full text-center 2xl:max-w-[90%] rounded-lg font-semibold text-xl cursor-pointer shadow-lg text-gray-100 hover:translate-y-[-0.125rem] hover:brightness-[85%] transition-[3s] ease-linear"
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </a>
        </li>
        {boardData.boardMembers.map((e, key) => (
          <li
            className="flex flex-col p-4 sm:p-6 md:p-10 w-auto whitespace-nowrap bg-gray-100 dark:bg-darkbgcontrast rounded-lg shadow-lg gap-y-8 items-center h-full justify-between"
            key={key}
          >
            <div className="flex flex-row items-center gap-x-4 w-full">
              <div className="relative w-16 h-16 md:w-20 md:h-20 2xl:w-24 2xl:h-24 rounded-full overflow-hidden shadow-lg">
                <Image
                  alt={e.name}
                  src={
                    e.img
                      ? `/img/board/${boardData.year}/${e.img}`
                      : placeholder
                  }
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center center"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold tracking-tighter whitespace-pre-wrap">
                  {e.name}
                </h1>
                <h2 className="text-lg md:text-xl 2xl:text-2xl font-medium dark:text-gray-200 text-lighterbgcontrast tracking-tight">
                  {e.position}
                </h2>
              </div>
            </div>
            <a
              href={`mailto:${e.email}@roslynschools.org`}
              className="bg-roslyn px-4 py-2 w-full text-center 2xl:max-w-[90%] rounded-lg font-semibold text-xl cursor-pointer shadow-lg text-gray-100 hover:translate-y-[-0.125rem] hover:brightness-[85%] transition-[3s] ease-linear"
              target="_blank"
              rel="noreferrer"
            >
              Contact
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
