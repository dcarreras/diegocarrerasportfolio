import { AboutPreviewSection } from "../components/sections/AboutPreviewSection";
import { ContactCtaSection } from "../components/sections/ContactCtaSection";
import { FeaturedProjectsSection } from "../components/sections/FeaturedProjectsSection";
import { HeroSection } from "../components/sections/HeroSection";
import { ServicesOverviewSection } from "../components/sections/ServicesOverviewSection";
import { StudioHighlightSection } from "../components/sections/StudioHighlightSection";
import { Seo } from "../components/ui/Seo";
import { siteMeta } from "../data/site";

export function HomePage() {
  return (
    <>
      <Seo title="Creative Director" description={siteMeta.description} />
      <HeroSection />
      <ServicesOverviewSection />
      <FeaturedProjectsSection />
      <StudioHighlightSection />
      <AboutPreviewSection />
      <ContactCtaSection />
    </>
  );
}
