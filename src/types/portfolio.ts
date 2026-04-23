export type EducationEntry = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  notes?: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ExperienceRole = {
  title: string;
  company: string;
  setup: string;
  period: string;
  summary: string;
  bullets: string[];
};

export type Project = {
  slug: string;
  title: string;
  headline: string;
  description: string;
  techStack: string[];
  github?: string;
  liveDemo?: string;
  image?: string;
  status?: string;
};
