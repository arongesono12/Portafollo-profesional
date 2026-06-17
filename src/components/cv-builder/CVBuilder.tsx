"use client";

import {
  ArrowLeft,
  Download,
  ImagePlus,
  LayoutTemplate,
  Plus,
  RotateCcw,
  Save,
  Trash2,
  UserRound,
  X,
} from "lucide-react";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { initialCVData, cvTemplates } from "@/data/cv";
import { cn } from "@/lib/utils";
import type {
  CVAvatarCrop,
  CVData,
  CVEducation,
  CVExperience,
  CVTemplateId,
} from "@/types/cv";

const storageKey = "aron-portfolio-cv-builder";

type StoredCV = {
  templateId: CVTemplateId;
  data: CVData;
};

function normalizeCVData(data: Partial<CVData> | undefined): CVData {
  return {
    ...initialCVData,
    ...data,
    avatarCrop: {
      ...initialCVData.avatarCrop,
      ...data?.avatarCrop,
    },
    experience: data?.experience?.length ? data.experience : initialCVData.experience,
    education: data?.education?.length ? data.education : initialCVData.education,
  };
}

function getStoredCV(): StoredCV {
  if (typeof window === "undefined") {
    return { templateId: "modern", data: initialCVData };
  }

  const stored = window.localStorage.getItem(storageKey);
  if (!stored) {
    return { templateId: "modern", data: initialCVData };
  }

  try {
    const parsed = JSON.parse(stored) as Partial<StoredCV>;
    return {
      templateId: parsed.templateId ?? "modern",
      data: normalizeCVData(parsed.data),
    };
  } catch {
    window.localStorage.removeItem(storageKey);
    return { templateId: "modern", data: initialCVData };
  }
}

export function CVBuilder() {
  const [builder, setBuilder] = useState<StoredCV>(getStoredCV);
  const { data, templateId } = builder;

  const selectedTemplate = useMemo(
    () => cvTemplates.find((template) => template.id === templateId) ?? cvTemplates[0],
    [templateId],
  );

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify({ templateId, data }));
  }, [data, templateId]);

  function updateField(field: keyof CVData, value: string) {
    setBuilder((current) => ({ ...current, data: { ...current.data, [field]: value } }));
  }

  function updateExperience(id: string, field: keyof Omit<CVExperience, "id">, value: string) {
    setBuilder((current) => ({
      ...current,
      data: {
        ...current.data,
        experience: current.data.experience.map((item) =>
          item.id === id ? { ...item, [field]: value } : item,
        ),
      },
    }));
  }

  function updateEducation(id: string, field: keyof Omit<CVEducation, "id">, value: string) {
    setBuilder((current) => ({
      ...current,
      data: {
        ...current.data,
        education: current.data.education.map((item) =>
          item.id === id ? { ...item, [field]: value } : item,
        ),
      },
    }));
  }

  function addExperience() {
    setBuilder((current) => ({
      ...current,
      data: {
        ...current.data,
        experience: [
          ...current.data.experience,
          {
            id: `experience-${Date.now()}`,
            role: "Nuevo puesto",
            company: "Empresa",
            period: "2024 - Actualidad",
            description: "Describe tus responsabilidades, resultados y tecnologías principales.",
          },
        ],
      },
    }));
  }

  function addEducation() {
    setBuilder((current) => ({
      ...current,
      data: {
        ...current.data,
        education: [
          ...current.data.education,
          {
            id: `education-${Date.now()}`,
            degree: "Nueva formación",
            institution: "Institución",
            period: "2020 - 2024",
          },
        ],
      },
    }));
  }

  function removeExperience(id: string) {
    setBuilder((current) => ({
      ...current,
      data: {
        ...current.data,
        experience: current.data.experience.filter((item) => item.id !== id),
      },
    }));
  }

  function removeEducation(id: string) {
    setBuilder((current) => ({
      ...current,
      data: {
        ...current.data,
        education: current.data.education.filter((item) => item.id !== id),
      },
    }));
  }

  function resetBuilder() {
    setBuilder({ templateId: "modern", data: initialCVData });
  }

  function updateAvatar(value: string) {
    updateField("avatarUrl", value);
  }

  function updateAvatarCrop(field: keyof CVAvatarCrop, value: number) {
    setBuilder((current) => ({
      ...current,
      data: {
        ...current.data,
        avatarCrop: {
          ...current.data.avatarCrop,
          [field]: value,
        },
      },
    }));
  }

  function handleAvatarUpload(file: File | undefined) {
    if (!file || !file.type.startsWith("image/")) {
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      if (typeof reader.result === "string") {
        updateAvatar(reader.result);
        setBuilder((current) => ({
          ...current,
          data: {
            ...current.data,
            avatarCrop: initialCVData.avatarCrop,
          },
        }));
      }
    });
    reader.readAsDataURL(file);
  }

  return (
    <main className="cv-builder-shell min-h-screen bg-surface-base text-primary">
      <header className="cv-builder-toolbar border-b border-accent/10 bg-surface-base/95">
        <div className="mx-auto flex min-h-16 w-full min-w-0 max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <Link
              href="/"
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-surface-overlay text-secondary transition hover:border-accent hover:text-accent"
              aria-label="Volver al portafolio"
            >
              <ArrowLeft size={18} />
            </Link>
            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                Aron Esono
              </p>
              <h1 className="text-xl font-black tracking-normal text-primary sm:text-2xl">
                Crear CV
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex h-9 items-center gap-2 rounded-lg border border-accent/15 bg-surface-overlay px-3 text-xs font-bold text-muted">
              <Save size={14} />
              Guardado local
            </span>
            <button
              type="button"
              onClick={resetBuilder}
              className="inline-flex h-9 items-center gap-2 rounded-lg border border-accent/30 px-3 text-xs font-black text-secondary transition hover:border-accent hover:text-accent"
            >
              <RotateCcw size={14} /> Reiniciar
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex h-9 items-center gap-2 rounded-lg bg-accent px-4 text-xs font-black text-inverse transition hover:bg-accent-hover"
            >
              <Download size={14} /> Descargar PDF
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[420px_1fr] lg:px-6">
        <aside className="cv-editor-panel grid gap-5 self-start rounded-lg border border-accent/15 bg-surface-raised p-4 shadow-2xl shadow-black/20">
          <section>
            <div className="mb-3 flex items-center gap-2">
              <LayoutTemplate size={18} className="text-accent" />
              <h2 className="text-sm font-black uppercase tracking-[0.14em] text-secondary">
                Plantillas
              </h2>
            </div>
            <div className="grid gap-3">
              {cvTemplates.map((template) => (
                <button
                  key={template.id}
                  type="button"
                  onClick={() => setBuilder((current) => ({ ...current, templateId: template.id }))}
                  className={cn(
                    "rounded-lg border p-3 text-left transition",
                    templateId === template.id
                      ? "border-accent bg-accent/10"
                      : "border-accent/15 bg-surface-overlay hover:border-accent/50",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className="inline-flex size-9 rounded-md border border-white/15"
                      style={{ backgroundColor: template.accent }}
                    />
                    <span>
                      <span className="block text-sm font-black text-primary">{template.name}</span>
                      <span className="mt-1 block text-xs leading-5 text-muted">
                        {template.description}
                      </span>
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="grid gap-4">
            <h2 className="text-sm font-black uppercase tracking-[0.14em] text-secondary">
              Datos personales
            </h2>
            <AvatarField
              avatarUrl={data.avatarUrl}
              avatarCrop={data.avatarCrop}
              fullName={data.fullName}
              onUpload={handleAvatarUpload}
              onRemove={() => updateAvatar("")}
              onCropChange={updateAvatarCrop}
            />
            <Field label="Nombre completo" value={data.fullName} onChange={(value) => updateField("fullName", value)} />
            <Field label="Titular profesional" value={data.headline} onChange={(value) => updateField("headline", value)} />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Field label="Email" type="email" value={data.email} onChange={(value) => updateField("email", value)} />
              <Field label="Teléfono" value={data.phone} onChange={(value) => updateField("phone", value)} />
            </div>
            <Field label="Ubicación" value={data.location} onChange={(value) => updateField("location", value)} />
            <TextArea label="Resumen" value={data.summary} onChange={(value) => updateField("summary", value)} />
            <TextArea label="Habilidades separadas por coma" rows={3} value={data.skills} onChange={(value) => updateField("skills", value)} />
          </section>

          <EditableList
            title="Experiencia"
            onAdd={addExperience}
            items={data.experience.map((item) => (
              <div key={item.id} className="rounded-lg border border-accent/10 bg-surface-overlay p-3">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <p className="text-xs font-black text-accent">{item.role}</p>
                  <IconButton label="Eliminar experiencia" onClick={() => removeExperience(item.id)} />
                </div>
                <div className="grid gap-3">
                  <Field label="Puesto" value={item.role} onChange={(value) => updateExperience(item.id, "role", value)} />
                  <Field label="Empresa" value={item.company} onChange={(value) => updateExperience(item.id, "company", value)} />
                  <Field label="Periodo" value={item.period} onChange={(value) => updateExperience(item.id, "period", value)} />
                  <TextArea label="Descripción" rows={3} value={item.description} onChange={(value) => updateExperience(item.id, "description", value)} />
                </div>
              </div>
            ))}
          />

          <EditableList
            title="Formación"
            onAdd={addEducation}
            items={data.education.map((item) => (
              <div key={item.id} className="rounded-lg border border-accent/10 bg-surface-overlay p-3">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <p className="text-xs font-black text-accent">{item.degree}</p>
                  <IconButton label="Eliminar formación" onClick={() => removeEducation(item.id)} />
                </div>
                <div className="grid gap-3">
                  <Field label="Título" value={item.degree} onChange={(value) => updateEducation(item.id, "degree", value)} />
                  <Field label="Institución" value={item.institution} onChange={(value) => updateEducation(item.id, "institution", value)} />
                  <Field label="Periodo" value={item.period} onChange={(value) => updateEducation(item.id, "period", value)} />
                </div>
              </div>
            ))}
          />
        </aside>

        <section className="cv-preview-area min-w-0 rounded-lg border border-accent/15 bg-surface-raised p-4 shadow-2xl shadow-black/20 lg:p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                Vista previa
              </p>
              <h2 className="mt-1 text-lg font-black text-primary">{selectedTemplate.name}</h2>
            </div>
            <span className="hidden rounded-lg border border-accent/15 px-3 py-2 text-xs font-bold text-muted sm:inline-flex">
              A4 adaptable
            </span>
          </div>
          <CVPreview data={data} templateId={templateId} />
        </section>
      </div>
    </main>
  );
}

function AvatarField({
  avatarUrl,
  avatarCrop,
  fullName,
  onUpload,
  onRemove,
  onCropChange,
}: {
  avatarUrl: string;
  avatarCrop: CVAvatarCrop;
  fullName: string;
  onUpload: (file: File | undefined) => void;
  onRemove: () => void;
  onCropChange: (field: keyof CVAvatarCrop, value: number) => void;
}) {
  return (
    <div className="rounded-lg border border-accent/15 bg-accent/5 p-4">
      <div className="flex items-center gap-4">
        <AvatarImage avatarUrl={avatarUrl} avatarCrop={avatarCrop} fullName={fullName} size="editor" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-black text-primary">Imagen de avatar</p>
          <p className="mt-1 text-xs leading-5 text-muted">
            Esta foto aparecerá antes del nombre en el CV.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <label className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent px-3 text-xs font-black text-inverse transition hover:bg-accent-hover">
              <ImagePlus size={15} />
              Subir imagen
              <input
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={(event) => onUpload(event.target.files?.[0])}
              />
            </label>
            {avatarUrl ? (
              <button
                type="button"
                onClick={onRemove}
                className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-accent/20 px-3 text-xs font-black text-muted transition hover:border-accent hover:bg-accent/10"
              >
                <X size={14} />
                Quitar
              </button>
            ) : null}
          </div>
        </div>
      </div>
      {avatarUrl ? (
        <div className="mt-4 grid gap-3 border-t border-accent/10 pt-4">
          <RangeField
            label="Mover horizontal"
            value={avatarCrop.x}
            min={0}
            max={100}
            step={1}
            onChange={(value) => onCropChange("x", value)}
          />
          <RangeField
            label="Mover vertical"
            value={avatarCrop.y}
            min={0}
            max={100}
            step={1}
            onChange={(value) => onCropChange("y", value)}
          />
          <RangeField
            label="Zoom"
            value={avatarCrop.zoom}
            min={1}
            max={2}
            step={0.05}
            onChange={(value) => onCropChange("zoom", value)}
          />
        </div>
      ) : null}
    </div>
  );
}

function RangeField({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <span className="flex items-center justify-between gap-3 text-xs font-bold text-muted">
        {label}
        <span className="text-accent">
          {label === "Zoom" ? `${Math.round(value * 100)}%` : `${Math.round(value)}%`}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-2 h-2 w-full cursor-pointer accent-accent"
      />
    </label>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold text-muted">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-10 w-full rounded-lg border border-accent/15 bg-surface-base px-3 text-sm text-primary outline-none transition placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/10"
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold text-muted">{label}</span>
      <textarea
        value={value}
        rows={rows}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full resize-y rounded-lg border border-accent/15 bg-surface-base px-3 py-3 text-sm leading-6 text-primary outline-none transition placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/10"
      />
    </label>
  );
}

function EditableList({
  title,
  items,
  onAdd,
}: {
  title: string;
  items: ReactNode[];
  onAdd: () => void;
}) {
  return (
    <section className="grid gap-3">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-black uppercase tracking-[0.14em] text-secondary">{title}</h2>
        <button
          type="button"
          onClick={onAdd}
          className="inline-flex size-9 items-center justify-center rounded-lg border border-accent/20 text-accent transition hover:border-accent hover:bg-accent/10"
          aria-label={`Añadir ${title.toLowerCase()}`}
        >
          <Plus size={16} />
        </button>
      </div>
      {items}
    </section>
  );
}

function IconButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-red-400/30 text-red-400 transition hover:border-red-400 hover:bg-red-400/10"
      aria-label={label}
    >
      <Trash2 size={14} />
    </button>
  );
}

function CVPreview({ data, templateId }: { data: CVData; templateId: CVTemplateId }) {
  const skills = data.skills
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);

  return (
    <article
      className={cn(
        "cv-document mx-auto min-h-[880px] w-full max-w-[780px] overflow-hidden bg-white text-slate-950 shadow-2xl shadow-black/30",
        templateId === "modern" && "cv-template-modern",
        templateId === "classic" && "cv-template-classic",
        templateId === "creative" && "cv-template-creative",
      )}
    >
      {templateId === "modern" ? (
        <div className="grid min-h-[880px] md:grid-cols-[240px_1fr]">
          <aside className="bg-slate-950 p-7 text-white">
            <CVIdentity data={data} compact />
            <PreviewBlock title="Contacto" light>
              <p>{data.email}</p>
              <p>{data.phone}</p>
              <p>{data.location}</p>
            </PreviewBlock>
            <PreviewBlock title="Habilidades" light>
              <SkillList skills={skills} light />
            </PreviewBlock>
          </aside>
          <div className="p-8">
            <PreviewBlock title="Perfil">
              <p>{data.summary}</p>
            </PreviewBlock>
            <ExperiencePreview items={data.experience} />
            <EducationPreview items={data.education} />
          </div>
        </div>
      ) : null}

      {templateId === "classic" ? (
        <div className="min-h-[880px] p-10">
          <header className="border-b-2 border-slate-900 pb-6 text-center">
            <CVIdentity data={data} />
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
              {data.email} · {data.phone} · {data.location}
            </p>
          </header>
          <div className="mt-8 grid gap-7">
            <PreviewBlock title="Perfil">
              <p>{data.summary}</p>
            </PreviewBlock>
            <ExperiencePreview items={data.experience} />
            <EducationPreview items={data.education} />
            <PreviewBlock title="Habilidades">
              <p>{skills.join(" · ")}</p>
            </PreviewBlock>
          </div>
        </div>
      ) : null}

      {templateId === "creative" ? (
        <div className="min-h-[880px] bg-[#f8fafc] p-8">
          <header className="rounded-lg bg-sky-300 p-7 text-slate-950">
            <CVIdentity data={data} />
            <p className="mt-4 max-w-2xl text-sm font-semibold leading-6">{data.summary}</p>
          </header>
          <div className="mt-7 grid gap-7 md:grid-cols-[1fr_260px]">
            <div>
              <ExperiencePreview items={data.experience} />
              <EducationPreview items={data.education} />
            </div>
            <aside className="rounded-lg border border-slate-200 bg-white p-5">
              <PreviewBlock title="Contacto">
                <p>{data.email}</p>
                <p>{data.phone}</p>
                <p>{data.location}</p>
              </PreviewBlock>
              <PreviewBlock title="Habilidades">
                <SkillList skills={skills} />
              </PreviewBlock>
            </aside>
          </div>
        </div>
      ) : null}
    </article>
  );
}

function CVIdentity({ data, compact = false }: { data: CVData; compact?: boolean }) {
  return (
    <div className={cn("flex gap-4", compact ? "flex-col items-start" : "flex-col items-center text-center")}>
      <AvatarImage
        avatarUrl={data.avatarUrl}
        avatarCrop={data.avatarCrop}
        fullName={data.fullName}
        size={compact ? "compact" : "preview"}
      />
      <h2 className={cn("font-black uppercase leading-tight tracking-normal", compact ? "text-2xl" : "text-4xl")}>
        {data.fullName}
      </h2>
      <p className={cn("mt-2 font-bold", compact ? "text-sm text-cyan-200" : "text-base text-slate-700")}>
        {data.headline}
      </p>
    </div>
  );
}

function AvatarImage({
  avatarUrl,
  avatarCrop,
  fullName,
  size,
}: {
  avatarUrl: string;
  avatarCrop: CVAvatarCrop;
  fullName: string;
  size: "editor" | "compact" | "preview";
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
        "relative shrink-0 overflow-hidden rounded-full border-2 border-cyan-300/65 bg-slate-900 text-cyan-100 shadow-lg shadow-cyan-500/10",
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

function PreviewBlock({
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

function ExperiencePreview({ items }: { items: CVExperience[] }) {
  return (
    <PreviewBlock title="Experiencia">
      <div className="grid gap-5">
        {items.map((item) => (
          <div key={item.id}>
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
              <h4 className="text-base font-black text-slate-950">{item.role}</h4>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                {item.period}
              </p>
            </div>
            <p className="mt-1 text-sm font-bold text-slate-700">{item.company}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </PreviewBlock>
  );
}

function EducationPreview({ items }: { items: CVEducation[] }) {
  return (
    <PreviewBlock title="Formación">
      <div className="grid gap-4">
        {items.map((item) => (
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
  );
}

function SkillList({ skills, light = false }: { skills: string[]; light?: boolean }) {
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
