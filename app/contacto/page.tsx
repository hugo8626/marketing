// FILE: app/contacto/page.tsx
//
// PAGE: CONTACTO
//
// Página de contacto con:
// - hero
// - accesos rápidos
// - formulario funcional
// - bloque de ubicación
// - CTA final
//
// Envía los datos a /api/contact

"use client";

import { FormEvent, useMemo, useState } from "react";

/* ========================================
   TYPES
======================================== */

type ContactFormData = {
  service: string;
  name: string;
  email: string;
  subject: string;
  message: string;
};

type SubmitState = "idle" | "loading" | "success" | "error";

type ContactResponse = {
  success: boolean;
  message: string;
};

/* ========================================
   CONSTANTS
======================================== */

const SERVICE_OPTIONS = [
  "Diseño web",
  "Gestión de redes",
  "Fotografía",
  "Optimización web",
  "No estoy seguro, necesito orientación",
] as const;

const WHATSAPP_URL = "https://wa.me/TU_NUMERO_AQUI";

/* ========================================
   COMPONENT
======================================== */

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    service: "",
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitMessage, setSubmitMessage] = useState<string>("");

  /* ========================================
     HELPERS
  ======================================== */

  function updateField<K extends keyof ContactFormData>(
    field: K,
    value: ContactFormData[K]
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleService(option: string) {
    setFormData((current) => ({
      ...current,
      service: current.service === option ? "" : option,
    }));
  }

  const isSubmitDisabled = useMemo(() => {
    return (
      submitState === "loading" ||
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.subject.trim() === "" ||
      formData.message.trim() === ""
    );
  }, [formData.email, formData.message, formData.name, formData.subject, submitState]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitState("loading");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service: formData.service,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = (await response.json()) as ContactResponse;

      if (!response.ok || !data.success) {
        setSubmitState("error");
        setSubmitMessage(
          data.message || "No se pudo enviar el formulario. Inténtalo de nuevo."
        );
        return;
      }

      setSubmitState("success");
      setSubmitMessage(data.message || "Formulario enviado correctamente.");

      setFormData({
        service: "",
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setSubmitState("error");
      setSubmitMessage("Hubo un error al enviar el formulario.");
    }
  }

  /* ========================================
     RENDER
  ======================================== */

  return (
    <main>
      {/* HERO */}

      <section className="px-6 py-16 text-center md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow mb-3">Contacto</p>

          <h1 className="hero-title mb-6">Hablemos de tu proyecto</h1>

          <p className="text-body mx-auto mb-4 max-w-2xl">
            Cuéntanos qué necesitas y vemos si podemos ayudarte a mejorar tu
            presencia digital de forma clara y realista.
          </p>

          <p className="text-xs text-[var(--text-muted)]">
            Sin compromiso · Respuesta en menos de 24h
          </p>
        </div>
      </section>

      {/* OPCIONES */}

      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {/* WHATSAPP */}

          <article className="rounded bg-[#f5f5f5] px-8 py-10 text-center">
            <p className="mb-3 text-[var(--primary)]">◌</p>

            <h2 className="card-title mb-3 text-base">WhatsApp</h2>

            <p className="text-small mb-6">
              ¿Prefieres hablar directamente? Escríbenos por WhatsApp.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block text-sm"
            >
              ESCRIBIR AHORA
            </a>

            <p className="mt-4 text-xs text-[var(--text-muted)]">
              Ideal si ya tienes claro lo que necesitas.
            </p>
          </article>

          {/* FORMULARIO */}

          <article className="rounded bg-[#f5f5f5] px-8 py-10 text-center">
            <p className="mb-3 text-[var(--primary)]">✉</p>

            <h2 className="card-title mb-3 text-base">Formulario</h2>

            <p className="text-small mb-6">
              La mejor forma de ayudarte es con algo de contexto.
            </p>

            <a href="#formulario" className="btn-primary inline-block text-sm">
              IR AL FORMULARIO
            </a>

            <p className="mt-4 text-xs text-[var(--text-muted)]">
              Así podemos darte una respuesta más clara y útil.
            </p>
          </article>
        </div>
      </section>

      {/* FORMULARIO */}

      <section id="formulario" className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="section-title mb-4">Cuéntanos sobre tu proyecto</h2>

            <p className="text-body mx-auto max-w-2xl">
              Cuanta más claridad tengamos, mejor podremos ayudarte.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* TIPO DE AYUDA */}

            <div>
              <p className="text-small mb-3 text-black">
                ¿En qué podemos ayudarte?
              </p>

              <div className="flex flex-wrap gap-3">
                {SERVICE_OPTIONS.map((option) => {
                  const isActive = formData.service === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleService(option)}
                      className={`rounded-full border px-4 py-2 text-xs transition ${
                        isActive
                          ? "border-black bg-black text-white"
                          : "border-[var(--border)] text-[var(--text-muted)] hover:border-black hover:text-black"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* NOMBRE */}

            <div>
              <label
                htmlFor="nombre"
                className="mb-2 block text-sm font-medium text-black"
              >
                Nombre
              </label>

              <input
                id="nombre"
                name="nombre"
                type="text"
                value={formData.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Tu nombre"
                className="w-full rounded border border-[var(--border)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--text-muted)] focus:border-black"
              />
            </div>

            {/* EMAIL */}

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-black"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="Tu email"
                className="w-full rounded border border-[var(--border)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--text-muted)] focus:border-black"
              />
            </div>

            {/* ASUNTO */}

            <div>
              <label
                htmlFor="asunto"
                className="mb-2 block text-sm font-medium text-black"
              >
                Asunto
              </label>

              <input
                id="asunto"
                name="asunto"
                type="text"
                value={formData.subject}
                onChange={(event) => updateField("subject", event.target.value)}
                placeholder="¿En qué podemos ayudarte?"
                className="w-full rounded border border-[var(--border)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--text-muted)] focus:border-black"
              />
            </div>

            {/* MENSAJE */}

            <div>
              <label
                htmlFor="mensaje"
                className="mb-2 block text-sm font-medium text-black"
              >
                Mensaje
              </label>

              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                value={formData.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder={`Cuéntanos un poco más...

¿A qué te dedicas?
¿Qué tienes ahora? (web, redes...)
¿Qué te gustaría mejorar o conseguir?`}
                className="w-full rounded border border-[var(--border)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--text-muted)] focus:border-black"
              />
            </div>

            {/* BOTÓN */}

            <button
              type="submit"
              disabled={isSubmitDisabled}
              className="w-full bg-[#c4a24a] py-4 text-sm font-semibold tracking-wide text-white uppercase transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitState === "loading"
                ? "ENVIANDO..."
                : "QUIERO UNA PROPUESTA"}
            </button>

            {/* ESTADO */}

            {submitMessage ? (
              <p
                className={`text-center text-sm ${
                  submitState === "success"
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                {submitMessage}
              </p>
            ) : null}

            <div className="text-center">
              <p className="text-xs text-[var(--text-muted)]">
                Te responderemos en menos de 24h.
              </p>

              <p className="text-xs text-[var(--text-muted)]">
                Si vemos que no encajamos, también te lo diremos.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* DONDE ESTAMOS */}

      <section className="px-6 pb-16 text-center md:pb-24">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-[var(--primary)]">◌</p>

          <h2 className="section-title mb-4">Dónde estamos</h2>

          <p className="text-body">Estamos en La Escala (Girona),</p>

          <p className="text-body">
            pero trabajamos con negocios en toda Cataluña y también de forma
            remota.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}

      <section className="px-6 pb-20 pt-6 text-center md:pb-30">
        <div className="mx-auto max-w-4xl">
          <h2 className="section-title mb-4">
            Si tienes una idea, podemos ayudarte a darle forma.
          </h2>

          <p className="text-body mx-auto mb-8 max-w-2xl">
            No necesitas tenerlo todo claro.
            <br />
            Nosotros te ayudamos a estructurarlo.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block text-sm"
          >
            HABLAR POR WHATSAPP
          </a>

          <p className="mt-4 text-xs text-[var(--text-muted)]">
            Sin compromiso
          </p>
        </div>
      </section>
    </main>
  );
}