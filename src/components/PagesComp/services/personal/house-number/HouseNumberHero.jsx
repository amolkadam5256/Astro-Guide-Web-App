import React from "react";
import { Home, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../../../../assets/images/images";

const HouseNumberHero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-20 px-4">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-10 dark:opacity-20 pointer-events-none scale-105"
        style={{ backgroundImage: `url(${images.hero.astrologyBg})` }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-primary/50 via-white to-white dark:from-slate-900/50 dark:via-[#050a15] dark:to-[#050a15] -z-10" />

      <div className="max-w-6xl mx-auto text-center relative z-10 space-y-12">
        <div
          className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary text-[10px] font-black uppercase tracking-[0.5em] mb-4 border border-primary/20 rounded-full"
          data-aos="fade-down"
        >
          <Sparkles className="w-4 h-4" />
          <span>Domestic Prosperity Audit</span>
        </div>

        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-[-0.03em] leading-none"
          data-aos="fade-up"
        >
          Home <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/80 italic">
            Resonance
          </span>
        </h1>

        <p
          className="text-sm md:text-xl text-gray-500 dark:text-gray-400 font-semibold max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Your address is your energetic anchor. Ensure your home supports your
          growth, health, and family harmony.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto px-12 py-6 bg-primary hover:bg-primary/80 text-white font-black uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-4 group shadow-2xl shadow-primary/20"
          >
            Analyze My Address
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-dark dark:text-white">
              Ancient Vastu-Numerology
            </span>
            <span className="w-full h-0.5 bg-amber-600/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseNumberHero;
