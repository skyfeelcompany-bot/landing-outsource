import { Scale, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05060A] pt-20 pb-8 border-t border-brand-border">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 group mb-6 inline-flex">
              <Scale className="w-6 h-6 text-brand-gold transition-transform group-hover:scale-110" />
              <span className="font-display text-3xl tracking-wide font-semibold text-brand-text">
                Outsource Legal
              </span>
            </a>
            <p className="text-brand-muted mb-8 max-w-sm leading-relaxed">
              Юридический и бухгалтерский аутсорсинг для компаний и частных лиц в Казахстане. Выстраиваем системы, защищающие ваши интересы.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-gold hover:border-brand-gold transition-all">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-gold hover:border-brand-gold transition-all">
                <Phone className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-gold hover:border-brand-gold transition-all">
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-brand-text font-semibold mb-6 tracking-wide">Услуги</h4>
            <ul className="space-y-4">
              {[
                { label: "Юридические Услуги", href: "#services" },
                { label: "Бухгалтерские Услуги", href: "#services" },
                { label: "Регистрация Бизнеса", href: "#services" },
                { label: "Ликвидация ТОО / ИП", href: "#services" },
                { label: "Документооборот", href: "#services" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-brand-muted hover:text-brand-gold transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-brand-text font-semibold mb-6 tracking-wide">Компания</h4>
            <ul className="space-y-4">
              {[
                { label: "О нас", href: "#about" },
                { label: "Команда", href: "#team" },
                { label: "FAQ / Вопросы", href: "#faq" },
                { label: "Политика Конфиденциальности", href: "#" },
                { label: "Контакты", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-brand-muted hover:text-brand-gold transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-border/50 text-center md:flex md:justify-between md:text-left">
          <p className="text-sm text-brand-muted mb-4 md:mb-0">
            © {currentYear} Outsource Legal. Все права защищены.
          </p>
          <div className="text-sm text-brand-muted/60">
            Право и учет нового поколения.
          </div>
        </div>

      </div>
    </footer>
  );
}
