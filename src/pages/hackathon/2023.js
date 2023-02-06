export default function Hackathon() {
  return (
    <>
      <main class="animated-grid flex justify-center">
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
            <button className="w-52 px-6 py-3 border-2 border-white hover:border-roslyn rounded-xl bg-white bg-opacity-10 backdrop-blur-md hover:bg-roslyn font-bold text-xl transition ease-linear shadow-gray-700 shadow-lg  hover:shadow-[#5d77fcb7]">
              Register Here!
            </button>
            <button className="w-52 px-6 py-3 border-2 border-white hover:border-roslyn rounded-xl bg-white bg-opacity-10 backdrop-blur-md hover:bg-roslyn font-bold text-xl transition ease-linear shadow-gray-700 shadow-lg  hover:shadow-[#5d77fcb7]">
              Event Schedule
            </button>
          </section>
        </div>
      </main>
      <section className="bg-roslyn w-full min-h-screen">asdad</section>
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
