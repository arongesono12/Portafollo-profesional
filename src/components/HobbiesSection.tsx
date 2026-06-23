"use client";

import {
  BookOpen,
  Dumbbell,
  Gamepad2,
  Music2,
  Trophy,
  type LucideIcon,
} from "lucide-react";

import { profile } from "@/data/profile";
import { useInView } from "@/hooks/useInView";
import type { Hobby } from "@/types/profile";

const hobbyIcons: Record<Hobby["icon"], LucideIcon> = {
  book: BookOpen,
  music: Music2,
  football: Trophy,
  games: Gamepad2,
  fitness: Dumbbell,
};

export function HobbiesSection() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="hobbies"
      className={`section-image-background section-bg-hobbies py-12${inView ? " section-in-up" : " opacity-0"}`}
    >
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">
            Fuera del código
          </p>
          <h2 className="section-title mt-3">HOBBIES</h2>
        </div>

        <div className="mx-auto mt-7 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {profile.hobbies.map((hobby) => {
            const Icon = hobbyIcons[hobby.icon];

            return (
              <article
                key={hobby.name}
                className="hover-glass flex min-h-28 flex-col items-center justify-center rounded-lg border border-accent/15 bg-surface-card/80 p-4 text-center"
              >
                <span className="flex size-10 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-accent">
                  <Icon size={20} />
                </span>
                <h3 className="mt-3 text-sm font-black text-primary">{hobby.name}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
