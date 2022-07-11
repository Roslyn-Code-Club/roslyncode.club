import Image from "next/image";

export default function CarouselItem({
  img,
  projectName,
  creators,
  link,
  stopSlide,
  startSlide,
}) {
  return (
    <div
      className="inline-block w-full h-full overflow-hidden rounded-xl"
      onMouseEnter={stopSlide}
      onMouseOut={startSlide}
    >
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          <div className="relative w-full h-[45vh]">
            <Image
              alt={projectName}
              src={`/img/projects/${img}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
              draggable="false"
            />
            <div className="bg-gradient-to-b from-transparent to-gray-900 absolute inset-0">
              <div className="absolute bottom-0 pl-4 pb-4">
                <h1 className="text-white text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tighter whitespace-normal">
                  {projectName}
                </h1>
                <h2 className="text-gray-200 text-lg md:text-xl 2xl:text-2xl tracking-tighter whitespace-normal">
                  {creators.join(", ")}
                </h2>
              </div>
            </div>
          </div>
        </a>
      ) : (
        <div className="relative w-full h-[45vh]">
          <Image
            alt={projectName}
            src={`/img/projects/${img}`}
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
            draggable="false"
          />
          <div className="bg-gradient-to-b from-transparent to-gray-900 absolute inset-0">
            <div className="absolute bottom-0 pl-4 pb-4">
              <h1 className="text-white text-4xl font-bold tracking-tighter whitespace-normal">
                {projectName}
              </h1>
              <h2 className="text-gray-200 text-lg tracking-tighter whitespace-normal">
                {creators.join(", ")}
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
