import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const YearForecastCTA = () => {
  return (
    <section className="py-10 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden text-center">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[150px]" />
      </div>

      <div
        className="max-w-4xl mx-auto space-y-12 relative z-10"
        data-aos="zoom-in"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-3xl animate-pulse">
            <Calendar className="w-12 h-12" />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-[0.8]">
              Own Your <br />
              <span className="text-primary italic underline decoration-8 decoration-primary/20">
                Annual Flow
              </span>
            </h2>
            <p className="pt-5 text-sm md:text-base text-gray-400 font-bold uppercase tracking-widest max-w-2xl mx-auto">
              Preparation is the difference between a crisis and an opportunity.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-16 py-6 bg-primary hover:bg-primary/80 text-white font-black uppercase tracking-[0.4em] text-[10px] transition-all flex items-center justify-center gap-4 group rounded-full shadow-2xl shadow-primary/20"
          >
            Secure My 2025 Plan
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-20 py-8 bg-transparent border-2 border-dark dark:border-white text-dark dark:text-white font-black uppercase tracking-[0.4em] text-[10px] hover:bg-dark hover:text-white dark:hover:bg-white dark:hover:text-dark transition-all rounded-full"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default YearForecastCTA;
