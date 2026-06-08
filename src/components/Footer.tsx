import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-cyan-300/10 bg-surface-base py-7">
      <div className="section-shell flex flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
        </p>
        <a href="#inicio" className="rounded font-bold text-cyan-300 transition hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
          Volver arriba
        </a>
      </div>
    </footer>
  );
}
