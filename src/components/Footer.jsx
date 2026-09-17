import { Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">

        {/* Copyright */}
        <p className="text-center sm:text-left">
          © 2026{" "}
          <span className="font-medium text-slate-300">
            MAH MovieExplorer
          </span>
          . All rights reserved.
        </p>

        {/* GitHub */}
        <a
          href="https://github.com/azijulhakimbd"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium transition-colors hover:text-white"
        >
          GitHub
        </a>

        {/* Built With */}
        <p className="flex items-center gap-1.5">
          Built with
          <Heart
            size={14}
            className="fill-red-500 text-red-500"
            aria-hidden="true"
          />
          <span className="text-slate-300">React</span>
        </p>

      </div>
    </footer>
  );
}

export default Footer;