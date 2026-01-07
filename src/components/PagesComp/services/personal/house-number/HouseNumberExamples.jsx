import React from "react";
import { Quote } from "lucide-react";

const HouseNumberExamples = () => {
  const cases = [
    {
      situation:
        "A Family experiencing sudden health and friction issues after moving into a 'House 8'.",
      resolution:
        "Identified clashing frequencies with the breadwinner's numbers. Applied directional and color remedies to neutralize 'Density 8' and invite 'Stability 6' energy.",
      impact: "Family Restoration",
    },
    {
      situation:
        "A Student struggling to concentrate in a new apartment with a 'Restive' address vibration.",
      resolution:
        "Strategically shifted the study desk and adjusted the unit entrance frequency. Grades improved within a single semester.",
      impact: "Academic Success",
    },
  ];

  return (
    <section className="py-12 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-primary font-black uppercase tracking-[0.6em] text-[10px]">
              Actual Evidence
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
              Vibrational <br />
              <span className="text-primary italic">Transformatons</span>
            </h2>
          </div>
          <div className="hidden md:block w-px h-24 bg-gray-100 dark:bg-white/10" />
          <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] italic max-w-xs text-center md:text-right">
            Anonymized Case Studies from our Domestic Audit Archive
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="p-16 bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/5 relative group hover:border-primary/30 transition-all duration-700"
              data-aos={idx === 0 ? "fade-right" : "fade-left"}
            >
              <Quote className="w-20 h-20 text-primary/5 absolute top-8 left-8" />
              <div className="space-y-8 relative z-10">
                <div className="inline-block px-4 py-2 bg-primary text-white text-[8px] font-black uppercase tracking-[0.3em]">
                  {item.impact}
                </div>
                <div className="space-y-8">
                  <div className="space-y-3">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      The Conflict
                    </p>
                    <h3 className="text-xl font-bold text-dark dark:text-white leading-tight italic">
                      "{item.situation}"
                    </h3>
                  </div>
                  <div className="p-8 bg-primary/5 border-l-4 border-primary space-y-3">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">
                      The Solution
                    </p>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 leading-relaxed font-sans font-medium">
                      "{item.resolution}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseNumberExamples;
