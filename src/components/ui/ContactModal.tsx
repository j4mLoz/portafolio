"use client";

import { useEffect } from "react";
import { Mail, MessageCircle } from "lucide-react";
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
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Card */}
      <div
        className="relative bg-bg-primary border border-border rounded-2xl p-10 w-[90%] max-w-md
                   transition-all duration-300 ease-out
                   opacity-0 scale-95 animate-[modalIn_0.3s_ease-out_forwards]"
      >
        <h3 className="text-2xl font-semibold mb-8 tracking-tight">
          {t.contactModal.title}
        </h3>

        <div className="space-y-6">
          <a
            href="https://wa.me/573007022596"
            target="_blank"
            className="flex items-center gap-4 border border-border rounded-xl p-4
                       hover:border-brand transition-colors duration-200"
          >
            <MessageCircle size={20} />
            <span>{t.contactModal.whatsapp}</span>
          </a>

          <a
            href="mailto:juan.lozaa2812@gmail.com"
            className="flex items-center gap-4 border border-border rounded-xl p-4
                       hover:border-brand transition-colors duration-200"
          >
            <Mail size={20} />
            <span>{t.contactModal.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
