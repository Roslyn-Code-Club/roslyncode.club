import BodySection from "../components/global/BodySection";
import dynamic from "next/dynamic";

const CurrentBoard = dynamic(() => import("../components/board/CurrentBoard"), {
  ssr: false,
});
const PastBoard = dynamic(() => import("../components/board/PastBoard"), {
  ssr: false,
});

export default function Board() {
  return (
    <>
      <BodySection css={"dark:bg-darkbg items-center justify-center"}>
        <div className="w-full p-5 flex flex-col gap-y-8 items-center">
          <CurrentBoard />
          <PastBoard />
        </div>
      </BodySection>
    </>
  );
}
