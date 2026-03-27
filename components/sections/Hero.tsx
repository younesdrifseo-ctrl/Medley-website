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

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep/40 via-deep/50 to-deep/80" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-3xl"
        style={{ opacity: contentOpacity }}
      >
        {/* Logo */}
        <motion.div
          className="relative w-40 h-16 sm:w-48 sm:h-20 md:w-64 md:h-28 mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src="/assets/logo/medley-logo.png"
            alt="MÉDLËY"
            fill
            sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 256px"
            className="object-contain"
            style={{ filter: "invert(1) brightness(1)", mixBlendMode: "screen" }}
            priority
          />
        </motion.div>

        {/* Tagline */}
        <motion.h1
          className="font-display italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cream/90 mb-2 font-light leading-snug"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          4 cuisines du monde, 1 expérience unique
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-body text-xs sm:text-sm md:text-base text-cream/60 tracking-widest uppercase mb-8 md:mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Argenteuil — Par le Chef Mohamed Si
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Countdown />
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 md:mt-10 w-full sm:w-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <a
            href="#reservation"
            className="px-8 py-3 bg-olive text-cream font-body text-sm tracking-widest uppercase rounded-sm hover:bg-forest transition-colors duration-300 text-center active:scale-97"
          >
            Réserver une table
          </a>
          <a
            href="#cuisines"
            className="px-8 py-3 border border-cream/30 text-cream font-body text-sm tracking-widest uppercase rounded-sm hover:bg-cream/10 transition-colors duration-300 text-center active:scale-97"
          >
            Découvrir
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 border-2 border-cream/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-cream/50 rounded-full mt-1.5"
            animate={{ y: [0, 4, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
