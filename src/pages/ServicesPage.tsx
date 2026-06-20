import { ServiceCard } from "../components/ui/ServiceCard";
import { PageIntro } from "../components/ui/PageIntro";
import { Seo } from "../components/ui/Seo";
import { serviceItems } from "../data/site";

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="Creative direction, brand strategy, spaces, AI innovation and editorial content shaped for ambitious brands."
      />
      <PageIntro
        eyebrow="Services"
        title="A focused creative practice for brands that need direction, precision and stronger market presence."
        description="Each engagement combines strategy, design thinking and premium execution without unnecessary complexity."
      />
      <section className="section-shell pt-0 pb-20 sm:pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {serviceItems.map((service, index) => (
            <ServiceCard key={service.slug} index={index} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}
