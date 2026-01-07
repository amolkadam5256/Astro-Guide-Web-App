import React from "react";
import { CheckCircle2, Search, Target, Zap } from "lucide-react";

const NameAnalysisContent = () => {
  const highlights = [
    "Spelling Optimization",
    "Signature Analysis",
    "Lucky Initials",
    "Public Resonance",
  ];

  return (
    <section
      id="details"
      className="py-20 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10" data-aos="fade-right">
            <div className="space-y-4">
              <h4 className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">
                The Science of Sound
              </h4>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
                Vibrational <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-500">
                  Harmony
                </span>
              </h2>
            </div>

            <div className="space-y-8 text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-semibold italic">
              <p>
                Your name is the most repeated sound in your life. Every time it
                is spoken, written, or even thought, it broadcasts a specific
                frequency into the universal grid.
              </p>
              <p>
                If your name's total value clashes with your birth destiny, you
                might feel like you're swimming against the current. We adjust
                the spelling—often by just one letter—to turn that current in
                your favor.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-dark dark:text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="zoom-in">
            <div className="absolute -inset-4 bg-linear-to-r from-purple-600/20 to-blue-600/20 blur-3xl opacity-30" />
            <div className="relative bg-gray-50 dark:bg-[#0a1020] border border-gray-100 dark:border-white/5 p-16 md:p-24 overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 space-y-12">
                <div className="text-8xl md:text-9xl font-black text-purple-600/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none uppercase">
                  ABC
                </div>

                <div className="flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-dark dark:bg-white text-white dark:text-dark flex items-center justify-center rounded-full rotate-12 shadow-2xl border-4 border-purple-600/20">
                    <Search className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-dark dark:text-white uppercase tracking-tight">
                    Scientific Protocol
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-widest max-w-[200px]">
                    Chaldean & Pythagorean Cross-Analysis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NameAnalysisContent;
