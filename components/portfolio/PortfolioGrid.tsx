// FILE: components/portfolio/PortfolioGrid.tsx
//
// COMPONENT: PORTFOLIO GRID
//
// Muestra todos los proyectos del portfolio.
// Si no hay proyectos, muestra un mensaje.

import { portfolioProjects } from "../../data/portfolio"; 
// 👉 importa el array donde están guardados los proyectos

import PortfolioCard from "./PortfolioCard"; 
// 👉 importa el componente que dibuja cada card

export default function PortfolioGrid() {
  // 👉 componente principal del grid

  if (portfolioProjects.length === 0) {
    // 👉 comprueba si NO hay proyectos en el array

    return (
      <div className="border border-dashed border-black/20 p-10 text-center rounded">
        {/* 👉 bloque visual cuando no hay proyectos */}
        <p>No hay proyectos</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* 👉 contenedor en grid (2 columnas en desktop) */}

      {portfolioProjects.map((project) => (
        // 👉 recorre TODOS los proyectos del array

        <PortfolioCard
          key={project.slug}
          // 👉 clave única para React (necesaria en listas)

          project={project}
          // 👉 pasa cada proyecto a la card
        />
      ))}

    </div>
  );
}