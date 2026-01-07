import React from "react";
import { CheckCircle2, Home, Compass, Map } from "lucide-react";

const ResidentialContent = () => {
  const elements = [
    "Address Frequency Analysis",
    "Entrance Vibration Mapping",
    "Room Usage Alignment",
    "Family Synergy Balance",
  ];

  return (
    <section className="py-32 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12" data-aos="fade-right">
            <div className="space-y-4">
              <h4 className="text-orange-600 font-black uppercase tracking-[0.5em] text-[10px]">
                Architectural Frequency
              </h4>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
                The Soul <br />
                <span className="text-orange-600 italic">Of The House</span>
              </h2>
            </div>

            <div className="space-y-8 text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed italic">
              <p>
                A home is not just a structure of brick and mortar; it's a
                resonant chamber. Every address and unit number carries a
                specific vibration that either amplifies or dampens your
                personal frequency.
              </p>
              <p className="not-italic text-dark dark:text-white font-black uppercase tracking-tight border-l-4 border-orange-600 pl-8 py-4 bg-gray-50 dark:bg-white/5">
                We analyze the 'Domestic Signature' of your residence,
                identifying why certain rooms feel stagnant or why friction
                occurs in specific areas, and providing numerical remedies to
                restore peace.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-4">
              {elements.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center group">
                  <div className="w-10 h-10 rounded-full bg-orange-600/5 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-dark dark:text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group" data-aos="fade-left">
            <div className="absolute inset-0 bg-orange-600/10 blur-[150px] rounded-full scale-125" />
            <div className="relative p-12 md:p-20 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-3xl text-center space-y-12 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Home className="w-40 h-40 text-orange-600" />
              </div>
              <div className="w-24 h-24 bg-orange-600 text-white flex items-center justify-center rounded-sm mx-auto shadow-2xl rotate-45 group-hover:rotate-90 transition-transform duration-1000">
                <Compass className="w-12 h-12 -rotate-45 group-hover:-rotate-90 transition-transform duration-1000" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-dark dark:text-white uppercase tracking-tighter">
                  Grounding <br />
                  Protocol
                </h3>
                <div className="h-1 w-24 bg-orange-600 mx-auto" />
                <p className="text-gray-500 dark:text-gray-400 text-[10px] font-black uppercase tracking-widest">
                  Domestic Energy Mapping
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialContent;
