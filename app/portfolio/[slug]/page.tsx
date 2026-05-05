// FILE: app/portfolio/[slug]/page.tsx
//
// PAGE: PROJECT DETAIL
//
// Página dinámica de cada proyecto.
// Lee el slug de la URL, busca el proyecto y muestra su detalle.
// Genera SEO dinámico para cada caso real del portfolio.

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectDetailTemplate from "@/components/portfolio/ProjectDetailTemplate";
import { portfolioProjects } from "@/data/portfolio";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* ========================================
   SEO
======================================== */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado | Fityx Digital",
    };
  }

  return {
    title: `${project.cardTitle.replace("➜", "").trim()} | Proyecto web`,
    description: project.cardExcerpt,
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.cardTitle.replace("➜", "").trim()} | Fityx Digital`,
      description: project.cardExcerpt,
      url: `/portfolio/${project.slug}`,
      siteName: "Fityx Digital",
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.featuredImageAlt,
        },
      ],
      locale: "es_ES",
      type: "article",
    },
  };
}

/* ========================================
   PAGE
======================================== */

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailTemplate project={project} />;
}