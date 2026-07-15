# drrobertwhitfieldmdreviews.com

A standalone Next.js site that aggregates verified patient reviews (as attributed
excerpts + links), embeds owned YouTube video testimonials and full patient
stories, and cross-links back to the main + satellite domains — built for
consumer trust and LLM/AI authority.

Stack: **Next.js 14 (App Router) · TypeScript · Tailwind CSS** — same family as
the other domains, deploys to Vercel.

---

## The only file you edit to go live: `lib/data.ts`

Everything on the page is driven by that one file. Fill in four sections:

1. **DOCTOR** — booking URL, credentials, cross-links (mostly pre-filled).
2. **REVIEW_SOURCES** — for each of the 10 platforms: your profile URL, your
   rating/count, and a few **attributed excerpts** (1–2 sentences + first name +
   link to the original review). **Do not paste full copied reviews** — excerpts
   with attribution keep us clean legally and read stronger to AI.
3. **VIDEO_TESTIMONIALS** — YouTube video IDs (or a single playlist ID).
4. **PATIENT_STORIES** — YouTube podcast/interview IDs (or a playlist ID).

A YouTube ID is the part after `v=` or `youtu.be/`. Example:
`https://youtu.be/dQw4w9WgXcQ` → `dQw4w9WgXcQ`.

No YouTube API key is required — embeds are plain iframes.

---

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel

```bash
npm install -g vercel   # if not installed
vercel                  # first deploy (follow prompts)
vercel --prod           # production deploy
```

Then point the `drrobertwhitfieldmdreviews.com` domain at the Vercel project in
the Vercel dashboard → Project → Settings → Domains.

---

## What's already handled

- Responsive design, light theme, clinical navy/teal palette.
- Aggregate-rating hero (auto-computed from the ratings you enter).
- Credentials trust bar.
- Review cards per source with outbound links + `nofollow` on external review links.
- YouTube testimonial + patient-story sections (individual videos OR a playlist).
- Cross-links to your network of domains.
- JSON-LD structured data: `Physician` entity (with `sameAs` to every profile +
  domain) and `VideoObject` for owned videos. **No self-serve review-rating
  markup** — intentional, per Google policy.
- `robots.ts` + `sitemap.ts`.

## Optional upgrade later: auto-updating video sections

Swap the hardcoded IDs for a build-time fetch of a YouTube playlist via the
YouTube Data API v3 so new uploads appear automatically. ~20-minute change; not
needed to launch.
