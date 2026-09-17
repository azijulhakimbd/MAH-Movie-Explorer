import { CalendarDays, Star, Info, Clock } from "lucide-react";

function MovieCard({ movie, onDetails }) {
  const show = movie.show;

  const image =
    show.image?.original ||
    show.image?.medium ||
    "https://via.placeholder.com/500x750?text=No+Poster";

  const year = show.premiered ? new Date(show.premiered).getFullYear() : "N/A";

  const rating = show.rating?.average || "N/A";

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-white/[0.07]">
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden bg-slate-900">
        <img
          src={image}
          alt={show.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

        {/* Rating */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1.5 text-sm font-semibold backdrop-blur">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          {rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="line-clamp-1 text-lg font-bold">{show.name}</h2>

        <div className="mt-2 flex items-center gap-3 text-sm text-slate-400">
          {show.runtime && (
            <div className="flex items-center gap-1">
              <Clock size={16} />
              {show.runtime} min
            </div>
          )}
          {show.genres?.length > 0 && (
            <span className="line-clamp-1">{show.genres[0]}</span>
          )}
          <span className="flex items-center gap-1">
            <CalendarDays size={14} />
            {year}
          </span>
          
        </div>

        <button
          onClick={() => onDetails(show)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 font-semibold transition hover:bg-purple-500"
        >
          <Info size={17} />
          See Details
        </button>
      </div>
    </article>
  );
}

export default MovieCard;
