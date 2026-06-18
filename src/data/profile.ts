import type { Profile } from "@/types/profile";

export const profile: Profile = {
  name: "ARON ESONO",
  brand: "Aron Esono",
  title: "Desarrollador Tech Full Stack & Cloud Architect",
  tagline:
    "Full Stack Web & Mobile Developer | React • Next.js • React Native • Supabase",
  avatar: "/profile-avatar.png",
  email: "contacto@aronesono.dev",
  location: "Malabo, Guinea Ecuatorial",
  cvUrl: "/cv-builder",
  yearsOfExperience: 7,
  specialty: "Full stack, cloud architecture, DevOps y productos web escalables",
  sectors: ["SaaS", "E-commerce", "Cloud", "Analytics"],
  values: ["Claridad", "Escalabilidad", "Automatización", "Calidad técnica"],
  currentGoals:
    "Diseñar plataformas cloud modernas, rápidas y mantenibles para equipos que necesitan crecer sin perder control técnico.",
  bio: "Soy desarrollador full stack y arquitecto cloud. Combino frontend moderno, backend robusto e infraestructura escalable para crear productos digitales de alto rendimiento. Me enfoco en código limpio, experiencia de usuario y despliegues confiables.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aronesonoondo", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/arongesono12", icon: "github" },
    { label: "Portfolio", href: "https://aronesono.dev", icon: "globe" },
    { label: "Email", href: "mailto:contacto@aronesono.dev", icon: "mail" },
  ],
  experience: [
    {
      role: "Senior Developer",
      company: "TechCorp",
      period: "2021 - Actualidad",
      location: "Remoto",
      description:
        "Liderazgo técnico en aplicaciones full stack, plataformas cloud y pipelines de entrega continua.",
      responsibilities: [
        "Diseñar arquitecturas escalables con React, Node.js y servicios cloud.",
        "Automatizar despliegues, observabilidad e integración continua.",
        "Coordinar decisiones técnicas con producto, diseño y operaciones.",
      ],
      achievements: [
        "Reducción del 40% en tiempos de despliegue.",
        "Migración exitosa de servicios críticos a infraestructura cloud.",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"],
    },
    {
      role: "Cloud Engineer",
      company: "FutureTech",
      period: "2019 - 2021",
      location: "Barcelona, España",
      description:
        "Implementación de entornos cloud, APIs y soluciones de datos para productos B2B.",
      responsibilities: [
        "Construir APIs seguras y sistemas distribuidos.",
        "Optimizar bases de datos y cargas de trabajo cloud.",
        "Definir prácticas DevOps para equipos de desarrollo.",
      ],
      achievements: [
        "Mejora del 32% en rendimiento de APIs principales.",
        "Estandarización de entornos para desarrollo, staging y producción.",
      ],
      technologies: ["AWS", "PostgreSQL", "MongoDB", "GitHub Actions", "Terraform"],
    },
    {
      role: "Full Stack Developer",
      company: "Nova Labs",
      period: "2017 - 2019",
      location: "Valencia, España",
      description:
        "Desarrollo de plataformas web, paneles internos y experiencias e-commerce.",
      responsibilities: [
        "Crear interfaces responsive con React y TypeScript.",
        "Integrar servicios backend y pasarelas de pago.",
        "Mantener pruebas, documentación y control de calidad.",
      ],
      achievements: [
        "Lanzamiento de 8 productos web para clientes comerciales.",
        "Incremento de conversión tras optimizar flujos de compra.",
      ],
      technologies: ["React", "TypeScript", "Node.js", "Figma", "Git"],
    },
  ],
  skillGroups: [
    {
      title: "Habilidades técnicas",
      skills: [
        { name: "React", level: 96 },
        { name: "Node.js", level: 92 },
        { name: "TypeScript", level: 94 },
        { name: "Cloud Architecture", level: 90 },
      ],
    },
    {
      title: "Herramientas",
      skills: [
        { name: "AWS" },
        { name: "Docker" },
        { name: "Kubernetes" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "Git" },
        { name: "Figma" },
      ],
    },
    {
      title: "Idiomas",
      skills: [{ name: "Español nativo" }, { name: "Inglés profesional" }],
    },
    {
      title: "Certificaciones",
      skills: [{ name: "AWS Cloud Practitioner" }, { name: "Kubernetes Fundamentals" }],
    },
  ],
  projects: [
    {
      name: "FondosEG Plataforma de Envíos",
      description:
        "Una página enfocada en gestores, agencias y equipos que necesitan controlar caja, saldos, clientes y estados de envío desde un único lugar.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "TypeScript"],
      image: "/project-fondoseg.png",
      status: "Producción",
      liveUrl: "https://fondoseg.com",
      impact: "Aumento de envios y mejor control efectivo.",
    },
    {
      name: "CasasEG - plataforma de alquileres",
      description:
        "CasasEG es una plataforma tecnológica que facilita la publicación, búsqueda y contacto sobre viviendas, habitaciones, apartamentos y otros inmuebles.",
      technologies: ["React", "Vite", "Supabase", "Resend"],
      image: "/project-casaseg.png",
      status: "Activo",
      liveUrl: "https://casaseg.com",
      impact: "Regularización de alquileres y mejor experiencia para usuarios y propietarios.",
    },
    {
      name: "Agenda Corporativa",
      description:
        "Herramienta para gestionar agendas corporativas y coordinar los trabajos entre los empleados de cada organización.",
      technologies: ["Node.js", "Next.js", "TypeScript"],
      image: "/project-agenda.png",
      status: "Activo",
      liveUrl: "https://agendasegesa.com",
      impact: "Seguimiento eficiente de actividades y mejor coordinación entre empleados.",
    },
  ],
  education: [
    {
      degree: "Diplomatura en Aplicaciones Informáticas",
      institution: "Instituto Nacional de Formación Profesional en Hostelería, Turismo, Artes y Oficios de Mongomo",
      period: "2016 - 2018",
      location: "Mongomo, Guinea Ecuatorial",
      description:
        "Especialización en desarrollo de aplicaciones, programación y tecnologías de la información.",
      certificates: ["Arquitectura cloud", "DevOps avanzado"],
    },
    {
      degree: "Grado en Ingeniería Informática",
      institution: "Universidad de Valencia",
      period: "2011 - 2015",
      location: "Valencia, España",
      description:
        "Formación en desarrollo de software, bases de datos, redes y diseño de sistemas.",
      certificates: ["Tecnologías web"],
    },
  ],
  testimonials: [
    {
      name: "Carlos Hechavarria",
      role: "Profesor de Desarrollo Web",
      company: "INFH Mongomo",
      quote:
        "Aron conecta visión técnica y ejecución. Sus soluciones son claras, escalables y fáciles de mantener.",
    },
    {
      name: "Miguel Torres",
      role: "CTO",
      company: "FutureTech",
      quote:
        "Un perfil excelente para construir productos cloud sólidos sin perder sensibilidad por la experiencia de usuario.",
    },
  ],
};
