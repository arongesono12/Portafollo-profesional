"use client";

import { Building2, MapPin } from "lucide-react";

import { profile } from "@/data/profile";
import { useInView } from "@/hooks/useInView";

export function ExperienceSection() {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section ref={ref} id="experiencia" className={`bg-surface-base py-12${inView ? " section-in" : " opacity-0"}`}>
      <div className="section-shell">
        <h2 className="section-title">EXPERIENCIA PROFESIONAL</h2>

        <div className="mx-auto mt-8 max-w-3xl">
          {profile.experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="hover-glass relative grid gap-5 rounded-lg border-l border-accent/40 pb-10 pl-8 pr-4 pt-4 last:pb-0 md:grid-cols-[150px_1fr]"
            >
              <span className="timeline-dot absolute -left-[9px] top-5 size-4 rounded-full bg-accent shadow-lg shadow-accent/40" />
              <div className="flex items-start gap-3">
                <div className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-surface-solid text-inverse">
                  <Building2 size={25} />
                </div>
                <div className="md:hidden">
                  <p className="font-black text-primary">{item.company}</p>
                  <p className="text-xs font-bold text-accent">{item.period}</p>
                </div>
              </div>

              <div>
                <p className="hidden text-sm font-black text-primary md:block">{item.company}</p>
                <h3 className="mt-1 text-lg font-black text-primary">{item.role}</h3>
                <p className="mt-1 text-xs font-semibold text-accent">{item.period}</p>
                <p className="mt-2 flex items-center gap-2 text-xs text-muted">
                  <MapPin size={14} /> {item.location}
                </p>
                <p className="mt-3 text-sm leading-6 text-secondary">{item.description}</p>
                <ul className="mt-3 space-y-1.5">
                  {item.achievements.slice(0, 2).map((achievement) => (
                    <li key={achievement} className="flex items-start gap-2 text-xs leading-5 text-muted">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
