"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { pastSponsors } from "@/lib/data/sponsors";

export function Sponsors() {
  const loop = [...pastSponsors, ...pastSponsors];

  return (
    <section className="py-24 sm:py-32">
      <div className="section-shell">
        <Reveal className="text-center">
          <span className="eyebrow mx-auto">Past Partners</span>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-semibold text-white sm:text-4xl">
            Trusted by leading brands
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-900 to-transparent" />
        <motion.div
          className="flex w-max items-center gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((sponsor, i) => (
            <div
              key={`${sponsor.name}-${i}`}
              className="glass-card flex h-20 w-44 shrink-0 items-center justify-center p-3"
            >
              <div className="relative h-full w-full overflow-hidden rounded-lg bg-white">
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  fill
                  sizes="176px"
                  className="object-contain p-2"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
