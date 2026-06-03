"use client";

import { Quote } from "lucide-react";

import { profile } from "@/data/profile";

export function TestimonialsSection() {
  return (
    <section className="bg-[#091315] py-16">
      <div className="section-shell">
        <h2 className="section-title">REFERENCIAS</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {profile.testimonials.map((testimonial) => (
            <article
              key={`${testimonial.name}-${testimonial.company}`}
              className="rounded-lg border border-cyan-300/15 bg-white/5 p-5"
            >
              <Quote className="text-cyan-300" size={28} />
              <p className="mt-4 text-sm leading-6 text-slate-300">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-5 border-t border-cyan-300/10 pt-4">
                <p className="font-black text-white">{testimonial.name}</p>
                <p className="text-xs text-slate-400">
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
