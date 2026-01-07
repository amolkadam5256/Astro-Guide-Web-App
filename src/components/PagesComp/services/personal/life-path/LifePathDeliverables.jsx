import React from "react";
import { Zap, ShieldCheck, Map, TrendingUp } from "lucide-react";

const LifePathDeliverables = () => {
  const deliverables = [
    {
      icon: Map,
      title: "Life Roadmap",
      desc: "Detailed breakdown of the three major phases of your life journey.",
    },
    {
      icon: Zap,
      title: "Power Periods",
      desc: "Identification of years where your Life Path energy is strongest.",
    },
    {
      icon: ShieldCheck,
      title: "Karmic Lessons",
      desc: "Deep understanding of the challenges you are meant to overcome.",
    },
    {
      icon: TrendingUp,
      title: "Peak Cycles",
      desc: "Timing analysis for your major personal and professional peaks.",
    },
  ];

  return (
    <section className="py-32 px-4 bg-gray-50/50 dark:bg-[#060b18]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-px bg-gray-200 dark:bg-white/5 border border-gray-200 dark:border-white/5">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0a1020] p-12 space-y-8 hover:bg-blue-600/5 transition-colors group"
              data-aos="fade-up"
              data-aos-delay={idx * 10}
            >
              <item.icon className="w-10 h-10 text-primary group-hover:scale-125 transition-transform" />
              <div className="space-y-4">
                <h3 className="text-xl font-black text-dark dark:text-white uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-16 flex flex-col md:flex-row items-center gap-12 p-10 border border-blue-600/30 bg-blue-600/5 relative overflow-hidden"
          data-aos="zoom-in"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 -translate-y-1/2 translate-x-1/2 rotate-45" />
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 bg-primary text-white flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <p className="font-black uppercase tracking-widest text-xs dark:text-white">
              Standard Delivery: 5 Days
            </p>
          </div>
          <div className="hidden md:block w-px h-8 bg-blue-600/30" />
          <p className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-tight">
            Format: Comprehensive Digital Soul Map (PDF)
          </p>
        </div>
      </div>
    </section>
  );
};

export default LifePathDeliverables;
