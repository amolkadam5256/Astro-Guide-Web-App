import React from "react";
import { MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../../../../assets/images/images";

const ConsultationHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-24 px-4 bg-white dark:bg-[#050a15]">
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-5 dark:opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${images.hero.astrologyBg})` }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        <div
          className="inline-flex items-center gap-3 px-4 py-1.5 bg-primary/5 dark:bg-primary/20 text-primary dark:text-primary text-[9px] font-black uppercase tracking-[0.4em] mb-4 border border-primary/20 rounded-full"
          data-aos="fade-down"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Premium Advisory Service</span>
        </div>

        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-black text-dark dark:text-white mb-4 uppercase tracking-tighter leading-none"
          data-aos="fade-up"
        >
          Expert <br />
          <span className="text-primary italic opacity-90">Consultation</span>
        </h1>

        <p
          className="text-base md:text-lg text-gray-500 dark:text-gray-400 font-bold max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Get direct access to senior numerologists for deep-dive analysis and
          personalized life strategy. One-on-one sessions for serious seekers.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto px-10 py-5 bg-primary hover:bg-primary-dark-1 text-white font-black uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-3 group shadow-xl rounded-sm"
          >
            Schedule Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-primary opacity-60" />
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 italic">
              Global Expert Panel
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationHero;
