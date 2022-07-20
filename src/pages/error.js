import BodySection from "../components/global/BodySection";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [time, setTime] = useState(10);

  let errorcode = "400 Bad Request";
  let error =
    "An error occurred. If this persists, please contact the webmaster.";

  if (router.query.error == "AccessDenied") {
    errorcode = "401 Unauthorized";
    error =
      "User authentication required. Make sure you are using your Roslyn Schools email address.";
  } else if (router.query.error == "Configuration") {
    errorcode = "500 Internal Server Error";
    error =
      "There was an issue with the server configuration. Please contact the webmaster.";
  } else if (router.query.error == "Verification") {
    errorcode = "408 Request Timeout";
    error =
      "Authentication token was already used or has expired. Please sign in again.";
  }

  setTimeout(() => {
    if (time > 0) {
      setTime(time - 1);
    }
    if (time == 0) {
      return router.push("/sign-in");
    }
  }, 1000);

  return (
    <BodySection css={"items-center justify-center dark:bg-darkbg"}>
      <div className="w-full max-w-3xl p-5 flex flex-col md:gap-y-2 items-center text-center">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-4xl md:text-6xl 2xl:text-8xl font-bold tracking-tighter whitespace-nowrap">
            {errorcode}
          </h1>
          <h2 className="text-lg md:text-2xl 2xl:text-4xl font-mono tracking-tighter text-gray-900 dark:text-gray-200">
            {error}
          </h2>
        </div>
        <Link href="/sign-in">
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
