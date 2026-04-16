"use client";

import { motion, Variants } from "framer-motion";
import { PieChart, Receipt, Lightbulb, Cloud, MessageCircleQuestion, Coins } from "lucide-react";

const ACCOUNTING_SERVICES = [
  { icon: PieChart, title: "Бухгалтерский учет", desc: "Полное ведение бухгалтерского учета вашей компании в соответствии с законодательством." },
  { icon: Receipt, title: "Налоговая отчетность", desc: "Точная и своевременная подготовка и сдача всех необходимых налоговых форм." },
  { icon: Lightbulb, title: "Налоговая оптимизация", desc: "Внедрение законных стратегий для снижения налоговой нагрузки без рисков." },
  { icon: Cloud, title: "Ввод данных в 1С", desc: "Аккуратный ввод и поддержание базы данных в облачных решениях 1С." },
  { icon: MessageCircleQuestion, title: "Налоговый консалтинг", desc: "Понятные и практичные советы по сложным налоговым вопросам и изменениям." },
  { icon: Coins, title: "Зарплата и кадры", desc: "Расчет заработной платы сотрудников и всех сопутствующих налогов." },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AccountingServices() {
  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
        
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-32"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-gold mb-3 block">
            Бухгалтерские услуги
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-semibold leading-tight text-brand-text mb-6">
            Бухгалтерия, которая <br /><span className="text-brand-gold">работает</span> так же усердно, как вы.
          </h2>
          <p className="text-lg text-brand-muted leading-relaxed">
            От ежедневных проводок до налоговой оптимизации и расчета зарплаты — 
            мы берем на себя полную ответственность за ваши финансовые операции,
            чтобы вы могли сосредоточиться на росте бизнеса.
          </p>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {ACCOUNTING_SERVICES.map((service) => (
            <motion.div
              variants={item}
              key={service.title}
              className="group bg-brand-elevated rounded-xl p-6 border border-brand-border cursor-default hover:bg-[#1A1F33] transition-colors overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded bg-brand-bg flex items-center justify-center text-brand-gold shrink-0">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-brand-text leading-tight">{service.title}</h3>
              </div>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300">
                <div className="overflow-hidden">
                  <p className="text-brand-muted text-sm pt-4 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
