// FILE: app/servicios/optimizacion-web/page.tsx
//
// PAGE: OPTIMIZACIÓN WEB
//
// Página del servicio de optimización web.
// Contiene el contenido completo y el SEO de la página.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/* ========================================
   SEO
======================================== */

export const metadata: Metadata = {
  title: "Precio optimización web en Girona | Mejora tu web por 270€",
  description:
    "Optimización web en Girona por 270€. Mejoramos claridad, velocidad, SEO y conversión para que tu página transmita confianza y genere más clientes.",
  alternates: {
    canonical: "/servicios/optimizacion-web",
  },
  openGraph: {
    title: "Precio optimización web en Girona | Mejora tu web por 270€",
    description:
      "Mejoramos tu web por 270€ para que sea más clara, rápida y esté pensada para convertir visitas en clientes.",
    url: "/servicios/optimizacion-web",
    siteName: "Fityx Digital",
    images: [
      {
        url: "/optimaweb.jpeg",
        width: 1200,
        height: 630,
        alt: "Optimización web en Girona por 270€",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

/* ========================================
   PAGE
======================================== */

export default function OptimizacionWebPage() {
  return (
    <main>
      {/* HERO */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-5">
              <p className="eyebrow">Optimización web en Girona</p>

              <h1 className="hero-title max-w-4xl">
                Mejoramos tu página para que funcione mejor
              </h1>

              <p className="text-body max-w-2xl">
                Mejoramos tu web para que sea más clara, más rápida y convierta
                mejor.
              </p>
            </header>

            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Posicione mejor en Google</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Transmita confianza desde el primer segundo</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Convierta visitas en clientes</span>
              </li>
            </ul>

            <div className="flex flex-col items-start gap-3">
              <Link href="/contacto" className="btn-black text-sm">
                QUIERO MEJORAR MI WEB →
              </Link>

              <p className="text-xs">Respuesta en menos de 24h</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/optimaweb.jpeg"
              alt="Persona revisando métricas y rendimiento de una web"
              width={640}
              height={440}
              sizes="(max-width: 1024px) 100vw, 420px"
              className="h-auto w-full max-w-[520px] rounded-[12px] bg-black/40 p-1 object-cover shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">El problema</p>

            <h2 className="section-title max-w-3xl">
              Tener una web no significa que esté funcionando
            </h2>
          </header>

          <div className="flex flex-col gap-3">
            {[
              "No aparece en Google",
              "No transmite confianza",
              "No guía al usuario",
              "Es lenta",
              "No convierte visitas en clientes",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4"
              >
                <span className="text-sm text-[#999]">✕</span>
                <p className="text-small">{item}</p>
              </div>
            ))}

            <p className="text-body pt-2 text-sm italic">
              Si no está optimizada, no funciona.
            </p>
          </div>
        </div>
      </section>

      {/* MENSAJE */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <h2 className="section-title max-w-4xl">
            El problema no es tener una web.
            <span className="block">
              Es que no esté pensada para conseguir clientes.
            </span>
          </h2>

          <p className="text-body max-w-2xl">
            Muchas webs están hechas sin estrategia, no guían al usuario y no
            ayudan a tomar una decisión.
          </p>

          <p className="rounded-[8px] bg-[#F5F5F5] px-5 py-4 text-sm italic">
            “Por eso no generan clientes.”
          </p>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="order-2 flex flex-col gap-3">
            {[
              "La claridad de tu mensaje (que se entienda lo que haces)",
              "La estructura (que guíe al usuario paso a paso)",
              "El diseño (que genere confianza)",
              "La velocidad (para no perder oportunidades)",
              "El SEO (para empezar a aparecer en Google)",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-xs text-[var(--primary)]">
                  ✓
                </span>
                <p className="text-small">{item}</p>
              </div>
            ))}
          </div>

          <div className="order-1 flex flex-col gap-4">
            <p className="eyebrow">La solución</p>

            <h2 className="section-title max-w-3xl">
              Analizamos qué falla y optimizamos tu web
            </h2>
          </div>
        </div>
      </section>

      {/* COMPARATIVA */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-12">
          <header className="flex flex-col gap-4">
            <h2 className="section-title max-w-4xl">
              Una web sin optimizar vs una web optimizada
            </h2>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              {["Confusa", "Lenta", "No transmite confianza", "No genera contactos"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4"
                  >
                    <span className="text-sm text-[#999]">✕</span>
                    <p className="text-small">{item}</p>
                  </div>
                ),
              )}
            </div>

            <div className="flex flex-col gap-4">
              {["Clara", "Rápida", "Profesional", "Pensada para convertir"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-xs text-[var(--primary)]">
                      ✓
                    </span>
                    <p className="text-small">{item}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-14 md:gap-16 lg:gap-20">
          <header className="flex max-w-4xl flex-col gap-5">
            <p className="eyebrow">Proceso de optimización</p>

            <h2 className="section-title">
              Así mejoramos tu web para que genere clientes
            </h2>
          </header>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
            <article className="flex flex-col gap-3">
              <span className="font-['ClashDisplay'] text-4xl font-semibold text-[var(--primary)] opacity-30">
                01
              </span>

              <h3 className="card-title text-left text-base">
                Analizamos tu web y detectamos qué falla
              </h3>

              <p className="text-body text-sm text-[var(--text-muted)]">
                Revisamos estructura, mensajes y rendimiento para entender por
                qué no está generando resultados.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <span className="font-['ClashDisplay'] text-4xl font-semibold text-[var(--primary)] opacity-30">
                02
              </span>

              <h3 className="card-title text-left text-base">
                Definimos las mejoras con mayor impacto
              </h3>

              <p className="text-body text-sm text-[var(--text-muted)]">
                Priorizamos los cambios que realmente pueden mejorar la
                conversión y la captación de clientes.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <span className="font-['ClashDisplay'] text-4xl font-semibold text-[var(--primary)] opacity-30">
                03
              </span>

              <h3 className="card-title text-left text-base">
                Aplicamos y optimizamos para generar resultados
              </h3>

              <p className="text-body text-sm text-[var(--text-muted)]">
                Implementamos mejoras y ajustamos lo necesario para que tu web
                empiece a funcionar.
              </p>
            </article>
          </div>

          <p className="text-small text-[var(--text-muted)]">
            Sin tecnicismos. Sin complicaciones. Solo cambios que generan
            resultados.
          </p>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(220px,360px)_1fr] lg:items-start lg:gap-14">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">Resultados</p>

            <h2 className="section-title max-w-3xl">
              Lo que cambia cuando
              <span className="block">optimizas tu web</span>
            </h2>
          </header>

          <div className="flex flex-col gap-4">
            {[
              "Mejora de la estructura para que el usuario entienda tu web",
              "Optimización de mensajes para comunicar mejor y generar confianza",
              "Mejora de velocidad y experiencia de usuario",
              "Ajustes SEO para mejorar posicionamiento en Google",
              "Optimización del recorrido y llamadas a la acción para aumentar contactos",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4"
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

      {/* DETALLE */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(220px,360px)_1fr] lg:items-start lg:gap-14">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">Detalle</p>

            <h2 className="section-title max-w-3xl">
              Qué incluye la
              <span className="block">optimización</span>
            </h2>
          </header>

          <div className="flex flex-col gap-4">
            {[
              "Auditoría completa de tu web",
              "Mejora de estructura",
              "Optimización de textos",
              "Ajustes de diseño",
              "Optimización de velocidad",
              "SEO básico",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4"
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

      {/* PRECIO */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2 className="section-title">
            Optimiza tu web y empieza a generar resultados
          </h2>

          <p className="font-['ClashDisplay'] text-5xl leading-none font-semibold text-black sm:text-6xl md:text-7xl">
            Precio: 270€
          </p>

          <p className="text-body max-w-2xl">
            No necesitas una web nueva.
            <span className="block">
              Necesitas que la que ya tienes funcione.
            </span>
          </p>

          <Link href="/contacto" className="btn-black text-sm">
            QUIERO MEJORAR MI WEB →
          </Link>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2 className="section-title">
            Tu web ya existe. Ahora haz que funcione.
          </h2>

          <Link href="/contacto" className="btn-black text-sm">
            QUIERO MI DIAGNÓSTICO →
          </Link>

          <p className="text-xs text-[var(--text-muted)]">
            Te respondemos en menos de 24h
          </p>
        </div>
      </section>
    </main>
  );
}