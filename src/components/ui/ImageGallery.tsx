import type { ProjectImage } from "../../types/project";
import { getLocalizedText } from "../../i18n";
import { useLanguage } from "../../i18n/LanguageProvider";

interface ImageGalleryProps {
  images: ProjectImage[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const { language } = useLanguage();

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {images.map((image) => (
        <figure key={image.src} className="surface-panel overflow-hidden">
          <img src={image.src} alt={getLocalizedText(image.alt, language)} className="h-full w-full object-cover" loading="lazy" />
          <figcaption className="border-t border-line px-6 py-5 text-sm leading-7 text-muted">{getLocalizedText(image.caption, language)}</figcaption>
        </figure>
      ))}
    </div>
  );
}
