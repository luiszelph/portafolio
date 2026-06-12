import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_SUBJECT_LENGTH = 120;
const MAX_BODY_LENGTH = 3000;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_PHONE_LENGTH = 15;
const RESEND_API_KEY_PLACEHOLDER = "REEMPLAZA_CON_TU_RESEND_API_KEY";
const DEFAULT_CONTACT_FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>";
const CONTACT_SUBJECT_PREFIX = "PORTAFOLIO";
const PHONE_COUNTRIES = {
  MX: {
    dialCode: "+52",
    labels: { es: "México", en: "Mexico" },
  },
  US: {
    dialCode: "+1",
    labels: { es: "Estados Unidos", en: "United States" },
  },
  CA: {
    dialCode: "+1",
    labels: { es: "Canadá", en: "Canada" },
  },
} as const;
const EMAIL_COPY = {
  es: {
    source: "Formulario de contacto del portafolio",
    name: "Nombre",
    email: "Correo",
    phone: "Teléfono",
    subject: "Asunto",
    message: "Mensaje",
    noPhone: "Sin número telefónico",
    required: "Nombre, correo, asunto y mensaje son obligatorios.",
    emailInvalid: "Agregue un correo válido.",
    phoneInvalid: "El número telefónico debe contener solo números.",
  },
  en: {
    source: "Portfolio contact form",
    name: "Name",
    email: "Email",
    phone: "Phone",
    subject: "Subject",
    message: "Message",
    noPhone: "No phone number",
    required: "Name, email, subject, and message are required.",
    emailInvalid: "Please enter a valid email address.",
    phoneInvalid: "The phone number must contain digits only.",
  },
} as const;

type ContactRequest = {
  lang?: unknown;
  nombre?: unknown;
  email?: unknown;
  telefono?: unknown;
  phoneCountryCode?: unknown;
  asunto?: unknown;
  body?: unknown;
};

function sanitizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function sanitizeSubject(value: unknown) {
  return sanitizeText(value).replace(/\s+/g, " ");
}

function getLanguage(value: unknown) {
  return value === "en" ? "en" : "es";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildEmailSubject(prefix: string, asunto: string) {
  return asunto.toUpperCase().startsWith(prefix)
    ? asunto
    : `${prefix} - ${asunto}`;
}

function getPhoneCountry(code: string) {
  return PHONE_COUNTRIES[code as keyof typeof PHONE_COUNTRIES];
}

function buildPhoneText(
  telefono: string,
  phoneCountryCode: string,
  lang: keyof typeof EMAIL_COPY,
) {
  if (!telefono) {
    return EMAIL_COPY[lang].noPhone;
  }

  const phoneCountry = getPhoneCountry(phoneCountryCode) ?? PHONE_COUNTRIES.MX;
  return `${phoneCountry.dialCode} ${telefono} (${phoneCountry.labels[lang]})`;
}

function buildEmailText({
  lang,
  nombre,
  email,
  telefono,
  phoneCountryCode,
  asunto,
  body,
}: {
  lang: keyof typeof EMAIL_COPY;
  nombre: string;
  email: string;
  telefono: string;
  phoneCountryCode: string;
  asunto: string;
  body: string;
}) {
  const copy = EMAIL_COPY[lang];

  return [
    copy.source,
    "",
    `${copy.name}: ${nombre}`,
    `${copy.email}: ${email}`,
    `${copy.phone}: ${buildPhoneText(telefono, phoneCountryCode, lang)}`,
    `${copy.subject}: ${asunto}`,
    "",
    `${copy.message}:`,
    body,
  ].join("\n");
}

function getContactConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL ?? DEFAULT_CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

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
    config: { apiKey, from, to },
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

  const lang = getLanguage(payload.lang);
  const copy = EMAIL_COPY[lang];
  const nombre = sanitizeSubject(payload.nombre);
  const email = sanitizeText(payload.email).toLowerCase();
  const telefono = sanitizeText(payload.telefono);
  const phoneCountryCode = sanitizeText(payload.phoneCountryCode) || "MX";
  const asunto = sanitizeSubject(payload.asunto);
  const body = sanitizeText(payload.body);

  if (!nombre || !email || !asunto || !body) {
    return NextResponse.json(
      { message: copy.required },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: copy.emailInvalid },
      { status: 400 },
    );
  }

  if (telefono && !/^\d+$/.test(telefono)) {
    return NextResponse.json(
      { message: copy.phoneInvalid },
      { status: 400 },
    );
  }

  if (!getPhoneCountry(phoneCountryCode)) {
    return NextResponse.json(
      { message: "El país seleccionado no es válido." },
      { status: 400 },
    );
  }

  if (
    nombre.length > MAX_NAME_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    telefono.length > MAX_PHONE_LENGTH ||
    asunto.length > MAX_SUBJECT_LENGTH ||
    body.length > MAX_BODY_LENGTH
  ) {
    return NextResponse.json(
      { message: "Uno o más campos exceden la longitud permitida." },
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
      replyTo: email,
      subject: buildEmailSubject(CONTACT_SUBJECT_PREFIX, asunto),
      text: buildEmailText({
        lang,
        nombre,
        email,
        telefono,
        phoneCountryCode,
        asunto,
        body,
      }),
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
