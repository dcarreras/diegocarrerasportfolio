import type { MetricItem } from "../../types/site";

interface MetricsSectionProps {
  items: MetricItem[];
}

export function MetricsSection({ items }: MetricsSectionProps) {
  return (
    <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="bg-surface px-8 py-10">
          <p className="text-4xl font-medium tracking-[-0.05em] text-ink sm:text-5xl">{item.value}</p>
          <p className="mt-3 text-[0.72rem] uppercase tracking-[0.12em] text-muted">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
