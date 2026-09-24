export interface Project {
  id: string;
  title: string;
  category: 'web' | 'automation' | 'cloud' | 'analytics';
  description: string;
  longDescription?: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  metrics?: string;
  featured?: boolean;
  imageBg: string; // Gradient or aesthetic backdrop
  iconName: string;
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  boardOrUniversity: string;
  details?: string;
  icon: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization?: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  avatar: string;
  feedback: string;
  gradient: string;
}

export interface SkillCategory {
  categoryName: string;
  skills: {
    name: string;
    level?: string;
    icon: string;
    bgGlow?: string;
  }[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
