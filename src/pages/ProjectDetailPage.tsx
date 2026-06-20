import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Seo } from "../components/ui/Seo";
import { ProjectNavigation } from "../components/projects/ProjectNavigation";
import { buttonStyles } from "../components/ui/Button";
import { cn } from "../lib/utils";
import { getProjectBySlug, sortedProjects } from "../data/projects";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/projects" replace />;
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/not-found" replace />;
  }

  const projectIndex = sortedProjects.findIndex((entry) => entry.slug === project.slug);
  const previousProject = projectIndex > 0 ? sortedProjects[projectIndex - 1] : undefined;
  const nextProject = projectIndex >= 0 ? sortedProjects[projectIndex + 1] : undefined;
  const projectImages = [project.coverImage, ...project.gallery];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [project.slug]);

  const selectedImage = projectImages[selectedImageIndex] ?? project.coverImage;
  const imageCount = projectImages.length;

  const goToPreviousImage = () => {
    setSelectedImageIndex((current) => (current === 0 ? imageCount - 1 : current - 1));
  };

  const goToNextImage = () => {
    setSelectedImageIndex((current) => (current === imageCount - 1 ? 0 : current + 1));
  };

  return (
    <>
      <Seo title={project.title} description={project.summary} />

      <section className="section-shell pt-16 sm:pt-20">
        <div className="mb-8">
          <Link to="/projects" className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-muted hover:text-ink">
            Back to projects
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.6fr_0.4fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-[0.68rem] uppercase tracking-[0.12em] text-muted">
              <span>{project.category === "Spaces" ? "Retail Spaces" : project.category}</span>
              <span>/</span>
              <span>{project.year}</span>
            </div>
            <h1 className="mt-5 max-w-3xl text-[2.6rem] font-medium uppercase leading-[1] tracking-[-0.05em] text-ink sm:text-[3.6rem]">
              {project.title}
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base">{project.intro}</p>
          </div>

          <div className="grid gap-6 text-sm leading-7 text-muted">
            {project.facts?.length ? (
              <div>
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-ink">Project info</p>
                <div className="mt-3 grid gap-3">
                  {project.facts.map((fact) => (
                    <div key={`${fact.label}-${fact.value}`} className="grid gap-1 sm:grid-cols-[6rem_1fr] sm:gap-4">
                      <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-muted">{fact.label}</p>
                      {fact.href ? (
                        <a href={fact.href} target="_blank" rel="noreferrer" className="hover:text-ink">
                          {fact.value}
                        </a>
                      ) : (
                        <p>{fact.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
            {project.resources?.length ? (
              <div>
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-ink">Resources</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {project.resources.map((resource) => (
                    <a
                      key={resource.href}
                      href={resource.href}
                      download={resource.download}
                      className={buttonStyles("secondary", "md")}
                    >
                      {resource.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
            <div>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-ink">Services</p>
              <p className="mt-3">{project.services.join(", ")}</p>
            </div>
            <div>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-ink">Challenge</p>
              <p className="mt-3">{project.challenge}</p>
            </div>
            <div>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-ink">Result</p>
              <p className="mt-3">{project.result}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-5">
          <figure className="grid gap-3">
            <img src={selectedImage.src} alt={selectedImage.alt} className="aspect-[16/10] w-full object-cover" />
            <figcaption className="max-w-2xl text-sm leading-7 text-muted">{selectedImage.caption}</figcaption>
          </figure>
          <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
            {projectImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedImageIndex(index)}
                className={cn(
                  "overflow-hidden border border-line text-left transition hover:border-ink",
                  selectedImageIndex === index && "border-ink"
                )}
                aria-label={`View image ${index + 1} of ${imageCount}`}
              >
                <img src={image.src} alt={image.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 pt-1 text-[0.68rem] uppercase tracking-[0.12em] text-muted">
            <button type="button" onClick={goToPreviousImage} className="px-2 py-1 hover:text-ink" aria-label="Previous image">
              ←
            </button>
            <span>{`${String(selectedImageIndex + 1).padStart(2, "0")}/${String(imageCount).padStart(2, "0")}`}</span>
            <button type="button" onClick={goToNextImage} className="px-2 py-1 hover:text-ink" aria-label="Next image">
              →
            </button>
          </div>
        </div>
      </section>

      <section className="section-shell pb-20 sm:pb-24">
        <ProjectNavigation previousProject={previousProject} nextProject={nextProject} />
      </section>
    </>
  );
}
