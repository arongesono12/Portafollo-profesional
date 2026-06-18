import {
  EducationPreview,
  ExperiencePreview,
  PreviewBlock,
  type CVTemplateProps,
} from "./TemplatePrimitives";

export function MinimalTemplate({ data, skills }: CVTemplateProps) {
  return (
    <div className="min-h-[880px] px-12 py-10">
      <header className="border-b border-slate-300 pb-5">
        <h2 className="text-4xl font-bold leading-tight text-slate-950">{data.fullName}</h2>
        <p className="mt-2 text-base font-medium text-slate-600">{data.headline}</p>
        <p className="mt-3 text-xs text-slate-500">
          {data.email} · {data.phone} · {data.location}
        </p>
      </header>
      <div className="mt-7">
        <PreviewBlock title="Perfil profesional">
          <p>{data.summary}</p>
        </PreviewBlock>
        <ExperiencePreview items={data.experience} compact />
        <EducationPreview items={data.education} />
        <PreviewBlock title="Competencias">
          <p className="text-sm text-slate-600">{skills.join(" · ")}</p>
        </PreviewBlock>
      </div>
    </div>
  );
}
