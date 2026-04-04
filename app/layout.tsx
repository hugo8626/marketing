// FILE: app/layout.tsx
//
// LAYOUT GLOBAL
//
// - Navbar + Footer globales
// - Contenido centrado solo en <main>
// - Preparado para escalar

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

/* METADATA */

export const metadata: Metadata = {
  title: "Fityx Digital",
  description: "Web estratégica para negocios",
};

/* LAYOUT */

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
      <body className="min-h-screen flex flex-col">

        {/* NAVBAR GLOBAL */}
        <Navbar />

        {/* CONTENIDO */}
        <main className="flex-1">
          <div className="mx-auto w-full max-w-7xl px-6">
            {children}
          </div>
        </main>

        {/* FOOTER GLOBAL */}
        <Footer />

      </body>
    </html>
  );
}