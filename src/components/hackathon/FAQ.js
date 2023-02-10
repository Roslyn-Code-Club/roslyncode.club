import FAQItem from "./FAQItem";
import { faq } from "../../data/h23";

export default function FAQ() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold tracking-tight">
        Frequently Asked Questions
      </h1>
      <ul className="flex flex-col gap-1 w-full max-w-5xl text-black">
        {faq.map((e, key) => (
          <FAQItem q={e.q} a={e.a} key={key} />
        ))}
      </ul>
    </>
  );
}
