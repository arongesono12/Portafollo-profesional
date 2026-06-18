export type CVTemplateId =
  | "modern"
  | "classic"
  | "creative"
  | "minimal"
  | "developer"
  | "executive";

export type CVExperience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
};

export type CVEducation = {
  id: string;
  degree: string;
  institution: string;
  period: string;
};

export type CVAvatarCrop = {
  x: number;
  y: number;
  zoom: number;
};

export type CVData = {
  avatarUrl: string;
  avatarCrop: CVAvatarCrop;
  fullName: string;
  headline: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  skills: string;
  experience: CVExperience[];
  education: CVEducation[];
};

export type CVTemplate = {
  id: CVTemplateId;
  name: string;
  description: string;
  accent: string;
  category: "professional" | "technical" | "creative";
};
