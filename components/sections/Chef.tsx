"use client";

import Image from "next/image";
import { CHEF } from "@/lib/constants";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Chef() {
  return (
    <section id="chef" className="bg-deep py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Photo */}
          <RevealOnScroll direction="left">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <Image
                src="/assets/photos/chef.jpg"
                alt={`${CHEF.name}, ${CHEF.title}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/60 to-transparent" />
            </div>
          </RevealOnScroll>

          {/* Text */}
          <div>
            <RevealOnScroll>
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-cream/40 block mb-3">
                Le Chef
              </span>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2 className="font-display italic text-4xl md:text-6xl font-light text-cream mb-2">
                {CHEF.name}
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="font-display italic text-xl text-gold2 mb-8">
                {CHEF.title}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <p className="font-body text-base leading-relaxed text-cream/60 mb-12 max-w-md">
                Révélé par Top Chef France, Mohamed Si a perfectionné son art à travers
                les compétitions culinaires les plus prestigieuses. Chez MÉDLËY, il
                réunit ses influences du monde entier en une seule adresse.
              </p>
            </RevealOnScroll>

            {/* Timeline */}
            <div className="relative pl-8 border-l border-cream/10">
              {CHEF.achievements.map((item, i) => (
                <RevealOnScroll key={item.label} delay={0.4 + i * 0.1}>
                  <div className="relative mb-6 last:mb-0">
                    {/* Dot */}
                    <div className="absolute -left-[calc(2rem+4.5px)] top-1.5 w-2 h-2 rounded-full bg-gold2" />
                    {item.year && (
                      <span className="font-mono text-xs text-gold2/70 block mb-1">
                        {item.year}
                      </span>
                    )}
                    <p className="font-body text-sm text-cream/70">
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
