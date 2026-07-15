/* =============================================================================
   SINGLE SOURCE OF TRUTH — EDIT THIS FILE TO GO LIVE
   -----------------------------------------------------------------------------
   Everything on the site is driven by the data below. You do not need to touch
   any other file to launch. Fill in the four sections:

     1. DOCTOR            — name, credentials, booking link, cross-links
     2. REVIEW_SOURCES    — each platform + a few ATTRIBUTED excerpt reviews
     3. VIDEO_TESTIMONIALS — YouTube patient testimonial video IDs
     4. PATIENT_STORIES   — YouTube podcast / long-form patient story video IDs

   LEGAL / ETHICAL RULE for REVIEW_SOURCES:
   Do NOT paste full copied reviews. Use a 1–2 sentence EXCERPT, the patient's
   first name (or initials), and a link back to the original source. That keeps
   us clean with Google / RealSelf / Healthgrades terms of service and is
   actually a STRONGER signal for AI/LLMs because every quote is attributed.
   ============================================================================= */

export type ReviewExcerpt = {
  quote: string;        // 1–2 sentence excerpt ONLY (not the full review)
  author: string;       // first name or initials, e.g. "Sarah M."
  rating: number;       // 1–5  (list ONLY 4- and 5-star reviews)
  date?: string;        // optional, as shown on the source, e.g. "Aug 2020"
  // Link to the ORIGINAL review. If omitted or not a full http URL, the card
  // falls back to the platform's profileUrl.
  sourceUrl?: string;
};

export type ReviewSource = {
  key: string;
  name: string;
  profileUrl: string;   // your profile page on that platform
  rating?: number;      // your aggregate rating on that platform (optional)
  reviewCount?: number; // your total review count on that platform (optional)
  blurb: string;        // one line describing the platform's authority
  excerpts: ReviewExcerpt[];
};

export type Video = {
  youtubeId: string;    // the ID only, e.g. "dQw4w9WgXcQ"
  title: string;
  patient?: string;     // optional: first name / label
  // The written write-up shown UNDER the embed AND used in schema.
  // This is the crawlable text that actually drives SEO + LLM citation —
  // aim for a few sentences (a mini-summary or transcript excerpt), not one line.
  summary?: string;
  uploadDate?: string;  // "YYYY-MM-DD" — Google uses this for video rich results
};

/* -------------------------------------------------------------------------- */
/* 1. DOCTOR                                                                   */
/* -------------------------------------------------------------------------- */

export const DOCTOR = {
  name: "Dr. Robert Whitfield MD",
  tagline: "Board-Certified Plastic Surgeon · Breast Implant Illness & Explant Specialist · Austin, Texas",
  bookingUrl: "https://drrobertwhitfield.com/book", // TODO: confirm discovery-call URL
  // Credentials shown in the trust bar. Edit freely.
  credentials: [
    "Board-Certified Plastic Surgeon, FACS",
    "2,000+ explant procedures performed",
    "Largest PCR capsule analysis in the literature (694 specimens)",
    "FDA General & Plastic Surgery Devices Panel testimony",
    "Patients from 40+ states and 15 countries"
  ],
  // Cross-links back to your network of domains (builds authority).
  network: [
    { label: "drrobertwhitfield.com", url: "https://drrobertwhitfield.com" },
    { label: "yoursurgicalrecovery.com", url: "https://yoursurgicalrecovery.com" },
    { label: "breastimplantillnessexpert.com", url: "https://breastimplantillnessexpert.com" },
    { label: "mysharpmethod.com", url: "https://mysharpmethod.com" },
    { label: "drrobssolutions.com", url: "https://drrobssolutions.com" }
  ]
};

/* -------------------------------------------------------------------------- */
/* 2. REVIEW SOURCES  (attributed excerpts + link out — never full copies)    */
/*    The 10 sources below are pre-listed in priority order. Replace the       */
/*    placeholder profileUrl + excerpts with your real data.                   */
/* -------------------------------------------------------------------------- */

export const REVIEW_SOURCES: ReviewSource[] = [
  {
    key: "google",
    name: "Google",
    profileUrl:
      "https://www.google.com/maps/place/Dr.+Robert+Whitfield+MD/@30.2591905,-97.8137665,1125m/data=!3m1!1e3!4m17!1m8!3m7!1s0x865b4ae6262e1067:0xc9a12b85f7e0845!2s2530+Walsh+Tarlton+Ln,+Austin,+TX+78746!3b1!8m2!3d30.2591905!4d-97.8111862!16s%2Fg%2F11hb6qvkrz!3m7!1s0x8644ca84e95699f9:0x61d5d67009b4b2b!8m2!3d30.2592454!4d-97.8112638!9m1!1b1!16s%2Fg%2F1hhxb16bj",
    rating: 4.9,
    reviewCount: 155,
    blurb: "The primary rating AI assistants and search engines read first.",
    excerpts: [
      {
        quote:
          "For years, I was sick and searching for answers. After seeing countless doctors, I finally found Dr. Robert Whitfield — looking back, he saved my life.",
        author: "Tiffany Blackmon",
        rating: 5,
        date: "Jun 2026",
        sourceUrl: "GOOGLE_PROFILE"
      },
      {
        quote:
          "This was absolutely the best decision I've ever made! I did a lot of research before choosing Dr. Whitfield and no one else even came close to comparing.",
        author: "Jaime B.",
        rating: 5,
        date: "Feb 2026",
        sourceUrl: "GOOGLE_PROFILE"
      },
      {
        quote:
          "The standard of care at the office was more than state of the art. You really have done something very special and remarkable — I will be referring all my networks to you.",
        author: "Rain Fingerhut",
        rating: 5,
        date: "Dec 2025",
        sourceUrl: "GOOGLE_PROFILE"
      },
      {
        quote:
          "Dr. Robert Whitfield and his entire team provided an exceptional experience throughout my explant procedure and healing journey. From the very first consultation, I felt genuinely heard, supported, and cared for.",
        author: "Brooke Ochojski",
        rating: 5,
        date: "Mar 2026",
        sourceUrl: "GOOGLE_PROFILE"
      },
      {
        quote:
          "I opted for the No-Cut Facelift and it was exactly the right choice for me. The results are incredibly natural — I still look like me, just a more rested, confident version.",
        author: "Stacey Lievens",
        rating: 5,
        date: "Jun 2026",
        sourceUrl: "GOOGLE_PROFILE"
      },
      {
        quote:
          "I had a total capsular explant and a reconstruction lift with Dr. Robert Whitfield, and I cannot say enough about the exceptional care I received. He and his team set the gold standard for patient care.",
        author: "Amy Meek-Loudermilk",
        rating: 5,
        date: "Feb 2026",
        sourceUrl: "GOOGLE_PROFILE"
      },
      {
        quote:
          "Dr. Whitfield and his entire team are just different and in a league of their own. If you are seeking the absolute BEST explant surgeon in the field, Dr. Whitfield is it.",
        author: "Christine Nakra",
        rating: 5,
        date: "Jun 2026",
        sourceUrl: "GOOGLE_PROFILE"
      },
      {
        quote:
          "Choosing to have my explant surgery with Dr. Rob was truly one of the best decisions I've ever made. Dr. Rob and his team didn't just perform a surgery — they helped give me my life back.",
        author: "Tiffany Perkins",
        rating: 5,
        date: "Mar 2026",
        sourceUrl: "GOOGLE_PROFILE"
      },
      {
        quote:
          "Dr. Robert Whitfield is an exceptional surgeon, and I could not be more pleased with my results. He is a true champion in the world of Breast Implant Illness.",
        author: "Laura Dunworth",
        rating: 5,
        date: "Jun 2026",
        sourceUrl: "GOOGLE_PROFILE"
      }
    ]
  },
  {
    key: "realself",
    name: "RealSelf",
    profileUrl: "https://www.realself.com/dr/robert-whitfield-austin-tx#reviews",
    rating: 4.8,
    reviewCount: 74,
    blurb: "The category authority for aesthetic and plastic surgery reviews.",
    excerpts: [
      {
        quote:
          "I had my explant surgery in Austin with Dr. Whitfield. I'd had severe BII symptoms — hair loss, insomnia, joint pain, brittle nails, vision and memory problems, massive brain fog. I like how small and natural it looks.",
        author: "shankalove",
        rating: 5,
        date: "Feb 2024",
        sourceUrl: "GOOGLE_PROFILE"
      },
      {
        quote:
          "I am beyond happy with everything about my explant surgery — before, during, and where I am now in the healing process. Dr. Rob and his entire team are off the charts with professionalism, knowledge, kindness and caring!",
        author: "itstime2023",
        rating: 5,
        date: "May 2023",
        sourceUrl: "GOOGLE_PROFILE"
      }
    ]
  },
  {
    key: "healthgrades",
    name: "Healthgrades",
    profileUrl: "https://www.healthgrades.com/physician/dr-robert-whitfield-3cww3",
    rating: 4.8,
    reviewCount: 71,
    blurb: "The leading physician-authority directory, heavily cited by AI.",
    excerpts: [
      {
        quote:
          "Thank you Dr. Whitfield for saving my life! My experience as a patient with Dr. Whitfield has been spectacular!",
        author: "Dana K.",
        rating: 5,
        date: "Aug 2020",
        sourceUrl: "https://www.healthgrades.com/physician/dr-robert-whitfield-3cww3"
      },
      {
        quote:
          "I highly recommend Dr. Whitfield. He and his staff were extremely caring and responsive.",
        author: "Carrie S.",
        rating: 5,
        date: "Mar 2020",
        sourceUrl: "https://www.healthgrades.com/physician/dr-robert-whitfield-3cww3"
      },
      {
        quote:
          "If you are looking for a compassionate, skilled surgeon along with an A+ office/hospital staff, I encourage you to set up a consultation with Dr. Whitfield.",
        author: "Tanya, San Antonio TX",
        rating: 5,
        date: "Jun 2019",
        sourceUrl: "https://www.healthgrades.com/physician/dr-robert-whitfield-3cww3"
      },
      {
        quote:
          "He is always available if I have a question and explains everything in a way me and my family can understand.",
        author: "Verified patient",
        rating: 5,
        date: "Jun 2018",
        sourceUrl: "https://www.healthgrades.com/physician/dr-robert-whitfield-3cww3"
      }
    ]
  },
  {
    key: "realpatientratings",
    name: "RealPatientRatings",
    profileUrl: "https://www.realpatientratings.com", // TODO: paste the exact profile URL
    rating: 4.7,
    reviewCount: 266,
    blurb:
      "Independently verified patient reviews — every review from a real patient (208 five-star).",
    excerpts: [
      {
        quote:
          "Dr. Whitfield from the very start made me feel heard and genuinely concerned for my well-being and health. The day of surgery the staff was very kind.",
        author: "Verified patient · Breast Implant Removal",
        rating: 5,
        date: "Jun 2019",
        sourceUrl: "GOOGLE_PROFILE"
      },
      {
        quote:
          "I was devastated to have a mastectomy. Dr. Whitfield reconstructed my breast using the DIEP flap technique. The recovery has been long, but the results are fantastic.",
        author: "Verified patient · Breast Reconstruction",
        rating: 5,
        date: "Jun 2019",
        sourceUrl: "GOOGLE_PROFILE"
      },
      {
        quote:
          "Dr. Whitfield and his staff are very compassionate and really listened to my concerns and wishes for how I wanted my body to look once my implants were removed.",
        author: "Verified patient · Breast Implant Removal",
        rating: 5,
        date: "Jun 2019",
        sourceUrl: "GOOGLE_PROFILE"
      },
      {
        quote:
          "Dr. Whitfield answered all of my questions and put me at ease. I appreciated his thorough feedback and years of experience. He also believes in breast implant illness.",
        author: "Verified patient · Breast Implant Removal",
        rating: 5,
        date: "Jun 2019",
        sourceUrl: "GOOGLE_PROFILE"
      },
      {
        quote:
          "Dr. Whitfield and his entire staff were compassionate, down to earth, and genuinely understanding with me — a true godsend. Life saving!",
        author: "Verified patient · Breast Implant Removal",
        rating: 5,
        date: "Jul 2019",
        sourceUrl: "GOOGLE_PROFILE"
      },
      {
        quote:
          "I found Dr. Whitfield to be very knowledgeable, straightforward and honest. He spent a lot of time with us and gave me the input that was best medically for me.",
        author: "Verified patient · Breast Implant Revision / Exchange",
        rating: 5,
        date: "Jul 2019",
        sourceUrl: "GOOGLE_PROFILE"
      },
      {
        quote:
          "Doctor Whitfield is a caring, compassionate man. He always takes the time to inform me exactly what he is going to do. His office staff are the best — I would never go to another doctor.",
        author: "Verified patient · Mommy Makeover",
        rating: 5,
        date: "Sep 2019",
        sourceUrl: "GOOGLE_PROFILE"
      },
      {
        quote:
          "Dr. Whitfield actually listens and cares about your health, not just dollar signs. He is skilled and extremely knowledgeable about breast explantation and BII.",
        author: "Verified patient · Breast Implant Removal",
        rating: 5,
        date: "Sep 2019",
        sourceUrl: "GOOGLE_PROFILE"
      }
    ]
  },
  {
    key: "ratemds",
    name: "RateMDs",
    profileUrl:
      "https://www.ratemds.com/doctor-ratings/116577/Dr-Robert+M.-Whitfield-AUSTIN-TX.html/",
    // TODO: RateMDs blocked automated read — add rating/count + 4–5★ excerpts manually
    blurb: "Consumer-facing physician reviews, strongly indexed by search.",
    excerpts: []
  },
  {
    key: "webmd",
    name: "WebMD Care",
    profileUrl:
      "https://doctor.webmd.com/doctor/robert-whitfield-a0352f70-5eb8-4cab-86c7-af720155723f-overview",
    rating: 5.0,
    reviewCount: 32,
    blurb: "High-trust health brand carrying disproportionate weight with AI.",
    excerpts: [
      {
        quote:
          "Dr. Whitfield totally exceeded my expectations pre- and post-surgery. I'm so glad I finally did it — and that Dr. W was my surgeon.",
        author: "Verified patient",
        rating: 5,
        date: "Dec 2023",
        sourceUrl:
          "https://doctor.webmd.com/doctor/robert-whitfield-a0352f70-5eb8-4cab-86c7-af720155723f-overview"
      }
    ]
  },
  {
    key: "zocdoc",
    name: "Zocdoc",
    profileUrl: "https://www.zocdoc.com/doctor/robert-whitfield-md-82696",
    // TODO: Zocdoc blocked automated read — add rating/count + 4–5★ excerpts manually
    blurb: "Booking-platform reviews from verified appointments.",
    excerpts: []
  }
];

/* -------------------------------------------------------------------------- */
/* 3. VIDEO TESTIMONIALS  (your OWNED content — embed freely, mark up schema)  */
/*    Paste the YouTube video ID only (the part after v= or youtu.be/).        */
/* -------------------------------------------------------------------------- */

export const VIDEO_TESTIMONIALS: Video[] = [
  {
    youtubeId: "k1R2MimsEtM",
    title: "Brooke Ochojski's Patient Testimonial",
    patient: "Brooke Ochojski",
    // NOTE: summary written generically — please verify/enrich with Brooke's
    // actual story so the text is specific (specificity = stronger SEO).
    summary:
      "Brooke shares her experience as a patient of Dr. Whitfield — what led her to seek care, how she was supported through the process, and how she feels about her decision and her results."
  },
  {
    youtubeId: "sEHtdP3ObsA",
    title: "Casey's Patient Testimonial",
    patient: "Casey",
    summary:
      "Casey talks about her journey with Dr. Whitfield and his team, describing the care she received and the difference the experience has made for her health and confidence."
  },
  {
    youtubeId: "-fGV1tu2xFY",
    title: "Molly's Patient Testimonial",
    patient: "Molly",
    summary:
      "Molly reflects on choosing Dr. Whitfield for her care — the questions she had going in, how she was guided through each step, and how she feels about the outcome."
  },
  {
    youtubeId: "XtxozKOeko8",
    title: "Tiffany Blackmon's Patient Testimonial",
    patient: "Tiffany Blackmon",
    summary:
      "Tiffany Blackmon shares her firsthand experience as a patient of Dr. Whitfield, describing what stood out about her care and why she would recommend him to other women considering their options."
  }
];

/* If you'd rather embed an entire PLAYLIST instead of individual videos,
   set this to your playlist ID (the PL... value). Leave "" to use the
   individual videos above. */
export const TESTIMONIALS_PLAYLIST_ID = "";

/* -------------------------------------------------------------------------- */
/* 4. PATIENT STORIES  (long-form podcast / interview videos on YouTube)       */
/* -------------------------------------------------------------------------- */

export const PATIENT_STORIES: Video[] = [
  {
    youtubeId: "QBpZGwSlhXk",
    title: "Ep 174 — Violet's Story: From Patient to Practitioner",
    patient: "Violet",
    uploadDate: "2026-06-25",
    summary:
      "Violet shares how her own experience with breast implant illness reshaped the course of her life — moving from patient to practitioner. In this conversation with Dr. Whitfield she describes the symptoms that led her to seek answers, her decision to move forward with explant surgery, and how her recovery inspired her to help other women navigate the same journey."
  },
  {
    youtubeId: "sObhFlfZqlA",
    title: "Ep 173 — Lia Cormier: She Couldn't Open a Water Bottle",
    patient: "Lia Cormier",
    uploadDate: "2026-06-19",
    summary:
      "Lia Cormier's symptoms progressed to the point that everyday tasks — even opening a water bottle — became difficult. She sits down with Dr. Whitfield to describe the profound fatigue and weakness she lived with, the process of connecting those symptoms to her breast implants, and how she began to feel like herself again after explant surgery."
  },
  {
    youtubeId: "T5CJiq3ptO4",
    title: "Ep 170 — Hannah: Couch-Bound for 3 Years (One-Year Update)",
    patient: "Hannah",
    uploadDate: "2026-05-28",
    summary:
      "After roughly three years largely confined to her couch, Hannah returns for a one-year update on her recovery. She and Dr. Whitfield revisit how debilitating her symptoms had become, what her explant experience was like, and the changes she has seen in her energy and daily life in the twelve months since."
  },
  {
    youtubeId: "u7UbawlyVuM",
    title: "Ep 169 — Sarah Minick: A Cancer Survivor's Story",
    patient: "Sarah Minick",
    uploadDate: "2026-05-21",
    summary:
      "As a cancer survivor, Sarah Minick faced a uniquely complex decision about her breast implants. In this episode she talks with Dr. Whitfield about her health history, the symptoms that prompted her to consider explant surgery, and how she approached reclaiming her health after everything she had already been through."
  },
  {
    youtubeId: "aIw1W1k1cyA",
    title: "Ep 128 — Kathy Dixon: The Explant Story Every Woman Needs to Hear",
    patient: "Kathy Dixon",
    uploadDate: "2025-08-14",
    summary:
      "Kathy Dixon shares a candid, detailed account of her path to explant surgery — the kind of story Dr. Whitfield believes every woman considering her options should hear. Together they walk through her symptoms, her research, her decision-making, and what her recovery has meant for her quality of life."
  },
  {
    youtubeId: "JxbHPY0Yigc",
    title: "Ep 76 — Kasey Dixon: Explant with Simultaneous Fat Transfer",
    patient: "Kasey Dixon",
    uploadDate: "2024-07-25",
    summary:
      "Kasey Dixon chose to combine breast implant removal with simultaneous fat transfer. She joins Dr. Whitfield to discuss why she pursued a natural, holistic approach to restoring her shape, what the combined procedure involved, and how she felt about her results and recovery."
  }
];

export const STORIES_PLAYLIST_ID = ""; // optional: a PL... playlist of patient stories

/* -------------------------------------------------------------------------- */
/* Helpers                                                                     */
/* -------------------------------------------------------------------------- */

export const hasExcerpts = REVIEW_SOURCES.some((s) => s.excerpts.length > 0);

export function overallRating(): { avg: number; count: number } | null {
  const rated = REVIEW_SOURCES.filter((s) => typeof s.rating === "number");
  const count = REVIEW_SOURCES.reduce((n, s) => n + (s.reviewCount || 0), 0);
  if (rated.length === 0) return null;
  const avg =
    rated.reduce((sum, s) => sum + (s.rating as number), 0) / rated.length;
  return { avg: Math.round(avg * 10) / 10, count };
}
