"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactModal from "@/components/ui/ContactModal";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <LanguageProvider>
      <Navbar onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-1 pt-16">{children}</main>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <Footer onContactClick={() => setIsContactOpen(true)} />
      <ScrollToTop />
    </LanguageProvider>
  );
}
