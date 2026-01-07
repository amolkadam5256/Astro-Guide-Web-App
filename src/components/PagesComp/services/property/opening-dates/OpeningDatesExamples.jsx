import React from "react";
import { Quote } from "lucide-react";

const OpeningDatesExamples = () => {
  const cases = [
    {
      situation:
        "A retail showroom that opened during a 'Shadow Week' and struggled with footfall for 6 months.",
      resolution:
        "Performed a re-inauguration ritual on a 'Power Sunday' aligned with the owner's destiny. Sales doubled within 30 days.",
      impact: "Business Re-Alignment",
    },
    {
      situation:
        "A family moving into a new home. One daughter was consistently ill since the move-in day.",
      resolution:
        "Audit found the move-in occurred during a 'Clash Window'. Applied specific entrance remedies to reset the threshold energy.",
      impact: "Family Wellness Reset",
    },
  ];

  return (
    <section className="py-32 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <h4 className="text-amber-600 font-black uppercase tracking-[0.5em] text-[10px]">
            Strategic Proof
          </h4>
          <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter">
            Temporal <br />
            <span className="text-amber-600 italic">Benchmarks</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="p-16 bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/5 relative group hover:shadow-2xl transition-all duration-700 overflow-hidden"
              data-aos={idx === 0 ? "fade-right" : "fade-left"}
            >
              <Quote className="absolute top-0 right-0 w-32 h-32 text-amber-600/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 space-y-12">
                <div className="inline-block px-4 py-2 bg-amber-600 text-white text-[10px] font-black uppercase tracking-[0.4em]">
                  {item.impact}
                </div>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 font-sans italic">
                      Scenario:
                    </p>
                    <h3 className="text-2xl font-black text-dark dark:text-white tracking-tighter leading-tight italic">
                      "{item.situation}"
                    </h3>
                  </div>
                  <div className="p-8 bg-amber-600/5 border-l-4 border-amber-600 space-y-4 italic">
                    <p className="text-[10px] font-black uppercase tracking-widest text-amber-600">
                      The Resolution
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

export default OpeningDatesExamples;
