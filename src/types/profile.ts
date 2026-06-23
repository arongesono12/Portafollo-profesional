export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "mail" | "globe";
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
};

export type SkillGroup = {
  title: string;
  skills: {
    name: string;
    level?: number;
  }[];
};

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  status: string;
  liveUrl: string;
  repositoryUrl?: string;
  impact: string;
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  certificates: string[];
};

export type Language = {
  name: string;
  level: string;
  proficiency: number;
};

export type Hobby = {
  name: string;
  icon: "book" | "music" | "football" | "games" | "fitness";
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

export type Profile = {
  name: string;
  brand: string;
  title: string;
  tagline: string;
  avatar: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  location: string;
  cvUrl: string;
  sectors: string[];
  values: string[];
  currentGoals: string;
  bio: string;
  yearsOfExperience: number;
  specialty: string;
  socials: SocialLink[];
  experience: Experience[];
  skillGroups: SkillGroup[];
  projects: Project[];
  education: Education[];
  languages: Language[];
  hobbies: Hobby[];
  testimonials: Testimonial[];
};
