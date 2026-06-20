import type { LocalizedText } from "../i18n";

export type TextValue = LocalizedText | string;

export type ProjectCategory = "Branding" | "Spaces" | "AI" | "Editorial" | "Product";

export type ProjectFilter = "All" | ProjectCategory;

export interface ProjectImage {
  src: string;
  alt: TextValue;
  caption: TextValue;
}

export interface ProjectFact {
  label: TextValue;
  value: TextValue;
  href?: string;
}

export interface ProjectResource {
  label: TextValue;
  href: string;
  download?: string;
}

export interface Project {
  slug: string;
  title: TextValue;
  category: ProjectCategory;
  year: string;
  summary: TextValue;
  intro: TextValue;
  facts?: ProjectFact[];
  resources?: ProjectResource[];
  services: TextValue[];
  challenge: TextValue;
  result: TextValue;
  coverImage: ProjectImage;
  gallery: ProjectImage[];
  featured: boolean;
  sortOrder: number;
}
