import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";

const CompatibilityCTA = () => {
  return (
    <section className="py-40 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.05)_0%,transparent_70%)]" />

      <div
        className="max-w-4xl mx-auto space-y-16 relative z-10"
        data-aos="zoom-in"
      >
        <div className="flex flex-col items-center gap-8">
          <div className="w-24 h-24 bg-rose-600 text-white rounded-full flex items-center justify-center shadow-3xl animate-bounce">
            <Heart className="w-12 h-12 fill-white" />
          </div>
          <div className="space-y-6">
            <h2 className="text-5xl md:text-[8rem] font-black text-dark dark:text-white uppercase tracking-tighter leading-[0.75]">
              Soul <br />
              <span className="text-rose-600 italic">Alignment</span>
            </h2>
            <p className="text-xl md:text-3xl text-gray-400 font-black uppercase tracking-widest max-w-2xl mx-auto">
              Discover the frequency of your union.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-10">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-20 py-8 bg-rose-600 hover:bg-rose-700 text-white font-black uppercase tracking-[0.4em] text-[10px] transition-all flex items-center justify-center gap-4 group rounded-full shadow-2xl shadow-rose-600/30"
          >
            Book Synergy Audit
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-20 py-8 bg-dark dark:bg-white text-white dark:text-dark font-black uppercase tracking-[0.4em] text-[10px] hover:bg-rose-600 hover:text-white dark:hover:bg-rose-600 dark:hover:text-white transition-all shadow-xl rounded-full"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompatibilityCTA;
