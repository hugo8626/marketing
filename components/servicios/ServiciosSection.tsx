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

          <h1 className="hero-title">Soluciones para atraer clientes online</h1>

          <p className="text-body max-w-2xl">
            No se trata solo de tener una web, sino de construir una presencia digital que funcione.
          </p>
          <p className="text-body max-w-2xl">
            Cada negocio está en un punto diferente: empezar, mejorar o escalar.
Aquí tienes cómo podemos ayudarte según tu situación.</p>
        </header>

        {/* SERVICES GRID */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <Link href="/servicios/one-page" className="group block h-full">
            <article className="flex h-full min-h-[230px] flex-col items-center rounded-[8px] border border-transparent bg-[#F5F5F5] p-6 text-center transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg md:p-8">
              <h2 className="card-title">One Page</h2>

              <p className="mt-4 text-body">
                
Ideal para empezar a conseguir tus primeros clientes sin complicaciones
              </p>

              <span className="mt-8 inline-block text-[var(--primary)] ">
                →
              </span>
            </article>
          </Link>

          <Link href="/servicios/web-completa" className="group block h-full">
            <article className="flex h-full min-h-[230px] flex-col items-center rounded-[8px] border border-transparent bg-[#F5F5F5] p-6 text-center transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg md:p-8">
              <h2 className="card-title">Web completa
</h2>

              <p className="mt-4 text-body">
                Pensada para posicionarte en Google y generar clientes de forma constante
              </p>

              <span className="mt-8 inline-block text-[var(--primary)] ">
                →
              </span>
            </article>
          </Link>

          <Link href="/servicios/landing-page" className="group block h-full">
            <article className="flex h-full min-h-[230px] flex-col items-center rounded-[8px] border border-transparent bg-[#F5F5F5] p-6 text-center transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg md:p-8">
              <h2 className="card-title">Landing page</h2>

              <p className="mt-4 text-body">
                Optimizada para convertir visitas en clientes desde campañas y anuncios 
              </p>

              <span className="mt-8 inline-block text-[var(--primary)] ">
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
                Atrae clientes de forma constante con contenido estratégico
              </p>

              <span className=" mt-8 inline-block text-[var(--primary)] ">
                →
              </span>
            </article>
          </Link>

          <Link href="/servicios/fotografia" className="group block h-full">
            <article className="flex h-full min-h-[230px] flex-col items-center rounded-[8px] border border-transparent bg-[#F5F5F5] p-6 text-center transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg md:p-8">
              <h2 className="card-title">Fotografía</h2>

              <p className="mt-4 text-body">
                Genera confianza y mejora la percepción de tu negocio desde el primer vistazo
              </p>

              <span className="mt-8 inline-block text-[var(--primary)] ">
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
                Convierte tu web actual en una herramienta que genere resultados
              </p>

              <span className="mt-8 inline-block text-[var(--primary)] ">
                →
              </span>
            </article>
          </Link>
        </div>

        {/* BOTTOM MESSAGE */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="section-title">
            No se trata solo de tener una web.
          </h2>

          <p className="text-body">
            Es una herramienta para atraer clientes y hacer crecer tu negocio, empezando por entender tus necesidades y convertirlas en resultados. Si no lo tienes claro, te ayudamos a definirlo.

          </p>

       
          <Link
            href="/sobre-nosotros"
            className="btn-primary"
          >
            Cuéntanos tu caso →
          </Link>
        </div>
      </div>
    </section>
  );
}