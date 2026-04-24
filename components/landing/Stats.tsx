"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

function StatItem({ value, suffix, label }: { value: number, suffix: string, label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(0);
  const springCount = useSpring(count, {
    damping: 50,
    stiffness: 100,
    mass: 1,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, value, count]);

  const display = useTransform(springCount, (current) => Math.round(current));

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center p-6">
      <div className="font-display italic text-5xl md:text-6xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent mb-3 flex items-center justify-center">
        <motion.span>{display}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="text-sm font-semibold tracking-wider uppercase text-brand-muted">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#0A0B15] border-y border-brand-border py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-brand-gold/20"
        >
          <StatItem value={200} suffix="+" label="Успешных дел" />
          <StatItem value={5} suffix="+" label="Лет на рынке" />
          <StatItem value={98} suffix="%" label="Довольных клиентов" />
          <StatItem value={2} suffix="" label="Направления: Право и Учет" />
        </motion.div>
      </div>
    </section>
  );
}
