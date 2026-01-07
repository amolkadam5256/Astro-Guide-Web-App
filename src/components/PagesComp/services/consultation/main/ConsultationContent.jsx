import React from "react";
import { CheckCircle2, MessageSquare, Video, FileText } from "lucide-react";

const ConsultationContent = () => {
  const points = [
    "Video/Audio Sessions",
    "Recorded Strategy",
    "Follow-up Support",
    "Deep Privacy",
  ];

  return (
    <section className="py-24 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10" data-aos="fade-right">
            <div className="space-y-3">
              <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[9px]">
                Strategic Wisdom
              </h4>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
                Direct Human <br />
                <span className="text-primary italic opacity-90">Insight</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed italic">
              <p>
                While reports are fantastic, a consultation allows for nuanced,
                real-time strategy. In these sessions, we look at the 'Total
                Picture' of your life.
              </p>
              <p className="not-italic text-dark dark:text-white font-black uppercase tracking-tight border-l-4 border-primary pl-8 py-4 bg-gray-50 dark:bg-white/5 text-sm">
                Our experts help you connect the dots between your career,
                relationships, and health using multiple numerological systems
                simultaneously.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-2">
              {points.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-center group">
                  <div className="w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-dark dark:text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group" data-aos="fade-left">
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full scale-125" />
            <div className="relative p-10 md:p-16 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-2xl text-center space-y-10 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <MessageSquare className="w-32 h-32 text-primary" />
              </div>
              <div className="w-20 h-20 bg-primary text-white flex items-center justify-center rounded-full mx-auto shadow-xl">
                <Video className="w-10 h-10" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-dark dark:text-white uppercase tracking-tighter">
                  Live <br />
                  Session
                </h3>
                <div className="h-1 w-16 bg-primary mx-auto" />
                <p className="text-gray-500 dark:text-gray-400 text-[9px] font-black uppercase tracking-widest italic">
                  Personal Strategy Decode
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationContent;
