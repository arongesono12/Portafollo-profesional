"use client";

import { BriefcaseBusiness, CheckCircle2, MapPin } from "lucide-react";

import { profile } from "@/data/profile";
import { useInView } from "@/hooks/useInView";

export function ExperienceSection() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="experiencia"
      className={`section-image-background section-bg-experience py-12${inView ? " section-in" : " opacity-0"}`}
    >
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-tech text-xs font-black uppercase tracking-[0.22em] text-accent">
            Trayectoria real
          </p>
          <h2 className="section-title mt-3">EXPERIENCIA PROFESIONAL</h2>
          <p className="mt-4 text-sm leading-6 text-secondary">
            Soporte informático, operaciones técnicas e implantación de sistemas
            en Guinea Ecuatorial.
          </p>
        </div>

        <div className="relative mx-auto mt-8 max-w-4xl">
          <span
            className="absolute bottom-4 left-5 top-4 w-px bg-accent/25 md:left-1/2"
            aria-hidden="true"
          />

          <div className="grid gap-7">
            {profile.experience.map((item, index) => (
              <article
                key={`${item.company}-${item.role}`}
                className={`relative grid pl-14 md:grid-cols-2 md:pl-0 ${
                  index % 2 === 0 ? "" : "md:[&>div]:col-start-2"
                }`}
              >
                <span
                  className="timeline-dot absolute left-[13px] top-6 z-10 flex size-4 items-center justify-center rounded-full border-4 border-surface-base bg-accent md:left-1/2 md:-translate-x-1/2"
                  aria-hidden="true"
                />

                <div
                  className={`card-glow hover-glass rounded-lg border border-accent/15 bg-surface-card/90 p-6 shadow-xl shadow-black/10 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-tech text-xs font-black uppercase tracking-[0.16em] text-accent">
                        {item.period}
                      </p>
                      <h3 className="mt-2 text-xl font-black text-primary">{item.role}</h3>
                      <p className="mt-1 flex items-center gap-2 text-sm font-bold text-secondary">
                        <BriefcaseBusiness size={15} className="text-accent" />
                        {item.company}
                      </p>
                    </div>
                    <span className="text-4xl font-black text-accent/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-3 flex items-center gap-2 text-xs text-muted">
                    <MapPin size={14} className="text-accent" />
                    {item.location}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-secondary">{item.description}</p>

                  <ul className="mt-5 grid gap-2 border-t border-accent/10 pt-5">
                    {item.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-xs leading-5 text-secondary"
                      >
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="font-tech rounded-md border border-accent/15 bg-accent/10 px-2.5 py-1.5 text-[10px] font-black uppercase tracking-[0.08em] text-accent"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
