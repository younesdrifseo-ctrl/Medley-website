"use client";

import { useState, useEffect } from "react";

export type TimeMode = "day" | "night";

/**
 * Returns "day" between 10:00-18:59, "night" otherwise.
 * Coffee Shop: 15h-19h → day mode
 * Restaurant: 19h-01h → night mode
 */
export function useTimeOfDay(): TimeMode {
  const [mode, setMode] = useState<TimeMode>("night");

  useEffect(() => {
    const update = () => {
      const hour = new Date().getHours();
      setMode(hour >= 10 && hour < 19 ? "day" : "night");
    };
    update();
    const interval = setInterval(update, 60_000); // check every minute
    return () => clearInterval(interval);
  }, []);

  return mode;
}
