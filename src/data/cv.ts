import type { CVData, CVTemplate } from "@/types/cv";

export const cvTemplates: CVTemplate[] = [
  {
    id: "modern",
    name: "Moderna",
    description: "Perfil técnico con bloques claros, acento lateral y lectura rápida.",
    accent: "#22d3ee",
  },
  {
    id: "classic",
    name: "Clásica",
    description: "Formato sobrio para candidaturas corporativas y procesos formales.",
    accent: "#0f172a",
  },
  {
    id: "creative",
    name: "Creativa",
    description: "Diseño expresivo para perfiles digitales, producto y diseño.",
    accent: "#38bdf8",
  },
];

export const initialCVData: CVData = {
  avatarUrl: "",
  avatarCrop: {
    x: 50,
    y: 50,
    zoom: 1,
  },
  fullName: "Nombre Apellido",
  headline: "Desarrollador Full Stack",
  email: "tu@email.com",
  phone: "+34 600 000 000",
  location: "Ciudad, País",
  summary:
    "Profesional orientado a producto, con experiencia creando soluciones digitales claras, escalables y enfocadas en resultados.",
  skills: "React, Next.js, TypeScript, Node.js, Supabase, Diseño UI, Cloud",
  experience: [
    {
      id: "experience-1",
      role: "Full Stack Developer",
      company: "Empresa Actual",
      period: "2022 - Actualidad",
      description:
        "Desarrollo de aplicaciones web, APIs y flujos de producto con foco en rendimiento, mantenimiento y experiencia de usuario.",
    },
  ],
  education: [
    {
      id: "education-1",
      degree: "Formación o certificación principal",
      institution: "Institución",
      period: "2018 - 2022",
    },
  ],
};
