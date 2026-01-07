import React from "react";
import { Briefcase, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../../../../assets/images/images";

const CompanyNamingHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-24 px-4 bg-[#0a1020]">
      {/* Precision Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-20 pointer-events-none grayscale contrast-125"
        style={{ backgroundImage: `url(${images.hero.patternBg})` }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        <div
          className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 text-primary text-[9px] font-black uppercase tracking-[0.5em] mb-4 border-l-4 border-primary backdrop-blur-sm"
          data-aos="fade-right"
        >
          <Briefcase className="w-4 h-4 text-primary" />
          <span>Corporate Vibrational Asset</span>
        </div>

        <h1
          className="text-3xl md:text-4xl lg:text-6xl font-black text-white mb-4 uppercase tracking-tighter leading-none"
          data-aos="fade-up"
        >
          Company <br />
          <span className="text-primary italic opacity-90">Naming</span>
        </h1>

        <p
          className="text-base md:text-xl text-slate-400 font-bold max-w-2xl mx-auto leading-relaxed uppercase tracking-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Transform your brand into a market force with numerically engineered
          nomenclature.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto px-10 py-5 bg-primary hover:bg-white hover:text-dark text-white font-black uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-3 group shadow-xl shadow-primary/20"
          >
            Audit My Brand
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-px h-8 bg-white/10" />
            <div className="text-left">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">
                Success Protocol
              </p>
              <p className="text-xs font-bold text-white uppercase tracking-tighter">
                Fortune 500 Methodology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyNamingHero;
