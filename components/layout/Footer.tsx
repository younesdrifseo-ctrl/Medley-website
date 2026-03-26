"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RESTAURANT, HOURS } from "@/lib/constants";

export default function Footer() {
  const [showLegal, setShowLegal] = useState(false);

  return (
    <>
      <footer className="bg-deep text-cream/70 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo + tagline */}
            <div className="flex flex-col items-start gap-4">
              <div className="relative w-32 h-12">
                <Image
                  src="/assets/logo/medley-logo.png"
                  alt="MÉDLËY"
                  fill
                  className="object-contain"
                  style={{ filter: "invert(1) brightness(1)", mixBlendMode: "screen" }}
                />
              </div>
              <p className="font-display italic text-cream/50 text-lg">
                4 cuisines, 1 expérience
              </p>
            </div>

            {/* Horaires */}
            <div>
              <h4 className="font-body text-sm tracking-widest uppercase text-gold2 mb-4">
                Horaires
              </h4>
              <p className="font-body text-sm leading-relaxed">
                {HOURS.days}<br />
                Coffee Shop : {HOURS.coffeeShop}<br />
                Restaurant : {HOURS.restaurant}<br />
                <span className="text-cream/40">{HOURS.closed}</span>
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-body text-sm tracking-widest uppercase text-gold2 mb-4">
                Contact
              </h4>
              <p className="font-body text-sm leading-relaxed">
                {RESTAURANT.address.full}<br />
                <a href={`tel:${RESTAURANT.phoneIntl}`} className="hover:text-gold2 transition-colors">
                  {RESTAURANT.phone}
                </a><br />
                <a href={`mailto:${RESTAURANT.email}`} className="hover:text-gold2 transition-colors">
                  {RESTAURANT.email}
                </a>
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-cream/30">
              © {new Date().getFullYear()} {RESTAURANT.fullName} — SIRET {RESTAURANT.siret}
            </p>
            <div className="flex items-center gap-6">
              <a
                href={RESTAURANT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-cream/40 hover:text-gold2 transition-colors"
              >
                Instagram
              </a>
              <button
                onClick={() => setShowLegal(true)}
                className="font-mono text-xs text-cream/40 hover:text-gold2 transition-colors"
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
            className="fixed inset-0 z-[200] bg-ink/80 backdrop-blur-sm flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLegal(false)}
          >
            <motion.div
              className="bg-cream text-forest max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-sm p-8 md:p-12"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-8">
                <h2 className="font-display text-3xl italic text-forest">Mentions légales</h2>
                <button
                  onClick={() => setShowLegal(false)}
                  className="text-forest/50 hover:text-forest text-2xl leading-none"
                  aria-label="Fermer"
                >
                  ×
                </button>
              </div>
              <div className="font-body text-sm leading-relaxed space-y-4 text-forest/80">
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
                  Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de modification et de suppression des données vous concernant. Pour exercer ce droit, contactez-nous à l'adresse email ci-dessus.
                </p>
                <p>
                  L'ensemble du contenu de ce site (textes, images, vidéos) est protégé par le droit d'auteur. Toute reproduction sans autorisation préalable est interdite.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
