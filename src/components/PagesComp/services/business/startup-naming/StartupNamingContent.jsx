import React from "react";
import { CheckCircle2, Zap, Target, TrendingUp } from "lucide-react";

const StartupNamingContent = () => {
  const focuses = [
    "Viral Coefficient Sum",
    "Investor Confidence Vibration",
    "Scaleable Energy Matrix",
    "Domain Presence Audit",
  ];

  return (
    <section className="py-24 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10" data-aos="fade-right">
            <div className="space-y-3">
              <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">
                Exponential Logic
              </h4>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
                The Unicorn <br />
                <span className="text-primary italic opacity-90">
                  Frequency
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed italic">
              <p>
                A startup is a high-velocity entity. Its name doesn't just need
                to be 'catchy'—it needs to contain the kinetic energy required
                for rapid scaling.
              </p>
              <p className="not-italic text-dark dark:text-white font-black uppercase tracking-tight border-l-4 border-primary pl-8 py-4 bg-gray-50 dark:bg-white/5 text-sm">
                We use numerical cross-analysis to ensure your startup name
                attracts early adopters, top talent, and venture capital, while
                maintaining the 'Flexibility 5' or 'Execution 8' vibration.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {focuses.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 items-center group rounded-full"
                >
                  <div className="w-8 h-8 bg-primary/5 text-primary flex items-center justify-center shrink-0 shadow-xl group-hover:rotate-45 transition-transform rounded-full">
                    <CheckCircle2 className="w-4 h-4 " />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-dark dark:text-gray-200 ">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group" data-aos="fade-left">
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full scale-125" />
            <div className="relative p-10 md:p-14 bg-gray-50 dark:bg-[#0a1020] border border-gray-100 dark:border-white/5 shadow-2xl text-center space-y-10">
              <div className="flex justify-center gap-4">
                <div className="w-16 h-16 bg-primary text-white flex items-center justify-center rounded-full shadow-xl">
                  <Zap className="w-8 h-8" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black text-dark dark:text-white uppercase tracking-tighter italic">
                  Velocity Protocol
                </h3>
                <div className="flex items-center justify-center gap-3">
                  <span className="h-0.5 w-12 bg-primary" />
                  <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 italic">
                    Hyper-Scale Analysis
                  </p>
                  <span className="h-0.5 w-12 bg-primary" />
                </div>
              </div>

              <div className="flex justify-center gap-6 pt-6">
                <TrendingUp className="w-8 h-8 text-primary/30 group-hover:text-primary transition-colors" />
                <Target className="w-8 h-8 text-primary/30 group-hover:text-primary transition-colors delay-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupNamingContent;
