import React from "react";
import { Quote } from "lucide-react";

const NameAnalysisExamples = () => {
  const examples = [
    {
      scenario:
        "A Senior Executive with a '16' karmic debt vibration in their name.",
      resolution:
        "By adding a single 'e' to the surname, the vibration shifted to '1' (Leadership), leading to a long-awaited C-suite promotion within 4 months.",
      impact: "Career Transformation",
    },
    {
      scenario:
        "An Artist whose name had a '4' (Obstacle) vibration, causing constant delays in exhibitions.",
      resolution:
        "Spelling modification shifted the energy to '3' (Creativity), resulting in 3 major solo show invitations in one season.",
      impact: "Creative Breakthrough",
    },
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-white dark:bg-[#050a15]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 space-y-4">
          <h4 className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">
            Practical Proof
          </h4>
          <h2 className="text-4xl md:text-6xl font-black text-dark dark:text-white uppercase tracking-tighter">
            The <span className="text-primary italic">Vibe</span> Shift
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {examples.map((item, idx) => (
            <div
              key={idx}
              className="relative p-12 bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex flex-col justify-between group overflow-hidden"
              data-aos={idx === 0 ? "fade-right" : "fade-left"}
            >
              <Quote className="absolute top-8 right-8 w-24 h-24 text-primary/5 -z-10 group-hover:text-primary/10 transition-colors" />

              <div className="space-y-8">
                <div className="inline-block px-4 py-2 bg-primary text-white text-[8px] font-black uppercase tracking-widest">
                  {item.impact}
                </div>
                <div className="space-y-4">
                  <p className="text-xl font-bold text-dark dark:text-white leading-snug">
                    {item.scenario}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed italic border-l-4 border-primary/30 pl-6">
                    "{item.resolution}"
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Case Study 0{idx + 1}
                </span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className="w-1 h-1 bg-primary rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NameAnalysisExamples;
