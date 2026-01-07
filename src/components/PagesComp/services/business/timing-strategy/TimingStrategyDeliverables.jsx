import React from "react";
import { Clock, Calendar, TrendingUp, BarChart3 } from "lucide-react";

const TimingStrategyDeliverables = () => {
  const items = [
    {
      icon: Calendar,
      title: "12-Month Peak Chart",
      desc: "Specific months identified for expansion, marketing, and internal consolidation.",
    },
    {
      icon: TrendingUp,
      title: "Expansion Windows",
      desc: "Optimal dates for product launches, store openings, or major contracts.",
    },
    {
      icon: BarChart3,
      title: "Resource Audit",
      desc: "When to hire, when to invest, and when to conserve based on personal and business cycles.",
    },
    {
      icon: Clock,
      title: "Precaution Guide",
      desc: "Specific dates to avoid high-risk financial decisions or legal filings.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50/50 dark:bg-[#060b18] border-y border-gray-100 dark:border-white/5 relative group overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="space-y-3">
            <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[9px]">
              The Strategic Outlook
            </h4>
            <h2 className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
              Timing <br />
              <span className="text-primary italic opacity-90">
                Deliverables
              </span>
            </h2>
          </div>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-[9px] italic border-b-2 border-primary pb-2">
            Proprietary Temporal Mapping
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
                  <h3 className="text-xl font-black text-dark dark:text-white uppercase tracking-tight">
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
      </div>
    </section>
  );
};

export default TimingStrategyDeliverables;
