import React from "react";
import { Quote } from "lucide-react";

const BrandIdentityExamples = () => {
  const cases = [
    {
      situation:
        "A Luxury brand using 'Earthy Greens' (Vibration 4) while their name resonated with 'Royal Purple' (Vibration 7).",
      resolution:
        "Re-aligned the brand palette and logo angles to reflect Vibration 7. Customer perception shifted from 'affordable' to 'premium' within one campaign.",
      impact: "Perception Shift",
    },
    {
      situation:
        "A Tech startup with a logo that featured 'Severed' lines, causing internal fragmentation.",
      resolution:
        "Redesigned the logo stroke based on the 'Infinity 8' principle. Team retention improved as the brand frequency stabilized.",
      impact: "Cultural Cohesion",
    },
  ];

  return (
    <section className="py-24 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">
            Real Evidence
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter">
            Identity{" "}
            <span className="text-primary italic opacity-90">Evolution</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="p-10 md:p-14 bg-primary/5 dark:bg-white/5 border border-gray-100 dark:border-white/5 relative group"
              data-aos={idx === 0 ? "fade-right" : "fade-left"}
            >
              <Quote className="absolute top-8 left-8 w-16 h-16 text-primary/5" />
              <div className="relative z-10 space-y-8">
                <div className="inline-block px-4 py-1.5 bg-primary dark:bg-white text-white dark:text-dark text-[8px] font-black uppercase tracking-[0.3em]">
                  {item.impact}
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-[9px] font-black uppercase tracking-widest text-primary">
                      The Friction:
                    </p>
                    <h3 className="text-xl font-bold text-dark dark:text-white tracking-tight leading-tight italic">
                      "{item.situation}"
                    </h3>
                  </div>
                  <div className="p-8 bg-primary/5 border-l-4 border-primary space-y-2">
                    <p className="text-[9px] font-black uppercase tracking-widest text-primary">
                      The Solution:
                    </p>
                    <p className="text-[13px] font-medium text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
                      {item.resolution}
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

export default BrandIdentityExamples;
