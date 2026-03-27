"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RESTAURANT, HOURS } from "@/lib/constants";

export default function Footer() {
  const [showLegal, setShowLegal] = useState(false);

  return (
    <>
      {/* Editorial footer with background photo */}
      <footer className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/photos/salle.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-ink/92" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 md:py-32 safe-bottom">
          {/* Top section - Logo + tagline */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="relative w-36 h-14 sm:w-44 sm:h-16 mx-auto mb-6">
              <Image
                src="/assets/logo/medley-logo.png"
                alt="MÉDLËY"
                fill
                sizes="176px"
                className="object-contain"
                style={{ filter: "invert(1) brightness(1)", mixBlendMode: "screen" }}
              />
            </div>
            <p className="font-display italic text-base sm:text-lg text-cream/30">
              5 cuisines, 1 expérience
            </p>
            <div className="w-10 h-px bg-cream/8 mx-auto mt-6" />
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 lg:gap-16 mb-16 sm:mb-20">
            {/* Horaires */}
            <div className="text-center sm:text-left">
              <h4 className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold2/50 mb-5">
                Horaires
              </h4>
              <div className="font-body text-xs sm:text-sm leading-loose text-cream/35">
                <p>{HOURS.days}</p>
                <p>Coffee Shop : {HOURS.coffeeShop}</p>
                <p>Restaurant : {HOURS.restaurant}</p>
                <p className="font-display italic text-cream/20 mt-1">{HOURS.closed}</p>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center sm:text-left">
              <h4 className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold2/50 mb-5">
                Contact
              </h4>
              <div className="font-body text-xs sm:text-sm leading-loose text-cream/35 space-y-1">
                <p>{RESTAURANT.address.full}</p>
                <a href={`tel:${RESTAURANT.phoneIntl}`} className="block hover:text-gold2/60 transition-colors duration-500">
                  {RESTAURANT.phone}
                </a>
                <a href={`mailto:${RESTAURANT.email}`} className="block hover:text-gold2/60 transition-colors duration-500 break-all">
                  {RESTAURANT.email}
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="text-center sm:text-left">
              <h4 className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold2/50 mb-5">
                Suivez-nous
              </h4>
              <a
                href={RESTAURANT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-body text-xs sm:text-sm text-cream/35 hover:text-gold2/60 transition-colors duration-500"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                {RESTAURANT.instagram}
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-cream/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-mono text-[9px] text-cream/15 text-center sm:text-left">
              © {new Date().getFullYear()} {RESTAURANT.fullName} — SIRET {RESTAURANT.siret}
            </p>
            <div className="flex items-center gap-6">
              <a
                href={RESTAURANT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[9px] text-cream/15 hover:text-cream/30 transition-colors duration-500"
              >
                Instagram
              </a>
              <button
                onClick={() => setShowLegal(true)}
                className="font-mono text-[9px] text-cream/15 hover:text-cream/30 transition-colors duration-500"
              >
                Mentions légales
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal modal */}
      <AnimatePresence>
        {showLegal && (
          <motion.div
            className="fixed inset-0 z-[200] bg-ink/85 backdrop-blur-sm flex items-end sm:items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLegal(false)}
          >
            <motion.div
              className="bg-cream text-forest w-full sm:max-w-2xl max-h-[85vh] overflow-y-auto rounded-t-lg sm:rounded-none p-8 sm:p-10 md:p-14 safe-bottom"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Mentions légales"
            >
              <div className="flex justify-between items-start mb-8">
                <h2 className="font-display italic text-2xl sm:text-3xl text-forest">Mentions légales</h2>
                <button
                  onClick={() => setShowLegal(false)}
                  className="text-forest/30 hover:text-forest text-xl p-1"
                  aria-label="Fermer"
                >
                  ✕
                </button>
              </div>
              <div className="font-body text-xs sm:text-sm leading-relaxed space-y-4 text-forest/60">
                <p><strong className="text-forest/80">Éditeur :</strong> {RESTAURANT.fullName}</p>
                <p><strong className="text-forest/80">SIRET :</strong> {RESTAURANT.siret}</p>
                <p><strong className="text-forest/80">Adresse :</strong> {RESTAURANT.address.full}</p>
                <p><strong className="text-forest/80">Téléphone :</strong> {RESTAURANT.phone}</p>
                <p><strong className="text-forest/80">Email :</strong> {RESTAURANT.email}</p>
                <p><strong className="text-forest/80">Directeur de la publication :</strong> Mohamed Si</p>
                <p>Ce site est hébergé par Netlify, Inc. — 44 Montgomery Street, Suite 300, San Francisco, California 94104, USA.</p>
                <p>Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée, vous disposez d&apos;un droit d&apos;accès, de modification et de suppression des données vous concernant.</p>
                <p>L&apos;ensemble du contenu de ce site (textes, images, vidéos) est protégé par le droit d&apos;auteur. Toute reproduction sans autorisation préalable est interdite.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
