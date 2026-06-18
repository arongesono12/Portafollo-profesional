import {
  CVIdentity,
  EducationPreview,
  ExperiencePreview,
  PreviewBlock,
  SkillList,
  type CVTemplateProps,
} from "./TemplatePrimitives";

export function CreativeTemplate({ data, skills }: CVTemplateProps) {
  return (
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
  );
}
