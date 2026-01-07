import React from "react";
import { Compass, CheckCircle2 } from "lucide-react";

const LifePathWhoItsFor = () => {
  const users = [
    "Spiritual Seekers",
    "Career Switchers",
    "Growth Enthusiasts",
    "Youth starting out",
    "Retirees seeking purpose",
  ];

  return (
    <section className="py-32 px-4 bg-gray-50/30 dark:bg-[#060b18] border-y border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 space-y-12" data-aos="fade-right">
            <div className="space-y-4 text-center lg:text-left">
              <h4 className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">
                Strategic Alignment
              </h4>
              <h2 className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
                Who This{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/50">
                  Reading
                </span>{" "}
                Is For
              </h2>
            </div>

            <div className="grid gap-4">
              {users.map((user, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-6 p-6 bg-white dark:bg-[#0a1020] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="w-10 h-10 bg-primary text-white flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-widest text-dark dark:text-gray-200">
                    {user}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative" data-aos="fade-left">
            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full" />
            <div className="relative p-12 bg-white dark:bg-[#0a1020] border border-gray-200 dark:border-white/10 shadow-2xl">
              <h3 className="text-2xl font-black mb-10 text-dark dark:text-white uppercase tracking-tight italic border-b-2 border-primary inline-block pb-2">
                Reading Indicators
              </h3>
              <ul className="space-y-8">
                {[
                  "Seeking objective clarity in complex life phases.",
                  "Planning high-stakes professional transitions.",
                  "Persistent unexplained life patterns.",
                  "Need for data-driven spiritual strategy.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-5 group">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 font-semibold text-sm tracking-wide leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifePathWhoItsFor;
