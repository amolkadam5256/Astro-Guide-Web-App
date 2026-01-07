import React from "react";
import { Quote } from "lucide-react";

const CompatibilityExamples = () => {
  const cases = [
    {
      situation:
        "A Couple planning to marry despite constant recurring arguments about trivial things.",
      resolution:
        "Audit revealed clashing 'Psychic Numbers' but compatible 'Destiny Numbers'. Applied name-correction for the spouse to harmonize with the home's frequency, reducing friction by 70%.",
      impact: "Marital Harmony",
    },
    {
      situation:
        "Business partners whose venture was stagnant despite high individual talent.",
      resolution:
        "Identified a 'Leadership Lock' where both held dominant frequencies. Restructured decision-making days based on personal timing, leading to 25% growth in 6 months.",
      impact: "Strategic Partnership",
    },
  ];

  return (
    <section className="py-32 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24 space-y-4">
          <h4 className="text-rose-600 font-black uppercase tracking-[0.7em] text-[10px]">
            Real-World Impact
          </h4>
          <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
            The Synergy <br />
            <span className="text-rose-600 italic">Archive</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="p-16 bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/5 relative group hover:shadow-2xl transition-all duration-700 overflow-hidden"
              data-aos={idx === 0 ? "fade-right" : "fade-left"}
            >
              <Quote className="w-32 h-32 text-rose-600/5 absolute top-0 right-0 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 space-y-10">
                <div className="inline-block px-4 py-2 bg-slate-900 text-white dark:bg-white dark:text-dark text-[10px] font-black uppercase tracking-widest">
                  {item.impact}
                </div>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 font-sans italic">
                      Context:
                    </p>
                    <h3 className="text-xl md:text-2xl font-black text-dark dark:text-white tracking-tight leading-tight italic">
                      "{item.situation}"
                    </h3>
                  </div>
                  <div className="p-8 bg-rose-600/5 border-l-4 border-rose-600 space-y-4 italic mt-12">
                    <p className="text-[10px] font-black uppercase tracking-widest text-rose-600">
                      The Resolution
                    </p>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
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

export default CompatibilityExamples;
