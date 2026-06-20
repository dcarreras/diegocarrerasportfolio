import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "primary" | "secondary" | "inverse" | "ghost";
type ButtonSize = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function buttonStyles(variant: ButtonVariant = "primary", size: ButtonSize = "md"): string {
  return cn(
    "inline-flex items-center justify-center border text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    size === "lg" ? "min-h-12 px-6" : "min-h-10 px-5",
    variant === "primary" && "border-charcoal bg-charcoal text-white hover:opacity-85",
    variant === "secondary" && "border-ink bg-transparent text-ink hover:bg-ink hover:text-white",
    variant === "inverse" && "border-white/60 bg-transparent text-white hover:border-white hover:bg-white hover:text-charcoal",
    variant === "ghost" && "border-transparent bg-transparent px-0 text-ink hover:opacity-70"
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, size = "md", type = "button", variant = "primary", ...props },
  ref
) {
  return <button ref={ref} type={type} className={cn(buttonStyles(variant, size), className)} {...props} />;
});
