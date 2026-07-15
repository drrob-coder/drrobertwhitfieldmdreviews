import { DOCTOR } from "@/lib/data";

export function TrustBar() {
  return (
    <section className="border-b border-line bg-surfaceAlt">
      <div className="container-content py-8">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {DOCTOR.credentials.map((c) => (
            <li
              key={c}
              className="flex items-start gap-2 text-sm font-medium text-white/80"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                className="mt-0.5 shrink-0 text-brand"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M8 13.2l-3.2-3.2-1.4 1.4L8 16 17 7l-1.4-1.4z"
                />
              </svg>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
