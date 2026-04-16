"use client";

import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="relative py-40 overflow-hidden bg-brand-bg flex items-center justify-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/cta-bg-v2.jpg" 
          alt="CTA background" 
          className="w-full h-full object-cover opacity-60 grayscale-[10%]"
        />
        <div className="absolute inset-0 bg-brand-bg/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-brand-bg opacity-80" />
      </div>

      {/* Animated Gradient Decor */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 mix-blend-screen pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute w-[800px] h-[800px] bg-brand-gold/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Готовы защитить <br />то, что важно?
          </h2>
          <p className="text-xl md:text-2xl text-brand-text/80 mb-12 max-w-2xl mx-auto">
            Расскажите нам о вашей ситуации. Мы возьмем остальное на себя.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-white text-brand-bg px-10 py-5 rounded-lg text-lg font-bold hover:bg-brand-text transition-colors shadow-[0_0_30px_rgba(238,240,248,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            Получить Консультацию Сейчас →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
