import React from "react";
import { Link } from "react-router-dom";
import {
  Binary,
  PenTool,
  Sparkles,
  TrendingUp,
  User,
  Baby,
  Building2,
  Calendar,
  Home,
  ArrowRight,
} from "lucide-react";

const NumerologyServicesGrid = () => {
  const sections = [
    {
      icon: Binary,
      title: "Personal Numerology",
      desc: "Comprehensive name analysis and life path readings for personal growth.",
      link: "/services/personal",
    },
    {
      icon: TrendingUp,
      title: "Life Path Analysis",
      desc: "Discover your life path number to reveal your true purpose and character.",
      link: "/services/personal/life-path",
    },
    {
      icon: PenTool,
      title: "Name Analysis",
      desc: "Harmonize your name's vibration to align with success and prosperity.",
      link: "/services/personal/name-analysis",
    },
    {
      icon: Building2,
      title: "Business Numerology",
      desc: "Optimize your brand with strategic naming and business timing solutions.",
      link: "/services/business",
    },
    {
      icon: Calendar,
      title: "Personal Forecast",
      desc: "Get insights into your current year and auspicious dates for decisions.",
      link: "/services/personal/year-forecast",
    },
    {
      icon: Home,
      title: "Property & More",
      desc: "Ensure your commercial and residential properties are in energetic harmony.",
      link: "/services/property",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {sections.map((section, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 50}
            className="group p-8 border border-gray-100 dark:border-white/5 hover:border-primary dark:hover:border-primary transition-all bg-gray-50/50 dark:bg-dark relative overflow-hidden flex flex-col"
          >
            {/* Background Icon Decoration */}
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 dark:text-white text-black transition-opacity pointer-events-none">
              <section.icon className="w-24 h-24 -mr-10 -mt-10" />
            </div>

            <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
              <section.icon className="w-6 h-6" />
            </div>

            <h4 className="text-xl font-black text-dark dark:text-white uppercase tracking-tight mb-4">
              {section.title}
            </h4>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 grow">
              {section.desc}
            </p>

            <div className="space-y-4">
              <Link
                to={section.link}
                className="flex items-center text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-dark dark:text-white group hover:text-primary transition-colors"
              >
                Learn More{" "}
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="block w-full text-center py-4 bg-dark dark:bg-white/5 text-white text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-primary dark:hover:bg-primary transition-colors border border-transparent dark:border-white/10"
              >
                Book This Service
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumerologyServicesGrid;
