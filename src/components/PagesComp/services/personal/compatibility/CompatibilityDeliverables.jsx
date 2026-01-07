import React from "react";
import { Heart, Users, ShieldCheck, Zap } from "lucide-react";

const CompatibilityDeliverables = () => {
  const items = [
    {
      icon: Users,
      title: "Synergy Matrix",
      desc: "Detailed mapping of how your core numbers interact across 10 vital life sectors.",
    },
    {
      icon: Heart,
      title: "Harmony Score",
      desc: "A percentage-based resonance score for Physical, Mental, and Spiritual compatibility.",
    },
    {
      icon: ShieldCheck,
      title: "Remedy Strategy",
      desc: "Specific days, colors, and behaviors to harmonize clashing frequencies.",
    },
    {
      icon: Zap,
      title: "Timing Guide",
      desc: "Best dates for major shared milestones like marriage, engagement, or business launch.",
    },
  ];

  return (
    <section className="py-32 px-4 bg-rose-50/20 dark:bg-[#060b18] border-y border-gray-100 dark:border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-rose-600 to-transparent" />
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <h4 className="text-rose-600 font-black uppercase tracking-[0.6em] text-[10px]">
            The Insights
          </h4>
          <h2 className="text-4xl md:text-6xl font-black text-dark dark:text-white uppercase tracking-tighter">
            What You <span className="text-rose-600 italic">Uncover</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0a1020] p-12 shadow-sm border border-gray-100 dark:border-white/5 hover:border-rose-600/30 transition-all duration-500 group relative"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <item.icon className="w-10 h-10 text-rose-600 mb-8 group-hover:scale-110 transition-transform" />
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
          className="flex flex-col md:flex-row items-center justify-between gap-12 p-12 bg-white dark:bg-[#0a1020] border-l-8 border-rose-600 shadow-2xl"
          data-aos="zoom-in"
        >
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-widest text-rose-600">
              Report Status
            </p>
            <h4 className="text-2xl font-black text-dark dark:text-white uppercase tracking-tighter">
              Comprehensive Synergy Dossier
            </h4>
          </div>
          <div className="flex gap-4 items-center">
            <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Standard Delivery
              </p>
              <p className="font-bold text-dark dark:text-white text-lg">
                3-5 Working Days
              </p>
            </div>
            <div className="w-px h-10 bg-gray-100 dark:bg-white/10" />
            <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Format
              </p>
              <p className="font-bold text-dark dark:text-white text-lg">
                Private PDF Report
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompatibilityDeliverables;
