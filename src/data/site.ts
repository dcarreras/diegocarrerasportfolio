import type {
  ContactDetails,
  MetricItem,
  NavigationItem,
  ProjectCategories,
  ProjectCategoryFilters,
  Service,
  ServiceItem,
  SiteMeta,
  SocialLink
} from "../types/site";

export const siteMeta: SiteMeta = {
  title: "Diego Carreras | Creative Director",
  description: {
    es: "Dirección creativa para marcas que convierten ideas en experiencias memorables a través de estrategia, espacio, producto, editorial y narrativa visual con IA.",
    en: "Creative direction for brands that turn ideas into memorable experiences across strategy, space, product, editorial and AI-powered visual storytelling."
  },
  siteUrl: "https://www.diegocarreras.com",
  socialImage: "/og-image.svg"
};

export const navigationItems: NavigationItem[] = [
  { label: { es: "Inicio", en: "Home" }, href: "/" },
  { label: { es: "Proyectos", en: "Projects" }, href: "/projects" },
  { label: { es: "Servicios", en: "Services" }, href: "/services" },
  { label: { es: "Sobre Diego", en: "About" }, href: "/about" },
  { label: { es: "Contacto", en: "Contact" }, href: "/contact" }
];

export const projectCategories: ProjectCategories = ["Branding", "Spaces", "AI", "Editorial", "Product"] as const;

export const projectFilters: ProjectCategoryFilters = ["All", ...projectCategories] as const;

export const siteConfig = {
  name: "Diego Carreras",
  role: { es: "Director Creativo", en: "Creative Director" },
  headline: {
    es: "Dirección creativa para marcas que convierten ideas en experiencias memorables.",
    en: "Creative direction for brands that turn ideas into memorable experiences."
  },
  subheadline: {
    es: "Estrategia de marca, espacios, producto y narrativa visual impulsada por IA.",
    en: "Brand strategy, spaces, products and AI-powered visual storytelling."
  },
  intro: {
    es: "Ayudo a marcas a construir identidades más claras, productos más sólidos y experiencias más memorables a través de estrategia, diseño, espacio y contenido.",
    en: "I help brands shape clearer identities, sharper products and more memorable experiences across strategy, design, space and content."
  },
  email: "d.c.albacete@gmail.com",
  phone: "+34 600 73 58 51",
  location: { es: "España", en: "Spain" },
  footerTagline: {
    es: "El diseño bien dirigido no es un coste. Es ventaja competitiva.",
    en: "Well-directed design is not a cost. It is competitive advantage."
  },
  cta: {
    label: { es: "Iniciar conversación", en: "Start a conversation" },
    href: "/contact"
  },
  featuredProjectSlugs: ["sulion-showroom", "look-generated-for-mo", "sulion-branding", "aire-2025"],
  socialLinks: [
    {
      label: { es: "LinkedIn", en: "LinkedIn" },
      href: "https://www.linkedin.com/in/diego-carreras",
      external: true
    },
    {
      label: { es: "Instagram", en: "Instagram" },
      href: "",
      external: true
    },
    {
      label: { es: "Correo", en: "Email" },
      href: "mailto:d.c.albacete@gmail.com",
      external: false
    }
  ] satisfies SocialLink[]
} as const;

export const services: Service[] = [
  {
    slug: "creative-direction",
    title: { es: "Dirección Creativa", en: "Creative Direction" },
    shortDescription: {
      es: "Liderazgo creativo estratégico para equipos, lanzamientos y proyectos que definen una marca.",
      en: "Strategic creative leadership for teams, launches and brand-defining projects."
    },
    longDescription: {
      es: "Para equipos o proyectos que necesitan visión, criterio y liderazgo creativo sin incorporar un director creativo a tiempo completo.",
      en: "For teams or projects that need vision, judgement and creative leadership without adding a full-time creative director in-house."
    }
  },
  {
    slug: "brand-strategy",
    title: { es: "Estrategia de Marca", en: "Brand Strategy" },
    shortDescription: {
      es: "Posicionamiento, narrativa y sistemas visuales para dar más claridad y relevancia a una marca.",
      en: "Positioning, narrative and visual systems built to give brands more clarity and relevance."
    },
    longDescription: {
      es: "Desde la idea central hasta el lenguaje visual, ayudo a las marcas a definir qué representan, cómo deben sonar y cómo deben presentarse.",
      en: "From core idea to visual language, I help brands define what they stand for, how they should sound and how they should show up."
    }
  },
  {
    slug: "product-development",
    title: { es: "Desarrollo de Producto", en: "Product Development" },
    shortDescription: {
      es: "Del briefing al lanzamiento, con foco en concepto, materiales y viabilidad de producción.",
      en: "From briefing to launch, with concept, material thinking and production awareness."
    },
    longDescription: {
      es: "Trabajo entre concepto, forma, usabilidad, materiales y condicionantes industriales para dar forma a productos coherentes desde la idea hasta el mercado.",
      en: "I work across concept, form, usability, materials and industrial constraints to shape products that feel coherent from idea to market."
    }
  },
  {
    slug: "brand-activation",
    title: { es: "Activación de Marca y Experiencia", en: "Brand Activation & Experience" },
    shortDescription: {
      es: "Showrooms, stands y espacios físicos donde la marca se vuelve tangible.",
      en: "Showrooms, stands and physical spaces where the brand becomes tangible."
    },
    longDescription: {
      es: "Diseño entornos físicos que hacen más que mostrar. Comunican valor, crean atmósfera y convierten el posicionamiento de marca en experiencia.",
      en: "I design physical environments that do more than display. They communicate value, create atmosphere and turn brand positioning into experience."
    }
  },
  {
    slug: "ai-in-creativity",
    title: { es: "IA en Creatividad", en: "AI in Creativity" },
    shortDescription: {
      es: "Flujos de trabajo con IA que aumentan la velocidad sin rebajar el estándar creativo.",
      en: "AI-powered workflows that increase speed without lowering creative standards."
    },
    longDescription: {
      es: "Ayudo a equipos creativos a integrar IA en desarrollo conceptual, generación de assets y producción manteniendo autoría, dirección y calidad bajo control.",
      en: "I help creative teams integrate AI into concept development, asset generation and production workflows while keeping authorship, direction and quality under control."
    }
  },
  {
    slug: "innovation-consulting",
    title: { es: "Consultoría en Innovación", en: "Innovation Consulting" },
    shortDescription: {
      es: "Pensamiento creativo y de producto para empresas preparadas para evolucionar su oferta.",
      en: "Creative and product thinking for companies ready to evolve their offer."
    },
    longDescription: {
      es: "Para negocios que quieren replantear marca, producto o experiencia de cliente y necesitan a alguien que conecte estrategia, diseño y ejecución.",
      en: "For businesses that want to rethink brand, product or customer experience and need someone who can connect strategy, design and execution."
    }
  }
];

export const homeServiceHighlights: ServiceItem[] = services.map((service) => ({
  slug: service.slug,
  title: service.title,
  description: service.shortDescription
}));

export const serviceItems: ServiceItem[] = services.map((service) => ({
  slug: service.slug,
  title: service.title,
  description: service.longDescription
}));

export const metrics: MetricItem[] = [
  { value: "10+", label: { es: "Años de experiencia", en: "Years of experience" } },
  { value: "50+", label: { es: "Proyectos realizados", en: "Projects completed" } },
  { value: "20+", label: { es: "Marcas colaboradoras", en: "Collaborating brands" } }
];

export const contactDetails: ContactDetails = {
  email: siteConfig.email,
  phone: siteConfig.phone,
  location: siteConfig.location
};

export const socialLinks = siteConfig.socialLinks;
export const socialPlaceholders = socialLinks;

export const aboutBio = [
  {
    es: "Diego Carreras es un director creativo que trabaja en la intersección entre estrategia de marca, experiencia espacial, pensamiento de producto y narrativa visual.",
    en: "Diego Carreras is a creative director working at the intersection of brand strategy, spatial experience, product thinking and visual storytelling."
  },
  {
    es: "Su enfoque combina sensibilidad editorial de alto nivel con disciplina comercial, ayudando a las marcas a pasar de ideas difusas a conceptos más sólidos, lanzamientos más fuertes y una presencia pública más memorable.",
    en: "His approach combines high-end editorial sensitivity with commercial discipline, helping brands move from loose ideas to sharper concepts, stronger launches and more memorable public presence."
  },
  {
    es: "Del concepto a la campaña, de la identidad al espacio, construye mundos coherentes que se sienten intencionales, premium y listos para el mercado.",
    en: "From concept to campaign, from identity to space, he builds coherent worlds that feel intentional, premium and ready for market."
  }
];

export const aboutPreview = {
  es: "Combino pensamiento estratégico, sensibilidad estética y tecnologías emergentes para desarrollar soluciones relevantes que generan impacto real.",
  en: "I combine strategic thinking, aesthetic sensitivity and emerging technologies to develop relevant solutions that generate real impact."
};

export const airtisanHighlight = {
  eyebrow: { es: "Airtisan Studio", en: "Airtisan Studio" },
  title: {
    es: "Creatividad expandida para interiorismo, arquitectura y producto.",
    en: "Expanded creativity for interiors, architecture and product."
  },
  description: {
    es: "Airtisan Studio canaliza el método creativo con IA de Diego hacia un desarrollo conceptual más rápido, sistemas visuales más precisos y una producción de contenido más escalable.",
    en: "Airtisan Studio channels Diego's AI-led creative method into faster concept development, sharper visual systems and more scalable content production."
  },
  link: "/projects/airtisan-studio"
};
