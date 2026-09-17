import { useEffect, useState } from "react";
import { Search, Film, LoaderCircle, AlertCircle } from "lucide-react";
import MovieCard from "../components/MovieCard";
import MovieDetailsModal from "../components/MovieDetailsModal";


const API = "https://api.tvmaze.com";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchShows() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API}/shows`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch shows.");
        }

        const data = await response.json();

        setMovies(
          data.map((show) => ({
            show,
          }))
        );
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Unable to load movies. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchShows();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const searchShows = async () => {
      if (!query.trim()) {
        return;
      }

      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API}/search/shows?q=${encodeURIComponent(query)}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Search failed.");
        }

        const data = await response.json();

        setMovies(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Search failed. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };

    const timeout = setTimeout(searchShows, 400);

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [query]);

  return (
    <>
      <section className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2 text-purple-400">
              <Film size={20} />
              Movie Library
            </div>

            <h1 className="text-4xl font-black sm:text-5xl">
              Explore Shows
            </h1>

            <p className="mt-3 max-w-2xl text-slate-400">
              Search and discover movies and TV shows 
            </p>
          </div>

          {/* Search */}
          <div className="sticky top-20 z-30 mb-10">

            <div className="relative">

              <Search
                size={22}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="search"
                value={query}
                onChange={(event) =>
                  setQuery(event.target.value)
                }
                placeholder="Search for a movie or TV show..."
                className="w-full rounded-2xl border border-white/10 bg-slate-900/90 py-4 pl-14 pr-5 text-base text-white outline-none backdrop-blur-xl transition placeholder:text-slate-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              />

            </div>

            {query && (
              <p className="mt-3 text-sm text-slate-500">
                Search results for:{" "}
                <span className="font-semibold text-purple-400">
                  {query}
                </span>
              </p>
            )}
          </div>

          {/* Error */}
          {error && (
            <div className="mb-8 flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-300">
              <AlertCircle size={20} />
              {error}
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="flex min-h-[300px] items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <LoaderCircle
                  size={40}
                  className="animate-spin text-purple-500"
                />

                <p className="text-slate-400">
                  Finding shows...
                </p>
              </div>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && movies.length === 0 && (
            <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
              <Film
                size={48}
                className="mb-4 text-slate-600"
              />

              <h2 className="text-xl font-bold">
                No shows found
              </h2>

              <p className="mt-2 text-slate-500">
                Try searching for another title.
              </p>
            </div>
          )}

          {/* Grid */}
          {!loading && movies.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.show.id}
                  movie={movie}
                  onDetails={setSelectedMovie}
                />
              ))}
            </div>
          )}

        </div>
      </section>

      <MovieDetailsModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </>
  );
}

export default Movies;