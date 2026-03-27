"use client";

import { RESTAURANT, HOURS } from "@/lib/constants";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Infos() {
  return (
    <section id="infos" className="bg-cream2 py-20 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-olive/60 block mb-2 sm:mb-3">
            Informations
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-forest mb-12 sm:mb-16">
            Nous trouver
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
          {/* Horaires */}
          <RevealOnScroll delay={0.2}>
            <div>
              <h3 className="font-body text-xs sm:text-sm tracking-widest uppercase text-olive mb-4 sm:mb-6">
                Horaires
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-baseline border-b border-sage/20 pb-3">
                  <span className="font-body text-sm text-forest/70">{HOURS.days}</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-sage/20 pb-3">
                  <span className="font-body text-xs sm:text-sm text-forest/50">Coffee Shop</span>
                  <span className="font-mono text-xs sm:text-sm text-forest">{HOURS.coffeeShop}</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-sage/20 pb-3">
                  <span className="font-body text-xs sm:text-sm text-forest/50">Restaurant</span>
                  <span className="font-mono text-xs sm:text-sm text-forest">{HOURS.restaurant}</span>
                </div>
                <p className="font-body text-xs sm:text-sm text-forest/40 italic">{HOURS.closed}</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Contact */}
          <RevealOnScroll delay={0.3}>
            <div>
              <h3 className="font-body text-xs sm:text-sm tracking-widest uppercase text-olive mb-4 sm:mb-6">
                Contact
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <p className="font-body text-sm text-forest/70 leading-relaxed">
                  {RESTAURANT.address.street}<br />
                  {RESTAURANT.address.postalCode} {RESTAURANT.address.city}
                </p>
                <a
                  href={`tel:${RESTAURANT.phoneIntl}`}
                  className="font-mono text-sm text-olive hover:text-forest transition-colors block"
                >
                  {RESTAURANT.phone}
                </a>
                <a
                  href={`mailto:${RESTAURANT.email}`}
                  className="font-body text-sm text-olive hover:text-forest transition-colors block break-all"
                >
                  {RESTAURANT.email}
                </a>
                <a
                  href={RESTAURANT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-olive hover:text-forest transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  {RESTAURANT.instagram}
                </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Map */}
          <RevealOnScroll delay={0.4}>
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-body text-xs sm:text-sm tracking-widest uppercase text-olive mb-4 sm:mb-6">
                Accès
              </h3>
              <div className="relative aspect-[4/3] sm:aspect-square bg-sage/10 rounded-sm overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-olive/40 mb-3 sm:mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="font-body text-xs sm:text-sm text-forest/60 leading-relaxed">
                    {RESTAURANT.address.street}<br />
                    {RESTAURANT.address.postalCode} {RESTAURANT.address.city}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(RESTAURANT.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 font-mono text-[10px] sm:text-xs tracking-wider uppercase text-olive hover:text-forest transition-colors"
                  >
                    Ouvrir dans Google Maps
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
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
