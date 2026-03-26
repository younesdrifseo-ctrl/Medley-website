"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/constants";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Gallery() {
  return (
    <section id="galerie" className="bg-cream2 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <RevealOnScroll>
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-olive/60 block mb-3">
            L&apos;espace
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="font-display italic text-4xl md:text-6xl font-light text-forest">
            Galerie
          </h2>
        </RevealOnScroll>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 md:gap-6 px-6 pb-4" style={{ width: "max-content" }}>
          {GALLERY_IMAGES.map((img, i) => (
            <RevealOnScroll key={img.src} delay={i * 0.08} direction="right">
              <motion.div
                className="relative w-72 h-96 md:w-96 md:h-[28rem] rounded-sm overflow-hidden flex-shrink-0"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
