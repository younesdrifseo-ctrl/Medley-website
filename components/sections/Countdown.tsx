"use client";

import { useState, useEffect } from "react";
import { RESTAURANT } from "@/lib/constants";

interface TimeLeft {
  jours: number;
  heures: number;
  minutes: number;
  secondes: number;
}

function getTimeLeft(): TimeLeft | null {
  const diff = new Date(RESTAURANT.opening).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    jours: Math.floor(diff / (1000 * 60 * 60 * 24)),
    heures: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    secondes: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <p className="font-display italic text-base text-gold2/70">
        Ouverture le {RESTAURANT.openingLabel}
      </p>
    );
  }

  if (!timeLeft) {
    return (
      <p className="font-display italic text-xl text-gold2">
        Maintenant ouvert
      </p>
    );
  }

  const units = Object.entries(timeLeft) as [string, number][];

  return (
    <div className="flex items-center gap-4 sm:gap-6">
      {units.map(([label, value]) => (
        <div key={label} className="flex flex-col items-center gap-1.5">
          <span className="font-mono text-lg sm:text-xl md:text-2xl text-cream/70 tabular-nums">
            {String(value).padStart(2, "0")}
          </span>
          <span className="font-mono text-[7px] sm:text-[8px] text-cream/25 uppercase tracking-[0.2em]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
