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
      "Kathy, a dedicated mother of four, embarked on a transformative health journey after experiencing a constellation of debilitating symptoms in 2023 — including a significant spike in anxiety — that she initially struggled to connect. Her diligent research led her to the realization that she was suffering from Breast Implant Illness. Drawn to Dr. Whitfield's principled and holistic approach, Kathy undertook extensive physical and mental preparation before her explant procedure. Her journey was deeply reflective, confronting cultural influences and past decisions that led to her initial augmentation. Post-explant, Kathy experienced a profound sense of healing and self-acceptance. She found renewed compassion for her younger self and an overwhelming excitement for her future, embracing her body with love and confidence. Her story underscores the critical importance of comprehensive care and support in navigating complex medical and personal transformations."
  },
  {
    youtubeId: "eIfnZQMQhCA",
    title: "Why Recovery Took 2 Years, Not 2 Weeks | Madison Miranda's Healing Journey",
    patient: "Madison",
    uploadDate: "2025-02-10",
    summary:
      "After a decade with breast implants, Madison's health took a sudden downturn following the emotional trauma of her mother's passing. For three years, she battled extreme bloating, chronic headaches, and developing food intolerances that left her feeling defeated. Despite consulting numerous doctors and trying various treatments without success, she eventually realized her implants were the root cause. Hopeful but realistic, Madison underwent explant surgery with fat transfer. Her recovery was not an overnight miracle but a gradual journey of healing. While some symptoms like bloating and gluten intolerance resolved quickly, her energy levels and weight took longer to normalize. Two years later, Madison has lost 35 pounds and feels like herself again — proving that trusting the process and her body's ability to heal was the key to her remarkable transformation."
  },
  {
    youtubeId: "ijE8UdIhmRE",
    title: "You Don't Need to Be Sick Enough to Deserve Help with Jessica Brassington",
    patient: "Jessica",
    uploadDate: "2025-01-20",
    summary:
      "In this follow-up conversation, Jessica speaks to a message she feels compelled to share: you do not need to be severely ill to deserve help. She found herself in a traumatic season of life and, while her symptoms weren't debilitating, they were persistent and she felt a calling to address the underlying issue. After hearing Dr. Whitfield speak about how traumatic events can exacerbate implant-related symptoms, she began to connect the dots. Through prayer and guidance, she found Dr. Whitfield and underwent explant surgery with a fat transfer. The surgery was a turning point — not just for her physical healing, but also for her emotional and personal healing journey. She is now a passionate advocate for women's health, encouraging others to be informed and proactive before symptoms become severe."
  },
  {
    youtubeId: "DDC9xKhZeKI",
    title: "Breast Explant Surgery: A Candid Discussion with Tiffany Blackmon and Dr. Robert Whitfield",
    patient: "Tiffany",
    uploadDate: "2025-01-08",
    summary:
      "Tiffany, a healthy and athletic woman, underwent breast augmentation in 2011. Soon after a revision surgery, she began experiencing inexplicable symptoms — chronic pain, joint issues, and severe GI problems — that doctors initially dismissed as allergies or perimenopause. Years later, she tested positive for an ANA marker, indicating an autoimmune condition. Despite her healthy lifestyle, her body was failing, and she never connected her symptoms to her implants until she found Dr. Whitfield in 2023. Dr. Whitfield identified an underlying infection as the likely cause of her chronic inflammatory process. Following her explant surgery and participation in the SHARP Method, Tiffany experienced a profound transformation, regaining her health and vitality. Her journey highlights the critical link between breast implants and systemic health issues, offering hope and a path to recovery for others."
  },
  {
    youtubeId: "6dlAgAysKBU",
    title: "Why She Couldn't Remember Her Own Life with Brooke Ochojski",
    patient: "Brooke",
    uploadDate: "2024-12-15",
    summary:
      "Brooke's journey began with debilitating fatigue, memory loss, and a host of unexplained symptoms including SIBO and perioral dermatitis. Despite her healthy lifestyle and extensive exploration of functional medicine, she felt perpetually unwell — describing herself as \"the sick person.\" Her immune system was constantly compromised, she struggled with insomnia, and she felt a profound sense of frustration that her body was failing her. Trusting her intuition, Brooke delved into research on Breast Implant Illness, which resonated deeply with her experiences. This discovery led her to Dr. Whitfield, where she underwent explant surgery. Eight months post-procedure, Brooke has experienced a remarkable transformation: newfound energy, a sense of liberation, and a deeper self-love than she ever had with her implants."
  },
  {
    youtubeId: "OnJeCvFT9o0",
    title: "The Day I Collapsed | Erika's Healing Journey from Implant-Related Symptoms",
    patient: "Erika",
    uploadDate: "2024-09-30",
    summary:
      "Erika, a mother of two, initially dismissed her severe brain fog, memory loss, and chronic fatigue as the normal exhaustion of a busy mom. However, her symptoms escalated to include debilitating back pain, heart palpitations, and a terrifying moment when she collapsed and could not get off the floor. The turning point came when she almost dropped her baby — a moment filled with terror that made her realize something was seriously wrong. After seeing other women share their stories of Breast Implant Illness online and learning that a friend had been treated by Dr. Whitfield, she connected the dots to her own decade-old implants. Erika underwent explant surgery, and the transformation was immediate and profound: the inflammation subsided, the brain fog lifted, and she felt truly alive again — finally able to be the mother she wanted to be."
  },
  {
    youtubeId: "kgdpMH5nC-o",
    title: "Brain Surgery, Inflammation & Healing: Taylor Dukes' Story with Dr. Robert Whitfield",
    patient: "Taylor",
    uploadDate: "2024-09-15",
    summary:
      "Taylor embarked on a profound health journey after experiencing a significant decline following breast implant surgery and international travel. Initially a healthy individual, she developed chronic inflammation, hair loss, joint pain, stomach issues, and skin problems, leading her to explore functional medicine. This holistic approach helped her regain much of her health. A routine preventative scan later uncovered a brain tumor, which Taylor proactively addressed through an intensive integrative therapy program — including a metabolic ketosis diet — before undergoing successful brain surgery. Her remarkable recovery led her to Dr. Whitfield for explant surgery. Taylor recognized her breast implants as a key factor in suppressing her immune system, contributing to her earlier health struggles. Her story is a testament to the power of integrative care and proactive health management, resulting in an exceptionally swift recovery from both major procedures and a return to vibrant health."
  },
  {
    youtubeId: "6X8hZcBeLBI",
    title: "Life After Chronic Inflammation: Casey's Story & Dr. Whitfield's Insights",
    patient: "Casey",
    uploadDate: "2024-08-20",
    summary:
      "Casey received breast implants at 23 and soon experienced a dramatic decline in her health. Within six months she gained 30 pounds, suffered from chronic inflammation, rashes, and debilitating fatigue. Over the years her symptoms worsened — hormonal issues, dry skin, swollen lymph nodes, and severe chest pain led to depression and anxiety. Despite extensive lifestyle changes and consultations with various specialists, her condition remained a mystery. A breast implant rupture in Spain, followed by a replacement surgery, only exacerbated her symptoms. Realizing her implants were the root cause, Casey embarked on a rigorous research quest and discovered Breast Implant Illness. Her determination led her to Dr. Whitfield, whose holistic approach and SHARP Method resonated deeply. Casey underwent explant surgery, prioritizing her health over aesthetics. Her recovery has been transformative, restoring her well-being and enabling her to embrace a healthier future."
  },
  {
    youtubeId: "JxbHPY0Yigc",
    title: "Ep 76 — Kasey Dixon: Explant with Simultaneous Fat Transfer",
    patient: "Kasey Dixon",
    uploadDate: "2024-07-25",
    summary:
      "Kasey's journey began with a breast augmentation in her 20s, a decision influenced by her surroundings and a desire for more volume. Years later, after having children, she experienced various symptoms she initially attributed to postpartum changes — fatigue, brain fog, and persistent nerve problems in her neck and back. These symptoms, which she later recognized as Breast Implant Illness, prompted her to seek explant surgery. Kasey had previously switched from saline to silicone implants due to implant malposition, a revision that failed to resolve her issues. Dr. Whitfield performed her explant surgery with a simultaneous fat transfer to restore natural volume. Kasey emphasizes that her primary motivation was her health, and while the aesthetic changes were initially an adjustment, she has since regained confidence and feels completely herself again. She highlights the importance of a supportive network during recovery."
  },
  {
    youtubeId: "oPJjTcZT0PQ",
    title: "The Perfect Storm: When Implants Become a Band-Aid for Deeper Wounds with Kristi Sager",
    patient: "Kristi",
    uploadDate: "2024-06-18",
    summary:
      "Kristi's journey began with a desire to reclaim her pre-pregnancy body and confidence, a feeling amplified after a divorce. The discovery of a lump in her breast, coupled with a family history of breast cancer, led her to a decision she thought was a \"one and done\" upgrade — breast implants. She justified it as a medical necessity, unaware of the long-term maintenance and potential complications. Soon after, her health deteriorated. She suffered from debilitating joint pain, chronic fatigue, and a host of inflammatory symptoms that left her bedridden and unable to enjoy her active lifestyle. A friend suggested she might have Breast Implant Illness, a realization that resonated deeply. This prompted her to seek out Dr. Whitfield. After her explant surgery, Kristi embarked on a detox journey and attests to the profound difference in how her body feels and functions today."
  },
  {
    youtubeId: "KcSfP5lRs2w",
    title: "When Enhancements Backfire: One Mom's Journey from Shame to Healing | Regina Steele",
    patient: "Regina",
    uploadDate: "2024-05-22",
    summary:
      "Regina's journey began with lifelong discomfort due to her breast size, starting at a young age and intensifying after childbirth. She experienced back pain and self-image struggles, leading her to seek surgical solutions. A previous surgeon recommended implants for a lifted appearance despite Regina's desire for reduction — a decision she later regretted due to a lack of information on alternatives. Her path to healing truly began when she discovered Dr. Whitfield's podcast, where she learned about explant surgery and fat transfer, realizing there were other options. Undergoing explant surgery with Dr. Whitfield marked a significant turning point, transforming her from a state of shame and physical discomfort to one of healing and empowerment. Today, Regina helps other women achieve hormone balance, energy, and confidence through her integrative nutrition and holistic healing approach — embodying her own profound transformation."
  },
  {
    youtubeId: "_t3D_sRXTM4",
    title: "From Chronic Symptoms to Healing: Allie Janszen's Wellness Journey with Dr. Robert Whitfield",
    patient: "Allie",
    uploadDate: "2024-04-12",
    summary:
      "Allie's wellness journey is a powerful testament to the body's ability to heal. For years after her fourth child, she struggled with extreme fatigue, persistent joint pain, chronic inflammation that prevented weight loss, and a diagnosis of Meniere's disease causing weekly episodes of vertigo. After discovering Breast Implant Illness, she decided to have her implants removed by Dr. Whitfield. The transformation was immediate and profound. Within a month, her Meniere's symptoms vanished completely. Over the next three months, she shed nearly 30 pounds of inflammation without altering her diet or exercise routine. Her energy returned, the debilitating fatigue disappeared, and her sleep quality improved dramatically. Allie's story is one of reclaiming her life — moving from chronic illness to vibrant health, renewed energy, and restored confidence."
  },
  {
    youtubeId: "zI5uTUyiIBE",
    title: "The Hidden Dangers Behind Chronic Symptoms: Jacqui Nelson Talks with Dr. Robert Whitfield",
    patient: "Jacqui",
    uploadDate: "2024-03-05",
    summary:
      "Jacqui's journey began at a young age when she got saline breast implants at 22. Initially pleased, she soon faced discomfort and rippling, prompting a switch to silicone implants. Shortly after, she began experiencing severe brain fog, chronic inflammation, skin cancers, dry mouth, dry eyes, and amplified anxiety and depression. These symptoms intensified over the years, culminating in debilitating chronic fatigue by 2021 that forced her to step away from her career. Despite numerous holistic treatments and dietary changes, her health continued to decline. Discovering Dr. Whitfield through a podcast, Jacqui underwent extensive testing that revealed severe heavy metal and mold toxicities along with significant gut issues. She decided on explant surgery, embracing a long-term healing mindset. Now actively participating in the SHARP Method, she is slowly regaining her vitality and feeling like she has her life back."
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
