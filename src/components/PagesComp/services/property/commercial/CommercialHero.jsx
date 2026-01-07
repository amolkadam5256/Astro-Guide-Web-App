import React from "react";
import { Building2, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../../../../assets/images/images";

const CommercialHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-32 px-4 bg-slate-100 dark:bg-[#050a15]">
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-5 dark:opacity-10 pointer-events-none grayscale"
        style={{ backgroundImage: `url(${images.hero.astrologyBg})` }}
      />

      <div className="max-w-7xl mx-auto text-center relative z-10 space-y-12">
        <div
          className="inline-flex items-center gap-4 px-8 py-3 bg-slate-900/5 dark:bg-white/5 text-slate-900 dark:text-white text-[10px] font-black uppercase tracking-[0.6em] mb-4 border border-slate-900/10 dark:border-white/10"
          data-aos="fade-down"
        >
          <Building2 className="w-5 h-5 text-amber-600" />
          <span>Industrial Asset Alignment</span>
        </div>

        <h1
          className="text-6xl md:text-8xl lg:text-[10rem] font-black text-dark dark:text-white mb-6 uppercase tracking-[-0.05em] leading-[0.8]"
          data-aos="fade-up"
        >
          Commercial <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-600 to-amber-800 italic">
            Equity
          </span>
        </h1>

        <p
          className="text-xl md:text-3xl text-gray-500 dark:text-gray-400 font-bold max-w-4xl mx-auto leading-tight uppercase tracking-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Align your office, factory, or showroom with the frequency of profit.
          Turn your commercial space into an institutional powerhouse.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto px-20 py-8 bg-amber-600 hover:bg-slate-900 text-white font-black uppercase tracking-[0.4em] text-[10px] transition-all flex items-center justify-center gap-4 group shadow-3xl rounded-none"
          >
            Audit My Asset
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-6 h-6 text-amber-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">
              Institutional Quality Protocol
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialHero;
