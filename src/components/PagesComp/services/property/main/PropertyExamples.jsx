import React from "react";
import { Quote } from "lucide-react";

const PropertyExamples = () => {
  const cases = [
    {
      scenario:
        "A commercial complex with high vacancy rates despite being in a prime location.",
      resolution:
        "Applied entrance energy remedies; vacancy dropped from 40% to 5% in six months as the vibration shifted from 'stagnant' to 'inviting'.",
      impact: "Portfolio Recovery",
    },
    {
      scenario:
        "Homeowner feeling consistently drained, anxious, and plagued by minor accidents in their new house.",
      resolution:
        "Audit revealed the house was a '7' (Solitude/Introversion) while they needed a '6' (Family/Harmony) vibration. Applied number-tuning plate remedies.",
      impact: "Residential Vitality",
    },
  ];

  return (
    <section className="py-24 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">
            Strategic Transformation
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter">
            Site <br />
            <span className="text-primary italic opacity-90">Benchmarks</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="p-10 md:p-14 bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/5 relative group hover:shadow-2xl transition-all duration-700 overflow-hidden"
              data-aos={idx === 0 ? "fade-right" : "fade-left"}
            >
              <Quote className="absolute top-0 right-0 w-24 h-24 text-primary/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 space-y-8">
                <div className="inline-block px-3 py-1.5 bg-primary text-white text-[9px] font-black uppercase tracking-[0.3em]">
                  {item.impact}
                </div>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 font-sans italic">
                      Scenario:
                    </p>
                    <h3 className="text-xl font-black text-dark dark:text-white tracking-tighter leading-tight italic">
                      "{item.scenario}"
                    </h3>
                  </div>
                  <div className="p-6 bg-primary/5 border-l-4 border-primary space-y-3 italic">
                    <p className="text-[9px] font-black uppercase tracking-widest text-primary">
                      The Resolution
                    </p>
                    <p className="text-[13px] font-medium text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
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

export default PropertyExamples;
