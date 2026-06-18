"use client";

import { useEffect, useRef } from "react";

import { profile } from "@/data/profile";
import type { CVAvatarCrop, CVData } from "@/types/cv";
import { ModernTemplate } from "./templates/ModernTemplate";

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
      .flatMap((group) => group.skills.map((skill) => skill.name))
      .join(", "),
    experience: profile.experience.map((experience) => ({
      id: `exp-${experience.company.replace(/\s+/g, "-")}`,
      role: experience.role,
      company: experience.company,
      period: experience.period,
      description:
        experience.description +
        (experience.achievements.length
          ? "\n\nLogros:\n• " + experience.achievements.join("\n• ")
          : ""),
    })),
    education: profile.education.map((education) => ({
      id: `edu-${education.institution.replace(/\s+/g, "-")}`,
      degree: education.degree,
      institution: education.institution,
      period: education.period,
    })),
  };
}

export function MiCVPdf({ onClose }: { onClose: () => void }) {
  const data = buildMyCVData();
  const ref = useRef<HTMLDivElement>(null);
  const skills = data.skills
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);

  useEffect(() => {
    const timer = window.setTimeout(() => window.print(), 300);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleAfterPrint = () => onClose();
    window.addEventListener("afterprint", handleAfterPrint);
    return () => window.removeEventListener("afterprint", handleAfterPrint);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white print:relative print:inset-auto print:z-auto"
    >
      <article className="cv-document cv-template-modern mx-auto min-h-[880px] w-full max-w-[780px] overflow-hidden bg-white text-slate-950 shadow-2xl shadow-black/30">
        <ModernTemplate data={data} skills={skills} />
      </article>
    </div>
  );
}
