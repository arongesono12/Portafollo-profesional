"use client";

import { BadgeCheck, BriefcaseBusiness, Compass, Target } from "lucide-react";
import type { ReactNode } from "react";

import { profile } from "@/data/profile";
import { useInView } from "@/hooks/useInView";

const stats = [
  { label: "Años de experiencia", value: `${profile.yearsOfExperience}+` },
  { label: "Sectores", value: profile.sectors.length.toString() },
  { label: "Proyectos liderados", value: "30+" },
];

export function AboutSection() {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section ref={ref} id="sobre-mi" className={`bg-surface-raised py-16${inView ? " section-in-right" : " opacity-0"}`}>
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div
        >
          <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">Sobre mí</p>
          <h2 className="mt-4 text-3xl font-black tracking-normal text-primary">
            Perfil profesional con foco en claridad, producto y escala.
          </h2>
          <p className="mt-5 text-base leading-7 text-secondary">{profile.bio}</p>
        </div>

        <div className="grid gap-5">
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="card-glow hover-glass rounded-lg border border-accent/15 bg-surface-overlay p-5">
                <p className="text-3xl font-black text-accent">{stat.value}</p>
                <p className="mt-2 text-xs font-semibold text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <InfoCard icon={<BriefcaseBusiness size={20} />} title="Especialidad" text={profile.specialty} />
            <InfoCard icon={<Compass size={20} />} title="Sectores" text={profile.sectors.join(", ")} />
            <InfoCard icon={<BadgeCheck size={20} />} title="Valores" text={profile.values.join(", ")} />
            <InfoCard icon={<Target size={20} />} title="Objetivo actual" text={profile.currentGoals} />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
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
