import type { LocalizedText } from "../i18n";
import type { ProjectCategory, ProjectFilter } from "./project";

export type TextValue = LocalizedText | string;

export interface NavigationItem {
  label: TextValue;
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
  title: TextValue;
  shortDescription: TextValue;
  longDescription: TextValue;
}

export interface ServiceItem {
  slug: Service["slug"];
  title: TextValue;
  description: TextValue;
}

export interface MetricItem {
  value: string;
  label: TextValue;
}

export interface SocialLink {
  label: TextValue;
  href: string;
  external?: boolean;
}

export interface SiteMeta {
  title: string;
  description: TextValue;
  siteUrl: string;
  socialImage: string;
}

export interface ContactDetails {
  email: string;
  phone: string;
  location: TextValue;
}

export type ProjectCategoryFilters = readonly ProjectFilter[];
export type ProjectCategories = readonly ProjectCategory[];
