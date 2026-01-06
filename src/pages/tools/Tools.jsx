import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import ToolsHero from "../../components/PagesComp/Tools/ToolsHero";
import { Link } from "react-router-dom";
import {
  Calculator,
  Compass,
  Calendar,
  Smartphone,
  Home,
  Users,
  ArrowRight,
  ShieldCheck,
  Zap,
  Target,
  FileText,
  Sparkles,
} from "lucide-react";

/**
 * Tools Categorized Data
 */
const ToolsSections = [
  {
    id: "identity",
    title: "Identity & Destiny",
    subtitle: "Core Essence",
    description:
      "Discover the fundamental numbers that define your character and life purpose.",
    tools: [
      {
        title: "Life Path Calculator",
        description:
          "Find your life path number from your birth date to reveal your life purpose and natural talents.",
        link: "/tools/life-path-calculator",
        icon: Compass,
        category: "Destiny",
      },
      {
        title: "Name Calculator",
        description:
          "Calculate the exact numerological vibrations of any name using Chaldean and Pythagorean systems.",
        link: "/tools/name-calculator",
        icon: Calculator,
        category: "Personal",
      },
    ],
  },
  {
    id: "success",
    title: "Success & Growth",
    subtitle: "Professional Edge",
    description:
      "Strategically align your professional and digital vibrations for maximum impact.",
    tools: [
      {
        title: "Business Name Audit",
        description:
          "Evaluate your business or startup name's impact on your brand's authority and market success.",
        link: "/tools/business-name-audit",
        icon: Target,
        category: "Enterprise",
      },
      {
        title: "Mobile Number Audit",
        description:
          "Analyze your phone number to see if it supports your professional growth and personal harmony.",
        link: "/tools/mobile-number-audit",
        icon: Smartphone,
        category: "Professional",
      },
      {
        title: "Personal Year Calculator",
        description:
          "Discover what the current year holds for you and how to align your decisions with current cycles.",
        link: "/tools/personal-year-calculator",
        icon: Calendar,
        category: "Forecasting",
      },
    ],
  },
  {
    id: "harmony",
    title: "Harmony & Living",
    subtitle: "Energetic Alignment",
    description:
      "Ensure your environment and relationships are in perfect numerical resonance.",
    tools: [
      {
        title: "House Number Calculator",
        description:
          "Understand the energetic influence of your home address on your health, wealth, and family life.",
        link: "/tools/house-number-calculator",
        icon: Home,
        category: "Living",
      },
      {
        title: "Compatibility Calculator",
        description:
          "Check the numerical compatibility between two people for better relationship understanding.",
        link: "/tools/compatibility-calculator",
        icon: Users,
        category: "Relationship",
      },
    ],
  },
];

const Tools = () => {
  return (
    <MainLayout
      title="Free Numerology Tools | Accurate Online Calculators"
      description="Access our suite of free numerology tools including Name, Life Path, Personal Year, and Business Name calculators for instant insights."
      keywords="Free Numerology Tools, Name Calculator, Life Path Calculator, Business Naming, Compatibility Test"
    >
      <div className="min-h-screen bg-white dark:bg-[#050a15]">
        <ToolsHero />

        {/* Dynamic Sections Area */}
        <div className="space-y-24 py-24">
          {ToolsSections.map((section, sIdx) => (
            <section key={section.id} className="px-4 sm:px-6 lg:px-8 relative">
              <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 border-l-4 border-primary pl-6 py-2">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Sparkles size={14} className="text-primary" />
                      <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[10px] sm:text-xs">
                        {section.subtitle}
                      </h4>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium max-w-sm">
                    {section.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.tools.map((tool, tIdx) => (
                    <ToolCard key={tIdx} {...tool} index={tIdx + sIdx * 3} />
                  ))}

                  {/* Add CTAs at end of specific sections if needed, or keep unified teaser */}
                  {sIdx === ToolsSections.length - 1 && (
                    <div
                      data-aos="fade-up"
                      data-aos-delay={300}
                      className="group relative bg-primary p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col justify-between"
                    >
                      <div className="relative z-10">
                        <div className="w-14 h-14 flex items-center justify-center bg-white/20 text-white mb-6">
                          <FileText size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
                          Deep Analysis?
                        </h3>
                        <p className="text-white/80 text-[13px] leading-relaxed mb-8">
                          Calculators give a snapshot. Our premium PDF reports
                          provide a 30+ page comprehensive roadmap for
                          transformation.
                        </p>
                      </div>

                      <Link
                        to="/reports"
                        className="relative z-10 w-full py-4 bg-white text-primary text-center text-xs font-black uppercase tracking-widest hover:bg-dark hover:text-white transition-all shadow-xl"
                      >
                        Premium Reports
                      </Link>

                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Quality Section */}
        <section className="bg-gray-50 dark:bg-white/5 py-24 border-y border-gray-100 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-xs font-black text-primary uppercase tracking-[0.5em] mb-16">
              The AstroGuide Standard
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-24">
              <div className="space-y-6 group">
                <div className="w-20 h-20 bg-white dark:bg-white/5 mx-auto flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-12 rounded-full">
                  <ShieldCheck size={32} strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h5 className="font-black uppercase tracking-widest text-dark dark:text-white text-sm">
                    Data Privacy
                  </h5>
                  <p className="text-gray-500 text-xs leading-relaxed max-w-[200px] mx-auto">
                    Absolute confidentiality. No session data is ever stored on
                    our servers.
                  </p>
                </div>
              </div>
              <div className="space-y-6 group">
                <div className="w-20 h-20 bg-white dark:bg-white/5 mx-auto flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-all transform group-hover:-rotate-12 rounded-full">
                  <Zap size={32} strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h5 className="font-black uppercase tracking-widest text-dark dark:text-white text-sm">
                    Real-Time Core
                  </h5>
                  <p className="text-gray-500 text-xs leading-relaxed max-w-[200px] mx-auto">
                    Proprietary mathematical engine delivers instant verified
                    results.
                  </p>
                </div>
              </div>
              <div className="space-y-6 group">
                <div className="w-20 h-20 bg-white dark:bg-white/5 mx-auto flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-12 rounded-full">
                  <Target size={32} strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h5 className="font-black uppercase tracking-widest text-dark dark:text-white text-sm">
                    Exact Science
                  </h5>
                  <p className="text-gray-500 text-xs leading-relaxed max-w-[200px] mx-auto">
                    Dual-system cross-verification ensures 100% calculation
                    integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

const ToolCard = ({
  title,
  description,
  link,
  icon: Icon,
  category,
  index,
}) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 50}
    className="group relative bg-white dark:bg-[#0a0f1c] border border-gray-100 dark:border-white/5 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 flex flex-col overflow-hidden"
  >
    {/* Category Badge */}
    <div className="flex justify-between items-start mb-6">
      <div className="w-14 h-14 flex items-center justify-center bg-gray-50 dark:bg-white/5 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <span className="text-[10px] font-black text-primary opacity-40 uppercase tracking-[0.2em]">
        {category}
      </span>
    </div>

    <h3 className="text-xl font-black text-dark dark:text-white uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">
      {title}
    </h3>

    <p className="text-gray-500 dark:text-gray-400 text-[13px] leading-relaxed mb-8 grow">
      {description}
    </p>

    <Link
      to={link}
      className="inline-flex items-center text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-dark dark:text-white group-hover:text-primary transition-colors"
    >
      Initialize Tool
      <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>

    <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500"></div>
  </div>
);

export default Tools;
