// FILE: src/app/nosotros/page.tsx
//
// PAGE: NOSOTROS
//
// Página corporativa responsive y semántica.
// - jerarquía de headings corregida
// - estructura visual más consistente
// - contenedores y espaciados unificados
// - responsive limpio y profesional

import Image from "next/image";
import Link from "next/link";

export default function NosotrosPage() {
  return (
    <main>
      {/* HERO */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,460px)] lg:gap-16">
          <div className="flex flex-col gap-6">
            <p className="eyebrow">Quiénes somos</p>

            <h1 className="hero-title max-w-3xl">
              No somos una agencia más.
            </h1>

            <p className="text-body max-w-2xl italic">
              Somos un equipo que entiende los negocios desde dentro.
            </p>

            <p className="text-body max-w-2xl">
              FITYX DIGITAL nace de una combinación real: estrategia digital,
              desarrollo web y experiencia directa en sectores como salud,
              restauración y turismo. No trabajamos por volumen. Trabajamos
              proyecto a proyecto.
            </p>

            <div className="flex flex-col items-start gap-3">
              <Link className="btn-black text-sm" href="/contacto">
                QUIERO HABLAR DE MI PROYECTO →
              </Link>

              <p className="text-small">Respuesta en menos de 24h</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/hero.jpeg"
              alt="Equipo de FITYX DIGITAL trabajando en estrategia y desarrollo web"
              width={450}
              height={300}
              className="h-auto w-full max-w-md rounded-[8px] border-2 border-black object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* BASE */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10">
          <header className="flex max-w-3xl flex-col items-center gap-3 text-center">
            <p className="eyebrow">Nuestra base</p>

            <h2 className="section-title">
              Esto no es teoría. Es experiencia real.
            </h2>
          </header>

          <div className="grid w-full gap-4 md:grid-cols-2">
            <article className="card flex flex-col gap-3">
              <h3 className="card-title">Perfil sanitario</h3>

              <p className="text-small">
                <span className="mr-2">•</span>
                Enfermera profesional con 5 años en entorno hospitalario
              </p>

              <p className="text-small">
                <span className="mr-2">•</span>
                2 años en entorno extrahospitalario
              </p>

              <p className="text-small italic">
                Entendimiento real del sector salud, pacientes y necesidades del
                negocio desde dentro.
              </p>
            </article>

            <article className="card flex flex-col gap-3">
              <h3 className="card-title">Perfil gastronómico</h3>

              <p className="text-small">
                <span className="mr-2">•</span>
                Conocimiento directo de cómo funciona un restaurante, la presión
                operativa y lo que realmente importa para vender.
              </p>
            </article>

            <article className="card flex flex-col gap-3 md:col-span-2">
              <h3 className="card-title text-center">
                Experiencia en hospitalidad y turismo
              </h3>

              <p className="text-small text-center">
                <span className="mr-2">•</span>
                Experiencia en entorno hotelero
              </p>

              <p className="text-small text-center">
                <span className="mr-2">•</span>
                Conocimiento de la gestión y experiencia del cliente
              </p>

              <p className="text-small text-center italic">
                Sabemos cómo funciona un alojamiento turístico por dentro: desde
                la operativa diaria hasta lo que hace que un cliente reserve o
                no.
              </p>
            </article>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-body">No hablamos desde fuera.</p>
            <p className="text-body">
              Entendemos cómo funciona un negocio por dentro.
            </p>
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <header className="flex flex-col gap-3">
            <p className="eyebrow">Nuestra historia</p>

            <h2 className="section-title">También hemos estado en tu lugar</h2>
          </header>

          <div className="flex flex-col gap-5">
            <p className="text-body">
              Hace unos años también tuvimos nuestro propio negocio. Sabemos lo
              que es gestionar clientes, operar el día a día, tomar decisiones
              constantes y, al mismo tiempo, intentar hacer crecer algo.
            </p>

            <p className="text-body">
              Sabemos que no es solo tener una web o estar en redes. Es hacerlo
              sin perder tiempo y sin descuidar el negocio.
            </p>

            <blockquote className="rounded-[8px] border-l-4 border-[var(--primary)] bg-[#E1E1E1] p-5 italic">
              <p className="text-body">
                Por eso no trabajamos como una agencia externa. Trabajamos
                contigo como si fuéramos parte de tu negocio.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="flex flex-col gap-4">
              <p className="eyebrow">Lo que pasa en la mayoría de negocios</p>

              <h2 className="section-title max-w-md">
                Muchos negocios tienen presencia...
                <span className="block">pero no les genera clientes.</span>
              </h2>
            </div>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 rounded-[8px] bg-white p-5">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                  X
                </span>
                <span className="text-small text-black">
                  Webs que no convierten
                </span>
              </li>

              <li className="flex items-center gap-3 rounded-[8px] bg-white p-5">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                  X
                </span>
                <span className="text-small text-black">
                  Plantillas genéricas
                </span>
              </li>

              <li className="flex items-center gap-3 rounded-[8px] bg-white p-5">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                  X
                </span>
                <span className="text-small text-black">
                  No transmiten confianza
                </span>
              </li>

              <li className="flex items-center gap-3 rounded-[8px] bg-white p-5">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEDEDE] text-sm leading-none">
                  X
                </span>
                <span className="text-small text-black">
                  Dependencia de plataformas
                </span>
              </li>
            </ul>
          </div>

          <p className="text-body text-center">
            Si no está bien pensado, no funciona.
          </p>
        </div>
      </section>

      {/* ENFOQUE */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start lg:gap-14">
          <header className="flex flex-col gap-3">
            <p className="eyebrow">Nuestro enfoque</p>

            <h2 className="section-title max-w-xl">
              No diseñamos webs. Construimos estructura.
            </h2>
          </header>

          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Estrategia antes que diseño
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Desarrollo a medida
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Enfoque en conversión
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">Lenguaje claro</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Pensado para negocios reales
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* PROCESO */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10">
          <header className="flex max-w-4xl flex-col gap-3 text-center">
            <p className="eyebrow">Cómo trabajamos</p>

            <h2 className="section-title">
              Un proceso simple, claro y pensado para que tu web funcione desde
              el primer día.
            </h2>
          </header>

          <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article className="card">
              <p className="section-title text-[var(--primary)]">01</p>
              <h3 className="card-title">Analizamos tu negocio</h3>
            </article>

            <article className="card">
              <p className="section-title text-[var(--primary)]">02</p>
              <h3 className="card-title">Definimos estructura estratégica</h3>
            </article>

            <article className="card">
              <p className="section-title text-[var(--primary)]">03</p>
              <h3 className="card-title">Diseñamos experiencia</h3>
            </article>

            <article className="card">
              <p className="section-title text-[var(--primary)]">04</p>
              <h3 className="card-title">Programamos desde cero</h3>
            </article>

            <article className="card">
              <p className="section-title text-[var(--primary)]">05</p>
              <h3 className="card-title">Lanzamos</h3>
            </article>

            <article className="card">
              <p className="section-title text-[var(--primary)]">06</p>
              <h3 className="card-title">Acompañamos</h3>
            </article>
          </div>

          <p className="text-body text-center">
            Sin procesos confusos. Sin desaparecer después del pago.
          </p>
        </div>
      </section>

      {/* FILOSOFÍA */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start lg:gap-14">
          <header className="flex flex-col gap-3">
            <p className="eyebrow">Nuestra filosofía</p>

            <h2 className="section-title max-w-xl">
              Cómo entendemos nuestro trabajo.
            </h2>
          </header>

          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                No trabajamos por volumen
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                No prometemos humo
              </span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">No desaparecemos</span>
            </li>

            <li className="flex items-start gap-3 rounded-[8px] bg-[#F5F5F5] p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] leading-none">
                ✔
              </span>
              <span className="text-small text-black">
                Explicamos todo claro
              </span>
            </li>
          </ul>
        </div>

        <p className="text-body mx-auto mt-8 max-w-4xl text-center">
          Trabajamos con claridad, criterio y foco en que cada proyecto tenga
          sentido para el negocio.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
          <h2 className="section-title">
            Si buscas solo una web bonita, no somos para ti.{" "}
            <span className="text-[var(--primary)]">
              Si buscas una web que atraiga clientes, hablemos.
            </span>
          </h2>

          <Link className="btn-black" href="/contacto">
            QUIERO EMPEZAR MI PROYECTO
          </Link>

          <p className="text-body">Te respondemos en menos de 24h</p>
        </div>
      </section>
    </main>
  );
}