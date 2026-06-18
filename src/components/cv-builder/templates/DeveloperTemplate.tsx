import {
  CVIdentity,
  EducationPreview,
  ExperiencePreview,
  PreviewBlock,
  SkillList,
  type CVTemplateProps,
} from "./TemplatePrimitives";

export function DeveloperTemplate({ data, skills }: CVTemplateProps) {
  return (
    <div className="min-h-[880px] bg-[#f8fafc]">
      <header className="bg-[#07130f] px-8 py-7 text-white">
        <p className="font-mono text-xs font-bold text-emerald-400">$ whoami</p>
        <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center">
          <CVIdentity data={data} compact squareAvatar />
          <div className="font-mono text-xs leading-6 text-emerald-100/80">
            <p>{data.email}</p>
            <p>{data.location}</p>
          </div>
        </div>
      </header>
      <div className="grid gap-7 p-8 md:grid-cols-[1fr_220px]">
        <main>
          <PreviewBlock title="// Perfil">
            <p>{data.summary}</p>
          </PreviewBlock>
          <ExperiencePreview items={data.experience} />
          <EducationPreview items={data.education} />
        </main>
        <aside className="border-l border-emerald-200 pl-5">
          <PreviewBlock title="Stack">
            <SkillList skills={skills} />
          </PreviewBlock>
          <PreviewBlock title="Contacto">
            <p>{data.phone}</p>
            <p>{data.email}</p>
          </PreviewBlock>
        </aside>
      </div>
    </div>
  );
}
