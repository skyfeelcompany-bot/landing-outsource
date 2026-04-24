"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";

type Question = {
  id: number;
  title: string;
  options: string[];
};

const questions: Question[] = [
  {
    id: 1,
    title: "Какая задача стоит перед вами сейчас?",
    options: [
      "Полное бухгалтерское сопровождение",
      "Регистрация нового бизнеса (ТОО/ИП)",
      "Юридические консультации и защита",
      "Восстановление учета / Ликвидация",
    ],
  },
  {
    id: 2,
    title: "Ваш текущий статус?",
    options: [
      "Только планирую открывать",
      "Действующее ИП",
      "Действующее ТОО",
      "Физлицо (нужна разовая услуга)",
    ],
  },
  {
    id: 3,
    title: "Есть ли у вас наемные сотрудники?",
    options: ["Нет", "Да, от 1 до 5", "Да, больше 5", "Пока не уверен"],
  },
];

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleOptionSelect = (option: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: option }));
    
    // Automatically go to next step after a tiny delay for UX
    setTimeout(() => {
      if (currentStep < questions.length) {
        setCurrentStep((prev) => prev + 1);
      }
    }, 400);
  };

  const calculateResultTitle = () => {
    const task = answers[0] || "";
    if (task.includes("бухгалтерское")) return "Вам идеально подойдет комплексный аутсорсинг учета.";
    if (task.includes("Регистрация")) return "Откроем бизнес под ключ с подбором оптимального налогового режима.";
    return "Мы подготовили персональное предложение для вашей ситуации.";
  };

  return (
    <section className="py-24 bg-[#0A0B15] border-y border-brand-border relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/20 bg-brand-gold/5 text-brand-gold text-sm font-semibold mb-4 mx-auto">
            <HelpCircle className="w-4 h-4" />
            <span>Экспресс-анализ</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-brand-text mb-4">
            Узнайте, какое решение <br />
            <span className="text-brand-gold">подойдет именно вам</span>
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto">
            Ответьте на 3 простых вопроса, и мы сразу поймем вашу ситуацию,
            чтобы подготовить максимально точный расчет и план действий.
          </p>
        </div>

        <div className="bg-[#0E1120] border border-brand-border rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col">
          
          {/* Progress Bar */}
          {currentStep < questions.length && (
            <div className="mb-8 relative">
              <div className="flex justify-between text-xs text-brand-muted font-medium mb-3">
                <span>Вопрос {currentStep + 1} из {questions.length}</span>
                <span>{Math.round(((currentStep) / questions.length) * 100)}%</span>
              </div>
              <div className="h-2 w-full bg-brand-bg rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-gold to-brand-gold-light"
                  initial={{ width: `${(currentStep / questions.length) * 100}%` }}
                  animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>
            </div>
          )}

          <div className="flex-1 relative flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {currentStep < questions.length ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full"
                >
                  <h3 className="text-2xl md:text-3xl font-display font-medium text-brand-text mb-8">
                    {questions[currentStep].title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {questions[currentStep].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionSelect(option)}
                        className={`group relative flex items-center justify-between p-5 rounded-xl border transition-all duration-300 text-left cursor-pointer gap-4
                          ${answers[currentStep] === option 
                            ? "bg-brand-gold/10 border-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.1)]" 
                            : "bg-brand-elevated border-brand-border hover:border-brand-gold/50 hover:bg-brand-elevated/80"
                          }
                        `}
                      >
                         <span className={`text-sm md:text-base font-medium transition-colors flex-1 pr-2 ${answers[currentStep] === option ? "text-brand-gold" : "text-brand-text/90"}`}>
                           {option}
                         </span>
                         <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors shrink-0
                           ${answers[currentStep] === option 
                             ? "border-brand-gold bg-brand-gold text-brand-bg" 
                             : "border-brand-muted/40 text-transparent"
                           }`}
                         >
                           <CheckCircle2 className="w-4 h-4" />
                         </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col items-center text-center max-w-lg mx-auto"
                >
                  <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold mb-6 border border-brand-gold/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-display font-semibold text-brand-text mb-4">
                    Анализ завершен!
                  </h3>
                  <p className="text-lg text-brand-gold font-medium mb-6">
                    {calculateResultTitle()}
                  </p>
                  <p className="text-brand-muted mb-8 leading-relaxed">
                    Оставьте заявку ниже, и наш специалист свяжется с вами, 
                    чтобы предложить оптимальный тариф и детали сотрудничества без воды.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-bg font-semibold rounded-lg hover:bg-brand-gold-light transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transform hover:-translate-y-1"
                  >
                    Перейти к консультации <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
