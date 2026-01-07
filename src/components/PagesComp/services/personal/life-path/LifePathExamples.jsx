import React from "react";
import { Star } from "lucide-react";

const LifePathExamples = () => {
  const cases = [
    {
      title: "The Misplaced Executive",
      situation: "A high-achiever feeling empty despite success.",
      result:
        "Realized their career was misaligned with their Life Path 7 soul mission for research/spirituality; pivoted to Strategic Oversight and found deep fulfillment.",
    },
    {
      title: "The Financial Hurdle",
      situation: "Someone constantly facing the same financial hurdles.",
      result:
        "Identified Life Path 4 challenges and implemented structural changes to overcome ancestral karmic cycles.",
    },
  ];

  return (
    <section className="py-32 px-4 bg-white dark:bg-[#050a15] relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <h4 className="text-primary font-black uppercase tracking-[0.6em] text-[10px]">
            Case Archives
          </h4>
          <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter">
            Path <span className="text-primary">Resolutions</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-gray-200 dark:bg-white/5 border border-gray-200 dark:border-white/5">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0a1020] p-16 space-y-10 group"
              data-aos={idx === 0 ? "fade-right" : "fade-left"}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary font-black italic">
                  0{idx + 1}
                </div>
                <h3 className="text-2xl font-black text-dark dark:text-white uppercase tracking-tight">
                  {item.title}
                </h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    The Friction
                  </p>
                  <p className="text-lg font-bold text-dark/70 dark:text-white/70 italic leading-snug">
                    "{item.situation}"
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary">
                    The Realization
                  </p>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.result}
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

export default LifePathExamples;
