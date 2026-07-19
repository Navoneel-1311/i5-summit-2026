"use client";

import { motion } from "framer-motion";
import { Rocket, Users, Trophy, Sparkles } from "lucide-react";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/reveal";
import { whyAttend } from "@/lib/data/site";

const icons = [Rocket, Users, Trophy, Sparkles];

export function WhyAttend() {
  return (
    <section className="section-shell py-24 sm:py-32">
      <Reveal className="text-center">
        <span className="eyebrow mx-auto">Why i5 Summit</span>
        <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-semibold text-white sm:text-4xl">
          Skip the noise. Get to the real thing.
        </h2>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyAttend.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={item.title}
              variants={revealItem}
              whileHover={{ y: -6 }}
              className="glass-card group p-7 transition-colors hover:border-gold-500/40"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </RevealGroup>
    </section>
  );
}
