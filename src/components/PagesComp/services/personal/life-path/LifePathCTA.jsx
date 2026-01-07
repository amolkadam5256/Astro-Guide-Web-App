import React from "react";
import { Link } from "react-router-dom";
import { Navigation, ArrowRight } from "lucide-react";

const LifePathCTA = () => {
  return (
    <section className="py-10 px-4 relative overflow-hidden bg-white dark:bg-[#050a15] text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-600/[0.03] rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cyan-600/[0.03] rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto space-y-12" data-aos="zoom-in">
        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 bg-dark dark:bg-white text-white dark:text-dark flex items-center justify-center rounded-full shadow-2xl animate-bounce">
            <Navigation className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter ">
            Your Journey <br />
            <span className="text-primary italic">Is Starting Here</span>
          </h2>
          <p className="text-sm md:text-xl text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest">
            No more wandering. Start walking your path.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-12 py-6 bg-primary hover:bg-primary/80 text-white font-black uppercase tracking-[0.4em] text-[10px] transition-all shadow-2xl flex items-center justify-center gap-4 group"
          >
            Book Soul Roadmap
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-12 py-6 bg-white dark:bg-transparent border-2 border-dark dark:border-white text-dark dark:text-white font-black uppercase tracking-[0.4em] text-[10px] hover:bg-dark hover:text-white dark:hover:bg-white dark:hover:text-dark transition-all"
          >
            Other Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LifePathCTA;
