import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Star } from "lucide-react";
import { images } from "../../../../assets/images/images";

const PersonalCTA = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-[#050a15] overflow-hidden relative">
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-5 dark:opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${images.hero.patternBg})` }}
      />
      <div className="max-w-4xl mx-auto relative group z-10">
        {/* Creative Gradient Border/Glow */}
        <div className="absolute -inset-1 rounded-[2.5rem] opacity-75 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />

        <div className="relative bg-white dark:bg-[#0a1020] p-8 md:p-12 overflow-hidden border border-gray-100 dark:border-white/10 shadow-2xl">
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-purple-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-500/10 blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-4 max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-black uppercase tracking-widest border border-purple-100 dark:border-purple-800/50 text-purple-600 dark:text-purple-400">
                <Star className="w-3 h-3 fill-current" />
                <span>Personal Growth</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white leading-tight uppercase tracking-tight">
                Reveal Your <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600">
                  Hidden Potential
                </span>
              </h2>

              <p className="text-gray-600 dark:text-gray-400 font-medium text-sm md:text-base">
                Unlock the secrets of your personality and destiny with a
                personalized report.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-auto min-w-[200px]">
              <Link
                to="/reports/personal"
                className="group w-full px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                Get Full Report
              </Link>

              <Link
                to="/services/personal/life-path"
                className="group w-full px-8 py-4 bg-transparent border-2 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
              >
                Life Path Guide
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalCTA;
