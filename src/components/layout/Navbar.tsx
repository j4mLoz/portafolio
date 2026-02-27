"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false); // scroll down
      } else {
        setVisible(true); // scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-bg-primary border-b border-border transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-text-primary hover:text-brand transition-colors duration-200"
        >
          Juan Lozano
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm">
          <Link
            href="/#projects"
            className="text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            Projects
          </Link>

          <Link
            href="/#about"
            className="text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-text-primary"
        >
          <div className="w-6 h-[2px] bg-text-primary mb-1"></div>
          <div className="w-6 h-[2px] bg-text-primary mb-1"></div>
          <div className="w-6 h-[2px] bg-text-primary"></div>
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
            className="block text-text-secondary hover:text-text-primary transition-colors duration-200"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>

          <Link
            href="/about"
            className="block text-text-secondary hover:text-text-primary transition-colors duration-200"
            onClick={() => setOpen(false)}
          >
            About
          </Link>

          <Link
            href="/contact"
            className="block text-text-secondary hover:text-text-primary transition-colors duration-200"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
