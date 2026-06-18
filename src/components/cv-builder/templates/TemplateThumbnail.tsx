import { cn } from "@/lib/utils";
import type { CVTemplateId } from "@/types/cv";

export function TemplateThumbnail({
  templateId,
  accent,
}: {
  templateId: CVTemplateId;
  accent: string;
}) {
  return (
    <span className="relative block aspect-[210/120] w-full overflow-hidden rounded-md border border-white/10 bg-white">
      {templateId === "modern" ? (
        <span className="grid size-full grid-cols-[34%_1fr]">
          <span className="bg-slate-950 p-2">
            <Dot accent={accent} />
            <Lines light />
          </span>
          <span className="p-2"><Lines /></span>
        </span>
      ) : null}
      {templateId === "classic" ? (
        <span className="block size-full p-3">
          <span className="mx-auto block h-2 w-2/3 bg-slate-800" />
          <span className="mx-auto mt-2 block h-px w-full bg-slate-400" />
          <Lines />
        </span>
      ) : null}
      {templateId === "creative" ? (
        <span className="block size-full bg-slate-50 p-2">
          <span className="block h-8 rounded-sm" style={{ backgroundColor: accent }} />
          <span className="mt-2 grid grid-cols-[1fr_32%] gap-2">
            <Lines />
            <span className="h-12 border border-slate-200 bg-white" />
          </span>
        </span>
      ) : null}
      {templateId === "minimal" ? (
        <span className="block size-full p-3">
          <span className="block h-2 w-1/2 bg-slate-800" />
          <span className="mt-1 block h-1 w-1/3 bg-slate-400" />
          <span className="mt-2 block h-px bg-slate-300" />
          <Lines />
        </span>
      ) : null}
      {templateId === "developer" ? (
        <span className="block size-full bg-slate-50">
          <span className="block h-10 bg-[#07130f] p-2">
            <span className="block h-1 w-1/3 bg-emerald-400" />
            <span className="mt-1 block h-1 w-1/2 bg-emerald-100/50" />
          </span>
          <span className="grid grid-cols-[1fr_30%] gap-2 p-2"><Lines /><Lines /></span>
        </span>
      ) : null}
      {templateId === "executive" ? (
        <span className="block size-full">
          <span className="flex h-10 items-center justify-between bg-slate-100 px-3">
            <span className="block h-2 w-1/2 bg-slate-800" />
            <Dot accent={accent} square />
          </span>
          <span className="block h-1" style={{ backgroundColor: accent }} />
          <span className="p-2"><Lines /></span>
        </span>
      ) : null}
    </span>
  );
}

function Dot({ accent, square = false }: { accent: string; square?: boolean }) {
  return (
    <span
      className={cn("mb-2 block size-4", square ? "rounded-sm" : "rounded-full")}
      style={{ backgroundColor: accent }}
    />
  );
}

function Lines({ light = false }: { light?: boolean }) {
  return (
    <span className="mt-2 grid gap-1">
      <span className={cn("block h-1 w-full", light ? "bg-white/55" : "bg-slate-300")} />
      <span className={cn("block h-1 w-4/5", light ? "bg-white/35" : "bg-slate-200")} />
      <span className={cn("block h-1 w-2/3", light ? "bg-white/25" : "bg-slate-200")} />
    </span>
  );
}
