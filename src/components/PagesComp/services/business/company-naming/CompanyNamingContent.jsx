import React from "react";
import { CheckCircle2, TrendingUp, BarChart3, ShieldCheck } from "lucide-react";

const CompanyNamingContent = () => {
  const points = [
    "Market Resonance Sum",
    "Sector Frequency Matching",
    "Founder Compatibility",
    "Global Trademark Vibration",
  ];

  return (
    <section className="py-24 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10" data-aos="fade-right">
            <div className="space-y-3">
              <h4 className="text-primary font-black uppercase tracking-[0.5em] text-[9px]">
                Brand Engineering
              </h4>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
                Numerical <br />
                <span className="text-primary italic opacity-90">
                  Architectures
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed italic">
              <p>
                In the global marketplace, a name is more than a label; it's an
                asset. Top brands are often engineered to resonate with the
                specific frequency of their industry—Trust for banks, Innovation
                for tech, Luxury for fashion.
              </p>
              <p className="not-italic text-dark dark:text-white font-black uppercase tracking-tight border-l-4 border-primary pl-8 py-4 bg-gray-50 dark:bg-white/5 text-sm">
                We analyze your proposed names across Chaldean and Pythagorean
                systems to ensure they broadcast the right signal to your target
                market.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {points.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-center group">
                  <div className="w-8 h-8 bg-primary text-white flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-dark dark:text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full" />
            <div className="relative p-10 md:p-16 bg-gray-50 dark:bg-[#0a1020] border border-gray-100 dark:border-white/5 shadow-2xl text-center space-y-10">
              <div className="flex justify-center gap-4">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-xl shadow-xl rotate-3">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 bg-slate-900 dark:bg-white text-white dark:text-dark flex items-center justify-center rounded-xl shadow-xl -rotate-3">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black text-dark dark:text-white uppercase tracking-tighter">
                  Equity Audit
                </h3>
                <div className="flex items-center justify-center gap-3">
                  <span className="h-0.5 w-10 bg-primary" />
                  <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 italic">
                    Financial-Spiritual ROI
                  </p>
                  <span className="h-0.5 w-10 bg-primary" />
                </div>
              </div>

              <div className="pt-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/20 text-primary font-black text-[9px] uppercase tracking-widest">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Confidential Protocol</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyNamingContent;
