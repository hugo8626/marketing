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
              <h1 className="hero-title max-w-[23ch]">
                Tu web debería ayudarte a conseguir clientes,{" "}
                <span className="text-[var(--primary)]">
                  no solo verse bonita
                </span>
              </h1>

              <p className="text-body max-w-[35ch]">
                Ayudamos a negocios de turismo, salud y marca personal en Girona
                a conseguir resultados reales con un diseño web estratégico.
              </p>
            </header>

            {/* HERO BENEFITS DESKTOP */}
            <ul className="hidden items-center gap-4 text-[13px] leading-none xl:flex">
              <li className="flex items-center gap-2 whitespace-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4 shrink-0 text-[var(--primary)]"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5"
                  />
                </svg>
                <span>Más reservas directas</span>
              </li>

              <li className="flex items-center gap-2 whitespace-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4 shrink-0 text-[var(--primary)]"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
                <span>Más citas y confianza</span>
              </li>

              <li className="flex items-center gap-2 whitespace-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4 shrink-0 text-[var(--primary)]"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                  />
                </svg>
                <span>Más oportunidades de negocio</span>
              </li>
            </ul>

            {/* HERO BENEFITS MOBILE/TABLET */}
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] leading-none xl:hidden">
              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✦</span>
                <span>Más reservas directas</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✦</span>
                <span>Más citas y confianza</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✦</span>
                <span>Más oportunidades de negocio</span>
              </li>
            </ul>

            {/* HERO CTA */}
            <div className="flex flex-col items-start gap-2">
              <Link className="btn-black text-sm" href="/contacto">
                QUIERO EMPEZAR MI PROYECTO →
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
                ¿QUÉ TIPO DE NEGOCIO TIENES?
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <Link href="/restauracion" className="group block h-full">
                  <article className="h-full min-h-[170px] rounded-[8px] border border-[var(--border)] bg-white px-6 py-6 transition-colors duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#faf7ef]">
                    <h3 className="mb-3 font-['ClashDisplay'] text-[17px] leading-[1.35] font-semibold text-black">
                      Tengo un negocio turístico
                    </h3>

                    <p className="font-['Inter'] text-[15px] leading-7 text-[var(--text-muted)]">
                      Quiero más reservas directas (sin pagar comisiones)
                    </p>
                  </article>
                </Link>

                <Link href="/salud" className="group block h-full">
                  <article className="h-full min-h-[170px] rounded-[8px] border border-[var(--border)] bg-white px-6 py-6 transition-colors duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#faf7ef]">
                    <h3 className="mb-3 font-['ClashDisplay'] text-[17px] leading-[1.35] font-semibold text-black">
                      Tengo un negocio de salud o bienestar
                    </h3>

                    <p className="font-['Inter'] text-[15px] leading-7 text-[var(--text-muted)]">
                      Quiero más pacientes y transmitir confianza
                    </p>
                  </article>
                </Link>

                <Link href="/marca-personal" className="group block h-full">
                  <article className="h-full min-h-[170px] rounded-[8px] border border-[var(--border)] bg-white px-6 py-6 transition-colors duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#faf7ef]">
                    <h3 className="mb-3 font-['ClashDisplay'] text-[17px] leading-[1.35] font-semibold text-black">
                      Tengo una marca personal
                    </h3>

                    <p className="font-['Inter'] text-[15px] leading-7 text-[var(--text-muted)]">
                      Quiero más oportunidades de negocio
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
                    className="block h-auto w-full object-cover"
                    priority
                  />
                </div>

                {/* DECORATIVE BOX */}
                <div
                  aria-hidden="true"
                  className="absolute left-[-10px] top-[76%] z-0 h-[56px] w-[56px] border border-[var(--primary)]/40 sm:h-[68px] sm:w-[68px] lg:left-[-18px] lg:top-[400px] lg:h-[84px] lg:w-[84px]"
                />
              </div>

              {/* MESSAGE BELOW MEDIA */}
              <p className="text-small mt-3 max-w-[300px] italic">
                Ayudamos a negocios de hospitalidad y salud en Girona a conseguir
                resultados reales con un diseño web estratégico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MESSAGE BLOCK */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h2 className="section-title">
            Tener una web no significa
            <span className="block text-[var(--primary)]">
              que esté funcionando
            </span>
          </h2>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">Lo que pasa en la mayoría de webs</p>

            <h2 className="section-title max-w-2xl">
              Muchos negocios tienen web…
              <span className="block">pero no les genera clientes.</span>
            </h2>

            <p className="text-small max-w-xl">
              El problema no es tener web, es cómo está pensada para tu negocio
              y su capacidad de generar resultados.
            </p>
          </header>

          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3 rounded-[8px] bg-white p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              <span>No transmite claramente lo que haces</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-white p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              <span>No genera confianza en segundos</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-white p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              <span>No está pensada para convertir visitas en clientes</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-white p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              <span>No facilita que el cliente te contacte</span>
            </li>
          </ul>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <header className="order-2 flex flex-col gap-4 lg:order-2">
            <p className="eyebrow">La solución</p>

            <h2 className="section-title max-w-xl">
              Creamos webs pensadas para convertir
            </h2>

            <p className="text-small max-w-lg">
              Cada decisión está enfocada en una cosa: que tu web comunique
              mejor, genere confianza y facilite oportunidades reales de
              negocio.
            </p>
          </header>

          <ul className="order-1 flex flex-col gap-3 lg:order-1">
            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] leading-none text-[var(--primary)]">
                ✔
              </span>
              <span className="text-small text-black">
                Estructura clara y pensada para guiar al usuario
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] leading-none text-[var(--primary)]">
                ✔
              </span>
              <span className="text-small text-black">
                Mensaje directo que transmite lo que haces
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] leading-none text-[var(--primary)]">
                ✔
              </span>
              <span className="text-small text-black">
                Diseño profesional que genera confianza
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] leading-none text-[var(--primary)]">
                ✔
              </span>
              <span className="text-small text-black">
                Enfoque en facilitar el contacto
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col gap-4">
            <p className="eyebrow">Cómo trabajamos</p>

            <h2 className="section-title max-w-4xl">
              Un proceso simple, claro y pensado para que tu web funcione desde
              el primer día.
            </h2>
          </header>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">01</p>
              <h3 className="card-title">Entendemos tu negocio</h3>
              <p className="text-small">
                Analizamos tu situación, objetivos y tipo de cliente. Nos
                encargamos de todo.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">02</p>
              <h3 className="card-title">Definimos la estructura</h3>
              <p className="text-small">
                Organizamos tu web para que sea clara, lógica y orientada a
                conversión.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">03</p>
              <h3 className="card-title">Diseñamos y desarrollamos</h3>
              <p className="text-small">
                Creamos una web rápida, profesional y adaptada a tu negocio.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">04</p>
              <h3 className="card-title">Lanzamos y optimizamos</h3>
              <p className="text-small">
                Publicamos tu web lista para generar oportunidades reales.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col gap-4">
            <p className="eyebrow">Servicios</p>
            <h2 className="section-title max-w-4xl">
              Servicios diseñados para generar resultados
            </h2>
            <p className="text-body max-w-3xl">
              No todos los negocios están en el mismo punto. Por eso cada
              servicio responde a una necesidad diferente.
            </p>
          </header>

          <div className="mb-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <Link href="/servicios#onePage" className="group block h-full">
              <article className="card h-full border border-transparent p-4 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg">
                <h3 className="card-title">Empieza con una web que funcione</h3>
                <p className="mb-3 text-small italic">
                  Ideal si estás empezando o quieres validar tu negocio online
                </p>
                <p className="text-body">
                  Una web clara, rápida y pensada para empezar a atraer clientes
                  desde el inicio
                </p>
                <span className="mt-4 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                  →
                </span>
              </article>
            </Link>

            <Link href="/servicios#webFull" className="group block h-full">
              <article className="card h-full border border-transparent p-4 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg">
                <h3 className="card-title">Escala tu negocio online</h3>
                <p className="mb-3 text-small italic">
                  Ideal si quieres crecer y convertir tu web en tu principal
                  canal de captación
                </p>
                <p className="text-body">
                  Una web completa con estructura estratégica para crecer,
                  posicionarte y generar más oportunidades
                </p>
                <span className="mt-4 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                  →
                </span>
              </article>
            </Link>

            <Link href="/servicios#landing" className="group block h-full">
              <article className="card h-full border border-transparent p-4 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg">
                <h3 className="card-title">Convierte visitas en clientes</h3>
                <p className="mb-3 text-small italic">
                  Ideal si estás invirtiendo en publicidad o campañas
                </p>
                <p className="text-body">
                  Landing pages optimizadas para anuncios, campañas y captación
                </p>
                <span className="mt-4 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                  →
                </span>
              </article>
            </Link>

            <Link href="/servicios#socials" className="group block h-full">
              <article className="card h-full border border-transparent p-4 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg">
                <h3 className="card-title">
                  Gana visibilidad en redes de forma constante
                </h3>
                <p className="mb-3 text-small italic">
                  Ideal si quieres atraer clientes y mantener presencia activa
                </p>
                <p className="text-body">
                  Contenido estratégico para reforzar tu marca y generar
                  oportunidades.
                </p>
                <span className="mt-4 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                  →
                </span>
              </article>
            </Link>

            <Link href="/servicios#fotografia" className="group block h-full">
              <article className="card h-full border border-transparent p-4 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg">
                <h3 className="card-title">
                  Haz que tu negocio transmita confianza
                </h3>
                <p className="mb-3 text-small italic">
                  Ideal si necesitas mejorar tu imagen profesional
                </p>
                <p className="text-body">
                  Fotografía pensada para generar confianza y mejorar la
                  percepción de tu marca
                </p>
                <span className="mt-4 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                  →
                </span>
              </article>
            </Link>

            <Link href="/servicios#optimizacion" className="group block h-full">
              <article className="card h-full border border-transparent p-4 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg">
                <h3 className="card-title">Mejora lo que ya tienes</h3>
                <p className="mb-3 text-small italic">
                  Ideal si tu web no está dando resultados
                </p>
                <p className="text-body">
                  Optimizamos tu web para que convierta mejor y genere más
                  oportunidades
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
              TE AYUDAMOS A ELEGIR
            </Link>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section-grey px-4 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col items-center gap-4 text-center">
            <p className="eyebrow">Comparativa</p>
            <h2 className="section-title max-w-4xl">
              No todas las webs se construyen de la misma
              <span className="block">manera.</span>
            </h2>
            <p className="text-body max-w-5xl">
              Existen diferentes formas de crear una web. Nosotros trabajamos
              con desarrollo a medida porque nos permite adaptar cada detalle a
              tu negocio, y no al revés.
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
                    Diseño adaptado a tu negocio
                  </span>
                </li>
                <li className="border-b border-gray-200 pb-4">
                  <span className="block font-medium text-black">Integración</span>
                  <span>
                    <span className="mr-2 text-[var(--primary)]">✓</span>
                    Todo funciona de forma integrada
                  </span>
                </li>
                <li className="border-b border-gray-200 pb-4">
                  <span className="block font-medium text-black">Velocidad</span>
                  <span>
                    <span className="mr-2 text-[var(--primary)]">✓</span>
                    Rápida desde el inicio
                  </span>
                </li>
                <li className="border-b border-gray-200 pb-4">
                  <span className="block font-medium text-black">Escalabilidad</span>
                  <span>
                    <span className="mr-2 text-[var(--primary)]">✓</span>
                    Preparada para crecer contigo
                  </span>
                </li>
                <li>
                  <span className="block font-medium text-black">SEO</span>
                  <span>
                    <span className="mr-2 text-[var(--primary)]">✓</span>
                    Optimizada para posicionar
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
                  Diseño adaptado a tu negocio
                </p>
              </div>

              <div className="grid grid-cols-3 items-center border-b border-gray-200 py-6">
                <p>Integración</p>
                <p className="text-muted">
                  ✕ Depende de múltiples herramientas
                </p>
                <p>
                  <span className="mr-2 text-[var(--primary)]">✓</span>
                  Todo funciona de forma integrada
                </p>
              </div>

              <div className="grid grid-cols-3 items-center border-b border-gray-200 py-6">
                <p>Velocidad</p>
                <p className="text-muted">
                  ✕ Puede volverse lenta con el tiempo
                </p>
                <p>
                  <span className="mr-2 text-[var(--primary)]">✓</span>
                  Rápida desde el inicio
                </p>
              </div>

              <div className="grid grid-cols-3 items-center border-b border-gray-200 py-6">
                <p>Escalabilidad</p>
                <p className="text-muted">✕ Limitada para crecer</p>
                <p>
                  <span className="mr-2 text-[var(--primary)]">✓</span>
                  Preparada para crecer contigo
                </p>
              </div>

              <div className="grid grid-cols-3 items-center border-b border-gray-200 py-6">
                <p>SEO</p>
                <p className="text-muted">✕ SEO básico</p>
                <p>
                  <span className="mr-2 text-[var(--primary)]">✓</span>
                  Optimizada para posicionar
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
            <p className="eyebrow">Proyectos</p>
            <h2 className="section-title">
              Proyectos reales. Resultados que se notan.
            </h2>
            <p className="text-body max-w-4xl">
              Cada proyecto está pensado para que tu negocio se vea mejor online
              y convierta visitas en oportunidades de negocio.
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
                  src="/sal.png"
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
                  src="/bon.png"
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
            La diferencia no está en tener web,
            <span className="block">sino en cómo está planteada.</span>
            <span className="block text-[var(--primary)]">
              Creamos webs que ayudan a tu negocio a crecer.
            </span>
          </h2>
          <p className="text-body">
            Cada decisión está enfocada en una cosa: que tu web funcione.
          </p>
        </div>
      </section>

      {/* PRICE */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 text-center">
          <h2 className="section-title max-w-lg">
            Empieza con una One Page desde{" "}
            <strong className="text-[var(--primary)]">400€</strong>
          </h2>
          <p className="text-body">
            Una web clara, rápida y pensada para empezar a generar clientes.
          </p>
          <Link href="/contacto" className="btn-black">
            QUIERO MI WEB →
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
              <span className="block">Hacemos webs que funcionan.</span>
            </h2>

            <p className="text-small max-w-lg">
              Entendemos cómo funciona un negocio y creamos webs pensadas para
              conseguir resultados y atraer clientes.
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
                  Cercanos
                </li>
                <li>
                  <span className="mr-2 text-[var(--primary)]">•</span>
                  Estratégicos
                </li>
                <li>
                  <span className="mr-2 text-[var(--primary)]">•</span>
                  Enfocados en resultados
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
                  Agencia masiva
                </li>
                <li>
                  <span className="mr-2 text-gray-400">•</span>
                  Plantillas genéricas
                </li>
                <li>
                  <span className="mr-2 text-gray-400">•</span>
                  Proyectos sin seguimiento
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* DISCLAIMER */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 className="section-title mb-4">
            Una web es una herramienta, no un milagro
          </h2>
          <p className="text-body mb-3 max-w-2xl">
            Una web bien hecha puede mejorar tus resultados, pero no lo es todo.
            También influyen factores como tu servicio, precios o la demanda.
          </p>
          <p className="text-body max-w-2xl">
            Nuestro trabajo es que tu web esté preparada para comunicar mejor,
            generar confianza y facilitar oportunidades reales de negocio.
          </p>
        </div>
      </section>

      {/* BLACK CTA */}
      <section className="section-black px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="section-title mb-2 text-white">
            Tu web no es solo una web.
            <span className="block text-[var(--primary)]">
              Es tu canal de ventas.
            </span>
          </h2>
          <p className="text-body text-white/70">
            Si tu web no está generando clientes, no está haciendo su trabajo.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 text-center">
          <h2 className="section-title">¿Listo para empezar?</h2>
          <p className="text-body">
            Tu próximo cliente está a un clic de distancia.
          </p>
          <Link className="btn-primary" href="/contacto">
            Empezar proyecto
          </Link>
        </div>
      </section>
    </main>
  );
}