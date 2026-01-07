import React from "react";
import { Quote, BarChart3 } from "lucide-react";

const CompanyNamingExamples = () => {
  const cases = [
    {
      situation:
        "A Logistics company with a 'Debt Number' vibration in its name, facing constant fleet breakdowns.",
      resolution:
        "Minor spelling correction to the parent brand changed the vibration to 'Stability 8'. Operational costs dropped by 18% in the first quarter post-launch.",
      impact: "Operational Efficiency",
    },
    {
      situation:
        "A Fintech startup whose name had a 'Collision' vibration with the founder's destiny.",
      resolution:
        "Engineered a name with 'Innovation 5' frequency. Secured Seed A funding within 3 months of brand unveiling.",
      impact: "Capital Attraction",
    },
  ];

  return (
    <section className="py-24 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-10 px-6 py-8 border border-primary/10 bg-primary/5">
          <div className="space-y-3 text-center md:text-left">
            <h4 className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">
              Case History
            </h4>
            <h2 className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
              The Equity <br />
              <span className="text-primary italic opacity-90">Audit</span>
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-xl shadow-xl">
              <BarChart3 className="w-6 h-6" />
            </div>
            <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 italic max-w-[180px]">
              Empirical Brand Transformation Archives
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-gray-200 dark:bg-white/10 border border-gray-200 dark:border-white/10">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="p-10 md:p-14 bg-white dark:bg-[#0a1020] relative group hover:bg-primary/5 transition-all duration-700"
              data-aos={idx === 0 ? "fade-right" : "fade-left"}
            >
              <Quote className="w-24 h-24 text-primary/5 absolute top-0 right-0 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 space-y-8">
                <div className="inline-block px-3 py-1.5 bg-primary text-white text-[9px] font-black uppercase tracking-[0.3em]">
                  {item.impact}
                </div>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 font-sans italic">
                      Context:
                    </p>
                    <h3 className="text-xl md:text-2xl font-black text-dark dark:text-white tracking-tighter leading-tight italic">
                      "{item.situation}"
                    </h3>
                  </div>
                  <div className="p-8 bg-slate-900 text-slate-300 border-l-4 border-primary italic space-y-3">
                    <p className="text-[9px] font-black uppercase tracking-widest text-primary opacity-80">
                      The Resolution
                    </p>
                    <p className="text-[13px] font-medium leading-relaxed font-sans">
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

export default CompanyNamingExamples;
