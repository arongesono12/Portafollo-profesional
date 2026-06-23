"use client";

import { Github, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import type { FormEvent, ReactNode } from "react";
import { useState } from "react";

import { profile } from "@/data/profile";
import { useInView } from "@/hooks/useInView";
import { SocialMediaIcon } from "./SocialMediaIcon";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const { ref, inView } = useInView<HTMLElement>();
  const [state, setState] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "No se pudo enviar el mensaje.");
      }

      form.reset();
      setState("success");
      setFeedback(data.message ?? "Mensaje enviado correctamente.");
    } catch (error) {
      setState("error");
      setFeedback(error instanceof Error ? error.message : "No se pudo enviar el mensaje.");
    }
  }

  const linkedinSocial = profile.socials.find((s) => s.icon === "linkedin");
  const githubSocial = profile.socials.find((s) => s.icon === "github");

  return (
    <section
      ref={ref}
      id="contacto"
      className={`section-image-background section-bg-contact py-12${inView ? " section-in" : " opacity-0"}`}
    >
      <div className="section-shell relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-tech text-xs font-black uppercase tracking-eyebrow text-accent">Contacto</p>
          <h2 className="mt-4 text-3xl font-black tracking-normal text-primary">
            Hablemos de tu próximo proyecto o colaboración.
          </h2>
          <p className="mt-5 text-sm leading-7 text-secondary">
            Puedes escribir directamente o usar el formulario. La API valida los datos y queda
            preparada para conectar con un proveedor de email.
          </p>

          <div className="mt-7 grid gap-5">
            <ContactItem icon={<Mail size={20} />} label="Email" value={profile.email} />
            {profile.phone ? <ContactItem icon={<Phone size={20} />} label="Teléfono" value={profile.phone} /> : null}
            <ContactItem icon={<MapPin size={20} />} label="Ubicación" value={profile.location} />
            {profile.whatsapp ? (
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-3 rounded-full border border-accent/25 px-4 py-2 text-sm font-bold text-accent/80 transition hover:border-accent hover:bg-accent/5 hover:text-accent active:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <SocialMediaIcon name="whatsapp" size={18} className="social-media-icon" /> WhatsApp
              </a>
            ) : null}
            <div className="flex gap-3 pt-2">
              {linkedinSocial ? (
                <a
                  href={linkedinSocial.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={linkedinSocial.label}
                  className="inline-flex size-11 items-center justify-center rounded-full bg-surface-overlay text-secondary transition hover:bg-accent hover:text-inverse focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <SocialMediaIcon name="linkedin" size={21} className="social-media-icon" />
                </a>
              ) : null}
              {githubSocial ? (
                <a
                  href={githubSocial.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={githubSocial.label}
                  className="inline-flex size-11 items-center justify-center rounded-full bg-surface-overlay text-secondary transition hover:bg-accent hover:text-inverse focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Github size={20} />
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
                className="card-glow hover-glass rounded-lg border border-accent/15 bg-surface-raised/90 p-5"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nombre" name="name" autoComplete="name" />
            <Field label="Email" name="email" type="email" autoComplete="email" />
          </div>
          <div className="mt-4">
            <Field label="Asunto" name="subject" />
          </div>
          <label className="mt-4 block">
            <span className="text-sm font-bold text-secondary">Mensaje</span>
            <textarea
              name="message"
              required
              minLength={10}
              rows={5}
              placeholder="Cuéntame en qué puedo ayudarte…"
              className="mt-2 w-full resize-none rounded-lg border border-accent/15 bg-surface-overlay px-4 py-3 text-sm text-primary outline-none transition placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            />
          </label>
          <button
            type="submit"
            disabled={state === "loading"}
            className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-black text-inverse transition hover:bg-accent/80 active:bg-accent/70 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {state === "loading" ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
            Enviar mensaje
          </button>
          {feedback ? (
            <p className={`mt-4 text-sm font-bold ${state === "success" ? "text-emerald-300" : "text-red-300"}`}>
              {feedback}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-secondary">{label}</span>
      <input
        name={name}
        type={type}
        required
        {...(autoComplete != null ? { autoComplete } : {})}
        className="mt-2 h-11 w-full rounded-lg border border-accent/15 bg-surface-overlay px-4 text-sm text-primary outline-none transition placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      />
    </label>
  );
}

function ContactItem({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg p-3 text-secondary transition-colors hover:bg-accent/[0.03]">
      <span className="mt-1 text-accent">{icon}</span>
      <div>
        <p className="text-xs font-black uppercase tracking-label text-muted">{label}</p>
        <p className="mt-1 text-sm text-secondary">{value}</p>
      </div>
    </div>
  );
}
