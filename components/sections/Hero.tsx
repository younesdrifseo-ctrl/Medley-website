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
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="/assets/photos/hero.jpg"
          alt="Salle MÉDLËY"
          fill
          className="object-cover scale-110"
          priority
          quality={85}
          sizes="100vw"
        />
      </motion.div>

      {/* Multi-layer gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep/60 via-deep/40 to-deep/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/30 via-transparent to-deep/30" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 sm:px-8 max-w-4xl"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Logo */}
        <motion.div
          className="relative w-48 h-20 sm:w-56 sm:h-24 md:w-72 md:h-32 mb-8 sm:mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src="/assets/logo/medley-logo.png"
            alt="MÉDLËY"
            fill
            sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 288px"
            className="object-contain"
            style={{ filter: "invert(1) brightness(1)", mixBlendMode: "screen" }}
            priority
          />
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="w-12 h-px bg-gold2/60 mb-6 sm:mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Tagline */}
        <motion.h1
          className="font-display italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cream/95 mb-3 font-light leading-snug tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          4 cuisines du monde, 1 expérience unique
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-body text-xs sm:text-sm md:text-base text-cream/50 tracking-[0.25em] uppercase mb-10 md:mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Argenteuil — Par le Chef Mohamed Si
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Countdown />
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-10 md:mt-12 w-full sm:w-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <a
            href="#reservation"
            className="group px-10 py-3.5 bg-olive text-cream font-body text-sm tracking-[0.2em] uppercase rounded-sm hover:bg-forest transition-all duration-500 text-center active:scale-95 shadow-lg shadow-olive/20"
          >
            Réserver une table
          </a>
          <a
            href="#cuisines"
            className="px-10 py-3.5 border border-cream/25 text-cream/90 font-body text-sm tracking-[0.2em] uppercase rounded-sm hover:bg-cream/10 hover:border-cream/40 transition-all duration-500 text-center active:scale-95"
          >
            Découvrir
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-cream/25">Scroll</span>
        <div className="w-5 h-8 border border-cream/20 rounded-full flex justify-center">
          <motion.div
            className="w-0.5 h-2 bg-cream/40 rounded-full mt-1.5"
            animate={{ y: [0, 6, 0], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
