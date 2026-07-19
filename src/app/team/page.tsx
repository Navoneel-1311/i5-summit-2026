import type { Metadata } from "next";
import { TeamExplorer } from "@/components/sections/team-explorer";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the 65+ students across 11 verticals organizing i5 Summit 2026 at IIM Indore.",
};

export default function TeamPage() {
  return (
    <div className="section-shell pt-36 pb-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow mx-auto">The People Behind i5</span>
        <h1 className="mt-5 text-balance text-4xl font-semibold text-white sm:text-5xl">
          Meet the Team
        </h1>
        <p className="mt-4 text-balance text-ink-300">
          65+ students across 11 verticals, working together to bring i5
          Summit 2026 to life.
        </p>
      </div>

      <div className="mt-16">
        <TeamExplorer />
      </div>
    </div>
  );
}
