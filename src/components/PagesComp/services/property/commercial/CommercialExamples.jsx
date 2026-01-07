import React from "react";
import { Quote } from "lucide-react";

const CommercialExamples = () => {
  const cases = [
    {
      situation:
        "A manufacturing plant with consistent machinery breakdowns despite regular maintenance.",
      resolution:
        "Audit revealed the plant address carried a 'Destruction 9' frequency. Neutralized with 'Stability 4' elemental remedies. Uptime improved by 25%.",
      impact: "Fixed Asset ROI",
    },
    {
      situation:
        "A corporate office where client negotiations frequently stalled for no apparent reason.",
      resolution:
        "Identified the main boardroom was located in a 'Vibrational Void'. Relocated the negotiation space to a 'Profit Node'. Closing rates rose by 15%.",
      impact: "Deal Flow Success",
    },
  ];

  return (
    <section className="py-32 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <h4 className="text-amber-600 font-black uppercase tracking-[0.5em] text-[10px]">
            Real Evidence
          </h4>
          <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter">
            Asset <span className="text-amber-600 italic">Benchmarks</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="p-20 bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/5 relative group hover:shadow-3xl transition-all duration-700 overflow-hidden"
              data-aos={idx === 0 ? "fade-right" : "fade-left"}
            >
              <Quote className="absolute top-0 right-0 w-32 h-32 text-amber-600/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 space-y-12">
                <div className="inline-block px-10 py-3 bg-dark dark:bg-white text-white dark:text-dark text-[10px] font-black uppercase tracking-[0.4em]">
                  {item.impact}
                </div>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 font-sans italic">
                      Context:
                    </p>
                    <h3 className="text-2xl font-black text-dark dark:text-white tracking-tighter leading-tight italic">
                      "{item.situation}"
                    </h3>
                  </div>
                  <div className="p-10 bg-amber-600/5 border-l-8 border-amber-600 space-y-4 italic">
                    <p className="text-[10px] font-black uppercase tracking-widest text-amber-600 font-sans">
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

export default CommercialExamples;
