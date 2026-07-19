"use client";

import { useEffect, useState } from "react";

function getTimeLeft(target: string) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown({ target }: { target: string }) {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    // Client-only timer: seed real values immediately on mount (server render
    // stays null to avoid a hydration mismatch), then tick every second.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTime(getTimeLeft(target));
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "Days", value: time?.days },
    { label: "Hours", value: time?.hours },
    { label: "Minutes", value: time?.minutes },
    { label: "Seconds", value: time?.seconds },
  ];

  return (
    <div className="flex items-center gap-3 sm:gap-4" suppressHydrationWarning>
      {units.map((unit) => (
        <div
          key={unit.label}
          className="glass-card flex w-16 flex-col items-center justify-center gap-0.5 py-3 sm:w-20 sm:py-4"
        >
          <span className="font-heading text-xl font-semibold text-white tabular-nums sm:text-2xl">
            {unit.value !== undefined ? String(unit.value).padStart(2, "0") : "--"}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-ink-300 sm:text-xs">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
