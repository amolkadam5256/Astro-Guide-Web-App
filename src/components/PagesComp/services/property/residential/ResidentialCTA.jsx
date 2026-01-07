import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Home } from "lucide-react";

const ResidentialCTA = () => {
  return (
    <section className="py-40 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.05)_0%,transparent_70%)]" />

      <div
        className="max-w-4xl mx-auto space-y-16 relative z-10"
        data-aos="zoom-in"
      >
        <div className="flex flex-col items-center gap-8">
          <div className="w-24 h-24 bg-orange-600 text-white rounded-3xl flex items-center justify-center shadow-3xl rotate-6 animate-pulse">
            <Home className="w-12 h-12" />
          </div>
          <div className="space-y-6">
            <h2 className="text-5xl md:text-[8rem] font-black text-dark dark:text-white uppercase tracking-tighter leading-[0.75]">
              Heal <br />
              <span className="text-orange-600 italic">Your Home</span>
            </h2>
            <p className="text-xl md:text-3xl text-gray-400 font-extrabold uppercase tracking-widest max-w-2xl mx-auto">
              Turn your address into a prosperity magnet.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-10">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-24 py-8 bg-orange-600 hover:bg-orange-700 text-white font-black uppercase tracking-[0.4em] text-[10px] transition-all flex items-center justify-center gap-4 group rounded-md shadow-2xl"
          >
            Book Home Audit
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-24 py-8 bg-dark dark:bg-white text-white dark:text-dark font-black uppercase tracking-[0.4em] text-[10px] hover:bg-orange-600 hover:text-white dark:hover:bg-orange-600 dark:hover:text-white transition-all shadow-xl"
          >
            Browse Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResidentialCTA;
