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
              <p className="eyebrow">Fotografia profesional en girona </p>

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
                QUIERO MEJORAR MI IMAGEN
              </Link>

              <p className="text-xs">Respuesta en menos de 24h</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/foto.jpeg"
              alt="Fotógrafo trabajando en una sesión profesional"
              width={640}
              height={440}
              className="h-auto w-full max-w-[520px] bg-black/40 p-1 rounded-[12px] object-cover shadow-lg"
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
               El problema no es tu negocio…
              <span className="block">es lo que transmite tu imagen.
</span>
            </h2>
          </header>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small"> Imágenes sin calidad ni intención</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">
                Fotos que no reflejan lo que realmente ofreces
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small"> Contenido poco cuidado o improvisado</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">No transmite confianza al primer vistazo</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">Da sensación de poca profesionalidad  </p>
            </div>

            <p className="text-body pt-2 text-sm italic">
               El cliente no compara, decide en segundos. <span className="block">Y muchas veces decide solo por lo que ve.</span>
            </p>
          </div>
        </div>
      </section>

      {/* MENSAJE */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <h2 className="section-title max-w-4xl">
            Puedes tener una web perfecta... pero si las fotos fallan, todo lo demás pierde valor.
          </h2>

          <p className="text-body max-w-2xl">
            Porque antes de leer, el cliente mira.
            <span className="block">Y en segundos decide si confiar o seguir buscando.
</span>
          </p>

          <p className="rounded-[8px] bg-[#F5F5F5] px-5 py-4 text-sm italic">
           La fotografía no acompaña tu web.
              <span className="block">Es lo que marca la diferencia entre visitar… o convertir.</span>

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
              <p className="text-small">Fotografías reales de tu negocio (sin contenido genérico)</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small"> Iluminación y composición profesional</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Imágenes adaptadas para web y redes sociales</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">
                Enfoque en transmitir calidad, confianza y profesionalidad
              </p>
            </div>
          </div>

          <div className="order-2 flex flex-col gap-4">
            <p className="eyebrow">La solución</p>

            <h2 className="section-title max-w-3xl">
              Fotografía que hace que tu negocio se vea como realmente es…       
              <span className="block">y que el cliente confíe </span>
              <span className="block">desde el primer vistazo</span>
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
                 Fotografía para negocios donde la imagen vende
              
            </h2>

            <p className="text-body max-w-2xl">
              En muchos negocios, el cliente decide antes de leer.
              <span className="block">Por eso, una buena imagen no solo muestra… vende.</span>
            </p>
          </header>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Hoteles, restaurantes y alojamientos turisticos                       </p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Clinicas, centros de bienestar y consultas privadas  </p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Marca personal o negocios digitales </p>
            </div>

          
          </div>
        </div>
      </section>

      {/* MENSAJE 2 */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          <h2 className="section-title max-w-4xl">
            La fotografía no es solo estética.
            <span className="block">
              Es lo que hace que un cliente confíe en tu negocio… o siga buscando.
            </span>
          </h2>

        
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(220px,360px)_1fr] lg:items-start lg:gap-14">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">Resultados</p>

            <h2 className="section-title max-w-3xl">
              Cómo cambia tu negocio cuando
              <span className="block">la imagen está a la altura</span>
            </h2>
          </header>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Tu negocio se percibe más profesional</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Generas confianza desde el primer segundo</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Destacas frente a otros que no cuidan su imagen</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small"> Aumentan las probabilidades de contacto</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Tu web y redes empiezan a trabajar a tu favor</p>
            </div>
          </div>
        </div>
      </section>

      {/* INVERSIÓN */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
          <header className="flex flex-col items-center gap-4">
            <h2 className="section-title max-w-4xl">
              Tus fotos estan  haciendo que pierdas clientes (aunque no lo sepas)
            </h2>

            <p className="text-body max-w-2xl">
              Trabajamos con un número reducido de negocios para construir casos de éxito y asegurar resultados reales, Por eso ahora ofrecemos precios especiales.
            </p>
          </header>

          <div className="grid w-full gap-6 lg:grid-cols-2">
            {/* CARD 1 */}
            <article className="flex h-full flex-col rounded-[8px] border border-[#E5E5E5] bg-white p-8 text-left">
              <div className="mb-6 flex flex-col gap-2">
                <h3 className="card-title">PLAN 1 — PRESENCIA PROFESIONAL
</h3>
                <p className="font-['ClashDisplay'] text-4xl font-semibold text-black">
                  Precio: 180€
                </p>
                <p className="text-small text-[var(--text-muted)]">
                   Ideal para mejorar tu imagen actual de forma rápida y profesional
                </p>
              </div>

              <ul className="mb-8 flex flex-col gap-3">
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Sesión fotográfica en tu negocio        </span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Fotografías pensadas para mejorar tu imagen y presencia online</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span> Edición profesional</span>
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

              <p className="card-title">
                Además incluido
              </p>
              <ul className="mb-8 flex flex-col gap-3">
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Asesoramiento previo para preparar la sesión</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Selección de imágenes optimizada</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Recomendaciones de uso para web y redes</span>
                </li>
                
              </ul>
              <p className="pb-3"> Disponibilidad limitada</p>

              <Link href="/contacto" className="btn-black mt-auto text-sm">
                Quiero mejorar mi imagen 
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
                Precio: 450€
                </p>

                <p className="text-small text-[var(--text-muted)]">
                  No solo muestras tu negocio… mejoras cómo te perciben
                </p>
              </div>

              <ul className="mb-8 flex flex-col gap-3">
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Sesión completa enfocada en mostrar tu negocio como una opción profesional y atractiva </span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>35-45 fotos</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Fotografías más trabajadas y cuidadas</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Enfoque estratégico para  booking, Google, web y redes sociales</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Imágenes pensadas para generar confianza y conversión</span>
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

              <p className="card-title">
                Diferencial clave
              </p>
              <ul className="mb-8 flex flex-col gap-3">
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Dirección de la sesión para sacar el máximo partido a tu negocio </span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Enfoque en transmitir calidad, no solo mostrar</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Imágenes pensadas para atraer clientes</span>
                </li>
              </ul>

              <p className="card-title">
                Extra incluido
              </p>
              <ul className="mb-8 flex flex-col gap-3">
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span> Análisis de tu negocio y tipo de cliente</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Recomendaciones para mejorar tu imagen online</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span> Ajustes según el uso que vayas a dar (Booking, Google, web, redes, anuncios)</span>
                </li>
              </ul>

              <p className="italic"> No es solo hacer fotos <span className="block"> Es hacer que tu negocio genere confianza desde el primer vistazo</span></p>
              <p className="text-small">Disponibilidad limitada</p>
              <Link href="/contacto" className="btn-black mt-auto text-sm">
                Quiero mas clientes 
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
            QUIERO ASESORAMIENTO
          </Link>

          <p className="text-xs text-[var(--text-muted)]">
            Te respondemos en menos de 24h
          </p>
        </div>
      </section>
    </>
  );
}