
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-800/30 blur-3xl" />

      {/* Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-size-[60px_60px] opacity-10" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-center">
        {/* 404 Text */}
        <h1 className="bg-linear-to-b from-white to-zinc-500 bg-clip-text text-[120px] font-black leading-none text-transparent md:text-[180px]">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-zinc-400 md:text-base">
          The page you are looking for doesn&apos;t exist, may have been
          removed, or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-zinc-200"
          >
            <Home size={18} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:border-zinc-500 hover:bg-zinc-800"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Bottom Accent */}
        <div className="mt-14 flex items-center justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-zinc-500" />
          <div className="h-px w-24 bg-zinc-700" />
          <div className="h-2 w-2 rounded-full bg-zinc-500" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
