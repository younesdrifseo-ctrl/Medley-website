"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("");
  const [hovering, setHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    },
    [cursorX, cursorY, visible]
  );

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const interactive = target.closest("a, button, [data-cursor], input, select, textarea");
    if (interactive) {
      setHovering(true);
      const cursorLabel = interactive.getAttribute("data-cursor");
      setLabel(cursorLabel || "");
    } else {
      setHovering(false);
      setLabel("");
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setVisible(false);
  }, []);

  useEffect(() => {
    const hasPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasPointer) return;
    setIsDesktop(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseOver, handleMouseLeave]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ x, y }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 0 : 1,
        }}
        transition={{ scale: { duration: 0.2 }, opacity: { duration: 0.15 } }}
      >
        <div className="w-2 h-2 -ml-1 -mt-1 rounded-full bg-cream" />
      </motion.div>

      {/* Outer ring / label */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center"
        style={{ x, y }}
        animate={{
          opacity: visible ? 1 : 0,
          width: hovering ? (label ? 100 : 48) : 32,
          height: hovering ? (label ? 100 : 48) : 32,
          marginLeft: hovering ? (label ? -50 : -24) : -16,
          marginTop: hovering ? (label ? -50 : -24) : -16,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={`w-full h-full rounded-full border transition-colors duration-300 flex items-center justify-center ${
            hovering
              ? "border-gold2/50 bg-gold2/10 backdrop-blur-sm"
              : "border-cream/15"
          }`}
        >
          {label && hovering && (
            <motion.span
              className="font-mono text-[8px] tracking-[0.15em] uppercase text-cream/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {label}
            </motion.span>
          )}
        </div>
      </motion.div>
    </>
  );
}
