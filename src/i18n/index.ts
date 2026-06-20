export type Language = "es" | "en";

export interface LocalizedText {
  es: string;
  en: string;
}

export function getLocalizedText(value: LocalizedText | string, language: Language): string {
  return typeof value === "string" ? value : value[language];
}

const taxonomyLabels: Record<string, LocalizedText> = {
  All: { es: "Todos", en: "All" },
  Branding: { es: "Branding", en: "Branding" },
  Spaces: { es: "Espacios", en: "Spaces" },
  AI: { es: "IA", en: "AI" },
  Editorial: { es: "Editorial", en: "Editorial" },
  Product: { es: "Producto", en: "Product" },
  "Retail Spaces": { es: "Espacios Retail", en: "Retail Spaces" },
  "AI Campaign": { es: "Campaña con IA", en: "AI Campaign" },
  "Brand Identity": { es: "Identidad de Marca", en: "Brand Identity" },
  "Product Design": { es: "Diseño de Producto", en: "Product Design" }
};

export function getTaxonomyLabel(key: string, language: Language): string {
  return getLocalizedText(taxonomyLabels[key] ?? key, language);
}
