import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="theme-transition border-t border-accent/10 bg-surface-base py-7">
      <div className="section-shell flex flex-col gap-3 text-center text-xs text-muted sm:flex-row sm:items-center sm:justify-center sm:gap-6">
        <p>
          © {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
        </p>
        <a href="#inicio" className="rounded font-bold text-accent transition hover:text-accent/80 active:text-accent/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          Volver arriba
        </a>
      </div>
    </footer>
  );
}
