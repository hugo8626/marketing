// FILE: components/portfolio/ProjectDetailTemplate.tsx
//
// TEMPLATE: PROJECT DETAIL
//
// Página completa del proyecto (estructura final).

import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "../../data/portfolio";

type Props = {
  project: PortfolioProject;
};

export default function ProjectDetailTemplate({ project }: Props) {
  return (
    <>
      {/* HERO */}

      <section className="px-6 py-16 md:py-24 lg:py-30">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow mb-4">Proyecto</p>

          <h1 className="hero-title mb-8  w-5xl">
            {project.pageTitle}
          </h1>

          <p className="text-body mb-8 max-w-3xl">
            {project.pageIntro}
          </p>

          {/* WEB */}

          <div className="mb-8">
            <p className="eyebrow mb-1">{project.cardTitle}</p>

            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-small border-b border-transparent hover:border-black"
            >
              {project.websiteLabel}
            </a>
          </div>

          {/* CTA */}

          <div>
            <Link href="/contacto" className="btn-primary text-sm">
              QUIERO ALGO ASÍ →
            </Link>

            <p className="text-xs mt-2">
              Te respondemos en menos de 24h
            </p>
          </div>
        </div>
      </section>

      {/* CONTEXTO */}

      <section className="section-grey py-30">
        <div className="mx-auto text-center px-6 ">
          <p className="eyebrow mb-3">Contexto</p>

          <h2 className="section-title mb-5">El negocio</h2>

          <p className="text-body mb-4">{project.context}</p>

          <p className="text-body">{project.pageDescription}</p>
        </div>
      </section>

      {/* PROBLEMA */}

      <section className="px-6 py-16">
        <div className="grid gap-10 items-center lg:grid-cols-2 max-w-6xl mx-auto">
          <div>
            <p className="eyebrow mb-3">El problema</p>

            <h2 className="section-title mb-5">El problema</h2>

            <p className="text-body">{project.objective}</p>
          </div>

          <ul className="flex flex-col gap-4">
            {project.problemItems.map((item) => (
              <li key={item} className="bg-[#F5F5F5] p-5 rounded"> <span className="mr-4 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] leading-none">X</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ENFOQUE */}

      <section className="section-grey px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
          <div>
            <p className="eyebrow mb-3">Enfoque</p>

            <h2 className="section-title mb-5">Qué hicimos</h2>

            <p className="text-body">{project.approachText}</p>
          </div>

          <ul className="flex flex-col gap-4">
            {project.approachItems.map((item) => (
              <li key={item} className="bg-[#F5F5F5] p-5 rounded"><span className="inline-flex h-8 w-8 shrink-0 items-center border mr-4 justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RESULTADO */}

      <section className="px-6 py-16 mt-23">
        <div className=" grid items-center gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
          <div>
            <p className="eyebrow mb-3">Resultado</p>

            <h2 className="section-title mb-5">El resultado</h2>

            <p className="text-body ">{project.resultText}</p>
          </div>

          <ul className="flex  justify-center flex-col gap-4 ">
            {project.resultItems.map((item) => (
              <li key={item} className="bg-[#F5F5F5] p-5 rounded"><span className="inline-flex h-8 w-8 shrink-0 items-center border mr-4 justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
            
        {/* IMAGEN PRINCIPAL */}
            
        <div className="max-w-6xl mx-auto mt-62">
          <p className="italic text-small">{project.finimg}</p>
          <Image
            src={project.featuredImage}
            alt={project.featuredImageAlt}
            width={1200}
            height={900}
            className="rounded mb-6"
          />

          {/* GALERÍA */}

          <div className="grid md:grid-cols-2 gap-6">
            {project.gallery.map((img) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="rounded"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}

      <section className="section-grey px-6 py-30  ">
        <div   className="flex flex-col justify-center items-center w-7xl">


              <h2 className="section-title mb-6 text-center">
              {project.finalTitle}
            </h2>

            <Link href="/contacto" className="btn-primary">
              QUIERO ALGO ASÍ →
            </Link>
        </div>
       
      </section>

      {/* VOLVER */}

      <section className="px-6 py-10 text-center">
        <Link
          href="/portfolio"
          className="border-b border-black pb-1 "
        >
          Volver al portfolio →
        </Link>
      </section>
    </>
  );
}