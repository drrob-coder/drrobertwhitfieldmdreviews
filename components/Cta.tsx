import { DOCTOR } from "@/lib/data";

export function Cta() {
  return (
    <section className="bg-brand text-white">
      <div className="container-content py-16 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl">
          Ready to talk with {DOCTOR.name}?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/85">
          Join patients from 40+ states and 15 countries. Schedule a discovery call
          to discuss your options.
        </p>
        <a
          href={DOCTOR.bookingUrl}
          className="mt-8 inline-block rounded-lg bg-ink px-8 py-3.5 font-semibold text-white transition hover:bg-surface"
        >
          Book a Discovery Call
        </a>
      </div>
    </section>
  );
}
