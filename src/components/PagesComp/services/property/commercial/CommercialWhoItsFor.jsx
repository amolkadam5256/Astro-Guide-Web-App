import React from "react";
import { CheckCircle2, Building2 } from "lucide-react";

const CommercialWhoItsFor = () => {
  const categories = [
    "Industrial Facility Owners",
    "Commercial Real Estate Boards",
    "Retail Chain Executives",
    "Office Space Managers",
    "Institutional Investors",
  ];

  return (
    <section className="py-32 px-4 bg-slate-900 text-white relative border-y-8 border-amber-600/30 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,rgba(180,83,9,0.1)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-16" data-aos="fade-right">
            <div className="space-y-4 text-center lg:text-left">
              <h4 className="text-amber-500 font-black uppercase tracking-[0.6em] text-[10px]">
                Strategic Alignment
              </h4>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Who Is Facing <br />
                <span className="text-amber-500 italic">Static?</span>
              </h2>
            </div>

            <div className="grid gap-6">
              {categories.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-8 p-10 bg-white/5 border border-white/10 hover:bg-amber-900/40 transition-all group"
                >
                  <Building2 className="w-8 h-8 text-amber-500 group-hover:scale-125 transition-transform" />
                  <span className="text-xl font-black uppercase tracking-widest leading-none">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="absolute inset-0 bg-amber-600/10 blur-[150px] rounded-full scale-125" />
            <div className="relative bg-white/5 p-16 border border-white/10 backdrop-blur-3xl space-y-16">
              <h3 className="text-3xl font-black uppercase tracking-tight italic text-amber-500">
                Asset Indicators
              </h3>
              <ul className="space-y-10">
                {[
                  "Recurrent maintenance issues in specific zones.",
                  "Staff turnover concentrated in certain office wings.",
                  "Stagnant sales despite high-quality inventory.",
                  "Need for a powerful, trust-worthy redirection.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-8 items-start group">
                    <div className="w-10 h-10 rounded-full bg-amber-600 text-dark flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(180,83,9,0.5)]">
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
                <span className="text-xs font-black uppercase tracking-widest text-amber-500">
                  Commercial Audit Recommended
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialWhoItsFor;
