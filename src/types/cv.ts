export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  linkedinUsername: string;
  github: string;
  githubUsername: string;
  portfolio?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  bullets: string[];
  group?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface Language {
  lang: string;
  level: string;
}

export interface Skills {
  languages: string[];
  frontend: string[];
  aiWorkflows: string[];
  backend: string[];
  databases: string[];
  tools: string[];
}

export interface CvData {
  personalInfo: PersonalInfo;
  profile: string;
  skillsHeader: string;
  skills: Skills;
  experienceHeader: string;
  experience: Experience[];
  educationHeader: string;
  education: Education[];
  languagesHeader: string;
  languages: Language[];
  interestsHeader: string;
  interests: string[];
}

export type AccentColor = 'cyan' | 'violet' | 'emerald' | 'amber' | 'rose';

export type Template = 'neo-minimal' | 'dark-tech' | 'creative-glass' | 'ats';

export type FontFamily = 'sans' | 'serif' | 'mono';

export interface ColorClasses {
  primary: string;
  bg: string;
  border: string;
  accentLight: string;
  textHover: string;
  gradient: string;
}
