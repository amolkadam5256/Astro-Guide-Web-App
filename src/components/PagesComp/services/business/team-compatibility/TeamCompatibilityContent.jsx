import React from "react";
import { CheckCircle2, Users, Target, ShieldCheck } from "lucide-react";

const TeamCompatibilityContent = () => {
  const focuses = [
    "Core Leadership Synergy",
    "Departmental Flow Audit",
    "Hiring Filter Numerology",
    "Conflict Resolution Cycles",
  ];

  return (
    <section className="py-24 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10" data-aos="fade-right">
            <div className="space-y-3">
              <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">
                Team Dynamics
              </h4>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
                The Human <br />
                <span className="text-primary italic opacity-90">
                  Frequency Map
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed italic">
              <p>
                A team is a living organism. When individual frequencies clash,
                'Static' is created—manifesting as miscommunication, office
                politics, and missed deadlines.
              </p>
              <p className="not-italic text-dark dark:text-white font-black uppercase tracking-tight border-l-4 border-primary pl-8 py-4 bg-gray-50 dark:bg-white/5 text-sm">
                We analyze the 'Destiny Interaction' between team members to
                identify natural leaders, creative engines, and grounding
                forces, ensuring every seat is occupied by a resonating
                frequency.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {focuses.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-center group">
                  <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-dark dark:text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group" data-aos="zoom-in">
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full scale-125" />
            <div className="relative p-10 md:p-14 bg-gray-50 dark:bg-[#0a1020] border border-gray-100 dark:border-white/5 shadow-2xl text-center space-y-10 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Users className="w-32 h-32 text-primary" />
              </div>
              <div className="w-16 h-16 bg-primary text-white flex items-center justify-center rounded-full mx-auto shadow-xl">
                <Target className="w-8 h-8" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-dark dark:text-white uppercase tracking-tighter italic">
                  Synergy Protocol
                </h3>
                <div className="h-0.5 w-16 bg-primary mx-auto" />
                <p className="text-gray-500 dark:text-gray-400 text-[9px] font-black uppercase tracking-widest">
                  Multi-Founder Alignment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCompatibilityContent;
