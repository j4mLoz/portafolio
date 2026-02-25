"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [transparent, setTransparent] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Transparencia cuando está arriba
      setTransparent(currentScrollY < 40);

      // Detectar dirección de scroll
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false); // scroll down → ocultar
      } else {
        setVisible(true); // scroll up → mostrar
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        transparent
          ? "bg-secondary backdrop-blur-md"
          : "bg-secondary border-b border-neutral-800"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
          style={{ color: "#006B75" }}
        >
          JL
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm text-neutral-300">
          <Link
            href="/projects"
            className="hover:bg-brand-hover transition-colors px-3 py-2 rounded"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="hover:bg-brand-hover transition-colors px-3 py-2 rounded"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:bg-brand-hover transition-colors px-3 py-2 rounded"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-neutral-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-neutral-950 border-t border-neutral-800 px-6 py-6 space-y-4">
          <Link
            href="/projects"
            className="block text-neutral-300"
            onClick={() => setMobileOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="block text-neutral-300"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-neutral-300"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
