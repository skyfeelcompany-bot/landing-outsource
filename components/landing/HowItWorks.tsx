"use client";

import { motion } from "framer-motion";
import { Phone, FolderSearch, Settings, CheckCircle2 } from "lucide-react";

const STEPS = [
  { num: "01", icon: Phone, title: "Бесплатная Консультация", desc: "Свяжитесь с нами через форму или по телефону. Опишите ситуацию, и мы подберем услугу за 24 часа." },
  { num: "02", icon: FolderSearch, title: "Анализ Дела", desc: "Специалист изучает ваши документы, оценивает правовые или финансовые риски и готовит четкий план." },
  { num: "03", icon: Settings, title: "Начало Работы", desc: "Мы берем все на себя: составление документов, подачу, представительство. Вы всегда в курсе событий." },
  { num: "04", icon: CheckCircle2, title: "Результат Достигнут", desc: "Дело решено, спор улажен, учет в порядке. Мы обеспечиваем соблюдение норм и защищаем вас в будущем." },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-brand-surface border-y border-brand-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-gold mb-3 block">
            Как мы работаем
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-brand-text">
            Четыре шага от проблемы к решению.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated Dashed Connecting Line (Desktop) */}
          <div className="absolute top-[4.5rem] left-0 w-full h-[2px] hidden md:block overflow-hidden">
            {/* Background dash */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F2438_50%,transparent_50%)] bg-[length:12px_2px]" />
            {/* Animated gold overlay dash */}
            <motion.div 
              initial={{ right: "100%" }}
              whileInView={{ right: "0%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              className="absolute top-0 bottom-0 left-0 bg-[linear-gradient(to_right,#C9A84C_50%,transparent_50%)] bg-[length:12px_2px]"
            />
          </div>

          {/* Animated Connecting Line (Mobile) */}
          <div className="absolute top-0 bottom-0 left-8 w-[2px] block md:hidden overflow-hidden">
             <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#1F2438_50%,transparent_50%)] bg-[length:2px_12px]" />
             <motion.div 
              initial={{ bottom: "100%" }}
              whileInView={{ bottom: "0%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              className="absolute top-0 left-0 right-0 bg-[linear-gradient(to_bottom,#C9A84C_50%,transparent_50%)] bg-[length:2px_12px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-brand-elevated rounded-2xl p-6 border border-brand-border md:mt-0 pl-16 md:pl-6 group"
              >
                {/* Thin top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gold rounded-t-2xl opacity-50 group-hover:opacity-100 transition-opacity" />

                {/* Mobile Icon Box (positioned on the line) */}
                <div className="absolute left-[1.15rem] top-8 -translate-x-1/2 w-10 h-10 bg-[#0E1120] border-2 border-brand-gold rounded-full flex md:hidden items-center justify-center text-brand-gold z-10">
                  <step.icon className="w-5 h-5" />
                </div>

                {/* Desktop Icon Box */}
                <div className="w-14 h-14 bg-[#0E1120] border-2 border-brand-gold rounded-full hidden md:flex items-center justify-center text-brand-gold mb-6 mx-auto relative z-10 shadow-[0_0_15px_rgba(201,168,76,0.15)] group-hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-shadow">
                  <step.icon className="w-6 h-6" />
                </div>

                {/* Huge Watermark */}
                <div className="absolute top-4 right-4 font-display text-6xl text-brand-text font-bold opacity-5 pointer-events-none mix-blend-overlay select-none">
                  {step.num}
                </div>

                <div className="md:text-center mt-2 md:mt-0 relative z-10">
                  <h3 className="text-lg font-semibold text-brand-text mb-3">{step.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
