"use client";

import { profile } from "@/data/profile";
import { useInView } from "@/hooks/useInView";

export function LanguagesSection() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="idiomas"
      className={`section-image-background section-bg-languages py-12${inView ? " section-in-right" : " opacity-0"}`}
    >
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">IDIOMAS</h2>
          <p className="mt-3 text-sm leading-6 text-secondary">
            Capacidad de comunicación en contextos profesionales y multiculturales.
          </p>
        </div>

        <div className="mx-auto mt-7 grid max-w-3xl gap-4">
          {profile.languages.map((language) => (
            <article
              key={language.name}
              className="hover-glass rounded-lg border border-accent/15 bg-surface-overlay p-4"
            >
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-base font-black text-primary">{language.name}</h3>
                  <p className="font-tech mt-1 text-xs font-semibold text-muted">{language.level}</p>
                </div>
                <p className="text-sm font-black text-accent">{language.proficiency}%</p>
              </div>
              <div
                className="mt-4 h-2 overflow-hidden rounded-full bg-surface-card"
                role="progressbar"
                aria-label={`Nivel de ${language.name}`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={language.proficiency}
              >
                <div
                  className="h-full rounded-full bg-accent shadow-[0_0_14px_rgb(var(--accent-rgb)/0.45)]"
                  style={{ width: `${language.proficiency}%` }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
