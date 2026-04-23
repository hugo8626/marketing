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
              <p className="eyebrow">
Diseño web profesional en Girona</p>

              <h1 className="hero-title max-w-4xl">
                Tu página web lista para crecer y generar clientes
                
              </h1>

              <p className="text-body max-w-2xl">
                No se trata de tener más páginas, sino de tener las páginas correctas.
              </p>

              <p className="text-small max-w-2xl text-[var(--text-muted)]">
                Creamos páginas web profesionales en Girona, adaptadas a tu negocio y pensadas para posicionar en Google y generar clientes
              </p>
            </header>

            <ul className="flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Imagen profesional que transmite confianza</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Estructura clara pensada para convertir</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span> Enfocada en generar resultados reales</span>
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
                El cliente no entiende bien lo que haces
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small"> Tu web no transmite confianza</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">La información está desordenada</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">No consigues contactos</p>
            </div>
          </div>

          <p className="text-body font-semibold">
            Hoy no compites solo por estar online.
          </p>
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
               Diseño web profesional  pensado para convertir

            </h2>
          </header>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Arquitectura clara para posicionar y guiar</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Mensajes que conectan con tu cliente</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Diseño profesional que transmite confianza</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Enfoque en generar contactos</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Base SEO para aparecer en Google</p>
            </div>
          </div>
        </div>
        <p className="text-center pt-7">No se trata de hacer una web más grande.</p>
        <p className="text-center pt-7">Se trata de hacer una web mejor planteada.</p>
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
          <p>Antes del diseño, está la estructura.
          <span className="block">
            Antes de lo visual, está el objetivo: conseguir clientes.
         </span>
             </p>


        </div>
      </section>

      {/* COMPARATIVA */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col items-center text-center">
            <p className="eyebrow">Comparativa</p>
            <h2 className="section-title max-w-4xl">
               La diferencia entre tener una web… y tener resultados
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
                  <span>
Solo presencia online</span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  <span>Sin estructura clara</span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  <span>No genera clientes</span>
                </li>

           
              </ul>
            </article>

            <article className="rounded-[12px] border border-[var(--primary)] p-6">
              <h3 className="mb-5 font-bold">Web FITYX</h3>

              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  <span>Pensada para posicionar en Google</span>
                </li>

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
                  <span>Enfocada en conversión</span>
                </li>

               
              </ul>
            </article>
          </div>
          
          
        </div>
      </section>
      {/* RESULTADOS */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">Resultados</p>

            <h2 className="section-title max-w-4xl">
               Lo que cambia cuando tienes una web bien planteada
            </h2>
          </header>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex items-center gap-4 rounded-[8px] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Más confianza desde el primer clic</p>
            </div>

            <div className="flex items-center gap-4 rounded-[8px] bg-white px-6 py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-sm">
                ✓
              </span>
              <p className="text-body">Mejor percepción de tu negocio</p>
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
              <p className="text-body">Base sólida para crecer online</p>
            </div>
          </div>
          <p className="text-center text-lg font-bold text-body mt-10">
            Tu web deja de ser un gasto… y empieza a ser una inversión
          </p>
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
              Cuánto cuesta una página web en Girona
            </h2>
            <ul className="mt-4 flex flex-col gap-3 text-center text-sm text-[var(--text-muted)]">
              <li>No pagas por “tener una web”.</li>
              <li>Pagas por tener una herramienta que puede generar clientes.</li>
              <li> Aquí tienes la opción que mejor se adapta a tu negocio.  </li>
              <li>Trabajamos con pocos proyectos al mes para asegurar calidad en cada web</li>
            </ul>

          </header>

          <div className="grid w-full gap-6 lg:grid-cols-2">
            {/* CARD 1 */}
            <article className="flex h-full flex-col rounded-[8px] bg-white p-8 text-left">
              <div className="mb-6 flex flex-col gap-2">
                <h3 className="card-title pt-9 ">Web profesional para empezar a generar clientes</h3>
                <p className="font-['ClashDisplay'] text-4xl font-semibold text-black">
                 Precio:  890€

                </p>
              </div>

              <ul className="mb-8 flex flex-col gap-3">
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span> Diseño profesional adaptado a tu negocio</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span> Estructura clara para que entiendan lo que haces</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Páginas necesarias según tus objetivos</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Adaptada a móvil, tablet y ordenador</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Optimización SEO básica para empezar a posicionar</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>3 meses de mantenimiento incluidos</span>
                </li>
              </ul>
              <p>Ademas incluido</p>
              <ul className="mb-3">
                 <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span> Asesoramiento inicial para enfocar tu web</span>
                </li>
                 <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span> Revisión tras el lanzamiento</span>
                </li>
                 <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span> Soporte durante los primeros meses</span>
                </li>
              </ul>
              <p className="mb-6">Disponibilidad limitada</p>
              <Link href="/contacto" className="btn-black mt-auto text-sm">
                Quiero empezar 
              </Link>
            </article>

            {/* CARD 2 */}
            <article className="flex h-full flex-col rounded-[8px] border border-[var(--primary)] bg-white p-8 text-left shadow-lg">
              <div className="mb-6 flex flex-col gap-2">
                <span className="w-fit rounded-[4px] bg-[var(--primary)] px-2 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-white">
                  Recomendado
                </span>

                <h3 className="card-title">
                  Web estratégica para atraer y convertir más clientes
                </h3>

                <p className="font-['ClashDisplay'] text-4xl font-semibold text-black">
                  Precio: 1.100€
                </p>
              </div>

              <ul className="mb-8 flex flex-col gap-3">
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Todo lo anterior</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Estructura pensada para convertir visitas en clientes</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span> Copy optimizado para comunicar mejor tu valor</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Flujo del usuario pensado para guiar al contacto</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>SEO más trabajado para mejorar visibilidad en Google</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span> 3 meses de mantenimiento web</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span> 3 meses de seguimiento SEO</span>
                </li>
              </ul>
              <p>Extra incluido</p>
              <ul className="mb-3">
                 <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span> Análisis de tu cliente ideal</span>
                </li>
                 <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span> Optimización de mensajes para conversión</span>
                </li>
                 <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span> Recomendaciones estratégicas para captar más clientes</span>
                </li>
              </ul>
              <p className="mb-6">Disponibilidad limitada</p>

              <Link href="/contacto" className="btn-primary mt-auto text-sm">
                Quiero más clientes
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-14 md:gap-16 lg:gap-20">
          <header className="flex max-w-3xl flex-col gap-5">
            <p className="eyebrow">Nuestro proceso</p>

            <h2 className="section-title">
              Así creamos una web que te genera clientes
             
            </h2>
            <p className="text-body text-sm text-[var(--text-muted)]">
             Un proceso simple, claro y pensado para que tu web funcione desde el primer día
            </p>
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
                Publicamos tu web optimizada para atraer visitas y convertirlas en oportunidades reales..
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

     
          </div>

          <p className="text-xs text-[var(--text-muted)]">
            Te respondemos en menos de 24h
          </p>
        </div>
      </section>
    </>
  );
}