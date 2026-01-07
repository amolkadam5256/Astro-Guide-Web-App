import React from "react";
import { CheckCircle2, Phone } from "lucide-react";

const MobileNumberWhoItsFor = () => {
  const categories = [
    "Sales & Revenue Teams",
    "Digital Entrepreneurs",
    "Freelancers & Consultants",
    "Customer Support Leads",
    "High-Net-Worth Individuals",
  ];

  return (
    <section className="py-32 px-4 bg-dark text-white relative border-y-4 border-blue-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12" data-aos="fade-right">
            <div className="space-y-4">
              <h4 className="text-primary font-black uppercase tracking-[0.6em] text-[10px]">
                Strategic Resonance
              </h4>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">
                Who Needs A <br />
                <span className="text-primary">Number Boost?</span>
              </h2>
            </div>

            <div className="grid gap-4">
              {categories.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-6 p-8 bg-white/5 border border-white/10 hover:bg-primary/10 transition-all group"
                >
                  <Phone className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
                  <span className="text-sm font-semibold uppercase tracking-widest leading-none">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="absolute inset-0 bg-primary/10 blur-[150px] rounded-full" />
            <div className="relative bg-white/5 p-12 border border-white/10 backdrop-blur-xl space-y-12">
              <h3 className="text-2xl font-black uppercase tracking-tight italic text-primary">
                Vibrational Mismatch Indicators
              </h3>
              <ul className="space-y-8">
                {[
                  "Constant wrong numbers or spam.",
                  "Frequent misunderstandings over text/calls.",
                  "Deals getting 'stuck' at the final stage.",
                  "Feeling drained after phone conversations.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-6 items-start group">
                    <div className="w-8 h-8 rounded-full bg-primary text-dark flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-gray-400 font-bold text-sm tracking-wide leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileNumberWhoItsFor;
