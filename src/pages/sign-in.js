import { useSession, signIn, signOut, getSession } from "next-auth/react";
import BodySection from "../components/global/BodySection";
import Image from "next/image";
import roslyncodeclub from "../../public/img/roslyncodeclub.svg";
import { useRouter } from "next/router";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    return router.push("/index", "/");
  } else {
    return (
      <BodySection css={"items-center justify-center dark:bg-darkbg"}>
        <div className="w-full max-w-md p-5 flex flex-col items-center">
          <div className="bg-gray-100 dark:bg-darkbgcontrast rounded-lg p-12 md:p-16 2xl:p-20 w-min shadow-lg flex flex-col items-center justify-center gap-y-8">
            <div className="flex flex-row items-center justify-center gap-x-4">
              <div className="relative w-12 h-12 rounded-full shadow-lg">
                <Image
                  src={roslyncodeclub}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center center"
                  draggable="false"
                  alt="Roslyn Code Club"
                />
              </div>
              <h1 className="text-center text-2xl md:text-3xl 2xl:text-4xl font-bold tracking-tighter select-none whitespace-nowrap">
                Roslyn Code Club
              </h1>
            </div>
            <h2 className="italic font-semibold text-center">
              You must use your Roslyn Schools email address to proceed.
            </h2>
            <div
              onClick={() => signIn("google")}
              className="flex flex-row gap-x-3 items-center rounded-lg bg-gray-50 dark:bg-lighterbgcontrast w-min whitespace-nowrap px-6 py-3 md:py-4 shadow-md hover:translate-y-[-0.125rem] ease-linear cursor-pointer transition-[3s]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4285F4"
                  d="M-3.264 51.509c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
                  transform="translate(27.009 -39.239)"
                ></path>
                <path
                  fill="#34A853"
                  d="M-14.754 63.239c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09c1.97 3.92 6.02 6.62 10.71 6.62z"
                  transform="translate(27.009 -39.239)"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M-21.484 53.529c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29v-3.09h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z"
                  transform="translate(27.009 -39.239)"
                ></path>
                <path
                  fill="#EA4335"
                  d="M-14.754 43.989c1.77 0 3.35.61 4.6 1.8l3.42-3.42c-2.07-1.94-4.78-3.13-8.02-3.13-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
                  transform="translate(27.009 -39.239)"
                ></path>
              </svg>
              <h1 className="w-full font-semibold text-gray-900 dark:text-gray-200 select-none text-base md:text-lg 2xl:text-xl">
                Sign in with Google
              </h1>
            </div>
          </div>
        </div>
      </BodySection>
    );
  }
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: { session },
  };
}
