"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      onClick={toggleLocale}
      aria-label="Cambiar idioma / Switch language"
      className={`flex items-center font-mono text-xs font-medium tracking-wide border border-line overflow-hidden ${className}`}
    >
      <span
        className={`px-2.5 py-1 transition-colors duration-200 ${
          locale === "es" ? "bg-ink text-bg-primary" : "text-ink/60"
        }`}
      >
        ES
      </span>
      <span
        className={`px-2.5 py-1 transition-colors duration-200 ${
          locale === "en" ? "bg-ink text-bg-primary" : "text-ink/60"
        }`}
      >
        EN
      </span>
    </button>
  );
}
