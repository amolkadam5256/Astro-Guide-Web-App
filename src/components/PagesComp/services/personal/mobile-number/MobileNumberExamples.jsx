import React from "react";
import { MessageSquare } from "lucide-react";

const MobileNumberExamples = () => {
  const cases = [
    {
      situation:
        "A Sales professional struggling with high rejection rates and dropped calls.",
      resolution:
        "Audit found an 'Energy Block' in the last 4 digits (Sequence 44). Switching to a number with a 'Total Sum 6' resulted in a 40% increase in lead conversion.",
      impact: "Conversion Boost",
    },
    {
      situation:
        "A Freelancer whose clients were always asking for discounts and delaying payments.",
      resolution:
        "Revised the number sequence to include 'wealth-attraction' pairs (Sequence 1, 8). Payments became prioritized without friction.",
      impact: "Financial Authority",
    },
  ];

  return (
    <section className="py-32 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h4 className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">
            Case Archives
          </h4>
          <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter">
            Impact <span className="text-primary italic">Reports</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-gray-200 dark:bg-white/5 border border-gray-200 dark:border-white/5">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0a1020] p-16 space-y-12 group"
              data-aos={idx === 0 ? "fade-right" : "fade-left"}
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-1 bg-primary/20 group-hover:w-full transition-all duration-700" />
                <div className="shrink-0 text-[10px] font-black uppercase tracking-[0.4em] text-primary whitespace-nowrap">
                  {item.impact}
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 italic">
                    Scenario:
                  </p>
                  <h3 className="text-xl font-black text-dark dark:text-white uppercase tracking-tighter leading-tight italic">
                    "{item.situation}"
                  </h3>
                </div>
                <div className="p-8 bg-primary/5 border-l-4 border-primary italic space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary">
                    The Resolution
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed font-sans">
                    "{item.resolution}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileNumberExamples;
