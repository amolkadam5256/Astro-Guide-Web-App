import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../../../../assets/images/images";

const YearForecastHero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-12 px-4">
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-5 dark:opacity-15 pointer-events-none grayscale"
        style={{ backgroundImage: `url(${images.hero.patternBg})` }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-primary/30 via-white to-white dark:from-slate-900/30 dark:via-[#050a15] dark:to-[#050a15] -z-10" />

      <div className="max-w-6xl mx-auto text-center relative z-10 space-y-12">
        <div className="inline-flex items-center gap-4 px-8 py-3 bg-primary/10 text-primary dark:text-primary text-xs font-black uppercase tracking-[0.6em] mb-4 border-l-4 border-primary">
          <Calendar className="w-5 h-5" />
          <span>Annual Timing Optimization</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter">
          2025 <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary italic">
            Financial Plan
          </span>
        </h1>

        <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 font-bold max-w-3xl mx-auto leading-none">
          Stop fighting the current. Start sailing with the numerical winds of
          your year.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-10 py-6 bg-primary hover:bg-primary/80 text-white font-black uppercase tracking-[0.4em] text-[10px] transition-all flex items-center justify-center gap-4 group rounded-full"
          >
            Get My Forecast
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
          <div className="text-[10px] font-black uppercase tracking-widest text-primary/50">
            Limited Consultations Available
          </div>
        </div>
      </div>
    </section>
  );
};

export default YearForecastHero;
