"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import Swal from "sweetalert2";
import type { ContactData, PortafolioData } from "@/lib/portafolio-types";

type ContactarProps = {
  contact: ContactData;
  language: PortafolioData["lang"];
};

type SubmitState = "idle" | "sending" | "success" | "error";
const CONTACT_API_URL =
  process.env.NEXT_PUBLIC_CONTACT_API_URL?.trim() || "/api/contactar";

export function Contactar({ contact, language }: ContactarProps) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [phoneCountryCode, setPhoneCountryCode] = useState(
    contact.phoneCountries[0]?.code ?? "",
  );
  const [asunto, setAsunto] = useState("");
  const [body, setBody] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const emailInputRef = useRef<HTMLInputElement>(null);

  const isSending = submitState === "sending";
  const selectedPhoneCountry = useMemo(
    () =>
      contact.phoneCountries.find((country) => country.code === phoneCountryCode) ??
      contact.phoneCountries[0],
    [contact.phoneCountries, phoneCountryCode],
  );

  const handlePhoneChange = (value: string) => {
    setTelefono(value.replace(/\D/g, ""));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const emailInput = emailInputRef.current;

    if (!emailInput?.validity.valid) {
      await Swal.fire({
        icon: "info",
        text: contact.validation.emailInvalid,
        confirmButtonColor: "#facc15",
      });
      emailInput?.focus();
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitState("sending");
    setStatusMessage(contact.messages.sending);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lang: language,
          nombre,
          email,
          telefono,
          phoneCountryCode: selectedPhoneCountry?.code,
          asunto,
          body,
        }),
      });
      const contentType = response.headers.get("content-type") ?? "";
      const result = contentType.includes("application/json")
        ? ((await response.json()) as { message?: string })
        : null;

      if (!response.ok) {
        throw new Error(result?.message ?? contact.messages.error);
      }

      setNombre("");
      setEmail("");
      setTelefono("");
      setAsunto("");
      setBody("");
      setSubmitState("success");
      setStatusMessage(contact.messages.success);
    } catch (error) {
      setSubmitState("error");
      setStatusMessage(
        error instanceof Error ? error.message : contact.messages.error,
      );
    }
  };

  return (
    <section
      id="contactar"
      className="scroll-mt-24 border-t border-line bg-subtle py-16 md:py-20"
      aria-labelledby="contactar-heading"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <h2
              id="contactar-heading"
              className="text-2xl font-semibold tracking-tight text-ink"
            >
              {contact.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
              {contact.description}
            </p>
            <p className="mt-3 text-sm font-medium text-ink">
              {contact.responseNote}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-line bg-raised p-5 shadow-sm md:p-6"
          >
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-nombre"
                    className="text-sm font-medium text-ink"
                  >
                    {contact.fields.nombre}
                  </label>
                  <input
                    id="contact-nombre"
                    name="nombre"
                    type="text"
                    value={nombre}
                    onChange={(event) => setNombre(event.target.value)}
                    maxLength={100}
                    required
                    disabled={isSending}
                    className="mt-2 w-full rounded-xl border border-line bg-page px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/30 disabled:cursor-not-allowed disabled:opacity-70"
                    placeholder={contact.placeholders.nombre}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-ink"
                  >
                    {contact.fields.email}
                  </label>
                  <input
                    ref={emailInputRef}
                    id="contact-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    maxLength={254}
                    required
                    disabled={isSending}
                    className="mt-2 w-full rounded-xl border border-line bg-page px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/30 disabled:cursor-not-allowed disabled:opacity-70"
                    placeholder={contact.placeholders.email}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-phone-country"
                    className="text-sm font-medium text-ink"
                  >
                    {contact.fields.phoneCountry}
                  </label>
                  <select
                    id="contact-phone-country"
                    name="phoneCountryCode"
                    value={phoneCountryCode}
                    onChange={(event) => setPhoneCountryCode(event.target.value)}
                    disabled={isSending}
                    className="mt-2 w-full rounded-xl border border-line bg-page px-3 py-2.5 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {contact.phoneCountries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.label} ({country.dialCode})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-telefono"
                    className="text-sm font-medium text-ink"
                  >
                    {contact.fields.telefono}
                  </label>
                  <input
                    id="contact-telefono"
                    name="telefono"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={telefono}
                    onChange={(event) => handlePhoneChange(event.target.value)}
                    maxLength={15}
                    disabled={isSending}
                    className="mt-2 w-full rounded-xl border border-line bg-page px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/30 disabled:cursor-not-allowed disabled:opacity-70"
                    placeholder={contact.placeholders.telefono}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-asunto"
                  className="text-sm font-medium text-ink"
                >
                  {contact.fields.asunto}
                </label>
                <input
                  id="contact-asunto"
                  name="asunto"
                  type="text"
                  value={asunto}
                  onChange={(event) => setAsunto(event.target.value)}
                  maxLength={120}
                  required
                  disabled={isSending}
                  className="mt-2 w-full rounded-xl border border-line bg-page px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/30 disabled:cursor-not-allowed disabled:opacity-70"
                  placeholder={contact.placeholders.asunto}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-body"
                  className="text-sm font-medium text-ink"
                >
                  {contact.fields.body}
                </label>
                <textarea
                  id="contact-body"
                  name="body"
                  value={body}
                  onChange={(event) => setBody(event.target.value)}
                  maxLength={3000}
                  required
                  rows={5}
                  disabled={isSending}
                  className="mt-2 w-full resize-y rounded-xl border border-line bg-page px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/30 disabled:cursor-not-allowed disabled:opacity-70"
                  placeholder={contact.placeholders.body}
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm ${
                    submitState === "error" ? "text-red-500" : "text-ink-muted"
                  }`}
                >
                  {statusMessage}
                </p>
                <button
                  type="submit"
                  disabled={isSending}
                  className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#010000] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSending ? contact.actions.sending : contact.actions.send}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
