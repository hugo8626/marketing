// FILE: app/servicios/page.tsx
//
// PAGE: SERVICIOS
//
// Página de servicios.
// Solo actúa como contenedor de la sección principal.
// Mantiene la arquitectura limpia y escalable.

import ServiciosSection from "@/components/servicios/ServiciosSection";

export default function ServiciosPage() {
  return (
    <main>
      <ServiciosSection />
    </main>
  );
}