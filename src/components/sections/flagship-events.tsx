"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/reveal";
import { flagshipEvents } from "@/lib/data/site";

export function FlagshipEvents() {
  return (
    <section className="section-shell py-24 sm:py-32">
      <Reveal className="text-center">
        <span className="eyebrow mx-auto">Flagship Events</span>
        <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-semibold text-white sm:text-4xl">
          The two events you can&apos;t miss
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-300">
          Register on Unstop to secure your spot at i5 Summit 2026&apos;s
          flagship events.
        </p>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {flagshipEvents.map((event) => (
          <motion.a
            key={event.title}
            href={event.unstopUrl}
            target="_blank"
            rel="noopener noreferrer"
            variants={revealItem}
            whileHover={{ y: -6 }}
            className="glass-card group flex flex-col items-start p-7 transition-colors hover:border-gold-500/40"
          >
            <div className="flex w-full items-start justify-between gap-4">
              <Badge className="rounded-full border-none bg-gold-500/15 text-gold-500 hover:bg-gold-500/15">
                {event.category}
              </Badge>
              <ArrowUpRight className="size-5 shrink-0 text-ink-300 transition-colors group-hover:text-gold-500" />
            </div>
            <h3 className="mt-5 font-heading text-xl font-semibold text-white">
              {event.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">
              {event.description}
            </p>
            <span className="mt-5 text-xs font-medium text-gold-500">
              Register on Unstop &rarr;
            </span>
          </motion.a>
        ))}
      </RevealGroup>
    </section>
  );
}
