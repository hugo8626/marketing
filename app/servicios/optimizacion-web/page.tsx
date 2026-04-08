// FILE: components/servicios/optimizacion-web/OptimizacionWebContent.tsx
//
// SECTION: OPTIMIZACIÓN WEB CONTENT
//
// Bloque completo de contenido para la página de servicio
// de optimización web.

import Image from "next/image";
import Link from "next/link";

export default function OptimizacionWebContent() {
  return (
    <>
      {/* HERO */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-5">
              <p className="eyebrow">OPTIMIZACIÓN WEB</p>

              <h1 className="hero-title max-w-4xl">
                Tu web puede estar
                <span className="block">perdiendo clientes</span>
                <span className="block">sin que lo sepas</span>
              </h1>

              <p className="text-body max-w-2xl">
                Mejoramos tu web para que sea más clara, más rápida y convierta
                mejor.
              </p>
            </header>

            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Más claridad</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Más confianza</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Más resultados</span>
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
              Tener una web no
              <span className="block">significa que funcione</span>
            </h2>
          </header>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">La gente entra y no entiende</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">No hay estructura clara</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">Es lenta</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">No transmite confianza</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">No genera reservas ni ventas</p>
            </div>

            <p className="text-body pt-2 text-sm italic">
              “Y lo peor: no sabes por qué.”
            </p>
          </div>
        </div>
      </section>

      {/* MENSAJE */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <h2 className="section-title max-w-4xl">
            El problema no es tener web... es que no esté optimizada
          </h2>

          <p className="text-body max-w-2xl">
            Muchas webs están hechas sin estrategia, no guían al usuario y no
            están pensadas para convertir.
          </p>

          <p className="rounded-[8px] bg-[#F5F5F5] px-5 py-4 text-sm italic">
            “Por eso no generan clientes.”
          </p>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="order-1 flex flex-col gap-3">
            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Revisamos estructura</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Mejoramos mensajes</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Optimizamos velocidad</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Ajustamos diseño</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Aplicamos SEO básico</p>
            </div>
          </div>

          <div className="order-2 flex flex-col gap-4">
            <p className="eyebrow">La solución</p>

            <h2 className="section-title max-w-3xl">
              Analizamos tu web y
              <span className="block">mejoramos lo que</span>
              <span className="block">realmente importa</span>
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
              <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
                <span className="text-sm text-[#999]">✕</span>
                <p className="text-small">Confusa</p>
              </div>

              <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
                <span className="text-sm text-[#999]">✕</span>
                <p className="text-small">Lenta</p>
              </div>

              <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
                <span className="text-sm text-[#999]">✕</span>
                <p className="text-small">No transmite confianza</p>
              </div>

              <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
                <span className="text-sm text-[#999]">✕</span>
                <p className="text-small">No genera contactos</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                  ✓
                </span>
                <p className="text-small">Clara</p>
              </div>

              <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                  ✓
                </span>
                <p className="text-small">Rápida</p>
              </div>

              <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                  ✓
                </span>
                <p className="text-small">Profesional</p>
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

      {/* PROCESO */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-14 md:gap-16 lg:gap-20">
          <header className="flex max-w-4xl flex-col gap-5">
            <p className="eyebrow">Cómo trabajamos</p>

            <h2 className="section-title">Cómo trabajamos tu web</h2>
          </header>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-5">
            <article className="flex flex-col gap-3">
              <span className="font-['ClashDisplay'] text-4xl font-semibold text-[var(--primary)] opacity-30">
                01
              </span>

              <h3 className="card-title text-left text-base">
                Analizamos tu web actual
              </h3>

              <p className="text-body text-sm text-[var(--text-muted)]">
                Revisamos estructura, mensajes, velocidad y diseño.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <span className="font-['ClashDisplay'] text-4xl font-semibold text-[var(--primary)] opacity-30">
                02
              </span>

              <h3 className="card-title text-left text-base">
                Detectamos fallos
              </h3>

              <p className="text-body text-sm text-[var(--text-muted)]">
                Identificamos qué no funciona y por qué.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <span className="font-['ClashDisplay'] text-4xl font-semibold text-[var(--primary)] opacity-30">
                03
              </span>

              <h3 className="card-title text-left text-base">
                Definimos mejoras
              </h3>

              <p className="text-body text-sm text-[var(--text-muted)]">
                Priorizamos los cambios con mayor impacto.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <span className="font-['ClashDisplay'] text-4xl font-semibold text-[var(--primary)] opacity-30">
                04
              </span>

              <h3 className="card-title text-left text-base">
                Aplicamos cambios
              </h3>

              <p className="text-body text-sm text-[var(--text-muted)]">
                Implementamos las mejoras de forma clara y visible.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <span className="font-['ClashDisplay'] text-4xl font-semibold text-[var(--primary)] opacity-30">
                05
              </span>

              <h3 className="card-title text-left text-base">
                Optimizamos resultados
              </h3>

              <p className="text-body text-sm text-[var(--text-muted)]">
                Medimos y ajustamos para maximizar conversión.
              </p>
            </article>
          </div>

          <p className="text-small text-[var(--text-muted)]">
            Sin tecnicismos. Sin complicaciones.
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
            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Más claridad para el cliente</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Más confianza</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Más contactos</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Mejor posicionamiento local</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Mejor rendimiento general</p>
            </div>
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
            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Auditoría completa de tu web</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Mejora de estructura</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Optimización de textos</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Ajustes de diseño</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Optimización de velocidad</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">SEO básico</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRECIO */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2 className="section-title">
            Mejora tu web sin empezar de cero
          </h2>

          <p className="font-['ClashDisplay'] text-5xl leading-none font-semibold text-black sm:text-6xl md:text-7xl">
            Desde 290€
          </p>

          <p className="text-body max-w-2xl">
            Solucionamos lo que no está funcionando sin rehacer toda la web.
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
    </>
  );
}