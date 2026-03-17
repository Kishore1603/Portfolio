// Shared type definitions for the portfolio

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  updated_at: string;
  stargazers_count: number;
  forks_count: number;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  preview: string;
  content: string;
  tags: string[];
  source: "manual" | "linkedin";
  linkedinUrl?: string;
  coverImage?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export interface Education {
  institution: string;
  degree?: string;
  field?: string;
  period: string;
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  link?: string;
  date?: string;
  badgeIcon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
