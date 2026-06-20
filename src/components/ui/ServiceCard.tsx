import type { ServiceItem } from "../../types/site";
import { getLocalizedText } from "../../i18n";
import { useLanguage } from "../../i18n/LanguageProvider";

interface ServiceCardProps {
  index: number;
  service: ServiceItem;
}

export function ServiceCard({ index, service }: ServiceCardProps) {
  const { language } = useLanguage();

  return (
    <article className="surface-panel flex h-full flex-col justify-between gap-6 p-7 sm:p-8">
      <div>
        <p className="text-[0.68rem] uppercase tracking-[0.14em] text-muted">{String(index + 1).padStart(2, "0")}</p>
        <h3 className="mt-5 text-2xl font-medium tracking-[-0.03em] text-ink">{getLocalizedText(service.title, language)}</h3>
      </div>
      <p className="max-w-xl text-sm leading-7 text-muted">{getLocalizedText(service.description, language)}</p>
    </article>
  );
}
