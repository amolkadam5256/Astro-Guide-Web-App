import React from "react";
import { CheckCircle2, Navigation, Compass } from "lucide-react";

const LifePathContent = () => {
  const points = [
    "Core Purpose Discovery",
    "Innate Talent Audit",
    "Obstacle Identification",
    "Spiritual Growth Roadmap",
  ];

  return (
    <section className="py-12 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative overflow-y-hidden" data-aos="fade-right">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-blue-600/5 rounded-full blur-[100px]" />
            <div className="relative border-2 border-gray-100 dark:border-white/5 p-12 md:p-20 bg-white/50 dark:bg-white/5 backdrop-blur-xl">
              <div className="text-[15rem] font-black text-blue-600/5 absolute top-0 left-0 leading-none select-none">
                33
              </div>
              <div className="relative z-10 space-y-8 text-center sm:text-left">
                <div className="w-20 h-20 bg-blue-600 text-white flex items-center justify-center rounded-2xl shadow-2xl rotate-3">
                  <Navigation className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black text-dark dark:text-white uppercase tracking-tighter">
                  Soul Journey <br />
                  Decoding
                </h3>
                <div className="w-20 h-1 bg-blue-600 transition-all group-hover:w-full" />
              </div>
            </div>
          </div>

          <div className="space-y-12" data-aos="fade-left">
            <div className="space-y-4">
              <h4 className="text-blue-600 font-black uppercase tracking-[0.5em] text-[10px]">
                The Blueprint
              </h4>
              <h2 className="text-2xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
                Beyond Basic <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/50">
                  Definitions
                </span>
              </h2>
            </div>

            <div className="space-y-8 text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              <p>
                The Life Path number is the most significant number in your
                chart. It reveals the path you were born to walk and the lessons
                you are here to learn.
              </p>
              <p className="font-bold text-dark dark:text-white border-l-4 border-blue-600 pl-6">
                Our analysis goes beyond basic definitions to provide a
                secondary and tertiary level of insight into your life's 'Master
                Plan'.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {points.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <Compass className="w-5 h-5 text-blue-600 group-hover:rotate-45 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-dark dark:text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifePathContent;
