import BodySection from "../components/global/BodySection";
import { boardMembers } from "../data/boardMembers";
import Image from "next/image";
import placeholder from "../../public/img/roslyncodeclub.svg";

export default function Board() {
  const thisYear = new Date().getFullYear();
  return (
    <>
      <BodySection css={"dark:bg-darkbg items-center justify-center"}>
        <div className="w-full p-5 flex flex-col gap-y-8 items-center">
          <h1 className="pt-16 text-5xl md:text-6xl 2xl:text-7xl font-bold tracking-tighter">
            {thisYear} Board
          </h1>
          <div className="grid grid-cols-1 max-w-lg lg:max-w-none lg:grid-cols-2 2xl:grid-cols-3 gap-8">
            {boardMembers.map((e, key) => (
              <div
                className="flex flex-col p-4 sm:p-6 md:p-10 w-auto whitespace-nowrap bg-gray-100 dark:bg-darkbgcontrast rounded-lg shadow-lg gap-y-8 items-center h-full justify-between"
                key={key}
              >
                <div className="flex flex-row items-center gap-x-4 w-full">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-lg">
                    <Image
                      src={e.img ? `/img/board/${e.img}` : placeholder}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center center"
                      draggable="false"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold tracking-tighter">
                      {e.name}
                    </h1>
                    <h2 className="text-lg md:text-xl 2xl:text-2xl font-medium dark:text-gray-200 text-lighterbgcontrast">
                      {e.position}
                    </h2>
                  </div>
                </div>
                <a
                  href={`mailto:${e.email}@roslynschools.org`}
                  className="bg-roslyn px-4 py-2 w-full text-center 2xl:max-w-[75%] rounded-lg font-semibold text-xl cursor-pointer shadow-lg text-gray-100 hover:translate-y-[-0.125rem] transition-[3s] ease-linear"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact
                </a>
              </div>
            ))}
          </div>
        </div>
      </BodySection>
    </>
  );
}
