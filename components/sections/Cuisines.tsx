"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CUISINES } from "@/lib/constants";

export default function Cuisines() {
  const [active, setActive] = useState<string | null>(null);
  const activeCuisine = CUISINES.find((c) => c.id === active);

  return (
    <section id="cuisines" className="bg-cream py-24 sm:py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-olive/40 block mb-3">
            Nos univers
          </span>
          <h2 className="font-display italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-forest">
            5 Cuisines
          </h2>
          <div className="w-10 h-px bg-gold2/40 mx-auto mt-5" />
        </motion.div>

        {/* Grid - 3 + 2 layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {CUISINES.map((cuisine, idx) => (
            <motion.div
              key={cuisine.id}
              className={`relative overflow-hidden cursor-pointer group ${
                idx >= 3 ? "col-span-1" : ""
              } ${CUISINES.length === 5 && idx === 3 ? "sm:col-start-1" : ""}`}
              style={{ aspectRatio: idx < 3 ? "3/4" : "3/4" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              onClick={() => setActive(active === cuisine.id ? null : cuisine.id)}
              data-cursor="Découvrir"
            >
              {/* Image */}
              <Image
                src={cuisine.image}
                alt={cuisine.name}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent transition-opacity duration-500" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-7">
                {/* Icon */}
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 mb-3 opacity-70">
                  <Image
                    src={cuisine.icon}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-contain"
                    style={{ filter: "invert(1) brightness(0.9)" }}
                    aria-hidden="true"
                  />
                </div>

                {/* Number */}
                <span className="font-mono text-[9px] tracking-[0.3em] text-cream/30 uppercase mb-1">
                  {cuisine.number}
                </span>

                {/* Name */}
                <h3 className="font-display italic text-xl sm:text-2xl md:text-3xl text-cream font-light mb-1">
                  {cuisine.name}
                </h3>

                {/* Tagline */}
                <p className="font-display italic text-[11px] sm:text-xs text-cream/50">
                  {cuisine.tagline}
                </p>

                {/* Dishes - appear on hover */}
                <div className="overflow-hidden">
                  <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-cream/10">
                    {cuisine.dishes.slice(0, 3).map((dish) => (
                      <p
                        key={dish}
                        className="font-body text-[10px] sm:text-xs text-cream/45 leading-relaxed"
                      >
                        {dish}
                      </p>
                    ))}
                    <p className="font-mono text-[9px] text-gold2/60 mt-2 tracking-wider">
                      + encore plus
                    </p>
                  </div>
                </div>
              </div>

              {/* Colored accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: cuisine.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Expanded cuisine detail - modal-like */}
        <AnimatePresence>
          {activeCuisine && (
            <motion.div
              className="mt-8 sm:mt-12 relative bg-deep rounded-sm overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="p-6 sm:p-8 md:p-12 lg:p-16">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-12">
                  <div className="flex-1">
                    <span className="font-mono text-[9px] tracking-[0.3em] text-cream/20 uppercase block mb-2">
                      {activeCuisine.number} — {activeCuisine.name}
                    </span>
                    <h3 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-cream font-light mb-3">
                      {activeCuisine.name}
                    </h3>
                    <p className="font-display italic text-sm sm:text-base text-gold2/70 mb-5">
                      {activeCuisine.tagline}
                    </p>
                    <p className="font-body text-sm text-cream/40 leading-relaxed max-w-lg mb-8">
                      {activeCuisine.description}
                    </p>
                    <div className="space-y-3">
                      {activeCuisine.dishes.map((dish) => (
                        <div key={dish} className="flex items-center gap-4">
                          <span
                            className="w-6 h-px flex-shrink-0"
                            style={{ background: activeCuisine.color }}
                          />
                          <span className="font-body text-sm text-cream/55">{dish}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setActive(null)}
                    className="font-mono text-[10px] tracking-wider uppercase text-cream/30 hover:text-cream/60 transition-colors self-start"
                  >
                    Fermer ✕
                  </button>
                </div>
              </div>
              {/* Accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: activeCuisine.color }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
