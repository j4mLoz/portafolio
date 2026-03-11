"use client";

interface FooterProps {
  onContactClick: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  return (
    <footer className="bg-brand border-t border-border py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Marca */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold tracking-tight">
              <span className="text-white">Juan </span>
              <span className="text-brand-accent">Lozano</span>
            </h3>

            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              FullStack Developer focused on scalable systems, structured
              architecture and product-driven engineering.
            </p>

            <p className="text-xs text-white/50 pt-4">
              © {new Date().getFullYear()} Juan Lozano.
            </p>
          </div>

          {/* Navegación */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium uppercase tracking-wide text-white">
              Navigation
            </h4>

            <div className="flex flex-col gap-4 text-sm">
              <a
                href="/#projects"
                className="text-white/70 hover:text-brand-accent transition-colors duration-200"
              >
                Featured Projects
              </a>

              <a
                href="/#about"
                className="text-white/70 hover:text-brand-accent transition-colors duration-200"
              >
                About
              </a>

              <button
                onClick={onContactClick}
                className="text-left text-white/70 hover:text-brand-accent transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Conexión */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium uppercase tracking-wide text-white">
              Connect
            </h4>

            <div className="flex flex-col gap-4 text-sm">
              <a
                href="https://github.com/j4mLoz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-brand-accent transition-colors duration-200"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/juan-lozano-9b97a83a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-brand-accent transition-colors duration-200"
              >
                LinkedIn
              </a>

              <a
                href="mailto:juan.lozaa2812@gmail.com"
                className="text-white/70 hover:text-brand-accent transition-colors duration-200"
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
