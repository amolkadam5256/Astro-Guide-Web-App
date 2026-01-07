import React from "react";
import { Key, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../../../../assets/images/images";

const OpeningDatesHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-32 px-4 bg-white dark:bg-[#050a15]">
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-5 dark:opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${images.hero.astrologyBg})` }}
      />

      <div className="max-w-7xl mx-auto text-center relative z-10 space-y-12">
        <div
          className="inline-flex items-center gap-4 px-6 py-2 bg-amber-600/5 dark:bg-amber-600/20 text-amber-600 dark:text-amber-300 text-[10px] font-black uppercase tracking-[0.5em] mb-4 border border-amber-600/20 rounded-full"
          data-aos="fade-down"
        >
          <Key className="w-4 h-4" />
          <span>Ceremonial Timing Logic</span>
        </div>

        <h1
          className="text-6xl md:text-8xl lg:text-[10rem] font-black text-dark dark:text-white mb-6 uppercase tracking-[-0.03em] leading-none"
          data-aos="fade-up"
        >
          Muhurta <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-600 to-yellow-500 italic">
            Openings
          </span>
        </h1>

        <p
          className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-bold max-w-4xl mx-auto leading-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Auspicious dates for housewarming, showroom launches, and factory
          inaugurations. Ensure your first step starts with universal support.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto px-16 py-8 bg-amber-600 hover:bg-amber-700 text-white font-black uppercase tracking-[0.4em] text-[10px] transition-all flex items-center justify-center gap-4 group shadow-2xl rounded-sm"
          >
            Find My Date
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
          <div className="flex items-center gap-4">
            <Sparkles className="w-6 h-6 text-amber-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">
              Sacred Temporal Science
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningDatesHero;
