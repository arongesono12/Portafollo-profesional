"use client";

import { Download, Menu, Sun, Moon, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";
import { MiCVPdf } from "./cv-builder/MiCVPdf";

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
  const [showMyCV, setShowMyCV] = useState(false);
  const { theme, toggle } = useTheme();

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
        "theme-transition z-50 border-b",
        scrolled
          ? "fixed inset-x-0 top-0 border-accent/15 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "border-accent/10 bg-surface-base/90 backdrop-blur-md",
      )}
    >
      <nav className="section-shell flex h-16 items-center">
        <a href="#inicio" className="flex shrink-0 items-center gap-3 rounded text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          <Image
            src={theme === "light" ? "/logo/logo.png" : "/logo/logo%20blanco.png"}
            alt="Logo de ARON ESONO"
            width={42}
            height={42}
            priority
            suppressHydrationWarning
            className="h-10 w-auto object-contain"
          />
          <span className="text-sm font-black uppercase leading-tight tracking-normal text-primary">
            ARON ESONO
            <span className="block text-xs font-bold text-accent/70">
              Tech Full Stack
            </span>
          </span>
        </a>

        <div className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-bold text-secondary transition hover:bg-accent/10 hover:text-accent active:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            suppressHydrationWarning
            aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
            className="hidden lg:inline-flex size-9 items-center justify-center rounded-full border border-accent/30 text-secondary transition hover:bg-accent/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            type="button"
            onClick={() => setShowMyCV(true)}
            className="hidden lg:inline-flex h-9 items-center gap-2 rounded-full border border-accent/70 px-4 text-sm font-black text-accent transition hover:bg-accent hover:text-inverse active:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Download size={14} /> Crear CV
          </button>
          <button
            type="button"
            onClick={toggle}
            suppressHydrationWarning
            aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
            className="inline-flex size-10 items-center justify-center rounded-full border border-accent/25 bg-surface-overlay text-accent/80 transition hover:bg-accent/10 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-accent/25 bg-surface-overlay text-accent/80 transition hover:bg-accent/10 active:bg-accent/20 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-accent/10 bg-surface-base lg:hidden">
          <div className="section-shell grid py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-secondary hover:bg-accent/10 active:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
      {scrolled ? <div aria-hidden="true" className="h-16" /> : null}
      {showMyCV ? <MiCVPdf onClose={() => setShowMyCV(false)} /> : null}
    </>
  );
}
