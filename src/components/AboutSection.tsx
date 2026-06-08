import { BadgeCheck, BriefcaseBusiness, Compass, Target } from "lucide-react";
import type { ReactNode } from "react";

import { profile } from "@/data/profile";

const stats = [
  { label: "Años de experiencia", value: `${profile.yearsOfExperience}+` },
  { label: "Sectores", value: profile.sectors.length.toString() },
  { label: "Proyectos liderados", value: "30+" },
];

export function AboutSection() {
  return (
    <section id="sobre-mi" className="bg-surface-raised py-16">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div
        >
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Sobre mí</p>
          <h2 className="mt-4 text-3xl font-black tracking-normal text-white">
            Perfil profesional con foco en claridad, producto y escala.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300">{profile.bio}</p>
        </div>

        <div className="grid gap-5">
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-cyan-300/15 bg-white/5 p-5">
                <p className="text-3xl font-black text-cyan-300">{stat.value}</p>
                <p className="mt-2 text-xs font-semibold text-slate-300">{stat.label}</p>
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
    <div className="rounded-lg border border-cyan-300/15 bg-white/5 p-5">
      <div className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-300">
        {icon}
      </div>
      <h3 className="text-sm font-black text-white">{title}</h3>
      <p className="mt-2 text-xs leading-5 text-slate-300">{text}</p>
    </div>
  );
}
