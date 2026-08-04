"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      onClick={toggleLocale}
      aria-label="Cambiar idioma / Switch language"
      className={`flex items-center text-xs font-semibold tracking-wide border border-white/30 rounded-full overflow-hidden ${className}`}
    >
      <span
        className={`px-2.5 py-1 transition-colors duration-200 ${
          locale === "es" ? "bg-white text-brand" : "text-white/70"
        }`}
      >
        ES
      </span>
      <span
        className={`px-2.5 py-1 transition-colors duration-200 ${
          locale === "en" ? "bg-white text-brand" : "text-white/70"
        }`}
      >
        EN
      </span>
    </button>
  );
}
