// FILE: app/servicios/one-page/page.tsx
//
// PAGE: ONE PAGE
//
// Página del servicio One Page.
// Contiene el contenido completo y el SEO de la página.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/* ========================================
   SEO
======================================== */

export const metadata: Metadata = {
  title: "Precio página web económica en Girona | One Page desde 430€",
  description:
    "Página web One Page en Girona desde 430€. Diseño web económico, profesional, claro y pensado para empezar a conseguir clientes.",
  alternates: {
    canonical: "/servicios/one-page",
  },
  openGraph: {
    title: "Precio página web económica en Girona | One Page desde 430€",
    description:
      "Creamos páginas web One Page desde 430€ para negocios en Girona que quieren presencia profesional y captar clientes.",
    url: "/servicios/one-page",
    siteName: "Fityx Digital",
    images: [
      {
        url: "/plantas.jpg",
        width: 1200,
        height: 630,
        alt: "Página web One Page en Girona desde 430€",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};
/* ========================================
   PAGE
======================================== */

export default function OnePagePage() {
  return (
    <main>
      {/* HERO */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-5">
              <p className="eyebrow">Diseño web básico profesional en Girona</p>

              <h1 className="hero-title max-w-4xl">
                Página web en Girona económica para empezar
                <span className="block">
                  a conseguir clientes desde el primer día
                </span>
              </h1>

              <p className="text-body max-w-2xl">
                Si no tienes web, estás perdiendo oportunidades.
              </p>

              <p className="text-body max-w-2xl">
                Si tienes una y no te genera contactos, no está haciendo su
                trabajo.
              </p>

              <p className="text-small max-w-2xl text-[var(--text-muted)]">
                Creamos páginas web One Page en Girona, claras, rápidas y
                optimizadas para convertir visitas en clientes.
              </p>
            </header>

            <ul className="flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Presencia profesional desde el inicio</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Mensaje claro que tu cliente entiende</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Estructura pensada para generar contactos</span>
              </li>
            </ul>

            <div className="flex flex-col items-start gap-3">
              <Link href="/contacto" className="btn-black text-sm">
                QUIERO MI WEB →
              </Link>

              <p className="text-xs">Respuesta en menos de 24h</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/plantas.jpg"
              alt="Ordenador portátil mostrando una web one page profesional"
              width={640}
              height={440}
              sizes="(max-width: 1024px) 100vw, 420px"
              className="h-auto w-full max-w-[520px] rounded-[12px] bg-black/40 p-1 object-cover shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* CONCEPTO */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-14">
          <div className="flex flex-col gap-5">
            <header className="flex max-w-3xl flex-col gap-4">
              <p className="eyebrow">Concepto</p>

              <h2 className="section-title">
                ¿Qué es una página web One Page?
              </h2>

              <p className="text-body max-w-2xl">
                Una One Page es una página web profesional en una sola
                estructura, pensada para que el usuario entienda tu negocio
                rápido y contacte sin complicaciones. Es la forma más rápida de
                tener presencia online sin invertir de más, pero con una base
                bien planteada.
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-3">
              <article className="rounded-[8px] bg-white p-5">
                <h3 className="card-title p-6 text-center">
                  <span className="text-[var(--primary)]">✓</span> Toda la
                  información en una sola página
                </h3>
              </article>

              <article className="rounded-[8px] bg-white p-5">
                <h3 className="card-title p-6 text-center">
                  <span className="text-[var(--primary)]">✓</span> Navegación
                  simple y sin distracciones
                </h3>
              </article>

              <article className="rounded-[8px] bg-white p-5">
                <h3 className="card-title p-6 text-center">
                  <span className="text-[var(--primary)]">✓</span> Mensaje claro
                  orientado a captar clientes
                </h3>
              </article>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-6">
            <header className="flex flex-col gap-3">
              <h2 className="section-title">¿Cómo funciona?</h2>
            </header>

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              <article className="flex flex-col gap-2">
                <p className="section-title text-[var(--primary)]">1</p>

                <h3 className="card-title text-left text-base">
                  El usuario entiende en segundos qué haces
                </h3>

                <p className="text-body">
                  Tu mensaje es claro desde el primer momento y conecta con lo
                  que está buscando.
                </p>
              </article>

              <article className="flex flex-col gap-2">
                <p className="section-title text-[var(--primary)]">2</p>

                <h3 className="card-title text-left text-base">
                  Generas confianza y guías la decisión
                </h3>

                <p className="text-body">
                  La estructura y el contenido transmiten seguridad y llevan al
                  usuario paso a paso.
                </p>
              </article>

              <article className="flex flex-col gap-2">
                <p className="section-title text-[var(--primary)]">3</p>

                <h3 className="card-title text-left text-base">
                  El usuario da el paso y contacta contigo
                </h3>

                <p className="text-body">
                  Todo está pensado para facilitar la acción: reservar, escribir
                  o llamar.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* PERFIL IDEAL */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">Perfil ideal</p>

            <h2 className="section-title">Esta opción es para ti si…</h2>
          </header>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-sm text-[var(--primary)]">
                ✓
              </span>
              <p className="text-body">
                Estás empezando y necesitas una página web económica
              </p>
            </article>

            <article className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-sm text-[var(--primary)]">
                ✓
              </span>
              <p className="text-body">
                No tienes web o la que tienes no te genera clientes
              </p>
            </article>

            <article className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-sm text-[var(--primary)]">
                ✓
              </span>
              <p className="text-body">
                Quieres algo rápido, claro y profesional
              </p>
            </article>

            <article className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-sm text-[var(--primary)]">
                ✓
              </span>
              <p className="text-body">
                Necesitas presencia online sin complicaciones
              </p>
            </article>
          </div>
        </div>

        <p className="mt-8 text-center font-bold">
          Si tu web no consigue esto, no está funcionando
        </p>
      </section>

      {/* PROBLEMA */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-10">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">El problema</p>

            <h2 className="section-title max-w-3xl">
              Muchos negocios empiezan… pero su web no les ayuda a vender
            </h2>
          </header>

          <div className="flex flex-col gap-3">
            {[
              "No tienes web → no existes en Google",
              "Usas redes como única presencia → dependes de terceros",
              "No transmites profesionalidad → pierdes confianza",
              "No se entiende lo que haces → no te contactan",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[8px] bg-[#F5F5F5] px-5 py-4"
              >
                <span className="text-sm text-[#999]">✕</span>
                <p className="text-small">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-body font-semibold">
            Si no está claro, no genera clientes.
          </p>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-10">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">La solución</p>

            <h2 className="section-title max-w-3xl">
              Una página web simple, pero pensada para conseguir clientes
            </h2>
          </header>

          <div className="flex flex-col gap-3">
            {[
              "Estructura clara que guía al usuario",
              "Mensaje directo que conecta con tu cliente",
              "Diseño profesional que transmite confianza",
              "Optimización para convertir visitas en contactos",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-xs text-[var(--primary)]">
                  ✓
                </span>
                <p className="text-small">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIVA */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col items-center text-center">
            <p className="eyebrow">Comparativa</p>

            <h2 className="section-title max-w-4xl">
              La diferencia entre tener web… y tener clientes
            </h2>
          </header>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[12px] border border-black/10 p-6">
              <h3 className="mb-5 font-bold">Web básica</h3>

              <ul className="flex flex-col gap-4">
                {[
                  "Información desordenada",
                  "Diseño sin objetivo",
                  "No genera contactos",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4"
                  >
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                      X
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[12px] border border-[var(--primary)] p-6">
              <h3 className="mb-5 font-bold">Web One Page Fityx</h3>

              <ul className="flex flex-col gap-4">
                {[
                  "Mensaje claro y directo",
                  "Pensada para convertir",
                  "Enfocada en conseguir clientes",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4"
                  >
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-sm text-[var(--primary)]">
                      ✔
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <p className="text-body mt-10 text-center text-lg font-bold">
            Y eso es lo que marca la diferencia.
          </p>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">Resultados</p>

            <h2 className="section-title">
              Lo que consigues con una web bien planteada
            </h2>
          </header>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              "Presencia profesional desde el primer día",
              "Más confianza en tu negocio",
              "Mejor percepción de tu marca",
              "Base para empezar a captar clientes",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-sm text-[var(--primary)]">
                  ✓
                </span>
                <p className="text-body">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETALLE */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">Detalle</p>

            <h2 className="section-title">
              Qué incluye tu página web económica en Girona
            </h2>
          </header>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              "Diseño web personalizado adaptado a tu negocio",
              "Estructura estratégica pensada para generar contactos",
              "Secciones clave (Inicio, Sobre ti, Servicios y Contacto)",
              "Botón de WhatsApp y formulario para facilitar el contacto",
              "Web adaptada a móvil, tablet y ordenador",
              "Optimización SEO básica para empezar a aparecer en Google",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-sm text-[var(--primary)]">
                  ✓
                </span>
                <p className="text-body">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVERSIÓN */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <header className="flex flex-col items-center gap-4">
            <p className="eyebrow">Inversión</p>

            <h2 className="section-title">Página web económica en Girona</h2>

            <p className="font-['ClashDisplay'] text-5xl leading-none font-semibold text-black sm:text-6xl md:text-7xl">
              Desde 430€
            </p>

            <p className="text-body">Precio cerrado. Sin sorpresas.</p>
          </header>

          <Link href="/contacto" className="btn-black text-sm">
            QUIERO MI ONE PAGE
          </Link>

          <p className="text-center">
            Limitamos los proyectos cada mes para mantener la calidad en cada
            trabajo.
          </p>
        </div>
      </section>

      {/* PROCESO */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-14 md:gap-16 lg:gap-20">
          <header className="flex max-w-3xl flex-col gap-5">
            <p className="eyebrow">Nuestro proceso</p>

            <h2 className="section-title">
              Así creamos una web que te trae clientes
            </h2>
          </header>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
            <article className="flex flex-col gap-3">
              <span className="font-['ClashDisplay'] text-4xl font-semibold text-[var(--primary)] opacity-30">
                01
              </span>

              <h3 className="card-title text-left text-base">
                Entendemos tu negocio y definimos la estrategia
              </h3>

              <p className="text-body text-sm text-[var(--text-muted)]">
                Analizamos tu situación, objetivos y tipo de cliente para crear
                una web con sentido.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <span className="font-['ClashDisplay'] text-4xl font-semibold text-[var(--primary)] opacity-30">
                02
              </span>

              <h3 className="card-title text-left text-base">
                Diseñamos una web pensada para convertir
              </h3>

              <p className="text-body text-sm text-[var(--text-muted)]">
                Creamos una web clara, rápida y estructurada para guiar al
                usuario y generar contactos.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <span className="font-['ClashDisplay'] text-4xl font-semibold text-[var(--primary)] opacity-30">
                03
              </span>

              <h3 className="card-title text-left text-base">
                Lanzamos tu web lista para generar resultados
              </h3>

              <p className="text-body text-sm text-[var(--text-muted)]">
                Publicamos tu web optimizada para atraer visitas y convertirlas
                en oportunidades reales.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <h2 className="section-title max-w-2xl">
            Si necesitas una web clara, profesional y lista para empezar,
            <span className="block">esta es la mejor opción.</span>
          </h2>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link href="/contacto" className="btn-primary text-sm">
              QUIERO MI WEB →
            </Link>

            <Link
              href="/contacto"
              className="border border-black px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white"
            >
              QUIERO UNA PROPUESTA
            </Link>
          </div>

          <p className="text-xs text-[var(--text-muted)]">
            Te respondemos en menos de 24h
          </p>
        </div>
      </section>
    </main>
  );
}