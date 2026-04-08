/**
 * FILE: app/negocio/turismo/page.tsx
 *
 * PAGE: NEGOCIO TURISMO
 *
 * Página de captación para negocios turísticos.
 * Versión responsive con composición visual estable
 * en móvil y solapado limpio en desktop.
 */

import Image from "next/image";
import Link from "next/link";

export default function NegocioTurismoPage() {
  return (
    <main>
      {/* HERO */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(420px,560px)] lg:items-center lg:gap-16">
          {/* HERO LEFT */}
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
              <li className="flex items-center gap-3 rounded-[8px] bg-white p-4 text-sm">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                <span>Aumenta tus reservas directas (sin intermediarios)</span>
              </li>

              <li className="flex items-center gap-3 rounded-[8px] bg-white p-4 text-sm">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                <span>Reduce la dependencia de Booking y Airbnb</span>
              </li>

              <li className="flex items-center gap-3 rounded-[8px] bg-white p-4 text-sm">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                <span>Mejora la experiencia de tus clientes</span>
              </li>
            </ul>

            <div className="flex flex-col items-start gap-2">
              <Link className="btn-black text-sm" href="/contacto">
                QUIERO MÁS RESERVAS DIRECTAS →
              </Link>
              <p className="text-xs">Respuesta en menos de 24 horas</p>
            </div>
          </div>

          {/* HERO RIGHT */}
          <div className="relative mx-auto w-full max-w-[560px]">
            {/* MOBILE / TABLET */}
            <div className="flex flex-col gap-4 lg:hidden">
              <div className="overflow-hidden rounded-[12px] bg-black/40 p-1 shadow-lg">
                <Image
                  src="/hotel.jpeg"
                  alt="Página web para hotel o alojamiento turístico"
                  width={470}
                  height={310}
                  className="block h-auto w-full rounded-[10px] object-cover"
                  priority
                />
              </div>

              <div className="overflow-hidden rounded-[12px] bg-black/40 p-1 shadow-lg">
                <Image
                  src="/rest.jpeg"
                  alt="Página web para restaurante o negocio turístico"
                  width={470}
                  height={310}
                  className="block h-auto w-full rounded-[10px] object-cover"
                  priority
                />
              </div>
            </div>

            {/* DESKTOP */}
            <div className="relative hidden h-[520px] w-full lg:block">
              {/* TOP IMAGE */}
              <div className="absolute top-0 left-1/2 w-[500px] -translate-x-1/2 overflow-hidden rounded-[12px] bg-black/40 p-1 shadow-lg">
                <Image
                  src="/hotel.jpeg"
                  alt="Página web para hotel o alojamiento turístico"
                  width={500}
                  height={330}
                  className="block h-auto w-full  rounded-[10px] object-cover"
                  priority
                />
              </div>

              {/* BOTTOM IMAGE */}
              <div className="absolute bottom-0 left-[88px] w-[390px] overflow-hidden rounded-[12px] bg-black/40 p-1 shadow-xl">
                <Image
                  src="/rest.jpeg"
                  alt="Página web para restaurante o negocio turístico"
                  width={390}
                  height={255}
                  className="block h-auto w-full rounded-[10px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
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
            <li className="flex items-start gap-3 rounded-[8px] bg-white p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              <span>Dependencia de plataformas como Booking y Airbnb</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-white p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              <span>Pierdes dinero en comisiones en cada reserva</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-white p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              <span>Tu web no convierte visitas en reservas</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-white p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              <span>No transmite la experiencia real de tu negocio</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-white p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              <span>Reservar es complicado y el cliente se va</span>
            </li>
          </ul>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="order-2 flex flex-col gap-4 lg:order-2">
            <p className="eyebrow">La solución</p>

            <h2 className="section-title max-w-xl">
              Una web pensada
              <span className="block">para generar reservas reales</span>
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

      {/* DIFERENCIA */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
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

          <div className="hidden lg:block" />
        </div>
      </section>

      {/* COMPARATIVA */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col items-center text-center">
            <p className="eyebrow">Comparativa</p>
            <h2 className="section-title max-w-4xl">
              La diferencia entre tener una web y tener un canal de reservas
            </h2>
          </header>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[12px] border border-black/10 p-6">
              <h3 className="mb-5 font-bold">Web genérica</h3>

              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  <span>Web genérica</span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  <span>Plantillas</span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  <span>Dependencia de plataformas</span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  <span>Baja conversión</span>
                </li>
              </ul>
            </article>

            <article className="rounded-[12px] border border-[var(--primary)] p-6">
              <h3 className="mb-5 font-bold">FITYX DIGITAL</h3>

              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  <span>Web estratégica FITYX DIGITAL</span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  <span>Diseño a medida</span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  <span>Reservas directas</span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  <span>Optimizada para negocio real</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col items-center text-center">
            <p className="eyebrow">Resultados</p>
            <h2 className="section-title">Lo que cambia en tu negocio</h2>
          </header>

          <ul className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Más reservas directas sin comisiones</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Más margen por cliente</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Mejor percepción de calidad</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Diferenciación frente a la competencia</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4 md:col-span-2">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Más visibilidad y mejor conversión desde tu web</span>
            </li>
          </ul>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col items-center gap-4 text-center">
            <p className="eyebrow">Qué incluye</p>
            <h2 className="section-title">Todo lo que necesitas</h2>
          </header>

          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Web adaptada a tu negocio turístico</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Diseño enfocado en convertir visitas en clientes</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Integración con sistema de reservas</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Diseño alineado con la experiencia de tu negocio</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Web rápida y optimizada para todos los dispositivos</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Base SEO para atraer clientes en tu zona</span>
            </li>
          </ul>
        </div>
      </section>

      {/* PROCESO */}
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

      {/* MENSAJE */}
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

      {/* CTA FINAL */}
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
                QUIERO MÁS RESERVAS DIRECTAS →
              </Link>
              <p className="text-xs">Respuesta en menos de 24 horas</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}