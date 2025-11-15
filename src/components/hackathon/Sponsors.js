import { motion } from "framer-motion";
import { sponsors } from "../../data/h25";
import Image from "next/image";

const titleVariants = {
  offscreen: {
    opacity: 0,
    y: 75,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
    opacity: 1,
  },
};

const variant = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2,
    },
    opacity: 1,
  },
};

export default function Sponsors() {
  return (
    <>
      <div className="w-full max-w-none sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-7xl flex flex-col items-center justify-start gap-6 pt-24">
        <motion.h1
          variants={titleVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
          className="text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight w-full text-center xl:text-start"
        >
          Our Sponsors
        </motion.h1>
        {sponsors.length === 0 && (
          <p className="text-base md:text-lg 2xl:text-xl 2xl:leading-10 text-left self-start">
            Looking to sponsor? Contact us at rhscodeclub@gmail.com
          </p>
        )}
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start w-full">

          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={`${sponsor.href}?ref=roslyncode.club`}
              target="_blank"
              rel="noreferrer"
            >
              <motion.li
                variants={variant}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.1 * index }}
                className="flex flex-col w-full gap-4 items-center cursor-pointer"
              >
                <div className="relative w-full h-36 grayscale hover:scale-105 hover:grayscale-0 transition ease-linear">
                  <Image
                    alt={sponsor.name}
                    src={`/img/hackathon/sponsors/${sponsor.img}`}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center center"
                    draggable="false"
                  />
                </div>
              </motion.li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
}
