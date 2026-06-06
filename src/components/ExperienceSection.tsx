import { Building2, MapPin } from "lucide-react";

import { profile } from "@/data/profile";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="bg-[#081112] py-12">
      <div className="section-shell">
        <h2 className="section-title">EXPERIENCIA PROFESIONAL</h2>

        <div className="mx-auto mt-8 max-w-3xl">
          {profile.experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="relative grid gap-5 border-l border-cyan-300/40 pb-10 pl-8 last:pb-0 md:grid-cols-[150px_1fr]"
            >
              <span className="absolute -left-[9px] top-1 size-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40" />
              <div className="flex items-start gap-3">
                <div className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-white text-slate-950">
                  <Building2 size={25} />
                </div>
                <div className="md:hidden">
                  <p className="font-black text-white">{item.company}</p>
                  <p className="text-xs font-bold text-cyan-300">{item.period}</p>
                </div>
              </div>

              <div>
                <p className="hidden text-sm font-black text-white md:block">{item.company}</p>
                <h3 className="mt-1 text-lg font-black text-white">{item.role}</h3>
                <p className="mt-1 text-xs font-semibold text-cyan-300">{item.period}</p>
                <p className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                  <MapPin size={14} /> {item.location}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                <ul className="mt-3 space-y-1">
                  {item.achievements.slice(0, 2).map((achievement) => (
                    <li key={achievement} className="text-xs leading-5 text-slate-400">
                      - {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
