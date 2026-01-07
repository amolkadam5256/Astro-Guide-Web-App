import React from "react";
import { CheckCircle2, User, Home } from "lucide-react";

const HouseNumberWhoItsFor = () => {
  const categories = [
    "New Home Buyers",
    "Real Estate Investors",
    "Growing Families",
    "Individuals feeling 'Stuck'",
    "Digital Nomads & Remote Workers",
  ];

  return (
    <section className="py-12 px-4 bg-dark text-white relative overflow-hidden border-y-8 border-amber-600/20">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,rgba(217,119,6,0.1)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-16" data-aos="fade-right">
            <div className="space-y-4 text-center lg:text-left">
              <h4 className="text-primary font-black uppercase tracking-[0.6em] text-[10px]">
                Strategic Alignment
              </h4>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                Who Needs A <br />
                <span className="text-primary">Space Sync?</span>
              </h2>
            </div>

            <div className="grid gap-6">
              {categories.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-8 p-6 bg-white/5 border border-white/10 hover:bg-primary/20 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10">
                    <Home className="w-12 h-12 text-primary" />
                  </div>
                  <User className="w-8 h-8 text-primary group-hover:scale-125 transition-transform" />
                  <span className="text-sm font-medium uppercase tracking-tight leading-none">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="p-16 bg-white/5 border border-white/10 backdrop-blur-2xl space-y-16 relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <CheckCircle2 className="w-32 h-32 text-primary" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight italic border-b-2 border-primary inline-block pb-4">
                Presence Indicators
              </h3>
              <ul className="space-y-10">
                {[
                  "Unexplained exhaustion after being home.",
                  "Frequent minor breakdowns (water, electrical).",
                  "Family friction that centers in certain rooms.",
                  "Feeling better away from home then at home.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-8 items-start group">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(217,119,6,0.3)]">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <p className="text-gray-400 font-medium text-sm tracking-wide leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="pt-12 flex items-center gap-6">
                <span className="w-20 h-px bg-white/20" />
                <span className="text-xs font-black uppercase tracking-widest text-primary">
                  Professional Audit Recommended
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseNumberWhoItsFor;
