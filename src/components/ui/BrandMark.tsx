import { cn } from "../../lib/utils";

interface BrandMarkProps {
  tone?: "light" | "dark";
  className?: string;
}

export function BrandMark({ className, tone = "dark" }: BrandMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center border text-sm font-semibold tracking-[-0.08em]",
        tone === "dark" ? "border-white/20 text-white" : "border-ink/20 text-ink",
        className
      )}
    >
      DC
    </span>
  );
}
