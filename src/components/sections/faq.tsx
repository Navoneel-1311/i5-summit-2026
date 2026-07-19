"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { faqs } from "@/lib/data/site";

export function FAQ() {
  return (
    <section className="section-shell py-24 sm:py-32">
      <Reveal className="text-center">
        <span className="eyebrow mx-auto">FAQ</span>
        <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-semibold text-white sm:text-4xl">
          Frequently asked questions
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl">
        <Accordion className="glass-card divide-y divide-white/10 px-2">
          {faqs.map((item) => (
            <AccordionItem
              key={item.question}
              className="border-none px-4"
            >
              <AccordionTrigger className="py-5 text-left font-heading text-base font-medium text-white hover:no-underline sm:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-ink-300 sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
