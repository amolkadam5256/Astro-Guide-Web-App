import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket } from "lucide-react";

const StartupNamingCTA = () => {
  return (
    <section className="py-10 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_center,rgba(34,98,178,0.05)_0%,transparent_70%)]" />

      <div
        className="max-w-4xl mx-auto space-y-12 relative z-10"
        data-aos="zoom-in"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl">
            <Rocket className="w-8 h-8" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
              Launch <br />
              <span className="text-primary italic opacity-90">With Force</span>
            </h2>
            <p className="text-sm md:text-lg text-gray-400 font-semibold uppercase tracking-widest max-w-2xl mx-auto">
              Secure your startup's momentum through numerical engineering.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-12 py-5 bg-primary hover:bg-slate-900 text-white font-black uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-4 group shadow-xl"
          >
            Book Unicorn Audit
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

export default StartupNamingCTA;
