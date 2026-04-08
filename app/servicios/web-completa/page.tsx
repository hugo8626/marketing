// FILE: components/servicios/web-completa/WebCompletaContent.tsx
//
// SECTION: WEB COMPLETA CONTENT
//
// Bloque completo de contenido para la página de servicio Web completa.
// Incluye hero, problema, solución, diferencia, comparativa,
// resultados, detalle, inversión, proceso y CTA final.

import Image from "next/image";
import Link from "next/link";

export default function WebCompletaContent() {
  return (
    <>
      {/* HERO */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-5">
              <p className="eyebrow">DISEÑO WEB PROFESIONAL</p>

              <h1 className="hero-title max-w-4xl">
                Tu página web lista
                <span className="block">para crecer y</span>
                <span className="block">generar clientes</span>
              </h1>

              <p className="text-body max-w-2xl">
                No se trata de tener más páginas, sino de tener las páginas
                correctas.
              </p>

              <p className="text-small max-w-2xl text-[var(--text-muted)]">
                Creamos páginas web profesionales adaptadas a tu negocio,
                también conocidas como webs multipágina o webs completas.
              </p>
            </header>

            <ul className="flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Imagen profesional</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Estructura clara</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Pensada para negocio real</span>
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
              src="/completa.jpeg"
              alt="Pantalla mostrando una página web profesional multipágina"
              width={640}
              height={440}
              className="h-auto w-full max-w-[520px] bg-black/40 p-1 rounded-[12px] object-cover shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section-grey  px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-10">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">El problema</p>

            <h2 className="section-title max-w-3xl">
              Una web simple ya no es suficiente
            </h2>
          </header>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">
                El cliente no entiende lo que haces
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">No transmite confianza</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">Información desordenada</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">No genera contactos</p>
            </div>
          </div>

          <p className="text-body font-semibold">
            Si tu web no guía al usuario, no convierte.
          </p>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-10">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">La solución</p>

            <h2 className="section-title max-w-3xl">
              Diseño web pensado para convertir
            </h2>
          </header>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Arquitectura clara</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Mensajes bien organizados</p>
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
              <p className="text-small">Enfoque en conversión</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Base SEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIA */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-5">
          <p className="eyebrow">Diferencia</p>

          <h2 className="section-title max-w-3xl">
            No es solo diseño. Es estrategia.
          </h2>

          <p className="text-body max-w-2xl">
            No creamos webs por estética. Creamos webs para que el usuario
            entienda, confíe y actúe.
          </p>
        </div>
      </section>

      {/* COMPARATIVA */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-12">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">Comparativa</p>

            <h2 className="section-title max-w-4xl">
              Una web básica vs una web bien diseñada
            </h2>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 rounded-[8px] bg-[#F5F5F5] px-5 py-4">
                <span className="text-sm text-[#999]">✕</span>
                <p className="text-small">Solo presencia</p>
              </div>

              <div className="flex items-center gap-3 rounded-[8px] bg-[#F5F5F5] px-5 py-4">
                <span className="text-sm text-[#999]">✕</span>
                <p className="text-small">Sin estructura</p>
              </div>

              <div className="flex items-center gap-3 rounded-[8px] bg-[#F5F5F5] px-5 py-4">
                <span className="text-sm text-[#999]">✕</span>
                <p className="text-small">No genera clientes</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                  ✓
                </span>
                <p className="text-small">Web FITYX DIGITAL</p>
              </div>

              <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                  ✓
                </span>
                <p className="text-small">Estructura estratégica</p>
              </div>

              <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                  ✓
                </span>
                <p className="text-small">Mensajes claros</p>
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
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">Resultados</p>

            <h2 className="section-title max-w-4xl">
              Lo que cambia cuando tienes una web profesional
            </h2>
          </header>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex items-center gap-4 rounded-[8px] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Más confianza</p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Mejor imagen</p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Más oportunidades de contacto</p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Base para crecer</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETALLE */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">Detalle</p>

            <h2 className="section-title">Qué incluye tu página web</h2>
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
              <p className="text-body">Desarrollo a medida</p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">
                Adaptada a ordenador, tablet y móvil
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Optimización de velocidad</p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">SEO básico</p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5 md:col-span-2">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">
                Integración de contacto / WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INVERSIÓN */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
          <header className="flex flex-col items-center gap-4">
            <p className="eyebrow">Inversión</p>

            <h2 className="section-title max-w-3xl">
              Elige el nivel que necesita tu negocio
            </h2>

            <p className="text-body max-w-2xl">
              No se trata de tener más páginas, sino de tener las páginas
              correctas.
            </p>
          </header>

          <div className="grid w-full gap-6 lg:grid-cols-2">
            {/* CARD 1 */}
            <article className="flex h-full flex-col rounded-[8px] bg-white p-8 text-left">
              <div className="mb-6 flex flex-col gap-2">
                <h3 className="card-title">Web completa</h3>
                <p className="font-['ClashDisplay'] text-4xl font-semibold text-black">
                  Desde 1.190€
                </p>
              </div>

              <ul className="mb-8 flex flex-col gap-3">
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Diseño profesional</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Estructura clara</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Páginas necesarias según negocio</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Adaptada a ordenador, tablet y móvil</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>SEO básico</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>3 meses mantenimiento web</span>
                </li>
              </ul>

              <Link href="/contacto" className="btn-black mt-auto text-sm">
                QUIERO ESTA OPCIÓN →
              </Link>
            </article>

            {/* CARD 2 */}
            <article className="flex h-full flex-col rounded-[8px] border border-[var(--primary)] bg-white p-8 text-left shadow-lg">
              <div className="mb-6 flex flex-col gap-2">
                <span className="w-fit rounded-[4px] bg-[var(--primary)] px-2 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-white">
                  Recomendado
                </span>

                <h3 className="card-title">
                  Web estratégica para vender más
                </h3>

                <p className="font-['ClashDisplay'] text-4xl font-semibold text-black">
                  Desde 1.490€
                </p>
              </div>

              <ul className="mb-8 flex flex-col gap-3">
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Todo lo anterior</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Estructura pensada para conversión</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Copy optimizado</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Flujo del usuario</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>SEO más trabajado</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>3 meses mantenimiento web</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>3 meses mantenimiento SEO</span>
                </li>
              </ul>

              <Link href="/contacto" className="btn-primary mt-auto text-sm">
                QUIERO VENDER MÁS →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
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
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          <h2 className="section-title max-w-3xl">
            Tu web puede ser solo presencia...
            <span className="block">
              o una herramienta para generar clientes.
            </span>
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