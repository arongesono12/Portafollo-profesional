import type { ComponentType } from "react";

import { cn } from "@/lib/utils";
import type { CVData, CVTemplateId } from "@/types/cv";

import { ClassicTemplate } from "./ClassicTemplate";
import { CreativeTemplate } from "./CreativeTemplate";
import { DeveloperTemplate } from "./DeveloperTemplate";
import { ExecutiveTemplate } from "./ExecutiveTemplate";
import { MinimalTemplate } from "./MinimalTemplate";
import { ModernTemplate } from "./ModernTemplate";
import type { CVTemplateProps } from "./TemplatePrimitives";

export { AvatarImage } from "./TemplatePrimitives";
export { TemplateThumbnail } from "./TemplateThumbnail";

const templateComponents: Record<CVTemplateId, ComponentType<CVTemplateProps>> = {
  modern: ModernTemplate,
  classic: ClassicTemplate,
  creative: CreativeTemplate,
  minimal: MinimalTemplate,
  developer: DeveloperTemplate,
  executive: ExecutiveTemplate,
};

export function CVPreview({ data, templateId }: { data: CVData; templateId: CVTemplateId }) {
  const skills = data.skills
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);
  const Template = templateComponents[templateId] ?? ModernTemplate;

  return (
    <article
      className={cn(
        "cv-document mx-auto min-h-[880px] w-full max-w-[780px] overflow-hidden bg-white text-slate-950 shadow-2xl shadow-black/30",
        `cv-template-${templateId}`,
      )}
    >
      <Template data={data} skills={skills} />
    </article>
  );
}
