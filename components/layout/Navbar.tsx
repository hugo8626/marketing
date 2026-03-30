"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleOpen(): void {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setOpen(true);
  }

  function handleClose(): void {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 180);
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4 md:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="FITIX DIGITAL"
            width={150}
            height={40}
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 text-sm lg:flex">
          <div
            className="relative"
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
          >
            <button
              type="button"
              className="flex items-center gap-2 font-medium transition-opacity hover:opacity-70"
            >
              Tipo de negocio
              <span
                className={`text-xs transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            <div
              className={`absolute left-0 top-full pt-4 transition-all duration-200 ${
                open
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-2 opacity-0"
              }`}
            >
              <div className="min-w-[260px] overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                <Link
                  href="/negocio/turismo"
                  className="block rounded-xl px-4 py-3 text-sm transition-colors hover:bg-[#f5f5f5]"
                >
                  Hostelería y turismo
                </Link>

                <Link
                  href="/negocio/salud"
                  className="block rounded-xl px-4 py-3 text-sm transition-colors hover:bg-[#f5f5f5]"
                >
                  Salud y bienestar
                </Link>

                <Link
                  href="/negocio/marca"
                  className="block rounded-xl px-4 py-3 text-sm transition-colors hover:bg-[#f5f5f5]"
                >
                  Marca personal
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/servicios"
            className="font-medium transition-opacity hover:opacity-70"
          >
            Servicios
          </Link>

          <Link
            href="/portfolio"
            className="font-medium transition-opacity hover:opacity-70"
          >
            Portfolio
          </Link>

          <Link
            href="/nosotros"
            className="font-medium transition-opacity hover:opacity-70"
          >
            Sobre nosotros
          </Link>

          <Link
            href="/contacto"
            className="font-medium transition-opacity hover:opacity-70"
          >
            Contacto
          </Link>
        </div>

        <Link className="btn-primary hidden lg:inline-flex" href="/contacto">
          Empezar proyecto
        </Link>
      </div>
    </nav>
  );
}