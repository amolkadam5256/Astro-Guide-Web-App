import React from "react";
import { MessageSquare, FileText, Zap } from "lucide-react";

const ConsultationDeliverables = () => {
  const items = [
    {
      icon: MessageSquare,
      title: "60-Min Deep Dive",
      desc: "Concentrated session focused on your primary questions and current life challenges.",
    },
    {
      icon: FileText,
      title: "Summary Notes",
      desc: "Quick-reference sheet of the key findings and remedies discussed during the call.",
    },
    {
      icon: Zap,
      title: "Immediate Action",
      desc: "Practical guidance and simple rituals you can implement the very same day.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50/50 dark:bg-[#060b18] border-y border-gray-100 dark:border-white/5 relative group overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="space-y-3">
            <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">
              Session Outcomes
            </h4>
            <h2 className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
              Consultation <br />
              <span className="text-primary italic opacity-90">
                Deliverables
              </span>
            </h2>
          </div>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-[9px] italic border-b-2 border-primary pb-2">
            Proprietary Strategic Roadmap
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0a1020] p-10 border-b-4 border-transparent hover:border-primary transition-all duration-500 shadow-xl group/card relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover/card:scale-125 transition-transform">
                <item.icon className="w-12 h-12 text-primary" />
              </div>
              <div className="relative z-10 space-y-4">
                <item.icon className="w-7 h-7 text-primary mb-2 opacity-60" />
                <div className="space-y-3">
                  <h3 className="text-lg font-black text-dark dark:text-white uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-[13px] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultationDeliverables;
