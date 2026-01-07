import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { images } from "../../../assets/images/images";
import Testimonials from "../../Common/Testimonials";

const ServicePageTemplate = ({ data, children }) => {
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#050a15] text-dark dark:text-white">
        <div className="text-center">
          <h2 className="text-2xl font-black mb-4 uppercase tracking-tighter">
            Data Not Found
          </h2>
          <Link to="/services" className="text-primary font-bold underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const {
    hero = {},
    explanation = {},
    deliverables = [],
    examples = [],
    whoItsFor = [],
    finalCTA = {},
  } = data;

  return (
    <div className="bg-white dark:bg-[#050a15]">
      {/* 1️⃣ HERO SECTION (Fixed Background) */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-32 px-4">
        {/* Fixed Background Pattern */}
        <div
          className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-10 dark:opacity-20 pointer-events-none"
          style={{ backgroundImage: `url(${images.hero.patternBg})` }}
        />

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-blue-50/50 via-white to-white dark:from-slate-900/50 dark:via-[#050a15] dark:to-[#050a15] -z-10" />

        {/* Glowing Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full -z-10 opacity-30 dark:opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500 rounded-full blur-[150px]" />
        </div>

        <div
          className="max-w-5xl mx-auto text-center relative z-10 space-y-8"
          data-aos="fade-up"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light-1 text-[10px] font-black uppercase tracking-[0.3em] mb-4 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>{hero.authority || "Expert Numerology Analysis"}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter leading-none">
            {hero.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link
              to={hero.ctaLink || "/contact"}
              className="w-full sm:w-auto px-12 py-6 bg-primary hover:bg-primary-dark-1 text-white font-black uppercase tracking-[0.2em] text-xs transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 group"
            >
              {hero.ctaText || "Get Started"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2️⃣ WHAT THIS SERVICE IS (Explanation) */}
      <section className="py-24 px-4 border-t border-gray-100 dark:border-white/5 relative bg-white dark:bg-[#050a15]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8" data-aos="fade-right">
            <div className="space-y-4">
              <h4 className="text-primary font-black uppercase tracking-[0.4em] text-xs">
                The Essence
              </h4>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
                Deep-Dive{" "}
                <span className="text-primary">{explanation.title}</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              {explanation.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 pt-4">
              {explanation.highlights.map((highlight, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="p-1 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all rounded">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-dark dark:text-gray-200 font-black text-xs uppercase tracking-tight">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="absolute inset-x-0 inset-y-12 bg-primary/10 blur-[100px] rounded-full" />
            <div className="relative aspect-square bg-gray-50 dark:bg-[#0a1020] border border-gray-100 dark:border-white/5 shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="text-[25rem] font-black text-primary/3 dark:text-primary/5 select-none font-sans absolute leading-none">
                {explanation.symbol || "09"}
              </div>
              <div className="relative z-10 text-center p-12 space-y-8">
                <div className="w-24 h-24 bg-dark dark:bg-white text-white dark:text-dark mx-auto flex items-center justify-center rounded-full shadow-2xl relative">
                  <Sparkles className="w-10 h-10 animate-pulse" />
                </div>
                <blockquote className="text-xl md:text-2xl font-black text-dark dark:text-white uppercase tracking-tighter italic leading-tight">
                  "Your life is code. We help you decode it."
                </blockquote>
                <p className="text-primary font-black uppercase tracking-[0.2em] text-[10px]">
                  Numerological Authority
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ WHAT YOU GET (Deliverables) */}
      <section className="py-24 px-4 bg-gray-50/50 dark:bg-[#060b18] border-y border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4" data-aos="fade-up">
            <h4 className="text-primary font-black uppercase tracking-[0.4em] text-xs">
              The Outcome
            </h4>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
              Premium <span className="text-primary">Deliverables</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#0a1020] p-10 border border-gray-200 dark:border-white/5 shadow-sm group hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="w-14 h-14 bg-primary/5 text-primary flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-dark dark:text-white uppercase tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="h-0.5 w-12 bg-primary group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>

          <div
            className="mt-16 bg-white dark:bg-[#0a1020] p-8 border border-gray-100 dark:border-white/5 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
            data-aos="zoom-in"
          >
            <div className="flex items-center gap-5 text-dark dark:text-white">
              <div className="w-14 h-14 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0 shadow-inner border border-green-500/20">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="font-black uppercase tracking-[0.2em] text-[10px] text-gray-400 mb-1">
                  Standard Format
                </p>
                <p className="font-bold text-lg uppercase tracking-tight">
                  {deliverables.format || "PDF + Strategy Guide"}
                </p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-200 dark:bg-white/10" />
            <div className="flex items-center gap-5 text-dark dark:text-white">
              <div className="w-14 h-14 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 shadow-inner border border-blue-500/20">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <p className="font-black uppercase tracking-[0.2em] text-[10px] text-gray-400 mb-1">
                  Priority Delivery
                </p>
                <p className="font-bold text-lg uppercase tracking-tight">
                  {deliverables.timeline || "3-5 Working Days"}
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="w-full md:w-auto px-10 py-5 bg-dark dark:bg-white text-white dark:text-dark font-black uppercase tracking-widest text-xs hover:bg-primary dark:hover:bg-primary hover:text-white transition-all text-center"
            >
              Request Custom Format
            </Link>
          </div>
        </div>
      </section>

      {/* 4️⃣ REAL-WORLD EXAMPLES */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Subtle Decorative Texture */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none overflow-hidden text-[6rem] font-black leading-none break-all font-mono">
          102938475610293847561029384756102938475610293847561029384756
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
            data-aos="fade-up"
          >
            <div className="max-w-2xl space-y-6">
              <h4 className="text-primary font-black uppercase tracking-[0.4em] text-xs">
                Practical Proof
              </h4>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
                Real-World <span className="text-primary">Applications</span>
              </h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-[10px] italic border-b-2 border-primary/20 pb-2">
              Actual Anonymized Scenarios
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {examples.map((example, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row gap-8 p-10 bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-primary/20 transition-all group"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <div className="text-5xl font-black text-primary/10 group-hover:text-primary/30 transition-colors shrink-0 leading-none">
                  0{i + 1}
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-black text-dark dark:text-white uppercase tracking-tight leading-tight">
                    {example.scenario}
                  </h3>
                  <div className="relative p-6 bg-white dark:bg-[#0a1020] border-l-4 border-primary shadow-sm space-y-3">
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">
                      The Resolution
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed italic font-medium">
                      "{example.resolution}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ WHO THIS SERVICE IS FOR */}
      <section className="py-24 px-4 bg-dark text-white overflow-hidden relative border-y-4 border-primary/20">
        <div className="absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-purple-600/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12" data-aos="fade-right">
              <div className="space-y-4">
                <h4 className="text-primary font-black uppercase tracking-[0.4em] text-xs">
                  Match Analysis
                </h4>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                  Ideal <span className="text-primary">Candidate</span> Profile
                </h2>
              </div>
              <div className="grid gap-6">
                {whoItsFor.map((profile, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-xl">
                      <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <span className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white/70 group-hover:text-white transition-colors">
                      {profile}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="bg-white/5 p-12 border border-white/10 backdrop-blur-md relative"
              data-aos="fade-left"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20">
                <Star className="w-20 h-20 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-10 uppercase tracking-tight text-primary">
                Strategic Indicators
              </h3>
              <ul className="space-y-6">
                {(
                  whoItsFor.indicators || [
                    "Seeking objective clarity in complex life phases.",
                    "Planning high-stakes professional transitions.",
                    "Persistent unexplained patterns or obstacles.",
                    "Requirement for expert, data-driven soul strategy.",
                  ]
                ).map((indicator, i) => (
                  <li
                    key={i}
                    className="flex gap-4 items-start text-gray-300 font-medium"
                  >
                    <span className="text-primary font-black text-xl leading-none">
                      /
                    </span>
                    <span className="text-sm md:text-base leading-relaxed tracking-wide">
                      {indicator}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ FINAL CTA SECTION */}
      <section className="py-24 px-4 relative overflow-hidden bg-white dark:bg-[#050a15]">
        <div
          className="max-w-4xl mx-auto text-center space-y-12 relative z-10"
          data-aos="zoom-in"
        >
          <h2 className="text-4xl md:text-6xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none mb-4">
            {finalCTA.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-bold max-w-2xl mx-auto leading-relaxed uppercase tracking-tight">
            {finalCTA.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
            <Link
              to="/contact"
              className="px-12 py-6 bg-primary hover:bg-primary-dark-1 text-white font-black uppercase tracking-[0.3em] text-[10px] hover:-translate-y-2 transition-all shadow-2xl shadow-primary/30"
            >
              {finalCTA.primaryButton}
            </Link>
            <Link
              to="/services"
              className="px-12 py-6 bg-white dark:bg-transparent border-2 border-dark dark:border-white text-dark dark:text-white font-black uppercase tracking-[0.3em] text-[10px] hover:bg-dark hover:text-white dark:hover:bg-white dark:hover:text-dark transition-all"
            >
              Explore Other Services
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12 border-t border-gray-100 dark:border-white/5">
            {["Private Sessions", "Secure Data", "Senior Experts"].map(
              (tag, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    {tag}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* OPTIONAL EXTRA SECTIONS */}
      {children}

      {/* 7️⃣ TESTIMONIAL SECTION */}
      <Testimonials />
    </div>
  );
};

export default ServicePageTemplate;
