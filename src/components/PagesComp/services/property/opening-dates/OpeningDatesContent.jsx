import React from "react";
import { CheckCircle2, Calendar, Key, Sparkles } from "lucide-react";

const OpeningDatesContent = () => {
  const points = [
    "Auspicious Muhurta windows",
    "Ceremonial ritual timing",
    "Founder-Property synergy",
    "Digital launch synchronization",
  ];

  return (
    <section className="py-32 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12" data-aos="fade-right">
            <div className="space-y-4">
              <h4 className="text-amber-600 font-black uppercase tracking-[0.5em] text-[10px]">
                Temporal Alignment
              </h4>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
                The First <br />
                <span className="text-amber-600 italic">Threshold</span>
              </h2>
            </div>

            <div className="space-y-8 text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed italic">
              <p>
                The moment you first cross the threshold of a new property sets
                the 'Birth Frequency' of your residency or business operations.
                A wrong start can lead to persistent hurdles.
              </p>
              <p className="not-italic text-dark dark:text-white font-black uppercase tracking-tight border-l-4 border-amber-600 pl-8 py-4 bg-gray-50 dark:bg-white/5">
                We identify the precise windows where planetary alignment and
                your personal numbers create a 'Gateway of Prosperity', ensuring
                your inauguration is backed by the strongest possible cosmic
                signal.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-4">
              {points.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center group">
                  <div className="w-10 h-10 rounded-full bg-amber-600/5 text-amber-600 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-dark dark:text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group" data-aos="fade-left">
            <div className="absolute inset-0 bg-amber-600/10 blur-[150px] rounded-full scale-125" />
            <div className="relative p-12 md:p-20 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-3xl text-center space-y-12 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Calendar className="w-40 h-40 text-amber-600" />
              </div>
              <div className="w-24 h-24 bg-amber-600 text-white flex items-center justify-center rounded-full mx-auto shadow-2xl animate-pulse">
                <Key className="w-12 h-12" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-dark dark:text-white uppercase tracking-tighter">
                  Gateway <br />
                  Protocol
                </h3>
                <div className="h-1 w-24 bg-amber-600 mx-auto" />
                <p className="text-gray-500 dark:text-gray-400 text-[10px] font-black uppercase tracking-widest italic">
                  Auspicious Threshold Analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningDatesContent;
