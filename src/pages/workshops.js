import matter from "gray-matter";
import { toInteger } from "lodash";
import BodySection from "../components/global/BodySection";
import Workshop from "../components/workshop/Workshop";

const _ = require("lodash");

export default function Workshops({ allWorkshops }) {
  return (
    <>
      <BodySection css="dark:bg-darkbg items-center justify-center">
        <div className="max-w-[1536px] w-full p-12 flex flex-col gap-y-8">
          {allWorkshops.map(([year, data], key) => (
            <div className="divide-y-2 pb-36" key={key}>
              <h1 className="text-5xl md:text-6xl 2xl:text-7xl font-bold tracking-tight pb-6">
                {`${year}-${toInteger(year) + 1}`}
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 items-center pt-6">
                {data
                  .sort((a, b) => b.number - a.number)
                  .map((e, key) => (
                    <Workshop data={e} key={key} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </BodySection>
    </>
  );
}

export async function getStaticProps() {
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/src/workshops`, "utf-8");

  const workshops = files.filter((ws) => ws.endsWith(".md"));

  const data = workshops.map((workshop) => {
    const path = `${process.cwd()}/src/workshops/${workshop}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });
    let final = rawContent.replace(
      `---`,
      `---\nslug: ${workshop.replace(".md", "")}\n`
    );
    return final;
  });

  const frontMatter = data.map((workshop) => matter(workshop));
  const listItems = frontMatter.map((listItem) => listItem.data);
  listItems.sort((a, b) => b.year - a.year);

  const test = _.groupBy(listItems, "year");
  let allWorkshops = Object.entries(test).sort(
    ([ayear], [byear]) => byear - ayear
  );

  return {
    props: { allWorkshops },
  };
}
