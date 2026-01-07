import React from "react";
import { ShieldCheck, Target, Home, Sparkles } from "lucide-react";

const HouseNumberDeliverables = () => {
  const items = [
    {
      icon: Home,
      title: "Harmony Audit",
      desc: "Detailed analysis of your address's vibration and how it impacts health and wealth.",
    },
    {
      icon: ShieldCheck,
      title: "Remedy Guide",
      desc: "Practical, non-destructive numerical remedies to correct clashing address energies.",
    },
    {
      icon: Target,
      title: "Resident Match",
      desc: "Individual analysis for up to 4 residents to ensure everyone is supported by the space.",
    },
    {
      icon: Sparkles,
      title: "Prosperity Corner",
      desc: "Identification of the most auspicious sectors in your home based on the address.",
    },
  ];

  return (
    <section className="py-32 px-4 bg-gray-50/50 dark:bg-[#060b18] border-y border-gray-100 dark:border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="flex flex-col items-center text-center space-y-4">
          <h4 className="text-primary font-black uppercase tracking-[0.6em] text-[10px]">
            The Results
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter">
            Sanctuary <span className="text-primary italic">Insights</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 dark:bg-white/5 border border-gray-200 dark:border-white/5 shadow-2xl">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0a1020] p-12 space-y-8 hover:bg-primary/5 transition-all duration-500 group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <item.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
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
          className="flex flex-col sm:flex-row items-center justify-between gap-8 p-10 bg-primary text-white rounded-2xl shadow-2xl relative overflow-hidden"
          data-aos="zoom-in"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Sparkles className="w-40 h-40" />
          </div>
          <p className="text-xl font-black uppercase tracking-tighter max-w-lg leading-tight">
            Your Home Should Be Your Greatest Power Source. Let's Align It.
          </p>
          <div className="text-center sm:text-right shrink-0">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-1">
              Standard Report Format
            </p>
            <p className="font-bold text-lg uppercase tracking-tight">
              PDF + Symbolic Remedy Kit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseNumberDeliverables;
