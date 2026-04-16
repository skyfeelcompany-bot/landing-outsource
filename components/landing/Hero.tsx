"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, BarChart3, Lock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Video Decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source 
            src="/videos/hero-flow-man.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Full Section Overlays for contrast and professional look */}
        <div className="absolute inset-0 bg-brand-bg/40" />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg via-brand-bg/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg to-transparent lg:w-[60%]" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center relative z-10">
        
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-gold/40 bg-brand-gold/5 text-brand-gold text-xs font-semibold mb-6 uppercase tracking-wider relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-gold/10 blur-md pointer-events-none" />
            Юридический и Бухгалтерский Аутсорсинг
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 text-brand-text">
            Ваши юридические<br />
            и финансовые{" "}
            <span className="relative inline-block overflow-hidden pb-1">
              <span className="relative z-10">задачи — </span>
              <span className="relative z-10 text-brand-gold">решены.</span>
              <motion.div
                initial={{ left: "-150%" }}
                animate={{ left: "150%" }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3.5, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-1/3 bg-white/30 blur-lg skew-x-12 z-20 pointer-events-none"
              />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-brand-muted max-w-[520px] mb-10 leading-relaxed">
            Полный цикл юридического и бухгалтерского сопровождения для частных лиц, 
            бизнеса, микрофинансовых организаций и коллекторских агентств. 
            От досудебных вопросов до победы в зале суда — мы берем все на себя.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg bg-brand-gold text-brand-bg font-semibold text-lg hover:bg-brand-gold-light transition-colors text-center"
            >
              Получить консультацию →
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-lg border border-brand-gold text-brand-gold font-semibold text-lg hover:bg-brand-gold/10 transition-colors text-center"
            >
              Наши Услуги ↓
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-brand-text/80 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-gold" />
              <span>Лицензированные юристы</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-brand-gold" />
              <span>Сертифицированные бухгалтеры</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-brand-gold" />
              <span>Полная конфиденциальность</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 bg-[#0E1120]/60 backdrop-blur-md rounded-2xl border border-brand-gold/30 p-8 shadow-2xl overflow-hidden group h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent pointer-events-none" />
            <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-brand-gold" />
              Основная Компетенция
            </h3>
            
            <ul className="space-y-0">
              {[
                "Регистрация ТОО / ИП",
                "Бухгалтерский и налоговый учет",
                "Восстановление бухгалтерского учета",
                "Ликвидация ТОО / ИП",
                "Разработка внутренних документов",
              ].map((item, idx) => (
                <li
                  key={item}
                  className={`flex items-start gap-4 py-4 ${
                    idx !== 4 ? "border-b border-brand-border" : ""
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-brand-text/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
