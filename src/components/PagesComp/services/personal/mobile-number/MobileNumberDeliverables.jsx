import React from "react";
import { Phone, CheckCircle2, Search, Zap } from "lucide-react";

const MobileNumberDeliverables = () => {
  const items = [
    {
      icon: Search,
      title: "Sequence Audit",
      desc: "Detailed mapping of every 2-digit and 3-digit sequence in your number.",
    },
    {
      icon: CheckCircle2,
      title: "Total Sum Analysis",
      desc: "Verification of the 'Final Destiny' of your number vs your birth path.",
    },
    {
      icon: Zap,
      title: "Correction Advice",
      desc: "Specific digit suggestions if a new number is required for growth.",
    },
    {
      icon: Phone,
      title: "Usage Protocol",
      desc: "Numerical tips for setting up voicemail and digital profiles.",
    },
  ];

  return (
    <section className="py-32 px-4 bg-gray-50/50 dark:bg-[#060b18] relative group overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="space-y-4">
            <h4 className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">
              The Analysis
            </h4>
            <h2 className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
              Vibrational <br />
              <span className="text-primary">Deliverables</span>
            </h2>
          </div>
          <div className="flex gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-primary/20" />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0a1020] p-12 border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden group/card"
              data-aos="fade-up"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover/card:opacity-10 transition-opacity">
                <item.icon className="w-16 h-16 text-primary" />
              </div>
              <div className="relative z-10 space-y-6">
                <item.icon className="w-8 h-8 text-primary" />
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

export default MobileNumberDeliverables;
