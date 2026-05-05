// FILE: components/portfolio/PortfolioGrid.tsx
//
// COMPONENT: PORTFOLIO GRID
//
// Muestra todos los proyectos del portfolio.
// Si no hay proyectos, muestra un mensaje.

import { portfolioProjects } from "@/data/portfolio";
// 👉 import absoluto (evita errores al escalar)

import PortfolioCard from "./PortfolioCard";

export default function PortfolioGrid() {
  if (portfolioProjects.length === 0) {
    return (
      <div className="rounded-[8px] border border-dashed border-black/20 p-10 text-center">
        <p>No hay proyectos</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {portfolioProjects.map((project) => (
        <PortfolioCard key={project.slug} project={project} />
      ))}
    </div>
  );
}