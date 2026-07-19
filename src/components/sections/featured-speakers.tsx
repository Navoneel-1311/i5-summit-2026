"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/reveal";
import { pastSpeakers, ventureCapitalists, type Speaker } from "@/lib/data/speakers";

function SpeakerGrid({ people }: { people: Speaker[] }) {
  return (
    <RevealGroup className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
      {people.map((person) => (
        <motion.div
          key={person.name}
          variants={revealItem}
          whileHover={{ y: -6 }}
          className="glass-card group overflow-hidden p-4 text-center transition-colors hover:border-gold-500/40"
        >
          <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-xl">
            <Image
              src={person.image}
              alt={person.name}
              fill
              sizes="(min-width: 1024px) 180px, 40vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h4 className="mt-3 font-heading text-sm font-semibold text-white sm:text-base">
            {person.name}
          </h4>
          <p className="mt-1 text-xs leading-snug text-ink-300 sm:text-sm">
            {person.title}
          </p>
        </motion.div>
      ))}
    </RevealGroup>
  );
}

export function FeaturedSpeakers() {
  return (
    <section id="speakers" className="section-shell py-24 sm:py-32">
      <Reveal className="text-center">
        <span className="eyebrow mx-auto">Past Speakers &amp; Investors</span>
        <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-semibold text-white sm:text-4xl">
          Voices that have shaped i5 Summit
        </h2>
      </Reveal>

      <div className="mt-14 space-y-14">
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-gold-500">
            Past Speakers
          </h3>
          <SpeakerGrid people={pastSpeakers} />
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-gold-500">
            Venture Capitalists
          </h3>
          <SpeakerGrid people={ventureCapitalists} />
        </div>
      </div>
    </section>
  );
}
