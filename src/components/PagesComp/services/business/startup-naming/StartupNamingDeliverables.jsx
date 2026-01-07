import React from "react";
import { Zap, Rocket, ShieldCheck, Target } from "lucide-react";

const StartupNamingDeliverables = () => {
  const items = [
    {
      icon: Rocket,
      title: "Viral Sum Analysis",
      desc: "Detailed audit of how your name's phonetic vibration supports word-of-mouth growth and digital sharing.",
    },
    {
      icon: Target,
      title: "VC Attraction",
      desc: "Identifying the 'Execution 8' or 'Ambition 1' frequencies that investors subconsciously trust.",
    },
    {
      icon: ShieldCheck,
      title: "Pivot Protection",
      desc: "Selecting a numerical structure that allows for future pivots without losing brand equity.",
    },
    {
      icon: Zap,
      title: "Launch Window",
      desc: "A 12-month calendar of auspicious dates for your product beta and official public launch.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50/50 dark:bg-[#060b18] border-y border-gray-100 dark:border-white/5 relative group overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="space-y-3">
            <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[9px]">
              The Launch Assets
            </h4>
            <h2 className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
              Vibrational <br />
              <span className="text-primary italic opacity-90">Equity</span>
            </h2>
          </div>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-[9px] italic border-b-2 border-primary pb-2">
            High-Velocity Brand Reports
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0a1020] p-10 border-l-4 border-transparent hover:border-primary transition-all duration-500 shadow-xl group/card relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/card:scale-125 transition-transform">
                <item.icon className="w-10 h-10 text-primary" />
              </div>
              <div className="relative z-10 space-y-4">
                <item.icon className="w-8 h-8 text-primary mb-2 opacity-70" />
                <div className="space-y-3">
                  <h3 className="text-lg font-black text-dark dark:text-white uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-[13px] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col lg:flex-row items-center justify-between gap-10 p-10 md:p-14 bg-primary text-white shadow-2xl relative overflow-hidden rounded-none"
          data-aos="zoom-in"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Rocket className="w-32 h-32" />
          </div>
          <p className="text-2xl font-black uppercase tracking-tighter leading-tight max-w-xl">
            From Stealth Mode To Unicorn Status. Your Name Is Your First Major
            Innovation.
          </p>
          <div className="text-center sm:text-right shrink-0">
            <p className="text-[9px] font-black uppercase tracking-widest opacity-70 mb-1">
              Standard Report Format
            </p>
            <p className="font-bold text-lg uppercase tracking-tighter italic">
              Unicorn Launch Deck PDF
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupNamingDeliverables;
