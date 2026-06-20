import { Button } from "../components/ui/Button";
import { MetricsSection } from "../components/ui/MetricsSection";
import { PageIntro } from "../components/ui/PageIntro";
import { Seo } from "../components/ui/Seo";
import { aboutBio, metrics } from "../data/site";

export function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="About Diego Carreras, a creative director working across brand strategy, spaces, product and editorial storytelling."
      />
      <PageIntro
        eyebrow="About Diego"
        title="A creative director specialized in brand strategy, retail spaces, product design and visual innovation."
        description="A practice shaped by strategic thinking, aesthetic sensitivity and a strong understanding of how brands need to perform in the real world."
      />
      <section className="section-shell pt-0 pb-20 sm:pb-24">
        <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
          <div>
            <img
              src="/images/diegoprofile.png"
              alt="Portrait of Diego Carreras."
              className="aspect-[4/5] h-full w-full object-cover object-top"
            />
          </div>
          <div className="space-y-8">
            <div className="grid gap-8 lg:grid-cols-[0.56fr_0.44fr]">
              <div className="space-y-5 text-sm leading-7 text-muted sm:text-base">
                {aboutBio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="space-y-6">
                <p className="text-sm leading-7 text-muted">
                  My team and I combine strategic thinking, aesthetic sensitivity and emerging technologies such as AI to
                  develop relevant and memorable solutions.
                </p>
                <Button variant="secondary" size="lg">
                Download CV
                </Button>
              </div>
            </div>
            <MetricsSection items={metrics} />
          </div>
        </div>
      </section>
    </>
  );
}
