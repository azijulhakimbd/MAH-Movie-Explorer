import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Search,
  Star,
  Sparkles,
} from "lucide-react";

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=85"
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-purple-950/30" />
        </div>

        {/* Animated glow */}
        <div className="absolute left-10 top-20 h-64 w-64 animate-pulse rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 animate-pulse rounded-full bg-pink-600/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">

          <div className="flex flex-col justify-center">

            <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              <Sparkles size={16} />
              Discover something amazing
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Discover Your
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Next Favorite
              </span>
              Show
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Explore thousands of movies and TV shows, search for your
              favorites, and discover detailed information about the stories
              you love.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/movies"
                className="group flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 font-bold transition hover:bg-purple-500"
              >
                <Play size={18} fill="currentColor" />
                Explore Now
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/movies"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold backdrop-blur transition hover:bg-white/10"
              >
                <Search size={18} />
                Search Shows
              </Link>

            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
              <span>🎬 Thousands of shows</span>
              <span>🔎 Powerful search</span>
              <span className="flex items-center gap-1">
                <Star size={15} className="fill-yellow-400 text-yellow-400" />
                Ratings & details
              </span>
            </div>
          </div>

          {/* Hero cards */}
          <div className="hidden items-center justify-center lg:flex">
            <div className="relative h-[480px] w-[330px]">

              <div className="absolute left-0 top-10 rotate-[-10deg] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=700&q=80"
                  alt="Movie theater"
                  className="h-[400px] w-[270px] object-cover"
                />
              </div>

              <div className="absolute right-0 top-0 z-10 rotate-[7deg] overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=700&q=80"
                  alt="Cinema"
                  className="h-[430px] w-[280px] object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;