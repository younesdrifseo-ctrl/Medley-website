"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface FormData {
  name: string;
  date: string;
  time: string;
  guests: number;
  message?: string;
}

export default function Reservation() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
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

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 300);
  };

  const inputClasses =
    "w-full px-4 py-3.5 bg-transparent border-b border-cream/15 font-body text-sm text-cream placeholder:text-cream/20 focus:outline-none focus:border-gold2/50 transition-colors duration-500";

  return (
    <>
      {/* Trigger section - minimal CTA */}
      <section
        id="reservation"
        className="relative bg-deep py-24 sm:py-28 md:py-36 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-cream/20 block mb-4">
              Réservation
            </span>
            <h2 className="font-display italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream font-light mb-6">
              Votre table vous attend
            </h2>
            <div className="w-10 h-px bg-gold2/30 mx-auto mb-8" />
            <p className="font-body text-sm text-cream/35 max-w-md mx-auto mb-12 leading-relaxed">
              Réservez votre expérience MÉDLËY. Confirmation instantanée via WhatsApp.
            </p>
            <button
              onClick={() => setOpen(true)}
              className="px-14 py-4 border border-gold2/30 text-gold2/80 font-body text-[11px] tracking-[0.3em] uppercase hover:bg-gold2/10 hover:border-gold2/50 transition-all duration-700"
              data-cursor="Réserver"
            >
              Réserver une table
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-ink/90 backdrop-blur-md"
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal content */}
            <motion.div
              className="relative w-full max-w-lg mx-4 sm:mx-6 bg-deep border border-cream/5 p-8 sm:p-10 md:p-12 max-h-[90svh] overflow-y-auto"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-cream/20 hover:text-cream/50 transition-colors"
                aria-label="Fermer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-14 h-14 rounded-full border border-gold2/30 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-6 h-6 text-gold2/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display italic text-2xl text-cream mb-3">
                      Demande envoyée
                    </h3>
                    <p className="font-body text-xs text-cream/35 mb-8">
                      Redirection vers WhatsApp...
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); reset(); }}
                      className="font-mono text-[9px] tracking-[0.2em] uppercase text-cream/25 hover:text-cream/50 transition-colors"
                    >
                      Nouvelle réservation
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    noValidate
                  >
                    <h3 className="font-display italic text-2xl sm:text-3xl text-cream font-light mb-2">
                      Réserver
                    </h3>
                    <p className="font-body text-xs text-cream/25 mb-10">
                      Confirmation via WhatsApp
                    </p>

                    <div className="space-y-6">
                      <div>
                        <input
                          {...register("name", { required: "Requis" })}
                          className={inputClasses}
                          placeholder="Votre nom"
                          autoComplete="name"
                        />
                        {errors.name && (
                          <p className="font-mono text-[9px] text-red-400/60 mt-1.5">{errors.name.message}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="font-mono text-[8px] tracking-[0.2em] uppercase text-cream/20 block mb-2">
                            Couverts
                          </label>
                          <input
                            {...register("guests", {
                              required: "Requis",
                              min: { value: 1, message: "Min 1" },
                              max: { value: 20, message: "Max 20" },
                            })}
                            type="number"
                            min={1}
                            max={20}
                            className={inputClasses}
                          />
                        </div>
                        <div>
                          <label className="font-mono text-[8px] tracking-[0.2em] uppercase text-cream/20 block mb-2">
                            Date
                          </label>
                          <input
                            {...register("date", { required: "Requis" })}
                            type="date"
                            className={inputClasses}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-mono text-[8px] tracking-[0.2em] uppercase text-cream/20 block mb-2">
                          Heure
                        </label>
                        <select
                          {...register("time", { required: "Requis" })}
                          className={`${inputClasses} bg-deep`}
                        >
                          <option value="">Choisir un créneau</option>
                          {["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"].map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <textarea
                          {...register("message")}
                          rows={2}
                          className={`${inputClasses} resize-none`}
                          placeholder="Message (optionnel)"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 mt-4 border border-gold2/30 text-gold2/80 font-body text-[11px] tracking-[0.3em] uppercase hover:bg-gold2/10 transition-all duration-500"
                      >
                        Confirmer via WhatsApp
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
