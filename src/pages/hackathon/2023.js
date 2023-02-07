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
      <section className="bg-roslyn w-full min-h-screen flex flex-col gap-16 items-center px-8 py-16">
        <div className="w-full flex flex-col-reverse sm:flex-row justify-between gap-8 items-center max-w-none sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-7xl">
          <div className="relative w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-2xl overflow-hidden shadow-lg">
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
              School. We run workshops to help teach and inspire students with
              ideas and skills to create their own projects. If you&#39;d like
              some inspiration, feel free to check out what our club members
              have created over the previous years{" "}
              <Link href="/projects">
                <span className="font-bold underline cursor-pointer hover:brightness-[80%] transition ease-linear">
                  here
                </span>
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="w-full max-w-none sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-7xl flex flex-col items-start justify-start gap-4">
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight">
            What Do We Do?
          </h1>
          <p className="text-base md:text-lg 2xl:text-xl 2xl:leading-10">
            Code Overload is a hackathon run by the Code Club at Roslyn High
            School. We run workshops to help teach and inspire students with
            ideas and skills to create their own projects. If you&#39;d like
            some inspiration, feel free to check out what our club members have
            created over the previous years{" "}
            <Link href="/projects">
              <span className="font-bold underline cursor-pointer hover:brightness-[80%] transition ease-linear">
                here
              </span>
            </Link>
            .
          </p>
        </div>
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
