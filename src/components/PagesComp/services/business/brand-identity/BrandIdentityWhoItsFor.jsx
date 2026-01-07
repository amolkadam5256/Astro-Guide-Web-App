import React from "react";
import { CheckCircle2, Gem } from "lucide-react";

const BrandIdentityWhoItsFor = () => {
  const targets = [
    "Luxury & Lifestyle Brands",
    "Creative Studios & Agencies",
    "Solopreneurs & Influencers",
    "Real Estate Developers",
    "E-commerce Disruptors",
  ];

  return (
    <section className="py-14 px-4 bg-dark text-white relative border-y-4 border-primary/20 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(34,98,178,0.1)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12" data-aos="fade-right">
            <div className="space-y-3">
              <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">
                Aesthetic Precision
              </h4>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Visual <br />
                <span className="text-primary italic opacity-90">Sync</span>
              </h2>
            </div>

            <div className="grid gap-4">
              {targets.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-6 p-8 bg-white/5 border border-white/10 hover:bg-primary/20 transition-all group"
                >
                  <Gem className="w-6 h-6 text-primary group-hover:scale-125 transition-transform opacity-80" />
                  <span className="text-sm font-semibold uppercase tracking-widest leading-none">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="p-10 md:p-14 bg-white/5 border border-white/10 backdrop-blur-3xl space-y-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <CheckCircle2 className="w-24 h-24 text-white/35" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight italic border-b-2 border-primary/30 inline-block pb-4 opacity-90">
                Brand Indicators
              </h3>
              <ul className="space-y-8">
                {[
                  "Logo feels 'disconnected' from current mission.",
                  "Visuals attract the 'wrong' type of clientele.",
                  "Inconsistent branding across digital platforms.",
                  "Need for a high-end, institutional refresh.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-6 items-start group">
                    <div className="w-8 h-8 rounded-full bg-primary text-dark flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,98,178,0.3)]">
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
                  Premium Identity Audit Recommended
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIdentityWhoItsFor;
