import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "sulion-showroom",
    title: "Sulion Showroom",
    category: "Spaces",
    year: "2024",
    summary: "Art direction and site supervision for a showroom that turned industrial space into an immersive brand experience.",
    intro:
      "Sulion Showroom transformed more than 250 square metres of industrial space into a sequence of environments where lighting could be experienced, not just displayed.",
    facts: [
      { label: "Client", value: "Sulion" },
      { label: "Role", value: "Art Direction & Site Supervision" }
    ],
    services: ["Art Direction", "Site Supervision", "Spatial Design", "Showroom Experience"],
    challenge:
      "The challenge was to convert a warehouse-scale industrial setting into a commercially useful showroom where each room had its own atmosphere, narrative and functional logic.",
    result:
      "The final space gave Sulion a more experiential way to present the brand, with every area connected through a smart home system and carried through with consistent direction from construction to final styling.",
    coverImage: {
      src: "/images/sulion-showroom-cover.svg",
      alt: "Placeholder visual for the Sulion Showroom project.",
      caption: "Retail atmosphere and product storytelling shaped into one spatial experience."
    },
    gallery: [
      {
        src: "/images/sulion-showroom-gallery-01.svg",
        alt: "Placeholder gallery visual for Sulion Showroom circulation planning.",
        caption: "Display zones structured for both client meetings and campaign production."
      },
      {
        src: "/images/sulion-showroom-gallery-02.svg",
        alt: "Placeholder gallery visual for Sulion Showroom modular architecture.",
        caption: "A modular spatial system designed to host launches, visits and content capture."
      }
    ],
    featured: true,
    sortOrder: 1
  },
  {
    slug: "look-generated-for-mo",
    title: "Look Generated for MO",
    category: "AI",
    year: "2024",
    summary: "A 48-hour AI-led campaign workflow built from an initial sketch into production-ready visuals for MO.",
    intro:
      "The project explored how AI can radically accelerate campaign production when it is used as a creative tool with strong visual judgment rather than as a shortcut.",
    facts: [
      { label: "Client", value: "Multiópticas" },
      { label: "Role", value: "Creative Direction & AI Production" }
    ],
    services: ["Creative Direction", "AI Production", "3D Visual Development", "Campaign Assets"],
    challenge:
      "The brief was to prove that a campaign could move from sketch to final visual system in forty-eight hours without sacrificing material realism, lighting control or brand criteria.",
    result:
      "Starting from an initial concept, the process expanded into AI imagery, 3D material studies, lighting definition, model photography, short-form video and modular assets adapted to each channel.",
    coverImage: {
      src: "/images/look-generated-for-mo-cover.svg",
      alt: "Placeholder visual for the Look Generated for MO project.",
      caption: "AI-generated imagery directed through a strong brand lens."
    },
    gallery: [
      {
        src: "/images/look-generated-for-mo-gallery-01.svg",
        alt: "Placeholder gallery visual for the MO workflow design.",
        caption: "Prompt direction and post-production standards were built around brand realism."
      },
      {
        src: "/images/look-generated-for-mo-gallery-02.svg",
        alt: "Placeholder gallery visual for the MO concept narrative.",
        caption: "A richer concept pipeline built for faster campaign development."
      }
    ],
    featured: true,
    sortOrder: 2
  },
  {
    slug: "sulion-branding",
    title: "Sulion Branding",
    category: "Branding",
    year: "2024",
    summary: "A brand direction for Sulion built around maturity, credibility and a clearer contemporary voice.",
    intro:
      "The work focused on helping Sulion recognise its own strengths and translate decades of product knowledge into a more confident visual language.",
    facts: [
      { label: "Client", value: "Sulion" },
      { label: "Role", value: "Creative Direction & Branding" },
      { label: "Collaboration", value: "Reserva Coyote", href: "https://reservacoyote.com" }
    ],
    resources: [
      {
        label: "Download brandbook",
        href: "/downloads/brandbook-sulion.pdf",
        download: "brandbook-sulion.pdf"
      }
    ],
    services: ["Creative Direction", "Branding", "Verbal Framing", "Brand System"],
    challenge:
      "Sulion needed an identity that felt current without forcing novelty, preserving the trust and product honesty the brand had already earned while sharpening how it presented itself.",
    result:
      "The resulting direction established a more mature and coherent brand system anchored by the claim 'Creating the spaces of tomorrow', giving campaigns, content and touchpoints a clearer strategic base.",
    coverImage: {
      src: "/images/sulion-branding-cover.svg",
      alt: "Placeholder visual for the Sulion Branding project.",
      caption: "Identity design focused on restraint, clarity and long-term brand coherence."
    },
    gallery: [
      {
        src: "/images/sulion-branding-gallery-01.svg",
        alt: "Placeholder gallery visual for the Sulion branding toolkit.",
        caption: "A modular system supporting retail, digital and packaging touchpoints."
      },
      {
        src: "/images/sulion-branding-gallery-02.svg",
        alt: "Placeholder gallery visual for the Sulion brand grid.",
        caption: "A more contemporary visual structure built for scale and recognition."
      }
    ],
    featured: true,
    sortOrder: 3
  },
  {
    slug: "aire-2025",
    title: "Aire 2025",
    category: "Editorial",
    year: "2024",
    summary: "Creative direction and editorial narrative for a catalogue designed as a brand object, not just a product list.",
    intro:
      "Aire 2025 was conceived as a publication that could turn a commercial catalogue into a slower, more desirable reading experience around the home and the products inside it.",
    facts: [
      { label: "Client", value: "Sulion" },
      { label: "Role", value: "Creative Direction & Editorial Narrative" }
    ],
    services: ["Creative Direction", "Editorial Narrative", "Catalogue Design", "Art Direction"],
    challenge:
      "The challenge was to move beyond a straightforward product-and-price catalogue and build a visual narrative that made readers feel they were shaping the kind of space they wanted to live in.",
    result:
      "From the first conversation to the final printed pages, the project aligned pacing, imagery and layout into a more aspirational editorial object for the Sulion launch.",
    coverImage: {
      src: "/images/aire-2025-cover.svg",
      alt: "Placeholder visual for the Aire 2025 project.",
      caption: "Editorial pacing, typography and visual sequencing designed for depth."
    },
    gallery: [
      {
        src: "/images/aire-2025-gallery-01.svg",
        alt: "Placeholder gallery visual for Aire 2025 typography treatment.",
        caption: "A slower reading experience shaped through typography and layout rhythm."
      },
      {
        src: "/images/aire-2025-gallery-02.svg",
        alt: "Placeholder gallery visual for Aire 2025 page system.",
        caption: "A campaign-ready editorial toolkit with clear sequencing and structure."
      }
    ],
    featured: true,
    sortOrder: 4
  },
  {
    slug: "airtisan-studio",
    title: "Airtisan Studio",
    category: "Product",
    year: "2025",
    summary: "A self-initiated creative studio using AI to accelerate concept development for interiors, architecture and product.",
    intro:
      "Airtisan Studio was founded as a practical expression of expanded creativity: a design method where technology amplifies creative judgment to move from brief to first concept in 24 to 72 hours.",
    facts: [
      { label: "Type", value: "Self-initiated venture" },
      { label: "Role", value: "Creative Direction & Founder" },
      { label: "Website", value: "airtisanstudio.es", href: "https://www.airtisanstudio.es/" }
    ],
    services: ["Creative Direction", "AI Concept Development", "Interior Direction", "Product Visualization"],
    challenge:
      "The challenge was to define a studio model that could combine speed, aesthetic control and brand coherence across projects in interiors, architecture and product without turning AI into a gimmick.",
    result:
      "The result is a clearer studio proposition built around rapid discovery, concept routes, tailored visual systems and adaptable production assets prepared for multiple channels and continuous iteration.",
    coverImage: {
      src: "/images/airtisan-studio-cover.svg",
      alt: "Placeholder visual for the Airtisan Studio project.",
      caption: "Product, brand and launch storytelling shaped as one system."
    },
    gallery: [
      {
        src: "/images/airtisan-studio-gallery-01.svg",
        alt: "Placeholder gallery visual for Airtisan Studio product storytelling.",
        caption: "A living brand system designed across object, editorial and commerce touchpoints."
      },
      {
        src: "/images/airtisan-studio-gallery-02.svg",
        alt: "Placeholder gallery visual for Airtisan Studio launch assets.",
        caption: "A launch narrative structured for growth across multiple channels."
      }
    ],
    featured: false,
    sortOrder: 5
  },
  {
    slug: "future-lighting",
    title: "Future Lighting",
    category: "Product",
    year: "2024",
    summary: "A product direction study translating lighting innovation into a quieter, more collectible object language.",
    intro:
      "Future Lighting explored how product design, visual framing and launch storytelling could reposition a technical category through a more sculptural presence.",
    services: ["Product Design", "Creative Direction", "Visual Storytelling", "Launch Narrative"],
    challenge:
      "The brief required a product concept that felt contemporary and elevated while remaining legible for commercial communication across catalogue, retail and campaign touchpoints.",
    result:
      "The final direction defined a more refined product silhouette and a stronger visual narrative, making the concept easier to present as both design object and market-ready offer.",
    coverImage: {
      src: "/images/future-lighting-cover.svg",
      alt: "Placeholder visual for the Future Lighting project.",
      caption: "A product storytelling study built around material atmosphere and visual restraint."
    },
    gallery: [
      {
        src: "/images/future-lighting-gallery-01.svg",
        alt: "Placeholder gallery visual for Future Lighting product profile.",
        caption: "A more sculptural silhouette developed for premium positioning."
      },
      {
        src: "/images/future-lighting-gallery-02.svg",
        alt: "Placeholder gallery visual for Future Lighting campaign mood.",
        caption: "Launch imagery designed to frame the object with clarity and atmosphere."
      }
    ],
    featured: false,
    sortOrder: 6
  }
];

export const sortedProjects = [...projects].sort((left, right) => left.sortOrder - right.sortOrder);

export const featuredProjects = sortedProjects.filter((project) => project.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return sortedProjects.find((project) => project.slug === slug);
}
