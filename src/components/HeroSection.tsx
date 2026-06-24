"use client";

import { ArrowRight, FileText, Github, Globe2, Mail } from "lucide-react";
import Image from "next/image";
import heroAvatar from "../../public/profile-avatar.png";

import { profile } from "@/data/profile";
import { useTheme } from "./ThemeProvider";
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
  const { theme } = useTheme();

  return (
    <section id="inicio" className="portal-surface">
      <div className="section-shell relative z-10 grid min-h-[430px] items-center gap-8 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-10">
        <div className="max-w-2xl">
          <p className="font-display text-4xl font-black uppercase leading-[1.05] tracking-normal text-primary sm:text-5xl">
            <span className="hero-text-in" style={{ animationDelay: "0.2s" }}>
              ¡Hola!
            </span>
            <span className="hero-text-in-right block" style={{ animationDelay: "0.5s" }}>
              Soy <span className="text-accent">ARON ESONO</span>.
            </span>
            <span className="hero-text-in block" style={{ animationDelay: "0.7s" }}>
              {profile.title}.
            </span>
          </p>
          <p
            className="hero-slide-up mt-5 max-w-xl text-base font-medium leading-7 text-secondary"
            style={{ animationDelay: "1.0s" }}
          >
            {profile.tagline}
          </p>

          <div className="hero-text-in-right mt-7 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "1.4s" }}>
            <a
              href="#proyectos"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-accent px-5 text-sm font-black text-inverse shadow-lg shadow-accent/20 transition hover:bg-accent/80 active:bg-accent/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Ver Proyectos <ArrowRight size={17} />
            </a>
            <a
              href="#contacto"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-accent/45 px-5 text-sm font-black text-accent/90 transition hover:bg-accent/10 active:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Contáctame
            </a>
            <a
              href="/cv-builder"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-accent/45 px-5 text-sm font-black text-accent/90 transition hover:bg-accent/10 active:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Crear CV <FileText size={17} />
            </a>
          </div>

          <div className="hero-text-in mt-7 flex flex-wrap gap-3" style={{ animationDelay: "1.9s" }}>
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
                  className="inline-flex size-10 items-center justify-center rounded-full border border-accent/25 bg-surface-overlay transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10 active:scale-95 active:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {iconName ? (
                    <SocialMediaIcon name={iconName} size={20} className="social-media-icon" />
                  ) : FallbackIcon ? (
                    <FallbackIcon className="text-accent/80" size={19} />
                  ) : null}
                </a>
              );
            })}
          </div>
        </div>

        <div className="hero-avatar-in mx-auto w-full max-w-[360px]" style={{ animationDelay: "0.3s" }}>
          <div
            className={`avatar-ring relative aspect-square ${
              theme !== "light"
                ? "drop-shadow-[0_28px_45px_rgb(var(--accent-rgb)/0.22)]"
                : ""
            }`}
          >
            <Image
              src={heroAvatar}
              alt={`Retrato profesional de ${profile.name}`}
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 360px, 78vw"
              className="relative z-10 scale-[1.18] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
