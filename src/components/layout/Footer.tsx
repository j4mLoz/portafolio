"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

interface FooterProps {
  onContactClick: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand border-t border-border py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Marca */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold tracking-tight">
              <span className="text-white">Juan </span>
              <span className="text-brand-accent">Lozano</span>
            </h3>

            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              {t.footer.description}
            </p>

            <p className="text-xs text-white/50 pt-4">
              © {new Date().getFullYear()} Juan Lozano.
            </p>
          </div>

          {/* Navegación */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium uppercase tracking-wide text-white">
              {t.footer.navigationTitle}
            </h4>

            <div className="flex flex-col gap-4 text-sm">
              <a
                href="/#projects"
                className="text-white/70 hover:text-brand-accent transition-colors duration-200"
              >
                {t.nav.projects}
              </a>

              <a
                href="/#about"
                className="text-white/70 hover:text-brand-accent transition-colors duration-200"
              >
                {t.nav.about}
              </a>

              <button
                onClick={onContactClick}
                className="text-left text-white/70 hover:text-brand-accent transition-colors duration-200"
              >
                {t.nav.contact}
              </button>
            </div>
          </div>

          {/* Conexión */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium uppercase tracking-wide text-white">
              {t.footer.contactTitle}
            </h4>

            <div className="flex flex-col gap-4 text-sm">
              <a
                href="https://github.com/j4mLoz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-brand-accent transition-colors duration-200"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/juan-lozano-9b97a83a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-brand-accent transition-colors duration-200"
              >
                LinkedIn
              </a>

              <a
                href="mailto:juan.lozaa2812@gmail.com"
                className="text-white/70 hover:text-brand-accent transition-colors duration-200"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
