"use client";

import { motion } from "framer-motion";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/reveal";
import { missionVision, ideateCycle } from "@/lib/data/site";

export function About() {
  return (
    <section id="about" className="section-shell py-24 sm:py-32">
      <Reveal>
        <span className="eyebrow">About the Summit</span>
        <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold text-white sm:text-4xl">
          A dialogue about entrepreneurship, hosted by IIM Indore.
        </h2>
        <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-ink-300 sm:text-lg">
          {missionVision.aim}
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Reveal delay={0.05}>
          <div className="glass-card h-full p-8">
            <h3 className="font-heading text-xl font-semibold text-gold-500">
              Mission
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-300 sm:text-base">
              {missionVision.mission}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="glass-card h-full p-8">
            <h3 className="font-heading text-xl font-semibold text-gold-500">
              Vision
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-300 sm:text-base">
              {missionVision.vision}
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-20">
        <h3 className="text-center font-heading text-2xl font-semibold text-white sm:text-3xl">
          The i5 Cycle
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm text-ink-300 sm:text-base">
          Five ideas, one summit: Innovate, Incubate, Inspire, Invest, Ideate.
        </p>
      </Reveal>

      <RevealGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {ideateCycle.map((item) => (
          <motion.div key={item.step} variants={revealItem} className="glass-card p-6">
            <span className="font-heading text-3xl font-bold text-gold-500/70">
              {item.step}
            </span>
            <h4 className="mt-3 font-heading text-lg font-semibold text-white">
              {item.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">
              {item.description}
            </p>
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  );
}
