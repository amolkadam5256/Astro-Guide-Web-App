import React from "react";
import { Zap, Shield, Target, MessageSquare } from "lucide-react";

const MobileNumberContent = () => {
  const features = [
    { icon: Target, title: "Total Sum Analysis" },
    { icon: Zap, title: "Pairing Frequency" },
    { icon: Shield, title: "Karmic Protection" },
    { icon: MessageSquare, title: "Communication Vibe" },
  ];

  return (
    <section className="py-12 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative" data-aos="fade-right">
            <div className="absolute -inset-10 bg-primary/10 blur-[120px] rounded-full" />
            <div className="relative border-2 border-gray-100 dark:border-white/5 p-12 md:p-20 bg-white/50 dark:bg-white/5 shadow-2xl space-y-12">
              <div className="flex justify-between items-start">
                <div className="w-16 h-1 bg-primary" />
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Signal Strength
                  </p>
                  <p className="text-xl font-bold text-primary italic uppercase tracking-tighter">
                    Perfect Sync
                  </p>
                </div>
              </div>

              <h3 className="text-3xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
                Digital <br />
                Frequency Audit
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {features.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-4 hover:border-primary/50 transition-all group"
                  >
                    <item.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <p className="text-[10px] font-black uppercase tracking-widest leading-none">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-12" data-aos="fade-left">
            <div className="space-y-4">
              <h4 className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">
                The Pulse
              </h4>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
                Your Phone <br />
                <span className="text-primary">Is A Magnet</span>
              </h2>
            </div>

            <div className="space-y-8 text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed italic">
              <p>
                In the 21st century, your phone number is active 24/7. It is
                your vibrational doorway for incoming calls, messages, and
                digital transactions.
              </p>
              <p className="text-sm not-italic text-dark dark:text-white font-black uppercase tracking-tight border-l-4 border-primary pl-4">
                Certain digit combinations create 'Energy Blocks' that cause
                delays, while others act as 'Wealth Magnets'. Our audit
                identifies exactly what your number is attracting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileNumberContent;
