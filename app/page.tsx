// FILE: app/page.tsx
//
// PAGE: HOME
//
// Home principal del sitio.
// Versión limpia y responsive manteniendo el hero actual en desktop.

import Link from "next/link";
import Image from "next/image";
import FaqSection from "@/components/faq/FaqSection";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-1 lg:grid-cols-[minmax(0,650px)_minmax(0,430px)] lg:items-start lg:justify-between xl:gap-14">
          {/* HERO LEFT */}
          <div className="flex flex-col  gap-7">
            {/* HERO HEADER */}
            <header className="flex flex-col gap-6">
              <h1 className="hero-title  max-w-[23ch]">
                Diseño web {" "}
                <span className="text-[var(--primary)]">
                   para conseguir más clientes 
                </span>
              </h1>

              <p className="text-body max-w-[35ch]">Diseñamos páginas web estratégicas y profesionales, pensadas para atraer más clientes, aumentar reservas y generar ventas, con una inversión accesible y sin depender de plataformas externas.
              </p>
            </header>

           
       

            {/* HERO CTA */}
            <div className="flex flex-col items-start gap-2">
              <Link className="btn-black text-sm" href="/contacto">
                QUIERO UNA WEB QUE FUNCIONE
              </Link>
              <p className="text-xs">Respuesta en menos de 24 horas</p>
            </div>

            {/* BUSINESS TYPES */}
            <section
              className="flex flex-col gap-4"
              aria-labelledby="business-types-title"
            >
              <h2
                id="business-types-title"
                className="eyebrow text-left text-[11px] text-[var(--text-muted)]"
              >
                Soluciones según tu tipo de negocio
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <Link href="/restauracion" className="group block h-full">
                  <article className="h-full min-h-[170px] rounded-[8px] border border-[var(--border)] bg-white px-6 py-6 transition-colors duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#faf7ef]">
                    <h3 className="mb-3 font-['ClashDisplay'] text-[17px] leading-[1.35] font-semibold text-black">
                      Turismo
                    </h3>

                    <p className="font-['Inter'] text-[15px] leading-7 text-[var(--text-muted)]">
                      Deja de depender de plataformas y consigue reservas directas
                    </p>
                  </article>
                </Link>

                <Link href="/salud" className="group block h-full">
                  <article className="h-full min-h-[170px] rounded-[8px] border border-[var(--border)] bg-white px-6 py-6 transition-colors duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#faf7ef]">
                    <h3 className="mb-3 font-['ClashDisplay'] text-[17px] leading-[1.35] font-semibold text-black">
                       Salud / bienestar
                    </h3>

                    <p className="font-['Inter'] text-[15px] leading-7 text-[var(--text-muted)]">
                      Consigue más pacientes y transmite confianza desde tu web
                    </p>
                  </article>
                </Link>

                <Link href="/marca-personal" className="group block h-full">
                  <article className="h-full min-h-[170px] rounded-[8px] border border-[var(--border)] bg-white px-6 py-6 transition-colors duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#faf7ef]">
                    <h3 className="mb-3 font-['ClashDisplay'] text-[17px] leading-[1.35] font-semibold text-black">
                       Marca personal
                    </h3>

                    <p className="font-['Inter'] text-[15px] leading-7 text-[var(--text-muted)]">
                      Convierte tu web en tu principal canal de clientes                                                                                                                                                                                                                       Cada sector necesita una estrategia diferente.
                    </p>
                  </article>
                </Link>
              </div>

              <p className="text-body">
                Cada sector necesita una estrategia diferente.
              </p>
            </section>
          </div>

          {/* HERO RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full  max-w-[500px]">
              <div className="relative h-[320px] sm:h-[380px] lg:h-[520px]">
                {/* TOP IMAGE */}
                <div className="absolute top-0 left-0 z-10 w-[78%] overflow-hidden rounded-[12px] bg-white shadow-lg sm:w-[82%] lg:w-[440px]">
                  <video
                    className="block aspect-[16/9] w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/video.mp4" type="video/mp4" />
                  </video>
                </div>

                {/* BOTTOM IMAGE */}
                <div className="absolute top-[44%] left-[8%] z-20 w-[68%] overflow-hidden rounded-[12px] border border-[#ececec] bg-white shadow-lg sm:left-[10%] sm:w-[72%] lg:top-[238px] lg:left-[36px] lg:w-[370px]">
                  <Image
                    src="/hero.jpeg"
                    alt="Preview web"                              
                    width={470}
                    height={310}
                    className="block  h-auto w-full object-cover"
                    priority
                  />
                </div>

                {/* DECORATIVE BOX */}
                <div
                  aria-hidden="true"
                  className="absolute left-[-10px] top-[76%] z-0 h-[56px] w-[56px] border border-[var(--primary)]/40 sm:h-[68px] sm:w-[68px] lg:left-[-18px] lg:top-[400px] lg:h-[84px] lg:w-[84px]"
                />
              </div>

         
            </div>
          </div>
        </div>
      </section>

      {/* MESSAGE BLOCK */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h2 className="section-title">
            Muchos negocios tienen páginas web…
            <span className="block text-[var(--primary)]">
              pero no generan ni visitas ni clientes.
            </span>
          </h2>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">La realidad de muchas webs</p>

            <h2 className="section-title max-w-2xl">
              Por qué muchas webs
              <span className="block">no consiguen clientes.</span>
            </h2>

            <p className="text-small max-w-xl">
              El problema no es lo que cuesta una web. Es que muchas no están pensadas para funcionar.  
            </p>
          </header>

          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3 rounded-[8px] bg-white p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              <span>No deja claro lo que haces en segundos</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-white p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              <span> No genera confianza cuando alguien entra</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-white p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              <span> No está diseñada para convertir visitas en clientes</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-white p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              <span> No facilita que te contacten fácilmente</span>
            </li>
          </ul>
        </div>
      </section>

      {/* SOLUTION */}
     <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
  <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
    
    {/* TEXTO ARRIBA EN MOBILE */}
    <header className="order-1 flex flex-col gap-4 lg:order-2">
      <p className="eyebrow">Captación de clientes online</p>

      <h2 className="section-title max-w-xl">
        Diseñamos páginas web enfocadas en generar clientes
      </h2>

      <p className="text-small max-w-lg">
        Estrategia profesional clara y una inversión accesible para obtener resultados reales
      </p>
    </header>

    {/* LISTA ABAJO EN MOBILE */}
    <ul className="order-2 flex flex-col gap-3 lg:order-1">
      <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] leading-none text-[var(--primary)]">
          ✔
        </span>
        <span className="text-small text-black">
          Explicar claramente lo que haces desde el primer segundo
        </span>
      </li>

      <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] leading-none text-[var(--primary)]">
          ✔
        </span>
        <span className="text-small text-black">
          Generar confianza y credibilidad en cada visita
        </span>
      </li>

      <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] leading-none text-[var(--primary)]">
          ✔
        </span>
        <span className="text-small text-black">
          Convertir visitas en contactos reales
        </span>
      </li>

      <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] leading-none text-[var(--primary)]">
          ✔
        </span>
        <span className="text-small text-black">
          Posicionarte en Google y atraer clientes de forma constante
        </span>
      </li>
    </ul>

  </div>
</section>

      {/* PROCESS */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col gap-4">
            <p className="eyebrow">Cómo creamos una web que te trae clientes</p>

            <h2 className="section-title max-w-4xl">
               Sin complicaciones. Sin procesos eternos. Con foco en resultados.
            </h2>
          </header>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">01</p>
              <h3 className="card-title">Entendemos tu negocio y definimos la estrategia</h3>
              <p className="text-small">
                Analizamos cómo consigues clientes y qué necesita tu negocio para crear una web enfocada en generar resultados.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">02</p>
              <h3 className="card-title">Diseñamos una web pensada para posicionar y convertir</h3>
              <p className="text-small">
                Creamos una página clara, rápida y profesional, estructurada para destacar en Google y guiar al usuario hasta el contacto.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">03</p>
              <h3 className="card-title">Lanzamos tu web lista para atraer clientes</h3>
              <p className="text-small">
                Publicamos tu web optimizada para posicionarse en Girona, atraer visitas y generar oportunidades reales desde el inicio.
              </p>
            </article>

            
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col gap-4">
            <p className="eyebrow">Soluciones adaptadas a tu negocio</p>
            <h2 className="section-title max-w-4xl">
              Elige el servicio que necesitas para empezar a generar clientes
            </h2>
            <p className="text-body max-w-3xl">
              Cada negocio está en un punto diferente. Por eso ofrecemos soluciones pensadas para ayudarte a atraer clientes, mejorar tu presencia online y hacer crecer tu negocio.Diseño web profesional 
            </p>
          </header>

          <div className="mb-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <Link href="/servicios#onePage" className="group block h-full">
              <article className="card h-full border border-transparent p-4 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg">
                <h3 className="card-title">Empieza con una web que atrae clientes</h3>
                <p className="mb-3 text-small italic">
                  Para negocios que están empezando o quieren validar su idea online
                </p>
                <p className="text-body">
                  Una web clara, rápida y enfocada en generar tus primeros contactos desde el inicio
                </p>
                <span className="mt-4 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                  →
                </span>
              </article>
            </Link>

            <Link href="/servicios#webFull" className="group block h-full">
              <article className="card h-full border border-transparent p-4 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg">
                <h3 className="card-title">Escala tu negocio con una web estratégica</h3>
                <p className="mb-3 text-small italic">
                  Para negocios que quieren crecer y convertir su web en su principal canal de captación
                </p>
                <p className="text-body">
                  Una web completa, optimizada para posicionar en Google y generar más oportunidades
                </p>
                <span className="mt-4 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                  →
                </span>
              </article>
            </Link>

            <Link href="/servicios#landing" className="group block h-full">
              <article className="card h-full border border-transparent p-4 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg">
                <h3 className="card-title">Convierte visitas en clientes con landing pages</h3>
                <p className="mb-3 text-small italic">
                  Para negocios que invierten en publicidad o campañas
                </p>
                <p className="text-body">
                  Páginas optimizadas para maximizar conversiones y generar resultados medibles
                </p>
                <span className="mt-4 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                  →
                </span>
              </article>
            </Link>

            <Link href="/servicios#socials" className="group block h-full">
              <article className="card h-full border border-transparent p-4 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg">
                <h3 className="card-title">
                  Gana visibilidad y atrae clientes con contenido
                </h3>
                <p className="mb-3 text-small italic">
                  Para negocios que quieren mantener presencia activa y generar oportunidades constantes
                </p>
                <p className="text-body">
                  Estrategia de contenido pensada para reforzar tu marca y atraer clientes
                </p>
                <span className="mt-4 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                  →
                </span>
              </article>
            </Link>

            <Link href="/servicios#fotografia" className="group block h-full">
              <article className="card h-full border border-transparent p-4 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg">
                <h3 className="card-title">
                  Refuerza tu imagen y genera confianza
                </h3>
                <p className="mb-3 text-small italic">
                  Para negocios que necesitan mejorar su percepción profesional
                </p>
                <p className="text-body">
                  Fotografía estratégica que transmite confianza y mejora la conversión
                </p>
                <span className="mt-4 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                  →
                </span>
              </article>
            </Link>

            <Link href="/servicios#optimizacion" className="group block h-full">
              <article className="card h-full border border-transparent p-4 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg">
                <h3 className="card-title">Optimiza tu web y mejora resultados</h3>
                <p className="mb-3 text-small italic">
                  Para negocios cuya web no está generando clientes

                </p>
                <p className="text-body">
                  Mejoramos tu web para que posicione mejor, convierta más y genere oportunidades reales
                </p>
                <span className="mt-4 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                  →
                </span>
              </article>
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 text-center md:gap-9">
            <h2 className="section-title">¿No tienes claro qué necesitas?</h2>
            <p className="text-body max-w-2xl">
              No te preocupes. Te ayudamos a elegir la mejor opción según tu
              negocio y objetivos.
            </p>
            <Link href="/contacto" className="btn-black">
              ASESORÍA GRATUITA
            </Link>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section-grey px-4 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col items-center gap-4 text-center">
            <p className="eyebrow">Diferencias que importan</p>
            <h2 className="section-title max-w-4xl">
              No todas las webs están pensadas para conseguir
              <span className="block">clientes</span>
            </h2>
            <p className="text-body max-w-5xl">
              La forma en la que está hecha tu web marca la diferencia. Por eso trabajamos con desarrollo a medida, adaptando cada detalle a tu negocio para que funcione de verdad.
            </p>
          </header>

          {/* MOBILE */}
          <div className="grid gap-4 md:hidden">
            <article className="rounded-[8px] border border-[var(--border)] bg-white p-5">
              <p className="eyebrow mb-4">Plantillas</p>
              <ul className="flex flex-col gap-4 text-sm">
                <li className="border-b border-gray-200 pb-4">
                  <span className="block font-medium text-black">Diseño</span>
                  <span className="text-muted">✕ Diseños poco personalizados</span>
                </li>
                <li className="border-b border-gray-200 pb-4">
                  <span className="block font-medium text-black">Integración</span>
                  <span className="text-muted">
                    ✕ Depende de múltiples herramientas
                  </span>
                </li>
                <li className="border-b border-gray-200 pb-4">
                  <span className="block font-medium text-black">Velocidad</span>
                  <span className="text-muted">
                    ✕ Puede volverse lenta con el tiempo
                  </span>
                </li>
                <li className="border-b border-gray-200 pb-4">
                  <span className="block font-medium text-black">Escalabilidad</span>
                  <span className="text-muted">✕ Limitada para crecer</span>
                </li>
                <li>
                  <span className="block font-medium text-black">SEO</span>
                  <span className="text-muted">✕ SEO básico</span>
                </li>
              </ul>
            </article>

            <article className="rounded-[8px] border border-[var(--border)] bg-white p-5">
              <p className="eyebrow mb-4 text-black">A medida</p>
              <ul className="flex flex-col gap-4 text-sm">
                <li className="border-b border-gray-200 pb-4">
                  <span className="block font-medium text-black">Diseño</span>
                  <span>
                    <span className="mr-2 text-[var(--primary)]">✓</span>
                      Diseño adaptado a tu negocio y a tus objetivos
                  </span>
                </li>
                <li className="border-b border-gray-200 pb-4">
                  <span className="block font-medium text-black">Integración</span>
                  <span>
                    <span className="mr-2 text-[var(--primary)]">✓</span>
                    Todo integrado para que tu web funcione como un sistema
                  </span>
                </li>
                <li className="border-b border-gray-200 pb-4">
                  <span className="block font-medium text-black">Velocidad</span>
                  <span>
                    <span className="mr-2 text-[var(--primary)]">✓</span>
                    Carga rápida desde el primer momento
                  </span>
                </li>
                <li className="border-b border-gray-200 pb-4">
                  <span className="block font-medium text-black">Escalabilidad</span>
                  <span>
                    <span className="mr-2 text-[var(--primary)]">✓</span>
                    Estructura pensada para facilitar el contacto
                  </span>
                </li>
                <li>
                  <span className="block font-medium text-black">SEO</span>
                  <span>
                    <span className="mr-2 text-[var(--primary)]">✓</span>
                    Optimizada para posicionarse en Google
                  </span>
                </li>
              </ul>
            </article>
          </div>

          {/* DESKTOP/TABLET */}
          <div className="hidden overflow-x-auto py-4 md:block">
            <div className="mx-auto min-w-[720px] max-w-5xl">
              <div className="grid grid-cols-3 border-b border-gray-200 pb-4">
                <div />
                <div className="text-center eyebrow">PLANTILLAS</div>
                <div className="text-center eyebrow text-black">A MEDIDA</div>
              </div>

              <div className="grid grid-cols-3 items-center border-b border-gray-200 py-6">
                <p>Diseño</p>
                <p className="text-muted">✕ Diseños poco personalizados</p>
                <p>
                  <span className="mr-2 text-[var(--primary)]">✓</span>
                   Diseño adaptado a tu negocio y a tus objetivos
                </p>
              </div>

              <div className="grid grid-cols-3 items-center border-b border-gray-200 py-6">
                <p>Integración</p>
                <p className="text-muted">
                  ✕ Depende de múltiples herramientas
                </p>
                <p>
                  <span className="mr-2 text-[var(--primary)]">✓</span>
                  Todo integrado para que tu web funcione como un sistema
                </p>
              </div>

              <div className="grid grid-cols-3 items-center border-b border-gray-200 py-6">
                <p>Velocidad</p>
                <p className="text-muted">
                  ✕ Puede volverse lenta con el tiempo
                </p>
                <p>
                  <span className="mr-2 text-[var(--primary)]">✓</span>
                  Carga rápida desde el primer momento
                </p>
              </div>

              <div className="grid grid-cols-3 items-center border-b border-gray-200 py-6">
                <p>Escalabilidad</p>
                <p className="text-muted">✕ Limitada para crecer</p>
                <p>
                  <span className="mr-2 text-[var(--primary)]">✓</span>
                   Estructura pensada para facilitar el contacto
                </p>
              </div>

              <div className="grid grid-cols-3 items-center border-b border-gray-200 py-6">
                <p>SEO</p>
                <p className="text-muted">✕ SEO básico</p>
                <p>
                  <span className="mr-2 text-[var(--primary)]">✓</span>
                  Optimizada para posicionarse en Google
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-4 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col items-center gap-4 text-center">
            <p className="eyebrow">Resultados que importan</p>
            <h2 className="section-title">
              Páginas web en Girona pensadas para generar clientes
            </h2>
            <p className="text-body max-w-4xl">
              Cada proyecto está diseñado con un objetivo: generar oportunidades de negocio desde el primer momento.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            <Link
              href="https://tavernadelasal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article className="flex h-full flex-col gap-4">
                <Image
                  src="/tavernad.jpeg"
                  alt="Taverna de la Sal"
                  width={700}
                  height={420}
                  className="h-[220px] w-full rounded-[12px] object-cover sm:h-[280px] md:h-[340px]"
                />
                <div className="flex flex-col gap-1">
                  <p className="eyebrow">HOTEL BOUTIQUE & RESTAURANTE</p>
                  <h3 className="card-title">Taverna de la Sal</h3>
                  <p className="text-small">Más reservas directas</p>
                </div>
              </article>
            </Link>

            <Link
              href="https://bontoc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article className="flex h-full flex-col gap-4">
                <Image
                  src="/bond.jpeg"
                  alt="Bon Toc"
                  width={700}
                  height={420}
                  className="h-[220px] w-full rounded-[12px] object-cover sm:h-[280px] md:h-[340px]"
                />
                <div className="flex flex-col gap-1">
                  <p className="eyebrow">E-COMMERCE</p>
                  <h3 className="card-title">Bon Toc</h3>
                  <p className="text-small">Mejor conversión online</p>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA MESSAGE */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 text-center">
          <h2 className="section-title max-w-4xl">
            Trabajamos  online con negocios 
             
            <span className="block text-[var(--primary)]">
            de toda  España
            </span>
          </h2>
          <p className="text-body">
        Diseñamos  web enfocadas en generar clientes
            Si quieres más visibilidad y clientes, podemos ayudarte. Creamos webs que convierten visitas en oportunidades reales.
   </p>
        </div>
      </section>

      {/* PRICE */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 text-center">
          <h2 className="section-title max-w-lg">
            Web profesional para captar clientes por {" "}
            <strong className="text-[var(--primary)]">430€</strong>
          </h2>
          <p className="text-body">
            No necesitas la web más cara.
Necesitas una web bien planteada que funcione para tu negocio.
          </p>
          <Link href="/contacto" className="btn-black">
            QUIERO MI WEB 
          </Link>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <header className="flex flex-col gap-5">
            <p className="eyebrow">SOBRE NOSOTROS</p>

            <h2 className="section-title max-w-2xl">
              No hacemos solo webs bonitas.
              <span className="block">Hacemos webs que generan clientes.</span>
            </h2>

            <p className="text-small max-w-lg">
              Entendemos cómo funciona tu negocio y creamos webs pensadas para posicionar, generar confianza y convertir visitas en clientes.
            </p>

            <div>
              <Link
                href="/sobre-nosotros"
                className="inline-block border-b border-black pb-1"
              >
                Conocer más →
              </Link>
            </div>
          </header>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-[8px] bg-[#f9f5ed] p-6">
              <h3 className="mb-4 font-semibold">Somos</h3>

              <ul className="flex flex-col gap-3 text-sm">
                <li>
                  <span className="mr-2 text-[var(--primary)]">•</span>
                  Cercanos y enfocados en tu negocio
                </li>
                <li>
                  <span className="mr-2 text-[var(--primary)]">•</span>
                   Estratégicos, no solo diseño
                </li>
                <li>
                  <span className="mr-2 text-[var(--primary)]">•</span>
                  Enfocados en resultados reales
                </li>
                <li>
                  <span className="mr-2 text-[var(--primary)]">•</span>
                  Especializados en turismo, salud y marca personal
                </li>
              </ul>
            </article>

            <article className="rounded-[8px] bg-black p-6 text-white">
              <h3 className="mb-4 font-semibold">No somos</h3>

              <ul className="flex flex-col gap-3 text-sm">
                <li>
                  <span className="mr-2 text-gray-400">•</span>
                  Una agencia masiva
                </li>
                <li>
                  <span className="mr-2 text-gray-400">•</span>
                  Webs basadas en plantillas genéricas
                </li>
                <li>
                  <span className="mr-2 text-gray-400">•</span>
                  Proyectos sin seguimiento ni estrategia  
                </li>
                <li>
                  <span className="mr-2 text-gray-400">•</span>
                  Diseños pensados solo para verse   
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* DISCLAIMER */}
      <section className="px-6 py-16 md:px-10 md:py-24  lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 className="section-title mb-4">
            Una web es una herramienta, no un milagro
          </h2>
          <p className="text-body mb-3 max-w-2xl ">
           Una buena web puede ayudarte a conseguir más clientes, pero no lo es todo.
            También influyen tu servicio, precios o la demanda de tu sector.
          </p>
          <p className="text-body max-w-2xl pb-3">
            Nuestro trabajo es que tu web esté preparada para:
          </p>
          <ul className="flex flex-col gap-2 text-sm text-left">
            <li>
              <span className="mr-2 text-[var(--primary)]">✓</span>
              Posicionarse en Google  
            </li>
            <li>
              <span className="mr-2 text-[var(--primary)]">✓</span>
              Transmitir confianza 
            </li>
            <li>
              <span className="mr-2 text-[var(--primary)]">✓</span>
              Facilitar el contacto
            </li>
          </ul>
          <p className="text-body max-w-2xl text-left pt-3 ">
            Para que cada visita tenga sentido.
          </p>
        </div>
      </section>

      {/* BLACK CTA */}
     

      {/* FINAL CTA */}
      <section className="section-black px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 text-center">
          <h2 className="section-title text-white">Tu web puede ser tu mejor vendedor… <span className=""> o solo un gasto más</span>
          </h2>
          <p className="text-body">
            Si ahora no te genera clientes, no está haciendo su trabajo.
Vamos a cambiar eso.
          </p>
          <Link className="btn-primary" href="/contacto">
             EMPEZAR MI PROYECTO
          </Link>
        </div>
      </section>
    </main>
  );
}