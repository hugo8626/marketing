// FILE: components/servicios/gestion-contenidos/GestionContenidosContent.tsx
//
// SECTION: GESTIÓN DE CONTENIDOS CONTENT
//
// Bloque completo de contenido para la página de servicio
// de gestión de redes sociales y contenido.

import Image from "next/image";
import Link from "next/link";

export default function GestionContenidosContent() {
  return (
    <>
      {/* HERO */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-5">
              <p className="eyebrow">Gestión de redes sociales  en Girona</p>

              <h1 className="hero-title max-w-4xl">
                Haz que tu negocio destaque en
                <span className="block">redes sin perder</span>
                

              </h1>

              <p className="text-body max-w-2xl">
                Creamos y gestionamos tu contenido para que tengas una presencia profesional, constante y enfocada en atraer clientes.
              </p>
            </header>

            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Más visibilidad para tu negocio</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span>Más confianza antes del contacto</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[var(--primary)]">✓</span>
                <span> Más clientes que llegan desde redes   </span>
              </li>
            </ul>

            <div className="flex flex-col items-start gap-3">
              <Link href="/contacto" className="btn-black text-sm">
                QUIERO MEJORAR MIS REDES 
              </Link>

              <p className="text-xs">Respuesta en menos de 24h</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/social.jpeg"
              alt="Persona revisando una red social desde el móvil"
              width={640}
              height={440}
              className="h-auto w-full max-w-[520px] rounded-[12px] bg-black/40 p-1 object-cover shadow-lg"
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
              La mayoría de negocios no falla por falta de ideas.
              <span className="block">Falla porque no tiene tiempo ni una estrategia clara.</span>
              
            </h2>
          </header>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">No sabes qué publicar ni qué funciona</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">Publicas sin una estrategia clara</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small"> No eres constante porque no tienes tiempo</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">Tu perfil no transmite confianza</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="text-sm text-[#999]">✕</span>
              <p className="text-small">Tu negocio pasa desapercibido frente a otros</p>
            </div>

            <p className="text-body pt-2 text-sm italic">
              “Si tu negocio no aparece, no existe para muchos clientes.”
            </p>
          </div>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="order-2 flex flex-col gap-3">
            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Dejas de publicar sin rumbo y empiezas a comunicar con intencion</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Tu perfil transmite  profesionalidad y confianza</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Tu negocio  deja de pasar desapercibido </p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] border border-[#E5E5E5] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Empeizas a tener un sistema que te trae oportunidades </p>
            </div>

           
          </div>

          <div className="order-1 flex flex-col gap-4">
            <p className="eyebrow">Tener redes no es suficiente</p>

            <h2 className="section-title max-w-3xl">
              Cuando estan  bien trabajadas, se convierten en una herramienta
              <span className="block">para atraer clientes</span>
              
            </h2>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl">
          <p className="rounded-[8px] bg-[#F5F5F5] px-5 py-4 text-sm italic">
            “No publicamos por publicar. Creamos contenido para que tu negocio
            genere confianza.”
          </p>
        </div>
      </section>

      {/* DETALLE */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(220px,320px)_1fr] lg:items-start lg:gap-14">
          <header className="flex flex-col gap-4">
            <p className="eyebrow">Qué incluye la gestión de redes sociales</p>

            <h2 className="section-title">Todo lo necesario para que tus redes empiecen a tener sentido:</h2>
          </header>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">
                Estrategia de contenido adaptada a tu negocio
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Planificación mensual de publicaciones</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small"> Creación de textos (copywriting)</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Definición de tipo de contenido (educativo, venta, confianza…)</p>
            </div>

            <div className="flex items-center gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">Optimización de perfil</p>
            </div>

            <div className="flex items-start gap-3 rounded-[8px] bg-white px-5 py-4">
              <span className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F9F5ED] text-[var(--primary)] text-xs">
                ✓
              </span>
              <p className="text-small">
                Enfoque en crecimiento y conversión
              </p>
            </div>
          </div>  
        </div>
      </section>

      {/* MENSAJE */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          <h2 className="section-title">Contenido real, no solo diseño</h2>

          <p className="text-body max-w-2xl">
            No usamos contenido genérico.
            <span className="block">Mostramos tu negocio tal como es, para transmitir confianza, diferenciarte y atraer clientes de verdad</span>

          </p>
        </div>
      </section>

      {/* INVERSIÓN */}
      <section className="section-grey px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
          <header className="flex flex-col items-center gap-4">
            <h2 className="section-title">
              Elige cómo quieres que tu negocio se vea en redes
            </h2>

            <p className="text-body max-w-2xl">
              No se trata solo de publicar, sino de transmitir confianza, destacar frente a la competencia y atraer clientes. 
              <span className="block">Solo trabajamos con un número reducido de negocios para asegurar contenido real, personalizado y de calidad</span> 
            </p>
          </header>

          <div className="grid w-full gap-6 lg:grid-cols-2">
            {/* CARD 1 */}
            <article className="flex h-full flex-col rounded-[8px] border border-[#E5E5E5] bg-white p-8 text-left">
              <div className="mb-6 flex flex-col gap-2">
                <h3 className="card-title">PLAN 1 — PRESENCIA</h3>
                <p className="text-small">Mantén tu negocio activo en redes sin complicarte</p>
                <p className="font-['ClashDisplay'] text-4xl font-semibold text-black">
                 Precio:  150€ 
                  <span className="text-base font-normal"> / mes</span>
                </p>
                <p className="text-small">deal si quieres presencia online sin perder tiempo</p>                
              </div>

              <ul className="mb-8 flex flex-col gap-3">
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span> 6–8 publicaciones al mes</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Grabación mensual en tu negocio</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Diseño básico de contenido</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Textos claros para tus publicaciones</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Programación y gestión completa</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Perfil activo y actualizado</span>
                </li>
              </ul>

              <p className="card-title  ">
                Además incluido
              </p>
              <ul className="mb-8 flex flex-col gap-3">
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span> Definimos una línea visual coherente para tu marca</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span> Ajustamos tu imagen para transmitir profesionalidad</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span> Recomendaciones básicas de mejora</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span> Soporte durante el primer mes</span>
                </li>

              </ul>
                    <p className="card-title">
                      Enfoque
                    </p>
                    <p className="text-small pb-8">Mantienes tus redes activas <span className="block">Sin preocuparte por qué publicar</span></p>

              <Link href="/contacto" className="btn-black mt-auto text-sm">
                QUIERO EMPEZAR
              </Link>
            </article>

            {/* CARD 2 */}
            <article className="flex h-full flex-col rounded-[8px] border border-[var(--primary)] bg-white p-8 text-left shadow-lg">
              <div className="mb-6 flex flex-col gap-2">
                <span className="w-fit rounded-[4px] bg-[var(--primary)] px-2 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-white">
                  Recomendado
                </span>

                <h3 className="card-title">PLAN 2— Crecimiento y visibilidad </h3>
                <p className="text-small">
                  Convierte tus redes en un canal para atraer clientes
                </p>

                <p className="font-['ClashDisplay'] text-4xl font-semibold text-black">
                  Precio:  250€
                  <span className="text-base font-normal"> / mes</span>
                </p>

                <p className="text-small text-[var(--text-muted)]">
                  Pensado para generar visibilidad, confianza y oportunidades reales
                </p>
              </div>

              <ul className="mb-8 flex flex-col gap-3">
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>12–14 publicaciones al mes</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Creación de contenido dinámico (Reels + posts)</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Grabación mensual en tu negocio</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Edición profesional de vídeo y contenido</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Copywriting estratégico (mensajes que conectan y venden)</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Estrategia de contenido adaptada a tu negocio</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>
                    Programación y gestión completa
                  </span>
                </li>



              </ul>
              <p className="card-title">Diferencial clave</p>
               <ul className="mb-8 flex flex-col gap-3">
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Contenido real grabado en tu negocio</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Fotografía y vídeo con cámara profesional</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Nada de contenido genérico o de stock</span>
                </li>
                
              </ul>

              <p className="card-title">
                Además incluido
              </p>



            
               <ul className="mb-8 flex flex-col gap-3">
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Definimos una línea visual coherente para tu marca</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Ajustamos tu imagen para transmitir profesionalidad</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Analizamos tu negocio y el tipo de cliente que quieres atraer</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Creamos ideas de contenido adaptadas a tu sector</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>Ajustamos el contenido según lo que mejor funciona</span>
                </li>
                
              </ul>

                  <p className="card-title">
                      Enfoque
                    </p>
                    <p className="text-small pb-8">No es solo publicar<span className="block"> Es crear contenido que haga que te vean, confíen y te contacten</span></p>


              

              

              <Link href="/contacto" className="btn-black mt-auto text-sm">
                QUIERO MÁS CLIENTES
              </Link>
            </article>
          </div>

       
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          <h2 className="section-title max-w-3xl">
            Puedes seguir sin publicar...
            <span className="block">
              o hacer que tu negocio empiece a destacar.
            </span>
          </h2>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link href="/contacto" className="btn-black text-sm">
              QUIERO MEJORAR MIS REDES
            </Link>

       
          </div>

          <p className="text-xs text-[var(--text-muted)]">
            Te respondemos en menos de 24h
          </p>
        </div>
      </section>
    </>
  );
}