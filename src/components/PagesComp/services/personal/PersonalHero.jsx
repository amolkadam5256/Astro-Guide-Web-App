import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Sparkles, User, Fingerprint } from "lucide-react";
import { images } from "../../../../assets/images/images";

const PersonalHero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 px-4 bg-white dark:bg-gray-950">
      {/* Background with Parallax */}
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-10 dark:opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${images.hero.astrologyBg})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-purple-50/50 to-white dark:from-gray-900/50 dark:to-gray-950 -z-10" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-sm font-medium mb-8 border border-purple-100 dark:border-purple-800/50 rounded-full animate-fadeIn">
          <Fingerprint className="w-4 h-4" />
          <span>Self-Discovery & Destiny</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
          Unlock the Secret Code of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600">
            Your Life
          </span>
        </h1>

        <div className="max-w-3xl mx-auto mb-12 space-y-4">
          <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-100 font-semibold">
            Name Analysis • Life Path • Year Forecasts
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
            Understand your strengths, challenges, and true purpose with our
            comprehensive personal numerology readings.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            to="/tools/life-path-calculator"
            className="w-full sm:w-auto px-10 py-5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg transition-all shadow-xl shadow-purple-500/25 flex items-center justify-center gap-3 rounded-full group"
          >
            Calculate Life Path
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="#services-grid"
            className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 font-bold text-lg transition-all flex items-center justify-center gap-3 rounded-full shadow-sm"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PersonalHero;
