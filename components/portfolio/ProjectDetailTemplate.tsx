// FILE: components/portfolio/ProjectDetailTemplate.tsx
//
// TEMPLATE: PROJECT DETAIL
//
// Página de detalle de proyecto.
// Estructura responsive y limpia para mostrar contexto,
// problema, enfoque, resultado, imágenes y CTA final.

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
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="eyebrow">Proyecto</p>

            <h1 className="hero-title max-w-5xl">{project.pageTitle}</h1>

            <p className="text-body max-w-3xl">{project.pageIntro}</p>
          </div>

          {/* WEB */}
          <div className="flex flex-col gap-1">
            <p className="eyebrow">{project.cardTitle}</p>

            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-small w-fit border-b border-transparent transition-colors duration-300 hover:border-black"
            >
              {project.websiteLabel}
            </a>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start gap-2">
            <Link href="/contacto" className="btn-primary text-sm">
              QUIERO ALGO ASÍ →
            </Link>

            <p className="text-xs">Te respondemos en menos de 24h</p>
          </div>
        </div>
      </section>

      {/* CONTEXTO */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center pt-6 text-center">
         

          <h2 className="section-title mb-5">El negocio</h2>

          <div className="flex flex-col gap-4">
            <p className="text-body">{project.context}</p>
            <p className="text-body">{project.pageDescription}</p>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-4 pt-6">
           

            <h2 className="section-title">El problema</h2>

            <p className="text-body">{project.objective}</p>
          </div>

          <ul className="flex flex-col gap-4">
            {project.problemItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-[8px] bg-[#F5F5F5] p-5"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                  X
                </span>

                <span className="text-body text-black">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ENFOQUE */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-4 pt-6">
            

            <h2 className="section-title">Qué hicimos</h2>

            <p className="text-body">{project.approachText}</p>
          </div>

          <ul className="flex flex-col gap-4">
            {project.approachItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-[8px] bg-white p-5"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-[#F9F5ED] text-[var(--primary)] leading-none">
                  ✔
                </span>

                <span className="text-body text-black">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RESULTADO */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-4 pt-6">
           

            <h2 className="section-title">El resultado</h2>

            <p className="text-body">{project.resultText}</p>
          </div>

          <ul className="flex flex-col gap-4">
            {project.resultItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-[8px] bg-[#F5F5F5] p-5"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-[#F9F5ED] text-[var(--primary)] leading-none">
                  ✔
                </span>

                <span className="text-body text-black">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* IMAGEN PRINCIPAL + GALERÍA */}
        <div className="mx-auto mt-14 max-w-6xl md:mt-16 lg:mt-20">
          <p className="text-small mb-4 italic">{project.finimg}</p>

          <Image
            src={project.featuredImage}
            alt={project.featuredImageAlt}
            width={1200}
            height={900}
            className="mb-6 w-full rounded-[8px] object-cover"
            priority
          />

          <div className="grid gap-6 md:grid-cols-2">
            {project.gallery.map((img) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="w-full rounded-[8px] object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 text-center">
          <h2 className="section-title">{project.finalTitle}</h2>

          <Link href="/contacto" className="btn-primary">
            QUIERO ALGO ASÍ →
          </Link>
        </div>
      </section>

      {/* VOLVER */}
      <section className="px-6 py-10 md:px-10 lg:px-14">
        <div className="mx-auto max-w-6xl text-center">
          <Link
            href="/portfolio"
            className="inline-block border-b border-black pb-1 transition-opacity duration-300 hover:opacity-70"
          >
            Volver al portfolio →
          </Link>
        </div>
      </section>
    </>
  );
}