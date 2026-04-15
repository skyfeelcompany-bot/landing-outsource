"use client";

import { motion, Variants } from "framer-motion";
import { Scale, FileSignature, Gavel, ShieldBan, ShieldAlert, FileKey, Users, ShieldCheck, MessageSquareText } from "lucide-react";

const LEGAL_SERVICES = [
  { icon: Scale, title: "Взыскание задолженности", desc: "Представительство по делам о взыскании долгов. Полное сопровождение: от иска до фактического исполнения." },
  { icon: FileSignature, title: "Процессуальные документы", desc: "Составление исковых заявлений, отзывов, заявлений и жалоб грамотно и в кратчайшие сроки." },
  { icon: Gavel, title: "Исполнительное производство", desc: "Поддержка на каждой стадии исполнения. Защита ваших прав при взаимодействии с судебными исполнителями (ЧСИ)." },
  { icon: ShieldBan, title: "Обжалование действий ЧСИ", desc: "Оспаривание незаконных действий или бездействия частных судебных исполнителей. Быстрые правовые меры." },
  { icon: ShieldAlert, title: "Защита при проверках", desc: "Ограждение бизнеса от давления во время проверок. Подготовка ответов на жалобы и обращения." },
  { icon: FileKey, title: "Договоры и Доверенности", desc: "Разработка юридически грамотных договоров и доверенностей для любых видов сделок." },
  { icon: Users, title: "Защита физ. лиц", desc: "Представительство интересов частных лиц в гражданских делах — от первого обращения до постановления." },
  { icon: ShieldCheck, title: "Комплексная защита", desc: "Юридическая защита интересов клиента в суде на всех этапах досудебного и судебного разбирательства." },
  { icon: MessageSquareText, title: "Гражданское право", desc: "Устные и письменные консультации по вопросам гражданского права и оценке юридических рисков." },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function LegalServices() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Subtle Line Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, #fff 19px, #fff 20px)' }}
      />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-gold mb-3 block">
            Юридические Услуги
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-brand-text">
            Комплексная правовая защита <br className="hidden sm:block" />на каждой стадии.
          </h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {LEGAL_SERVICES.map((service) => (
            <motion.div
              variants={item}
              key={service.title}
              className="bg-brand-surface rounded-2xl p-8 border-l-2 border-l-brand-gold border-y border-r border-brand-border hover:border-r-brand-gold/20 hover:border-y-brand-gold/20 transition-colors group flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 shrink-0">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-brand-text mb-4">{service.title}</h3>
              <p className="text-brand-muted mb-8 flex-grow leading-relaxed">{service.desc}</p>
              <a 
                href="#contact" 
                className="inline-flex items-center text-sm font-semibold text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0"
              >
                Подробнее <span className="ml-1">→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
