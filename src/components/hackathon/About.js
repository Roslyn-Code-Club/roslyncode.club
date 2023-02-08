import { motion } from "framer-motion";
import Link from "next/link";

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

const variant1 = {
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

const variant2 = {
  offscreen: {
    opacity: 0,
    y: 150,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.4,
    },
    opacity: 1,
  },
};

const variant3 = {
  offscreen: {
    opacity: 0,
    y: 175,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.6,
    },
    opacity: 1,
  },
};

export default function About() {
  return (
    <>
      <div className="w-full max-w-none sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-7xl flex flex-col items-start justify-start gap-6">
        <motion.h1
          variants={titleVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
          className="text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight"
        >
          What Do We Do?
        </motion.h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
          <motion.li
            variants={variant1}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-4 items-center"
          >
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
            <p className="text-sm md:text-base 2xl:text-lg 2xl:leading-8 text-center">
              At Code Club, we teach{" "}
              <Link href="/workshops">
                <span className="font-bold underline cursor-pointer text-roslyn hover:brightness-[80%] transition ease-linear">
                  weekly workshops and lessons
                </span>
              </Link>{" "}
              every Wednesday on an assortment of topics, spanning from web
              development to cybersecurity. In addition, we hold meetings every
              Friday for those interested in competitive/algorithmic
              programming.
            </p>
          </motion.li>
          <motion.li
            variants={variant2}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-4 items-center"
          >
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
            <p className="text-sm md:text-base 2xl:text-lg 2xl:leading-8 text-center">
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
          </motion.li>
          <motion.li
            variants={variant3}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-4 items-center"
          >
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
            <p className="text-sm md:text-base 2xl:text-lg 2xl:leading-8 text-center">
              We aim to promote computer science and technology among the youth
              in our local community. We partner with the Bryant Library to hold
              workshops where young students can learn the basics of programming
              through platforms like Scratch.
            </p>
          </motion.li>
        </ul>
      </div>
    </>
  );
}
