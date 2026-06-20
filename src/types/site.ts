import type { LocalizedText } from "../i18n";
import type { ProjectCategory, ProjectFilter } from "./project";

export interface NavigationItem {
  label: LocalizedText;
  href: string;
}

export interface Service {
  slug:
    | "creative-direction"
    | "brand-strategy"
    | "product-development"
    | "brand-activation"
    | "ai-in-creativity"
    | "innovation-consulting";
  title: LocalizedText;
  shortDescription: LocalizedText;
  longDescription: LocalizedText;
}

export interface MetricItem {
  value: string;
  label: LocalizedText;
}

export interface SocialLink {
  label: LocalizedText;
  href: string;
  external?: boolean;
}

export interface SiteMeta {
  title: string;
  description: LocalizedText;
  siteUrl: string;
  socialImage: string;
}

export interface ContactDetails {
  email: string;
  phone: string;
  location: LocalizedText;
}

export type ProjectCategoryFilters = readonly ProjectFilter[];
export type ProjectCategories = readonly ProjectCategory[];
