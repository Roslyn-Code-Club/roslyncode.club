import React from "react";
import { hackathon23 } from "../../data/h23";
import { motion } from "framer-motion";

const title = {
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

export default function Schedule() {
  return (
    <>
      <motion.h1
        variants={title}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-tight"
      >
        Event Schedule
      </motion.h1>
      <motion.ul
        variants={title}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 w-full max-w-5xl"
      >
        <li className="font-extrabold text-lg sm:text-xl 2xl:text-3xl border-l-4 border-r-2 border-t-4 border-b-2 p-4 rounded-tl-lg">
          Time
        </li>
        <li className="font-extrabold text-lg sm:text-xl 2xl:text-3xl border-l-2 border-r-4 border-t-4 border-b-2 p-4 rounded-tr-lg">
          Event
        </li>
        {hackathon23.map((e, key) => (
          <React.Fragment key={key}>
            {key === hackathon23.length - 1 ? (
              <>
                <li className="text-sm sm:text-base lg:text-lg 2xl:text-xl border-l-4 border-r-2 border-t-2 border-b-4 p-4 rounded-bl-lg">
                  {e.time}
                </li>
                <li className="text-sm sm:text-base lg:text-lg 2xl:text-xl border-l-2 border-r-4 border-t-2 border-b-4 p-4 rounded-br-lg">
                  {e.event}
                </li>
              </>
            ) : (
              <>
                <li className="text-sm sm:text-base lg:text-lg 2xl:text-xl border-l-4 border-r-2 border-t-2 border-b-2 p-4">
                  {e.time}
                </li>
                <li className="text-sm sm:text-base lg:text-lg 2xl:text-xl border-l-2 border-r-4 border-t-2 border-b-2 p-4">
                  {e.event}
                </li>
              </>
            )}
          </React.Fragment>
        ))}
      </motion.ul>
    </>
  );
}
