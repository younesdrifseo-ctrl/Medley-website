"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CHEF } from "@/lib/constants";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Chef() {
  return (
    <section id="chef" className="bg-deep py-24 sm:py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          {/* Photo */}
          <RevealOnScroll direction="left">
            <motion.div
              className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src="/assets/photos/chef.jpg"
                alt={`${CHEF.name}, ${CHEF.title}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent" />
              {/* Name overlay on mobile */}
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 lg:hidden">
                <p className="font-display italic text-2xl sm:text-3xl text-cream">{CHEF.name}</p>
                <p className="font-display italic text-sm text-gold2">{CHEF.title}</p>
              </div>
            </motion.div>
          </RevealOnScroll>

          {/* Text */}
          <div>
            <RevealOnScroll>
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-cream/30 block mb-3 sm:mb-4">
                Le Chef
              </span>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2 className="font-display italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-3">
                {CHEF.name}
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="font-display italic text-lg sm:text-xl text-gold2 mb-4">
                {CHEF.title}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.25}>
              <div className="w-10 h-px bg-gold2/40 mb-6 sm:mb-8" />
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <p className="font-body text-sm sm:text-base leading-[1.8] text-cream/50 mb-10 sm:mb-14 max-w-md">
                Révélé par Top Chef France, Mohamed Si a perfectionné son art à travers
                les compétitions culinaires les plus prestigieuses. Chez MÉDLËY, il
                réunit ses influences du monde entier en une seule adresse.
              </p>
            </RevealOnScroll>

            {/* Timeline */}
            <div className="relative pl-8 sm:pl-10 border-l border-cream/8">
              {CHEF.achievements.map((item, i) => (
                <RevealOnScroll key={item.label} delay={0.4 + i * 0.1}>
                  <div className="relative mb-6 sm:mb-8 last:mb-0">
                    {/* Dot */}
                    <div className="absolute -left-[calc(2rem+5px)] sm:-left-[calc(2.5rem+5px)] top-1 w-2.5 h-2.5 rounded-full bg-gold2/80 shadow-sm shadow-gold2/30" />
                    {item.year && (
                      <span className="font-mono text-[10px] sm:text-xs text-gold2/60 block mb-1.5">
                        {item.year}
                      </span>
                    )}
                    <p className="font-body text-sm sm:text-base text-cream/60">
                      {item.label}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
