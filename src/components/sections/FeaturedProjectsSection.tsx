import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { featuredProjects } from "../../data/projects";
import { cn } from "../../lib/utils";
import { ProjectCard } from "../projects/ProjectCard";
import { SectionHeading } from "../ui/SectionHeading";

export function FeaturedProjectsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const updateScrollState = () => {
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      setCanScrollLeft(carousel.scrollLeft > 8);
      setCanScrollRight(carousel.scrollLeft < maxScrollLeft - 8);
    };

    updateScrollState();
    carousel.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      carousel.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollCarousel = (direction: "left" | "right") => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    carousel.scrollBy({
      left: direction === "right" ? carousel.clientWidth * 0.82 : carousel.clientWidth * -0.82,
      behavior: "smooth"
    });
  };

  return (
    <section className="section-dark">
      <div className="section-shell border-x border-white/10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured projects"
            title="Selected work across brand identity, spaces, campaigns and product storytelling."
            tone="dark"
            className="motion-fade-up"
          />
          <div className="motion-fade-up motion-delay-1 flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              disabled={!canScrollLeft}
              aria-label="Previous projects"
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border border-white/14 text-lg text-white transition",
                canScrollLeft ? "hover:border-white/28 hover:bg-white/8" : "cursor-not-allowed border-white/8 text-white/28"
              )}
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              disabled={!canScrollRight}
              aria-label="Next projects"
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border border-white/14 text-lg text-white transition",
                canScrollRight ? "hover:border-white/28 hover:bg-white/8" : "cursor-not-allowed border-white/8 text-white/28"
              )}
            >
              →
            </button>
            <Link to="/projects" className="ml-2 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-white/74 hover:text-white">
              View all projects
            </Link>
          </div>
        </div>
        <div className="motion-fade-in motion-delay-2 mt-12 overflow-hidden border-y border-white/10 py-8 sm:py-10">
          <div
            ref={carouselRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pr-4 sm:gap-6 lg:pr-8"
          >
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                tone="dark"
                showSummary
                variant="carousel"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
