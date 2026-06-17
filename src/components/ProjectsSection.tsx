"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

import { profile } from "@/data/profile";
import { useInView } from "@/hooks/useInView";

export function ProjectsSection() {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section ref={ref} id="proyectos" className={`tech-surface py-12${inView ? " section-in-left" : " opacity-0"}`}>
      <div className="section-shell relative z-10">
        <h2 className="section-title">PROYECTOS DESTACADOS</h2>

        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          {profile.projects.map((project) => (
            <article
              key={project.name}
              className="group card-glow hover-glass overflow-hidden rounded-lg border border-accent/20 bg-surface-card/90"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-surface-base">
                <Image
                  src={project.image}
                  alt={`Vista del proyecto ${project.name}`}
                  fill
                  sizes="(min-width: 1024px) 300px, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-base/70 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-black text-primary">{project.name}</h3>
                <p className="mt-3 text-sm leading-6 text-secondary">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs font-bold text-accent/90 transition hover:border-accent/40 hover:bg-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-accent/15">
                <a
                  href={project.liveUrl}
                  target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
                  rel={project.liveUrl.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 text-sm font-black text-accent transition hover:bg-accent/10 active:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                >
                  Ver proyecto <ExternalLink size={15} />
                </a>
                {project.repositoryUrl ? (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 border-t border-accent/15 text-sm font-black text-accent transition hover:bg-accent/10 active:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                  >
                    Código GitHub <Github size={15} />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
