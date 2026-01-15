
export interface NavItem {
  name: string;
  path: string;
  icon?: string;
}

export interface Skill {
  title: string;
  description: string;
  icon: string;
  proficiency: number;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  tasks: string[];
  tags: string[];
  icon: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  verifyUrl: string;
  image: string;
  icon: string;
}
