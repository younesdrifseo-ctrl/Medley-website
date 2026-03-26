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
            {/* Background image */}
            <div className={`absolute inset-0 ${isEven ? "opacity-[0.06]" : "opacity-[0.15]"}`}>
              <Image
                src={cuisine.image}
                alt={cuisine.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${
                !isEven ? "md:grid-flow-dense" : ""
              }`}>
                {/* Text side */}
                <div className={!isEven ? "md:col-start-2" : ""}>
                  {/* Icon */}
                  <RevealOnScroll>
                    <div className="relative w-16 h-16 md:w-20 md:h-20 mb-6">
                      <Image
                        src={cuisine.icon}
                        alt={`Icône ${cuisine.name}`}
                        fill
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
                      className={`font-mono text-sm tracking-[0.3em] ${
                        isEven ? "text-olive/60" : "text-cream/40"
                      }`}
                    >
                      {cuisine.number}
                    </span>
                  </RevealOnScroll>

                  {/* Name */}
                  <RevealOnScroll delay={0.16}>
                    <h2
                      className={`font-display italic text-5xl md:text-7xl font-light mt-2 mb-4 ${
                        isEven ? "text-forest" : "text-cream"
                      }`}
                    >
                      {cuisine.name}
                    </h2>
                  </RevealOnScroll>

                  {/* Tagline */}
                  <RevealOnScroll delay={0.24}>
                    <p
                      className={`font-display italic text-xl mb-6 ${
                        isEven ? "text-sage2" : "text-sage"
                      }`}
                    >
                      {cuisine.tagline}
                    </p>
                  </RevealOnScroll>

                  {/* Description */}
                  <RevealOnScroll delay={0.32}>
                    <p
                      className={`font-body text-base leading-relaxed mb-8 max-w-md ${
                        isEven ? "text-forest/70" : "text-cream/60"
                      }`}
                    >
                      {cuisine.description}
                    </p>
                  </RevealOnScroll>

                  {/* Dishes */}
                  <div className="space-y-2">
                    {cuisine.dishes.map((dish, i) => (
                      <RevealOnScroll key={dish} delay={0.4 + i * 0.08}>
                        <div
                          className={`flex items-center gap-3 font-body text-sm ${
                            isEven ? "text-forest/60" : "text-cream/50"
                          }`}
                        >
                          <span
                            className="w-6 h-px"
                            style={{ background: cuisine.color }}
                          />
                          {dish}
                        </div>
                      </RevealOnScroll>
                    ))}
                  </div>
                </div>

                {/* Image side */}
                <RevealOnScroll
                  direction={isEven ? "right" : "left"}
                  delay={0.2}
                  className={!isEven ? "md:col-start-1 md:row-start-1" : ""}
                >
                  <motion.div
                    className="relative aspect-[4/5] rounded-sm overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <Image
                      src={cuisine.image}
                      alt={cuisine.name}
                      fill
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to top, ${
                          isEven ? "rgba(30,45,18,0.3)" : "rgba(30,45,18,0.5)"
                        }, transparent)`,
                      }}
                    />
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
