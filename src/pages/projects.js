import BodySection from "../components/global/BodySection";
import projectsData from "../data/projectsData";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <BodySection css={"dark:bg-darkbg items-center justify-center"}>
        <div className="max-w-[1536px] w-full p-12 flex flex-col gap-y-8">
          {projectsData.map((e, key) => (
            <div className="flex flex-col gap-y-8" key={key}>
              <h1 className="text-5xl md:text-6xl 2xl:text-7xl font-bold tracking-tight">
                {`${e.year - 1}-${e.year}`}
              </h1>
              <hr />
              <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 items-center pb-48">
                {e.projects
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((p, k) => (
                    <div
                      className="p-2 md:p-4 2xl:p-6 bg-gray-100 dark:bg-darkbgcontrast rounded-xl shadow-lg h-full flex flex-col items-center"
                      key={k}
                    >
                      <div className="relative w-full h-48 sm:h-64 shadow-lg rounded-lg overflow-hidden">
                        <Image
                          alt={p.name}
                          src={`/img/projects/${p.img}`}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center center"
                          draggable="false"
                        />
                        <div className="bg-gradient-to-b from-transparent to-gray-900 absolute inset-0">
                          <div className="absolute bottom-0 px-2 pb-2 md:px-4 md:pb-4">
                            <h1 className="text-2xl text-white md:text-3xl 2xl:text-4xl font-bold tracking-tighter">
                              {p.name}
                            </h1>
                            <h2 className="text-sm text-gray-200 md:text-lg 2xl:text-xl tracking-tighter whitespace-pre-wrap">
                              {p.creators.join(", ")}
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-around items-center pt-2 md:pt-4 2xl:pt-6 w-[85%]">
                        {p.demo ? (
                          <a
                            href={p.demo}
                            className="bg-roslyn px-4 py-2 rounded-lg text-white font-semibold shadow-lg hover:translate-y-[-0.125rem] transition-[3s] ease-linear"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Demo
                          </a>
                        ) : null}
                        {p.video ? (
                          <a
                            href={p.video}
                            className="bg-roslyn px-4 py-2 rounded-lg text-white font-semibold shadow-lg hover:translate-y-[-0.125rem] transition-[3s] ease-linear"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Video
                          </a>
                        ) : null}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </BodySection>
    </>
  );
}
