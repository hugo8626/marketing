// FILE: app/api/contact/route.ts
//
// API: CONTACT
//
// Recibe el formulario, valida datos y envía un email
// a info@fityxdigital.com usando Resend.

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
};

const resendApiKey = process.env.RESEND_API_KEY;
const contactToEmail = process.env.CONTACT_TO_EMAIL;
const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

/* ========================================
   HELPERS
======================================== */

function buildHtmlEmail(data: {
  service: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
      <h2>Nuevo formulario de contacto</h2>
      <p><strong>Servicio:</strong> ${data.service || "No indicado"}</p>
      <p><strong>Nombre:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Asunto:</strong> ${data.subject}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${data.message.replace(/\n/g, "<br />")}</p>
    </div>
  `;
}

/* ========================================
   ROUTE
======================================== */

export async function POST(request: Request) {
  const body = (await request.json()) as ContactBody;

  const service = body.service?.trim() ?? "";
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      {
        success: false,
        message: "Faltan campos obligatorios.",
      },
      { status: 400 }
    );
  }

  if (!resend || !contactToEmail || !contactFromEmail) {
    return NextResponse.json(
      {
        success: false,
        message: "Falta configurar el envío de email en el servidor.",
      },
      { status: 500 }
    );
  }

  try {
    const { error } = await resend.emails.send({
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
    });

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: "No se pudo enviar el email.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Formulario enviado correctamente.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Hubo un error al enviar el formulario.",
      },
      { status: 500 }
    );
  }
}