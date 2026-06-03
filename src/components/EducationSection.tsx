"use client";

import { GraduationCap, MapPin } from "lucide-react";

import { profile } from "@/data/profile";

export function EducationSection() {
  return (
    <section id="formacion" className="bg-[#081112] py-16">
      <div className="section-shell">
        <h2 className="section-title">FORMACIÓN</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {profile.education.map((item) => (
            <article
              key={`${item.institution}-${item.degree}`}
              className="rounded-lg border border-cyan-300/15 bg-white/5 p-5"
            >
              <div className="mb-4 inline-flex size-11 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-300">
                <GraduationCap size={22} />
              </div>
              <p className="text-xs font-black text-cyan-300">{item.period}</p>
              <h3 className="mt-3 text-lg font-black text-white">{item.degree}</h3>
              <p className="mt-1 text-sm font-semibold text-slate-300">{item.institution}</p>
              <p className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                <MapPin size={15} /> {item.location}
              </p>
              <p className="mt-4 text-xs leading-5 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
