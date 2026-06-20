import { Link } from "react-router-dom";
import { airtisanHighlight } from "../../data/site";
import { getLocalizedText } from "../../i18n";
import { useLanguage } from "../../i18n/LanguageProvider";
import { buttonStyles } from "../ui/Button";

export function StudioHighlightSection() {
  const { language } = useLanguage();

  return (
    <section className="section-light">
      <div className="section-shell border-x border-line bg-paper">
        <div className="grid gap-0 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="motion-sheen flex flex-col justify-center border-y border-line px-8 py-10 sm:px-10 lg:border-r lg:border-y-0 lg:px-12">
            <p className="eyebrow motion-fade-up text-muted">{getLocalizedText(airtisanHighlight.eyebrow, language)}</p>
            <h2 className="motion-fade-up motion-delay-1 mt-6 text-[2rem] font-medium leading-[1.08] tracking-[-0.05em] text-ink sm:text-[2.6rem]">
              {getLocalizedText(airtisanHighlight.title, language)}
            </h2>
            <p className="motion-fade-up motion-delay-2 mt-6 max-w-md text-sm leading-7 text-muted sm:text-base">
              {getLocalizedText(airtisanHighlight.description, language)}
            </p>
            <div className="motion-fade-up motion-delay-3 mt-8">
              <Link to={airtisanHighlight.link} className={buttonStyles("secondary", "lg")}>
                Discover more
              </Link>
            </div>
          </div>
          <div className="motion-fade-in overflow-hidden border-y border-line lg:border-y-0">
            <img
              src="/images/airtisan-studio-wave.svg"
              alt="Abstract light placeholder for Airtisan Studio."
              className="motion-image-drift h-full min-h-[22rem] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
