"use client";

import { logEvent } from "@/lib/logger";
import { useEffect, useState } from "react";
import Link from "next/link";

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setScrolled(currentScrollY > 20);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-brand/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-brand"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={() =>
            logEvent({
              section: "navbar",
              action: "click",
              label: "logo",
            })
          }
          className="text-lg font-semibold tracking-tight transition-colors duration-200"
        >
          <span className="text-white">Juan </span>
          <span className="text-brand-accent">Lozano</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm">
          <Link
            href="/#projects"
            className="text-white hover:text-brand-accent transition-colors duration-200"
          >
            Projects
          </Link>

          <Link
            href="/#about"
            className="text-white hover:text-brand-accent transition-colors duration-200"
          >
            About
          </Link>

          <button
            onClick={onContactClick}
            className="text-white hover:text-brand-accent transition-colors duration-200"
          >
            Contact
          </button>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          <div className="w-6 h-[2px] bg-white mb-1"></div>
          <div className="w-6 h-[2px] bg-white mb-1"></div>
          <div className="w-6 h-[2px] bg-white"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t border-border overflow-hidden transition-all duration-300 ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 space-y-6 text-sm">
          <Link
            href="/#projects"
            className="block text-white hover:text-brand-accent transition-colors duration-200"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>

          <Link
            href="/about"
            className="block text-white hover:text-brand-accent transition-colors duration-200"
            onClick={() => setOpen(false)}
          >
            About
          </Link>

          <button
            onClick={onContactClick}
            className="text-white hover:text-brand-accent transition-colors duration-200"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
