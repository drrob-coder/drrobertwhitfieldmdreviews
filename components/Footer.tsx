import { DOCTOR } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface text-white/70">
      <div className="container-content py-10 text-sm">
        <p className="font-semibold text-white">{DOCTOR.name}</p>
        <p className="mt-1">{DOCTOR.tagline}</p>
        <p className="mt-4 max-w-3xl text-xs text-white/45">
          Patient reviews are shown as attributed excerpts with links to their
          original sources. Individual results vary; reviews reflect the experience
          of the individual patient and are not a guarantee of outcome.
        </p>
        <p className="mt-4 text-xs text-white/45">
          © {DOCTOR.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
