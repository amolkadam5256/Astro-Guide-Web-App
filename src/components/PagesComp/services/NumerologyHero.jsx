import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { images } from "../../../assets/images/images";

const NumerologyHero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 px-4 bg-white dark:bg-gray-950">
      {/* Background Image - Fixed Parallax Effect */}
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-10 dark:opacity-15 pointer-events-none"
        style={{ backgroundImage: `url(${images.hero.patternBg})` }}
      />

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-linear-to-b from-blue-50/50 to-white dark:from-slate-900/50 dark:to-gray-950 -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full -z-10 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-400  blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-400 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-blue-900/30 text-primary dark:text-primary text-sm font-medium mb-8 border border-primary/10 dark:border-primary/10 animate-fadeIn">
          {/* <Sparkles className="w-4 h-4 text-amber-500" /> */}
          <span>Complete Numerology Analytics</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
          Complete Numerology Services for <br className="hidden md:block" />
          <span className="text-blue-500 ">Life, Business & Growth</span>
        </h1>

        <div className="max-w-3xl mx-auto mb-12 space-y-4">
          <p className="text-xl md:text-xl text-gray-800 dark:text-gray-100 font-semibold tracking-wide">
            Personal • Business • Property • Expert Guidance
          </p>
          <p className="text-lg md:text-lg text-gray-500 dark:text-gray-400 font-medium">
            Free Tools • Instant Reports • 1-on-1 Consultations
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            to="/services/personal"
            className="w-full sm:w-auto px-10 py-5 bg-primary hover:bg-primary/80 text-white  font-bold text-lg transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-3 group"
          >
            Explore Personal Numerology
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-primary text-gray-900 dark:text-white border-2 border-gray-300 dark:border-primary hover:border-primary dark:hover:border-primary font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-md"
          >
            <Calendar className="w-6 h-6 text-primary" />
            Book Expert Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NumerologyHero;
