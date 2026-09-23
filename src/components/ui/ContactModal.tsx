"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: Props) {
  const { t } = useLanguage();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-ink/30 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Card */}
      <div
        className="relative w-[90%] max-w-md border border-line bg-bg-primary p-10
                   transition-all duration-300 ease-out
                   opacity-0 scale-95 animate-[modalIn_0.3s_ease-out_forwards]"
      >
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-brand-accent">
          {t.contactModal.title}
        </p>
        <h3 className="font-heading text-2xl font-bold uppercase tracking-[-0.01em] mb-8">
          {t.contactModal.title}
        </h3>

        <div className="space-y-5">
          <a
            href="https://wa.me/573007022596"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link block w-fit font-mono text-sm uppercase tracking-[0.14em] text-ink"
          >
            {t.contactModal.whatsapp} →
          </a>

          <a
            href="mailto:juan.lozaa2812@gmail.com"
            className="editorial-link block w-fit font-mono text-sm uppercase tracking-[0.14em] text-ink"
          >
            {t.contactModal.email} →
          </a>
        </div>
      </div>
    </div>
  );
}
