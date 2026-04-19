import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X, Play } from "lucide-react";
import type { Video } from "../data/videos";

interface VideoReelsGridProps {
  videos: Video[];
  allTags: string[];
}

function formatDuration(sec?: number): string | null {
  if (!sec && sec !== 0) return null;
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function transcriptText(video: Video): string {
  if (!video.transcript) return "";
  return video.transcript.map((b) => b.text).join(" ");
}

export default function VideoReelsGrid({ videos, allTags }: VideoReelsGridProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [modalVideo, setModalVideo] = useState<Video | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const tag = params.get("tag");
    if (tag && allTags.includes(tag)) {
      setActiveTags(new Set([tag]));
    }
    const q = params.get("q");
    if (q) setSearchTerm(q);
  }, [allTags]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (modalVideo && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!modalVideo && dialog.open) {
      dialog.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalVideo]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => setModalVideo(null);
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  const filteredVideos = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return videos.filter((video) => {
      if (activeTags.size > 0) {
        const matches = video.tags.some((tag) => activeTags.has(tag));
        if (!matches) return false;
      }
      if (!q) return true;
      const haystack = [
        video.title,
        video.summary,
        video.tags.join(" "),
        transcriptText(video),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [videos, searchTerm, activeTags]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setActiveTags(new Set());
  };

  const handleCardClick = (video: Video) => {
    if (video.transcript) {
      window.location.href = `/videos/${video.slug}`;
    } else {
      setModalVideo(video);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      setModalVideo(null);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search videos by title or transcript..."
            className="w-full pl-10 pr-10 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => {
              const isActive = activeTags.has(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
            {(activeTags.size > 0 || searchTerm) && (
              <button
                type="button"
                onClick={clearFilters}
                className="px-3 py-1.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Clear all
              </button>
            )}
          </div>
        )}
        <p className="text-xs text-muted-foreground">
          {filteredVideos.length} {filteredVideos.length === 1 ? "video" : "videos"}
        </p>
      </div>

      {filteredVideos.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-muted-foreground mb-4">No videos match your filters.</p>
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.slug}
              video={video}
              onClick={() => handleCardClick(video)}
            />
          ))}
        </div>
      )}

      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        className="backdrop:bg-black/70 bg-transparent p-0 max-w-[95vw] max-h-[95vh] rounded-xl"
      >
        {modalVideo && (
          <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
            <button
              type="button"
              onClick={() => setModalVideo(null)}
              className="absolute top-2 right-2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>
            <div
              className="relative bg-black"
              style={{
                width: modalVideo.orientation === "horizontal" ? "min(90vw, 960px)" : "min(90vw, 420px)",
                aspectRatio: modalVideo.orientation === "horizontal" ? "16 / 9" : "9 / 16",
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${modalVideo.youtubeId}?autoplay=1&rel=0`}
                title={modalVideo.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 bg-background text-foreground">
              <h3 className="font-display text-lg font-semibold">{modalVideo.title}</h3>
              {modalVideo.summary && (
                <p className="text-sm text-muted-foreground mt-1">{modalVideo.summary}</p>
              )}
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}

interface VideoCardProps {
  video: Video;
  onClick: () => void;
}

function VideoCard({ video, onClick }: VideoCardProps) {
  const [imgSrc, setImgSrc] = useState(
    `https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`,
  );
  const duration = formatDuration(video.durationSec);
  const isVertical = video.orientation !== "horizontal";

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative block w-full overflow-hidden rounded-xl bg-muted text-left focus:outline-none focus:ring-2 focus:ring-ring"
      style={{ aspectRatio: isVertical ? "9 / 16" : "16 / 9" }}
    >
      <img
        src={imgSrc}
        alt={video.title}
        loading="lazy"
        onError={() => setImgSrc(`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`)}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-md backdrop-blur-sm">
        {duration ? duration : <Play className="h-3 w-3" />}
      </div>
      <div className="absolute inset-x-0 bottom-0 p-3 text-white">
        <h3 className="font-display font-semibold text-sm leading-tight line-clamp-2 drop-shadow-md">
          {video.title}
        </h3>
        {video.tags.length > 0 && (
          <div className="mt-1.5 flex flex-wrap gap-1">
            {video.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-wide bg-white/15 backdrop-blur-sm rounded px-1.5 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="rounded-full bg-white/90 text-foreground p-3 shadow-lg">
          <Play className="h-5 w-5 fill-current" />
        </div>
      </div>
    </button>
  );
}
