import React from "react";
import { Home, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../../../../assets/images/images";

const ResidentialHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-32 px-4 bg-orange-50/30 dark:bg-[#050a15]">
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-10 dark:opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${images.hero.astrologyBg})` }}
      />

      <div className="max-w-7xl mx-auto text-center relative z-10 space-y-12">
        <div
          className="inline-flex items-center gap-4 px-6 py-2 bg-orange-600/5 dark:bg-orange-600/20 text-orange-600 dark:text-orange-300 text-[10px] font-black uppercase tracking-[0.5em] mb-4 border border-orange-600/20 rounded-full"
          data-aos="fade-down"
        >
          <Home className="w-4 h-4" />
          <span>Domestic Prosperity Audit</span>
        </div>

        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-black text-dark dark:text-white mb-6 uppercase tracking-[-0.03em] leading-none"
          data-aos="fade-up"
        >
          Residential <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-amber-500 italic">
            Sanctuary
          </span>
        </h1>

        <p
          className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-bold max-w-4xl mx-auto leading-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Align your home's frequency with your family's destiny. Turn your
          living space into a magnet for health, wealth, and harmony.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto px-16 py-8 bg-orange-600 hover:bg-orange-700 text-white font-black uppercase tracking-[0.4em] text-[10px] transition-all flex items-center justify-center gap-4 group shadow-2xl rounded-sm"
          >
            Audit My Home
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-6 h-6 text-orange-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
              Architectural Numerology
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialHero;
