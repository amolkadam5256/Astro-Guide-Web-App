import React from "react";
import { Users, Heart, ShieldCheck, Zap } from "lucide-react";

const CompatibilityContent = () => {
  const points = [
    "Life Path Synergy",
    "Psychic Number Match",
    "Karmic Clashes Audit",
    "Communication Harmony",
  ];

  return (
    <section className="py-32 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12" data-aos="fade-right">
            <div className="space-y-4">
              <h4 className="text-rose-600 font-black uppercase tracking-[0.5em] text-[10px]">
                Soul Dynamics
              </h4>
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
                The Language <br />
                <span className="text-rose-600 underline underline-offset-8 decoration-rose-600/20">
                  Of Numbers
                </span>
              </h2>
            </div>

            <div className="space-y-8 text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed italic">
              <p>
                Relationships aren't just about personalities; they are about
                numerical resonance. When two people come together, their
                personal years, life paths, and expression numbers create a
                third energy—the 'Relationship Vibration'.
              </p>
              <p className="not-italic text-dark dark:text-white font-black uppercase tracking-tight border-l-4 border-rose-600 pl-6">
                We identify the areas of natural ease and potential friction,
                providing practical remedies to bridge the gaps and strengthen
                the bond.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-4">
              {points.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center group">
                  <div className="w-12 h-12 rounded-2xl bg-rose-600/5 text-rose-600 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-all shadow-inner">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-dark dark:text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="zoom-in">
            <div className="absolute inset-0 bg-rose-600/10 blur-[150px] rounded-full scale-110" />
            <div className="relative aspect-square flex items-center justify-center">
              <div className="absolute inset-0 border-8 border-rose-600/5 rounded-full animate-pulse" />
              <div className="relative z-10 p-16 bg-white dark:bg-[#0a1020] border border-gray-100 dark:border-white/5 rounded-full shadow-3xl text-center flex flex-col items-center justify-center gap-6">
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-rose-600 text-white flex items-center justify-center rounded-full shadow-2xl">
                    <Users className="w-8 h-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-dark dark:text-white uppercase tracking-tighter">
                    Unified Field
                  </h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Relationship Resonance Analysis
                  </p>
                </div>
                <div className="h-1 w-20 bg-linear-to-r from-rose-600 to-pink-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompatibilityContent;
