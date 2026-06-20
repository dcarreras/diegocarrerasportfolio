import { homeServiceHighlights } from "../../data/site";
import { getLocalizedText } from "../../i18n";
import { useLanguage } from "../../i18n/LanguageProvider";

function ServiceIcon({ index }: { index: number }) {
  const icons = [
    <svg key="creative" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 3v18M3 12h18" />
      <circle cx="12" cy="12" r="6.5" />
    </svg>,
    <svg key="brand" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M6 6h12v12H6z" />
      <path d="M12 6v12M6 12h12" />
    </svg>,
    <svg key="spaces" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 8 12 4l8 4v10l-8 4-8-4V8Z" />
      <path d="M12 4v18M4 8l8 4 8-4" />
    </svg>,
    <svg key="ai" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  ];

  return <span className="text-ink">{icons[index % icons.length]}</span>;
}

export function ServicesOverviewSection() {
  const { language } = useLanguage();

  return (
    <section className="section-light">
      <div className="section-shell border-x border-line bg-paper">
        <div className="grid gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-start">
          <div>
            <h2 className="motion-fade-up text-[2.2rem] font-medium leading-[1.08] tracking-[-0.05em] text-ink sm:text-[2.8rem]">
              What I do
            </h2>
          </div>
          <p className="motion-fade-up motion-delay-1 max-w-md text-sm leading-7 text-muted sm:text-base">
            I help brands and companies build relevant experiences through strategy, design and innovation.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 xl:grid-cols-5">
          {homeServiceHighlights.map((service, index) => (
            <article
              key={service.slug}
              className={index === 0 ? "motion-fade-up motion-delay-1" : index === 1 ? "motion-fade-up motion-delay-2" : index === 2 ? "motion-fade-up motion-delay-3" : "motion-fade-up motion-delay-4"}
            >
              <div className="mb-5">{ServiceIcon({ index })}</div>
              <h3 className="text-base font-medium tracking-[-0.03em] text-ink">{getLocalizedText(service.title, language)}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{getLocalizedText(service.description, language)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
