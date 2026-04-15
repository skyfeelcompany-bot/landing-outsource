"use client";

import { useState } from "react";
import { submitLead } from "@/actions/submitLead";
import { Phone, Mail, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    try {
      await submitLead(data);
      setStatus("success");
    } catch (err: unknown) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-surface border-y border-brand-border">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-semibold text-brand-text mb-6">
            Готовы обсудить <br />вашу ситуацию.
          </h2>
          <p className="text-lg text-brand-muted mb-12 max-w-md leading-relaxed">
            Первичная консультация бесплатна. Наша команда обычно отвечает
            в течение 24 часов. Вся информация строго конфиденциальна.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-brand-text">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-brand-muted">Phone</p>
                <a href="tel:+77777777777" className="font-semibold hover:text-brand-gold transition-colors">+7 (777) 777-77-77</a>
              </div>
            </div>
            <div className="flex items-center gap-4 text-brand-text">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-brand-muted">Email</p>
                <a href="mailto:contact@outsourcelegal.kz" className="font-semibold hover:text-brand-gold transition-colors">contact@outsourcelegal.kz</a>
              </div>
            </div>
            <div className="flex items-center gap-4 text-brand-text">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-brand-muted">Location</p>
                <span className="font-semibold border-b border-dashed border-brand-gold/40">Kazakhstan</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column (Form) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          {/* Decorative glow */}
          <div className="absolute inset-0 bg-brand-gold/5 blur-3xl transform scale-105 pointer-events-none" />
          
          <div className="relative bg-[#0E1120] rounded-2xl border border-brand-border p-8 shadow-2xl">
            {status === "success" ? (
              <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
              >
                <div className="w-20 h-20 rounded-full bg-brand-success/20 flex items-center justify-center text-brand-success mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display text-3xl font-semibold text-brand-text mb-4">Заявка отправлена</h3>
                <p className="text-brand-muted">Спасибо! Мы свяжемся с вами в течение 24 часов.</p>
                <button 
                  onClick={() => setStatus("idle")} 
                  className="mt-8 px-6 py-2 rounded border border-brand-border text-sm text-brand-muted hover:text-brand-text hover:border-brand-text transition-colors"
                >
                  Отправить новую заявку
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-2">Ваше Имя *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    aria-label="Ваше Имя"
                    className="w-full bg-brand-elevated border border-brand-border rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all placeholder:text-brand-muted/50"
                    placeholder="Иван Иванов"
                    disabled={status === "loading"}
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-text mb-2">Телефон *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      aria-label="Номер телефона"
                      className="w-full bg-brand-elevated border border-brand-border rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all placeholder:text-brand-muted/50"
                      placeholder="+7"
                      disabled={status === "loading"}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      aria-label="Адрес Email"
                      className="w-full bg-brand-elevated border border-brand-border rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all placeholder:text-brand-muted/50"
                      placeholder="ivan@example.com"
                      disabled={status === "loading"}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-brand-text mb-2">Интересующая услуга *</label>
                  <select
                    id="service"
                    name="service"
                    required
                    aria-label="Интересующая услуга"
                    className="w-full bg-brand-elevated border border-brand-border rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all appearance-none"
                    disabled={status === "loading"}
                  >
                    <option value="" disabled selected>Выберите вариант</option>
                    <option value="Юридические услуги">Юридические услуги</option>
                    <option value="Бухгалтерские услуги">Бухгалтерские услуги</option>
                    <option value="Открытие ТОО / ИП">Открытие ТОО / ИП</option>
                    <option value="Ликвидация">Ликвидация</option>
                    <option value="Документооборот">Документооборот</option>
                    <option value="Другое">Другое</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-2">Опишите вашу ситуацию</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    aria-label="Опишите вашу ситуацию"
                    className="w-full bg-brand-elevated border border-brand-border rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all placeholder:text-brand-muted/50 resize-y"
                    placeholder="Кратко опишите, с чем вам нужна помощь..."
                    disabled={status === "loading"}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 bg-brand-gold text-brand-bg font-semibold text-lg py-4 rounded-lg hover:bg-brand-gold-light transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Отправка...
                      </>
                    ) : (
                      "Оставить заявку →"
                    )}
                  </button>
                  {status === "error" && (
                    <p className="text-red-400 text-sm text-center mt-3 animate-pulse">{errorMsg}</p>
                  )}
                </div>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
