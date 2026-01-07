import React from "react";
import { CheckCircle2, User } from "lucide-react";

const PersonalWhoItsFor = () => {
  const users = [
    "Truth Seekers",
    "Growth-Oriented Individuals",
    "Parents Planning for Children",
    "Individuals at a Crossroads",
  ];

  return (
    <section className="py-24 px-4 bg-[#050a15] text-white relative border-y-4 border-primary/20 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(34,98,178,0.05)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12" data-aos="fade-right">
            <div className="space-y-3 text-center lg:text-left">
              <h4 className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">
                Soul Resonance
              </h4>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Who Is Seeking <br />
                <span className="text-primary italic opacity-90">
                  The Code?
                </span>
              </h2>
            </div>

            <div className="grid gap-4">
              {users.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-6 p-8 bg-white/5 border border-white/10 hover:bg-primary/20 transition-all group"
                >
                  <User className="w-6 h-6 text-primary group-hover:rotate-6 transition-transform opacity-80" />
                  <span className="text-lg font-black uppercase tracking-widest leading-none">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full scale-125" />
            <div className="relative bg-white/5 p-12 border border-white/10 backdrop-blur-3xl space-y-12">
              <h3 className="text-2xl font-black uppercase tracking-tight italic text-primary opacity-90">
                Identity Indicators
              </h3>
              <ul className="space-y-8">
                {[
                  "Feeling 'out of sync' with your career path.",
                  "Recurring patterns in personal relationships.",
                  "Searching for deeper meaning beyond material success.",
                  "Wanting to choose a high-frequency name for a newborn.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-6 items-start group">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(34,98,178,0.3)]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-gray-400 font-bold text-base tracking-wide leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="pt-8 flex items-center gap-6">
                <span className="w-16 h-px bg-white/20" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary opacity-80">
                  Personal Audit Recommended
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalWhoItsFor;
