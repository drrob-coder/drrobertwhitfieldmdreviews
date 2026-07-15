export function StarRating({
  value,
  size = 18
}: {
  value: number;
  size?: number;
}) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <span
      className="inline-flex items-center gap-0.5"
      aria-label={`${value} out of 5 stars`}
    >
      {stars.map((s) => {
        const fill = Math.max(0, Math.min(1, value - (s - 1)));
        return (
          <svg
            key={s}
            width={size}
            height={size}
            viewBox="0 0 20 20"
            className="shrink-0"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={`star-${s}-${fill}`}>
                <stop offset={`${fill * 100}%`} stopColor="#C9A84C" />
                <stop offset={`${fill * 100}%`} stopColor="#3a3a3a" />
              </linearGradient>
            </defs>
            <path
              d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77 4.8 17.5l.99-5.79L1.58 7.62l5.82-.85L10 1.5z"
              fill={`url(#star-${s}-${fill})`}
            />
          </svg>
        );
      })}
    </span>
  );
}
