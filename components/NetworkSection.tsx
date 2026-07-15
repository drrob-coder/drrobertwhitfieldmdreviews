import { DOCTOR } from "@/lib/data";

export function NetworkSection() {
  return (
    <section className="section">
      <div className="container-content">
        <h2 className="font-serif text-3xl sm:text-4xl">Learn more</h2>
        <p className="mt-3 max-w-2xl text-textSecondary">
          Explore {DOCTOR.name}&rsquo;s practice, research, and recovery resources
          across the full network.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {DOCTOR.network.map((n) => (
            <a
              key={n.url}
              href={n.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-line bg-surface px-5 py-3 text-sm font-semibold text-white transition hover:border-brand hover:text-brand"
            >
              {n.label} →
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
