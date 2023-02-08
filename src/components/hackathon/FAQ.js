import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -20 },
};

export default function FAQ() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold tracking-tight">
        FAQ
      </h1>
      <ul className="flex flex-col w-full max-w-5xl text-black bg-gray-100 px-8 py-4">
        <li className="flex flex-col">
          <span
            className="text-2xl z-10 py-4 border-b-2 border-b-transparent hover:border-b-black"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            Where is Code Overload being held and what format?
          </span>
          <motion.span
            className="overflow-hidden bg-transparent"
            transition={{ ease: "easeIn" }}
            animate={isOpen ? { height: "100%" } : { height: "0px" }}
            variants={variants}
          >
            Code Overload will be held in-person at Roslyn High School for the
            first time since 2017.
          </motion.span>
        </li>
      </ul>
    </>
  );
}
