import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -20 },
};

export default function FAQItem({ q, a }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="flex flex-col">
      <span
        className="flex items-center font-medium gap-2 text-base md:text-lg lg:text-xl 2xl:text-2xl z-10 border-b-transparent border-b-2 hover:border-b-black transition ease-linear cursor-pointer hover:bg-gray-200 bg-gray-100  px-6 py-4"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 lg:w-6 h-auto flex flex-shrink-0"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          )}
        </svg>
        {q}
      </span>
      <motion.span
        className="overflow-hidden text-xl leading-10"
        transition={{ ease: "easeInOut" }}
        animate={isOpen ? { height: "100%" } : { height: "0" }}
        variants={variants}
      >
        <div className="block px-6 py-4 text-base md:text-lg 2xl:text-xl">
          {a}
        </div>
      </motion.span>
    </li>
  );
}
