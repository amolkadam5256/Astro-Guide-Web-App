import React from "react";
import { CheckCircle2, Clock, TrendingUp, BarChart3 } from "lucide-react";

const TimingStrategyContent = () => {
  const points = [
    "Peak expansion windows",
    "Precautionary rest cycles",
    "Asset acquisition timing",
    "Leadership transition dates",
  ];

  return (
    <section className="py-14 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative" data-aos="fade-right">
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full scale-110" />
            <div className="relative p-10 md:p-14 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-2xl text-center space-y-10 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Clock className="w-32 h-32 text-primary" />
              </div>
              <div className="w-16 h-16 bg-primary text-white flex items-center justify-center rounded-full mx-auto shadow-xl">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-dark dark:text-white uppercase tracking-tighter">
                  Strategic <br />
                  Cycles
                </h3>
                <div className="h-0.5 w-16 bg-primary mx-auto" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {points.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white dark:bg-[#0a1020] border border-gray-100 dark:border-white/5 space-y-2"
                  >
                    <p className="text-[10px] font-black uppercase tracking-widest text-dark dark:text-gray-400 leading-tight">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-10" data-aos="fade-left">
            <div className="space-y-3">
              <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">
                Temporal Science
              </h4>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
                The Calendar <br />
                <span className="text-primary italic opacity-90">
                  Of Success
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed italic">
              <p>
                In business, effort without timing is friction. Even the best
                plan will fail if initiated during a 'Void 4' cycle or a
                clashing 'Founder Year'.
              </p>
              <p className="not-italic text-dark dark:text-white font-semibold uppercase tracking-tight border-l-4 border-primary pl-8 text-sm">
                We identify your business's 12-month peaks and troughs, allowing
                you to deploy capital during expansion windows and consolidate
                resources during consolidation phases.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-primary/30"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimingStrategyContent;
