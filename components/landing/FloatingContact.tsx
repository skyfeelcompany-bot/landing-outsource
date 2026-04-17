"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";

const CONTACTS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/77080048192",
    color: "bg-[#25D366]",
    icon: (
      <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Позвонить",
    href: "tel:+77080048192",
    color: "bg-gradient-to-br from-[#e6d27a] via-[#cbb44d] to-[#a8922f]",
    icon: <Phone className="w-5 h-5 text-white" />,
  },
];

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Show hint after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleMainClick = () => {
    setIsOpen((prev) => !prev);
    setShowHint(false);
  };

  return (
    <div ref={rootRef} className="fixed bottom-[95px] right-5 z-[999999]">
      {/* Hint tooltip */}
      <AnimatePresence>
        {showHint && !isOpen && (
          <motion.a
            href="https://wa.me/77080048192"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute right-0 bottom-[140px] bg-[#cbb44d] text-black px-4 py-2.5 rounded-xl text-sm font-medium shadow-[0_6px_16px_rgba(0,0,0,0.25)] cursor-pointer hover:bg-[#d4bf5a] transition-colors whitespace-nowrap"
          >
            Юридическая консультация
          </motion.a>
        )}
      </AnimatePresence>

      {/* Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute bottom-[85px] right-0"
          >
            <div className="bg-white rounded-2xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] min-w-[230px]">
              {CONTACTS.map((contact, idx) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 + 0.05, duration: 0.3, ease: "easeOut" }}
                  className={`flex items-center justify-between py-2.5 ${
                    idx < CONTACTS.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <span className="text-[15px] text-gray-800 font-medium">{contact.label}</span>
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`w-[55px] h-[55px] rounded-full ${contact.color} flex items-center justify-center hover:-translate-y-0.5 hover:shadow-[0_6px_14px_rgba(0,0,0,0.25)] transition-all`}
                  >
                    {contact.icon}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleMainClick}
        className="w-[70px] h-[70px] rounded-full border-none bg-gradient-to-br from-[#e6d27a] via-[#cbb44d] to-[#a8922f] flex items-center justify-center cursor-pointer shadow-[0_8px_20px_rgba(0,0,0,0.35),inset_0_1px_3px_rgba(255,255,255,0.25)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.4),0_0_10px_rgba(203,180,77,0.3)] transition-shadow"
        aria-label="Связаться с нами"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="phone"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="w-7 h-7 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
