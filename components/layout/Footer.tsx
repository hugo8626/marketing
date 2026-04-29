// FILE: components/layout/Footer.tsx
//
// COMPONENT: FOOTER
//
// Footer profesional con:
// - marca + mensaje
// - navegación
// - servicios
// - contacto
// - redes
// - cierre legal

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-14 lg:py-16">

        {/* TOP */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* MARCA */}
          <div className="flex flex-col gap-4">
            <p className="font-['ClashDisplay'] text-xl font-semibold">
              FITYX DIGITAL
            </p>

            <p className="text-sm text-[var(--text-muted)] max-w-xs">
              Diseñamos webs estratégicas para negocios que quieren crecer,
              posicionarse y conseguir clientes.
            </p>

            {/* REDES */}
            <div className="flex items-center gap-4 pt-2">
              <Link href="#" className="text-sm hover:text-[var(--primary)]">
                Instagram
              </Link>
              
              <Link href="#" className="text-sm hover:text-[var(--primary)]">
                WhatsApp
              </Link>
            </div>
          </div>

          {/* NAVEGACIÓN */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold">Navegación</p>

            <div className="flex flex-col gap-2 text-sm text-[var(--text-muted)]">
              <Link href="/">Inicio</Link>
              <Link href="/servicios">Servicios</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/nosotros">Nosotros</Link>
              <Link href="/contacto">Contacto</Link>
            </div>
          </div>

          {/* SERVICIOS */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold">Servicios</p>

            <div className="flex flex-col gap-2 text-sm text-[var(--text-muted)]">
              <Link href="/servicios/one-page">One Page</Link>
              <Link href="/servicios/web-completa">Web completa</Link>
              <Link href="/servicios/landing">Landing page</Link>
              <Link href="/servicios/socials">Contenido</Link>
              <Link href="/servicios/fotografia">Fotografía</Link>
            </div>
          </div>

          {/* CONTACTO */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold">Contacto</p>

            <div className="flex flex-col gap-2 text-sm text-[var(--text-muted)]">
              <p>info@fityxdigital.com</p>
              <p>+34 689083475</p>
              <p>Girona, España</p>
            </div>

            <Link
              href="/contacto"
              className="mt-2 inline-block text-sm font-medium text-[var(--primary)] hover:opacity-70"
            >
              Solicitar proyecto →
            </Link>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--border)] pt-6 text-xs text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
          
          <p>© {new Date().getFullYear()} Fityx Digital. Todos los derechos reservados.</p>

          <div className="flex gap-4">
            <Link href="/legal/privacidad">Privacidad</Link>
            <Link href="/legal/terminos">Términos</Link>
            <Link href="/legal/cookies">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}