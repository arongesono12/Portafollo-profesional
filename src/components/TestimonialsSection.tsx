"use client";

import { Quote } from "lucide-react";

import { profile } from "@/data/profile";
import { useInView } from "@/hooks/useInView";

export function TestimonialsSection() {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section ref={ref} className={`bg-surface-raised py-16${inView ? " section-in-zoom" : " opacity-0"}`}>
      <div className="section-shell">
        <h2 className="section-title">REFERENCIAS</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {profile.testimonials.map((testimonial) => (
            <article
              key={`${testimonial.name}-${testimonial.company}`}
              className="card-glow hover-glass rounded-lg border border-accent/15 bg-surface-overlay p-5"
            >
              <Quote className="text-accent" size={28} />
              <p className="mt-4 text-sm leading-6 text-secondary">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-5 border-t border-accent/10 pt-4">
                <p className="font-black text-primary">{testimonial.name}</p>
                <p className="text-xs text-muted">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
