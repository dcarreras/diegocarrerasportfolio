import { Link } from "react-router-dom";
import { buttonStyles } from "../ui/Button";

export function HeroSection() {
  return (
    <section className="section-dark">
      <div className="container-shell">
        <div className="grid gap-0 lg:grid-cols-[0.44fr_0.56fr]">
          <div className="motion-sheen flex min-h-[32rem] flex-col justify-center border-x border-white/10 px-8 py-12 sm:px-10 lg:min-h-[40rem] lg:px-12">
            <p className="eyebrow motion-fade-up text-white/62">Creative Director</p>
            <p className="motion-fade-up motion-delay-1 mt-6 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-white">
              Diego Carreras
            </p>
            <h1 className="motion-fade-up motion-delay-2 mt-10 max-w-xl text-[2.8rem] font-medium leading-[1.08] tracking-[-0.05em] text-white sm:text-[3.8rem] lg:text-[4.35rem]">
              Creative direction for brands that turn ideas into memorable experiences.
            </h1>
            <p className="motion-fade-up motion-delay-3 mt-8 max-w-md text-base leading-8 text-white/74">
              Brand strategy. Spaces. Products. AI-powered visual storytelling.
            </p>
            <div className="motion-fade-up motion-delay-4 mt-10">
              <Link to="/projects" className={buttonStyles("inverse", "lg")}>
                View projects
              </Link>
            </div>
          </div>

          <div className="motion-fade-in overflow-hidden border-r border-white/10">
            <img
              src="/images/sulion-showroom-cover.svg"
              alt="Interior placeholder for Sulion Showroom."
              className="motion-image-drift h-full min-h-[26rem] w-full object-cover lg:min-h-[40rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
