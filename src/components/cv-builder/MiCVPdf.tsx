"use client";

import { useEffect, useRef } from "react";

import { profile } from "@/data/profile";
import type { CVData, CVAvatarCrop } from "@/types/cv";
import { cn } from "@/lib/utils";
import Image from "next/image";

function buildMyCVData(): CVData {
  return {
    avatarUrl: profile.avatar,
    avatarCrop: { x: 50, y: 8, zoom: 1 } satisfies CVAvatarCrop,
    fullName: profile.name,
    headline: profile.title,
    email: profile.email,
    phone: profile.phone ?? "",
    location: profile.location,
    summary: profile.bio,
    skills: profile.skillGroups
      .flatMap((g) => g.skills.map((s) => s.name))
      .join(", "),
    experience: profile.experience.map((exp) => ({
      id: `exp-${exp.company.replace(/\s+/g, "-")}`,
      role: exp.role,
      company: exp.company,
      period: exp.period,
      description:
        exp.description +
        (exp.achievements.length
          ? "\n\nLogros:\n\u2022 " + exp.achievements.join("\n\u2022 ")
          : ""),
    })),
    education: profile.education.map((edu) => ({
      id: `edu-${edu.institution.replace(/\s+/g, "-")}`,
      degree: edu.degree,
      institution: edu.institution,
      period: edu.period,
    })),
  };
}

export function MiCVPdf({ onClose }: { onClose: () => void }) {
  const data = buildMyCVData();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.print();
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handler = () => onClose();
    window.addEventListener("afterprint", handler);
    return () => window.removeEventListener("afterprint", handler);
  }, [onClose]);

  const skills = data.skills
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white print:relative print:inset-auto print:z-auto"
    >
      <article className="cv-document mx-auto min-h-[880px] w-full max-w-[780px] overflow-hidden bg-white text-slate-950 shadow-2xl shadow-black/30 cv-template-modern">
        <div className="grid min-h-[880px] md:grid-cols-[240px_1fr]">
          <aside className="bg-slate-950 p-7 text-white">
            <CVIdentity data={data} compact />
            <PreviewBlock title="Contacto" light>
              <p>{data.email}</p>
              <p>{data.phone}</p>
              <p>{data.location}</p>
            </PreviewBlock>
            <PreviewBlock title="Habilidades" light>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-cyan-200/20 bg-white/5 px-2 py-1 text-xs font-bold text-cyan-50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </PreviewBlock>
          </aside>
          <div className="p-8">
            <PreviewBlock title="Perfil">
              <p className="text-sm leading-6 text-slate-700">{data.summary}</p>
            </PreviewBlock>
            <PreviewBlock title="Experiencia">
              <div className="grid gap-5">
                {data.experience.map((item) => (
                  <div key={item.id}>
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                      <h4 className="text-base font-black text-slate-950">{item.role}</h4>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                        {item.period}
                      </p>
                    </div>
                    <p className="mt-1 text-sm font-bold text-slate-700">{item.company}</p>
                    <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </PreviewBlock>
            <PreviewBlock title="Formación">
              <div className="grid gap-4">
                {data.education.map((item) => (
                  <div key={item.id}>
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                      <h4 className="text-sm font-black text-slate-950">{item.degree}</h4>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                        {item.period}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-slate-600">{item.institution}</p>
                  </div>
                ))}
              </div>
            </PreviewBlock>
          </div>
        </div>
      </article>
    </div>
  );
}

function CVIdentity({ data, compact }: { data: CVData; compact: boolean }) {
  const initials = data.fullName
    .split(" ")
    .map((p) => p.trim().charAt(0))
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className={cn("flex gap-4", compact ? "flex-col items-start" : "flex-col items-center text-center")}>
      <div className="relative size-24 shrink-0 overflow-hidden rounded-full border-2 border-cyan-300/65 bg-slate-900 text-cyan-100 shadow-lg shadow-cyan-500/10">
        {data.avatarUrl ? (
          <Image
            src={data.avatarUrl}
            alt={`Avatar de ${data.fullName}`}
            fill
            unoptimized
            sizes="96px"
            className="object-cover object-[50%_8%]"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-cyan-300/10">
            <span className="text-xl font-black tracking-normal">{initials}</span>
          </div>
        )}
      </div>
      <h2 className="text-2xl font-black uppercase leading-tight tracking-normal">{data.fullName}</h2>
      <p className="mt-2 text-sm font-bold text-cyan-200">{data.headline}</p>
    </div>
  );
}

function PreviewBlock({
  title,
  children,
  light = false,
}: {
  title: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <section className="mb-7 last:mb-0">
      <h3
        className={cn(
          "mb-3 text-xs font-black uppercase tracking-[0.18em]",
          light ? "text-cyan-200" : "text-slate-900",
        )}
      >
        {title}
      </h3>
      <div className={cn("text-sm leading-6", light ? "text-slate-300" : "text-slate-700")}>
        {children}
      </div>
    </section>
  );
}
