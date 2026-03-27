"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Countdown from "./Countdown";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background image with scale on scroll */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        <Image
          src="/assets/photos/hero.jpg"
          alt="Intérieur MÉDLËY"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
      </motion.div>

      {/* Multi-layer gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/20 via-transparent to-ink/20" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 sm:px-8 max-w-5xl w-full"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Logo */}
        <motion.div
          className="relative w-52 h-20 sm:w-64 sm:h-24 md:w-80 md:h-32 lg:w-96 lg:h-36 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/assets/logo/medley-logo.png"
            alt="MÉDLËY"
            fill
            sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
            className="object-contain"
            style={{ filter: "invert(1) brightness(1)", mixBlendMode: "screen" }}
            priority
          />
        </motion.div>

        {/* Tagline */}
        <motion.h1
          className="font-display italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cream/90 font-light leading-tight tracking-wide mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          5 cuisines du monde, 1 expérience unique
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-body text-[11px] sm:text-xs text-cream/40 tracking-[0.3em] uppercase mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Argenteuil — Par le Chef Mohamed Si
        </motion.p>

        {/* Countdown - subtle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Countdown />
        </motion.div>

        {/* Single CTA */}
        <motion.a
          href="#reservation"
          className="mt-10 px-12 py-4 border border-cream/20 text-cream/80 font-body text-[11px] sm:text-xs tracking-[0.3em] uppercase hover:bg-cream/10 hover:border-cream/40 transition-all duration-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          data-cursor="Réserver"
        >
          Réserver une table
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-cream/0 via-cream/20 to-cream/0"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
