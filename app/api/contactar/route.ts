import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_SUBJECT_LENGTH = 120;
const MAX_BODY_LENGTH = 3000;
const RESEND_API_KEY_PLACEHOLDER = "REEMPLAZA_CON_TU_RESEND_API_KEY";
const DEFAULT_CONTACT_FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>";
const DEFAULT_CONTACT_SUBJECT_PREFIX = "[Portafolio]";
const CONTACT_SOURCE_LABEL = "Formulario de contacto del portafolio";

type ContactRequest = {
  asunto?: unknown;
  body?: unknown;
};

function sanitizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function sanitizeSubject(value: unknown) {
  return sanitizeText(value).replace(/\s+/g, " ");
}

function buildEmailSubject(prefix: string, asunto: string) {
  return asunto.startsWith(prefix) ? asunto : `${prefix} ${asunto}`;
}

function buildEmailText(asunto: string, body: string) {
  return [
    CONTACT_SOURCE_LABEL,
    "",
    `Asunto: ${asunto}`,
    "",
    "Mensaje:",
    body,
  ].join("\n");
}

function getContactConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL ?? DEFAULT_CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  const subjectPrefix =
    process.env.CONTACT_SUBJECT_PREFIX?.trim() ||
    DEFAULT_CONTACT_SUBJECT_PREFIX;

  if (!apiKey || !from || !to) {
    return {
      config: null,
      message: "El servicio de contacto no está configurado.",
    };
  }

  if (apiKey === RESEND_API_KEY_PLACEHOLDER) {
    return {
      config: null,
      message: "Falta reemplazar RESEND_API_KEY con tu API key de Resend.",
    };
  }

  return {
    config: { apiKey, from, to, subjectPrefix },
    message: null,
  };
}

export async function POST(request: Request) {
  let payload: ContactRequest;

  try {
    payload = (await request.json()) as ContactRequest;
  } catch {
    return NextResponse.json(
      { message: "La solicitud no tiene un formato válido." },
      { status: 400 },
    );
  }

  const asunto = sanitizeSubject(payload.asunto);
  const body = sanitizeText(payload.body);

  if (!asunto || !body) {
    return NextResponse.json(
      { message: "Asunto y body son obligatorios." },
      { status: 400 },
    );
  }

  if (asunto.length > MAX_SUBJECT_LENGTH || body.length > MAX_BODY_LENGTH) {
    return NextResponse.json(
      { message: "El asunto o body excede la longitud permitida." },
      { status: 400 },
    );
  }

  const { config, message } = getContactConfig();

  if (!config) {
    return NextResponse.json(
      { message },
      { status: 500 },
    );
  }

  const resend = new Resend(config.apiKey);

  try {
    const { error } = await resend.emails.send({
      from: config.from,
      to: config.to,
      subject: buildEmailSubject(config.subjectPrefix, asunto),
      text: buildEmailText(asunto, body),
      headers: {
        "X-Portfolio-Contact": "true",
      },
    });

    if (error) {
      return NextResponse.json(
        { message: "No fue posible enviar el mensaje." },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Mensaje enviado correctamente." });
  } catch {
    return NextResponse.json(
      { message: "No fue posible enviar el mensaje." },
      { status: 502 },
    );
  }
}
