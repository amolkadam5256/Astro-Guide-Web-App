import React from "react";
import { Search, FileText, BarChart3, TrendingUp } from "lucide-react";

const CompanyNamingDeliverables = () => {
  const items = [
    {
      icon: Search,
      title: "Vibrational Audit",
      desc: "Analysis of 3 proposed names against your sector frequency and personal birth numbers.",
    },
    {
      icon: BarChart3,
      title: "Market Resonance",
      desc: "How your name stacks up against top competitors in numerical market share potential.",
    },
    {
      icon: FileText,
      title: "Strategy Guide",
      desc: "Strategic recommendations for taglines and sub-brands that harmonize with the main name.",
    },
    {
      icon: TrendingUp,
      title: "Launch Timing",
      desc: "Optimal month and year for legal registration and public unveiling for maximum growth.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50/50 dark:bg-[#060b18] border-y border-gray-100 dark:border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="space-y-3">
            <h4 className="text-primary font-black uppercase tracking-[0.5em] text-[9px]">
              The Intellectual Property
            </h4>
            <h2 className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
              Corporate <br />
              <span className="text-primary italic opacity-90">Assets</span>
            </h2>
          </div>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-[9px] italic border-b-2 border-primary pb-2">
            Institutional Quality Reports
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 dark:bg-white/10 border border-gray-200 dark:border-white/10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0a1020] p-10 space-y-6 hover:bg-primary/5 transition-all duration-500 group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <item.icon className="w-10 h-10 text-primary group-hover:scale-125 transition-transform opacity-70" />
              <div className="space-y-3">
                <h3 className="text-lg font-black text-dark dark:text-white uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-[13px] font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col lg:flex-row items-center justify-between gap-10 p-10 md:p-14 bg-slate-900 text-white shadow-2xl relative overflow-hidden"
          data-aos="zoom-in"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <BarChart3 className="w-32 h-32" />
          </div>
          <div className="space-y-3 relative z-10">
            <h4 className="text-primary/70 font-black uppercase tracking-[0.3em] text-[9px]">
              Standard Delivery
            </h4>
            <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none">
              Comprehensive Brand Audit Dossier
            </p>
          </div>
          <div className="flex gap-8 relative z-10">
            <div className="text-right">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">
                Timeline
              </p>
              <p className="font-bold text-lg uppercase tracking-tighter">
                7 Working Days
              </p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-right">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">
                Format
              </p>
              <p className="font-bold text-lg uppercase tracking-tighter">
                Executive PDF
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyNamingDeliverables;
