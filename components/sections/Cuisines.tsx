"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CUISINES } from "@/lib/constants";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Cuisines() {
  return (
    <section id="cuisines">
      {CUISINES.map((cuisine, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div
            key={cuisine.id}
            className={`relative min-h-screen flex items-center overflow-hidden ${
              isEven ? "bg-cream" : "bg-deep"
            }`}
          >
            {/* Subtle background image */}
            <div className={`absolute inset-0 ${isEven ? "opacity-[0.04]" : "opacity-[0.12]"}`}>
              <Image
                src={cuisine.image}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
                aria-hidden="true"
              />
            </div>

            {/* Decorative gradient accent */}
            <div
              className={`absolute inset-0 ${
                isEven
                  ? "bg-gradient-to-br from-transparent via-transparent to-sage/5"
                  : "bg-gradient-to-br from-transparent via-transparent to-gold/5"
              }`}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-28 md:py-36 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
                {/* Text side */}
                <div>
                  {/* Icon */}
                  <RevealOnScroll>
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-6 sm:mb-8">
                      <Image
                        src={cuisine.icon}
                        alt={`Icône ${cuisine.name}`}
                        fill
                        sizes="80px"
                        className="object-contain"
                        style={
                          isEven
                            ? { filter: "saturate(0.7) brightness(0.4)" }
                            : { filter: "invert(1) brightness(0.9)" }
                        }
                      />
                    </div>
                  </RevealOnScroll>

                  {/* Number */}
                  <RevealOnScroll delay={0.08}>
                    <span
                      className={`font-mono text-[10px] sm:text-xs tracking-[0.4em] uppercase block mb-2 ${
                        isEven ? "text-olive/50" : "text-cream/30"
                      }`}
                    >
                      {cuisine.number}
                    </span>
                  </RevealOnScroll>

                  {/* Name */}
                  <RevealOnScroll delay={0.16}>
                    <h2
                      className={`font-display italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-3 sm:mb-4 ${
                        isEven ? "text-forest" : "text-cream"
                      }`}
                    >
                      {cuisine.name}
                    </h2>
                  </RevealOnScroll>

                  {/* Tagline */}
                  <RevealOnScroll delay={0.24}>
                    <p
                      className={`font-display italic text-base sm:text-lg md:text-xl mb-5 sm:mb-7 ${
                        isEven ? "text-sage2" : "text-sage"
                      }`}
                    >
                      {cuisine.tagline}
                    </p>
                  </RevealOnScroll>

                  {/* Decorative line */}
                  <RevealOnScroll delay={0.28}>
                    <div
                      className="w-10 h-px mb-5 sm:mb-7"
                      style={{ background: cuisine.color }}
                    />
                  </RevealOnScroll>

                  {/* Description */}
                  <RevealOnScroll delay={0.32}>
                    <p
                      className={`font-body text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-md ${
                        isEven ? "text-forest/60" : "text-cream/50"
                      }`}
                    >
                      {cuisine.description}
                    </p>
                  </RevealOnScroll>

                  {/* Dishes */}
                  <div className="space-y-3 sm:space-y-4">
                    {cuisine.dishes.map((dish, i) => (
                      <RevealOnScroll key={dish} delay={0.4 + i * 0.08}>
                        <div
                          className={`flex items-center gap-4 font-body text-sm sm:text-base ${
                            isEven ? "text-forest/55" : "text-cream/45"
                          }`}
                        >
                          <span
                            className="w-8 h-px flex-shrink-0"
                            style={{ background: cuisine.color }}
                          />
                          {dish}
                        </div>
                      </RevealOnScroll>
                    ))}
                  </div>
                </div>

                {/* Image side — on odd sections, show image first on desktop */}
                <RevealOnScroll
                  direction={isEven ? "right" : "left"}
                  delay={0.2}
                  className={!isEven ? "lg:order-first" : ""}
                >
                  <motion.div
                    className="relative aspect-[4/3] sm:aspect-[3/4] lg:aspect-[4/5] rounded-sm overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <Image
                      src={cuisine.image}
                      alt={`${cuisine.name} — ${cuisine.tagline}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to top, ${
                          isEven ? "rgba(30,45,18,0.5)" : "rgba(30,45,18,0.6)"
                        }, transparent 50%)`,
                      }}
                    />
                    <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                      <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-cream/60">
                        {cuisine.number} — {cuisine.name}
                      </span>
                    </div>
                  </motion.div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
