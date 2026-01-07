import React from "react";
import { Search, CheckCircle2, Star, FileText } from "lucide-react";

const NameAnalysisDeliverables = () => {
  const items = [
    {
      icon: Search,
      title: "Phonetic Audit",
      desc: "Detailed analysis of how your name's sound influences public perception and mental clarity.",
    },
    {
      icon: CheckCircle2,
      title: "Correction Strategy",
      desc: "Specific spelling adjustments to enhance your success frequency without changing legal docs unnecessarily.",
    },
    {
      icon: Star,
      title: "Signature Guide",
      desc: "Recommendations for a signature that projects confidence, stability, and wealth-attraction.",
    },
    {
      icon: FileText,
      title: "Digital Presence",
      desc: "How to apply your corrected vibration on social media, emails, and business cards.",
    },
  ];

  return (
    <section className="py-32 px-4 bg-gray-50/50 dark:bg-[#060b18] relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl space-y-4">
            <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">
              The Outcome
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
              Premium <span className="text-primary">Assets</span>
            </h2>
          </div>
          <div className="bg-white dark:bg-[#0a1020] px-6 py-3 border border-gray-100 dark:border-white/10 rounded-full shadow-sm">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
              Timeline: 3-5 Working Days
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0a1020] p-10 border-b-4 border-transparent hover:border-primary transition-all duration-500 shadow-xl group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="w-16 h-16 bg-primary/5 text-primary flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-dark dark:text-white uppercase tracking-tight mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NameAnalysisDeliverables;
