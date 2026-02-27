import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Juan Lozano | FullStack Developer",
  description:
    "Building scalable systems with clean architecture and product-driven engineering.",
  openGraph: {
    title: "Juan Lozano | FullStack Developer",
    description:
      "Building scalable systems with clean architecture and product-driven engineering.",
    url: "https://juanlozano.dev",
    siteName: "Juan Lozano",
    images: [
      {
        url: "https://juanlozano.dev/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Lozano | FullStack Developer",
    description:
      "Building scalable systems with clean architecture and product-driven engineering.",
    images: [
      {
        url: "https://juanlozano.dev/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-bg-primary text-text-primary">
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <Navbar />

          {/* Contenido */}
          <main className="flex-1 pt-16">{children}</main>

          {/* Footer */}
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
                      href="/projects"
                      className="text-text-secondary hover:text-brand transition-colors duration-200"
                    >
                      All Projects
                    </a>

                    <a
                      href="/about"
                      className="text-text-secondary hover:text-brand transition-colors duration-200"
                    >
                      About
                    </a>

                    <a
                      href="/contact"
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
                      href="https://www.linkedin.com/in/TU-LINK-REAL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-brand transition-colors duration-200"
                    >
                      LinkedIn
                    </a>

                    <a
                      href="mailto:tuemail@email.com"
                      className="text-text-secondary hover:text-brand transition-colors duration-200"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
