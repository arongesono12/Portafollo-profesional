import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="tech-surface py-12">
      <div className="section-shell relative z-10">
        <h2 className="section-title">PROYECTOS DESTACADOS</h2>

        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          {profile.projects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-lg border border-cyan-300/20 bg-[#0b1719]/90 shadow-xl shadow-black/10"
            >
              <div className="relative aspect-[16/9] bg-slate-900">
                <Image
                  src={project.image}
                  alt={`Vista del proyecto ${project.name}`}
                  fill
                  sizes="(min-width: 1024px) 300px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-black text-white">{project.name}</h3>
                <p className="mt-2 min-h-12 text-xs leading-5 text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 text-[11px] font-bold text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className={cn("grid border-t border-cyan-300/15", project.repositoryUrl ? "sm:grid-cols-2" : "")}>
                <a
                  href={project.liveUrl}
                  className={cn(
                    "inline-flex h-11 items-center justify-center gap-2 border-cyan-300/15 text-xs font-black text-cyan-300 transition hover:bg-cyan-300/10",
                    project.repositoryUrl ? "sm:border-r" : "",
                  )}
                >
                  Ver proyecto <ExternalLink size={14} />
                </a>
                {project.repositoryUrl ? (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 text-xs font-black text-cyan-300 transition hover:bg-cyan-300/10"
                  >
                    Código GitHub <Github size={14} />
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
