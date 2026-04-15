import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants/faq-data";

export default function Faq() {
  return (
    <section
      id="faqs"
      className="relative z-10 border-y border-white/8 bg-white/2.5 px-5 py-20 sm:px-7 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-bold text-brand-accent">FAQs</p>
          <h2 className="mt-4 max-w-[520px] text-3xl font-extrabold leading-tight tracking-normal text-white sm:text-5xl">
            We&apos;ve got the answers you&apos;re looking for.
          </h2>
          <p className="mt-5 max-w-[460px] text-base leading-8 text-white/58 sm:text-lg">
            A few clear notes on timelines, briefs, revisions, and what happens
            after launch.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-white/10 bg-[#020403]">
          <Accordion type="single" collapsible defaultValue="item-1">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.value}
                value={faq.value}
                className={`border-white/10 px-5 sm:px-7 ${
                  i === faqs.length - 1 ? "border-b-0" : ""
                }`}
              >
                <AccordionTrigger className="cursor-pointer py-6 text-left text-base font-bold leading-7 text-white/88 hover:no-underline hover:text-white sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-8 text-white/56">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
