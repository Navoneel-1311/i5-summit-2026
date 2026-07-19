"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/motion/counter";
import { stats } from "@/lib/data/site";

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="section-shell">
        <div className="glass-card grid grid-cols-2 gap-8 px-8 py-12 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="font-heading text-4xl font-bold text-white sm:text-5xl"
              />
              <p className="mt-2 text-xs font-medium uppercase tracking-widest text-ink-300 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
