import { Video } from "@/lib/data";
import { YouTubeEmbed } from "./YouTubeEmbed";

export function VideoSection({
  id,
  eyebrow,
  title,
  description,
  videos,
  playlistId
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  videos: Video[];
  playlistId: string;
}) {
  const usePlaylist = playlistId.length > 0;
  const hasContent = usePlaylist || videos.length > 0;

  return (
    <section id={id} className="section bg-surfaceAlt">
      <div className="container-content">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-brand">
          {eyebrow}
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl">{title}</h2>
        <p className="mt-3 max-w-2xl text-textSecondary">{description}</p>

        {!hasContent && (
          <p className="mt-6 rounded-lg border border-dashed border-line bg-surface px-5 py-4 text-sm text-textSecondary">
            Add YouTube video IDs (or a playlist ID) in <code>lib/data.ts</code> to
            populate this section.
          </p>
        )}

        {usePlaylist ? (
          <div className="mt-10 max-w-3xl">
            <YouTubeEmbed id={playlistId} title={title} playlist />
          </div>
        ) : (
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {videos.map((v) => (
              <figure key={v.youtubeId}>
                <YouTubeEmbed id={v.youtubeId} title={v.title} />
                <figcaption className="mt-3">
                  <p className="font-semibold">{v.title}</p>
                  {v.summary && (
                    <p className="mt-2 text-sm leading-relaxed text-textSecondary">
                      {v.summary}
                    </p>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
