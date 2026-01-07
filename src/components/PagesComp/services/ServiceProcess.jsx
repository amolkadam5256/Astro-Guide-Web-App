import React from "react";
import { UserPlus, Search, FileBarChart, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Choose Service",
    desc: "Select the personal or business numerology service that fits your needs.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Search,
    title: "In-depth Analysis",
    desc: "Our experts/algorithms analyze your name, birthdate, and vibrations.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: FileBarChart,
    title: "Get Your Report",
    desc: "Receive a detailed PDF report with actionable insights and remedies.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: CalendarCheck,
    title: "Implement & Grow",
    desc: "Follow the guidance provided to align with your cosmic destiny.",
    color: "from-pink-500 to-rose-500",
  },
];

const ServiceProcess = () => {
  return (
    <section className="py-24 bg-gray-50/50 dark:bg-[#080d1a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h4 className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4">
            Our Workflow
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
            Seamless Journey To <span className="text-primary">Success</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-11 left-0 w-full h-px bg-linear-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent -z-10" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-full bg-linear-to-br ${step.color} p-0.5 shadow-lg group-hover:scale-110 transition-transform duration-500`}
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-[#050a15] flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-gray-900 dark:text-white" />
                </div>
              </div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-white/10 flex items-center justify-center text-xs font-black text-primary shadow-sm">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
