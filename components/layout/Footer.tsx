"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RESTAURANT, HOURS } from "@/lib/constants";

export default function Footer() {
  const [showLegal, setShowLegal] = useState(false);

  return (
    <>
      <footer className="bg-deep text-cream/70 py-12 sm:py-16 safe-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-10 sm:mb-12">
            {/* Logo + tagline */}
            <div className="flex flex-col items-start gap-3 sm:gap-4">
              <div className="relative w-28 h-10 sm:w-32 sm:h-12">
                <Image
                  src="/assets/logo/medley-logo.png"
                  alt="MÉDLËY"
                  fill
                  sizes="128px"
                  className="object-contain"
                  style={{ filter: "invert(1) brightness(1)", mixBlendMode: "screen" }}
                />
              </div>
              <p className="font-display italic text-cream/50 text-base sm:text-lg">
                4 cuisines, 1 expérience
              </p>
            </div>

            {/* Horaires */}
            <div>
              <h4 className="font-body text-xs sm:text-sm tracking-widest uppercase text-gold2 mb-3 sm:mb-4">
                Horaires
              </h4>
              <p className="font-body text-xs sm:text-sm leading-relaxed">
                {HOURS.days}<br />
                Coffee Shop : {HOURS.coffeeShop}<br />
                Restaurant : {HOURS.restaurant}<br />
                <span className="text-cream/40">{HOURS.closed}</span>
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-body text-xs sm:text-sm tracking-widest uppercase text-gold2 mb-3 sm:mb-4">
                Contact
              </h4>
              <div className="font-body text-xs sm:text-sm leading-relaxed space-y-1">
                <p>{RESTAURANT.address.full}</p>
                <a href={`tel:${RESTAURANT.phoneIntl}`} className="hover:text-gold2 transition-colors block">
                  {RESTAURANT.phone}
                </a>
                <a href={`mailto:${RESTAURANT.email}`} className="hover:text-gold2 transition-colors block break-all">
                  {RESTAURANT.email}
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-cream/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="font-mono text-[10px] sm:text-xs text-cream/30 text-center sm:text-left">
              © {new Date().getFullYear()} {RESTAURANT.fullName} — SIRET {RESTAURANT.siret}
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href={RESTAURANT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] sm:text-xs text-cream/40 hover:text-gold2 transition-colors"
              >
                Instagram
              </a>
              <button
                onClick={() => setShowLegal(true)}
                className="font-mono text-[10px] sm:text-xs text-cream/40 hover:text-gold2 transition-colors"
              >
                Mentions légales
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Mentions légales modal */}
      <AnimatePresence>
        {showLegal && (
          <motion.div
            className="fixed inset-0 z-[200] bg-ink/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLegal(false)}
          >
            <motion.div
              className="bg-cream text-forest w-full sm:max-w-2xl max-h-[85vh] sm:max-h-[80vh] overflow-y-auto rounded-t-lg sm:rounded-sm p-6 sm:p-8 md:p-12 safe-bottom"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Mentions légales"
            >
              <div className="flex justify-between items-start mb-6 sm:mb-8">
                <h2 className="font-display text-2xl sm:text-3xl italic text-forest">Mentions légales</h2>
                <button
                  onClick={() => setShowLegal(false)}
                  className="text-forest/50 hover:text-forest text-2xl leading-none p-1 -mr-1"
                  aria-label="Fermer"
                >
                  ×
                </button>
              </div>
              <div className="font-body text-xs sm:text-sm leading-relaxed space-y-3 sm:space-y-4 text-forest/80">
                <p><strong>Éditeur :</strong> {RESTAURANT.fullName}</p>
                <p><strong>SIRET :</strong> {RESTAURANT.siret}</p>
                <p><strong>Adresse :</strong> {RESTAURANT.address.full}</p>
                <p><strong>Téléphone :</strong> {RESTAURANT.phone}</p>
                <p><strong>Email :</strong> {RESTAURANT.email}</p>
                <p><strong>Directeur de la publication :</strong> Mohamed Si</p>
                <p>
                  Ce site est hébergé par Netlify, Inc. — 44 Montgomery Street, Suite 300, San Francisco, California 94104, USA.
                </p>
                <p>
                  Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée, vous disposez d&apos;un droit d&apos;accès, de modification et de suppression des données vous concernant. Pour exercer ce droit, contactez-nous à l&apos;adresse email ci-dessus.
                </p>
                <p>
                  L&apos;ensemble du contenu de ce site (textes, images, vidéos) est protégé par le droit d&apos;auteur. Toute reproduction sans autorisation préalable est interdite.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
