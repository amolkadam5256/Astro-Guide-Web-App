import React from "react";
import { Link } from "react-router-dom";
import {
  User,
  Briefcase,
  Home,
  Headphones,
  CreditCard,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    icon: User,
    title: "Personal Numerology",
    desc: "Unlock your personal potential with name analysis, life path readings, and compatibility reports tailored just for you.",
    link: "/services/personal",
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-900/30",
  },
  {
    icon: Briefcase,
    title: "Business Numerology",
    desc: "Optimize your business success with strategic naming, branding, and timing solutions based on numerological principles.",
    link: "/services/business",
    color: "text-indigo-600",
    bg: "bg-indigo-50 dark:bg-indigo-900/30",
  },
  {
    icon: Home,
    title: "Property Numerology",
    desc: "Enhance your property's energy with commercial and residential numerology audits for peace and prosperity.",
    link: "/services/property",
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-900/30",
  },
  {
    icon: Headphones,
    title: "Expert Consultations",
    desc: "Get personalized guidance through one-on-one sessions and coaching programs with our expert numerologists.",
    link: "/services/consultation",
    color: "text-purple-600",
    bg: "bg-purple-50 dark:bg-purple-900/30",
  },
];

const ServiceCategoryGrid = () => {
  return (
    <section className="py-24 px-4 bg-gray-50/30 dark:bg-[#060b18]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h4 className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4">
            Our Expertise
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
            Specialized <span className="text-primary">Numerology</span>{" "}
            Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-[#0a1020] p-10 border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Decorative Circle Background */}
              <div
                className={`absolute -top-10 -right-10 w-32 h-32 ${cat.bg} opacity-20 rounded-full group-hover:scale-150 transition-transform duration-700`}
              />

              <div
                className={`w-16 h-16 ${cat.bg} ${cat.color} rounded-full flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
              >
                <cat.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tighter">
                {cat.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-medium">
                {cat.desc}
              </p>

              <Link
                to={cat.link}
                className={`inline-flex items-center gap-3 font-black uppercase tracking-widest text-xs ${cat.color} group/btn`}
              >
                Learn More
                <div
                  className={`p-2 rounded-full ${cat.bg} group-hover/btn:translate-x-2 transition-transform`}
                >
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategoryGrid;
