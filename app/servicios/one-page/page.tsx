// FILE: components/servicios/one-page/OnePageHeroSection.tsx
//
// SECTION: ONE PAGE SERVICE CONTENT
//
// Bloque completo de contenido para la página de servicio One Page.
// Incluye hero, concepto, perfil ideal, problema, solución,
// comparativa, resultados, detalle, inversión, proceso y CTA final.

import Image from "next/image";
import Link from "next/link";

export default function OnePageHeroSection() {
  return (
    <>
      {/* HERO */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-center lg:gap-16">
          {/* HERO CONTENT */}
          <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-5">
              <p className="eyebrow">PRESENCIA ONLINE SIMPLE</p>

              <h1 className="hero-title max-w-4xl">
                Tu web profesional
                <span className="block">en una sola página</span>
              </h1>

              <p className="text-body max-w-2xl">
                Creamos una web clara, rápida y bien estructurada para que
                presentes tu negocio y empieces a generar clientes.
              </p>

              <p className="text-small max-w-2xl text-[var(--text-muted)]">
                También conocida como web One Page, es la forma más simple y
                efectiva de tener presencia online profesional.
              </p>
            </header>

            <ul className="flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Presencia profesional</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Mensaje claro</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Lista para convertir</span>
              </li>
            </ul>

            <div className="flex flex-col items-start gap-3">
              <Link href="/contacto" className="btn-black text-sm">
                QUIERO MI WEB →
              </Link>

              <p className="text-xs">Respuesta en menos de 24h</p>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/plantas.jpg"
              alt="Ordenador portátil mostrando una web one page profesional"
              width={640}
              height={440}
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

              <h2 className="section-title">¿Qué es una One Page?</h2>

              <p className="text-body max-w-2xl">
                Una One Page es una web de una sola página donde el usuario
                encuentra toda la información haciendo scroll, sin necesidad de
                navegar entre diferentes secciones.
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-3">
              <article className="rounded-[8px] bg-white p-5">
                <div className="mb-4 text-[var(--primary)]">✓</div>
                <h3 className="card-title text-left text-base">
                  Todo en una sola página
                </h3>
              </article>

              <article className="rounded-[8px] bg-white p-5">
                <div className="mb-4 text-[var(--primary)]">✓</div>
                <h3 className="card-title text-left text-base">
                  Navegación simple
                </h3>
              </article>

              <article className="rounded-[8px] bg-white p-5">
                <div className="mb-4 text-[var(--primary)]">✓</div>
                <h3 className="card-title text-left text-base">
                  Información clara y directa
                </h3>
              </article>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-3">
              <h2 className="section-title">¿Cómo funciona?</h2>
            </header>

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              <article className="flex flex-col gap-2">
                <p className="section-title text-[var(--primary)]">1</p>
                <h3 className="card-title text-left text-base">
                  El usuario entra
                </h3>
              </article>

              <article className="flex flex-col gap-2">
                <p className="section-title text-[var(--primary)]">2</p>
                <h3 className="card-title text-left text-base">Hace scroll</h3>
              </article>

              <article className="flex flex-col gap-2">
                <p className="section-title text-[var(--primary)]">3</p>
                <h3 className="card-title text-left text-base">
                  Entiende tu negocio
                </h3>
              </article>

              <article className="flex flex-col gap-2">
                <p className="section-title text-[var(--primary)]">4</p>
                <h3 className="card-title text-left text-base">
                  Contacta contigo
                </h3>
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
            <h2 className="section-title">¿Es para ti?</h2>
          </header>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Estás empezando</p>
            </article>

            <article className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">No necesitas muchas secciones</p>
            </article>

            <article className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Quieres algo rápido y profesional</p>
            </article>

            <article className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Necesitas presencia online clara</p>
            </article>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-10">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">El problema</p>

            <h2 className="section-title max-w-3xl">
              Muchos negocios empiezan… pero no comunican bien
            </h2>
          </header>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 rounded-[8px] bg-[#F5F5F5] px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">No tienen web</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-[#F5F5F5] px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">Usan redes como única presencia</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-[#F5F5F5] px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">No transmiten profesionalidad</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-[#F5F5F5] px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">
                El cliente no entiende qué ofrecen
              </p>
            </div>
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
              Una web simple, pero bien pensada
            </h2>
          </header>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Estructura clara</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Mensaje directo</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Diseño profesional</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Optimizada para conversión</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIVA */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-12">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">Comparativa</p>

            <h2 className="section-title max-w-4xl">
              Una web básica vs una web estratégica
            </h2>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 rounded-[8px] bg-[#F5F5F5] px-5 py-4">
                <span className="text-sm text-[#999]">✕</span>
                <p className="text-small">Información desordenada</p>
              </div>

              <div className="flex items-center gap-3 rounded-[8px] bg-[#F5F5F5] px-5 py-4">
                <span className="text-sm text-[#999]">✕</span>
                <p className="text-small">Diseño sin intención</p>
              </div>

              <div className="flex items-center gap-3 rounded-[8px] bg-[#F5F5F5] px-5 py-4">
                <span className="text-sm text-[#999]">✕</span>
                <p className="text-small">No genera contactos</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                  ✓
                </span>
                <p className="text-small">Web One Page FITYX DIGITAL</p>
              </div>

              <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                  ✓
                </span>
                <p className="text-small">Clara, directa y profesional</p>
              </div>

              <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                  ✓
                </span>
                <p className="text-small">Pensada para convertir</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">Resultados</p>

            <h2 className="section-title">Lo que consigues</h2>
          </header>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Presencia profesional inmediata</p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Más confianza</p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Mejor percepción de tu negocio</p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Base para crecer en el futuro</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETALLE */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">Detalle</p>

            <h2 className="section-title">Qué incluye tu web</h2>
          </header>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Diseño personalizado</p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Estructura estratégica</p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">
                Secciones clave (servicios, sobre ti, contacto)
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Optimización básica SEO</p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">
                Adaptación a ordenador, tablet y móvil
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Carga rápida</p>
            </div>
          </div>
        </div>
      </section>

      {/* INVERSIÓN */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <header className="flex flex-col items-center gap-4">
            <p className="eyebrow">Inversión</p>

            <h2 className="section-title">Profesionalidad accesible</h2>

            <p className="font-['ClashDisplay'] text-5xl leading-none font-semibold text-black sm:text-6xl md:text-7xl">
              Desde 400€
            </p>

            <p className="text-body">Precio claro. Sin sorpresas.</p>
          </header>

          <Link href="/contacto" className="btn-black text-sm">
            QUIERO MI ONE PAGE →
          </Link>
        </div>
      </section>

      {/* PROCESO */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-14 md:gap-16 lg:gap-20">
          <header className="flex max-w-3xl flex-col gap-5">
            <p className="eyebrow">Cómo trabajamos</p>

            <h2 className="section-title">
              Un proceso simple, claro y pensado
              <span className="block">
                para que tu web funcione desde el primer día.
              </span>
            </h2>
          </header>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
            <article className="flex flex-col gap-3">
              <span className="font-['ClashDisplay'] text-4xl font-semibold text-[var(--primary)] opacity-30">
                01
              </span>

              <h3 className="card-title text-left text-base">
                Entendemos tu negocio
              </h3>

              <p className="text-body text-sm text-[var(--text-muted)]">
                Analizamos tu situación, objetivos y tipo de cliente.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <span className="font-['ClashDisplay'] text-4xl font-semibold text-[var(--primary)] opacity-30">
                02
              </span>

              <h3 className="card-title text-left text-base">
                Definimos la estructura
              </h3>

              <p className="text-body text-sm text-[var(--text-muted)]">
                Organizamos tu web para que sea clara, lógica y orientada a
                conversión.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <span className="font-['ClashDisplay'] text-4xl font-semibold text-[var(--primary)] opacity-30">
                03
              </span>

              <h3 className="card-title text-left text-base">
                Diseñamos y desarrollamos
              </h3>

              <p className="text-body text-sm text-[var(--text-muted)]">
                Creamos una web rápida, profesional y adaptada a tu negocio.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <span className="font-['ClashDisplay'] text-4xl font-semibold text-[var(--primary)] opacity-30">
                04
              </span>

              <h3 className="card-title text-left text-base">
                Lanzamos y optimizamos
              </h3>

              <p className="text-body text-sm text-[var(--text-muted)]">
                Publicamos tu web lista para generar oportunidades reales.
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
    </>
  );
}