import { Clapperboard, CodeXmlIcon } from "lucide-react";
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      {" "}
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {" "}
        {/* Top Section */}{" "}
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:items-center">
          {" "}
          {/* Brand */}{" "}
          <div className="flex justify-center lg:justify-start">
            {" "}
            <a
              href="/"
              className="group inline-flex items-center gap-2.5"
              aria-label="MovieExplorer Home"
            >
              {" "}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-600 shadow-lg shadow-cyan-500/10 transition-transform duration-300 group-hover:scale-105">
                {" "}
                <Clapperboard size={20} />
              </div>{" "}
              <span className="whitespace-nowrap text-base font-bold tracking-tight text-white sm:text-lg">
                {" "}
               <span>
           MAH <span className="text-purple-400">Movie Explorer</span>
          </span>
              </span>{" "}
            </a>{" "}
          </div>{" "}
          {/* Description */}{" "}
          <p className="mx-auto max-w-md text-center text-sm leading-6 text-slate-500 lg:max-w-none lg:px-4">
            {" "}
            Explore and discover your favorite movies from around the
            world.{" "}
          </p>{" "}
          {/* GitHub */}{" "}
          <div className="flex justify-center lg:justify-end">
            {" "}
            <a
              href="https://github.com/azijulhakimbd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-2.5 font-medium text-slate-400 transition-all duration-200 hover:border-white/10 hover:bg-white/5 hover:text-white"
              aria-label="Visit GitHub profile"
            >
              {" "}
              <CodeXmlIcon size={17} strokeWidth={2} aria-hidden="true" />{" "}
              <span>GitHub</span>{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
        {/* Divider */} <div className="my-7 h-px w-full bg-white/5 sm:my-8" />{" "}
        {/* Bottom Section */}{" "}
        <div className="flex flex-col items-center gap-4 text-xs text-slate-500 sm:flex-row sm:justify-between sm:text-sm">
          {" "}
          {/* Copyright */}{" "}
          <p className="text-center sm:text-left">
            {" "}
            © 2026{" "}
            <span className="font-medium text-slate-300">
              {" "}
             MAH Movie Explorer{" "}
            </span>{" "}
            . All rights reserved.{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
}
export default Footer;
