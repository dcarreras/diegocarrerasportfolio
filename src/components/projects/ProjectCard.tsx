import { Link } from "react-router-dom";
import type { Project } from "../../types/project";
import { cn } from "../../lib/utils";

interface ProjectCardProps {
  project: Project;
  tone?: "light" | "dark";
  showSummary?: boolean;
  variant?: "default" | "carousel";
}

export function ProjectCard({ project, showSummary = true, tone = "light", variant = "default" }: ProjectCardProps) {
  const projectLabel =
    project.category === "Spaces"
      ? "Retail Spaces"
      : project.category === "AI"
        ? "AI Campaign"
        : project.category === "Branding"
          ? "Brand Identity"
          : project.category === "Product"
            ? "Product Design"
            : "Editorial";

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={cn(
        "group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        variant === "carousel" && "min-w-[84vw] snap-start sm:min-w-[31rem] lg:min-w-[36rem]",
        tone === "dark" && "focus-visible:ring-white focus-visible:ring-offset-charcoal"
      )}
    >
      <article
        className={cn(
          "flex h-full flex-col",
          variant === "carousel" &&
            "overflow-hidden border border-white/12 bg-white/[0.03] transition duration-300 group-hover:-translate-y-1 group-hover:border-white/24 group-hover:bg-white/[0.05]"
        )}
      >
        <img
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          className={cn(
            "w-full object-cover transition duration-500 group-hover:opacity-90",
            variant === "carousel" ? "aspect-[5/4] group-hover:scale-[1.02]" : "aspect-[4/3]"
          )}
          loading="lazy"
        />
        <div className={cn("flex flex-1 flex-col gap-2", variant === "carousel" ? "px-5 py-5 sm:px-6" : "pt-4")}>
          <div className={cn("flex flex-wrap items-center gap-3 text-[0.68rem] uppercase tracking-[0.14em]", tone === "dark" ? "text-white/62" : "text-muted")}>
            <span>{projectLabel}</span>
            <span className={variant === "carousel" ? "text-white/30" : ""}>/</span>
            <span>{project.year}</span>
          </div>
          <h3
            className={cn(
              "font-medium uppercase tracking-[-0.02em]",
              variant === "carousel" ? "text-[1.5rem] leading-[0.95] sm:text-[1.8rem]" : "text-lg",
              tone === "dark" ? "text-white" : "text-ink"
            )}
          >
            {project.title}
          </h3>
          {showSummary ? (
            <p
              className={cn(
                variant === "carousel" ? "max-w-[32rem] pt-2 text-sm leading-7" : "pt-1 text-sm leading-6",
                tone === "dark" ? "text-white/76" : "text-muted"
              )}
            >
              {project.summary}
            </p>
          ) : null}
        </div>
      </article>
    </Link>
  );
}
