"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/photos/hero.jpg"
        alt="Salle MÉDLËY"
        fill
        className="object-cover"
        priority
        quality={85}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-deep/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Logo */}
        <motion.div
          className="relative w-48 h-20 md:w-64 md:h-28 mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src="/assets/logo/medley-logo.png"
            alt="MÉDLËY"
            fill
            className="object-contain"
            style={{ filter: "invert(1) brightness(1)", mixBlendMode: "screen" }}
            priority
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="font-display italic text-xl md:text-3xl text-cream/90 mb-2 font-light"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          4 cuisines du monde, 1 expérience unique
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="font-body text-sm md:text-base text-cream/60 tracking-widest uppercase mb-10"
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
          className="flex flex-col sm:flex-row gap-4 mt-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <a
            href="#reservation"
            className="px-8 py-3 bg-olive text-cream font-body text-sm tracking-widest uppercase rounded-sm hover:bg-forest transition-colors duration-300"
          >
            Réserver une table
          </a>
          <a
            href="#cuisines"
            className="px-8 py-3 border border-cream/30 text-cream font-body text-sm tracking-widest uppercase rounded-sm hover:bg-cream/10 transition-colors duration-300"
          >
            Découvrir
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 border-2 border-cream/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-cream/50 rounded-full mt-1.5" />
        </div>
      </motion.div>
    </section>
  );
}
