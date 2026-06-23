"use client";

import { GraduationCap, MapPin } from "lucide-react";

import { profile } from "@/data/profile";
import { useInView } from "@/hooks/useInView";

export function EducationSection() {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section
      ref={ref}
      id="educacion"
      className={`section-image-background section-bg-education py-12${inView ? " section-in-left" : " opacity-0"}`}
    >
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-tech text-xs font-black uppercase tracking-[0.22em] text-accent">
            Aprendizaje continuo
          </p>
          <h2 className="section-title mt-3">EDUCACIÓN</h2>
          <p className="mt-4 text-sm leading-6 text-secondary">
            Formación académica, especialización informática y asistencia técnica.
          </p>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {profile.education.map((item) => (
            <article
              key={`${item.institution}-${item.degree}`}
              className="card-glow hover-glass flex flex-col rounded-lg border border-accent/15 bg-surface-overlay p-5"
            >
              <div className="mb-4 inline-flex size-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                <GraduationCap size={22} />
              </div>
              <p className="font-tech text-xs font-black text-accent">{item.period}</p>
              <h3 className="mt-3 text-lg font-black text-primary">{item.degree}</h3>
              <p className="mt-1 text-sm font-semibold text-secondary">{item.institution}</p>
              <p className="mt-3 flex items-center gap-2 text-xs text-muted">
                <MapPin size={15} /> {item.location}
              </p>
              <p className="mt-4 text-xs leading-5 text-secondary">{item.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {item.certificates.map((certificate) => (
                  <span
                    key={certificate}
                    className="font-tech rounded-md border border-accent/15 bg-accent/10 px-2 py-1 text-[10px] font-bold text-accent"
                  >
                    {certificate}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
