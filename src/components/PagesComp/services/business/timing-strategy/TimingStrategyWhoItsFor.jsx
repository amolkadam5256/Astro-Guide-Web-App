import React from "react";
import { CheckCircle2, Clock } from "lucide-react";

const TimingStrategyWhoItsFor = () => {
  const users = [
    "Growth-Focused Founders",
    "Asset & Wealth Managers",
    "Real Estate Developers",
    "Product Launch Teams",
    "C-Suite Executives",
  ];

  return (
    <section className="py-10 px-4 bg-[#050a15] text-white relative border-y-4 border-primary/20 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,rgba(34,98,178,0.1)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12" data-aos="fade-right">
            <div className="space-y-3 text-center lg:text-left">
              <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">
                Strategic Resonance
              </h4>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                Who Is Measuring <br />
                <span className="text-primary italic opacity-90">
                  The Tide?
                </span>
              </h2>
            </div>

            <div className="grid gap-4">
              {users.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-6 p-8 bg-white/5 border border-white/10 hover:bg-primary/20 transition-all group"
                >
                  <Clock className="w-6 h-6 text-primary group-hover:rotate-180 transition-transform duration-700 opacity-80" />
                  <span className="text-sm font-semibold uppercase tracking-widest leading-none">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full scale-125" />
            <div className="relative bg-white/5 p-10 md:p-14 border border-white/10 backdrop-blur-3xl space-y-12">
              <h3 className="text-2xl font-black uppercase tracking-tight italic text-primary border-b-2 border-primary/30 inline-block pb-4 opacity-90">
                Timing Indicators
              </h3>
              <ul className="space-y-8">
                {[
                  "Recurrent delays in major milestone projects.",
                  "Decisions feeling 'forced' or out of rhythm.",
                  "Mismatch between effort and financial results.",
                  "Approaching a major institutional scaling phase.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-6 items-start group">
                    <div className="w-8 h-8 rounded-full bg-primary text-dark flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,98,178,0.5)] group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5" />
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
                  Corporate Timing Audit Recommended
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimingStrategyWhoItsFor;
