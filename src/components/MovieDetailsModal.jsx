import { useEffect } from "react";
import {
  X,
  Star,
  CalendarDays,
  Clock,
  Globe,
} from "lucide-react";

function MovieDetailsModal({ movie, onClose }) {

  useEffect(() => {
    if (!movie) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [movie, onClose]);

  if (!movie) return null;

  const image =
    movie.image?.original ||
    movie.image?.medium ||
    "https://via.placeholder.com/1000x600?text=No+Image";

  const year = movie.premiered
    ? new Date(movie.premiered).getFullYear()
    : "N/A";

  const rating = movie.rating?.average || "N/A";

  const summary = movie.summary
    ? movie.summary.replace(/<[^>]*>/g, "")
    : "No description available.";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative my-8 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-black/60 p-2.5 text-white backdrop-blur transition hover:bg-red-500"
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {/* Backdrop */}
        <div className="relative h-64 sm:h-80">

          <img
            src={image}
            alt={movie.name}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-3xl font-black sm:text-4xl">
              {movie.name}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">

          <div className="flex flex-wrap gap-3">

            <div className="flex items-center gap-2 rounded-full bg-yellow-400/10 px-4 py-2 text-yellow-300">
              <Star size={16} className="fill-yellow-400" />
              {rating}
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-slate-300">
              <CalendarDays size={16} />
              {movie.premiered || year}
            </div>

            {movie.runtime && (
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-slate-300">
                <Clock size={16} />
                {movie.runtime} min
              </div>
            )}

            {movie.language && (
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-slate-300">
                <Globe size={16} />
                {movie.language}
              </div>
            )}

          </div>

          {/* Genres */}
          {movie.genres?.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-lg bg-purple-500/10 px-3 py-1.5 text-sm text-purple-300"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}

          <div className="mt-7">
            <h3 className="mb-3 text-xl font-bold">
              Overview
            </h3>

            <p className="leading-7 text-slate-300">
              {summary}
            </p>
          </div>

          {/* Additional information */}
          <div className="mt-7 grid gap-4 sm:grid-cols-2">

            {movie.network?.name && (
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm text-slate-500">
                  Network
                </p>
                <p className="mt-1 font-semibold">
                  {movie.network.name}
                </p>
              </div>
            )}

            {movie.status && (
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm text-slate-500">
                  Status
                </p>
                <p className="mt-1 font-semibold">
                  {movie.status}
                </p>
              </div>
            )}

          </div>

          <button
            onClick={onClose}
            className="mt-8 w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold transition hover:bg-white/10"
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
}

export default MovieDetailsModal;