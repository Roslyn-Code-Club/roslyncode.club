import BodySection from "../components/global/BodySection";
import { competitions } from "../data/competitions";
import Link from "next/link";

export default function Resources() {
  return (
    <>
      <BodySection css={"dark:bg-darkbg items-center justify-center"}>
        <div className="flex flex-col gap-y-8 max-w-7xl px-8 w-full h-full">
          <main className="flex flex-col w-full justify-center">
            <h1 className="text-5xl md:text-6xl 2xl:text-7xl font-bold tracking-tight pb-6">
              Resources
            </h1>
            <h2 className="text-2xl md:text-3xl 2xl:text-4xl tracking-tight text-gray-200">
              Below you can find an array of curated resources, spanning from
              competitions, learning resources, and opportunities in a variety
              of computer science fields.
            </h2>
          </main>
          <section>
            <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight pb-6">
              Competitions
            </h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {competitions.map((c, key) => (
                <Link href={c.href}>
                  <li className="relative w-full h-52 overflow-hidden border-2 border-transparent hover:border-roslyn cursor-pointer transition ease-linear p-2 md:p-4 2xl:p-6 bg-gray-100 dark:bg-darkbgcontrast rounded-xl shadow-lg flex flex-col items-center">
                    <div className="w-full h-full z-[1] absolute inset-0 bg-gradient-to-b from-transparent to-gray-800" />
                    <span className="absolute top-4 left-4 z-[1]">
                      {getNextContestDate(c.dates)}
                    </span>
                    <img
                      className="absolute w-full h-full object-cover inset-0 object-center"
                      src={c.img}
                    />
                    <section className="absolute z-[1] left-4 bottom-4 flex flex-col">
                      <span className="font-bold text-4xl">{c.title}</span>
                      <span className="font-medium text-xl">{c.parentOrg}</span>
                    </section>
                  </li>
                </Link>
              ))}
            </ul>
          </section>
        </div>
      </BodySection>
    </>
  );
}

function getNextContestDate(dates) {
  const today = new Date();
  for (let i = 0; i < dates.length; i++) {
    let contestDate = new Date(dates[i]);
    if (contestDate > today) {
      return "Upcoming";
    } else if (contestDate < today) {
      return "Past";
    } else {
      return "Ongoing";
    }
  }
}
