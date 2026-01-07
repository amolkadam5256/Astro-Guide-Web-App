import React from "react";
import { CheckCircle2, ShieldCheck, Gem, Map } from "lucide-react";

const PropertyContent = () => {
  const points = [
    "Land Vibration Audit",
    "Unit Number Alignment",
    "Entrance Energy",
    "Prosperity Flow",
  ];

  return (
    <section className="py-24 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10" data-aos="fade-right">
            <div className="space-y-3">
              <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[9px]">
                Architectural Synergy
              </h4>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
                Energetic <br />
                <span className="text-primary italic opacity-90">
                  Architecture
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed italic">
              <p>
                Your building is a living entity with its own numerical
                frequency. Whether it's a shop, a factory, or a home, the
                'address energy' filters everything that happens within.
              </p>
              <p className="not-italic text-dark dark:text-white font-black uppercase tracking-tight border-l-4 border-primary pl-8 py-4 bg-gray-50 dark:bg-white/5 text-sm">
                We provide detailed audits to harmonize spaces with their
                intended purpose—wealth for business, and peace for home.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-2">
              {points.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-center group">
                  <div className="w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-dark dark:text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group" data-aos="fade-left">
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full scale-125" />
            <div className="relative p-10 md:p-16 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-2xl text-center space-y-10 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Map className="w-32 h-32 text-primary" />
              </div>
              <div className="w-20 h-20 bg-primary text-white flex items-center justify-center rounded-full mx-auto shadow-xl">
                <Gem className="w-10 h-10" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-dark dark:text-white uppercase tracking-tighter">
                  Space <br />
                  Audit
                </h3>
                <div className="h-1 w-16 bg-primary mx-auto" />
                <p className="text-gray-500 dark:text-gray-400 text-[9px] font-black uppercase tracking-widest italic">
                  Asset Frequency Optimization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyContent;
