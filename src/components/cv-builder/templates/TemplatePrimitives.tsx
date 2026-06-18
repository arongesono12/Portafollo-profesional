import { UserRound } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import type { CVAvatarCrop, CVData, CVEducation, CVExperience } from "@/types/cv";

export type CVTemplateProps = {
  data: CVData;
  skills: string[];
};

export function AvatarImage({
  avatarUrl,
  avatarCrop,
  fullName,
  size,
  square = false,
}: {
  avatarUrl: string;
  avatarCrop: CVAvatarCrop;
  fullName: string;
  size: "editor" | "compact" | "preview";
  square?: boolean;
}) {
  const initials = fullName
    .split(" ")
    .map((part) => part.trim().charAt(0))
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const sizeClass = {
    editor: "size-20",
    compact: "size-24",
    preview: "size-28",
  }[size];

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden border-2 border-cyan-300/65 bg-slate-900 text-cyan-100 shadow-lg shadow-cyan-500/10",
        square ? "rounded-md" : "rounded-full",
        sizeClass,
      )}
    >
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt={`Avatar de ${fullName}`}
          fill
          unoptimized
          sizes={size === "editor" ? "80px" : size === "compact" ? "96px" : "112px"}
          className="object-cover"
          style={{
            objectPosition: `${avatarCrop.x}% ${avatarCrop.y}%`,
            transform: `scale(${avatarCrop.zoom})`,
            transformOrigin: `${avatarCrop.x}% ${avatarCrop.y}%`,
          }}
        />
      ) : (
        <div className="flex size-full items-center justify-center bg-cyan-300/10">
          {initials ? (
            <span className="text-xl font-black tracking-normal">{initials}</span>
          ) : (
            <UserRound size={size === "editor" ? 28 : 34} />
          )}
        </div>
      )}
    </div>
  );
}

export function CVIdentity({
  data,
  compact = false,
  hideAvatar = false,
  squareAvatar = false,
}: {
  data: CVData;
  compact?: boolean;
  hideAvatar?: boolean;
  squareAvatar?: boolean;
}) {
  return (
    <div className={cn("flex gap-4", compact ? "flex-col items-start" : "flex-col items-center text-center")}>
      {!hideAvatar ? (
        <AvatarImage
          avatarUrl={data.avatarUrl}
          avatarCrop={data.avatarCrop}
          fullName={data.fullName}
          size={compact ? "compact" : "preview"}
          square={squareAvatar}
        />
      ) : null}
      <div>
        <h2 className={cn("font-black uppercase leading-tight tracking-normal", compact ? "text-2xl" : "text-4xl")}>
          {data.fullName}
        </h2>
        <p className={cn("mt-2 font-bold", compact ? "text-sm text-cyan-200" : "text-base text-slate-700")}>
          {data.headline}
        </p>
      </div>
    </div>
  );
}

export function PreviewBlock({
  title,
  children,
  light = false,
}: {
  title: string;
  children: ReactNode;
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

export function ExperiencePreview({
  items,
  compact = false,
}: {
  items: CVExperience[];
  compact?: boolean;
}) {
  return (
    <PreviewBlock title="Experiencia">
      <div className={cn("grid", compact ? "gap-4" : "gap-5")}>
        {items.map((item) => (
          <div key={item.id}>
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
              <h4 className="text-base font-black text-slate-950">{item.role}</h4>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{item.period}</p>
            </div>
            <p className="mt-1 text-sm font-bold text-slate-700">{item.company}</p>
            <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </PreviewBlock>
  );
}

export function EducationPreview({ items }: { items: CVEducation[] }) {
  return (
    <PreviewBlock title="Formación">
      <div className="grid gap-4">
        {items.map((item) => (
          <div key={item.id}>
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
              <h4 className="text-sm font-black text-slate-950">{item.degree}</h4>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{item.period}</p>
            </div>
            <p className="mt-1 text-sm text-slate-600">{item.institution}</p>
          </div>
        ))}
      </div>
    </PreviewBlock>
  );
}

export function SkillList({ skills, light = false }: { skills: string[]; light?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className={cn(
            "rounded-md border px-2 py-1 text-xs font-bold",
            light
              ? "border-cyan-200/20 bg-white/5 text-cyan-50"
              : "border-slate-200 bg-slate-50 text-slate-700",
          )}
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
