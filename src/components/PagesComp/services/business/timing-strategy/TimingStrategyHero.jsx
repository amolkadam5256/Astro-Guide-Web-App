import React from "react";
import { Clock, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../../../../assets/images/images";

const TimingStrategyHero = () => {
  return (
    <section className="relative  flex items-center justify-center overflow-hidden py-14 px-4 bg-white dark:bg-[#050a15]">
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-5 dark:opacity-10 pointer-events-none grayscale"
        style={{ backgroundImage: `url(${images.hero.patternBg})` }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-4 px-6 py-2 bg-primary/5 dark:bg-primary/20 text-primary dark:text-primary text-[9px] font-black uppercase tracking-[0.5em] mb-4 border border-primary/20">
          <Clock className="w-4 h-4 text-primary" />
          <span>Macro-Timing Optimization</span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-5xl font-black text-dark dark:text-white mb-4 uppercase tracking-tighter leading-tight">
          Timing <br />
          <span className="text-primary italic opacity-90">Strategy</span>
        </h1>

        <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 font-bold max-w-2xl mx-auto leading-relaxed tracking-tight">
          Success is not just about 'what' you do, but 'when' you do it. Align
          your major moves with the universe's expansion cycles.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-10 py-5 bg-primary hover:bg-slate-900 text-white font-black uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-4 group shadow-xl"
          >
            Review My Timeline
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="flex items-center gap-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">
              Peak Performance Protocol
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimingStrategyHero;
