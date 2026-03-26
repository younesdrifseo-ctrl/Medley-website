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
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <p className="font-display italic text-lg text-gold2">
          Ouverture le {RESTAURANT.openingLabel}
        </p>
      </div>
    );
  }

  if (!timeLeft) {
    return (
      <p className="font-display italic text-2xl text-gold2">
        Maintenant ouvert
      </p>
    );
  }

  const units = Object.entries(timeLeft) as [string, number][];

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="font-body text-xs tracking-[0.3em] uppercase text-cream/50">
        Ouverture dans
      </p>
      <div className="flex items-center gap-3 md:gap-5">
        {units.map(([label, value]) => (
          <div key={label} className="flex flex-col items-center">
            <span className="font-mono text-3xl md:text-5xl text-cream tabular-nums">
              {String(value).padStart(2, "0")}
            </span>
            <span className="font-mono text-[10px] md:text-xs text-cream/40 uppercase tracking-wider mt-1">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
