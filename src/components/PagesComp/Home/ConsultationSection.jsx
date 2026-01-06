import React from "react";
import { Link } from "react-router-dom";
import {
  Video,
  Phone,
  FileText,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const ConsultationSection = () => {
  const sessions = [
    {
      duration: "30 Minutes",
      intent: "Focused Guidance",
      description: "Quick clarity on a specific question or immediate concern.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      duration: "60 Minutes",
      intent: "Deep Analysis",
      description:
        "Comprehensive review of your personal or business numerology charts.",
      color: "from-primary to-purple-600",
      featured: true,
    },
    {
      duration: "90 Minutes",
      intent: "Strategic Planning",
      description:
        "Detailed roadmap for long-term growth, timing, and major life shifts.",
      color: "from-amber-500 to-orange-600",
    },
  ];

  const features = [
    { icon: Video, text: "Video / Phone Calls" },
    { icon: FileText, text: "Post-session summary" },
    { icon: ShieldCheck, text: "Confidential & ethical" },
  ];

  return (
    <section className="relative py-24 bg-gray-50 dark:bg-dark overflow-hidden transition-colors duration-500">
      {/* Abstract Background Design */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h4
                data-aos="fade-right"
                className="text-primary font-black uppercase tracking-[0.4em] text-[10px] sm:text-xs"
              >
                Expert Consultation
              </h4>
              <h2
                data-aos="fade-right"
                data-aos-delay="100"
                className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none"
              >
                Speak With a <span className="text-primary">Certified</span>{" "}
                Numerologist
              </h2>
              <p
                data-aos="fade-right"
                data-aos-delay="200"
                className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-medium leading-relaxed"
              >
                Get personalized, human-interpreted guidance for important life
                or business decisions. Our experts dive deep into your cosmic
                vibration to unlock clarity.
              </p>
            </div>

            <div className="space-y-4 py-8 border-y border-dark/5 dark:border-white/5">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  data-aos="fade-right"
                  data-aos-delay={300 + idx * 100}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-dark/5 dark:bg-white/5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <feature.icon size={18} />
                  </div>
                  <span className="text-dark dark:text-white text-sm font-bold uppercase tracking-widest">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <div data-aos="fade-up" data-aos-delay="600">
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 bg-primary text-white px-8 py-5 text-xs font-black uppercase tracking-[0.3em] hover:bg-dark dark:hover:bg-white dark:hover:text-dark transition-all group"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Cards Column */}
          <div className="lg:col-span-3 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {sessions.map((session, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className={`relative group bg-white dark:bg-white/5 border border-dark/10 dark:border-white/10 p-8 flex flex-col transition-all duration-500 hover:-translate-y-4 hover:shadow-xl dark:hover:bg-white/10 ${
                  session.featured
                    ? "sm:scale-105 border-primary/30 z-20"
                    : "z-10"
                }`}
              >
                {session.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[8px] font-black uppercase tracking-[0.3em] px-4 py-1 whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <div
                    className={`w-12 h-1 bg-gradient-to-r ${session.color} mb-6`}
                  ></div>
                  <h3 className="text-2xl font-black text-dark dark:text-white uppercase tracking-tight mb-1">
                    {session.duration}
                  </h3>
                  <div className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                    {session.intent}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-xs font-medium leading-relaxed mb-10 grow">
                  {session.description}
                </p>

                <div className="space-y-3 mb-10">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-dark/60 dark:text-white/60">
                    <CheckCircle2 size={12} className="text-primary" />
                    <span>In-depth Analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-dark/60 dark:text-white/60">
                    <CheckCircle2 size={12} className="text-primary" />
                    <span>Q&A Session</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="w-full text-center py-4 bg-transparent border border-dark/20 dark:border-white/20 text-dark dark:text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:border-primary hover:text-white transition-all"
                >
                  Select
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
