"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

const TEAM = [
  {
    name: "Асыл",
    image: "/images/asyl.png",
    role: "Специалист по праву",
    badge: "Право",
    bio: "Опыт в гражданских спорах, взыскании долгов и нормативном соответствии. Ведет дела от первой консультации до решения суда.",
    pdfUrl: "/docs/asyl.pdf",
  },
  {
    name: "Руслан",
    image: "/images/ruslan.png",
    role: "Специалист по праву",
    badge: "Право",
    bio: "Специализируется на исполнительном производстве, процессуальной документации и защите клиентов от действий регуляторов.",
    pdfUrl: "/docs/ruslan.pdf",
  },
  {
    name: "Канагат",
    image: "/images/kanagat.png",
    role: "Юрист",
    badge: "Право",
    bio: "Эксперт в области корпоративного права и судебного представительства. Обеспечивает комплексную правовую поддержку бизнеса и защиту интересов в переговорах.",
    pdfUrl: "/docs/kanagat.pdf",
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
    <section id="team" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Slightly blurred background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/images/team-bg-v2.jpg" 
          alt="Team background" 
          className="w-full h-full object-cover blur-[1px] opacity-60 grayscale-[10%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-transparent to-brand-bg" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
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
          viewport={{ once: true, margin: "-20px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr"
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.name}
              variants={item}
              className="bg-brand-surface/30 backdrop-blur-md rounded-2xl p-8 border border-brand-border hover:border-brand-gold hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border border-brand-border flex items-center justify-center mb-6 group-hover:border-brand-gold transition-colors shadow-2xl bg-brand-bg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
                />
              </div>
              <h3 className="text-xl font-semibold text-brand-text mb-2">{member.name}</h3>
              <div className="px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-semibold rounded-full mb-6 relative">
                {member.badge}
              </div>
              <p className="text-sm text-brand-muted leading-relaxed mb-8 flex-grow">
                {member.bio}
              </p>
              
              <a 
                href={member.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-brand-border bg-brand-bg text-brand-text hover:text-brand-gold hover:border-brand-gold/50 transition-all duration-300 group/btn"
              >
                <FileText className="w-4 h-4 text-brand-gold" />
                <span className="text-sm font-medium">Профиль (PDF)</span>
              </a>
            </motion.div>
          ))}


        </motion.div>
      </div>
    </section>
  );
}
