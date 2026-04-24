/**
 * FILE: app/negocio/salud/page.tsx
 *
 * PAGE: NEGOCIO SALUD
 *
 * Página de captación para clínicas, consultas privadas
 * y centros de bienestar.
 */

import Image from "next/image";
import Link from "next/link";

export default function NegocioSaludPage() {
  return (
    <main>
      {/* HERO */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-6">
              <p className="eyebrow">
               Diseño web para salud
              </p>

              <h1 className="hero-title max-w-3xl">
                Consigue más citas y genera confianza desde tu web
              </h1>

              <p className="text-body max-w-2xl">
                Diseñamos páginas web para clínicas, centros de bienestar y profesionales de la salud en Girona, pensadas para generar confianza y facilitar la reserva de citas.

              </p>
              <p className="text-body">Creamos webs con un objetivo claro: que tus pacientes confíen en ti y den el paso de pedir cita.</p>
            </header>

            <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              <li className="flex items-center gap-3 rounded-[8px] bg-white p-4 text-sm">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                Más citas directas desde tu web 
              </li>

              <li className="flex items-center gap-3 rounded-[8px] bg-white p-4 text-sm">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                Más confianza antes del primer contacto 
              </li>

              <li className="flex items-center gap-3 rounded-[8px] bg-white p-4 text-sm">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                Más pacientes sin depender de terceros 
              </li>
            </ul>

            <div className="flex flex-col items-start gap-2">
              <Link className="btn-black text-sm" href="/contacto">
                QUIERO MÁS CITAS
              </Link>
              <p className="text-xs">Respuesta en menos de 24h</p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              <Image
                src="/salud.jpeg"
                alt="Consulta médica"
                width={560}
                height={400}
                className="w-full rounded-[12px] bg-black/40 p-1 object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">El problema</p>

            <h2 className="section-title max-w-2xl">
              Muchos centros tienen web...
              <span className="block">pero no les genera pacientes</span>
            </h2>

            <p className="text-small max-w-xl">
              El problema no es tener una web.
            </p>
            <p className="text-small max-w-xl">
              Es que no transmite confianza ni facilita el contacto.
            </p>
          </header>

          <ul className="flex flex-col gap-3">
            {[
              "Tu web no transmite profesionalidad ",
              "No genera confianza en segundos",
              "No está pensada para que te contacten",
              "El paciente tiene dudas y no da el paso",
              "Dependes de recomendaciones o terceros ",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-[8px] bg-white p-4"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                  X
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SOLUCIÓN */}
    <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
  <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

    {/* TEXTO ARRIBA EN MOBILE */}
    <div className="order-1 flex flex-col gap-4 lg:order-2">
      <p className="eyebrow">La solución</p>

      <h2 className="section-title">
        Una web pensada para
        <span className="block text-[var(--primary)]"> generar citas</span>
      </h2>

      <p className="text-body">
        No se trata solo de diseño.
      </p>

      <p className="text-body">
        Se trata de crear una web que genere confianza y facilite que el paciente contacte contigo.
      </p>
    </div>

    {/* LISTA ABAJO EN MOBILE */}
    <ul className="order-2 flex flex-col gap-3 lg:order-1">
      {[
        "Estructura clara pensada para generar citas",
        "Botones de contacto visibles (WhatsApp, llamada…)",
        "Diseño que transmite profesionalidad y confianza",
        "Mensajes claros que resuelven dudas del paciente",
        "SEO local para atraer pacientes en Girona",
      ].map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
            ✔
          </span>

          {item}
        </li>
      ))}
    </ul>

  </div>
</section>

      {/* DIFERENCIA */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl flex flex-col gap-5">
          <p className="eyebrow">Por qué somos diferentes</p>

          <h2 className="section-title max-w-3xl">
            No somos solo diseñadores web
          </h2>

          <p className="text-body">
            Entendemos cómo decide un paciente antes de pedir cita.
          </p>
          <p className="text-body">
            Qué necesita ver, qué dudas tiene y qué le hace confiar.
          </p>

          <blockquote className="rounded-[8px] border-l-2 border-[var(--primary)] px-4 py-3">
            No hacemos webs bonitas.
            <span className="block">Hacemos webs que generan confianza y pacientes.</span>
          </blockquote>
        </div>
      </section>
      
     <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col items-center text-center">
            <p className="eyebrow">Comparativa</p>
            <h2 className="section-title max-w-4xl">
              La diferencia entre tener una web <span className="block text-[var(--primary)]" >y tener un canal de captación de pacientes</span>
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
                  <span>Diseño sin estrategia</span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  <span>No transmite confianza</span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm">
                    X
                  </span>
                  <span>Información poco clara </span>
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
                  <span>Web pensada para generar citas </span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  <span>Diseño profesional adaptado a tu especialidad</span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  <span>Mensaje claro que genera confianza </span>
                </li>

                <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-4">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)] text-sm">
                    ✔
                  </span>
                  <span>Optimizada para atraer pacientes en Girona </span>
                </li>
              </ul>
            </article>
          </div>
          
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10">
            <p className="eyebrow">Resultados</p>
            <h2 className="section-title">Lo que cambia en tu centro</h2>
          </header>

          <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Más citas directas",
              "Mejor percepción profesional",
              "Menos dudas de pacientes",
              "Más confianza desde el primer contacto ",
              "Más visibilidad local en Google ",
              "Más pacientes sin intermediarios",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-[8px] bg-white p-4"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)]">
                  ✔
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10">
            <p className="eyebrow">Qué incluye</p>
            <h2 className="section-title">Todo lo que necesitas para conseguir pacientes desde tu web</h2>
          </header>

          <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Web adaptada a tu clínica o consulta ",
              "Diseño que transmite confianza y profesionalidad ",
              "Estructura pensada para generar citas ",
              "Integración con WhatsApp o contacto directo ",
              "Web rápida y optimizada para móviles",
              "SEO local para atraer pacientes en Girona ",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-[8px] bg-white p-4"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F0ECE4] text-[var(--primary)]">
                  ✔
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESO */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col gap-4">
            <p className="eyebrow">Cómo trabajamos</p>

            <h2 className="section-title max-w-4xl">
              Un proceso simple, claro y enfocado en resultados reales
            </h2>
          </header>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">01</p>
              <h3 className="card-title">Entendemos tu consulta y tus pacientes</h3>
              <p className="text-small">
                Analizamos tu situación, el tipo de paciente que quieres atraer y tus objetivos.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">02</p>
              <h3 className="card-title">Diseñamos una web pensada para generar confianza</h3>
              <p className="text-small">
                 Creamos una web clara, profesional y adaptada a tu especialidad, enfocada en transmitir confianza y facilitar el contacto..
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <p className="section-title text-[var(--primary)]">03</p>
              <h3 className="card-title"> Lanzamos tu web lista para atraer pacientes</h3>
              <p className="text-small">
               Publicamos tu web optimizada para posicionarse en Google y empezar a generar citas.
              </p>
            </article>

           
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-5xl text-center items-center flex flex-col gap-6">
          <h2 className="section-title">
            Tu web debería transmitir confianza <span className="text-[var(--primary)]">desde el primer momento</span>
          </h2>

          <p className="text-body">
            Antes de que un paciente te contacte, ya está tomando una decisión.
          </p>
          <p className="text-body">
            Tu web debe ayudarle a confiar en ti y dar el paso de pedir cita.
          </p>

          <Link className="btn-primary " href="/contacto">
            QUIERO MÁS CITAS
          </Link>
          <p>respuesta en menos de 24 horas</p>
        </div>
      </section>
    </main>
  );
}