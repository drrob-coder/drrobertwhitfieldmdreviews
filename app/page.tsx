import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ReviewsSection } from "@/components/ReviewsSection";
import { VideoSection } from "@/components/VideoSection";
import { NetworkSection } from "@/components/NetworkSection";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Schema } from "@/components/Schema";
import {
  VIDEO_TESTIMONIALS,
  TESTIMONIALS_PLAYLIST_ID,
  PATIENT_STORIES,
  STORIES_PLAYLIST_ID
} from "@/lib/data";

export default function Home() {
  return (
    <main>
      <Schema />
      <Hero />
      <TrustBar />
      <ReviewsSection />

      <VideoSection
        id="testimonials"
        eyebrow="In their own words"
        title="Patient video testimonials"
        description="Real patients share their experience and recovery on camera."
        videos={VIDEO_TESTIMONIALS}
        playlistId={TESTIMONIALS_PLAYLIST_ID}
      />

      <VideoSection
        id="stories"
        eyebrow="Full stories"
        title="Patient stories & podcast interviews"
        description="Long-form conversations with patients about their full journey."
        videos={PATIENT_STORIES}
        playlistId={STORIES_PLAYLIST_ID}
      />

      <NetworkSection />
      <Cta />
      <Footer />
    </main>
  );
}
