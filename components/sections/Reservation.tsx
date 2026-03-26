"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface FormData {
  name: string;
  date: string;
  time: string;
  guests: number;
  message?: string;
}

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { guests: 2 },
  });

  const onSubmit = (data: FormData) => {
    const url = buildWhatsAppUrl(data);
    setSubmitted(true);
    setTimeout(() => {
      window.open(url, "_blank");
    }, 600);
  };

  return (
    <section id="reservation" className="relative bg-cream py-24 md:py-32 overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]">
        <Image
          src="/assets/photos/ambiance.jpg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <RevealOnScroll>
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-olive/60 block mb-3 text-center">
            Réservation
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="font-display italic text-4xl md:text-6xl font-light text-forest text-center mb-4">
            Réserver une table
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="font-body text-base text-forest/60 text-center mb-12 max-w-lg mx-auto">
            Remplissez le formulaire ci-dessous. Votre réservation sera confirmée via WhatsApp.
          </p>
        </RevealOnScroll>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 rounded-full bg-olive/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display italic text-2xl text-forest mb-2">
                Demande envoyée !
              </h3>
              <p className="font-body text-sm text-forest/60">
                Vous allez être redirigé vers WhatsApp pour confirmer votre réservation.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <RevealOnScroll delay={0.3}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="font-mono text-xs tracking-wider uppercase text-forest/50 block mb-2">
                      Nom complet
                    </label>
                    <input
                      {...register("name")}
                      className="w-full px-4 py-3 bg-cream2 border border-sage/20 rounded-sm font-body text-forest placeholder:text-forest/30 focus:outline-none focus:border-olive transition-colors"
                      placeholder="Votre nom"
                    />
                    {errors.name && (
                      <p className="font-mono text-xs text-red-600 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="font-mono text-xs tracking-wider uppercase text-forest/50 block mb-2">
                      Couverts
                    </label>
                    <input
                      {...register("guests")}
                      type="number"
                      min={1}
                      max={20}
                      className="w-full px-4 py-3 bg-cream2 border border-sage/20 rounded-sm font-body text-forest placeholder:text-forest/30 focus:outline-none focus:border-olive transition-colors"
                      placeholder="2"
                    />
                    {errors.guests && (
                      <p className="font-mono text-xs text-red-600 mt-1">{errors.guests.message}</p>
                    )}
                  </div>

                  {/* Date */}
                  <div>
                    <label className="font-mono text-xs tracking-wider uppercase text-forest/50 block mb-2">
                      Date
                    </label>
                    <input
                      {...register("date")}
                      type="date"
                      className="w-full px-4 py-3 bg-cream2 border border-sage/20 rounded-sm font-body text-forest focus:outline-none focus:border-olive transition-colors"
                    />
                    {errors.date && (
                      <p className="font-mono text-xs text-red-600 mt-1">{errors.date.message}</p>
                    )}
                  </div>

                  {/* Time */}
                  <div>
                    <label className="font-mono text-xs tracking-wider uppercase text-forest/50 block mb-2">
                      Heure
                    </label>
                    <select
                      {...register("time")}
                      className="w-full px-4 py-3 bg-cream2 border border-sage/20 rounded-sm font-body text-forest focus:outline-none focus:border-olive transition-colors"
                    >
                      <option value="">Choisir</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                      <option value="21:30">21:30</option>
                      <option value="22:00">22:00</option>
                      <option value="22:30">22:30</option>
                      <option value="23:00">23:00</option>
                    </select>
                    {errors.time && (
                      <p className="font-mono text-xs text-red-600 mt-1">{errors.time.message}</p>
                    )}
                  </div>
                </div>
              </RevealOnScroll>

              {/* Message */}
              <RevealOnScroll delay={0.4}>
                <div>
                  <label className="font-mono text-xs tracking-wider uppercase text-forest/50 block mb-2">
                    Message (optionnel)
                  </label>
                  <textarea
                    {...register("message")}
                    rows={3}
                    className="w-full px-4 py-3 bg-cream2 border border-sage/20 rounded-sm font-body text-forest placeholder:text-forest/30 focus:outline-none focus:border-olive transition-colors resize-none"
                    placeholder="Allergies, occasion spéciale..."
                  />
                </div>
              </RevealOnScroll>

              {/* Submit */}
              <RevealOnScroll delay={0.5}>
                <motion.button
                  type="submit"
                  className="w-full py-4 bg-olive text-cream font-body text-sm tracking-widest uppercase rounded-sm hover:bg-forest transition-colors duration-300"
                  whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(90,107,58,0.25)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Envoyer via WhatsApp
                </motion.button>
              </RevealOnScroll>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
