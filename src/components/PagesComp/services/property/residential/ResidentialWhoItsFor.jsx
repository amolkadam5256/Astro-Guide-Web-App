import React from "react";
import { CheckCircle2, Home } from "lucide-react";

const ResidentialWhoItsFor = () => {
  const users = [
    "New Home Buyers",
    "Real Estate Investors",
    "Growing Families",
    "Individuals feeling 'Stuck'",
    "Digital Nomads & Remote Workers",
  ];

  return (
    <section className="py-32 px-4 bg-dark text-white relative border-y-8 border-orange-600/30 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,rgba(217,119,6,0.1)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-16" data-aos="fade-right">
            <div className="space-y-4 text-center lg:text-left">
              <h4 className="text-orange-500 font-black uppercase tracking-[0.6em] text-[10px]">
                Strategic Resonance
              </h4>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Who Needs A <br />
                <span className="text-orange-500 italic">Space Sync?</span>
              </h2>
            </div>

            <div className="grid gap-6">
              {users.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-8 p-10 bg-white/5 border border-white/10 hover:bg-orange-900/40 transition-all group"
                >
                  <Home className="w-8 h-8 text-orange-500 group-hover:scale-125 transition-transform" />
                  <span className="text-xl font-black uppercase tracking-widest leading-none">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="absolute inset-0 bg-orange-600/10 blur-[150px] rounded-full scale-125" />
            <div className="relative bg-white/5 p-16 border border-white/10 backdrop-blur-3xl space-y-16">
              <h3 className="text-3xl font-black uppercase tracking-tight italic text-orange-500">
                Space Indicators
              </h3>
              <ul className="space-y-10">
                {[
                  "Unexplained exhaustion after being home.",
                  "Frequent minor breakdowns (water, electrical).",
                  "Family friction that centers in certain rooms.",
                  "Feeling better away from home then at home.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-8 items-start group">
                    <div className="w-10 h-10 rounded-full bg-orange-600 text-dark flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(217,119,6,0.5)] group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <p className="text-gray-400 font-bold text-lg tracking-wide leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="pt-12 flex items-center gap-6">
                <span className="w-20 h-px bg-white/20" />
                <span className="text-xs font-black uppercase tracking-widest text-orange-500">
                  Domestic Audit Recommended
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialWhoItsFor;
