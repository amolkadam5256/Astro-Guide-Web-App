import React from "react";
import { Gem, Palette, Search, Zap } from "lucide-react";

const BrandIdentityDeliverables = () => {
  const items = [
    {
      icon: Palette,
      title: "Color DNA",
      desc: "Specific hexadecimal codes that resonate with your industry and birth numbers.",
    },
    {
      icon: Gem,
      title: "Logo Specs",
      desc: "Geometric guidelines (angles, strokes, ratios) for your logo design based on sacred numbers.",
    },
    {
      icon: Search,
      title: "Typography Audit",
      desc: "Font family recommendations that mirror the stability or innovation of your brand vibration.",
    },
    {
      icon: Zap,
      title: "Visual Manual",
      desc: "A concise 10-page guide on how to maintain your brand's numerical frequency across all media.",
    },
  ];

  return (
    <section className="py-10 px-4 bg-gray-50/50 dark:bg-[#060b18] border-y border-gray-100 dark:border-white/5 relative group overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="space-y-3">
            <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[9px]">
              The Creative Blueprint
            </h4>
            <h2 className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
              Artistic <br />
              <span className="text-primary italic opacity-90">Assets</span>
            </h2>
          </div>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-[9px] italic border-b-2 border-primary pb-2">
            Strategic Visual Protocol
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0a1020] p-10 border-b-4 border-transparent hover:border-primary transition-all duration-500 shadow-xl group/card"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <item.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform opacity-70" />
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
      </div>
    </section>
  );
};

export default BrandIdentityDeliverables;
