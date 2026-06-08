import { ArrowRight, FileText, Github, Globe2, Mail } from "lucide-react";
import Image from "next/image";

import { profile } from "@/data/profile";
import { SocialMediaIcon } from "./SocialMediaIcon";

const fallbackIconMap = {
  github: Github,
  mail: Mail,
  globe: Globe2,
};

const socialMediaIconMap: Partial<Record<(typeof profile.socials)[number]["icon"], string>> = {
  linkedin: "linkedin",
};

export function HeroSection() {
  const [firstName, lastName] = profile.name.split(" ");

  return (
    <section id="inicio" className="portal-surface">
      <div className="section-shell relative z-10 grid min-h-[430px] items-center gap-8 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-10">
        <div className="max-w-2xl">
          <p className="text-4xl font-black uppercase leading-[1.05] tracking-normal text-white sm:text-5xl">
            ¡Hola!
            <span className="block">
              Soy <span className="cyan-text">{firstName} {lastName}</span>.
            </span>
            <span className="block">{profile.title}.</span>
          </p>
          <p className="mt-5 max-w-xl text-base font-medium leading-7 text-slate-300">
            {profile.tagline}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#proyectos"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 active:bg-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Ver Proyectos <ArrowRight size={17} />
            </a>
            <a
              href="#contacto"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-cyan-300/45 px-5 text-sm font-black text-cyan-200 transition hover:bg-cyan-300/10 active:bg-cyan-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Contáctame
            </a>
            <a
              href="/cv-builder"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-cyan-300/45 px-5 text-sm font-black text-cyan-200 transition hover:bg-cyan-300/10 active:bg-cyan-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Crear CV <FileText size={17} />
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {profile.socials.map((social) => {
              const iconName = socialMediaIconMap[social.icon];
              const FallbackIcon = fallbackIconMap[social.icon as keyof typeof fallbackIconMap];

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={social.label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-cyan-300/25 bg-white/5 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  {iconName ? (
                    <SocialMediaIcon name={iconName} size={20} className="social-media-icon" />
                  ) : FallbackIcon ? (
                    <FallbackIcon className="text-cyan-100" size={19} />
                  ) : null}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[360px]">
          <div className="relative aspect-square rounded-full bg-gradient-to-br from-cyan-300 via-cyan-500 to-slate-950 p-1.5 shadow-[0_28px_90px_rgba(34,211,238,0.28)]">
            <div className="relative size-full overflow-hidden rounded-full border border-cyan-100/35 bg-[#071112]">
              <div className="avatar-glow" />
              <Image
                src={profile.avatar}
                alt={`Retrato profesional de ${profile.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 360px, 78vw"
                className="object-cover object-[50%_8%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
