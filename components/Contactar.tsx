"use client";

import { FormEvent, useState } from "react";
import type { ContactData } from "@/lib/portafolio-types";

type ContactarProps = {
  contact: ContactData;
};

type SubmitState = "idle" | "sending" | "success" | "error";

export function Contactar({ contact }: ContactarProps) {
  const [asunto, setAsunto] = useState("");
  const [body, setBody] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const isSending = submitState === "sending";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("sending");
    setStatusMessage(contact.messages.sending);

    try {
      const response = await fetch("/api/contactar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ asunto, body }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? contact.messages.error);
      }

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
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-line bg-raised p-5 shadow-sm md:p-6"
          >
            <div className="space-y-4">
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
