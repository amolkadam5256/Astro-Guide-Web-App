import React from "react";
import { Users, FileText, Award, Calendar } from "lucide-react";

const stats = [
  {
    icon: Users,
    label: "Happy Clients",
    value: "10,000+",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: FileText,
    label: "Reports Generated",
    value: "25,000+",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Award,
    label: "Expert Consultants",
    value: "50+",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Calendar,
    label: "Years Experience",
    value: "15+",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

const ServiceStats = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#050a15] overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group p-6 border border-gray-100 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}
              >
                <stat.icon className="w-7 h-7" />
              </div>
              <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceStats;
