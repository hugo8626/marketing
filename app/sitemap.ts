// FILE: app/sitemap.ts
//
// SITEMAP
//
// Lista las páginas principales del sitio.
// Ayuda a Google a descubrir e indexar la web correctamente.

import type { MetadataRoute } from "next";
import { portfolioProjects } from "@/data/portfolio";

/* ========================================
   CONFIG
======================================== */

const baseUrl = "https://fityxdigital.com";
const lastModified = "2026-05-05";

/* ========================================
   SITEMAP
======================================== */

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioUrls: MetadataRoute.Sitemap = portfolioProjects.map(
    (project) => ({
      url: `${baseUrl}/portfolio/${project.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicios/one-page`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/servicios/web-completa`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/servicios/landing-page`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/servicios/gestion-contenidos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/servicios/fotografia`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/servicios/optimizacion-web`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/negocio/turismo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/negocio/salud`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/negocio/marca`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    ...portfolioUrls,
    {
      url: `${baseUrl}/nosotros`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}