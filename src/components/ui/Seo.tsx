import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteMeta } from "../../data/site";

interface SeoProps {
  title: string;
  description: string;
}

function setMetaTag(attribute: "name" | "property", key: string, content: string): void {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

export function Seo({ description, title }: SeoProps) {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = `${title} | Diego Carreras`;
    const pageUrl = new URL(location.pathname, siteMeta.siteUrl).toString();

    document.title = fullTitle;

    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", pageUrl);
    setMetaTag("property", "og:image", siteMeta.socialImage);
  }, [description, location.pathname, title]);

  return null;
}
