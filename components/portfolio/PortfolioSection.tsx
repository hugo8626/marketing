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
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-4">
            <p className="eyebrow">Proyectos</p>

            <h1 className="hero-title max-w-4xl">
                 Tu negocio puede ser el siguiente caso de éxito

            </h1>

            <p className="text-body max-w-2xl">
              
            No se trata solo de diseñar una web <span className="block">Se trata de entender qué necesita tu negocio y construir algo que funcione de verdad.</span>

            </p>

            <div className="mt-4 flex flex-col items-start gap-2">
              <Link className="btn-primary text-sm" href="/contacto">
                QUIERO UNA PROPUESTA
              </Link>

              <p className="text-small">Respuesta en menos de 24 horas</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/marketing.jpeg"
              alt="Vista previa de un proyecto web desarrollado para negocio real"
              width={520}
              height={360}
              className="h-auto w-full max-w-md rounded-[8px] bg-black p-1 object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <p className="eyebrow">Cómo trabajamos</p>

          <h2 className="section-title max-w-3xl">No hacemos webs por hacer. 
            <span className="block text-[var(--primary)]">Creamos webs con sentido</span>       </h2>

          <p className="text-body max-w-2xl">
           Trabajamos con negocios que necesitan mejorar su presencia online para conseguir más clientes.
           <span className="block">Cada proyecto empieza con una pregunta clave:</span>
          </p>

          <blockquote className="max-w-3xl border-l-4 border-[var(--primary)] pl-4 text-xl font-extrabold leading-snug">
            ¿Qué está impidiendo que este negocio consiga más clientes online?
          </blockquote>
        </div>
      </section>

      {/* EL PROBLEMA */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-start lg:gap-14">
          <div className="flex flex-col gap-3">
            <p className="eyebrow">El problema</p>

            <h2 className="section-title max-w-xl">
              ¿Por qué muchas webs no generan clientes?
            </h2>
          <p>No es falta de diseño</p>
          <p>Es falta de estrategia.</p>
          </div>

          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] leading-none">
                X
              </span>
              <span className="text-small text-black">
                La web no explica bien qué hace el negocio 
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
                No está pensada para convertir visitas en contactos 
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* LA SOLUCIÓN */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <ul className="order-2 flex flex-col gap-3 lg:order-1">
            <li className="card flex items-start gap-3">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Estructura clara que guía al usuario paso a paso 
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
                Diseño alineado con tu negocio y tu cliente 
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

          <div className="order-1 flex flex-col gap-3 lg:order-2">
            <p className="eyebrow">La solución</p>

            <h2 className="section-title max-w-xl">
              Qué hacemos en cada proyecto
             
            </h2>

            <p className="text-body max-w-lg">
              No buscamos solo una web bonita. <span className="block">Buscamos que tu negocio comunique mejor y convierta más.</span>
            </p>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-start lg:gap-14">
          <div className="flex flex-col gap-3">
            <p className="eyebrow">Resultados</p>

            <h2 className="section-title max-w-xl">
              ¿Qué buscamos en
              <span className="block">todos los proyectos?</span>
            </h2>

            <p className="text-body max-w-lg">
             No buscamos solo una web bonita.
Buscamos que tu negocio comunique mejor y convierta más.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Mayor claridad en lo que ofreces 
              </span>
            </li>
 
            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Más confianza desde el primer click
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
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-10 flex flex-col gap-3">
            <h2 className="section-title">Webs diseñadas para generar resultados</h2>

            <p className="text-body max-w-3xl">
              Cada proyecto es diferente, pero todos tienen un objetivo en común:
atraer clientes, generar confianza y convertir visitas en oportunidades reales.
            </p>
          </div>

          <PortfolioGrid />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-16 text-center md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-7">
          <h2 className="section-title max-w-4xl">
            Proyectos pensados para generar clientes, no solo visitas
          </h2>

          <div className="flex flex-col items-center gap-2">
            <Link className="btn-primary text-sm" href="/contacto">
              QUIERO UN PROYECTO ASÍ
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