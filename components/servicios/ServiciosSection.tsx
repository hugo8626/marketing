// FILE: components/servicios/ServiciosSection.tsx
//
// SECTION: SERVICIOS
//
// Bloque de servicios responsive con cabecera, grid de cards
// y cierre con mensaje final orientado a conversión.

import Link from "next/link";

export default function ServiciosSection() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 md:gap-16 lg:gap-20">
        {/* HEADER */}
        <header className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <p className="eyebrow">Servicios</p>

          <h1 className="hero-title">Lo que hacemos</h1>

          <p className="text-body max-w-2xl">
            Diseño web y soluciones digitales para negocios que quieren crecer
            con estrategia, diseño y tecnología.
          </p>
        </header>

        {/* SERVICES GRID */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <Link href="/servicios/one-page" className="group block h-full">
            <article className="flex h-full min-h-[230px] flex-col items-center rounded-[8px] border border-transparent bg-[#F5F5F5] p-6 text-center transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg md:p-8">
              <h2 className="card-title">One Page</h2>

              <p className="mt-4 text-body">
                Una web directa, clara y enfocada a conversión, ideal para
                profesionales y negocios que necesitan presencia digital sin
                complicaciones.
              </p>

              <span className="mt-8 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </article>
          </Link>

          <Link href="/servicios/web-completa" className="group block h-full">
            <article className="flex h-full min-h-[230px] flex-col items-center rounded-[8px] border border-transparent bg-[#F5F5F5] p-6 text-center transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg md:p-8">
              <h2 className="card-title">Web completa</h2>

              <p className="mt-4 text-body">
                Un sitio web profesional con múltiples secciones, pensado para
                transmitir confianza, posicionarte como referente y generar
                clientes.
              </p>

              <span className="mt-8 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </article>
          </Link>

          <Link href="/servicios/landing-page" className="group block h-full">
            <article className="flex h-full min-h-[230px] flex-col items-center rounded-[8px] border border-transparent bg-[#F5F5F5] p-6 text-center transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg md:p-8">
              <h2 className="card-title">Landing page</h2>

              <p className="mt-4 text-body">
                Páginas de aterrizaje diseñadas para captar leads y convertir
                visitas en clientes con una propuesta clara y enfocada.
              </p>

              <span className="mt-8 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </article>
          </Link>

          <Link
            href="/servicios/gestion-contenidos"
            className="group block h-full"
          >
            <article className="flex h-full min-h-[230px] flex-col items-center rounded-[8px] border border-transparent bg-[#F5F5F5] p-6 text-center transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg md:p-8">
              <h2 className="card-title">Gestión de contenidos</h2>

              <p className="mt-4 text-body">
                Estrategia, creación y gestión de contenidos para que tu marca
                conecte, gane visibilidad y genere oportunidades reales.
              </p>

              <span className="mt-8 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </article>
          </Link>

          <Link href="/servicios/fotografia" className="group block h-full">
            <article className="flex h-full min-h-[230px] flex-col items-center rounded-[8px] border border-transparent bg-[#F5F5F5] p-6 text-center transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg md:p-8">
              <h2 className="card-title">Fotografía</h2>

              <p className="mt-4 text-body">
                Fotografía profesional para tu negocio, pensada para transmitir
                calidad, reforzar tu marca y mejorar la percepción de tus
                productos y servicios.
              </p>

              <span className="mt-8 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </article>
          </Link>

          <Link
            href="/servicios/optimizacion-web"
            className="group block h-full"
          >
            <article className="flex h-full min-h-[230px] flex-col items-center rounded-[8px] border border-transparent bg-[#F5F5F5] p-6 text-center transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg md:p-8">
              <h2 className="card-title">Optimización web</h2>

              <p className="mt-4 text-body">
                Mejoramos el rendimiento, la velocidad y la experiencia de tu
                web para que funcione mejor, posicione mejor y convierta más.
              </p>

              <span className="mt-8 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </article>
          </Link>
        </div>

        {/* BOTTOM MESSAGE */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <p className="text-body">
            No se trata solo de tener una web, sino de tener una herramienta que
            te ayude a conseguir clientes y hacer crecer tu negocio.
          </p>

          <p className="text-body">
            Por eso cada proyecto parte de entender qué necesitas y cómo
            convertirlo en resultados reales.
          </p>

          <p className="text-body">
            Si no tienes claro qué necesitas, podemos ayudarte a definirlo.
          </p>

          <Link
            href="/sobre-nosotros"
            className="mt-2 inline-block border-b border-[var(--primary)] pb-1 text-[var(--primary)] transition-opacity duration-300 hover:opacity-70"
          >
            Cuéntanos tu caso →
          </Link>
        </div>
      </div>
    </section>
  );
}