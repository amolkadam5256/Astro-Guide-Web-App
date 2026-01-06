import React, { useState, useEffect } from "react";
import {
  Compass,
  Home,
  ArrowLeft,
  Loader2,
  Sparkles,
  Binary,
} from "lucide-react";
import { Link } from "react-router-dom";

/**
 * ErrorPage Component – A specialized, scientific 404 screen.
 * Aligned with AstroGuide branding: Focused, Mathematical, and Celestial.
 */
const ErrorPage = () => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-white dark:bg-[#050a15] text-center p-4 transition-colors duration-300 font-sans">
      {/* Background Mathematical Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.07]">
        <div className="h-full w-full bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[30px_30px]"></div>
      </div>

      {/* Dynamic Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none select-none"></div>

      <div className="relative z-10 max-w-xl w-full">
        {/* Top Badge */}
        <div
          data-aos="fade-down"
          className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 border border-primary/20 mb-6"
        >
          <Binary size={10} className="text-primary" />
          <span className="text-primary font-black uppercase tracking-[0.4em] text-[9px]">
            Coordinate Error
          </span>
        </div>

        {/* 404 Large Text */}
        <div className="relative mb-6 group">
          <h1
            className={`text-[100px] md:text-[140px] font-black leading-none tracking-tighter text-dark dark:text-white transition-all duration-300 ${
              glitch ? "translate-x-1 skew-x-12 opacity-50" : ""
            }`}
          >
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-primary opacity-20 scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
        </div>

        {/* Messaging */}
        <div className="space-y-3 mb-10">
          <h2 className="text-xl md:text-2xl font-black text-dark dark:text-white uppercase tracking-tight">
            Numerical <span className="text-primary">Misalignment</span>
          </h2>
          <p className="text-[12px] md:text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest leading-loose max-w-sm mx-auto">
            The mathematical sequence for this path could not be resolved. The
            destination you are seeking is outside our current database.
          </p>
        </div>

        {/* Action Buttons - Geometric/Sharp */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            to="/"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-dark dark:bg-white text-white dark:text-dark font-black uppercase tracking-[0.3em] text-[9px] hover:bg-primary dark:hover:bg-primary hover:text-white transition-all active:scale-95 border border-transparent"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Core</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-dark/10 dark:border-white/10 text-dark dark:text-white font-black uppercase tracking-[0.3em] text-[9px] hover:border-primary hover:text-primary transition-all active:scale-95"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Preceding Path</span>
          </button>
        </div>

        {/* Secondary Navigation Teaser */}
        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-white/5">
          <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.5em] mb-4">
            Recalibrate Focus
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Tools", path: "/tools" },
              { label: "Services", path: "/services" },
              { label: "Blog", path: "/blog" },
            ].map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="text-[10px] font-black text-dark dark:text-gray-300 uppercase tracking-widest hover:text-primary transition-colors flex items-center space-x-2"
              >
                <Sparkles size={8} className="text-primary" />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Symbols */}
      <div className="absolute bottom-8 left-8 pointer-events-none opacity-20">
        <Compass className="w-16 h-16 text-gray-300 dark:text-white/5 animate-[spin_20s_linear_infinite]" />
      </div>
      <div className="absolute top-8 right-8 pointer-events-none opacity-20">
        <Loader2 className="w-14 h-14 text-gray-300 dark:text-white/5 animate-spin" />
      </div>

      <style>{`
        .bg-size-[30px_30px] {
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  );
};

export default ErrorPage;
