import type { Metadata } from "next";

import { CVBuilder } from "@/components/cv-builder/CVBuilder";

export const metadata: Metadata = {
  title: "Crear CV | Aron Esono",
  description:
    "Creador de CV con plantillas profesionales, edición en vivo y exportación a PDF desde el portafolio.",
};

export default function CVBuilderPage() {
  return <CVBuilder />;
}
