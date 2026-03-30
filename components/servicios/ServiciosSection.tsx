// FILE: components/servicios/ServiciosSection.tsx
//
// SECTION: SERVICIOS
//
// Estructura base vacía preparada para contenido.
import Link from "next/link";
export default function ServiciosSection() {
  return (
    <>
    <section className="py-20">
        <div className="flex flex-col items-center gap-3">
            <p className="eyebrow">Servicios</p>
            <h1 className="hero-title">Lo que hacemos</h1>
            <p className="text-body  text-center w-2xl ">Diseño web y soluciones digitales para negocios que quieren crecer con estrategia, diseño y tecnología.</p>
        </div>

    </section>
    
  
        <div className="mb-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <Link href="/servicios#onePage" className="group  block text-center ">
              <article className="mt-4 bg-[#F5F5F5] h-full border border-transparent p-8 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg">
                <h3 className="card-title">One Page</h3>
              
                <p className="text-body">
                 Una web directa, clara y enfocada a conversion, ideal para profesionales y negocios que necesitan
                 presencia digital sin complicaciones
                </p>
                <span className="mt-8 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </article>
            </Link>

            <Link href="/servicios#webFull" className="group  block text-center">
              <article className="mt-4 bg-[#F5F5F5] h-full border border-transparent p-8 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg">
                <h3 className="card-title">Web completa</h3>
               
                <p className="text-body">
                 Un sitio web profesional con multiples secciones, pensando para transmitir confianza, posicionarte como referente y generar clientes.
                </p>
                <span className="mt-8 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </article>
            </Link>

            <Link href="/servicios#landing" className="group  block text-center">
              <article className="mt-4 bg-[#F5F5F5] h-full border border-transparent p-8 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg">
                <h3 className="card-title">Landing page</h3>
             
                <p className="text-body">
                  Paginas de aterrizaje diseñadas para captar leads y convertir visitas en clientes con una propuesta clara y enfocada.
                </p>
                <span className="mt-8 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </article>
            </Link>

            <Link href="/servicios#socials" className="group  block text-center">
              <article className="mt-4 bg-[#F5F5F5] h-full border mt-4 border-transparent p-8 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg">
                <h3 className="card-title">
                  Gestion de contenidos
                </h3>
            
                <p className="text-body">
                  Estrategia, creacion y gestion de contenidos para que tu marca conecte, gane visibilidad y genere oportunidades reales.
                </p>
                <span className="mt-8 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </article>
            </Link>

            <Link href="/servicios#fotografia" className="group  block text-center ">
              <article className="mt-4 bg-[#F5F5F5] h-full  border border-transparent  p-8 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg">
                <h3 className="card-title">
                  Fotografia
                </h3>
               

                <p className="text-body">
                  Fotografia profesional para tu negocio pensada para transmitir calidad, reforzar tu marca y mejorar la percepcion de tus productos y sevicios.
                </p>
                <span className="mt-8  inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </article>
            </Link>

            <Link href="/servicios#optimizacion" className="group  block text-center ">
              <article className="h-full bg-[#F5F5F5] mt-4 border border-transparent p-8 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[#f9f5ed] group-hover:shadow-lg">
                <h3 className="card-title">Optimizacion web</h3>
              
                <p className="text-body">
                 Mejoramos el rendimiento,la velocidad y la experiencia de tu web para que funcione mejor, posicione mejory convierta mas.
                </p>
                <span className="mt-8 inline-block text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </article>
            </Link>
          </div>


          <section>
            <div className="flex flex-col items-center gap-3">
                <p className="text-body ">No se trata solo de tener una web, sino de tener una herramienta que te ayude a conseguir clientes y hacer crecer tu negocio.</p>
                <p className="text-body">Por eso cada proyecto parte de entender qué necesitas y cómo convertirlo en resultados reales.</p>
                <p className="text-body mb-3">Si no tienes claro qué necesitas, podemos ayudarte a definirlo.</p>
                 <Link href="/sobre-nosotros" className="inline-block border-b border-black pb-1 text-[var(--primary)]">
                    Cuentanos tu caso →
                    </Link>
            </div>
          </section>

          
      
      
        



   
    </>
  );
}