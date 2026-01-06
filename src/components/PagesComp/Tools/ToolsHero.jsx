import React from "react";
import { images } from "../../../assets/images/images";
import { Sparkles } from "lucide-react";

const ToolsHero = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.hero.patternBg}
          alt="Numerology Background"
          className="w-full h-full object-cover opacity-20 grayscale"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div
          data-aos="fade-down"
          className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/20 border border-primary/30 rounded-full mb-4 backdrop-blur-sm"
        >
          <Sparkles size={12} className="text-white animate-pulse" />
          <span className="text-white font-black uppercase tracking-[0.4em] text-[9px] sm:text-[10px]">
            Precision Calculators
          </span>
        </div>

        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-4"
        >
          Free <span className="text-primary">Numerology</span> <br />
          Intelligence Tools
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-400 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed"
        >
          Unlock the secrets hidden in your data. Our advanced calculators use
          ancient mathematical systems to provide immediate, actionable insights
          into your destiny and potential.
        </p>
      </div>
    </section>
  );
};

export default ToolsHero;
