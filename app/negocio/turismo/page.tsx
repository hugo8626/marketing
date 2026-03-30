/**
 * FILE: app/negocio/turismo/page.tsx
 *
 * PAGE: NEGOCIO TURISMO
 *
 * Página de captación para negocios turísticos.
 * Mantiene el texto original del usuario y mejora
 * estructura, semántica y responsive.
 */

import Image from "next/image";
import Link from "next/link";

export default function NegocioTurismoPage() {
  return (
    <>
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-6">
              <p className="eyebrow">
                Diseño web para hoteles, restaurantes y alojamientos turísticos
                en Girona
              </p>

              <h1 className="hero-title max-w-3xl">
                Más reservas directas.{" "}
                <span className="text-[var(--primary)]">
                  Menos comisiones.
                </span>
              </h1>

              <p className="text-body max-w-2xl">
                Diseñamos páginas web para hoteles, restaurantes y alojamientos
                en Girona pensadas para aumentar las reservas directas, reducir
                la dependencia de plataformas como Booking y Airbnb y mejorar la
                experiencia de tus clientes.
              </p>
            </header>

            <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              <li className="rounded-[8px] bg-white p-4 text-sm">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                Aumenta tus reservas directas (sin intermediarios)
              </li>

              <li className="rounded-[8px] bg-white p-4 text-sm">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                Reduce la dependencia de Booking y Airbnb
              </li>

              <li className="rounded-[8px] bg-white p-4 text-sm">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                Mejora la experiencia de tus clientes
              </li>
            </ul>

            <div className="flex flex-col items-start gap-2">
              <Link className="btn-black text-sm" href="/contacto">
                QUIERO MAS RESERVAS DIRECTAS →
              </Link>
              <p className="text-xs">Respuesta en menos de 24 horas</p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              <video
                className="w-full rounded-[12px] shadow-lg"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/video.mp4" type="video/mp4" />
              </video>

              <Image
                src="/hero.jpeg"
                alt="Preview web"
                width={450}
                height={300}
                className="mt-4 w-full max-w-[240px] rounded-[12px] border-2 border-black shadow-lg sm:max-w-[300px] lg:absolute lg:-bottom-14 lg:right-8 lg:mt-0 lg:max-w-[360px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">El problema</p>

            <h2 className="section-title max-w-2xl">
              Muchos negocios turísticos tienen web…
              <span className="block">pero no les genera reservas.</span>
            </h2>

            <p className="text-small max-w-xl">
              El problema no es tener web, es cómo está pensada para tu negocio
              y su capacidad de generar resultados.
            </p>
          </header>

          <ul className="flex flex-col gap-3">
            <li className="rounded-[8px] bg-white p-4">
              <span className="mr-3 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              Dependencia de plataformas como Booking y Airbnb
            </li>

            <li className="rounded-[8px] bg-white p-4">
              <span className="mr-3 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              Pierdes dinero en comisiones en cada reserva
            </li>

            <li className="rounded-[8px] bg-white p-4">
              <span className="mr-3 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              Tu web no convierte visitas en reservas
            </li>

            <li className="rounded-[8px] bg-white p-4">
              <span className="mr-3 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              No transmite la experiencia real de tu negocio
            </li>

            <li className="rounded-[8px] bg-white p-4">
              <span className="mr-3 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              Reservar es complicado y el cliente se va
            </li>
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="order-2 flex flex-col gap-4 lg:order-2">
            <p className="eyebrow">La solución</p>

            <h2 className="section-title max-w-xl">
              Una web pensada
              <br />
              para generar reservas reales
            </h2>

            <p className="text-body max-w-lg">
              No se trata solo de diseño, sino de crear una experiencia clara,
              rápida y enfocada en facilitar la reserva.
            </p>
          </div>

          <ul className="order-1 flex flex-col gap-3 lg:order-1">
            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Estructura pensada para facilitar la reserva
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Botón de reserva visible en todo momento
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Integración con sistema de reservas
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Diseño que refleja la experiencia de tu negocio
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Optimización SEO para atraer clientes de tu zona
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-5">
            <p className="eyebrow">Por qué somos diferentes</p>

            <h2 className="section-title max-w-2xl">
              No somos solo desarrolladores
            </h2>

            <p className="text-body">Conocemos el sector desde dentro.</p>

            <p className="text-small max-w-2xl">
              Entendemos cómo funciona un restaurante, hotel y sitios turísticos
              por dentro, cómo decide un cliente antes de reservar y qué
              detalles marcan la diferencia entre elegirte a ti o a tu
              competencia.
            </p>

            <blockquote className="max-w-2xl rounded-[8px] border-l-2 border-[var(--primary)] px-4 py-3">
              No diseñamos webs bonitas. Diseñamos webs que convierten en
              reservas.
            </blockquote>
          </div>

          <div />
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col items-center text-center">
            <p className="eyebrow">comparativa</p>
            <h2 className="section-title max-w-4xl">
              La diferencia entre tener una web y tener un canal de reservas
            </h2>
          </header>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[12px] border border-black/10 p-6">
              <h3 className="mb-5 font-bold">Web genérica</h3>

              <ul className="flex flex-col gap-4">
                <li className="rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  Web genérica
                </li>

                <li className="rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  Plantillas
                </li>

                <li className="rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  Dependencia de plataformas
                </li>

                <li className="rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  Baja conversión
                </li>
              </ul>
            </article>

            <article className="rounded-[12px] border border-[var(--primary)] p-6">
              <h3 className="mb-5 font-bold">FITYX DIGITAL</h3>

              <ul className="flex flex-col gap-4">
                <li className="rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  Web estratégica FITYX DIGITAL
                </li>

                <li className="rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  Diseño a medida
                </li>

                <li className="rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  Reservas directas
                </li>

                <li className="rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  Optimizada para negocio real
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col items-center text-center">
            <p className="eyebrow">Resultados</p>
            <h2 className="section-title">Lo que cambia en tu negocio</h2>
          </header>

          <ul className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Más reservas directas sin comisiones
            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Más margen por cliente
            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Mejor percepción de calidad
            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Diferenciación frente a competencia
            </li>
            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Mejor percepción de calidad
            </li>
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col items-center gap-4 text-center">
            <p className="eyebrow">Qué incluye</p>
            <h2 className="section-title">Todo lo que necesitas</h2>
          </header>

          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Web adaptada a tu negocio turístico
            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Diseño enfocado en convertir visitas en clientes
            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Integración con sistema de reservas
            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Diseño enfocado en convertir visitas en clientes
            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Web rápida y optimizada para todos los dispositivos
            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Base SEO para atraer clientes en tu zona
            </li>
          </ul>
        </div>
      </section>

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

      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h2 className="section-title max-w-4xl">
            Tu negocio ya ofrece una gran experiencia.
          </h2>

          <p className="text-body max-w-2xl">
            Tu web debería ayudarte a llenar tu calendario con reservas
            directas, no depender de plataformas externas.
          </p>
        </div>
      </section>

      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-4">
              <h2 className="section-title max-w-4xl">
                Diseño web para negocios turísticos en Girona y Cataluña
              </h2>

              <p className="text-body max-w-2xl">
                Creamos páginas web para hoteles, restaurantes y alojamientos
                turísticos pensadas para aumentar las reservas directas y
                reducir la dependencia de plataformas como Booking y Airbnb.
              </p>
            </header>

            <div className="flex flex-col items-start gap-2 pt-2">
              <Link className="btn-primary text-sm" href="/contacto">
                QUIERO MAS RESERVAS DIRECTAS →
              </Link>
              <p className="text-xs">Respuesta en menos de 24 horas</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}