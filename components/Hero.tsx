import { DOCTOR, overallRating } from "@/lib/data";
import { StarRating } from "./StarRating";

export function Hero() {
  const overall = overallRating();

  return (
    <header className="bg-surface text-white">
      <div className="container-content py-16 sm:py-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand">
          Verified Patient Reviews
        </p>
        <h1 className="max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">
          What real patients say about <span className="whitespace-nowrap">{DOCTOR.name}</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/75">{DOCTOR.tagline}</p>

        {overall && (
          <div className="mt-8 inline-flex flex-wrap items-center gap-3 rounded-xl bg-white/10 px-5 py-4">
            <StarRating value={overall.avg} size={22} />
            <span className="text-2xl font-semibold">{overall.avg.toFixed(1)}</span>
            {overall.count > 0 && (
              <span className="text-white/70">
                across {overall.count.toLocaleString()}+ verified reviews
              </span>
            )}
          </div>
        )}

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={DOCTOR.bookingUrl}
            className="rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brandDark"
          >
            Book a Discovery Call
          </a>
          <a
            href="#reviews"
            className="rounded-lg border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Read the reviews
          </a>
        </div>
      </div>
    </header>
  );
}
