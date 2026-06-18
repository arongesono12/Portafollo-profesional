import {
  AvatarImage,
  EducationPreview,
  ExperiencePreview,
  PreviewBlock,
  type CVTemplateProps,
} from "./TemplatePrimitives";

export function ExecutiveTemplate({ data, skills }: CVTemplateProps) {
  return (
    <div className="min-h-[880px] bg-white">
      <header className="grid grid-cols-[1fr_auto] items-center gap-6 border-b-8 border-blue-800 bg-slate-100 px-10 py-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-800">Perfil ejecutivo</p>
          <h2 className="mt-2 text-4xl font-black text-slate-950">{data.fullName}</h2>
          <p className="mt-2 text-lg font-semibold text-slate-600">{data.headline}</p>
        </div>
        <AvatarImage
          avatarUrl={data.avatarUrl}
          avatarCrop={data.avatarCrop}
          fullName={data.fullName}
          size="compact"
          square
        />
      </header>
      <div className="grid gap-8 px-10 py-8 md:grid-cols-[1fr_210px]">
        <main>
          <PreviewBlock title="Resumen ejecutivo">
            <p>{data.summary}</p>
          </PreviewBlock>
          <ExperiencePreview items={data.experience} />
          <EducationPreview items={data.education} />
        </main>
        <aside className="border-l border-slate-200 pl-5">
          <PreviewBlock title="Contacto">
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.location}</p>
          </PreviewBlock>
          <PreviewBlock title="Áreas clave">
            <ul className="grid gap-2">
              {skills.map((skill) => (
                <li key={skill} className="border-b border-slate-100 pb-2 text-sm font-semibold text-slate-700">
                  {skill}
                </li>
              ))}
            </ul>
          </PreviewBlock>
        </aside>
      </div>
    </div>
  );
}
