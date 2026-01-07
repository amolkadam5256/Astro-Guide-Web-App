import React from "react";
import { CheckCircle2, Calendar, FileText, Zap } from "lucide-react";

const YearForecastDeliverables = () => {
  const deliverables = [
    {
      icon: Calendar,
      title: "Monthly Roadmap",
      desc: "Specific goals and energetic themes for each of the next 12 months.",
    },
    {
      icon: CheckCircle2,
      title: "Golden Dates",
      desc: "The top 12 most auspicious dates for your specific birth numbers this year.",
    },
    {
      icon: FileText,
      title: "Strategy Document",
      desc: "Deep-dive analysis of your Financial, Health, and Career outlook.",
    },
    {
      icon: Zap,
      title: "Impact Remedy",
      desc: "Practical numerical remedies to mitigate negative transits.",
    },
  ];

  return (
    <section className="py-12 px-4 bg-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-transparent to-amber-500" />
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <h4 className="text-primary font-black uppercase tracking-[0.6em] text-[10px]">
            The Output
          </h4>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">
            Precise <span className="italic text-primary">Milestones</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#050a15] p-6 space-y-8 hover:bg-primary/5 transition-colors group"
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-[0_0_30px_rgba(249,115,22,0.1)]">
                <item.icon className="w-8 h-8" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-black uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YearForecastDeliverables;
