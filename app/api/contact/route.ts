// FILE: app/api/contact/route.ts
//
// API: CONTACT
//
// Recibe el formulario, valida datos y envía un email
// usando Resend.
//
// Mejoras:
// - validación más robusta
// - validación de email
// - escape HTML
// - honeypot anti-spam
// - logs útiles para depuración

import { NextResponse } from "next/server";
import { Resend } from "resend";

/* ========================================
   TYPES
======================================== */

type ContactBody = {
  service?: string;
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
};

/* ========================================
   CONFIG
======================================== */

const resendApiKey = process.env.RESEND_API_KEY;
const contactToEmail = process.env.CONTACT_TO_EMAIL;
const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

/* ========================================
   HELPERS
======================================== */

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizeField(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function buildHtmlEmail(data: {
  service: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const safeService = escapeHtml(data.service || "No indicado");
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeSubject = escapeHtml(data.subject);
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br />");

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
      <h2>Nuevo formulario de contacto</h2>
      <p><strong>Servicio:</strong> ${safeService}</p>
      <p><strong>Nombre:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Asunto:</strong> ${safeSubject}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${safeMessage}</p>
    </div>
  `;
}

function buildTextEmail(data: {
  service: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return [
    "Nuevo formulario de contacto",
    "",
    `Servicio: ${data.service || "No indicado"}`,
    `Nombre: ${data.name}`,
    `Email: ${data.email}`,
    `Asunto: ${data.subject}`,
    "",
    "Mensaje:",
    data.message,
  ].join("\n");
}

/* ========================================
   ROUTE
======================================== */

export async function POST(request: Request) {
  try {
    const rawBody = (await request.json()) as unknown;

    if (!rawBody || typeof rawBody !== "object") {
      return NextResponse.json(
        {
          success: false,
          message: "Datos inválidos.",
        },
        { status: 400 }
      );
    }

    const body = rawBody as ContactBody;

    const service = normalizeField(body.service);
    const name = normalizeField(body.name);
    const email = normalizeField(body.email).toLowerCase();
    const subject = normalizeField(body.subject);
    const message = normalizeField(body.message);
    const website = normalizeField(body.website);

    /* HONEYPOT */

    if (website) {
      return NextResponse.json(
        {
          success: true,
          message: "Formulario enviado correctamente.",
        },
        { status: 200 }
      );
    }

    /* REQUIRED FIELDS */

    if (
      !isNonEmptyString(name) ||
      !isNonEmptyString(email) ||
      !isNonEmptyString(subject) ||
      !isNonEmptyString(message)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Faltan campos obligatorios.",
        },
        { status: 400 }
      );
    }

    /* FIELD LENGTHS */

    if (name.length > 120 || email.length > 200 || subject.length > 200) {
      return NextResponse.json(
        {
          success: false,
          message: "Algunos campos son demasiado largos.",
        },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          message: "El mensaje es demasiado largo.",
        },
        { status: 400 }
      );
    }

    /* EMAIL FORMAT */

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "El email no es válido.",
        },
        { status: 400 }
      );
    }

    /* SERVER CONFIG */

    if (!resend || !contactToEmail || !contactFromEmail) {
      console.error("CONTACT CONFIG ERROR", {
        hasResend: Boolean(resend),
        hasContactToEmail: Boolean(contactToEmail),
        hasContactFromEmail: Boolean(contactFromEmail),
      });

      return NextResponse.json(
        {
          success: false,
          message: "Falta configurar el envío de email en el servidor.",
        },
        { status: 500 }
      );
    }

    /* SEND EMAIL */

    const response = await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      subject: `Nuevo contacto: ${subject}`,
      replyTo: email,
      html: buildHtmlEmail({
        service,
        name,
        email,
        subject,
        message,
      }),
      text: buildTextEmail({
        service,
        name,
        email,
        subject,
        message,
      }),
    });

    if (response.error) {
      console.error("RESEND ERROR", response.error);

      return NextResponse.json(
        {
          success: false,
          message: "No se pudo enviar el email.",
        },
        { status: 500 }
      );
    }

    console.log("CONTACT EMAIL SENT", {
      emailId: response.data?.id ?? null,
      from: contactFromEmail,
      to: contactToEmail,
      replyTo: email,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Formulario enviado correctamente.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("CONTACT ROUTE ERROR", error);

    return NextResponse.json(
      {
        success: false,
        message: "Hubo un error al enviar el formulario.",
      },
      { status: 500 }
    );
  }
}