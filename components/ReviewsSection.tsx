import { REVIEW_SOURCES, hasExcerpts } from "@/lib/data";
import { StarRating } from "./StarRating";

export function ReviewsSection() {
  return (
    <section id="reviews" className="section">
      <div className="container-content">
        <h2 className="font-serif text-3xl sm:text-4xl">
          Reviews from every trusted source
        </h2>
        <p className="mt-3 max-w-2xl text-textSecondary">
          Verified patient reviews aggregated from the platforms that matter most —
          each quote shown as a short excerpt with a link to the original review on
          its source.
        </p>

        {!hasExcerpts && (
          <p className="mt-6 rounded-lg border border-dashed border-line bg-surface px-5 py-4 text-sm text-textSecondary">
            Reviews will appear here once excerpts are added in{" "}
            <code>lib/data.ts</code>. Each platform card and its outbound link is
            already live.
          </p>
        )}

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {REVIEW_SOURCES.map((source) => (
            <article
              key={source.key}
              className="flex flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{source.name}</h3>
                  <p className="mt-1 text-sm text-textSecondary">{source.blurb}</p>
                </div>
                {typeof source.rating === "number" && (
                  <div className="shrink-0 text-right">
                    <StarRating value={source.rating} />
                    <div className="mt-1 text-sm font-semibold">
                      {source.rating.toFixed(1)}
                      {source.reviewCount ? (
                        <span className="font-normal text-textSecondary">
                          {" "}
                          · {source.reviewCount.toLocaleString()}
                        </span>
                      ) : null}
                    </div>
                  </div>
                )}
              </div>

              {source.excerpts.length > 0 && (
                <ul className="mt-5 space-y-4">
                  {source.excerpts.map((ex, i) => {
                    const href =
                      ex.sourceUrl && ex.sourceUrl.startsWith("http")
                        ? ex.sourceUrl
                        : source.profileUrl;
                    return (
                    <li
                      key={i}
                      className="rounded-xl bg-surfaceAlt px-4 py-3 text-sm"
                    >
                      <StarRating value={ex.rating} size={14} />
                      <p className="mt-2 text-white/85">&ldquo;{ex.quote}&rdquo;</p>
                      <div className="mt-2 flex items-center justify-between text-xs text-textSecondary">
                        <span>
                          — {ex.author}
                          {ex.date ? ` · ${ex.date}` : ""}
                        </span>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="font-medium text-brand hover:underline"
                        >
                          Read on {source.name} →
                        </a>
                      </div>
                    </li>
                    );
                  })}
                </ul>
              )}

              <a
                href={source.profileUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="mt-5 inline-block text-sm font-semibold text-brand hover:underline"
              >
                See all reviews on {source.name} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
