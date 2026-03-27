"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CHEF } from "@/lib/constants";

export default function Chef() {
  return (
    <section id="chef" className="relative">
      {/* Full-screen photo with quote overlay */}
      <div className="relative h-[80svh] sm:h-[90svh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/assets/photos/chef.jpg"
            alt={`${CHEF.name}, ${CHEF.title}`}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep/60 via-transparent to-transparent" />

        {/* Quote overlay - positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 lg:px-12 pb-16 sm:pb-20 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-cream/25 block mb-6">
                Le Chef
              </span>
              <blockquote className="font-display italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cream/80 font-light leading-snug max-w-3xl mb-6">
                &ldquo;{CHEF.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-gold2/50" />
                <p className="font-body text-sm text-gold2/70">
                  {CHEF.name}, <span className="italic">{CHEF.title}</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bio section below */}
      <div className="bg-deep py-20 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Bio text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display italic text-4xl sm:text-5xl md:text-6xl text-cream font-light mb-4">
                {CHEF.name}
              </h2>
              <p className="font-display italic text-base sm:text-lg text-gold2/80 mb-6">
                {CHEF.title}
              </p>
              <div className="w-10 h-px bg-cream/10 mb-8" />
              <p className="font-body text-sm sm:text-base leading-[1.9] text-cream/40 max-w-lg">
                Révélé par Top Chef France, Mohamed Si a perfectionné son art à travers
                les compétitions culinaires les plus prestigieuses. Chez MÉDLËY, il
                réunit ses influences du monde entier en une seule adresse — un voyage
                culinaire unique entre Orient, Asie, Brasserie française, Italie et
                créations sucrées d&apos;exception.
              </p>
            </motion.div>

            {/* Achievements timeline */}
            <motion.div
              className="relative pl-8 border-l border-cream/8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {CHEF.achievements.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="relative mb-8 last:mb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <div className="absolute -left-[calc(2rem+4px)] top-1.5 w-2 h-2 rounded-full bg-gold2/70" />
                  {item.year && (
                    <span className="font-mono text-[10px] text-gold2/50 block mb-1">
                      {item.year}
                    </span>
                  )}
                  <p className="font-body text-sm sm:text-base text-cream/55">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
