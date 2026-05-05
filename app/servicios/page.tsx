// FILE: app/servicios/page.tsx
//
// PAGE: SERVICIOS
//
// Página principal de servicios.
// Presenta las soluciones digitales disponibles para negocios.
// Optimizada con SEO y preparada para enlazar servicios específicos.

import type { Metadata } from "next";
import ServiciosSection from "@/components/servicios/ServiciosSection";

/* ========================================
   SEO
======================================== */

export const metadata: Metadata = {
  title: "Servicios de diseño web y marketing digital",
  description:
    "Servicios de diseño web, landing pages, optimización web, fotografía y gestión de contenidos para negocios que quieren atraer más clientes.",
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    title: "Servicios de diseño web y marketing digital | Fityx Digital",
    description:
      "Soluciones digitales para mejorar tu presencia online, captar clientes y convertir visitas en oportunidades reales.",
    url: "/servicios",
    siteName: "Fityx Digital",
    images: [
      {
        url: "/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Servicios de diseño web y marketing digital",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

/* ========================================
   PAGE
======================================== */

export default function ServiciosPage() {
  return (
    <main>
      {/* SERVICIOS */}
      <ServiciosSection />
    </main>
  );
}