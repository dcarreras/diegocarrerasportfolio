import { useState } from "react";
import { ProjectGrid } from "../components/projects/ProjectGrid";
import { PageIntro } from "../components/ui/PageIntro";
import { Seo } from "../components/ui/Seo";
import { projectFilters } from "../data/site";
import { sortedProjects } from "../data/projects";
import { cn } from "../lib/utils";
import type { ProjectFilter } from "../types/project";

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const filteredProjects =
    activeFilter === "All" ? sortedProjects : sortedProjects.filter((project) => project.category === activeFilter);

  return (
    <>
      <Seo
        title="Projects"
        description="Selected projects across branding, spaces, AI visual storytelling, editorial systems and product design."
      />
      <PageIntro
        eyebrow="Projects"
        title="A selection of work across branding, spaces, products, campaigns and visual experiences."
        description="Projects structured around clarity, atmosphere and commercially credible execution."
      />
      <section className="section-shell pt-0 pb-20 sm:pb-24">
        <div className="mb-10 flex flex-wrap gap-2">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "border px-4 py-2 text-[0.65rem] font-medium uppercase tracking-[0.12em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
                activeFilter === filter
                  ? "border-charcoal bg-charcoal text-white"
                  : "border-line bg-transparent text-muted hover:border-ink hover:text-ink"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
        <ProjectGrid projects={filteredProjects} showSummary={false} />
      </section>
    </>
  );
}
