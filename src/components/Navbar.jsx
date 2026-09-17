
import { Clapperboard, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-purple-400"
        : "text-slate-300 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold"
        >
          <span className="rounded-xl bg-purple-600 p-2">
            <Clapperboard size={20} />
          </span>

          <span>
           MAH <span className="text-purple-400">Movie Explorer</span>
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/movies" className={navClass}>
            Movies
          </NavLink>

          <Link
            to="/movies"
            className="rounded-full bg-purple-600 px-5 py-2.5 font-semibold transition hover:bg-purple-500"
          >
            Explore Movies
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-4 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={navClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/movies"
              onClick={() => setOpen(false)}
              className={navClass}
            >
              Movies
            </NavLink>

            <Link
              to="/movies"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-purple-600 px-4 py-3 text-center font-semibold"
            >
              Explore Movies
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;