"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { 
              setCount(target); 
              clearInterval(timer); 
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      }, 
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  
  return { count, ref };
}

function StatItem({ value, suffix, label }: { value: number, suffix: string, label: string }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center p-6">
      <div className="font-display italic text-5xl md:text-6xl font-bold bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent mb-3">
        {count}{suffix}
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
