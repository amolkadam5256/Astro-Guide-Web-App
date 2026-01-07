import React from "react";
import { Users, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../../../../assets/images/images";

const CompatibilityHero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-12 px-4 bg-rose-50/30 dark:bg-[#050a15]">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-10 dark:opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${images.hero.astrologyBg})` }}
      />

      <div className="max-w-7xl mx-auto text-center relative z-10 space-y-12">
        <div
          className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/80 text-[10px] font-black uppercase tracking-[0.5em] mb-4 border border-primary/20 rounded-full"
          data-aos="fade-down"
        >
          <Heart className="w-4 h-4 text-primary fill-primary" />
          <span>Interpersonal Synergy Audit</span>
        </div>

        <h1
          className="text-3xl md:text-4xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-[-0.04em]"
          data-aos="fade-up"
        >
          Destiny <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/80 italic">
            Alignment
          </span>
        </h1>

        <p
          className="text-xl md:text-xl text-slate-500 dark:text-slate-400 font-bold max-w-4xl mx-auto leading-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Understand the numerical dance between souls. Whether for marriage,
          business, or family, ensure your frequencies harmonize.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto px-10 py-6 bg-primary hover:bg-primary/80 text-white font-black uppercase tracking-[0.4em] text-[10px] transition-all flex items-center justify-center gap-4 group shadow-2xl shadow-primary/30 rounded-full"
          >
            Check Synergy
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white dark:border-dark bg-primary"
                />
              ))}
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Join 500+ Couples
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompatibilityHero;
