import React from "react";
import { Building2, TrendingUp, ShieldCheck, Map } from "lucide-react";

const CommercialDeliverables = () => {
  const items = [
    {
      icon: Building2,
      title: "Commercial Audit",
      desc: "Vibrational analysis of your office/factory address and its alignment with business goals.",
    },
    {
      icon: TrendingUp,
      title: "Efficiency Map",
      desc: "Identifying 'Profit Zones' and 'Stagnant Zones' within your floor plan based on numerical flow.",
    },
    {
      icon: ShieldCheck,
      title: "Remedy Strategy",
      desc: "Institutional-grade adjustments for clashing frequencies in leadership offices or entrance ways.",
    },
    {
      icon: Map,
      title: "Expansion Window",
      desc: "Optimal months and years for future commercial expansion or asset acquisition.",
    },
  ];

  return (
    <section className="py-32 px-4 bg-gray-50/50 dark:bg-[#060b18] border-y border-gray-100 dark:border-white/5 relative group overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="space-y-4">
            <h4 className="text-amber-600 font-black uppercase tracking-[0.5em] text-[10px]">
              The Corporate Assets
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
              Institutional <br />
              <span className="text-amber-600 italic">Deliverables</span>
            </h2>
          </div>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] italic border-b-2 border-amber-600 pb-2">
            Proprietary Asset Audit Dossiers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 dark:bg-white/10 border border-gray-200 dark:border-white/10 shadow-3xl">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0a1020] p-16 space-y-8 hover:bg-amber-600/5 transition-all duration-500 group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <item.icon className="w-12 h-12 text-amber-600 group-hover:scale-125 transition-transform" />
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-dark dark:text-white uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommercialDeliverables;
