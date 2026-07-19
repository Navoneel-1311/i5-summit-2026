"use client";

import { motion } from "framer-motion";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/reveal";
import { roadmap } from "@/lib/data/gallery";

export function Timeline() {
  return (
    <section className="section-shell py-24 sm:py-32">
      <Reveal className="text-center">
        <span className="eyebrow mx-auto">Roadmap</span>
        <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-semibold text-white sm:text-4xl">
          The road to i5 Summit 2026
        </h2>
      </Reveal>

      <RevealGroup className="relative mx-auto mt-16 max-w-3xl">
        <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-gold-500/60 via-white/15 to-transparent sm:left-1/2" />
        {roadmap.map((item, i) => (
          <motion.div
            key={item.title}
            variants={revealItem}
            className={`relative mb-10 flex flex-col gap-3 pl-12 sm:mb-14 sm:w-1/2 sm:pl-0 ${
              i % 2 === 0
                ? "sm:pr-12 sm:text-right"
                : "sm:ml-auto sm:pl-12"
            }`}
          >
            <span
              className={`absolute top-1.5 left-2.5 size-3 rounded-full bg-gold-500 shadow-[0_0_0_4px_rgba(255,200,61,0.15)] sm:left-auto ${
                i % 2 === 0 ? "sm:-right-1.5" : "sm:-left-1.5"
              }`}
            />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">
              {item.period}
            </span>
            <h3 className="font-heading text-lg font-semibold text-white sm:text-xl">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-300">
              {item.description}
            </p>
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  );
}
