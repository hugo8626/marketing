"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false);

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

  function toggleMobileMenu(): void {
    setMobileMenuOpen((prev) => {
      const nextValue = !prev;

      if (!nextValue) {
        setMobileBusinessOpen(false);
      }

      return nextValue;
    });
  }

  function closeMobileMenu(): void {
    setMobileMenuOpen(false);
    setMobileBusinessOpen(false);
  }

  function toggleMobileBusiness(): void {
    setMobileBusinessOpen((prev) => !prev);
  }

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      document.body.style.overflow = "";
    };
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-[9999] border-b border-black/10 bg-white shadow-sm">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 sm:px-6 md:px-8">
        <Link href="/" className="shrink-0" onClick={closeMobileMenu}>
          <Image
            src="/logo.svg"
            alt="FITIX DIGITAL"
            width={150}
            height={40}
            priority
            className="h-auto w-[110px] sm:w-[130px] md:w-[150px]"
          />
        </Link>

        <div className="flex justify-center">
          <div className="hidden items-center gap-8 text-sm lg:flex">
            <div
              className="relative"
              onMouseEnter={handleOpen}
              onMouseLeave={handleClose}
            >
              <button
                type="button"
                className="flex items-center gap-2 font-medium text-black transition-opacity hover:opacity-70"
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
                    className="block rounded-xl px-4 py-3 text-sm text-black transition-colors hover:bg-[#f5f5f5]"
                  >
                    Hostelería y turismo
                  </Link>

                  <Link
                    href="/negocio/salud"
                    className="block rounded-xl px-4 py-3 text-sm text-black transition-colors hover:bg-[#f5f5f5]"
                  >
                    Salud y bienestar
                  </Link>

                  <Link
                    href="/negocio/marca"
                    className="block rounded-xl px-4 py-3 text-sm text-black transition-colors hover:bg-[#f5f5f5]"
                  >
                    Marca personal
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/servicios"
              className="font-medium text-black transition-opacity hover:opacity-70"
            >
              Servicios
            </Link>

            <Link
              href="/portfolio"
              className="font-medium text-black transition-opacity hover:opacity-70"
            >
              Portfolio
            </Link>

            <Link
              href="/nosotros"
              className="font-medium text-black transition-opacity hover:opacity-70"
            >
              Sobre nosotros
            </Link>

            <Link
              href="/contacto"
              className="font-medium text-black transition-opacity hover:opacity-70"
            >
              Contacto
            </Link>
          </div>

          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-colors hover:bg-[#f5f5f5] lg:hidden"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            <span className="relative block h-4 w-4">
              <span
                className={`absolute left-1/2 top-1/2 h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 bg-black transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45" : "-translate-y-[6px]"
                }`}
              />
              <span
                className={`absolute left-1/2 top-1/2 h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 bg-black transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-1/2 top-1/2 h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 bg-black transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45" : "translate-y-[6px]"
                }`}
              />
            </span>
          </button>
        </div>

        <div className="flex justify-end">
          <Link
            className="btn-primary hidden px-3 py-2 text-sm lg:inline-flex lg:px-5 lg:py-2"
            href="/contacto"
          >
            Empezar proyecto
          </Link>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-black/5 bg-white transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-6 py-4 md:px-8">
          <button
            type="button"
            onClick={toggleMobileBusiness}
            className="flex items-center justify-between rounded-xl px-1 py-4 text-left text-base font-medium text-black"
          >
            <span>Tipo de negocio</span>
            <span
              className={`text-sm transition-transform duration-300 ${
                mobileBusinessOpen ? "rotate-180" : ""
              }`}
            >
              ▾
            </span>
          </button>

          <div
            className={`grid transition-all duration-300 ${
              mobileBusinessOpen
                ? "grid-rows-[1fr] pb-3 opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="mb-2 ml-2 flex flex-col rounded-[28px] bg-[#f3f3f3] p-5">
                <Link
                  href="/negocio/turismo"
                  onClick={closeMobileMenu}
                  className="rounded-xl px-4 py-4 text-sm text-black transition-colors hover:bg-white"
                >
                  Hostelería y turismo
                </Link>

                <Link
                  href="/negocio/salud"
                  onClick={closeMobileMenu}
                  className="rounded-xl px-4 py-4 text-sm text-black transition-colors hover:bg-white"
                >
                  Salud y bienestar
                </Link>

                <Link
                  href="/negocio/marca"
                  onClick={closeMobileMenu}
                  className="rounded-xl px-4 py-4 text-sm text-black transition-colors hover:bg-white"
                >
                  Marca personal
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/servicios"
            onClick={closeMobileMenu}
            className="rounded-xl px-1 py-4 text-base font-medium text-black transition-opacity hover:opacity-70"
          >
            Servicios
          </Link>

          <Link
            href="/portfolio"
            onClick={closeMobileMenu}
            className="rounded-xl px-1 py-4 text-base font-medium text-black transition-opacity hover:opacity-70"
          >
            Portfolio
          </Link>

          <Link
            href="/nosotros"
            onClick={closeMobileMenu}
            className="rounded-xl px-1 py-4 text-base font-medium text-black transition-opacity hover:opacity-70"
          >
            Sobre nosotros
          </Link>

          <Link
            href="/contacto"
            onClick={closeMobileMenu}
            className="rounded-xl px-1 py-4 text-base font-medium text-black transition-opacity hover:opacity-70"
          >
            Contacto
          </Link>

          <div className="pt-4">
            <Link
              href="/contacto"
              onClick={closeMobileMenu}
              className="btn-primary inline-flex w-full justify-center"
            >
              Empezar proyecto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}