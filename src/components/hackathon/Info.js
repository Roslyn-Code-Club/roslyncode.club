import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const catVariants = {
  offscreen: {
    opacity: 0,
    x: -75,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2,
    },
    opacity: 1,
  },
};

const welcomeVariants = {
  offscreen: {
    opacity: 0,
    y: 75,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
    opacity: 1,
  },
};

const welcomeTextVariants = {
  offscreen: {
    opacity: 0,
    y: 75,
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

export default function Info() {
  return (
    <>
      <div className="w-full flex flex-col-reverse sm:flex-row justify-between gap-8 items-center max-w-none sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-7xl">
        <motion.div
          variants={catVariants}
          initial="offscreen"
          whileHover={{ rotate: "4deg" }}
          whileTap={{ scale: 0.95 }}
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          className="relative w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            alt="Keyboard Cat"
            src={`/img/hackathon/keyboard-cat.gif`}
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
            draggable="false"
          />
        </motion.div>
        <div className="w-full sm:w-1/2 2xl:w-[55%] flex flex-col items-start justify-start gap-4">
          <motion.h1
            variants={welcomeVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            className="text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight"
          >
            Welcome :)
          </motion.h1>
          <motion.p
            variants={welcomeTextVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            className="text-base md:text-lg 2xl:text-xl 2xl:leading-10"
          >
            Code Overload is the annual hackathon run by the Code Club at Roslyn High
            School. Through workshops and lessons, we hope to teach and inspire
            students with ideas and skills to create their own projects. If
            you&#39;re in need of some ideas, feel free to check out{" "}
            <Link href="/projects">
              <span className="font-bold underline cursor-pointer text-roslyn hover:brightness-[80%] transition ease-linear">
                what our club members have created over the previous years
              </span>
            </Link>
            .
          </motion.p>
        </div>
      </div>
    </>
  );
}
