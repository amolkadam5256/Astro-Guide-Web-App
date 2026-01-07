import React from "react";
import { Quote } from "lucide-react";

const ResidentialExamples = () => {
  const cases = [
    {
      situation:
        "A family experiencing unexplained health issues and friction after moving to a 'House 8'.",
      resolution:
        "Identified 'Density 8' clashing with the head of house. Applied color and directional remedies to introduce 'Stability 6' energy.",
      impact: "Family Restoration",
    },
    {
      situation:
        "A student unable to focus in a home with a 'Restive' address vibration.",
      resolution:
        "Shifted the study desk to a 'Knowledge Node' and neutralized the unit entrance frequency. Grades improved in one term.",
      impact: "Academic Success",
    },
  ];

  return (
    <section className="py-32 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <h4 className="text-orange-600 font-black uppercase tracking-[0.5em] text-[10px]">
            Case History
          </h4>
          <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter">
            Vibrational <br />
            <span className="text-orange-600 italic">Transformations</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="p-16 bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/5 relative group hover:shadow-2xl transition-all duration-700 overflow-hidden"
              data-aos={idx === 0 ? "fade-right" : "fade-left"}
            >
              <Quote className="absolute top-0 right-0 w-32 h-32 text-orange-600/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 space-y-12">
                <div className="inline-block px-4 py-2 bg-orange-600 text-white text-[10px] font-black uppercase tracking-[0.4em]">
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
                  <div className="p-8 bg-orange-600/5 border-l-4 border-orange-600 space-y-4 italic">
                    <p className="text-[10px] font-black uppercase tracking-widest text-orange-600">
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

export default ResidentialExamples;
