// FILE: app/robots.ts
//
// ROBOTS
//
// Define qué puede rastrear Google.
// Incluye la ruta del sitemap para mejorar la indexación.

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://fityxdigital.com/sitemap.xml",
  };
}