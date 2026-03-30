/**
 * FILE: app/negocio/salud/page.tsx
 *
 * PAGE: NEGOCIO SALUD
 *
 * Página de captación para negocios de salud.
 * Mantiene el texto original del usuario y mejora
 * estructura, semántica y responsive.
 */

import Image from "next/image";
import Link from "next/link";

export default function NegocioSaludPage() {
  return (
    <>
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-6">
              <p className="eyebrow">
               Diseño web para clínicas, consultas privadas y centros de bienestar en Girona
              </p>

              <h1 className="hero-title max-w-3xl">
                Más confianza.{" "}
                <span className="text-[var(--primary)]">
                  Más citas.
                </span>
              </h1>

              <p className="text-body max-w-2xl">
                Diseñamos páginas web para clínicas, consultas privadas y negocios de bienestar en Girona pensadas para transmitir
                 confianza, explicar claramente tus servicios y convertir visitas en pacientes.
              </p>
            </header>

            <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              <li className="rounded-[8px] bg-white p-4 text-sm">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                Más citas desde tu web
              </li>

              <li className="rounded-[8px] bg-white p-4 text-sm">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                Más confianza desde el primer contacto
              </li>

              <li className="rounded-[8px] bg-white p-4 text-sm">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                Mejor percepción profesional
              </li>
            </ul>

            <div className="flex flex-col items-start gap-2">
              <Link className="btn-black text-sm" href="/contacto">
                QUIERO MAS CITAS  →
              </Link>
              <p className="text-xs">Respuesta en menos de 24 horas</p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              

              <Image
                src="/salud.jpeg"
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
              Muchos centros tienen web…
                pero no generan confianza.
              
            </h2>

            <p className="text-small max-w-xl">
En salud, la duda frena la decisión.            </p>
          </header>

          <ul className="flex flex-col gap-3">
            <li className="rounded-[8px] bg-white p-4">
              <span className="mr-3 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              Textos técnicos que el paciente no entiende
            </li>

            <li className="rounded-[8px] bg-white p-4">
              <span className="mr-3 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              Información poco clara que genera dudas
            </li>

            <li className="rounded-[8px] bg-white p-4">
              <span className="mr-3 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              No transmite seguridad ni profesionalidad

            </li>

            <li className="rounded-[8px] bg-white p-4">
              <span className="mr-3 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              Credenciales poco visibles o inexistentes

            </li>

            <li className="rounded-[8px] bg-white p-4">
              <span className="mr-3 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                X
              </span>
              Proceso de cita confuso o complicado

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
                para generar confianza real
             
            </h2>

            
          </div>

          <ul className="order-1 flex flex-col gap-3 lg:order-1">
            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Explicación de tratamientos sin tecnicismos
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Refuerzo de credibilidad y confianza
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Integración directa de citas

              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Base SEO para atraer pacientes locales
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
              No es solo diseño. Es entender al paciente.
            </h2>

            <p className="text-body">Conocemos cómo funciona el sector salud y bienestar desde dentro.</p>

            <p className="text-small max-w-2xl">
              Sabemos qué necesita ver un paciente antes de pedir cita,
               qué le genera confianza y qué le hace dudar.
            </p>

            <blockquote className="max-w-2xl rounded-[8px] border-l-2 border-[var(--primary)] px-4 py-3">
              No diseñamos webs bonitas. Diseñamos webs que convierten en citas.
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
              La diferencia entre una web bonita y una web que genera citas

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
                  Información desordenada

                </li>

                <li className="rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  Textos poco claros

                </li>

                <li className="rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                    No transmite confianza
                </li>

                <li className="rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  Proceso de cita confuso

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
                    Mensajes claros y comprensibles
                </li>

                <li className="rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  Confianza desde el primer clic

                </li>

                <li className="rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  Cita fácil y directa

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
            <h2 className="section-title">Lo que cambia en tu centro</h2>
          </header>

          <ul className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Más citas directas

            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Mejor percepción profesional

            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Menos dudas de pacientes

            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Mayor confianza en tus servicios

            </li>
            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Más visibilidad local
            </li>
            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Más pacientes para consultas privadas
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
              Web adaptada a tu clínica o centro de bienestar

            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Estructura pensada para facilitar la cita

            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Integración de cita online o WhatsApp

            </li>

            <li className="rounded-[8px] bg-[var(--background)] p-4">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                ✔
              </span>
              Diseño enfocado en transmitir confianza

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
              Base SEO para atraer pacientes en tu zona

            </li>
          </ul>
        </div>
      </section>

      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col gap-4">
            <p className="eyebrow">Cómo trabajamos</p>

            <h2 className="section-title max-w-4xl">
              Un proceso simple, claro y pensado para que tu web funcione desde el primer día.
            </h2>
          </header>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">01</p>
              <h3 className="card-title">Entendemos tu negocio</h3>
              <p className="text-small">
                Analizamos tu situación, objetivos y tipo de cliente.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">02</p>
              <h3 className="card-title">Definimos la estructura</h3>
              <p className="text-small">
                Organizamos tu web para que sea clara, lógica y orientada a conversión.
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
            Tu centro ya ofrece calidad y cuidado.
          </h2>

          <p className="text-body max-w-2xl">
            Tu web debería transmitirlo desde el primer clic y ayudarte a conseguir más pacientes.
          </p>
        </div>
      </section>

      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-4">
              <h2 className="section-title max-w-4xl">
                Diseño web para clínicas y centros de bienestar en Girona
              </h2>

              <p className="text-body max-w-2xl">
               Creamos páginas web para clínicas, consultas privadas y negocios de bienestar pensadas 
               para transmitir confianza, explicar tus servicios y convertir visitas en pacientes.
              </p>
            </header>

            <div className="flex flex-col items-start gap-2 pt-2">
              <Link className="btn-primary text-sm" href="/contacto">
                QUIERO MAS CITAS→
              </Link>
              <p className="text-xs">Respuesta en menos de 24 horas</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}