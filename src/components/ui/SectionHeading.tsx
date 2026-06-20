import { cn } from "../../lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  align = "left",
  className,
  description,
  eyebrow,
  tone = "light",
  title
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <p className={cn("eyebrow", tone === "dark" ? "text-white/68" : "text-muted")}>{eyebrow}</p> : null}
      <h2
        className={cn(
          "font-display text-[2.05rem] font-medium leading-[1.04] tracking-display sm:text-[2.65rem] lg:text-[3.15rem]",
          tone === "dark" ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 max-w-2xl text-sm leading-7 sm:text-base", tone === "dark" ? "text-white/74" : "text-muted")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
