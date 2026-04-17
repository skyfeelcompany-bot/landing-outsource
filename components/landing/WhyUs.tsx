"use client";

import { motion } from "framer-motion";
import { Target, RefreshCw, Layers, Zap } from "lucide-react";
import Image from "next/image";

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
    <section id="about" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Top Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-brand-gold/20 shadow-[0_0_40px_rgba(201,168,76,0.15)] group">
              <Image 
                src="/images/about-us.png" 
                alt="Профессиональная команда VERNO-GROUP" 
                width={800} 
                height={500} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 to-transparent opacity-60" />
            </div>
            {/* Decorative frame elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-gold/30 rounded-tl-2xl -z-0" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-gold/30 rounded-br-2xl -z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-brand-gold mb-3 block">
              О Компании
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-brand-text mb-6 leading-tight">
              Мы не просто оказываем услуги — мы <span className="text-brand-gold font-italic">создаем системы</span> правовой защиты.
            </h2>
            <p className="text-lg text-brand-muted leading-relaxed mb-8">
              VERNO-GROUP объединяет глубокую юридическую экспертизу и точный бухгалтерский учет в единый механизм. 
              Мы специализируемся на сопровождении сложных финансовых институтов, таких как МФО и коллекторские агентства, 
              обеспечивая им полную безопасность перед лицом регуляторов и судов.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-brand-gold">5+</span>
                <span className="text-xs uppercase tracking-wider text-brand-muted">Лет экспертизы</span>
              </div>
              <div className="w-[1px] h-10 bg-brand-border" />
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-brand-gold">200+</span>
                <span className="text-xs uppercase tracking-wider text-brand-muted">Решенных дел</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reasons Grid Below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REASONS.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-brand-elevated/40 backdrop-blur-sm rounded-2xl p-8 border border-brand-border overflow-hidden hover:bg-brand-elevated/60 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-gold opacity-50 transition-all duration-300 group-hover:h-[3px] group-hover:opacity-100 group-hover:shadow-[0_0_15px_rgba(201,168,76,0.8)]" />
              
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
