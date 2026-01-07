import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../../../../assets/images/images";

const NameAnalysisHero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-20 px-4">
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-10 dark:opacity-25 pointer-events-none scale-110"
        style={{
          backgroundImage: `url(${
            images.hero.astrologyBg || images.hero.patternBg
          })`,
        }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-purple-50/50 via-white to-white dark:from-slate-900/50 dark:via-[#050a15] dark:to-[#050a15] -z-10" />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-10">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 dark:bg-primary text-primary dark:text-white text-[9px] font-black uppercase tracking-[0.4em] mb-4 border border-primary/20 rounded-full backdrop-blur-md">
          <Sparkles className="w-5 h-5 text-primary dark:text-white" />
          <span>Scientific Vibrational Alignment</span>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tighter leading-[0.9] italic">
          Your Name <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-600">
            Is Your Code
          </span>
        </h1>

        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-semibold max-w-2xl mx-auto leading-snug tracking-normal">
          Align your name's vibration with your birth destiny for a life of
          effortless success and recognition.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-10 py-4 bg-primary hover:bg-primary/80 text-white font-black uppercase tracking-[0.3em] text-[10px] transition-all shadow-[0_0_50px_rgba(147,51,234,0.3)] flex items-center justify-center gap-4 group rounded-sm"
          >
            Analyze My Name
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
          <a
            href="#details"
            className="text-dark dark:text-white font-black uppercase tracking-widest text-[10px] hover:text-primary transition-colors"
          >
            See Impact Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default NameAnalysisHero;
