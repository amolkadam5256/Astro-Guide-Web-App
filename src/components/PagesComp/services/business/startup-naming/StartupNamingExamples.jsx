import React from "react";
import { Quote } from "lucide-react";

const StartupNamingExamples = () => {
  const cases = [
    {
      situation:
        "A SaaS startup whose name had a 'Friction 4' vibration, leading to high churn and integration bugs.",
      resolution:
        "Modified the name to a 'Scalability 5' vibration. Churn rates dropped by 12% as the market resonance improved naturally.",
      impact: "Product-Market Fit",
    },
    {
      situation:
        "An AI company with a name that sounded 'Retro' (Vibration 6) while the sector required 'Disruption' (Vibration 1).",
      resolution:
        "Engineered a name with a 'Vanguard 1' frequency. Secured institutional partnership within 2 months.",
      impact: "Sector Alignment",
    },
  ];

  return (
    <section className="py-24 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">
            Real-World Proof
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter">
            Velocity{" "}
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
                    <h3 className="text-xl md:text-2xl font-black text-dark dark:text-white tracking-tighter leading-tight italic">
                      "{item.situation}"
                    </h3>
                  </div>
                  <div className="p-8 bg-primary/5 border-l-4 border-primary space-y-3 italic">
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

export default StartupNamingExamples;
