"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CHEF } from "@/lib/constants";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Chef() {
  return (
    <section id="chef" className="bg-deep py-20 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <RevealOnScroll direction="left">
            <motion.div
              className="relative aspect-[3/4] rounded-sm overflow-hidden"
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
              <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/20 to-transparent" />
              {/* Name overlay on mobile */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:hidden">
                <p className="font-display italic text-2xl text-cream">{CHEF.name}</p>
                <p className="font-display italic text-sm text-gold2">{CHEF.title}</p>
              </div>
            </motion.div>
          </RevealOnScroll>

          {/* Text */}
          <div>
            <RevealOnScroll>
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-cream/40 block mb-2 sm:mb-3">
                Le Chef
              </span>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-2">
                {CHEF.name}
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="font-display italic text-lg sm:text-xl text-gold2 mb-6 sm:mb-8">
                {CHEF.title}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <p className="font-body text-sm sm:text-base leading-relaxed text-cream/60 mb-8 sm:mb-12 max-w-md">
                Révélé par Top Chef France, Mohamed Si a perfectionné son art à travers
                les compétitions culinaires les plus prestigieuses. Chez MÉDLËY, il
                réunit ses influences du monde entier en une seule adresse.
              </p>
            </RevealOnScroll>

            {/* Timeline */}
            <div className="relative pl-6 sm:pl-8 border-l border-cream/10">
              {CHEF.achievements.map((item, i) => (
                <RevealOnScroll key={item.label} delay={0.4 + i * 0.1}>
                  <div className="relative mb-5 sm:mb-6 last:mb-0">
                    {/* Dot */}
                    <div className="absolute -left-[calc(1.5rem+4.5px)] sm:-left-[calc(2rem+4.5px)] top-1.5 w-2 h-2 rounded-full bg-gold2" />
                    {item.year && (
                      <span className="font-mono text-[10px] sm:text-xs text-gold2/70 block mb-1">
                        {item.year}
                      </span>
                    )}
                    <p className="font-body text-xs sm:text-sm text-cream/70">
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
