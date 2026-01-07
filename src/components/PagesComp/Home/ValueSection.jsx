import React from "react";
import { Compass, CalendarCheck, Target, TrendingUp } from "lucide-react";

const ValueSection = () => {
  const benefits = [
    {
      icon: Compass,
      title: "Clarity",
      description:
        "Understand your strengths, challenges & cycles to navigate life with confidence.",
      color: "from-blue-500/20 to-indigo-500/20",
      iconColor: "text-blue-500",
    },
    {
      icon: CalendarCheck,
      title: "Decision Support",
      description:
        "Find the right timing for career, business & property decisions based on your numbers.",
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500",
    },
    {
      icon: Target,
      title: "Alignment",
      description:
        "Optimize your personal names, business numbers & branding for maximum resonance.",
      color: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-500",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description:
        "Strategic planning using personal & business numbers to unlock your full potential.",
      color: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-500",
    },
  ];

  return (
    <section className="relative py-10 bg-white dark:bg-[#050a15] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h4
            data-aos="fade-up"
            className="text-primary font-black uppercase tracking-[0.4em] text-[10px] sm:text-xs"
          >
            Why Numerology Matters
          </h4>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none"
          >
            How Numerology <span className="text-primary">Helps You</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-medium leading-relaxed"
          >
            Unlock the hidden potential of numbers to transform your personal
            journey and professional success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100 + 300}
              className="group relative p-8 bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Card Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 flex items-center justify-center bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 ${item.iconColor} mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}
                >
                  <item.icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-black text-dark dark:text-white uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
