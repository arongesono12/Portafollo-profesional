import {
  CVIdentity,
  EducationPreview,
  ExperiencePreview,
  PreviewBlock,
  type CVTemplateProps,
} from "./TemplatePrimitives";

export function ClassicTemplate({ data, skills }: CVTemplateProps) {
  return (
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
  );
}
