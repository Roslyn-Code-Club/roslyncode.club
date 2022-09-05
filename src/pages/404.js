import BodySection from "../components/global/BodySection";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Page404() {
  const router = useRouter();
  const [time, setTime] = useState(10);

  setTimeout(() => {
    if (time > 0) {
      setTime(time - 1);
    }
    if (time == 0) {
      return router.push("/", "/");
    }
  }, 1000);

  return (
    <BodySection css={"items-center justify-center dark:bg-darkbg"}>
      <div className="w-full max-w-3xl p-5 flex flex-col md:gap-y-2 items-center text-center">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-5xl md:text-6xl 2xl:text-8xl font-bold tracking-tighter whitespace-nowrap">
            404 Not Found
          </h1>
          <h2 className="text-xl md:text-2xl 2xl:text-4xl font-mono tracking-tighter text-gray-900 dark:text-gray-200">
            You&apos;ve almost hacked into the mainframe, but you were caught!
          </h2>
        </div>
        <Link href={"/"}>
          <h1 className="items-center gap-x-2 mt-6 text-white bg-roslyn text-2xl md:text-3xl 2xl:text-4xl px-6 py-3 2xl:px-8 2xl:py-4 rounded-xl font-semibold hover:scale-105 active:scale-[0.98] cursor-pointer select-none transition-[5s] ease-linear">
            Returning in{" "}
            <span className="tracking-normal font-mono font-semibold">
              00:
              {time.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </span>
          </h1>
        </Link>
      </div>
    </BodySection>
  );
}
