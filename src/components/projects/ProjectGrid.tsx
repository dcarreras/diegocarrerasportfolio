import type { Project } from "../../types/project";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  tone?: "light" | "dark";
  layout?: "listing" | "featured";
  showSummary?: boolean;
}

export function ProjectGrid({
  projects,
  layout = "listing",
  showSummary = true,
  tone = "light"
}: ProjectGridProps) {
  return (
    <div className={layout === "featured" ? "grid gap-8 md:grid-cols-2 xl:grid-cols-4" : "grid gap-10 md:grid-cols-2 xl:grid-cols-3"}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} tone={tone} showSummary={showSummary} />
      ))}
    </div>
  );
}
