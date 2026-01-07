import React from "react";
import { Link } from "react-router-dom";
import {
  Calculator,
  Compass,
  Calendar,
  Smartphone,
  Home,
  FileText,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/**
 * HomeTools - A creative lead magnet section with a grid of free numerology tools.
 */
const HomeTools = () => {
  const tools = [
    {
      title: "Name Numerology Calculator",
      desc: "Chaldean & Pythagorean systems for name vibration analysis.",
      icon: Calculator,
      link: "/services/personal/name-analysis",
      color: "from-blue-500/20 to-indigo-500/20",
    },
    {
      title: "Life Path & Destiny Calculator",
      desc: "Discover your core purpose and destiny based on your birth date.",
      icon: Compass,
      link: "/services/personal/life-path",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Personal Year Number Calculator",
      desc: "Get insights into your current yearly cycle and key themes.",
      icon: Calendar,
      link: "/services/personal/year-forecast",
      color: "from-amber-500/20 to-orange-500/20",
    },
    {
      title: "Mobile / Phone Number Audit",
      desc: "Analyze if your mobile number aligns with your professional success.",
      icon: Smartphone,
      link: "/services/personal/mobile-number",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "House / Address Number Calculator",
      desc: "Ensure your living space supports your overall well-being.",
      icon: Home,
      link: "/services/personal/house-number",
      color: "from-rose-500/20 to-red-500/20",
    },
    {
      title: "Numerology Snapshot",
      desc: "Download a concise 1-page PDF summary of your key numbers.",
      icon: FileText,
      link: "/services",
      color: "from-cyan-500/20 to-sky-500/20",
    },
  ];

  return (
    <section className="relative py-24 bg-gray-50 dark:bg-[#060b18] overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div
            data-aos="fade-down"
            className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-2"
          >
            <Sparkles size={12} className="text-primary" />
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">
              Try For Free
            </span>
          </div>
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none"
          >
            Start With <span className="text-primary">Free</span> Numerology
            Tools
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-medium"
          >
            Get instant insights using our free calculators. Upgrade anytime to
            detailed PDF reports or expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              className="group relative bg-white dark:bg-[#0a0f1c] border border-gray-100 dark:border-white/5 p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              {/* Animated Gradient Background */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Background Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 flex items-center justify-center bg-gray-50 dark:bg-white/5 text-primary mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <tool.icon size={28} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-black text-dark dark:text-white uppercase tracking-tight mb-3">
                  {tool.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 grow">
                  {tool.desc}
                </p>

                <Link
                  to={tool.link}
                  className="inline-flex items-center text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-dark dark:text-white group-hover:text-primary transition-colors"
                >
                  Check Free
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-primary transform translate-x-8 translate-y-8 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/services"
            data-aos="fade-up"
            className="inline-block px-10 py-5 bg-dark dark:bg-white text-white dark:text-dark font-black uppercase tracking-[0.2em] text-xs hover:bg-primary dark:hover:bg-primary hover:text-white transition-all active:scale-95"
          >
            Explore All Services
          </Link>
        </div>
      </div>

      <style>{`
        .bg-size-[20px_20px] {
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default HomeTools;
