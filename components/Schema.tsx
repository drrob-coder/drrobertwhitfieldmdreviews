import {
  DOCTOR,
  REVIEW_SOURCES,
  VIDEO_TESTIMONIALS,
  PATIENT_STORIES
} from "@/lib/data";

/**
 * Structured data for AI / LLM + search understanding.
 *
 * We intentionally emit a Physician entity (with sameAs links to every review
 * profile and owned domain) and VideoObject markup for our OWNED videos.
 * We do NOT emit self-serve AggregateRating for the aggregated third-party
 * reviews — Google disallows first-party review-rating markup, and it keeps us
 * honest. The value here is entity clarity, which is exactly what LLMs cite.
 */
export function Schema() {
  const physician = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: DOCTOR.name,
    medicalSpecialty: "PlasticSurgery",
    description:
      "Board-certified plastic surgeon specializing in breast implant illness and explant surgery in Austin, Texas.",
    url: "https://drrobertwhitfieldmdreviews.com",
    sameAs: [
      ...DOCTOR.network.map((n) => n.url),
      ...REVIEW_SOURCES.map((s) => s.profileUrl)
    ]
  };

  const videos = [...VIDEO_TESTIMONIALS, ...PATIENT_STORIES].map((v) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: v.title,
    description: v.summary || v.title,
    embedUrl: `https://www.youtube.com/embed/${v.youtubeId}`,
    thumbnailUrl: `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`,
    ...(v.uploadDate ? { uploadDate: v.uploadDate } : {})
  }));

  const blocks = [physician, ...videos];

  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
