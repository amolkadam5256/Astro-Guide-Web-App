import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE_DATA } from "../../../constants/siteData";

const AboutContent = () => {
  const highlights = [
    "Expert Philosphical readings",
    "Modern approach to ancient science",
    "Tailored personal & business solutions",
    "Trusted by thousands of seekers",
  ];

  return (
    <div className="space-y-8" data-aos="fade-right">
      <div className="space-y-4">
        <h4 className="text-primary font-black uppercase tracking-[0.4em] text-xs">
          Our Story & Vision
        </h4>
        <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
          Bridging <span className="text-primary">Ancient Wisdom</span> with
          Modern Life
        </h2>
      </div>

      <div className="space-y-6 text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
        <p>
          At {SITE_DATA.brand.name}
          {SITE_DATA.brand.highlight}, we believe that numbers are much more
          than just mathematical symbols. They are the energetic blueprint of
          the universe, carrying profound vibrations that shape our destiny,
          character, and opportunities.
        </p>
        <p>
          Founded on the principles of authenticity and clarity, our mission is
          to empower individuals and businesses with the insights they need to
          navigate life's complexities with confidence and purpose.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 group">
            <CheckCircle2 className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold text-dark dark:text-gray-200 uppercase tracking-tight">
              {item}
            </span>
          </div>
        ))}
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
        <Link
          to="/services"
          className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark-1 text-white font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center group"
        >
          Explore Services
          <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/contact"
          className="text-sm font-black uppercase tracking-[0.2em] text-dark dark:text-white hover:text-primary transition-colors underline underline-offset-8 decoration-2 decoration-primary/30 hover:decoration-primary"
        >
          Contact Expert
        </Link>
      </div>
    </div>
  );
};

export default AboutContent;
