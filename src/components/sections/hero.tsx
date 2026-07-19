"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Countdown } from "@/components/motion/countdown";
import { site } from "@/lib/data/site";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      {/* floating gradient particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 right-[8%] h-72 w-72 rounded-full bg-gold-500/20 blur-[100px]"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -left-24 h-96 w-96 rounded-full bg-navy-700/50 blur-[120px]"
          animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-gold-400/10 blur-[100px]"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-[size:32px_32px] opacity-40" />
      </div>

      <div className="section-shell relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              <CalendarDays className="size-3.5" />
              {site.dates.display} · {site.venue}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-balance text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
            >
              i5 Summit <span className="gold-gradient-text">2026</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 max-w-xl text-balance text-lg text-ink-300 sm:text-xl"
            >
              {site.tagline}. This year&apos;s theme:{" "}
              <span className="font-medium text-white">
                &ldquo;{site.theme}&rdquo;
              </span>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/events"
                className={buttonVariants({
                  size: "lg",
                  className: "rounded-full px-7 font-semibold",
                })}
              >
                Explore Events
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/team"
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className:
                    "rounded-full border-white/20 bg-white/[0.03] px-7 text-white hover:bg-white/10 hover:text-white",
                })}
              >
                Meet the Team
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex items-center gap-2 text-sm text-ink-300"
            >
              <MapPin className="size-4 text-gold-500" />
              IIM Indore Campus · Offline
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8"
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-ink-300">
                Summit begins in
              </p>
              <Countdown target={`${site.dates.start}T09:00:00+05:30`} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center lg:flex"
          >
            <div className="glass-card relative flex aspect-square w-full items-center justify-center p-14">
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/images/logo.png"
                  alt="i5 Summit"
                  width={340}
                  height={340}
                  priority
                  className="h-auto w-full drop-shadow-[0_0_60px_rgba(255,200,61,0.35)]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
