"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Cuisines from "@/components/sections/Cuisines";
import Gallery from "@/components/sections/Gallery";
import Chef from "@/components/sections/Chef";
import Reservation from "@/components/sections/Reservation";
import Infos from "@/components/sections/Infos";
import Cursor from "@/components/ui/Cursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { RESTAURANT } from "@/lib/constants";

function FloatingButtons() {
  const [showReserve, setShowReserve] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setShowReserve(scrollPercent > 0.7);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile call button */}
      <a
        href={`tel:${RESTAURANT.phoneIntl}`}
        className="md:hidden fixed bottom-6 left-6 z-50 w-14 h-14 bg-olive text-cream rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
        aria-label="Appeler MÉDLËY"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </a>

      {/* Floating reserve button */}
      <AnimatePresence>
        {showReserve && (
          <motion.a
            href="#reservation"
            className="fixed bottom-6 right-6 z-50 px-6 py-3 bg-gold2 text-deep font-body text-sm tracking-widest uppercase rounded-sm shadow-lg hover:bg-gold transition-colors"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Réserver
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Cuisines />
        <Gallery />
        <Chef />
        <Reservation />
        <Infos />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
