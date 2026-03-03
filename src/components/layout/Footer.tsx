"use client";

import { useEffect, useState } from "react";

interface FooterProps {
  onContactClick: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  return (
    <footer className="border-t border-border py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Marca */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold tracking-tight text-text-primary">
              <span className="text-brand">Juan</span> Lozano
            </h3>

            <p className="text-sm text-text-secondary max-w-sm leading-relaxed">
              FullStack Developer focused on scalable systems, structured
              architecture and product-driven engineering.
            </p>

            <p className="text-xs text-text-secondary pt-4">
              © {new Date().getFullYear()} Juan Lozano.
            </p>
          </div>

          {/* Navegación */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium uppercase tracking-wide text-text-primary">
              Navigation
            </h4>

            <div className="flex flex-col gap-4 text-sm">
              <a
                href="/#projects"
                className="text-text-secondary hover:text-brand transition-colors duration-200"
              >
                Featured Projects
              </a>
              <a
                href="/#about"
                className="text-text-secondary hover:text-brand transition-colors duration-200"
              >
                About
              </a>

              <a
                onClick={onContactClick}
                className="text-text-secondary hover:text-brand transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Conexión */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium uppercase tracking-wide text-text-primary">
              Connect
            </h4>

            <div className="flex flex-col gap-4 text-sm">
              <a
                href="https://github.com/j4mLoz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-brand transition-colors duration-200"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/juan-lozano-9b97a83a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-brand transition-colors duration-200"
              >
                LinkedIn
              </a>

              <a
                href="mailto:juan.lozaa2812@gmail.com"
                className="text-text-secondary hover:text-brand transition-colors duration-200"
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
