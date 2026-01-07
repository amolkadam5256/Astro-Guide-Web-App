import React from "react";
import { Zap, ArrowRight, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../../../../assets/images/images";

const StartupNamingHero = () => {
  return (
    <section className="relative  flex items-center justify-center overflow-hidden py-14 px-4 bg-slate-950">
      {/* Background Cyber Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#2262b2_0.5px,transparent_0.5px)] bg-size-[20px_20px]" />
      </div>

      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 pointer-events-none grayscale mix-blend-overlay"
        style={{ backgroundImage: `url(${images.hero.patternBg})` }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        <div
          className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 text-primary text-[9px] font-black uppercase tracking-[0.5em] mb-4 border border-primary/30 backdrop-blur-3xl rounded-none"
          data-aos="fade-down"
        >
          <Zap className="w-4 h-4 fill-primary" />
          <span>Velocity Brand Engineering</span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 uppercase tracking-tighter leading-none">
          Startup <br />
          <span className="text-primary italic opacity-90">Unicorn</span>
        </h1>

        <p className="text-base md:text-lg text-slate-400 font-semibold max-w-2xl mx-auto leading-relaxed uppercase tracking-tight">
          Engineer your startup's name for exponential growth, investor trust,
          and rapid market penetration.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-10 py-5 bg-primary hover:bg-white hover:text-dark text-white font-black uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-3 group shadow-xl shadow-primary/20"
          >
            Engineer My Name
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="flex items-center gap-3">
            <Target className="w-5 h-5 text-primary" />
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">
              Seed to IPO Protocol
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupNamingHero;
