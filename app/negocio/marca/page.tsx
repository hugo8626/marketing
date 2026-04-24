/**
 * FILE: app/negocio/marca/page.tsx
 *
 * PAGE: NEGOCIO MARCA
 *
 * Página de captación para negocios de marca.
 * Mantiene el enfoque del contenido original y mejora
 * estructura, semántica y responsive.
 */

import Image from "next/image";
import Link from "next/link";

export default function NegocioMarcaPage() {
  return (
    <main>
      {/* HERO */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-6">
              <p className="eyebrow">
                Diseño web para marca personal
              </p>

              <h1 className="hero-title max-w-3xl">
                Convierte tu conocimiento en clientes

              
              </h1>

              <p className="text-body max-w-2xl">
                Creamos páginas web para coaches, consultores y profesionales independientes en Girona, pensadas para comunicar mejor lo que haces y atraer clientes de forma constante.

              </p>
            </header>
            <p className="text-body">Diseñamos webs con un objetivo claro:</p>
            <p className="text-body">que tu mensaje se entienda, conecte y genere oportunidades reales de negocio.</p>

            <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              <li className="flex items-center gap-3 rounded-[8px] bg-white p-4 text-sm">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                <span>Atrae más clientes desde tu web</span>
              </li>

              <li className="flex items-center gap-3 rounded-[8px] bg-white p-4 text-sm">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                <span> Refuerza tu posicionamiento como experto</span>
              </li>

              <li className="flex items-center gap-3 rounded-[8px] bg-white p-4 text-sm">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                <span> Comunica tu propuesta con claridad</span>
              </li>
            </ul>

            <div className="flex flex-col items-start gap-2">
              <Link className="btn-black text-sm" href="/contacto">
                QUIERO MÁS CLIENTES
              </Link>
              <p className="text-xs">Respuesta en menos de 24 horas</p>
            </div>
          </div>

        <div className="relative flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-xl">
                      <Image
                        src="/risa.jpeg"
                        alt="Consulta médica"
                        width={560}
                        height={400}
                        className="w-full rounded-[12px] bg-black/40 p-1 object-cover shadow-lg"
                        priority
                      />
                    </div>
                  </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">El problema</p>

            <h2 className="section-title max-w-2xl">
              Muchos profesionales tienen web...
              <span className="block">pero no les genera clientes.</span>
            </h2>

            <p className="text-small max-w-xl">
              El problema no es tener una web.

            </p>
            <p className="text-small max-w-xl">
              Es que no comunica bien lo que haces ni a quién ayudas.

            </p>
          </header>

          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3 rounded-[8px] bg-white p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              <span>No queda claro qué servicios ofreces </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-white p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              <span>Mensaje genérico que no conecta </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-white p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              <span>No transmite autoridad ni especialización </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-white p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              <span>No genera confianza para contratar</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-white p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              <span>No convierte visitas en contactos </span>
            </li>
          </ul>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="order-1 flex flex-col gap-4 lg:order-2">
            <p className="eyebrow">La solución</p>

            <h2 className="section-title max-w-xl">
              Una web diseñada para comunicar tu valor
              <span className="block text-[var(--primary)]">y facilitar que te contacten</span>
            </h2>
          <div> 
             <p className="text-body">No se trata solo de diseño.</p>
              <p className="text-body">Se trata de que tu web explique bien lo que haces y por qué deberían elegirte.</p>
          </div>
        

          </div>



          <ul className="order-2 flex flex-col gap-3 lg:order-1">
            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Mensaje claro desde el primer segundo 
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Posicionamiento como experto en tu sector
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Estructura pensada para generar contactos
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Diseño alineado con tu marca personal
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                SEO para atraer oportunidades cualificadas 
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* DIFERENCIA */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="flex flex-col gap-5">
            <p className="eyebrow">Por qué somos diferentes</p>

            <h2 className="section-title max-w-2xl">
              No es solo diseño. <span className="block text-[var(--primary)]">Es estrategia</span>
            </h2>

            <p className="text-body">
              Entendemos cómo funciona una marca personal y qué necesita para convertir visitas en clientes.
            </p>

            <p className="text-small max-w-2xl">
              Sabemos cómo estructurar tu web para que quede claro:
              <span className="block">qué haces, a quién ayudas y por qué deberían elegirte.</span>
            </p>

            <blockquote className="max-w-2xl rounded-[8px] border-l-2 border-[var(--primary)] px-4 py-3">
              No diseñamos solo webs bonitas.
              <span className="block">Diseñamos webs que venden.</span>
            </blockquote>
          </div>

          <div className="hidden lg:block" />
        </div>
      </section>

      {/* COMPARATIVA */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col items-center text-center">
            <p className="eyebrow">Comparativa</p>
            <h2 className="section-title max-w-4xl">
              La diferencia entre tener presencia online
               <span className="block text-[var(--primary)]">y generar oportunidades reales</span>
            </h2>
          </header>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[12px] border border-black/10 p-6">
              <h3 className="mb-5 font-bold">Web genérica</h3>

              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  <span>Web sin estrategia</span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  <span>Mensaje genérico</span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  <span>No transmite valor</span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  <span>No convierte</span>
                </li>
              </ul>
            </article>

            <article className="rounded-[12px] border border-[var(--primary)] p-6">
              <h3 className="mb-5 font-bold">FITYX DIGITAL</h3>

              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  <span>Web estratégica enfocada a clientes </span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  <span>Mensaje claro y directo </span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  <span>Posicionamiento como experto </span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  <span>Generación de oportunidades reales</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col items-center text-center">
            <p className="eyebrow">Resultados</p>
            <h2 className="section-title">
              Lo que cambia en tu marca personal
            </h2>
          </header>

          <ul className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Más oportunidades de negocio</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Mayor autoridad en tu sector </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Mejor posicionamiento </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Diferenciación clara </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4 md:col-span-2">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Más visibilidad online</span>
            </li>
          </ul>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col items-center gap-4 text-center">
            <p className="eyebrow">Qué incluye</p>
            <h2 className="section-title">Todo lo que necesitas
              <span className="block text-[var(--primary)]">para conseguir clientes desde tu web</span>
            </h2>
          </header>

          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Web adaptada a tu marca personal</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Definición clara de tu propuesta</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>
                Estructura pensada para tus servicios
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Diseño profesional alineado con tu imagen </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Web rápida y optimizada </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>SEO básico para visibilidad </span>
            </li>

            
          </ul>
        </div>
      </section>

      {/* PROCESO */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col gap-4">
            <p className="eyebrow">Proceso</p>

            <h2 className="section-title max-w-4xl">
              Así creamos una web que te trae clientes
            </h2>
          </header>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">01</p>
              <h3 className="card-title">Entendemos tu marca y tu propuesta</h3>
              <p className="text-small">
                Analizamos qué haces, a quién ayudas y cómo comunicarlo para atraer a tus clientes ideales.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">02</p>
              <h3 className="card-title">Diseñamos una web pensada para posicionarte y convertir</h3>
              <p className="text-small">
                Creamos una web clara y profesional que transmite tu valor, conecta con tu audiencia y genera confianza.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">03</p>
              <h3 className="card-title">Lanzamos tu web lista para atraer clientes</h3>
              <p className="text-small">
                Publicamos tu web optimizada para que te encuentren, confíen en ti y den el paso de contactarte.
              </p>
            </article>

            
          </div>
        </div>
      </section>

      {/* MENSAJE */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h2 className="section-title max-w-4xl">
            Tu conocimiento tiene valor.  <span className="text-[var(--primary)]">Tu web debería reflejarlo</span>
          </h2>

          <p className="text-body max-w-2xl">
            Tu web debería ayudarte a comunicar mejor lo que haces y convertir visitas en oportunidades reales          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-4">
              <h2 className="section-title max-w-4xl">
                Diseño web para marcas personales      <span className="text-[var(--primary)]">  en Girona y Cataluña</span>
              </h2>

              <p className="text-body max-w-2xl">
                Creamos páginas web pensadas paraposicionarte como experto y atraer clientes.
              </p>
            </header>

            <div className="flex flex-col items-start gap-2 pt-2">
              <Link className="btn-primary text-sm" href="/contacto">
                QUIERO MÁS OPORTUNIDADES
              </Link>
              <p className="text-xs">Respuesta en menos de 24 horas</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}