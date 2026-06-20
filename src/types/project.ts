import type { LocalizedText } from "../i18n";

export type ProjectCategory = "Branding" | "Spaces" | "AI" | "Editorial" | "Product";

export type ProjectFilter = "All" | ProjectCategory;

export interface ProjectImage {
  src: string;
  alt: LocalizedText;
  caption: LocalizedText;
}

export interface ProjectFact {
  label: LocalizedText;
  value: LocalizedText;
  href?: string;
}

export interface ProjectResource {
  label: LocalizedText;
  href: string;
  download?: string;
}

export interface Project {
  slug: string;
  title: LocalizedText;
  category: ProjectCategory;
  year: string;
  summary: LocalizedText;
  intro: LocalizedText;
  facts?: ProjectFact[];
  resources?: ProjectResource[];
  services: LocalizedText[];
  challenge: LocalizedText;
  result: LocalizedText;
  coverImage: ProjectImage;
  gallery: ProjectImage[];
  featured: boolean;
  sortOrder: number;
}
