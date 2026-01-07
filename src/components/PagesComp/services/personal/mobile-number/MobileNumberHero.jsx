import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../../../../assets/images/images";

const MobileNumberHero = () => {
  return (
    <section className="relative  flex items-center justify-center overflow-hidden py-12 px-4 bg-slate-900">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 pointer-events-none grayscale mix-blend-overlay"
        style={{ backgroundImage: `url(${images.hero.patternBg})` }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10 space-y-10">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.5em] mb-4 border border-blue-500/30 backdrop-blur-xl">
          <Phone className="w-4 h-4" />
          <span>Telephonic Vibration Audit</span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-[0.85]">
          Your Number <br />
          <span className="text-primary">Your Signal</span>
        </h1>

        <p className="text-sm md:text-xl text-slate-400 font-semibold max-w-3xl mx-auto leading-relaxed">
          Your mobile number is your primary digital identity. Ensure its
          frequency attracts wealth, connections, and peace.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-12 py-6 bg-primary hover:bg-primary/80 text-white font-black uppercase tracking-[0.4em] text-[10px] transition-all flex items-center justify-center gap-4 group shadow-[0_0_40px_rgba(37,99,235,0.4)]"
          >
            Audit My Number
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
          <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 italic">
            Scientific Frequency Matching
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileNumberHero;
