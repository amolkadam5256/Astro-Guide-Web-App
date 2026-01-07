import React from "react";
import { Link } from "react-router-dom";
import {
  PenTool,
  Footprints,
  Calendar,
  Smartphone,
  Home,
  Heart,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Name Analysis",
    desc: "Discover the hidden vibration of your name and how it shapes your personality and destiny.",
    link: "/services/personal/name-analysis",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: Footprints,
    title: "Life Path Analysis",
    desc: "Reveal your life's primary purpose, key lessons, and natural talents based on your birth date.",
    link: "/services/personal/life-path",
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    icon: Calendar,
    title: "Personal Year Forecast",
    desc: "Prepare for the year ahead by understanding the specific themes and energies influencing you.",
    link: "/services/personal/year-forecast",
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-900/20",
  },
  {
    icon: Smartphone,
    title: "Mobile Number Audit",
    desc: "Ensure your primary communication tool is aligned with your personal and professional goals.",
    link: "/services/personal/mobile-number",
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
  },
  {
    icon: Home,
    title: "House Number Analysis",
    desc: "Create a harmonious living environment by understanding the energy of your home address.",
    link: "/services/personal/house-number",
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-900/20",
  },
  {
    icon: Heart,
    title: "Compatibility Report",
    desc: "Analyze the energetic dynamics between you and a partner, friend, or business associate.",
    link: "/services/personal/compatibility",
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-900/20",
  },
];

const PersonalServicesGrid = () => {
  return (
    <section
      id="services-grid"
      className="py-24 px-4 bg-gray-50/50 dark:bg-gray-900/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">
            Our Personal <span className="text-purple-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose a specific analysis to gain deeper insight into that area of
            your life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {service.desc}
              </p>

              <Link
                to={service.link}
                className={`inline-flex items-center gap-2 font-bold uppercase tracking-wider text-xs ${service.color} group-hover:gap-3 transition-all`}
              >
                View Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalServicesGrid;
