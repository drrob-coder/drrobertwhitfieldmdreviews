# Dev Handoff — drrobertwhitfieldmdreviews.com

**What this is:** a new standalone marketing site that aggregates Dr. Whitfield's
verified patient reviews (attributed excerpts + links to each source), embeds
owned YouTube video testimonials and podcast patient stories, and cross-links to
the main + satellite domains. Purpose: consumer trust + LLM/AI search authority.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS — same family as the
other domains. No database, no runtime API keys, no env vars required. SSG-friendly.

**Status:** clean handoff. Nothing has been pushed or deployed. Build and ship
through the normal pipeline.

---

## 1. Build & verify locally

```bash
npm install
npm run build      # must build clean before shipping
npm run dev        # optional: preview at http://localhost:3000
```

## 2. Ship (normal pipeline)

1. Push to a new GitHub repo.
2. Create a new Vercel project from that repo (framework auto-detects as Next.js).
3. Point the domain `drrobertwhitfieldmdreviews.com` at it:
   Vercel → Project → Settings → Domains.

No build-time configuration needed beyond the defaults.

---

## 3. All content lives in ONE file: `lib/data.ts`

Editing the site = editing that file. No component changes are needed to add or
update any review, video, credential, or cross-link. The four data sections:

- `DOCTOR` — name, tagline, booking URL, credentials, network cross-links
- `REVIEW_SOURCES` — each platform: rating, review count, blurb, excerpts
- `VIDEO_TESTIMONIALS` — YouTube testimonial video IDs (+ optional playlist ID)
- `PATIENT_STORIES` — YouTube podcast/interview IDs (+ optional playlist ID)

Review excerpts are short, attributed, and link back to the source (never full
copied reviews). Keep this pattern for any additions — it is ToS-safe and better
for SEO/AI. A YouTube ID is the part after `v=` or `youtu.be/`.

---

## 4. Current content (already loaded)

Review platforms (hero shows an auto-computed aggregate ≈ 4.8★ / ~598 reviews):

| Source | Rating | Reviews | Excerpts shown |
|---|---|---|---|
| Google | 4.9 | 155 | 9 |
| RealPatientRatings | 4.7 | 266 | 8 |
| RealSelf | 4.8 | 74 | 2 |
| Healthgrades | 4.8 | 71 | 4 |
| WebMD Care | 5.0 | 32 | 1 |

- Video testimonials: 4 (Brooke Ochojski, Casey, Molly, Tiffany Blackmon)
- Patient stories (podcast): 6 episodes

**Yelp is intentionally excluded** — do not add it.

---

## 5. Open TODOs (marked in `lib/data.ts`, none block launch)

- `DOCTOR.bookingUrl` — confirm the correct discovery-call URL (placeholder set).
- RealPatientRatings `profileUrl` — replace homepage link with the exact profile URL.
- RateMDs and Zocdoc — profile cards exist but have no rating/excerpts yet (optional).
- A few video-testimonial summaries are generic pending the patient's real story
  (safe as-is; enrich later for stronger SEO).

---

## 6. Technical notes

- Structured data (JSON-LD) in `components/Schema.tsx`: a `Physician` entity
  (with `sameAs` to every profile + owned domain) and `VideoObject` for owned
  videos. Intentionally NO self-serve review/AggregateRating markup — Google
  disallows first-party review-rating rich results; this is deliberate, not a bug.
- External review links use `rel="nofollow"`.
- Excerpts without a per-review permalink use a non-URL sentinel in `sourceUrl`;
  the card falls back to that platform's `profileUrl` (see `ReviewsSection.tsx`).
- `app/robots.ts` and `app/sitemap.ts` are included; update the domain if it changes.
