import Image from "next/image";

const skills = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Node.js", icon: "/icons/node-js.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "AWS", icon: "/icons/AWS.svg" },
  { name: "Cloudflare", icon: "/icons/Cloudflare.png" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "Next.js", icon: "/icons/nextjs-light.svg" },
  { name: "Google Cloud", icon: "/icons/google-cloud.svg" },
  { name: "PostgreSQL", icon: "/icons/postgre.svg" },
  { name: "MongoDB", icon: "/icons/MongoDB.svg" },
  { name: "Supabase", icon: "/icons/supabase.svg" },
  { name: "Git", icon: "/icons/Git.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "Photoshop", icon: "/icons/photoshop.svg" },
  { name: "Illustrator", icon: "/icons/illustrator.svg" },
  { name: "Web", icon: "/icons/web.svg" },
];

export function SkillsSection() {
  return (
    <section id="habilidades" className="bg-surface-raised py-11">
      <div className="section-shell">
        <h2 className="section-title">HABILIDADES</h2>

        <div className="mx-auto mt-6 grid max-w-5xl grid-cols-3 gap-x-6 gap-y-5 sm:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="relative flex size-12 items-center justify-center">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  aria-hidden="true"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <p className="text-xs font-semibold text-slate-200">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
