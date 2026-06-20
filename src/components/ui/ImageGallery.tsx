import type { ProjectImage } from "../../types/project";

interface ImageGalleryProps {
  images: ProjectImage[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {images.map((image) => (
        <figure key={image.src} className="surface-panel overflow-hidden">
          <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
          <figcaption className="border-t border-line px-6 py-5 text-sm leading-7 text-muted">{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
