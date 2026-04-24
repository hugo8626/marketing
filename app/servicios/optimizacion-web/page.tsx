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
              <p className="eyebrow">Optimización web en Girona </p>

              <h1 className="hero-title max-w-4xl">
                Mejoramos tu página para que:
                
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
            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small"> No aparece en Google</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">No transmite confianza</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">No guía al usuario</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">Es  lenta</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small"> No convierte visitas en clientes</p>
            </div>

            <p className="text-body pt-2 text-sm italic">
              Si no está optimizada, no funciona
            </p>
          </div>
        </div>
      </section>

      {/* MENSAJE */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <h2 className="section-title max-w-4xl">
           El problema no es tener una web. <span className="block">Es que no esté pensada para conseguir clientes.</span>
          </h2>

          <p className="text-body max-w-2xl">
            Muchas webs están hechas sin estrategia, no guían al usuario y no ayudan a tomar una decisión.  
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
            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">La claridad de tu mensaje (que se entienda lo que haces)</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small"> La estructura (que guíe al usuario paso a paso)</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">El diseño (que genere confianza)</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">La velocidad (para no perder oportunidades)</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small"> El SEO (para empezar a aparecer en Google)</p>
            </div>
          </div>

          <div className="order-1 flex flex-col gap-4">
            <p className="eyebrow">La solución</p>

            <h2 className="section-title max-w-3xl">
              Analizamos qué falla y optimizamos 
              
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
            <p className="eyebrow">Proceso de optimización</p>

            <h2 className="section-title">Así mejoramos tu web para que genere clientes         </h2>
          </header>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-5">
            <article className="flex flex-col gap-3">
              <span className="font-['ClashDisplay'] text-4xl font-semibold text-[var(--primary)] opacity-30">
                01
              </span>

              <h3 className="card-title text-left text-base">
                Analizamos tu web y detectamos qué falla
              </h3>

              <p className="text-body text-sm text-[var(--text-muted)]">
                Revisamos estructura, mensajes y rendimiento para entender por qué no está generando resultados.
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
                Priorizamos los cambios que realmente pueden mejorar la conversión y la captación de clientes.
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
                Implementamos mejoras y ajustamos lo necesario para que tu web empiece a funcionar.
              </p>
            </article>

       

          </div>

          <p className="text-small text-[var(--text-muted)]">
            Sin tecnicismos. Sin complicaciones. Solo cambios que generan resultados.
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
              <p className="text-small">Mejora de la estructura para que el usuario entienda tu web</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Optimización de mensajes para comunicar mejor y generar confianza</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Mejora de velocidad y experiencia de usuario</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small"> Ajustes SEO para mejorar posicionamiento en Google</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Optimización del recorrido y llamadas a la acción para aumentar contactos</p>
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
            Optimiza tu web y empieza a generar resultados
          </h2>

          <p className="font-['ClashDisplay'] text-5xl leading-none font-semibold text-black sm:text-6xl md:text-7xl">
            Precio: 270€
          </p>

          <p className="text-body max-w-2xl">
            No necesitas una web nueva. <span className="block">Necesitas que la que ya tienes funcione.</span>
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