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

  const inputClasses =
    "w-full px-5 py-3.5 bg-cream2/80 border border-sage/15 rounded-sm font-body text-sm sm:text-base text-forest placeholder:text-forest/25 focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive/20 transition-all duration-300";

  const errorClasses = "border-red-400/60";

  return (
    <section id="reservation" className="relative bg-cream py-24 sm:py-28 md:py-36 overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] hidden md:block">
        <Image
          src="/assets/photos/ambiance.jpg"
          alt=""
          fill
          sizes="50vw"
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 sm:px-8">
        <RevealOnScroll>
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-olive/50 block mb-3 text-center">
            Réservation
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-forest text-center mb-3 sm:mb-4">
            Réserver une table
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="w-10 h-px bg-olive/30 mx-auto mb-4 sm:mb-5" />
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="font-body text-sm sm:text-base text-forest/50 text-center mb-10 sm:mb-14 max-w-lg mx-auto leading-relaxed">
            Remplissez le formulaire ci-dessous. Votre réservation sera confirmée via WhatsApp.
          </p>
        </RevealOnScroll>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              className="text-center py-16 sm:py-20"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-olive/10 flex items-center justify-center mx-auto mb-6 sm:mb-7">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display italic text-2xl sm:text-3xl text-forest mb-3">
                Demande envoyée !
              </h3>
              <p className="font-body text-sm text-forest/50 mb-8">
                Vous allez être redirigé vers WhatsApp pour confirmer votre réservation.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase text-olive hover:text-forest transition-colors duration-300"
              >
                Nouvelle réservation
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 sm:space-y-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              noValidate
            >
              <RevealOnScroll delay={0.3}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="res-name" className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-forest/40 block mb-2 sm:mb-2.5">
                      Nom complet *
                    </label>
                    <input
                      id="res-name"
                      {...register("name", { required: "Nom requis" })}
                      className={`${inputClasses} ${errors.name ? errorClasses : ""}`}
                      placeholder="Votre nom"
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p className="font-mono text-[10px] text-red-500/80 mt-1.5" role="alert">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Guests */}
                  <div>
                    <label htmlFor="res-guests" className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-forest/40 block mb-2 sm:mb-2.5">
                      Couverts *
                    </label>
                    <input
                      id="res-guests"
                      {...register("guests", {
                        required: "Nombre requis",
                        min: { value: 1, message: "Min 1 couvert" },
                        max: { value: 20, message: "Max 20 couverts" },
                      })}
                      type="number"
                      min={1}
                      max={20}
                      className={`${inputClasses} ${errors.guests ? errorClasses : ""}`}
                      placeholder="2"
                    />
                    {errors.guests && (
                      <p className="font-mono text-[10px] text-red-500/80 mt-1.5" role="alert">{errors.guests.message}</p>
                    )}
                  </div>

                  {/* Date */}
                  <div>
                    <label htmlFor="res-date" className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-forest/40 block mb-2 sm:mb-2.5">
                      Date *
                    </label>
                    <input
                      id="res-date"
                      {...register("date", { required: "Date requise" })}
                      type="date"
                      className={`${inputClasses} ${errors.date ? errorClasses : ""}`}
                    />
                    {errors.date && (
                      <p className="font-mono text-[10px] text-red-500/80 mt-1.5" role="alert">{errors.date.message}</p>
                    )}
                  </div>

                  {/* Time */}
                  <div>
                    <label htmlFor="res-time" className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-forest/40 block mb-2 sm:mb-2.5">
                      Heure *
                    </label>
                    <select
                      id="res-time"
                      {...register("time", { required: "Heure requise" })}
                      className={`${inputClasses} ${errors.time ? errorClasses : ""}`}
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
                      <p className="font-mono text-[10px] text-red-500/80 mt-1.5" role="alert">{errors.time.message}</p>
                    )}
                  </div>
                </div>
              </RevealOnScroll>

              {/* Message */}
              <RevealOnScroll delay={0.4}>
                <div>
                  <label htmlFor="res-message" className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-forest/40 block mb-2 sm:mb-2.5">
                    Message (optionnel)
                  </label>
                  <textarea
                    id="res-message"
                    {...register("message")}
                    rows={3}
                    className={`${inputClasses} resize-none`}
                    placeholder="Allergies, occasion spéciale..."
                  />
                </div>
              </RevealOnScroll>

              {/* Submit */}
              <RevealOnScroll delay={0.5}>
                <motion.button
                  type="submit"
                  className="w-full py-4 sm:py-4.5 bg-olive text-cream font-body text-sm tracking-[0.2em] uppercase rounded-sm hover:bg-forest transition-all duration-500 active:scale-[0.98] shadow-lg shadow-olive/15"
                  whileHover={{ y: -2, boxShadow: "0 12px 32px rgba(90,107,58,0.2)" }}
                  whileTap={{ scale: 0.98 }}
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
