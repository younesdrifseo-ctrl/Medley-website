"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { NAV_LINKS, RESTAURANT } from "@/lib/constants";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-deep flex flex-col items-center justify-center gap-6 safe-bottom"
      initial={{ clipPath: "circle(0% at calc(100% - 40px) 32px)" }}
      animate={{ clipPath: "circle(150% at calc(100% - 40px) 32px)" }}
      exit={{ clipPath: "circle(0% at calc(100% - 40px) 32px)" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Logo in menu */}
      <div className="relative w-32 h-12 mb-4">
        <Image
          src="/assets/logo/medley-logo.png"
          alt="MÉDLËY"
          fill
          sizes="128px"
          className="object-contain"
          style={{ filter: "invert(1) brightness(1)", mixBlendMode: "screen" }}
        />
      </div>

      {NAV_LINKS.map((link, i) => (
        <motion.a
          key={link.href}
          href={link.href}
          onClick={onClose}
          className="font-display text-3xl sm:text-4xl italic text-cream/90 hover:text-gold2 transition-colors active:scale-97"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
        >
          {link.label}
        </motion.a>
      ))}

      <motion.a
        href="#reservation"
        onClick={onClose}
        className="mt-6 px-8 py-3 bg-olive text-cream font-body tracking-widest uppercase text-sm rounded-sm active:scale-95 transition-transform"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        Réserver une table
      </motion.a>

      {/* Phone shortcut */}
      <motion.a
        href={`tel:${RESTAURANT.phoneIntl}`}
        className="mt-2 font-mono text-sm text-cream/40 hover:text-gold2 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {RESTAURANT.phone}
      </motion.a>
    </motion.div>
  );
}
