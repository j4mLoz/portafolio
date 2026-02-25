import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Juan Lozano | FullStack Developer",
  description:
    "FullStack Developer focused on scalable architecture, clean systems and product-driven engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-neutral-950 text-neutral-100`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-1 w-full">
            <div className="max-w-6xl mx-auto px-6 py-20">{children}</div>
          </main>

          <footer className="border-t py-6 text-center text-sm text-neutral-400">
            © {new Date().getFullYear()} Juan Lozano
          </footer>
        </div>
      </body>
    </html>
  );
}
