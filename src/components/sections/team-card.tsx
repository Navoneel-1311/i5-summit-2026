"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { revealItem } from "@/components/motion/reveal";
import type { TeamMember } from "@/lib/data/team";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      variants={revealItem}
      whileHover={{ y: -4 }}
      className="glass-card flex items-center gap-4 p-4 transition-colors hover:border-gold-500/40 sm:flex-col sm:p-6 sm:text-center"
    >
      <div className="relative size-16 shrink-0 overflow-hidden rounded-full border border-white/10 bg-navy-700 sm:size-24">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="96px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-heading text-lg font-semibold text-gold-500">
            {initials(member.name)}
          </div>
        )}
      </div>
      <div className="min-w-0">
        <h4 className="truncate font-heading text-sm font-semibold text-white sm:text-base">
          {member.name}
        </h4>
        <p className="text-xs text-ink-300 sm:text-sm">{member.role}</p>
        {member.phone && (
          <a
            href={`tel:${member.phone.replace(/\s/g, "")}`}
            className="mt-1 inline-flex items-center gap-1 text-xs text-gold-500 hover:underline sm:mt-2"
          >
            <Phone className="size-3" />
            {member.phone}
          </a>
        )}
      </div>
    </motion.div>
  );
}
