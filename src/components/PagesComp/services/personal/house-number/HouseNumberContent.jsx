import React from "react";
import { CheckCircle2, Home, Wind, Shield } from "lucide-react";

const HouseNumberContent = () => {
  const aspects = [
    "Address Vibrational Sum",
    "Entry/Exit Numerology",
    "Resident Compatibility",
    "Space Clearing Remedies",
  ];

  return (
    <section className="py-12 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12" data-aos="fade-right">
            <div className="space-y-4">
              <h4 className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">
                The Sanctuary
              </h4>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
                Your House <br />
                <span className="text-primary italic underline decoration-4 underline-offset-8 decoration-primary/20">
                  Is Your Battery
                </span>
              </h2>
            </div>

            <div className="space-y-8 text-sm text-gray-600 dark:text-gray-400 font-semibold leading-relaxed italic">
              <p>
                A home is more than brick and mortar. It's a living frequency
                that either recharges you or drains you. If the house number
                doesn't resonate with its residents, exhaustion and persistent
                minor obstacles can occur.
              </p>
              <p className="not-italic text-dark dark:text-white font-black uppercase tracking-tight border-b-4 border-amber-600/30 pb-6">
                We provide detailed audits to harmonize your physical address
                with your personal destiny path, turning your home into a 'Power
                Spot'.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-4">
              {aspects.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center group">
                  <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-dark dark:text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group" data-aos="zoom-in">
            <div className="absolute inset-0 bg-amber-600/10 blur-[150px] rounded-full scale-125 group-hover:scale-150 transition-transform duration-1000" />
            <div className="relative p-12 md:p-20 bg-gray-50 dark:bg-[#0a1020] border border-gray-100 dark:border-white/5 shadow-3xl text-center space-y-12 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Home className="w-40 h-40 text-primary" />
              </div>
              <div className="w-24 h-24 bg-primary text-white flex items-center justify-center rounded-3xl mx-auto rotate-12 shadow-2xl">
                <Wind className="w-12 h-12" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-dark dark:text-white uppercase tracking-tighter italic">
                  Vastu-Numerology
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-widest max-w-[250px] mx-auto">
                  Cross-Dimensional Energy Analysis
                </p>
              </div>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-amber-600/20"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseNumberContent;
