import React from "react";
import { Map, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../../../../assets/images/images";

const LifePathHero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-12 px-4">
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-10 dark:opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${images.hero.astrologyBg})` }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-blue-50/50 via-white to-white dark:from-slate-900/50 dark:via-[#050a15] dark:to-[#050a15] -z-10" />

      <div className="max-w-7xl mx-auto text-center relative z-10 space-y-12">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-300 text-[10px] font-black uppercase tracking-[0.5em] mb-4 border border-blue-600/20">
          <Map className="w-4 h-4" />
          <span>Soul Journey Decoding</span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-[ -0.05em] leading-none">
          Life Path <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-600">
            Masterplan
          </span>
        </h1>

        <p className="text-sm md:text-xl text-gray-600 dark:text-gray-400 font-bold max-w-4xl mx-auto leading-tight">
          Discover the energetic architecture of your soul's purpose and the
          major themes of your life journey.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-4 group"
          >
            Decode My Path
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-12 h-0.5 bg-blue-600/30" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
              Trusted By Seekers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifePathHero;
