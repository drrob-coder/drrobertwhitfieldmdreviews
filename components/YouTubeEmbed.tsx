export function YouTubeEmbed({
  id,
  title,
  playlist = false
}: {
  id: string;
  title: string;
  playlist?: boolean;
}) {
  const src = playlist
    ? `https://www.youtube-nocookie.com/embed/videoseries?list=${id}`
    : `https://www.youtube-nocookie.com/embed/${id}`;

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-black pt-[56.25%]">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
