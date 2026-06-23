"use client";

import Image from "next/image";

interface Skill {
  name: string;
  icon: string;
  level: number;
}

const skills: Skill[] = [
  { name: "React", icon: "/icons/react.svg", level: 96 },
  { name: "Node.js", icon: "/icons/node-js.svg", level: 92 },
  { name: "Python", icon: "/icons/python.svg", level: 85 },
  { name: "TypeScript", icon: "/icons/typescript.svg", level: 94 },
  { name: "AWS", icon: "/icons/AWS.svg", level: 88 },
  { name: "Cloudflare", icon: "/icons/Cloudflare.png", level: 75 },
  { name: "Docker", icon: "/icons/docker.svg", level: 82 },
  { name: "Next.js", icon: "/icons/nextjs-light.svg", level: 95 },
  { name: "Google Cloud", icon: "/icons/google-cloud.svg", level: 78 },
  { name: "PostgreSQL", icon: "/icons/postgre.svg", level: 85 },
  { name: "MongoDB", icon: "/icons/MongoDB.svg", level: 80 },
  { name: "Supabase", icon: "/icons/supabase.svg", level: 88 },
  { name: "Git", icon: "/icons/Git.svg", level: 90 },
  { name: "GitHub", icon: "/icons/github.svg", level: 90 },
  { name: "Figma", icon: "/icons/figma.svg", level: 70 },
  { name: "Photoshop", icon: "/icons/photoshop.svg", level: 65 },
  { name: "Illustrator", icon: "/icons/illustrator.svg", level: 60 },
  { name: "Web", icon: "/icons/web.svg", level: 85 },
];

import { useInView } from "@/hooks/useInView";

export function SkillsSection() {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section ref={ref} id="habilidades" className={`bg-surface-raised py-11${inView ? " section-in-right" : " opacity-0"}`}>
      <div className="section-shell">
        <h2 className="section-title">HABILIDADES</h2>

        <div className="mx-auto mt-6 grid max-w-5xl grid-cols-3 gap-x-6 gap-y-5 sm:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group skill-hover flex flex-col items-center gap-2 text-center"
              tabIndex={0}
              role="figure"
              aria-label={`${skill.name}: ${skill.level}%`}
            >
              <div className="relative flex size-14 items-center justify-center">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  aria-hidden="true"
                  width={44}
                  height={44}
                  className="object-contain transition duration-300 group-hover:scale-110"
                />
                <div className="absolute -top-2 -right-2 flex size-8 items-center justify-center rounded-full bg-accent text-[10px] font-black text-inverse opacity-0 shadow-lg shadow-accent/30 transition duration-200 group-focus-visible:opacity-100 group-hover:opacity-100">
                  {skill.level}%
                </div>
              </div>
              <p className="font-tech text-xs font-semibold text-secondary">{skill.name}</p>
              <div className="h-1 w-full max-w-[64px] overflow-hidden rounded-full bg-accent/10 transition-all duration-300 group-hover:h-1.5 group-hover:bg-accent/20">
                <div
                  className="h-full rounded-full bg-accent transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
