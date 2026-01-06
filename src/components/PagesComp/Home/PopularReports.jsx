import React from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Sparkles,
  Calendar,
  Building2,
  Smartphone,
  Home,
  CheckCircle2,
  FileDown,
  ArrowRight,
} from "lucide-react";

const PopularReports = () => {
  const reports = [
    {
      title: "Full Name Numerology Report",
      icon: FileText,
      covers: "In-depth name vibration analysis & correction suggestions.",
      pages: "12-15 Pages",
      color: "blue",
    },
    {
      title: "Life Path & Destiny Report",
      icon: Sparkles,
      covers: "Life purpose, hidden talents & major destiny cycles.",
      pages: "10-12 Pages",
      color: "purple",
    },
    {
      title: "Personal Year Forecast (12 Months)",
      icon: Calendar,
      covers: "Month-by-month guidance for the next 12 months.",
      pages: "15+ Pages",
      color: "amber",
    },
    {
      title: "Business Name Numerology Audit",
      icon: Building2,
      covers: "Brand resonance, success vibration & naming strategy.",
      pages: "8-10 Pages",
      color: "emerald",
    },
    {
      title: "Mobile Number Optimization Report",
      icon: Smartphone,
      covers: "Impact of your mobile number on business & personal life.",
      pages: "5-8 Pages",
      color: "indigo",
    },
    {
      title: "House / Property Numerology Report",
      icon: Home,
      covers: "Energetics of your living space & its influence on residents.",
      pages: "8-12 Pages",
      color: "rose",
    },
  ];

  return (
    <section className="py-24 bg-gray-50/50 dark:bg-[#040811] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <h4
              data-aos="fade-right"
              className="text-primary font-black uppercase tracking-[0.4em] text-[10px] sm:text-xs"
            >
              Popular Numerology Reports
            </h4>
            <h2
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none"
            >
              Instant <span className="text-primary">PDF</span> Reports
            </h2>
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-medium"
            >
              Professionally generated, action-oriented reports delivered
              instantly after purchase.
            </p>
          </div>
          <Link
            to="/reports"
            data-aos="fade-left"
            className="flex items-center text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-dark dark:text-white group hover:text-primary transition-colors"
          >
            Explore All Reports{" "}
            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.map((report, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group relative bg-white dark:bg-dark border border-gray-100 dark:border-white/5 p-8 flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden"
            >
              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>

              <div className="w-14 h-14 flex items-center justify-center bg-gray-50 dark:bg-white/5 text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all transform shadow-sm rounded-full">
                <report.icon size={28} strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-black text-dark dark:text-white uppercase tracking-tight mb-4 min-h-[56px] leading-tight">
                {report.title}
              </h3>

              <div className="space-y-4 mb-8 grow">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                    {report.covers}
                  </p>
                </div>
                <div className="flex items-center gap-6 pt-4 border-t border-gray-50 dark:border-white/5">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                      {report.pages}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileDown className="w-4 h-4 text-gray-400" />
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                      Instant PDF
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="py-4 text-[10px] uppercase font-black tracking-[0.2em] border border-dark/10 dark:border-white/10 text-dark dark:text-white hover:bg-dark hover:text-white dark:hover:bg-white dark:hover:text-dark transition-all">
                  View Sample
                </button>
                <Link
                  to="/contact"
                  className="py-4 text-[10px] text-center uppercase font-black tracking-[0.2em] bg-primary text-white hover:bg-dark dark:hover:bg-white dark:hover:text-dark transition-all"
                >
                  Buy Report
                </Link>
              </div>

              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularReports;
