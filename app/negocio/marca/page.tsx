/**
 * FILE: app/negocio/marca/page.tsx
 *
 * PAGE: NEGOCIO marca
 *
 * Página de captación para negocios de marca.
 * Mantiene el texto original del usuario y mejora
 * estructura, semántica y responsive.
 */

import Image from "next/image";
import Link from "next/link";

export default function NegocioMarcaPage() {
  return (
    <>
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-6">
              <p className="eyebrow">
               Diseño web para marca personal en Girona y Cataluña
              </p>

              <h1 className="hero-title max-w-3xl">
                Convierte tu conocimiento{" "}
                <span className="text-[var(--primary)]">
                  en oportunidades.
                </span>
              </h1>

              <p className="text-body max-w-2xl">
                Creamos páginas web para coaches, consultores y profesionales independientes pensadas para posicionarte como experto,
                 generar confianza y convertir visitas en oportunidades reales de negocio.
              </p>
            </header>

            <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              <li className="rounded-[8px] bg-white p-4 text-sm">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                Más citas desde tu web
              </li>

              <li className="rounded-[8px] bg-white p-4 text-sm">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                Mejor posicionamiento como experto

              </li>

              <li className="rounded-[8px] bg-white p-4 text-sm">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                    Mayor claridad en tu propuesta
              </li>
            </ul>

            <div className="flex flex-col items-start gap-2">
              <Link className="btn-black text-sm" href="/contacto">
                QUIERO MAS CLIENTES →
              </Link>
              <p className="text-xs">Respuesta en menos de 24 horas</p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              

              <Image
                src="/marca.jpeg"
                alt="Preview web"
                width={450}
                height={300}
                className="mt-4 w-full max-w-[240px] rounded-[12px] border-2 border-black shadow-lg sm:max-w-[300px] lg:absolute lg:-bottom-14 lg:right-8 lg:mt-0 lg:max-w-[360px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">El problema</p>

            <h2 className="section-title max-w-2xl">
              Muchos profesionales tienen web…
                pero no les genera clientes.
              
            </h2>

            <p className="text-small max-w-xl">
            El visitante entra, no entiende tu valor y se va.</p>
          </header>

          <ul className="flex flex-col gap-3">
            <li className="rounded-[8px] bg-white p-4">
              <span className="mr-3 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              No queda claro qué servicios ofreces realmente

            </li>

            <li className="rounded-[8px] bg-white p-4">
              <span className="mr-3 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
                    Mensaje genérico que no conecta con nadie
            </li>

            <li className="rounded-[8px] bg-white p-4">
              <span className="mr-3 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              No transmite autoridad ni especialización


            </li>

            <li className="rounded-[8px] bg-white p-4">
              <span className="mr-3 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              No genera confianza para contratar

            </li>

            <li className="rounded-[8px] bg-white p-4">
              <span className="mr-3 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              No convierte visitas en contactos


            </li>
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="order-2 flex flex-col gap-4 lg:order-2">
            <p className="eyebrow">La solución</p>

            <h2 className="section-title max-w-xl">
              Una web diseñada para comunicar tu valor y facilitar que te contacten
             
            </h2>

            
          </div>

          <ul className="order-1 flex flex-col gap-3 lg:order-1">
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
                SEO para atraer oportunidades relevantes

              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-5">
            <p className="eyebrow">Por qué somos diferentes</p>

            <h2 className="section-title max-w-2xl">
              No es solo diseño. Es estrategia.
            </h2>

            <p className="text-body">Entendemos cómo funciona una marca
                 personal y qué necesita para convertir visitas en clientes.</p>

            <p className="text-small max-w-2xl">
             Sabemos cómo estructurar tu web para que quede claro 
             qué haces, a quién ayudas y por qué deberían elegirte.
            </p>

            <blockquote className="max-w-2xl rounded-[8px] border-l-2 border-[var(--primary)] px-4 py-3">
              No diseñamos webs bonitas. Diseñamos webs que venden.
            </blockquote>
          </div>

          <div />
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col items-center text-center">
            <p className="eyebrow">comparativa</p>
            <h2 className="section-title max-w-4xl">
              La diferencia entre tener presencia online y generar oportunidades reales

            </h2>
          </header>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[12px] border border-black/10 p-6">
              <h3 className="mb-5 font-bold">Web genérica</h3>

              <ul className="flex flex-col gap-4">
                <li className="rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  Web sin estrategia


                </li>

                <li className="rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  Mensaje genérico

                </li>

                <li className="rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                   No transmite valor
                </li>

                <li className="rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  No convierte


                </li>
              </ul>
            </article>

            <article className="rounded-[12px] border border-[var(--primary)] p-6">
              <h3 className="mb-5 font-bold">FITYX DIGITAL</h3>

              <ul className="flex flex-col gap-4">
                <li className="rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  Web estratégica FITYX DIGITAL
                </li>

                <li className="rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                    Mensaje claro

                </li>

                <li className="rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  Posicionamiento profesional


                </li>

                <li className="rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  Generación de clientes


                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col items-center text-center">
            <p className="eyebrow">Resultados</p>
            <h2 className="section-title">Lo que cambia en tu marca personal
</h2>
          </header>

          <ul className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Más oportunidades de negocio


            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Mayor autoridad


            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Mejor posicionamiento


            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Diferenciación clara


            </li>
            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Más visibilidad online
            </li>
            
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col items-center gap-4 text-center">
            <p className="eyebrow">Qué incluye</p>
            <h2 className="section-title">Todo lo que necesitas</h2>
          </header>

          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Web adaptada a tu marca personal


            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Estructura pensada para tus servicios


            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Secciones estratégicas (sobre ti, servicios, contacto)



            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Diseño profesional alineado con tu imagen


            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Web rápida y optimizada


            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
             SEO básico para visibilidad

            </li>
            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
             Definición clara de tu propuesta


            </li>
          </ul>
        </div>
      </section>

      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col gap-4">
            <p className="eyebrow">Cómo trabajamos</p>

            <h2 className="section-title max-w-4xl">
              Un proceso simple, claro y pensado para que tu web funcione desde el primer día.
            </h2>
          </header>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">01</p>
              <h3 className="card-title">Entendemos tu negocio</h3>
              <p className="text-small">
                Analizamos tu situación, objetivos y tipo de cliente.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">02</p>
              <h3 className="card-title">Definimos la estructura</h3>
              <p className="text-small">
                Organizamos tu web para que sea clara, lógica y orientada a conversión
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">03</p>
              <h3 className="card-title">Diseñamos y desarrollamos</h3>
              <p className="text-small">
                Creamos una web rápida, profesional y adaptada a tu negocio.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">04</p>
              <h3 className="card-title">Lanzamos y optimizamos</h3>
              <p className="text-small">
                Publicamos tu web lista para generar oportunidades reales.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h2 className="section-title max-w-4xl">
            Tu conocimiento tiene valor.
          </h2>

          <p className="text-body max-w-2xl">
            Tu web debería ayudarte a comunicarlo y convertirlo en oportunidades.
          </p>
        </div>
      </section>

      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-4">
              <h2 className="section-title max-w-4xl">
                Diseño web para marcas personales en Girona y Cataluña
              </h2>

              <p className="text-body max-w-2xl">
               Creamos páginas web para profesionales, coaches y consultores pensadas para posicionarte como experto, transmitir tu valor y generar oportunidades reales de negocio.
              </p>
            </header>

            <div className="flex flex-col items-start gap-2 pt-2">
              <Link className="btn-primary text-sm" href="/contacto">
                QUIERO MAS OPORTUNIDADES→
              </Link>
              <p className="text-xs">Respuesta en menos de 24 horas</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}