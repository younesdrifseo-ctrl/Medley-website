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
    <section id="galerie" ref={containerRef} className="bg-cream2 py-20 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <RevealOnScroll>
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-olive/60 block mb-2 sm:mb-3">
            L&apos;espace
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-forest">
            Galerie
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p className="font-body text-sm sm:text-base text-forest/50 mt-3 max-w-md">
            Découvrez l&apos;univers MÉDLËY, un espace pensé pour sublimer chaque instant.
          </p>
        </RevealOnScroll>
      </div>

      {/* Horizontal scroll with native touch + parallax on desktop */}
      <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
        <motion.div
          className="flex gap-3 sm:gap-4 md:gap-6 sm:px-6 pb-4"
          style={{ width: "max-content", x }}
        >
          {GALLERY_IMAGES.map((img, i) => (
            <RevealOnScroll key={img.src} delay={Math.min(i * 0.06, 0.4)} direction="right">
              <motion.div
                className="relative w-60 h-80 sm:w-72 sm:h-96 md:w-96 md:h-[28rem] rounded-sm overflow-hidden flex-shrink-0"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 288px, 384px"
                  className="object-cover"
                />
                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep/60 to-transparent p-4 pt-12">
                  <span className="font-body text-xs text-cream/70">{img.alt}</span>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
