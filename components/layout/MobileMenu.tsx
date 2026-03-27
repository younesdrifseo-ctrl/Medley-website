"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NAV_LINKS, RESTAURANT } from "@/lib/constants";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-ink/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6 px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation"
    >
      {/* Logo */}
      <div className="relative w-28 h-10 mb-8">
        <Image
          src="/assets/logo/medley-logo.png"
          alt="MÉDLËY"
          fill
          sizes="112px"
          className="object-contain"
          style={{ filter: "invert(1) brightness(1)", mixBlendMode: "screen" }}
        />
      </div>

      {/* Links */}
      {NAV_LINKS.map((link, i) => (
        <motion.a
          key={link.href}
          href={link.href}
          onClick={onClose}
          className="font-display italic text-2xl sm:text-3xl text-cream/70 hover:text-cream transition-colors duration-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
        >
          {link.label}
        </motion.a>
      ))}

      {/* Reserve CTA */}
      <motion.a
        href="#reservation"
        onClick={onClose}
        className="mt-6 px-10 py-3 border border-gold2/25 text-gold2/70 font-body text-[10px] tracking-[0.3em] uppercase hover:bg-gold2/10 transition-all duration-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        Réserver une table
      </motion.a>

      {/* Phone */}
      <motion.a
        href={`tel:${RESTAURANT.phoneIntl}`}
        className="mt-2 font-mono text-[10px] text-cream/20 hover:text-cream/40 transition-colors duration-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {RESTAURANT.phone}
      </motion.a>
    </motion.div>
  );
}
