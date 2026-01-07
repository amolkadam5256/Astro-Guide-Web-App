import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { images } from "../../../../../assets/images/images";

const NameAnalysisCTA = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-white dark:bg-[#050a15]">
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-5 dark:opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${images.hero.patternBg})` }}
      />

      <div className="max-w-5xl mx-auto relative z-10 text-center space-y-12">
        <div className="flex flex-col items-center gap-6" data-aos="zoom-in">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-2xl">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-6xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
              Rewrite Your <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-600 italic">
                Destiny Blueprint
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-bold uppercase tracking-tight">
              Small correction. Massive transformation.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-center gap-6 pt-10"
          data-aos="fade-up"
        >
          <Link
            to="/contact"
            className="px-12 py-6 bg-dark dark:bg-white text-white dark:text-dark font-black uppercase tracking-[0.4em] text-[10px] hover:bg-primary dark:hover:bg-primary hover:text-white transition-all shadow-2xl"
          >
            Claim Your Name Audit
          </Link>
          <Link
            to="/services"
            className="px-12 py-6  bg-transparent border-2 border-dark dark:border-white text-dark dark:text-white font-black uppercase tracking-[0.4em] text-[10px] hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-dark transition-all hover:border-primary"
          >
            Browse Other Services
          </Link>
        </div>

        <div className="flex items-center justify-center gap-12 pt-16 border-t border-gray-100 dark:border-white/5 opacity-50 overflow-hidden grayscale">
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-600 hover:text-primary transition-all shrink-0">
            Trusted Protocol
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-600 hover:text-primary transition-all shrink-0">
            Data Encrypted
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-600 hover:text-primary transition-all shrink-0">
            Senior Expert Lead
          </span>
        </div>
      </div>
    </section>
  );
};

export default NameAnalysisCTA;
