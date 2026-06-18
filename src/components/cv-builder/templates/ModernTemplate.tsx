import {
  CVIdentity,
  EducationPreview,
  ExperiencePreview,
  PreviewBlock,
  SkillList,
  type CVTemplateProps,
} from "./TemplatePrimitives";

export function ModernTemplate({ data, skills }: CVTemplateProps) {
  return (
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
  );
}
