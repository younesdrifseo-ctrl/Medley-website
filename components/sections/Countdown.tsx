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
    <div className="flex flex-col items-center gap-4">
      <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-cream/35">
        Ouverture dans
      </p>
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        {units.map(([label, value], i) => (
          <div key={label} className="flex flex-col items-center">
            <div className="relative w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 flex items-center justify-center border border-cream/10 rounded-sm bg-cream/5 backdrop-blur-sm">
              <span className="font-mono text-xl sm:text-2xl md:text-4xl text-cream tabular-nums leading-none">
                {String(value).padStart(2, "0")}
              </span>
            </div>
            <span className="font-mono text-[8px] sm:text-[9px] md:text-[10px] text-cream/30 uppercase tracking-[0.2em] mt-2">
              {label}
            </span>
            {i < units.length - 1 && (
              <span className="sr-only">,</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
