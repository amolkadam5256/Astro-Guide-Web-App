import React from "react";
import { CheckCircle2, User } from "lucide-react";

const YearForecastWhoItsFor = () => {
  const targets = [
    "Business Owners planning expansion",
    "Investors entering new markets",
    "Couples planning marriage or kids",
    "Individuals seeking career growth",
    "Anyone facing a series of obstacles",
  ];

  return (
    <section className="py-32 px-4 relative bg-gray-50 dark:bg-[#060b18] border-y border-gray-100 dark:border-white/5 overflow-hidden">
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-600/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12" data-aos="fade-right">
            <div className="space-y-4">
              <h4 className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">
                Audience Match
              </h4>
              <h2 className="text-2xl md:text-4xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
                Who Needs A <br />
                <span className="text-primary italic underline decoration-4">
                  Strategy Audit?
                </span>
              </h2>
            </div>

            <div className="grid gap-4">
              {targets.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-6 p-6 bg-white dark:bg-[#0a1020] border border-gray-100 dark:border-white/5 shadow-sm group hover:border-primary transition-all"
                >
                  <div className="w-12 h-12 bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <User className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-black uppercase tracking-widest text-dark dark:text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="p-12 bg-dark text-white space-y-10 border-t-8 border-primary shadow-2xl relative">
              <div className="text-8xl font-black text-white/5 absolute bottom-0 right-0 leading-none">
                2025
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight">
                Vibrational Indicators
              </h3>
              <ul className="space-y-6">
                {[
                  "Feeling out of sync with your goals.",
                  "Unexplained delays in major projects.",
                  "Persistent minor obstacles in daily life.",
                  "Approaching a milestone birthday/event.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 group">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-gray-400 font-medium text-sm leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="pt-8 flex items-center gap-4">
                <span className="w-12 h-px bg-white/20" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                  Urgent Selection Recommended
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YearForecastWhoItsFor;
