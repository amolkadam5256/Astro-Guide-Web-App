import React from "react";
import { Users, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../../../../assets/images/images";

const TeamCompatibilityHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-24 px-4 bg-white dark:bg-[#050a15]">
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-5 dark:opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${images.hero.astrologyBg})` }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        <div
          className="inline-flex items-center gap-4 px-6 py-2 bg-primary/5 dark:bg-primary/20 text-primary dark:text-primary text-[9px] font-black uppercase tracking-[0.5em] mb-4 border border-primary/20 rounded-none"
          data-aos="fade-down"
        >
          <Users className="w-4 h-4" />
          <span>Human Capital Synergy Audit</span>
        </div>

        <h1
          className="text-2xl md:text-4xl lg:text-6xl font-black text-dark dark:text-white mb-4 uppercase tracking-tighter leading-none"
          data-aos="fade-up"
        >
          Team <br />
          <span className="text-primary italic opacity-90">Resonance</span>
        </h1>

        <p
          className="text-base md:text-xl text-gray-500 dark:text-gray-400 font-bold max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Build high-performance teams by aligning individual soul paths with
          group objectives. Reduce friction and maximize collective output.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto px-10 py-5 bg-primary hover:bg-slate-900 text-white font-black uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-4 group shadow-xl"
          >
            Audit My Team
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">
              Psychometric-Numerical Logic
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCompatibilityHero;
