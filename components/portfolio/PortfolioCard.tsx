// FILE: components/portfolio/PortfolioCard.tsx
//
// COMPONENT: PORTFOLIO CARD
//
// Card base de un proyecto del portfolio.

import Image from "next/image";
import Link from "next/link";


import type { PortfolioProject } from "../../data/portfolio";


type PortfolioCardProps = {
  project: PortfolioProject;
};

export default function PortfolioCard({ project }: PortfolioCardProps) {

  
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="block transition-opacity duration-300 hover:opacity-90"
    >
      <article>
        <Image
          src={project.coverImage}
          alt={project.cardTitle}
          width={900}
          height={560}
          className="mb-4 h-[280px] w-full rounded object-cover"
        />

        <p className="eyebrow mb-2">{project.cardCategory}</p>

        <h3 className="card-title mb-2">{project.cardTitle}</h3>

        <p className="text-small">{project.cardExcerpt}</p>
      </article>
    </Link>
  );
}