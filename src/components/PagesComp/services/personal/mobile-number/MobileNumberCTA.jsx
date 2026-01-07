import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

const MobileNumberCTA = () => {
  return (
    <section className="py-10 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />

      <div
        className="max-w-4xl mx-auto space-y-12 relative z-10"
        data-aos="zoom-in"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center shadow-3xl animate-pulse">
            <Zap className="w-12 h-12" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter  mix-blend-difference">
              Switch Your <br />
              <span className="text-primary italic">Frequency</span>
            </h2>
            <p className="text-sm md:text-xl text-gray-500 font-semibold uppercase tracking-widest max-w-2xl mx-auto">
              Small change. Universal connection.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-10 py-6 bg-primary hover:bg-primary/80 text-white font-black uppercase tracking-[0.4em] text-[10px] transition-all flex items-center justify-center gap-4 group rounded-sm shadow-2xl"
          >
            Book My Audit
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-10 py-6 bg-dark dark:bg-white text-white dark:text-dark font-black uppercase tracking-[0.4em] text-[10px] hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all shadow-xl"
          >
            Other Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MobileNumberCTA;
