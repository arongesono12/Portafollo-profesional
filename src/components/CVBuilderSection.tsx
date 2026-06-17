"use client";

import { FileText, LayoutTemplate, PenLine } from "lucide-react";
import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

export function CVBuilderSection() {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section ref={ref} id="crear-cv" className={`bg-surface-base py-14${inView ? " section-in-up" : " opacity-0"}`}>
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-eyebrow text-accent">
            Herramienta incluida
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-normal text-primary">
            Crea un CV profesional desde el portafolio.
          </h2>
          <p className="mt-5 text-sm leading-7 text-secondary">
            Los visitantes pueden elegir una plantilla, completar sus datos y ver el resultado
            en vivo antes de exportarlo como PDF desde el navegador.
          </p>
          <a
            href="/cv-builder"
            className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-accent px-5 text-sm font-black text-inverse transition hover:bg-accent/80 active:bg-accent/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Abrir creador de CV <FileText size={17} />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Feature icon={<LayoutTemplate size={21} />} title="Plantillas" text="Moderna, clásica y creativa." />
          <Feature icon={<PenLine size={21} />} title="Edición" text="Formulario simple y rápido." />
          <Feature icon={<FileText size={21} />} title="Preview" text="Vista tipo documento A4." />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="card-glow hover-glass rounded-lg border border-accent/15 bg-surface-overlay p-5">
      <div className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-accent/10 text-accent">
        {icon}
      </div>
      <h3 className="text-sm font-black text-primary">{title}</h3>
      <p className="mt-2 text-xs leading-5 text-secondary">{text}</p>
    </div>
  );
}
