import { NextResponse } from "next/server";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    };

    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { ok: false, message: "Todos los campos son obligatorios." },
        { status: 400 },
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, message: "El formato del email no es válido." },
        { status: 400 },
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL;
    const providerApiKey = process.env.EMAIL_PROVIDER_API_KEY;

    // Punto de integración preparado para Resend, Nodemailer, MailerSend o SendGrid.
    console.info("Nuevo mensaje de contacto", {
      to: contactEmail,
      providerConfigured: Boolean(providerApiKey),
      name,
      email,
      subject,
      message,
    });

    return NextResponse.json({
      ok: true,
      message: "Mensaje recibido correctamente. Te responderé lo antes posible.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "No se pudo procesar la solicitud." },
      { status: 500 },
    );
  }
}
