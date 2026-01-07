import React from "react";
import { CheckCircle2, Briefcase, Zap } from "lucide-react";

const CompanyNamingWhoItsFor = () => {
  const categories = [
    "Established Enterprises (Rebranding)",
    "Small to Medium Businesses",
    "Product Launch Managers",
    "Family Business Successors",
    "Professional Service Firms",
  ];

  return (
    <section className="py-24 px-4 bg-[#0a1020] text-white relative border-y-4 border-primary/20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#2262b2_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12" data-aos="fade-right">
            <div className="space-y-3 text-center lg:text-left">
              <h4 className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">
                Strategic Alignment
              </h4>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                Market <br />
                <span className="text-primary italic opacity-90">
                  Positioning
                </span>
              </h2>
            </div>

            <div className="grid gap-4">
              {categories.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-6 p-8 bg-white/5 border border-white/10 hover:bg-primary/20 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-15 transition-opacity">
                    <Briefcase className="w-12 h-12 text-primary" />
                  </div>
                  <Zap className="w-6 h-6 text-primary group-hover:scale-125 transition-transform opacity-80" />
                  <span className="text-sm font-semibold uppercase tracking-widest leading-none">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full scale-125" />
            <div className="relative bg-white/5 p-12 border border-white/10 backdrop-blur-3xl space-y-12">
              <h3 className="text-2xl font-black uppercase tracking-tighter italic text-primary border-b-2 border-primary/30 inline-block pb-4 opacity-90">
                Brand Indicators
              </h3>
              <ul className="space-y-8">
                {[
                  "Consistent market resistance despite quality.",
                  "Frequent internal friction or legal hurdles.",
                  "Need for a powerful, trust-worthy redirection.",
                  "Approaching a major institutional scaling phase.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-6 items-start group">
                    <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,98,178,0.3)] group-hover:rotate-12 transition-transform">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <p className="text-slate-400 font-semibold text-sm tracking-wide leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="pt-8 flex items-center gap-6">
                <span className="w-16 h-px bg-white/20" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary opacity-80">
                  Corporate Audit Recommended
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyNamingWhoItsFor;
