import React from "react";
import { Search, Globe, Target } from "lucide-react";

const PillarCard = ({ icon, title, desc }) => (
  <div className="p-10 bg-white dark:bg-[#0d1117] border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-all text-center group">
    <div className="w-12 h-12 bg-gray-50 dark:bg-black/40 text-primary flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
      {icon}
    </div>
    <h3 className="text-xl font-black uppercase text-dark dark:text-white mb-3 tracking-tighter">
      {title}
    </h3>
    <p className="text-[13px] text-gray-500 font-medium leading-relaxed">
      {desc}
    </p>
  </div>
);

const BusinessNamePillars = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-3">
          <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[9px]">
            The DNA of Success
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
            Corporate{" "}
            <span className="text-primary italic opacity-90">Architecture</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <PillarCard
            icon={<Search size={22} />}
            title="Vibrational Audit"
            desc="We analyze your existing brand name's consonants and vowels to check for commercial leaks."
          />
          <PillarCard
            icon={<Globe size={22} />}
            title="Naming New Ventures"
            desc="Starting from scratch? We provide a list of powerful, lucky names aligned with the founder's date of birth."
          />
          <PillarCard
            icon={<Target size={22} />}
            title="Market Timing"
            desc="Ensure your company formation or product launch happens during a 'Personal Year' of expansion."
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessNamePillars;
