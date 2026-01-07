import React from "react";
import { Calendar, Key, Sparkles, Map } from "lucide-react";

const OpeningDatesDeliverables = () => {
  const items = [
    {
      icon: Calendar,
      title: "Muhurta Report",
      desc: "Top 3 auspicious dates and times for your property inauguration or housewarming.",
    },
    {
      icon: Key,
      title: "Threshold Ritual",
      desc: "Step-by-step guidance on the first action to take when entering for the first time.",
    },
    {
      icon: Sparkles,
      title: "Elemental Setup",
      desc: "Recommendations for placement of symbolic items during the opening ceremony.",
    },
    {
      icon: Map,
      title: "Expansion Outlook",
      desc: "Timeline for future significant milestones based on the opening date energy.",
    },
  ];

  return (
    <section className="py-32 px-4 bg-gray-50/50 dark:bg-[#060b18] border-y border-gray-100 dark:border-white/5 relative group overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="space-y-4">
            <h4 className="text-amber-600 font-black uppercase tracking-[0.5em] text-[10px]">
              The Sacred Output
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
              Ceremonial <br />
              <span className="text-amber-600 italic">Insights</span>
            </h2>
          </div>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] italic border-b-2 border-amber-600 pb-2">
            Proprietary Temporal Mapping Dossiers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0a1020] p-12 border-b-8 border-transparent hover:border-amber-600 transition-all duration-500 shadow-xl group/card relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/card:scale-125 transition-transform">
                <item.icon className="w-12 h-12 text-amber-600" />
              </div>
              <div className="relative z-10 space-y-6">
                <item.icon className="w-8 h-8 text-amber-600 mb-4" />
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-dark dark:text-white uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpeningDatesDeliverables;
