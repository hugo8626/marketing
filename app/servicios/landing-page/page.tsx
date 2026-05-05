// FILE: app/servicios/landing-page/page.tsx
//
// PAGE: LANDING PAGE
//
// Página del servicio de landing pages.
// Contiene el contenido completo y el SEO de la página.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/* ========================================
   SEO
======================================== */

export const metadata: Metadata = {
  title: "Precio landing page en Girona | Landing desde 499€",
  description:
    "Diseño de landing pages en Girona desde 499€. Creamos páginas pensadas para convertir visitas en clientes, conseguir contactos y mejorar campañas.",
  alternates: {
    canonical: "/servicios/landing-page",
  },
  openGraph: {
    title: "Precio landing page en Girona | Landing desde 499€",
    description:
      "Landing pages desde 499€ para negocios que quieren convertir tráfico en contactos, reservas o ventas.",
    url: "/servicios/landing-page",
    siteName: "Fityx Digital",
    images: [
      {
        url: "/landing.jpg",
        width: 1200,
        height: 630,
        alt: "Landing page en Girona desde 499€",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

/* ========================================
   PAGE
======================================== */

export default function LandingPage() {
  return (
    <main>
      {/* HERO */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-5">
              <p className="eyebrow">Diseño de landing pages en Girona</p>

              <h1 className="hero-title max-w-4xl">
                Landing pages pensadas para convertir visitas en clientes
              </h1>

              <p className="text-body max-w-2xl">
                No necesitas más tráfico.
                <span className="block">
                  Necesitas que el tráfico que tienes convierta.
                </span>
              </p>

              <p className="text-body max-w-2xl">
                Creamos landing pages diseñadas para una sola cosa:
                <span className="block">que el usuario actúe.</span>
              </p>
            </header>

            <ul className="flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Más contactos cualificados</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Más reservas directas</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Más resultados medibles</span>
              </li>
            </ul>

            <div className="flex flex-col items-start gap-3">
              <Link href="/contacto" className="btn-black text-sm">
                QUIERO MI LANDING →
              </Link>

              <p className="text-xs">Respuesta en menos de 24h</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/landing.jpg"
              alt="Landing page mostrada en un portátil"
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
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <header className="flex max-w-3xl flex-col gap-4">
            <h2 className="section-title">¿Qué es una landing page?</h2>

            <p className="text-body max-w-2xl">
              Es una página diseñada para una sola acción: contactar, reservar o
              comprar. A diferencia de una web tradicional, elimina
              distracciones y guía al usuario directamente al objetivo.
            </p>
          </header>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-[8px] bg-white p-5">
              <h3 className="card-title pt-5 text-center">
                <span className="mr-2 mb-4 text-[var(--primary)]">✓</span>
                Una sola página
              </h3>
            </article>

            <article className="rounded-[8px] bg-white p-5">
              <h3 className="card-title pt-5 text-center">
                <span className="mr-2 mb-4 text-[var(--primary)]">✓</span>
                Un solo objetivo
              </h3>
            </article>

            <article className="rounded-[8px] bg-white p-5">
              <h3 className="card-title pt-5 text-center">
                <span className="mr-2 mb-4 text-[var(--primary)]">✓</span>
                Sin distracciones
              </h3>
            </article>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">El problema</p>

            <h2 className="section-title max-w-3xl">
              Muchas páginas reciben visitas…
              <span className="block">pero no generan clientes</span>
            </h2>

            <p className="text-body">
              El problema no es el tráfico.
              <span className="block">
                Es que la página no está pensada para vender.
              </span>
            </p>
          </header>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">El usuario entra y no sabe qué hacer</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">Hay demasiada información</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">No hay un objetivo claro</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">No genera contactos</p>
            </div>

            <p className="text-body pt-2 font-semibold">
              Si la página no guía, el usuario se va.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="order-1 flex flex-col gap-4 lg:order-2">
            <p className="eyebrow">La solución</p>

            <h2 className="section-title max-w-3xl">
              Una landing page pensada para que el usuario compre
            </h2>
          </div>

          <div className="order-2 flex flex-col gap-3 lg:order-1">
            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-xs text-[var(--primary)]">
                ✓
              </span>
              <p className="text-small">Mensaje claro desde el primer segundo</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-xs text-[var(--primary)]">
                ✓
              </span>
              <p className="text-small">Estructura directa sin distracciones</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-xs text-[var(--primary)]">
                ✓
              </span>
              <p className="text-small">Botones visibles y bien ubicados</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-xs text-[var(--primary)]">
                ✓
              </span>
              <p className="text-small">Enfoque en una sola acción</p>
            </div>

            <p className="text-body">Cada elemento tiene un objetivo: vender más.</p>
          </div>
        </div>
      </section>

      {/* DIFERENCIA */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-5">
          <h2 className="section-title max-w-4xl">
            No es una página bonita. Es una página que funciona.
          </h2>

          <p className="text-body max-w-2xl">
            Diseñamos cada landing para que el usuario entienda rápido, confíe y
            dé el siguiente paso: comprar o contactarte.
          </p>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(220px,320px)_1fr] lg:items-center lg:gap-14">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">Resultados</p>

            <h2 className="section-title">
              Lo que consigues con una landing bien planteada
            </h2>
          </header>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-xs text-[var(--primary)]">
                ✓
              </span>
              <p className="text-small">Más contactos</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-xs text-[var(--primary)]">
                ✓
              </span>
              <p className="text-small">Más reservas</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-xs text-[var(--primary)]">
                ✓
              </span>
              <p className="text-small">Más clientes</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-xs text-[var(--primary)]">
                ✓
              </span>
              <p className="text-small">Mejor resultado de tus campañas</p>
            </div>

            <p className="text-body">No es más tráfico… son mejores resultados.</p>
          </div>
        </div>
      </section>

      {/* DETALLE */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(220px,320px)_1fr] lg:items-start lg:gap-14">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">Detalle</p>

            <h2 className="section-title">
              Qué hace que esta landing funcione de verdad
            </h2>
          </header>

          <div className="flex flex-col gap-4">
            {[
              "Diseño enfocado en una sola acción",
              "Estructura pensada para guiar al usuario",
              "Mensajes claros que llevan al contacto",
              "Jerarquía visual que dirige la atención",
              "Adaptada a móvil para no perder clientes",
              "Carga rápida para evitar abandonos",
              "Preparada para campañas (Google Ads y redes)",
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

      {/* SEO */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <h2 className="section-title">Preparada para que te encuentren</h2>

          <p className="text-body max-w-2xl">
            Organizamos tu página para que Google la entienda y pueda mostrarla
            cuando alguien busque lo que ofreces.
          </p>
        </div>
      </section>

      {/* INVERSIÓN */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
          <header className="flex flex-col items-center gap-4">
            <h2 className="section-title">
              Elige cómo quieres que tu landing te genere clientes
            </h2>

            <p className="text-body max-w-2xl">
              Una buena landing no informa, hace que el usuario actúe.
            </p>
          </header>

          <div className="grid w-full gap-6 lg:grid-cols-2">
            {/* CARD 1 */}
            <article className="flex h-full flex-col rounded-[8px] border border-[#E5E5E5] bg-white p-8 text-left">
              <div className="mb-6 flex flex-col gap-2">
                <h3 className="card-title">Landing básica</h3>

                <p className="font-['ClashDisplay'] text-4xl font-semibold text-black">
                  Precio: 499€
                </p>
              </div>

              <ul className="mb-8 flex flex-col gap-3">
                {[
                  "Diseño profesional adaptado a tu negocio",
                  "Estructura clara con un objetivo definido",
                  "Landing enfocada en una sola acción (contactar, reservar o comprar)",
                  "Integración de contacto (formulario + WhatsApp)",
                  "Adaptada a móvil, tablet y ordenador",
                  "Base SEO para empezar a posicionar en Google",
                  "Optimización de velocidad",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-small">
                    <span className="text-[var(--primary)]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-body mb-2 text-sm">Además incluido</p>

              <ul className="mb-8 flex flex-col gap-3">
                {[
                  "Asesoramiento inicial para enfocar tu landing",
                  "Revisión tras la entrega",
                  "Soporte durante los primeros días",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-small">
                    <span className="text-[var(--primary)]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contacto" className="btn-black mt-auto text-sm">
                QUIERO ESTA LANDING
              </Link>
            </article>

            {/* CARD 2 */}
            <article className="flex h-full flex-col rounded-[8px] border border-[var(--primary)] bg-white p-8 text-left shadow-lg">
              <div className="mb-6 flex flex-col gap-2">
                <span className="w-fit rounded-[4px] bg-[var(--primary)] px-2 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-white">
                  Recomendado
                </span>

                <h3 className="card-title">Landing Premium</h3>

                <p className="font-['ClashDisplay'] text-4xl font-semibold text-black">
                  Precio: 570€
                </p>
              </div>

              <p className="text-body mb-2 text-sm">NIVEL CONVERSIÓN</p>

              <ul className="mb-8 flex flex-col gap-3">
                {[
                  "Todo lo anterior",
                  "Estructura optimizada para maximizar conversiones",
                  "Copywriting estratégico (mensajes que conectan y venden)",
                  "Flujo del usuario diseñado para guiar al contacto",
                  "Jerarquía visual enfocada en resultados",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-small">
                    <span className="text-[var(--primary)]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-body mb-2 text-sm">NIVEL PERFORMANCE</p>

              <ul className="mb-8 flex flex-col gap-3">
                {[
                  "Preparada para campañas (Google Ads, Meta Ads)",
                  "Preparada para medir resultados (conversiones, clics, leads)",
                  "Optimización para mejorar rendimiento de campañas",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-small">
                    <span className="text-[var(--primary)]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-body mb-2 text-sm">Extra incluido</p>

              <ul className="mb-8 flex flex-col gap-3">
                {[
                  "Análisis rápido de tu cliente ideal",
                  "Recomendaciones para mejorar resultados",
                  "Ajustes iniciales tras lanzamiento",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-small">
                    <span className="text-[var(--primary)]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-body mb-8 text-sm">
                Disponibilidad limitada
                <span className="block">
                  Solo acepto un número reducido de proyectos al mes
                </span>
              </p>

              <Link href="/contacto" className="btn-black mt-auto text-sm">
                QUIERO MÁS CLIENTES
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-14 md:gap-16 lg:gap-20">
          <header className="flex max-w-4xl flex-col gap-5">
            <p className="eyebrow">
              Así diseñamos una landing pensada para conseguir clientes
            </p>

            <h2 className="section-title">
              Sin complicaciones. Sin pasos innecesarios.
              <span className="block">Desde el primer día.</span>
            </h2>
          </header>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
            <article className="flex flex-col gap-3">
              <span className="font-['ClashDisplay'] text-4xl font-semibold text-[var(--primary)] opacity-30">
                01
              </span>

              <h3 className="card-title text-left text-base">
                Entendemos tu negocio y objetivo
              </h3>

              <p className="text-body text-sm text-[var(--text-muted)]">
                Analizamos qué necesitas conseguir (contactos, reservas, ventas)
                y cómo debe funcionar tu landing.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <span className="font-['ClashDisplay'] text-4xl font-semibold text-[var(--primary)] opacity-30">
                02
              </span>

              <h3 className="card-title text-left text-base">
                Definimos estructura y mensaje
              </h3>

              <p className="text-body text-sm text-[var(--text-muted)]">
                Organizamos la página para que el usuario entienda rápido y sepa
                qué hacer. Cada sección tiene un objetivo: conseguir clientes.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <span className="font-['ClashDisplay'] text-4xl font-semibold text-[var(--primary)] opacity-30">
                03
              </span>

              <h3 className="card-title text-left text-base">
                Diseñamos y lanzamos tu landing
              </h3>

              <p className="text-body text-sm text-[var(--text-muted)]">
                Creamos una landing clara, rápida y lista para generar
                resultados desde el primer día.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          <h2 className="section-title max-w-3xl">
            Si quieres una página que no solo se vea bien,
            <span className="block">
              sino que te ayude a conseguir clientes,
            </span>
            <span className="block">esta es la opción.</span>
          </h2>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link href="/contacto" className="btn-black text-sm">
              QUIERO MI LANDING →
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