"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/reveal";
import { gallery } from "@/lib/data/gallery";

export function Gallery() {
  return (
    <section id="gallery" className="section-shell py-24 sm:py-32">
      <Reveal className="text-center">
        <span className="eyebrow mx-auto">Past Editions</span>
        <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-semibold text-white sm:text-4xl">
          Glimpses from i5 Summit
        </h2>
      </Reveal>

      <RevealGroup className="mt-14 columns-2 gap-4 sm:columns-3 lg:columns-4">
        {gallery.map((image, i) => (
          <motion.div
            key={image.src}
            variants={revealItem}
            className="group relative mb-4 overflow-hidden rounded-2xl border border-white/10"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={480}
              height={i % 3 === 0 ? 600 : 400}
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  );
}
