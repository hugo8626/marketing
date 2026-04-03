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
                Diseño web para clínicas, consultas privadas y centros de
                bienestar en Girona
              </p>

              <h1 className="hero-title max-w-3xl">
                Más confianza.{" "}
                <span className="text-[var(--primary)]">Más citas.</span>
              </h1>

              <p className="text-body max-w-2xl">
                Diseñamos páginas web para clínicas, consultas privadas y
                negocios de bienestar en Girona pensadas para transmitir
                confianza, explicar claramente tus servicios y convertir visitas
                en pacientes.
              </p>
            </header>

            <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              <li className="flex items-center gap-3 rounded-[8px] bg-white p-4 text-sm">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                Más citas desde tu web
              </li>

              <li className="flex items-center gap-3 rounded-[8px] bg-white p-4 text-sm">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                Más confianza desde el primer contacto
              </li>

              <li className="flex items-center gap-3 rounded-[8px] bg-white p-4 text-sm">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)]">
                  ✔
                </span>
                Mejor percepción profesional
              </li>
            </ul>

            <div className="flex flex-col items-start gap-2">
              <Link className="btn-black text-sm" href="/contacto">
                QUIERO MÁS CITAS →
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
                className="w-full rounded-[12px] object-cover shadow-lg"
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
              <span className="block">pero no generan confianza.</span>
            </h2>

            <p className="text-small max-w-xl">
              En salud, la duda frena la decisión.
            </p>
          </header>

          <ul className="flex flex-col gap-3">
            {[
              "Textos técnicos que el paciente no entiende",
              "Información poco clara que genera dudas",
              "No transmite seguridad ni profesionalidad",
              "Credenciales poco visibles o inexistentes",
              "Proceso de cita confuso o complicado",
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
          <ul className="flex flex-col gap-3">
            {[
              "Estructura clara y fácil de entender",
              "Explicación sin tecnicismos",
              "Refuerzo de credibilidad",
              "Integración de citas",
              "Base SEO local",
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

          <div className="flex flex-col gap-4">
            <p className="eyebrow">La solución</p>
            <h2 className="section-title">
              Una web pensada
              <br />
              para generar confianza real
            </h2>
          </div>
        </div>
      </section>

      {/* DIFERENCIA */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-7xl flex flex-col gap-5">
          <p className="eyebrow">Por qué somos diferentes</p>

          <h2 className="section-title max-w-3xl">
            No es solo diseño. Es entender al paciente.
          </h2>

          <p className="text-body">
            Conocemos el sector desde dentro.
          </p>

          <blockquote className="rounded-[8px] border-l-2 border-[var(--primary)] px-4 py-3">
            No diseñamos webs bonitas. Diseñamos webs que convierten en citas.
          </blockquote>
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
              "Mayor confianza",
              "Más visibilidad local",
              "Más pacientes privados",
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
            <h2 className="section-title">Todo lo que necesitas</h2>
          </header>

          <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Web adaptada a tu clínica",
              "Estructura para citas",
              "Integración WhatsApp",
              "Diseño que transmite confianza",
              "Web rápida",
              "SEO local",
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
          <header className="mb-10">
            <p className="eyebrow">Cómo trabajamos</p>
            <h2 className="section-title max-w-3xl">
              Un proceso simple, claro y pensado para resultados
            </h2>
          </header>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            {["01", "02", "03", "04"].map((n) => (
              <article key={n}>
                <p className="section-title text-[var(--primary)]">{n}</p>
                <h3 className="card-title">Paso {n}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-5xl text-center items-center flex flex-col gap-6">
          <h2 className="section-title">
            Tu centro ya ofrece calidad.
          </h2>

          <p className="text-body">
            Tu web debería ayudarte a conseguir más pacientes.
          </p>

          <Link className="btn-primary " href="/contacto">
            QUIERO MÁS CITAS →
          </Link>
          <p>respuesta en menos de 24 horas</p>
        </div>
      </section>
    </main>
  );
}