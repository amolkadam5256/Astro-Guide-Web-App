import React from "react";
import { TrendingUp, Clock, AlertTriangle, Zap } from "lucide-react";

const YearForecastContent = () => {
  const focuses = [
    { icon: TrendingUp, label: "Expansion Windows" },
    { icon: Clock, label: "Wait-and-Watch Cycles" },
    { icon: AlertTriangle, label: "Precautionary Phases" },
    { icon: Zap, label: "Luck Accelerators" },
  ];

  return (
    <section className="py-12 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h4 className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">
                Strategic Timing
              </h4>
              <h2 className="text-2xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
                Master Your <br />
                <span className="text-primary">Personal Year</span>
              </h2>
            </div>

            <div className="space-y-8 text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed italic">
              <p>
                Life doesn't happen in a straight line; it move in nine-year
                cycles. Every year has a specific "job" to do—whether it's for
                planting seeds, harvesting rewards, or resting.
              </p>
              <p className="not-italic text-dark dark:text-white font-black uppercase tracking-tight">
                We calculate your current location in this cycle to ensure
                you're making the right moves at the right time.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
              {focuses.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-4 p-8 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-all group"
                >
                  <item.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-black uppercase tracking-widest text-dark dark:text-gray-200">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 blur-[150px] rounded-full" />
            <div className="relative aspect-square flex items-center justify-center">
              <div className="w-full h-full border-4 border-dashed border-primary/20 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-20 border border-primary/30 rounded-full flex items-center justify-center bg-white dark:bg-[#0a1020] shadow-2xl">
                <div className="text-center space-y-4">
                  <div className="text-8xl font-black text-primary">365</div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
                    Opportunities
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

export default YearForecastContent;
