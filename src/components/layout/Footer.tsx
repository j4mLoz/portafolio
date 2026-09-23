"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

interface FooterProps {
  onContactClick: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-line py-24">
      <div className="pointer-events-none absolute left-3 top-1/2 hidden -translate-y-1/2 lg:block">
        <p className="origin-center -rotate-90 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-ink/55">
          {t.hero.verticalKicker}
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-3">
          {/* Marca */}
          <div className="space-y-5">
            <h3 className="font-heading text-xl font-bold uppercase tracking-[-0.01em]">
              <span className="text-ink">Juan </span>
              <span className="text-brand-accent">Lozano</span>
            </h3>

            <p className="max-w-sm text-sm leading-relaxed text-text-secondary">
              {t.footer.description}
            </p>

            <p className="pt-4 font-mono text-xs text-ink/50">
              © {new Date().getFullYear()} Juan Lozano.
            </p>
          </div>

          {/* Navegación */}
          <div className="space-y-6">
            <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-ink/60">
              {t.footer.navigationTitle}
            </h4>

            <div className="flex flex-col items-start gap-4 text-sm">
              <a
                href="/#projects"
                className="editorial-link font-mono uppercase tracking-[0.1em] text-ink"
              >
                {t.nav.projects}
              </a>

              <a
                href="/#about"
                className="editorial-link font-mono uppercase tracking-[0.1em] text-ink"
              >
                {t.nav.about}
              </a>

              <button
                onClick={onContactClick}
                className="editorial-link font-mono uppercase tracking-[0.1em] text-ink"
              >
                {t.nav.contact}
              </button>
            </div>
          </div>

          {/* Conexión */}
          <div className="space-y-6">
            <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-ink/60">
              {t.footer.contactTitle}
            </h4>

            <div className="flex flex-col items-start gap-4 text-sm">
              <a
                href="https://github.com/j4mLoz"
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link font-mono uppercase tracking-[0.1em] text-ink"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/juanlozano-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link font-mono uppercase tracking-[0.1em] text-ink"
              >
                LinkedIn
              </a>

              <a
                href="mailto:juan.lozaa2812@gmail.com"
                className="editorial-link font-mono uppercase tracking-[0.1em] text-ink"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <p className="mt-16 font-mono text-xs uppercase tracking-[0.18em] text-ink/60">
          {t.footer.index}
        </p>
      </div>
    </footer>
  );
}
