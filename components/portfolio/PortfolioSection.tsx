// FILE: components/portfolio/PortfolioSection.tsx
//
// SECTION: PORTFOLIO
//
// Cabecera del portfolio, bloques informativos
// y grid principal de proyectos.

import Image from "next/image";
import Link from "next/link";

import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export default function PortfolioSection() {
  return (
    <>
      {/* HERO */}

      <section className="px-6 py-16 md:px-8 md:py-24 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[60%_40%] lg:items-center">
          <div className="flex flex-col gap-4">
            <p className="eyebrow">Proyectos</p>

            <h1 className="hero-title max-w-4xl">
              Proyectos reales pensados para generar resultados
            </h1>

            <p className="text-body max-w-2xl">
              Cada proyecto parte de entender el negocio, detectar qué falla y
              construir una web pensada para que funcione.
            </p>

            <div className="mt-4 flex flex-col items-start gap-2">
              <Link className="btn-primary text-sm" href="/contacto">
                QUIERO UN PROYECTO ASÍ →
              </Link>

              <p className="text-small">Respuesta en menos de 24 horas</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/hero.jpeg"
              alt="Vista previa de un proyecto web desarrollado para negocio real"
              width={520}
              height={360}
              className="h-auto w-full max-w-md rounded bg-black p-3 object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}

      <section className="px-6 py-16 md:px-8 md:py-24 lg:px-10 lg:py-30">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <p className="eyebrow">Cómo trabajamos</p>

          <h2 className="section-title max-w-3xl">Cómo trabajamos</h2>

          <p className="text-body max-w-2xl">
            No hacemos webs por hacer. Trabajamos con negocios reales que
            necesitan mejorar su presencia digital para comunicar mejor y
            conseguir resultados.
          </p>

          <blockquote className="max-w-3xl border-l-4 border-[var(--primary)] p-4 text-xl font-extrabold leading-snug">
            Cada proyecto empieza con una pregunta: ¿Qué está impidiendo que
            este negocio funcione mejor online?
          </blockquote>
        </div>
      </section>

      {/* EL PROBLEMA */}

      <section className="px-6 py-16 md:px-8 md:py-24 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[45%_55%] lg:items-center">
          <div className="flex flex-col gap-3">
            <p className="eyebrow">El problema</p>

            <h2 className="section-title max-w-xl">
              ¿Qué suele estar fallando?
            </h2>
          </div>

          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] leading-none">
                X
              </span>
              <span className="text-small text-black">
                La web no transmite lo que es el negocio
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] leading-none">
                X
              </span>
              <span className="text-small text-black">
                No genera confianza en los primeros segundos
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] leading-none">
                X
              </span>
              <span className="text-small text-black">
                No guía al usuario ni facilita la decisión
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] leading-none">
                X
              </span>
              <span className="text-small text-black">
                No está pensada para convertir visitas en oportunidades
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* LA SOLUCIÓN */}

      <section className="section-grey px-6 py-16 md:px-8 md:py-24 lg:px-10 lg:py-30">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <ul className="flex flex-col gap-3">
            <li className="card flex items-start gap-3">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Estructura clara que guía al usuario
              </span>
            </li>

            <li className="card flex items-start gap-3">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Mensajes directos que explican lo que haces
              </span>
            </li>

            <li className="card flex items-start gap-3">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Diseño alineado con el negocio
              </span>
            </li>

            <li className="card flex items-start gap-3">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Enfoque en facilitar el contacto y la conversión
              </span>
            </li>
          </ul>

          <div className="flex flex-col gap-3">
            <p className="eyebrow">La solución</p>

            <h2 className="section-title max-w-xl">
              ¿Qué hacemos en
              <span className="block">cada proyecto?</span>
            </h2>

            <p className="text-body max-w-lg">
              No aplicamos plantillas. Analizamos el negocio y replanteamos la
              web desde su base para que tenga sentido y funcione.
            </p>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}

      <section className="px-6 py-16 md:px-8 md:py-24 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[45%_55%] lg:items-center">
          <div className="flex flex-col gap-3">
            <p className="eyebrow">Resultados</p>

            <h2 className="section-title max-w-xl">
              ¿Qué buscamos en
              <span className="block">todos los proyectos?</span>
            </h2>

            <p className="text-body max-w-lg">
              No buscamos solo una web bonita. Buscamos que el negocio comunique
              mejor, genere más confianza y convierta mejor sus visitas en
              oportunidades reales.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Mayor claridad en la propuesta
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Más confianza desde el primer clic
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Mejor experiencia para el usuario
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Base sólida para generar oportunidades a medio y largo plazo
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* PROYECTOS */}

      <section className="section-grey px-6 py-16 md:px-8 md:py-24 lg:px-10 lg:py-30">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-10">
            <h2 className="section-title mb-3">Proyectos seleccionados</h2>

            <p className="text-body max-w-3xl">
              Cada uno con un enfoque diferente, pero con el mismo objetivo:
              generar resultados.
            </p>
          </div>

          <PortfolioGrid />
        </div>
      </section>

      {/* CTA FINAL */}

      <section className="px-6 py-16 text-center md:px-8 md:py-24 lg:px-10 lg:py-30">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-7">
          <h2 className="section-title max-w-4xl">
            Tu negocio puede ser el siguiente caso bien hecho.
          </h2>

          <div className="flex flex-col items-center gap-2">
            <Link className="btn-primary text-sm" href="/contacto">
              QUIERO UNA PROPUESTA →
            </Link>

            <p className="text-small text-center">
              Respuesta en menos de 24 horas
            </p>
          </div>
        </div>
      </section>
    </>
  );
}