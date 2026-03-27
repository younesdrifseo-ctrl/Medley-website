"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/constants";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section id="galerie" ref={containerRef} className="bg-cream2 py-24 sm:py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-10 sm:mb-14">
        <RevealOnScroll>
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-olive/50 block mb-3 sm:mb-4">
            L&apos;espace
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-forest">
            Galerie
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.15}>
          <div className="w-10 h-px bg-olive/30 mt-4 mb-4" />
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p className="font-body text-sm sm:text-base text-forest/45 max-w-md leading-relaxed">
            Découvrez l&apos;univers MÉDLËY, un espace pensé pour sublimer chaque instant.
          </p>
        </RevealOnScroll>
      </div>

      {/* Horizontal scroll with native touch + parallax on desktop */}
      <div className="overflow-x-auto scrollbar-hide px-6 sm:px-8">
        <motion.div
          className="flex gap-4 sm:gap-5 md:gap-6 pb-4"
          style={{ width: "max-content", x }}
        >
          {GALLERY_IMAGES.map((img, i) => (
            <RevealOnScroll key={img.src} delay={Math.min(i * 0.06, 0.4)} direction="right">
              <motion.div
                className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-96 md:h-[28rem] rounded-sm overflow-hidden flex-shrink-0 shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 384px"
                  className="object-cover"
                />
                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep/70 to-transparent p-5 pt-16">
                  <span className="font-body text-xs text-cream/60">{img.alt}</span>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
