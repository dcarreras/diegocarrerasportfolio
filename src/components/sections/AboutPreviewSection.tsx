import { Link } from "react-router-dom";
import { aboutPreview } from "../../data/site";
import { buttonStyles } from "../ui/Button";

export function AboutPreviewSection() {
  return (
    <section className="section-dark">
      <div className="container-shell">
        <div className="grid gap-0 border-x border-white/10 lg:grid-cols-[0.44fr_0.56fr]">
          <div className="border-b border-white/10 lg:border-b-0">
            <img
              src="/images/diegoprofile.png"
              alt="Portrait of Diego Carreras."
              className="h-full min-h-[24rem] w-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-10 sm:px-10 lg:px-12">
            <p className="eyebrow text-white/62">About Diego Carreras</p>
            <h2 className="mt-6 text-[2rem] font-medium leading-[1.08] tracking-[-0.05em] text-white sm:text-[2.7rem]">
              Creative Director with 10+ years of experience in branding, spaces, product and innovation.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/74 sm:text-base">{aboutPreview}</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/74 sm:text-base">
              I combine strategic thinking, aesthetic sensitivity and emerging technologies to develop relevant solutions that
              generate real impact.
            </p>
            <div className="mt-8">
              <Link to="/about" className={buttonStyles("inverse", "lg")}>
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
