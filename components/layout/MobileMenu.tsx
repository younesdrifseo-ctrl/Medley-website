"use client";

import { motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-deep flex flex-col items-center justify-center gap-8"
      initial={{ clipPath: "circle(0% at calc(100% - 40px) 32px)" }}
      animate={{ clipPath: "circle(150% at calc(100% - 40px) 32px)" }}
      exit={{ clipPath: "circle(0% at calc(100% - 40px) 32px)" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {NAV_LINKS.map((link, i) => (
        <motion.a
          key={link.href}
          href={link.href}
          onClick={onClose}
          className="font-display text-4xl italic text-cream/90 hover:text-gold2 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.08 }}
        >
          {link.label}
        </motion.a>
      ))}
      <motion.a
        href="#reservation"
        onClick={onClose}
        className="mt-4 px-8 py-3 bg-olive text-cream font-body tracking-widest uppercase text-sm rounded-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Réserver une table
      </motion.a>
    </motion.div>
  );
}
