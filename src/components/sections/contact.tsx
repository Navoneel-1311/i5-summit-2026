"use client";

import Image from "next/image";
import { Mail, ArrowUpRight } from "lucide-react";
import { InstagramGlyph, LinkedinGlyph } from "@/components/icons/social";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/data/site";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="section-shell pb-28 pt-4 sm:pb-36">
      <div className="glass-card overflow-hidden px-8 py-16 sm:px-16 sm:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="eyebrow">Get in touch</span>
            <h2 className="mt-5 text-balance text-3xl font-semibold text-white sm:text-4xl">
              Let&apos;s build the future of entrepreneurship, together.
            </h2>
            <p className="mt-4 max-w-lg text-balance text-ink-300">
              Whether you&apos;re a startup, a sponsor, or a speaker — reach
              out and the i5 Summit team will get back to you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className={buttonVariants({
                  size: "lg",
                  className: "rounded-full font-semibold",
                })}
              >
                <Mail className="size-4" />
                {site.email}
              </a>
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className:
                    "rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white",
                })}
              >
                <InstagramGlyph className="size-4" />
                {site.socialHandle}
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={buttonVariants({
                  size: "icon",
                  variant: "outline",
                  className:
                    "rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white",
                })}
              >
                <LinkedinGlyph className="size-4" />
              </a>
            </div>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 gap-4">
            {site.coordinators.map((person) => (
              <motion.div
                key={person.name}
                variants={revealItem}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center"
              >
                <div className="relative mx-auto size-20 overflow-hidden rounded-full border border-white/10">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <h4 className="mt-3 font-heading text-sm font-semibold text-white">
                  {person.name}
                </h4>
                <p className="text-xs text-ink-300">{person.role}</p>
                <a
                  href={`tel:${person.phone.replace(/\s/g, "")}`}
                  className="mt-2 inline-flex items-center gap-1 text-xs text-gold-500 hover:underline"
                >
                  {person.phone}
                  <ArrowUpRight className="size-3" />
                </a>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
