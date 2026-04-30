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
                Diseño web para turismo
              </p>

              <h1 className="hero-title max-w-3xl">
                Consigue más reservas directas en tu web
               
              </h1>

              <p className="text-body max-w-2xl">
                Diseñamos páginas web para hoteles, restaurantes y 
                alojamientos turísticos en Girona y la Costa Brava,
                 enfocadas en aumentar tus reservas y reducir la dependencia de plataformas como Booking o Airbnb.
              </p>
            </header>

            <ul className="grid  gap-3 sm:grid-cols-2 xl:grid-cols-1">
              <li className="flex items-center gap-3 rounded-[8px] bg-white p-4 text-sm">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                <span>Aumenta tus reservas directas sin comisiones </span>
              </li>

              <li className="flex items-center gap-3 rounded-[8px] bg-white p-4 text-sm">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                <span>Reduce la dependencia de Booking y Airbnb </span>
              </li>

              <li className="flex items-center gap-3 rounded-[8px] bg-white p-4 text-sm">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                <span>Convierte visitas en reservas reales </span>
              </li>
            </ul>

            <div className="flex flex-col items-start gap-2">
              <Link className="btn-black text-sm" href="/contacto">
                QUIERO MÁS RESERVAS DIRECTAS
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
             
            </h2>

            <p className="text-small max-w-xl">
              
                El problema no es tener web.
                Es que no está pensada para que el cliente reserve.
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
              <span>Reservar es complicado y el cliente abandona </span>
            </li>
          </ul>
          <p className="text-body">  Cada sector necesita una estrategia diferente.</p>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="order-1 flex flex-col gap-4 lg:order-2">
            <p className="eyebrow">La solución</p>

            <h2 className="section-title max-w-xl">
              Una web pensada
              <span className="block text-[var(--primary)]">para generar reservas directas
</span>
            </h2>

            <p className="text-body max-w-lg">
              No se trata solo de diseño.
              <span className="block">Se trata de crear una web clara, rápida y enfocada en facilitar la reserva.</span>
            </p>
          </div>

          <ul className="order-2 flex flex-col gap-3 lg:order-1">
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

            <p className="text-body">Conocemos cómo funciona el sector turístico desde dentro.</p>

            <p className="text-small max-w-2xl">
              Sabemos cómo decide un cliente dónde reservar y qué hace que elija una opción u otra.
            </p>

            <blockquote className="max-w-2xl rounded-[8px] border-l-2 border-[var(--primary)] px-4 py-3">
              No diseñamos webs bonitas. <strong className="block">Diseñamos webs que convierten en reservas.</strong>
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
              La diferencia entre tener una web <span className="block text-[var(--primary)]" >y tener un canal de reservas</span>
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
                  <span>Plantillas sin estrategia </span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  <span>Dependencia de plataformas </span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  <span>Baja conversión</span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  <span>Web generica</span>
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
                  <span>Web estratégica enfocada en reservas </span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  <span>Diseño a medida para tu negocio </span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  <span>Más reservas directas</span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  <span>Optimizada para generar ingresos</span>
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
              <span>Más visibilidad en Google y mejor conversión </span>
            </li>
          </ul>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col items-center gap-4 text-center">
            <p className="eyebrow">Qué incluye</p>
            <h2 className="section-title">Todo lo que necesitas para conseguir reservas desde tu web
</h2>
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
              <span>Diseño enfocado en convertir visitas en clientes </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Integración con sistema de reservas </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Web rápida y optimizada para todos los dispositivos </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Base SEO para atraer clientes en Girona y Costa Brava </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[var(--background)] p-4">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              <span>Diseño alineado con la experiencia de tu negocio </span>
            </li>
          </ul>
        </div>
      </section>

      {/* PROCESO */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col gap-4">
            <p className="eyebrow">Cómo creamos tu web paso a paso</p>

            <h2 className="section-title max-w-4xl">
              Un proceso simple para que tu web   <span className="text-[var(--primary)] block">empiece a darte resultados
</span>
            </h2>
          </header>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">01</p>
              <h3 className="card-title">Analizamos tu negocio y cómo consigues reservas</h3>
              <p className="text-small">
                Estudiamos cómo llegan tus clientes y qué necesita tu negocio para aumentar reservas directas desde tu web.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">02</p>
              <h3 className="card-title">Diseñamos una web pensada para posicionar y convertir</h3>
              <p className="text-small">
                Creamos una web clara, rápida y optimizada para destacar en Google y guiar al usuario hasta la reserva.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">03</p>
              <h3 className="card-title"> Lanzamos tu web lista para generar reservas</h3>
              <p className="text-small">
                Publicamos tu web preparada para atraer visitas, posicionarse en Girona y convertirlas en reservas reales.
              </p>
            </article>

           
          </div>
          <p className="text-body pt-6">Publicamos tu web preparada para atraer visitas, posicionarse en Girona y convertirlas en reservas reales.</p>
        </div>
      </section>

      {/* MENSAJE */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h2 className="section-title max-w-4xl">
            Tu negocio ya ofrece una gran experiencia.
          </h2>

          <p className="text-body max-w-2xl">
            Muchos negocios cuidan cada detalle de su espacio, pero su web no lo refleja.
Diseñamos webs pensadas para transmitir confianza y generar más reservas directas, sin depender de plataformas externas.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-4">
              <h2 className="section-title max-w-4xl">
                Diseño web para negocios turísticos  <span className="text-[var(--primary)] block">en Girona y la Costa Brava</span>
              </h2>

              <p className="text-body max-w-2xl">
                Creamos páginas web pensadas para aumentar tus reservas directas y reducir comisiones.
              </p>
            </header>

            <div className="flex flex-col items-start gap-2 pt-2">
              <Link className="btn-primary text-sm" href="/contacto">
                QUIERO MÁS RESERVAS DIRECTAS
              </Link>
              <p className="text-xs">Respuesta en menos de 24 horas</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}