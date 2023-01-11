import BodySection from "../components/global/BodySection";
import { competitions } from "../data/competitions";
import { resources } from "../data/resources";
import { useState } from "react";

export default function Resources() {
  const [showMore, setShowMore] = useState(false);
  const res = resources.slice(0, 8);
  let pastComps = [];
  let sortedComps = competitions.sort(
    (a, b) => getUpcomingContestDate(a.dates) - getUpcomingContestDate(b.dates)
  );
  let currentComps = sortedComps.filter((c) => {
    if (checkContestDateStatus(c.dates) !== "Past") {
      return c;
    } else {
      pastComps.push(c);
    }
  });
  let allComps = currentComps.concat(pastComps).slice(0, 12);
  return (
    <>
      <BodySection css={"dark:bg-darkbg items-center justify-center"}>
        <div className="flex flex-col gap-y-8 max-w-7xl p-8 w-full h-full">
          <section className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight">
                Competitions
              </h1>
              <h3 className="text-base md:text-lg 2xl:text-xl tracking-tight dark:text-gray-200 text-gray-800">
                One of the best ways to practice your proficiency is to compete!
                Below are some reputable competitions. Contact the board if you
                become aware of any that you&#39;d like to share.
              </h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {allComps.map((c, key) => {
                let status = checkContestDateStatus(c.dates);

                return (
                  <a target="_blank" rel="noreferrer" href={c.href} key={key}>
                    <li className="relative w-full h-48 overflow-hidden border-2 border-transparent hover:border-roslyn cursor-pointer transition ease-linear p-2 md:p-4 2xl:p-6 bg-gray-100 dark:bg-darkbgcontrast rounded-xl shadow-lg flex flex-col items-center">
                      <div className="w-full h-full z-[1] absolute inset-0 bg-gradient-to-b from-transparent to-black" />
                      <span
                        className={`absolute top-2 left-2 z-[1] px-2 py-1 rounded-lg tracking-tight font-bold text-white ${
                          status.toLowerCase() === "upcoming"
                            ? "bg-roslyn"
                            : status.toLowerCase() === "past"
                            ? "bg-gray-400"
                            : "bg-green-500"
                        } uppercase`}
                      >
                        {status}
                      </span>
                      <img
                        className="absolute w-full h-full object-cover inset-0 object-center bg-white"
                        src={c.img}
                      />
                      <section className="absolute z-[1] left-4 bottom-4 flex flex-col">
                        <span className="font-bold text-xl xl:text-2xl text-white tracking-tight">
                          {c.title}
                        </span>
                        <span className="font-medium text-base xl:text-lg text-gray-200 tracking-tight">
                          {c.parentOrg}
                        </span>
                      </section>
                    </li>
                  </a>
                );
              })}
            </ul>
          </section>
          <section className="flex flex-col gap-y-4 items-center">
            <div className="flex flex-col gap-y-2 w-full">
              <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight">
                Learning Resources
              </h1>
              <h3 className="text-base md:text-lg 2xl:text-xl tracking-tight dark:text-gray-200 text-gray-800">
                Below are a variety of learning and practice resources for a
                variety of programming languages. They&#39;re all free, although
                some may have a premium version.
              </h3>
            </div>
            <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {(showMore ? resources : res).map((r, key) => (
                <a target="_blank" rel="noreferrer" href={r.href} key={key}>
                  <li className="relative w-full h-48 overflow-hidden border-2 border-transparent hover:border-roslyn cursor-pointer transition ease-linear p-2 md:p-4 2xl:p-6 rounded-xl shadow-lg flex flex-col items-center">
                    <div className="w-full h-full z-[1] absolute inset-0 bg-gradient-to-b from-transparent to-black" />
                    <img
                      className="absolute w-full h-full object-cover inset-0 object-center bg-white"
                      src={r.img}
                    />
                    <section className="absolute z-[1] left-4 bottom-4 flex flex-col">
                      <span className="font-bold text-xl xl:text-2xl tracking-tight text-white">
                        {r.title}
                      </span>
                    </section>
                  </li>
                </a>
              ))}
            </ul>
            <span
              onClick={() => setShowMore(!showMore)}
              className="font-semibold leading-4 transition ease-linear cursor-pointer border-b-2 border-b-transparent hover:border-b-black dark:hover:border-b-white"
            >
              {showMore ? "Show Less" : "Show More"}
            </span>
          </section>
        </div>
      </BodySection>
    </>
  );
}

function checkContestDateStatus(dates) {
  const today = new Date();
  if (dates.length === 1 && dates[0] < today) return "Past";

  for (let i = 0; i < dates.length; i++) {
    let contestDate = new Date(dates[i]);
    if (contestDate > today) {
      return "Upcoming";
    } else if (
      contestDate.getDate() === today.getDate() &&
      contestDate.getMonth() === today.getMonth() &&
      contestDate.getFullYear() === today.getFullYear()
    ) {
      return "Ongoing";
    }
  }
  return "Past";
}

function getUpcomingContestDate(dates) {
  const today = new Date();
  if (dates.length === 1 && dates[0] < today) return new Date(dates[i]);

  for (let i = 0; i < dates.length; i++) {
    let contestDate = new Date(dates[i]);
    if (contestDate > today) {
      return contestDate;
    } else if (
      contestDate.getDate() === today.getDate() &&
      contestDate.getMonth() === today.getMonth() &&
      contestDate.getFullYear() === today.getFullYear()
    ) {
      return contestDate;
    }
  }
}
