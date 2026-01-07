import React from "react";
import { User, CheckCircle2 } from "lucide-react";

const NameAnalysisWhoItsFor = () => {
  const profiles = [
    "Ambitious Professionals",
    "Public Figures & Influencers",
    "Parents naming New Borns",
    "Entrepreneurs & Startup Founders",
    "Individuals seeking a new start",
  ];

  return (
    <section className="py-32 px-4 bg-dark text-white relative border-y-8 border-purple-600/20">
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 via-transparent to-blue-900/20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 space-y-8" data-aos="fade-right">
            <div className="space-y-4">
              <h4 className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">
                Match Analysis
              </h4>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
                Is Your Name <br />
                <span className="text-primary">Working</span> For You?
              </h2>
            </div>
            <p className="text-gray-400 font-medium text-lg leading-relaxed max-w-md">
              If you feel like you're putting in 100% effort but getting 40%
              results, your vibrational identity might be the missing piece.
            </p>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {profiles.map((profile, idx) => (
              <div
                key={idx}
                className="bg-white/5 p-8 border border-white/10 hover:bg-primary/10 hover:border-primary/30 transition-all group flex items-start gap-6"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center shrink-0 shadow-2xl group-hover:scale-110 transition-transform">
                  <User className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-black uppercase tracking-tight leading-none">
                    {profile}
                  </h3>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      Priority Match
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NameAnalysisWhoItsFor;
