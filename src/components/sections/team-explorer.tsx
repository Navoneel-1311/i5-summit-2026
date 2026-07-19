"use client";

import { useMemo, useState } from "react";
import { RevealGroup } from "@/components/motion/reveal";
import { TeamCard } from "@/components/sections/team-card";
import { cn } from "@/lib/utils";
import { overallCoordinators, verticals } from "@/lib/data/team";

export function TeamExplorer() {
  const [active, setActive] = useState<string>("all");

  const filteredVerticals = useMemo(() => {
    if (active === "all") return verticals;
    return verticals.filter((v) => v.slug === active);
  }, [active]);

  return (
    <div>
      <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {overallCoordinators.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </RevealGroup>

      <div className="mt-16 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActive("all")}
          className={cn(
            "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors sm:text-sm",
            active === "all"
              ? "border-gold-500 bg-gold-500 text-navy-950"
              : "border-white/15 text-ink-300 hover:border-white/30 hover:text-white"
          )}
        >
          All Verticals
        </button>
        {verticals.map((v) => (
          <button
            key={v.slug}
            onClick={() => setActive(v.slug)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors sm:text-sm",
              active === v.slug
                ? "border-gold-500 bg-gold-500 text-navy-950"
                : "border-white/15 text-ink-300 hover:border-white/30 hover:text-white"
            )}
          >
            {v.name}
          </button>
        ))}
      </div>

      <div className="mt-14 space-y-20">
        {filteredVerticals.map((vertical) => (
          <section key={vertical.slug}>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
                {vertical.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-300 sm:text-base">
                {vertical.description}
              </p>
            </div>

            <RevealGroup className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {vertical.coordinators.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </RevealGroup>

            {vertical.members.length > 0 && (
              <RevealGroup className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {vertical.members.map((member) => (
                  <TeamCard key={member.name} member={member} />
                ))}
              </RevealGroup>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
