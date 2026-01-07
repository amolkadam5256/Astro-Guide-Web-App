import React from "react";
import { CheckCircle2, Zap } from "lucide-react";

const StartupNamingWhoItsFor = () => {
  const users = [
    "Stealth Stage Founders",
    "Series A/B Companies",
    "App & Platform Developers",
    "Venture Studios",
    "Incubator Graduates",
  ];

  return (
    <section className="py-24 px-4 bg-slate-950 text-white relative border-y-4 border-primary/20 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,rgba(34,98,178,0.1)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12" data-aos="fade-right">
            <div className="space-y-3 text-center lg:text-left">
              <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">
                Strategic Resonance
              </h4>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                Who Is Heading <br />
                <span className="text-primary italic opacity-90">To Mars?</span>
              </h2>
            </div>

            <div className="grid gap-4">
              {users.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-6 p-8 bg-white/5 border border-white/10 hover:bg-primary/20 transition-all group"
                >
                  <Zap className="w-6 h-6 text-primary group-hover:scale-125 transition-transform opacity-80" />
                  <span className="text-[12px] font-black uppercase tracking-widest leading-none">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full scale-125" />
            <div className="relative bg-white/5 p-10 md:p-14 border border-white/10 backdrop-blur-3xl space-y-12">
              <h3 className="text-xl font-black uppercase tracking-tight italic text-primary border-b-2 border-primary/30 inline-block pb-4 opacity-90">
                Unicorn Indicators
              </h3>
              <ul className="space-y-8">
                {[
                  "Difficulty explained your vision in 5 seconds.",
                  "Low organic sharing or 'sticky' potential.",
                  "Investor resistance despite strong metrics.",
                  "High turnover in early-stage critical roles.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-6 items-start group">
                    <div className="w-8 h-8 rounded-full bg-primary text-dark flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,98,178,0.5)]">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <p className="text-gray-400 font-bold text-sm tracking-wide leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="pt-8 flex items-center gap-6">
                <span className="w-16 h-px bg-white/20" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary opacity-80">
                  Seed Stage Audit Recommended
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupNamingWhoItsFor;
