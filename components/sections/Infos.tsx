"use client";

import { RESTAURANT, HOURS } from "@/lib/constants";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Infos() {
  return (
    <section id="infos" className="bg-cream2 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-olive/60 block mb-3">
            Informations
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="font-display italic text-4xl md:text-6xl font-light text-forest mb-16">
            Nous trouver
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Horaires */}
          <RevealOnScroll delay={0.2}>
            <div>
              <h3 className="font-body text-sm tracking-widest uppercase text-olive mb-6">
                Horaires
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-sage/20 pb-3">
                  <span className="font-body text-sm text-forest/70">{HOURS.days}</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-sage/20 pb-3">
                  <span className="font-body text-sm text-forest/50">Coffee Shop</span>
                  <span className="font-mono text-sm text-forest">{HOURS.coffeeShop}</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-sage/20 pb-3">
                  <span className="font-body text-sm text-forest/50">Restaurant</span>
                  <span className="font-mono text-sm text-forest">{HOURS.restaurant}</span>
                </div>
                <p className="font-body text-sm text-forest/40 italic">{HOURS.closed}</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Contact */}
          <RevealOnScroll delay={0.3}>
            <div>
              <h3 className="font-body text-sm tracking-widest uppercase text-olive mb-6">
                Contact
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-body text-sm text-forest/70 leading-relaxed">
                    {RESTAURANT.address.street}<br />
                    {RESTAURANT.address.postalCode} {RESTAURANT.address.city}
                  </p>
                </div>
                <div>
                  <a
                    href={`tel:${RESTAURANT.phoneIntl}`}
                    className="font-mono text-sm text-olive hover:text-forest transition-colors block"
                  >
                    {RESTAURANT.phone}
                  </a>
                </div>
                <div>
                  <a
                    href={`mailto:${RESTAURANT.email}`}
                    className="font-body text-sm text-olive hover:text-forest transition-colors block"
                  >
                    {RESTAURANT.email}
                  </a>
                </div>
                <div>
                  <a
                    href={RESTAURANT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-olive hover:text-forest transition-colors"
                  >
                    {RESTAURANT.instagram}
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Map placeholder */}
          <RevealOnScroll delay={0.4}>
            <div>
              <h3 className="font-body text-sm tracking-widest uppercase text-olive mb-6">
                Accès
              </h3>
              <div className="relative aspect-square bg-sage/10 rounded-sm overflow-hidden">
                {/* Static map placeholder — replace with real embed if needed */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <svg className="w-10 h-10 text-olive/40 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="font-body text-sm text-forest/60 leading-relaxed">
                    {RESTAURANT.address.street}<br />
                    {RESTAURANT.address.postalCode} {RESTAURANT.address.city}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(RESTAURANT.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 font-mono text-xs tracking-wider uppercase text-olive hover:text-forest transition-colors"
                  >
                    Ouvrir dans Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
