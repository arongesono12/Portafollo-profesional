"use client";

import { ArrowUpRight, Award, MapPin } from "lucide-react";
import Image from "next/image";

import { profile } from "@/data/profile";
import { useInView } from "@/hooks/useInView";

const experienceImages = [
  "/image/portal.png",
  "/image/portal.png",
  "/image/portal.png",
];

export function ExperienceSection() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section ref={ref} id="experiencia" className={`tech-surface py-16${inView ? " section-in" : " opacity-0"}`}>
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">
            Trayectoria
          </p>
          <h2 className="section-title mt-3">EXPERIENCIA PROFESIONAL</h2>
          <p className="mt-4 text-sm leading-6 text-secondary">
            Productos, infraestructura y decisiones técnicas convertidas en
            resultados medibles.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {profile.experience.map((item, index) => (
            <article
              key={`${item.company}-${item.role}`}
              className="group hover-glass grid overflow-hidden rounded-lg border border-accent/15 bg-surface-card/90 shadow-2xl shadow-black/10 backdrop-blur-md lg:grid-cols-[0.42fr_0.58fr]"
            >
              <div className="relative min-h-64 overflow-hidden lg:min-h-full">
                <Image
                  src={experienceImages[index] ?? experienceImages[0]}
                  alt={`Entorno profesional de ${item.company}`}
                  fill
                  sizes="(min-width: 1024px) 390px, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                  style={{ objectPosition: `${35 + index * 20}% center` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                <div className="absolute left-5 top-5 flex items-center gap-2">
                  <span className="inline-flex h-8 items-center rounded-md border border-white/20 bg-black/30 px-3 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    Experiencia {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/65">
                    {item.period}
                  </p>
                  <h3 className="mt-2 max-w-sm text-2xl font-black leading-tight text-white">
                    {item.role}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xl font-black text-primary">
                      {item.company}
                    </p>
                    <p className="mt-2 flex items-center gap-2 text-xs font-semibold text-muted">
                      <MapPin size={14} className="text-accent" />
                      {item.location}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="text-accent transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-6 text-sm leading-7 text-secondary">
                  {item.description}
                </p>

                <div className="mt-6 border-t border-accent/15 pt-5">
                  <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-accent">
                    <Award size={15} />
                    Impacto destacado
                  </p>
                  <ul className="mt-4 grid gap-3">
                    {item.achievements.slice(0, 2).map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-3 text-xs leading-5 text-secondary"
                      >
                        <span
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_10px_rgb(var(--accent-rgb)/0.8)]"
                          aria-hidden="true"
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-accent/15 bg-accent/10 px-2.5 py-1.5 text-[10px] font-black uppercase tracking-[0.08em] text-accent"
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
    </section>
  );
}
