import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import ClientLayout from "@/components/layout/ClientLayout";
import Footer from "@/components/layout/Footer";

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
          <ClientLayout>{children}</ClientLayout>
        </div>
      </body>
    </html>
  );
}
