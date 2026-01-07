import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";

const CompanyNamingCTA = () => {
  return (
    <section className="py-24 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_center,rgba(34,98,178,0.05)_0%,transparent_70%)]" />

      <div
        className="max-w-5xl mx-auto space-y-12 relative z-10"
        data-aos="zoom-in"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="w-16 h-16 bg-primary text-white rounded-md flex items-center justify-center shadow-2xl rotate-12">
            <Briefcase className="w-8 h-8" />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
              Brand <br />
              <span className="text-primary italic opacity-90">Dominance</span>
            </h2>
            <p className="text-sm md:text-lg text-gray-400 font-bold uppercase tracking-widest max-w-3xl mx-auto">
              Secure your corporate legacy through numerical engineering.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-12 py-5 bg-primary hover:bg-slate-900 text-white font-black uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-4 group shadow-xl shadow-primary/20"
          >
            Book Corporate Audit
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-12 py-5 bg-transparent border border-primary text-primary font-black uppercase tracking-[0.3em] text-[10px] hover:bg-primary hover:text-white transition-all shadow-xl"
          >
            Other Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompanyNamingCTA;
