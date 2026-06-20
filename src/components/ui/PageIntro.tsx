interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageIntro({ description, eyebrow, title }: PageIntroProps) {
  return (
    <section className="section-shell pt-20 sm:pt-24">
      <div className="max-w-3xl">
        <p className="eyebrow text-muted">{eyebrow}</p>
        <h1 className="mt-4 text-[2.4rem] font-medium leading-[1.04] tracking-[-0.05em] text-ink sm:text-[3.4rem]">{title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">{description}</p>
      </div>
    </section>
  );
}
