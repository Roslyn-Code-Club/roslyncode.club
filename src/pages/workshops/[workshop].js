import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import BodySection from "../../components/global/BodySection";
import rehypeRaw from "rehype-raw";
import { CodeBlock } from "../../components/global/CodeBlock";
import Link from "next/link";

export default function WorkshopItem({ workshopContent }) {
  const { data, content } = matter(workshopContent);
  if (data.draft) {
    return (
      <>
        <BodySection css="dark:bg-darkbg items-center justify-center">
          <div className="max-w-[1536px] w-full p-12 flex flex-col items-center divide-y-2">
            <h1 className="text-center text-4xl md:text-5xl 2xl:text-6xl font-bold tracking-tight">
              This workshop is under construction 🚧
            </h1>
          </div>
        </BodySection>
      </>
    );
  }
  return (
    <>
      <BodySection css="dark:bg-darkbg items-center justify-center">
        <div className="max-w-[1536px] w-full p-12 flex flex-col items-center divide-y-2">
          <div className="flex flex-col items-center justify-center gap-y-2 pb-6">
            <Link href="/workshops">
              <h1 className="text-lg md:text-xl 2xl:text-2xl font-semibold cursor-pointer">
                &larr; Back to Workshops
              </h1>
            </Link>
            <h1 className="text-center text-4xl md:text-5xl 2xl:text-6xl font-bold tracking-tight">
              {data.title}
            </h1>
            <h2 className="text-center text-xl md:text-2xl 2xl:text-3xl font-semibold tracking-tight">
              {data.year}-{data.year+1} Workshop{" "}
              {data.year == new Date().getFullYear() || data.year == new Date().getFullYear() - 1 ? null : "(Legacy)"}
            </h2>
          </div>
          <article className="prose prose-h1:font-bold prose-h1:mb-0 dark:prose-invert lg:prose-xl w-full pt-6 max-w-5xl">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} components={CodeBlock}>
              {content}
            </ReactMarkdown>
          </article>
        </div>
      </BodySection>
    </>
  );
}

export async function getServerSideProps(context) {
  const fs = require("fs");
  const { workshop } = context.params;
  const workshopContent = fs.readFileSync(
    `${process.cwd()}/src/workshops/${workshop}.md`,
    "utf8"
  );

  return {
    props: {
      workshopContent,
    },
  };
}
