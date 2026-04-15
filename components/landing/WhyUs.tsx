"use client";

import { motion } from "framer-motion";
import { Target, RefreshCw, Layers, Zap } from "lucide-react";

const REASONS = [
  { 
    icon: Target, 
    title: "Специализация на МФО и Коллекторах", 
    desc: "Мы глубоко понимаем регуляторную среду микрофинансовых организаций и коллекторских агентств — их юридические риски и требования к документации." 
  },
  { 
    icon: RefreshCw, 
    title: "Полное покрытие", 
    desc: "Одна команда решает ваши юридические И бухгалтерские задачи. Никаких разрывов в коммуникации или дублирования работы — всё в единой стратегии." 
  },
  { 
    icon: Layers, 
    title: "Мы строим системы, а не «пластыри»", 
    desc: "Наша цель — не разовая услуга. Мы выстраиваем надежные правовые и финансовые архитектуры, которые защищают ваш бизнес и готовят его к любым проверкам." 
  },
  { 
    icon: Zap, 
    title: "От жалобы до зала суда", 
    desc: "Мы сопровождаем споры от первого письма до окончательного решения суда — с полным документальным оформлением, представительством и исполнением." 
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-24 bg-brand-surface relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-gold mb-3 block">
            Почему клиенты выбирают нас
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-brand-text">
            Не просто услуга — а система.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REASONS.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-brand-elevated rounded-2xl p-8 border border-brand-border overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-gold opacity-50 transition-all duration-300 group-hover:h-[3px] group-hover:opacity-100 group-hover:shadow-[0_0_15px_rgba(201,168,76,0.8)]" />
              
              {/* Number Watermark */}
              <div className="absolute top-4 right-6 font-display font-bold text-8xl text-brand-text opacity-5 select-none pointer-events-none transition-transform duration-500 group-hover:scale-110">
                0{idx + 1}
              </div>

              <div className="w-12 h-12 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-lg flex items-center justify-center text-brand-gold mb-6 relative z-10">
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-brand-text mb-4 relative z-10">{reason.title}</h3>
              <p className="text-brand-muted leading-relaxed relative z-10">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
