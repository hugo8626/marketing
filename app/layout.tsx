// FILE: app/layout.tsx
//
// LAYOUT GLOBAL
//
// - Define SEO global del sitio
// - Base para todas las páginas
// - Incluye Navbar y Footer
// - Preparado para producción

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* FONTS */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* SEO GLOBAL */

export const metadata: Metadata = {
  metadataBase: new URL("https://fityxdigital.com"),

  title: {
    default: "Fityx Digital | Diseño web para conseguir clientes",
    template: "%s | Fityx Digital",
  },

  description:
    "Diseño web estratégico para negocios que quieren atraer clientes, generar reservas y aumentar ventas con páginas optimizadas.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Fityx Digital | Diseño web para conseguir clientes",
    description:
      "Páginas web estratégicas, rápidas y pensadas para convertir visitas en clientes.",
    url: "/",
    siteName: "Fityx Digital",
    images: [
      {
        url: "/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Diseño web profesional para negocios",
      },
    ],
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fityx Digital | Diseño web para conseguir clientes",
    description:
      "Páginas web estratégicas, rápidas y pensadas para convertir visitas en clientes.",
    images: ["/hero.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

/* ROOT */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1 pt-[73px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}