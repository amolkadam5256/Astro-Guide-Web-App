import React from "react";
import { Quote } from "lucide-react";

const YearForecastExamples = () => {
  const cases = [
    {
      situation:
        "A Freelancer planning to go full-time in a 'Personal Year 9' (The Completion Year).",
      resolution:
        "Advised against immediate launch. Delayed the venture by 4 months to enter 'Year 1' (New Beginnings), resulting in 3 retainer clients in the first month.",
      tag: "Launch Optimization",
    },
    {
      situation:
        "A Family planning a major property purchase during a 'clashing' month.",
      resolution:
        "Identified a 'Period of Delay' in the numbers. They waited 6 weeks, found a better property for 15% less, and moved in during a '6' (Harmony) month.",
      tag: "Financial Timing",
    },
  ];

  return (
    <section className="py-12 px-4 relative bg-white dark:bg-[#050a15]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8 px-4 border-b-2 border-primary/20 pb-12">
          <div className="max-w-xl space-y-4">
            <h4 className="text-primary font-black uppercase tracking-[0.6em] text-[10px]">
              Actual Results
            </h4>
            <h2 className="text-2xl md:text-4xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
              The Power of <br />
              Proper <span className="text-primary">Timing</span>
            </h2>
          </div>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] italic">
            Strategic Case Studies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="p-12 bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/5 relative group"
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <Quote className="w-16 h-16 text-primary/5 absolute top-8 right-8" />
              <div className="space-y-8">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-primary border border-primary/20 inline-block px-4 py-2 bg-primary/5">
                  {item.tag}
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      The Context
                    </p>
                    <h3 className="text-xl font-bold text-dark dark:text-white leading-tight italic">
                      "{item.situation}"
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">
                      The Solution
                    </p>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 leading-relaxed font-sans">
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

export default YearForecastExamples;
