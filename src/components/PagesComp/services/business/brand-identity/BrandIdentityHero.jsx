import React from "react";
import { Gem, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../../../../assets/images/images";

const BrandIdentityHero = () => {
  return (
    <section className="relative  flex items-center justify-center overflow-hidden py-14 px-4 bg-white dark:bg-[#050a15]">
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-5 dark:opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${images.hero.astrologyBg})` }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary/5 text-primary text-[9px] font-black uppercase tracking-[0.5em] mb-4 border border-primary/20">
          <Sparkles className="w-4 h-4" />
          <span>Visual Resonance Audit</span>
        </div>

        <h1
          className="text-3xl md:text-5xl lg:text-7xl font-black text-dark dark:text-white mb-4 uppercase tracking-tighter leading-none"
          data-aos="fade-up"
        >
          Brand <br />
          <span className="text-primary italic opacity-90">Identity</span>
        </h1>

        <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
          Align your logo, colors, and visual language with your business's core
          numerical frequency for a premium market presence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-10 py-5 bg-primary hover:bg-slate-900 text-white font-black uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-3 group shadow-xl rounded-none"
          >
            Refine My Identity
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="flex items-center gap-3">
            <Gem className="w-5 h-5 text-primary" />
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">
              Premium Design Logic
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIdentityHero;
