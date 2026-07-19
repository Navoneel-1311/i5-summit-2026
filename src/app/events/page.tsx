import type { Metadata } from "next";
import { EventsExplorer } from "@/components/sections/events-explorer";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore every event at i5 Summit 2026 — from Get-Funded and Socio-Innovate to the Startup Expo and Venture Quest.",
};

export default function EventsPage() {
  return (
    <div className="section-shell pt-36 pb-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow mx-auto">21–23 August 2026 · IIM Indore</span>
        <h1 className="mt-5 text-balance text-4xl font-semibold text-white sm:text-5xl">
          Events at i5 Summit 2026
        </h1>
        <p className="mt-4 text-balance text-ink-300">
          Flagship competitions, workshops and networking formats designed
          for founders, investors and students alike.
        </p>
      </div>

      <EventsExplorer />
    </div>
  );
}
