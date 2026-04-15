"use client";

import { motion } from "framer-motion";
import { Building2, BookMarked, RefreshCw, Unplug, FileText } from "lucide-react";

const SERVICES = [
  { icon: Building2, title: "Открытие ТОО / ИП", desc: "Регистрация юридических лиц и индивидуальных предпринимателей под ключ" },
  { icon: BookMarked, title: "Бухгалтерский учет", desc: "Ведение и регулярное обслуживание бухгалтерского и налогового учета" },
  { icon: RefreshCw, title: "Восстановление учета", desc: "Восстановление бухгалтерской истории компаний за любой период" },
  { icon: Unplug, title: "Ликвидация", desc: "Полное юридическое закрытие ТОО или ИП со снятием с учета" },
  { icon: FileText, title: "Документооборот", desc: "Составление приказов, договоров, решений, доверенностей и иных актов" },
];

export default function ServicesStrip() {
  return (
    <section id="services" className="py-24 bg-brand-surface border-y border-brand-border">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-brand-muted mb-12 text-center">
          Ключевые Бизнес Услуги
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-brand-elevated rounded-xl p-6 border border-brand-border hover:border-brand-gold/60 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle top border glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-brand-gold/20 blur-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />

              <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6 text-brand-gold">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-brand-text mb-3">{service.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
