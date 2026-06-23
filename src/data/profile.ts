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
      role: "Monitoreo y flujo de corriente",
      company: "Turbo Gas",
      period: "2019 - 2020",
      location: "Malabo, Guinea Ecuatorial",
      description:
        "Registro y seguimiento del flujo de corriente, junto con tareas de asistencia operativa en la empresa Gas Turbo.",
      responsibilities: [
        "Registrar y controlar datos del flujo de corriente.",
        "Prestar asistencia al equipo durante las operaciones.",
      ],
      achievements: [
        "Apoyo al control y seguimiento de las operaciones técnicas.",
        "Experiencia trabajando bajo presión y coordinado con equipos operativos.",
      ],
      technologies: ["Monitoreo", "Registro de datos", "Soporte operativo"],
    },
    {
      role: "Técnico informático",
      company: "SEGESA",
      period: "2020 - Actualidad",
      location: "Malabo, Guinea Ecuatorial",
      description:
        "Trabajo en el departamento de IT de SEGESA, ofreciendo soporte técnico, mantenimiento de equipos y asistencia a usuarios.",
      responsibilities: [
        "Diagnosticar y resolver incidencias informáticas.",
        "Mantener equipos, aplicaciones y puestos de trabajo.",
        "Asistir a usuarios y departamentos internos.",
      ],
      achievements: [
        "Participación continuada en el soporte tecnológico de la organización.",
        "Resolución de problemas técnicos en entornos de trabajo reales.",
      ],
      technologies: ["Soporte técnico", "Hardware", "Software", "Redes"],
    },
    {
      role: "Implementación de One-Site",
      company: "ARP Dynamics / SEGESA",
      period: "2020 - 2023",
      location: "Región Continental, Guinea Ecuatorial",
      description:
        "Participación en el equipo seleccionado por SEGESA para instalar el nuevo sistema de cobros y gestión One-Site en la región continental del país.",
      responsibilities: [
        "Apoyar la instalación y configuración del sistema.",
        "Asistir a los equipos locales durante la implantación.",
        "Colaborar en la puesta en marcha del nuevo flujo de cobros y gestión.",
      ],
      achievements: [
        "Despliegue del sistema One-Site en la región continental.",
        "Participación en un proyecto tecnológico de alcance nacional.",
      ],
      technologies: ["One-Site", "Implantación", "Soporte", "Gestión de cobros"],
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
      skills: [
        { name: "Español nativo" },
        { name: "Francés intermedio" },
        { name: "Inglés intermedio" },
      ],
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
      degree: "Educación Secundaria",
      institution: "INÉS Mongomo y Centro Patricio Lumumba",
      period: "2004 - 2016",
      location: "Mongomo, Guinea Ecuatorial",
      description:
        "Formación secundaria cursada en el Instituto INÉS Mongomo de Guadalupe y en el Centro Patricio Lumumba.",
      certificates: ["Educación secundaria"],
    },
    {
      degree: "Formación Superior en Aplicaciones Informáticas",
      institution: "Instituto Nacional de Formación en Hostelería, Artes y Oficios de Mongomo",
      period: "2016 - 2019",
      location: "Mongomo, Guinea Ecuatorial",
      description:
        "Formación profesional en aplicaciones informáticas, obteniendo un certificado de reconocimiento como mejor alumno de la especialidad.",
      certificates: ["Aplicaciones informáticas", "Reconocimiento al mejor alumno"],
    },
    {
      degree: "Aspectos básicos de la asistencia técnica",
      institution: "Google Career Certificates · Coursera",
      period: "2021 - 2023",
      location: "Formación en línea",
      description:
        "Curso de formación en línea sobre los fundamentos de la asistencia técnica ofrecido por Google en la plataforma Coursera.",
      certificates: ["Asistencia técnica", "Google · Coursera"],
    },
  ],
  languages: [
    { name: "Español", level: "Nativo", proficiency: 96 },
    { name: "Francés", level: "Intermedio", proficiency: 74 },
    { name: "Inglés", level: "Intermedio", proficiency: 52 },
  ],
  hobbies: [
    { name: "Lectura", icon: "book" },
    { name: "Música", icon: "music" },
    { name: "Fútbol", icon: "football" },
    { name: "Juegos", icon: "games" },
    { name: "Culturismo", icon: "fitness" },
  ],
  testimonials: [
    {
      name: "Carlos Hechavarria",
      role: "Profesor de Desarrollo Web",
      company: "INFH Mongomo",
      quote:
        "Aron conecta visión técnica y ejecución. Sus soluciones son claras, escalables y fáciles de mantener.",
    },
  ],
};
