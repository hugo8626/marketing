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
              <p className="eyebrow">Diseño web basica profesional en Girona</p>

              <h1 className="hero-title max-w-4xl">
                Página web en Girona económica para empezar
                <span className="block">a conseguir clientes desde el primer día</span>
              </h1>

              <p className="text-body max-w-2xl">
                Si no tienes web, estás perdiendo oportunidades.
              </p>
              <p className="text-body max-w-2xl">
                Si tienes una y no te genera contactos, no está haciendo su trabajo.
              </p>

              <p className="text-small max-w-2xl text-[var(--text-muted)]">
                Creamos páginas web One Page en , claras, rápidas y optimizadas para convertir visitas en clientes..
              </p>
            </header>

            <ul className="flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Presencia profesional desde el inicios</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span> Mensaje claro que tu cliente entiende</span>
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

              <h2 className="section-title">¿Qué es una página web One Page? </h2>

              <p className="text-body max-w-2xl">
               Una One Page es una página web profesional en una sola estructura, pensada para que el usuario entienda tu negocio rápido y contacte sin complicaciones.
Es la forma más rápida de tener presencia online sin invertir de más, pero con una base bien planteada.
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-3">
              <article className="rounded-[8px] bg-white p-5">
               <h3 className="card-title text-center p-6">
                 <span className=" text-[var(--primary)]">✓</span> Toda la información en una sola página
                </h3>
              </article>

              <article className="rounded-[8px] bg-white p-5">
                
                <h3 className="  text-center p-6">
                 <span className=" text-[var(--primary)]">✓</span> Navegación simple y sin distracciones
                </h3>
              </article>

              <article className="rounded-[8px] bg-white p-5">
                 <h3 className="card-title text-center p-6">
                 <span className=" text-[var(--primary)]">✓</span> Mensaje claro orientado a captar clientes
                </h3>
              </article>
            </div>
          </div>

          <div className="flex flex-col gap-6  mt-14">
            <header className="flex flex-col gap-3">
              <h2 className="section-title">¿Cómo funciona?</h2>
            </header>

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              <article className="flex flex-col gap-2">
                <p className="section-title text-[var(--primary)]">1</p>
                <h3 className="card-title text-left text-base">
                  El usuario entiende en segundos qué haces
                </h3>
                <p>Tu mensaje es claro desde el primer momento y conecta con lo que está buscando</p>
              </article>

              <article className="flex flex-col gap-2">
                <p className="section-title text-[var(--primary)]">2</p>
                <h3 className="card-title text-left text-base">Generas confianza y guías la decisión</h3>
                <p>La estructura y el contenido transmiten seguridad y llevan al usuario paso a paso.</p>
              </article>

              <article className="flex flex-col gap-2">
                <p className="section-title text-[var(--primary)]">3</p>
                <h3 className="card-title text-left text-base">
                  El usuario da el paso y contacta contigo
                </h3>
                <p>Todo está pensado para facilitar la acción: reservar, escribir o llamar.</p>
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
            <h2 className="section-title">  Esta opción es para ti si…</h2>
          </header>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body"> Estás empezando y necesitas una página web económica</p>
            </article>

            <article className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body"> No tienes web o la que tienes no te genera clientes</p>
            </article>

            <article className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Quieres algo rápido, claro y profesional</p>
            </article>

            <article className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body"> Necesitas presencia online sin complicaciones  </p>
            </article>
          </div>
        </div>
         <p className="text-center mt-8 text-bould">Si tu web no consigue esto, no está funcionando</p>
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
            <div className="flex items-center gap-3 rounded-[8px] bg-[#F5F5F5] px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">No tienes web → no existes en Google</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-[#F5F5F5] px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">Usas redes como única presencia → dependes de terceros</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-[#F5F5F5] px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small"> No transmites profesionalidad → pierdes confianza</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-[#F5F5F5] px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">
                No se entiende lo que haces → no te contactan

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
               Una página web simple, pero pensada para conseguir clientes
            </h2>
          </header>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Estructura clara que guía al usuario</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Mensaje directo que conecta con tu cliente</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small"> Diseño profesional que transmite confianza</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Optimización para convertir visitas en contactos</p>
            </div>
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
              <h3 className="mb-5 font-bold">Web basica</h3>

              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  <span>Información desordenada</span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  <span>Diseño sin objetivo</span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  <span>No genera contactos</span>
                </li>

           
              </ul>
            </article>

            <article className="rounded-[12px] border border-[var(--primary)] p-6">
              <h3 className="mb-5 font-bold">Web One Page FITYX</h3>

              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  <span>Mensaje claro y directo</span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  <span>Pensada para convertir</span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  <span>Enfocada en conseguir clientes</span>
                </li>

               
              </ul>
            </article>
          </div>
          <p className="text-center text-lg font-bold text-body mt-10">
            Y eso es lo que marca la diferencia.
          </p>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">Resultados</p>

            <h2 className="section-title">Lo que consigues con una web bien planteada</h2>
          </header>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Presencia profesional desde el primer día</p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Más confianza en tu negocio</p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body"> Mejor percepción de tu marca</p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Base para empezar a captar clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETALLE */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">Detalle</p>

            <h2 className="section-title">Qué incluye tu página web económica en Girona</h2>
          </header>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body"> Diseño web personalizado adaptado a tu negocio</p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Estructura estratégica pensada para generar contactos</p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">
                Secciones clave (Inicio, Sobre ti, Servicios y Contacto)
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Botón de WhatsApp y formulario para facilitar el contacto</p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">
                Web adaptada a móvil, tablet y ordenador
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] border border-[#E5E5E5] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Optimización SEO básica para empezar a aparecer en Google</p>
            </div>
          </div>
        </div>
      </section>

      {/* INVERSIÓN */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <header className="flex flex-col items-center gap-4">
            <p className="eyebrow">Inversión</p>

            <h2 className="section-title">Página web económica en Girona   </h2>

            <p className="font-['ClashDisplay'] text-5xl leading-none font-semibold text-black sm:text-6xl md:text-7xl">
              Desde 430€
            </p>

            <p className="text-body">Precio cerrado. Sin sorpresas.</p>
          </header>

          <Link href="/contacto" className="btn-black text-sm">
            QUIERO MI ONE PAGE
          </Link>
          <p className="text-center"> Limitamos los proyectos cada mes para mantener la calidad en cada trabajo</p>
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

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
            <article className="flex flex-col gap-3">
              <span className="font-['ClashDisplay'] text-4xl font-semibold text-[var(--primary)] opacity-30">
                01
              </span>

              <h3 className="card-title text-left text-base">
                Entendemos tu negocio y definimos la estrategia
              </h3>

              <p className="text-body text-sm text-[var(--text-muted)]">
                Analizamos tu situación, objetivos y tipo de cliente para crear una web con sentido.
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
                Creamos una web clara, rápida y estructurada para guiar al usuario y generar contactos.
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
                Publicamos tu web optimizada para atraer visitas y convertirlas en oportunidades reales.
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