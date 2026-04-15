"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const FAQS = [
  { q: "Вы работаете с физическими лицами или только с компаниями?", a: "Мы оказываем полную юридическую поддержку как частным лицам (особенно в гражданских спорах и судебных тяжбах), так и бизнесу любого масштаба, специализируясь на МФО и коллекторских агентствах." },
  { q: "Что такое микрофинансовая организация (МФО) и почему ей нужна особая юридическая поддержка?", a: "МФО работают в жестких нормативных рамках со специфическими требованиями к документации и частыми проверками. Наша команда имеет глубокий опыт в комплайенсе МФО, разрешении споров и защите при аудитах." },
  { q: "Можете ли вы взять на себя как юридическую, так и бухгалтерскую стороны моего бизнеса?", a: "Да — это наше главное преимущество. Одна команда закрывает ваши правовые риски и финансовые операции, гарантируя согласованность и отсутствие слепых зон." },
  { q: "Как работает юридическая поддержка по взысканию долгов?", a: "Мы берем работу на себя начиная с первого письма-требования. Готовим все процессуальные документы, представляем вас в суде при необходимости и поддерживаем исполнение решений, включая оспаривание действий судебных исполнителей." },
  { q: "Что означает услуга «Восстановление учета»?", a: "Если ваша бухгалтерия велась с ошибками или не велась длительное время, мы восстанавливаем и исправляем все записи, приводя вас в полное соответствие с требованиями налоговых органов." },
  { q: "Вы работаете с облачной 1С?", a: "Да. Мы вводим и ведем все данные в облачной бухгалтерской программе 1С в рамках нашего пакета бухгалтерских услуг." },
  { q: "Как проходит первая консультация?", a: "Вы заполняете форму связи или звоните нам напрямую. Специалист свяжется с вами в течение 24 часов, рассмотрит вашу ситуацию и объяснит следующие шаги — бесплатно и без обязательств." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 bg-brand-bg">
      <div className="max-w-[700px] mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-brand-text">
            Ответы на ваши вопросы.
          </h2>
        </motion.div>

        <div className="space-y-2">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={idx}
                className="border-b border-brand-border overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className={`text-lg font-semibold transition-colors duration-200 pr-6 ${isOpen ? "text-brand-gold" : "text-brand-text group-hover:text-brand-gold"}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${isOpen ? "bg-brand-gold text-brand-bg" : "bg-brand-elevated text-brand-muted group-hover:bg-brand-surface"}`}>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pb-6 pr-12 text-brand-muted leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
