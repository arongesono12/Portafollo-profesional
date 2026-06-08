"use client";

import { Github, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import type { FormEvent, ReactNode } from "react";
import { useState } from "react";

import { profile } from "@/data/profile";
import { SocialMediaIcon } from "./SocialMediaIcon";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactSection() {
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
    <section id="contacto" className="tech-surface py-16 text-white">
      <div className="section-shell relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-eyebrow text-cyan-300">Contacto</p>
          <h2 className="mt-4 text-3xl font-black tracking-normal">
            Hablemos de tu próximo proyecto o colaboración.
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-300">
            Puedes escribir directamente o usar el formulario. La API valida los datos y queda
            preparada para conectar con un proveedor de email.
          </p>

          <div className="mt-7 grid gap-4">
            <ContactItem icon={<Mail size={20} />} label="Email" value={profile.email} />
            {profile.phone ? <ContactItem icon={<Phone size={20} />} label="Teléfono" value={profile.phone} /> : null}
            <ContactItem icon={<MapPin size={20} />} label="Ubicación" value={profile.location} />
            {profile.whatsapp ? (
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-3 rounded-full border border-cyan-300/25 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:border-cyan-300 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
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
                  className="inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
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
                  className="inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <Github size={20} />
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-cyan-300/15 bg-surface-raised/90 p-5 text-white shadow-2xl shadow-black/20"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nombre" name="name" autoComplete="name" />
            <Field label="Email" name="email" type="email" autoComplete="email" />
          </div>
          <div className="mt-4">
            <Field label="Asunto" name="subject" />
          </div>
          <label className="mt-4 block">
            <span className="text-sm font-bold text-slate-300">Mensaje</span>
            <textarea
              name="message"
              required
              minLength={10}
              rows={5}
              placeholder="Cuéntame en qué puedo ayudarte…"
              className="mt-2 w-full resize-none rounded-lg border border-cyan-300/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            />
          </label>
          <button
            type="submit"
            disabled={state === "loading"}
            className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 text-sm font-black text-slate-950 transition hover:bg-cyan-300 active:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
      <span className="text-sm font-bold text-slate-300">{label}</span>
      <input
        name={name}
        type={type}
        required
        {...(autoComplete != null ? { autoComplete } : {})}
        className="mt-2 h-11 w-full rounded-lg border border-cyan-300/15 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      />
    </label>
  );
}

function ContactItem({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 text-slate-300">
      <span className="mt-1 text-cyan-300">{icon}</span>
      <div>
        <p className="text-xs font-black uppercase tracking-label text-slate-400">{label}</p>
        <p className="mt-1 text-sm text-slate-200">{value}</p>
      </div>
    </div>
  );
}
