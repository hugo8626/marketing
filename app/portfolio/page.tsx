// FILE: app/portfolio/page.tsx
//
// PAGE: PORTFOLIO
//
// Página principal del portfolio.
// Muestra proyectos reales de diseño web y resultados.
// Optimizada con SEO para producción.

import type { Metadata } from "next";
import PortfolioSection from "@/components/portfolio/PortfolioSection";

/* ========================================
   SEO
======================================== */

export const metadata: Metadata = {
  title: "Portfolio de diseño web | Proyectos reales",
  description:
    "Descubre proyectos reales de diseño web creados por Fityx Digital para negocios que quieren mejorar su presencia online y conseguir más clientes.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio de diseño web | Fityx Digital",
    description:
      "Proyectos reales de diseño web estratégico para negocios, marcas y empresas que quieren atraer clientes online.",
    url: "/portfolio",
    siteName: "Fityx Digital",
    images: [
      {
        url: "/tavernad.jpeg",
        width: 1200,
        height: 630,
        alt: "Portfolio de diseño web Fityx Digital",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

/* ========================================
   PAGE
======================================== */

export default function PortfolioPage() {
  return (
    <main>
      {/* PORTFOLIO */}
      <PortfolioSection />
    </main>
  );
}