"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TEAM = [
  {
    name: "Асыл",
    initials: "А",
    role: "Специалист по праву",
    badge: "Право",
    bio: "Опыт в гражданских спорах, взыскании долгов и нормативном соответствии. Ведет дела от первой консультации до решения суда.",
  },
  {
    name: "Руслан",
    initials: "Р",
    role: "Специалист по праву",
    badge: "Право",
    bio: "Специализируется на исполнительном производстве, процессуальной документации и защите клиентов от действий регуляторов.",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Team() {
  return (
    <section id="team" className="py-24 bg-brand-bg relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-gold mb-3 block">
            Наши специалисты
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-brand-text">
            Люди, стоящие за вашей защитой.
          </h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr"
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.name}
              variants={item}
              className="bg-brand-surface rounded-2xl p-8 border border-brand-border hover:border-brand-gold hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-[#1A1F33] border border-brand-border flex items-center justify-center mb-6 group-hover:border-brand-gold transition-colors">
                <span className="font-display text-3xl text-brand-gold">{member.initials}</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-text mb-2">{member.name}</h3>
              <div className="px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-semibold rounded-full mb-6 relative">
                {member.badge}
              </div>
              <p className="text-sm text-brand-muted leading-relaxed flex-grow">
                {member.bio}
              </p>
            </motion.div>
          ))}

          {/* Placeholder Card for booking */}
          <motion.div
            variants={item}
            className="relative bg-[#151929]/50 rounded-2xl p-8 border border-brand-gold/30 hover:border-brand-gold transition-all duration-300 flex flex-col items-center text-center justify-center group overflow-hidden"
          >
            {/* Pulsing glow animation */}
            <div className="absolute inset-0 bg-brand-gold/5 blur-2xl rounded-2xl animate-pulse pointer-events-none" />

            <div className="w-20 h-20 rounded-full bg-brand-bg border border-brand-gold/30 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-colors">
              <span className="font-display text-3xl text-brand-text/50">?</span>
            </div>
            <h3 className="text-xl font-semibold text-brand-text mb-2">Ваш советник</h3>
            <div className="px-3 py-1 bg-brand-text/5 border border-brand-text/10 text-brand-text/60 text-xs font-semibold rounded-full mb-6">
              Доступен сейчас
            </div>
            <p className="text-sm text-brand-muted/80 leading-relaxed max-w-[240px] mb-8">
              Расскажите нам о своей ситуации, и мы подберем для вас подходящего специалиста из команды.
            </p>
            
            <a href="#contact" className="inline-flex items-center gap-2 text-brand-gold font-semibold hover:text-brand-gold-light transition-colors mt-auto">
              Назначить встречу <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
