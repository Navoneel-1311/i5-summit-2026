"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CalendarDays, MapPin, Trophy, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  events,
  eventCategories,
  type SummitEvent,
  type EventCategory,
} from "@/lib/data/events";

export function EventsExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<EventCategory | "All">("All");
  const [active, setActive] = useState<SummitEvent | null>(null);

  const filtered = useMemo(() => {
    return events.filter((event) => {
      const matchesCategory = category === "All" || event.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        event.name.toLowerCase().includes(query.toLowerCase()) ||
        event.tagline.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="mt-14">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-ink-300" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search events..."
            className="border-white/15 bg-white/[0.03] pl-10 text-white placeholder:text-ink-300 focus-visible:ring-gold-500/50"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {(["All", ...eventCategories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors sm:text-sm",
                category === cat
                  ? "border-gold-500 bg-gold-500 text-navy-950"
                  : "border-white/15 text-ink-300 hover:border-white/30 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((event) => (
            <motion.button
              layout
              key={event.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              onClick={() => setActive(event)}
              className="glass-card group flex h-full flex-col items-start p-7 text-left transition-colors hover:border-gold-500/40"
            >
              <Badge className="rounded-full border-none bg-gold-500/15 text-gold-500 hover:bg-gold-500/15">
                {event.category}
              </Badge>
              <h3 className="mt-4 font-heading text-xl font-semibold text-white">
                {event.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                {event.tagline}
              </p>
              <div className="mt-5 flex flex-1 flex-col justify-end gap-2 text-xs text-ink-300">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="size-3.5 text-gold-500" />
                  {event.date}
                </span>
                {event.prizePool && (
                  <span className="flex items-center gap-1.5">
                    <Trophy className="size-3.5 text-gold-500" />
                    Prize pool: {event.prizePool}
                  </span>
                )}
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-ink-300">
          No events match your search. Try a different keyword or filter.
        </p>
      )}

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="border-white/10 bg-navy-900 text-white sm:max-w-lg">
          {active && (
            <>
              <DialogHeader>
                <Badge className="w-fit rounded-full border-none bg-gold-500/15 text-gold-500 hover:bg-gold-500/15">
                  {active.category}
                </Badge>
                <DialogTitle className="mt-3 font-heading text-2xl text-white">
                  {active.name}
                </DialogTitle>
              </DialogHeader>
              <p className="text-sm leading-relaxed text-ink-300">
                {active.description}
              </p>
              <div className="mt-2 space-y-2.5 border-t border-white/10 pt-4 text-sm text-ink-300">
                <p className="flex items-center gap-2">
                  <CalendarDays className="size-4 text-gold-500" />
                  {active.date}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="size-4 text-gold-500" />
                  {active.venue}
                </p>
                {active.prizePool && (
                  <p className="flex items-center gap-2">
                    <Trophy className="size-4 text-gold-500" />
                    Prize pool: {active.prizePool}
                  </p>
                )}
              </div>
              <div className="mt-2 rounded-xl border border-gold-500/25 bg-gold-500/5 px-4 py-3 text-xs text-gold-500">
                Registrations open closer to the summit. Write to{" "}
                <a href="mailto:i5summit@iimidr.ac.in" className="underline">
                  i5summit@iimidr.ac.in
                </a>{" "}
                to be notified.
              </div>
              <DialogClose
                aria-label="Close"
                className="absolute top-5 right-5 text-ink-300 hover:text-white"
              >
                <X className="size-4" />
              </DialogClose>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
