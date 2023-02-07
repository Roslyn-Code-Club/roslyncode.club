import Image from "next/image";
import Link from "next/link";

export default function Hackathon() {
  return (
    <>
      <main className="animated-grid flex justify-center">
        <div className="grid-fade" />
        <div className="grid-lines" />
        <div className="flex flex-col items-center gap-y-8 max-w-7xl p-8 w-full h-full absolute z-50 top-1/3 scale-110">
          <h1 className="text-center text-6xl md:text-7xl 2xl:text-8xl font-bold select-none glow-white">
            Roslyn Code
            <br />
            Overload
            <span className="text-roslyn tracking-tighter font-extrabold drop-shadow-lg shadow-white glow-roslyn">{`</>`}</span>
          </h1>
          <section className="flex flex-row justify-center gap-16 w-fit">
            <button className="w-52 px-6 py-3 border-2 border-white hover:border-roslyn rounded-xl bg-white bg-opacity-10 backdrop-blur-md hover:bg-roslyn font-semibold text-xl transition ease-linear shadow-gray-700 shadow-lg  hover:shadow-[#5d77fcb7]">
              Register Here
            </button>
            <button className="w-52 px-6 py-3 border-2 border-white hover:border-roslyn rounded-xl bg-white bg-opacity-10 backdrop-blur-md hover:bg-roslyn font-bold text-xl transition ease-linear shadow-gray-700 shadow-lg  hover:shadow-[#5d77fcb7]">
              Event Schedule
            </button>
          </section>
        </div>
      </main>
      <section className="bg-white text-black w-full min-h-screen flex flex-col gap-16 justify-around items-center px-8 py-24">
        <div className="w-full flex flex-col-reverse sm:flex-row justify-between gap-8 items-center max-w-none sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-7xl">
          <div className="relative w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 ease-in-out hover:rotate-3 active:scale-95">
            <Image
              alt="Keyboard Cat"
              src={`/img/hackathon/keyboard-cat.gif`}
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
              draggable="false"
            />
          </div>
          <div className="w-full sm:w-1/2 2xl:w-[55%] flex flex-col items-start justify-start gap-4">
            <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight">
              Welcome :)
            </h1>
            <p className="text-base md:text-lg 2xl:text-xl 2xl:leading-10">
              Code Overload is a hackathon run by the Code Club at Roslyn High
              School. Through workshops and lessons, we hope to teach and
              inspire students with ideas and skills to create their own
              projects. If you&#39;re in need of some ideas, feel free to check
              out{" "}
              <Link href="/projects">
                <span className="font-bold underline cursor-pointer text-roslyn hover:brightness-[80%] transition ease-linear">
                  what our club members have created over the previous years
                </span>
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="w-full max-w-none sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-7xl flex flex-col items-start justify-start gap-6">
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight">
            What Do We Do?
          </h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
            <li className="flex flex-col gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="w-24 h-auto p-2 rounded-full border-4 border-roslyn stroke-black shadow-lg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
              <h1 className="text-xl md:text-2xl 2xl:text-3xl font-bold">
                Workshops & Lessons
              </h1>
              <p className="text-sm md:text-base 2xl:text-lg 2xl:leading-8">
                At Code Club, we teach{" "}
                <Link href="/workshops">
                  <span className="font-bold underline cursor-pointer text-roslyn hover:brightness-[80%] transition ease-linear">
                    weekly workshops and lessons
                  </span>
                </Link>{" "}
                every Wednesday on an assortment of topics, spanning from web
                development to cybersecurity. In addition, we hold meetings
                every Friday for those interested in competitive/algorithmic
                programming.
              </p>
            </li>
            <li className="flex flex-col gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="w-24 h-auto p-2 rounded-full border-4 border-roslyn stroke-black shadow-lg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                />
              </svg>
              <h1 className="text-xl md:text-2xl 2xl:text-3xl font-bold">
                Compete & Represent
              </h1>
              <p className="text-sm md:text-base 2xl:text-lg 2xl:leading-8">
                We hold meetings every Friday for those interested in
                competitive/algorithmic programming. The Code Club competes in{" "}
                <Link href="/workshops">
                  <span className="font-bold underline cursor-pointer text-roslyn hover:brightness-[80%] transition ease-linear">
                    several programming competitions
                  </span>
                </Link>
                , including the Congressional App Challenge, USACO, picoCTF, and
                ACSL.
              </p>
            </li>
            <li className="flex flex-col gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="w-24 h-auto p-2 rounded-full border-4 border-roslyn stroke-black shadow-lg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
              <h1 className="text-xl md:text-2xl 2xl:text-3xl font-bold">
                Community Service
              </h1>
              <p className="text-sm md:text-base 2xl:text-lg 2xl:leading-8">
                We aim to promote computer science and technology among the
                youth in our local community. We partner with the Bryant Library
                to hold workshops where young students can learn the basics of
                programming through platforms like Scratch.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        version="1.1"
        viewBox="0 0 900 100"
      >
        <path fill="#fff" d="M0 0H900V100H0z" />
        <path
          fill="#5d78Fc"
          strokeLinecap="round"
          d="M0 69l21.5.3c21.5.4 64.5 1 107.3-6.5 42.9-7.5 85.5-23.1 128.4-29.6 42.8-6.5 85.8-3.9 128.6 1.5C428.7 40 471.3 48 514.2 47.5 557 47 600 38 642.8 38.7c42.9.6 85.5 11 128.4 17.5 42.8 6.5 85.8 9.1 107.3 10.5L900 68v33H0z"
        />
      </svg>
      <section className="bg-roslyn text-white w-full min-h-screen flex flex-col gap-24 items-center px-8 py-24">
        <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold tracking-tight">
          Event Schedule
        </h1>
        <ul className="grid grid-cols-2 w-full max-w-5xl">
          <li className="font-extrabold text-3xl border-l-4 border-r-2 border-t-4 border-b-2 p-4 rounded-tl-lg">
            Time
          </li>
          <li className="font-extrabold text-3xl border-l-2 border-r-4 border-t-4 border-b-2 p-4 rounded-tr-lg">
            Event
          </li>
          <li className="text-xl border-l-4 border-r-2 border-t-2 border-b-2 p-4">
            9:00 AM - 9:30 AM
          </li>
          <li className="text-xl border-l-2 border-r-4 border-t-2 border-b-2 p-4">
            Welcome Ceremony and Breakfast
          </li>
          <li className="text-xl border-l-4 border-r-2 border-t-2 border-b-2 p-4">
            9:30 AM - 10:15 AM
          </li>
          <li className="text-xl border-l-2 border-r-4 border-t-2 border-b-2 p-4">
            Hardware Workshop - Arduino
          </li>
          <li className="text-xl border-l-4 border-r-2 border-t-2 border-b-2 p-4">
            10:30 AM - 11:15 AM
          </li>
          <li className="text-xl border-l-2 border-r-4 border-t-2 border-b-2 p-4">
            Software Workshop - Unity
          </li>
          <li className="text-xl border-l-4 border-r-2 border-t-2 border-b-2 p-4">
            11:30 AM - 12:15 PM
          </li>
          <li className="text-xl border-l-2 border-r-4 border-t-2 border-b-2 p-4">
            Future Technologies Workshop - AI/ML
          </li>
          <li className="text-xl border-l-4 border-r-2 border-t-2 border-b-2 p-4">
            12:15 PM - 1:00 PM
          </li>
          <li className="text-xl border-l-2 border-r-4 border-t-2 border-b-2 p-4">
            Brainstorming and Working on Projects
          </li>
          <li className="text-xl border-l-4 border-r-2 border-t-2 border-b-2 p-4">
            1:00 PM - 2:00 PM
          </li>
          <li className="text-xl border-l-2 border-r-4 border-t-2 border-b-2 p-4">
            Lunch Break
          </li>
          <li className="text-xl border-l-4 border-r-2 border-t-2 border-b-2 p-4">
            2:00 PM - 4:00 PM
          </li>
          <li className="text-xl border-l-2 border-r-4 border-t-2 border-b-2 p-4">
            Working on Projects
          </li>
          <li className="text-xl border-l-4 border-r-2 border-t-2 border-b-4 p-4 rounded-bl-lg">
            4:00 PM - 5:00 PM
          </li>
          <li className="text-xl border-l-2 border-r-4 border-t-2 border-b-4 p-4 rounded-br-lg">
            Judging, Awards, and Closing Ceremony
          </li>
        </ul>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      hackathon: true,
    },
  };
}
