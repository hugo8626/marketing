// FILE: components/servicios/fotografia/FotografiaContent.tsx
//
// SECTION: FOTOGRAFÍA CONTENT
//
// Bloque completo de contenido para la página de servicio
// de fotografía profesional para negocio.

import Image from "next/image";
import Link from "next/link";

export default function FotografiaContent() {
  return (
    <>
      {/* HERO */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-5">
              <p className="eyebrow">FOTOGRAFÍA PROFESIONAL</p>

              <h1 className="hero-title max-w-4xl">
                La diferencia entre
                <span className="block">verse profesional...</span>
                <span className="block">o parecerlo</span>
              </h1>

              <p className="text-body max-w-2xl">
                No basta con tener una web bonita. Si las imágenes no están a la
                altura, tu negocio pierde valor desde el primer vistazo.
              </p>
            </header>

            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Mejor imagen profesional</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Más confianza</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Mayor impacto visual</span>
              </li>
            </ul>

            <div className="flex flex-col items-start gap-3">
              <Link href="/contacto" className="btn-black text-sm">
                QUIERO MEJORAR MI IMAGEN →
              </Link>

              <p className="text-xs">Respuesta en menos de 24h</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/servicios/fotografia-hero.jpg"
              alt="Fotógrafo trabajando en una sesión profesional"
              width={640}
              height={440}
              className="h-auto w-full max-w-[520px] rounded-[12px] object-cover shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">El problema</p>

            <h2 className="section-title max-w-3xl">
              El problema no es tu
              <span className="block">negocio... es cómo se ve</span>
            </h2>
          </header>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">Imágenes de baja calidad o sin intención</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">
                Imágenes que no representan la realidad
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">Contenido poco cuidado</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">No transmite confianza</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">Da sensación de poca profesionalidad</p>
            </div>

            <p className="text-body pt-2 text-sm italic">
              “El cliente entra, mira... y decide en segundos.”
            </p>
          </div>
        </div>
      </section>

      {/* MENSAJE */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <h2 className="section-title max-w-4xl">
            Puedes tener una web perfecta... pero si las fotos fallan, todo
            falla
          </h2>

          <p className="text-body max-w-2xl">
            Muchos negocios invierten en su web, pero descuidan las imágenes. El
            resultado es una web que no transmite calidad.
          </p>

          <p className="rounded-[8px] bg-[#F5F5F5] px-5 py-4 text-sm italic">
            “La fotografía no es un detalle. Es lo que hace que tu web
            convierta.”
          </p>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="order-1 flex flex-col gap-3">
            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Fotografías reales de tu negocio</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Iluminación y composición profesional</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Imágenes pensadas para web y redes</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">
                Enfoque en transmitir calidad y confianza
              </p>
            </div>
          </div>

          <div className="order-2 flex flex-col gap-4">
            <p className="eyebrow">La solución</p>

            <h2 className="section-title max-w-3xl">
              Fotografía pensada para
              <span className="block">mostrar tu negocio</span>
              <span className="block">como realmente es</span>
            </h2>
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(220px,360px)_1fr] lg:items-start lg:gap-14">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">Sectores</p>

            <h2 className="section-title max-w-3xl">
              Especialmente pensado
              <span className="block">para negocios donde la</span>
              <span className="block">imagen lo es todo</span>
            </h2>

            <p className="text-body max-w-2xl">
              También trabajamos con clínicas, negocios locales y marcas
              personales.
            </p>
          </header>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Restaurantes</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Hoteles</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Airbnb y alquiler turístico</p>
            </div>

            <p className="rounded-[8px] bg-[#F5F5F5] px-5 py-4 text-sm italic">
              “Si tu negocio se muestra... la imagen importa.”
            </p>
          </div>
        </div>
      </section>

      {/* MENSAJE 2 */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          <h2 className="section-title max-w-4xl">
            La fotografía no es solo estética.
            <span className="block">
              Es lo que hace que tu negocio genere confianza.
            </span>
          </h2>

          <p className="text-body max-w-2xl">
            No se trata solo de estética. Se trata de que cuando alguien vea tu
            negocio, confíe.
          </p>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(220px,360px)_1fr] lg:items-start lg:gap-14">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">Resultados</p>

            <h2 className="section-title max-w-3xl">
              Lo que cambia cuando tu
              <span className="block">imagen mejora</span>
            </h2>
          </header>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Mayor percepción de calidad</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Más confianza del cliente</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Más impacto visual</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Mejores resultados en tu web</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Mejores resultados en redes</p>
            </div>
          </div>
        </div>
      </section>

      {/* INVERSIÓN */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
          <header className="flex flex-col items-center gap-4">
            <h2 className="section-title max-w-4xl">
              Elige el nivel de imagen que quieres para tu negocio
            </h2>

            <p className="text-body max-w-2xl">
              No es solo hacer fotos. Es cómo se percibe tu negocio.
            </p>
          </header>

          <div className="grid w-full gap-6 lg:grid-cols-2">
            {/* CARD 1 */}
            <article className="flex h-full flex-col rounded-[8px] border border-[#E5E5E5] bg-white p-8 text-left">
              <div className="mb-6 flex flex-col gap-2">
                <h3 className="card-title">Presencia profesional</h3>
                <p className="font-['ClashDisplay'] text-4xl font-semibold text-black">
                  Desde 350€
                </p>
              </div>

              <ul className="mb-8 flex flex-col gap-3">
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Sesión fotográfica en tu negocio</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Fotografías de espacios o productos</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Edición profesional</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Imágenes optimizadas para web y redes</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Entrega final lista para publicar</span>
                </li>
              </ul>

              <p className="mb-6 text-small text-[var(--text-muted)]">
                Perfecto para mejorar tu imagen actual.
              </p>

              <Link href="/contacto" className="btn-black mt-auto text-sm">
                QUIERO ESTE PACK
              </Link>
            </article>

            {/* CARD 2 */}
            <article className="flex h-full flex-col rounded-[8px] border border-[var(--primary)] bg-white p-8 text-left shadow-lg">
              <div className="mb-6 flex flex-col gap-2">
                <span className="w-fit rounded-[4px] bg-[var(--primary)] px-2 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-white">
                  Recomendado
                </span>

                <h3 className="card-title">Imagen que vende</h3>

                <p className="font-['ClashDisplay'] text-4xl font-semibold text-black">
                  Desde 550€
                </p>

                <p className="text-small text-[var(--text-muted)]">
                  No solo muestras tu imagen... mejoras cómo te perciben.
                </p>
              </div>

              <ul className="mb-8 flex flex-col gap-3">
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Sesión fotográfica completa</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Fotografías más trabajadas</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Enfoque estratégico para web y redes</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Imágenes pensadas para conversión</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Prioridad en selección y edición</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Entrega final lista para publicar sin complicaciones</span>
                </li>
              </ul>

              <p className="mb-6 text-small text-[var(--text-muted)]">
                El más elegido por negocios que quieren destacar.
              </p>

              <Link href="/contacto" className="btn-black mt-auto text-sm">
                QUIERO MEJORAR MI IMAGEN
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* MENSAJE FINAL */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          <h2 className="section-title max-w-4xl">
            Tu web y tus redes dependen de esto
          </h2>

          <div className="flex max-w-2xl flex-col gap-3">
            <p className="text-body">
              Puedes tener una web increíble... pero sin buenas fotos, no
              convertirá igual.
            </p>

            <p className="text-body">
              Puedes tener redes activas... pero sin imagen profesional, no
              generan confianza.
            </p>
          </div>

          <p className="rounded-[8px] bg-white px-5 py-4 text-sm italic">
            “La fotografía es la base de todo tu sistema digital.”
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          <h2 className="section-title max-w-3xl">
            Tu negocio ya tiene valor. Asegúrate de que se vea.
          </h2>

          <p className="text-body max-w-2xl">
            Te ayudamos a elegir la mejor opción para tu negocio.
          </p>

          <Link href="/contacto" className="btn-black text-sm">
            QUIERO ASESORAMIENTO →
          </Link>

          <p className="text-xs text-[var(--text-muted)]">
            Te respondemos en menos de 24h
          </p>
        </div>
      </section>
    </>
  );
}