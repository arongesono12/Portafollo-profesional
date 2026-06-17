"use client";

import { GraduationCap, MapPin } from "lucide-react";

import { profile } from "@/data/profile";
import { useInView } from "@/hooks/useInView";

export function EducationSection() {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section ref={ref} id="formacion" className={`bg-surface-base py-16${inView ? " section-in-left" : " opacity-0"}`}>
      <div className="section-shell">
        <h2 className="section-title">FORMACIÓN</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {profile.education.map((item) => (
            <article
              key={`${item.institution}-${item.degree}`}
              className="card-glow hover-glass rounded-lg border border-accent/15 bg-surface-overlay p-5"
            >
              <div className="mb-4 inline-flex size-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                <GraduationCap size={22} />
              </div>
              <p className="text-xs font-black text-accent">{item.period}</p>
              <h3 className="mt-3 text-lg font-black text-primary">{item.degree}</h3>
              <p className="mt-1 text-sm font-semibold text-secondary">{item.institution}</p>
              <p className="mt-3 flex items-center gap-2 text-xs text-muted">
                <MapPin size={15} /> {item.location}
              </p>
              <p className="mt-4 text-xs leading-5 text-secondary">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
