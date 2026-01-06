import React from "react";
import {
  Binary,
  ShieldCheck,
  Target,
  Zap,
  XCircle,
  Beaker,
} from "lucide-react";

const WhatWeDo = () => {
  const points = [
    {
      icon: Target,
      title: "Focused",
      desc: "Deep specialization in Pythagorean and Chaldean systems.",
    },
    {
      icon: Beaker,
      title: "Scientific",
      desc: "Data-driven analysis rooted in logical numerical patterns.",
    },
    {
      icon: Binary,
      title: "Numerology-Only",
      desc: "Pure calculations without mixing contradictory methods.",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-[#080c14]">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none overflow-hidden flex items-center justify-center">
        <span className="text-[40rem] font-black leading-none">123</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-top">
          {/* Content Side */}
          <div className="space-y-10 pt-20" data-aos="fade-right">
            <div className="space-y-4">
              <h4 className="text-primary font-black uppercase tracking-[0.4em] text-xs">
                Our Core Philosophy
              </h4>
              <h2 className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-[0.9]">
                Focused. Scientific. <br />
                <span className="text-primary">Numerology-Only.</span>
              </h2>
            </div>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-xl">
              AstroGuide is a specialized numerology consulting platform helping
              individuals and businesses align names, numbers, timing, and
              decisions using proven numerology systems.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {points.map((point, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl">
                    <point.icon size={24} />
                  </div>
                  <h3 className="font-black uppercase tracking-wider text-xs text-dark dark:text-white">
                    {point.title}
                  </h3>
                  <p className="text-[11px] font-bold text-gray-500 uppercase leading-tight tracking-wide">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visualization Side */}
          <div className="relative" data-aos="fade-left">
            <div className="relative bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 p-8 md:p-12 rounded-4xl overflow-hidden group">
              {/* Animated scanning effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary/30 blur-sm animate-[scan_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="space-y-8 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Exclusion Protocol v1.0
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-black text-dark dark:text-white uppercase tracking-tight">
                    Strict Boundary Implementation
                  </h3>
                  <p className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest leading-loose">
                    We maintain absolute professional focus to ensure the
                    highest accuracy in our specialized field.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "No Astrology Forecasts",
                    "No Tarot Card Readings",
                    "No Generic Horoscopes",
                    "No Intuitive Guesswork",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center p-4 bg-white dark:bg-black/40 border border-gray-100 dark:border-white/5 rounded-xl group/item hover:border-red-500/30 transition-all cursor-default"
                    >
                      <XCircle className="w-5 h-5 text-red-500/50 mr-4 group-hover/item:text-red-500 transition-colors" />
                      <span className="text-xs font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl">
                    <div className="flex items-center space-x-3 text-primary mb-2">
                      <ShieldCheck size={18} />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        Position Verified
                      </span>
                    </div>
                    <p className="text-[11px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-tight leading-relaxed">
                      Our work is strictly rooted in numerical analysis, logic,
                      and real-world application.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/5 blur-[80px] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default WhatWeDo;
