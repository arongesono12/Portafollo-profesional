"use client";

import { Download, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header
      className={cn(
        "z-50 border-b transition-all duration-300",
        scrolled
          ? "fixed inset-x-0 top-0 border-cyan-300/15 bg-surface-base/95 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "border-cyan-300/10 bg-surface-base/90 backdrop-blur-md",
      )}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 rounded text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
          <Image
            src="/logo/logo%20blanco.png"
            alt="Logo de ARON ESONO"
            width={42}
            height={42}
            priority
            className="h-10 w-auto object-contain"
          />
          <span className="text-sm font-black uppercase leading-tight tracking-normal text-white">
            ARON ESONO
            <span className="block text-xs font-bold text-cyan-100/80">
              Tech Full Stack
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-bold text-slate-200 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.cvUrl}
            className="ml-2 inline-flex h-9 items-center gap-2 rounded-full border border-cyan-300/70 px-4 text-sm font-black text-cyan-300 transition hover:bg-cyan-300 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Download size={14} /> Crear CV
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-cyan-300/25 bg-white/5 text-cyan-100 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-cyan-300/10 bg-surface-base lg:hidden">
          <div className="section-shell grid py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-slate-200 hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
      {scrolled ? <div aria-hidden="true" className="h-16" /> : null}
    </>
  );
}
