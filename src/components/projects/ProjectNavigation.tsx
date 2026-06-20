import { Link } from "react-router-dom";
import type { Project } from "../../types/project";
import { cn } from "../../lib/utils";

interface ProjectNavigationProps {
  previousProject?: Project;
  nextProject?: Project;
}

function ProjectLink({
  direction,
  project
}: {
  direction: "Previous" | "Next";
  project?: Project;
}) {
  if (!project) {
    return <div className="hidden border border-dashed border-line p-8 text-sm text-muted lg:block">No {direction.toLowerCase()} project</div>;
  }

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={cn(
        "surface-panel flex min-h-[11rem] flex-col justify-between p-8 hover:border-ink",
        direction === "Next" && "lg:text-right"
      )}
    >
      <p className="text-[0.68rem] uppercase tracking-[0.14em] text-muted">{direction} project</p>
      <div>
        <h3 className="text-2xl font-medium uppercase tracking-[-0.04em] text-ink">{project.title}</h3>
        <p className="mt-3 text-sm text-muted">
          {project.category} / {project.year}
        </p>
      </div>
    </Link>
  );
}

export function ProjectNavigation({ nextProject, previousProject }: ProjectNavigationProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <ProjectLink direction="Previous" project={previousProject} />
      <ProjectLink direction="Next" project={nextProject} />
    </div>
  );
}
