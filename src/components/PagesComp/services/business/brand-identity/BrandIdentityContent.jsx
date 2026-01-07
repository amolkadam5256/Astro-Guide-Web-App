import React from "react";
import { CheckCircle2, Gem, Palette, Zap } from "lucide-react";

const BrandIdentityContent = () => {
  const elements = [
    "Numerical Logo Geometry",
    "Psychic Color Palettes",
    "Font Resonance Audit",
    "Visual Symbolism Mapping",
  ];

  return (
    <section className="py-10 px-4 relative bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative" data-aos="fade-right">
            <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full scale-110" />
            <div className="relative p-10 md:p-14 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-2xl flex flex-col items-center text-center space-y-10">
              <div className="w-16 h-16 bg-primary dark:bg-white text-white dark:text-dark flex items-center justify-center rounded-2xl rotate-12 shadow-xl">
                <Palette className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-primary dark:text-white uppercase tracking-tighter">
                  Geometric <br />
                  Resonance
                </h3>
                <div className="h-1 w-16 bg-primary mx-auto" />
              </div>
              <div className="grid grid-cols-2 gap-3 w-full">
                {elements.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white dark:bg-[#0a1020] border border-gray-100 dark:border-white/5 space-y-2 hover:border-primary transition-all"
                  >
                    <p className="text-[12px] font-black uppercase tracking-widest text-dark dark:text-white leading-tight">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-10" data-aos="fade-left">
            <div className="space-y-3">
              <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[9px]">
                Visual Engineering
              </h4>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
                Design With <br />
                <span className="text-primary italic opacity-90">Purpose</span>
              </h2>
            </div>

            <div className="space-y-6 text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed italic">
              <p>
                A logo is more than just a symbol; it's a sigil. In numerology,
                shapes and lines carry specific vibrations. A sharp triangle
                projects ambition, while soft curves project comfort.
              </p>
              <p className="not-italic text-dark dark:text-white font-black uppercase tracking-tight border-l-4 border-primary pl-8 text-sm">
                We align your visual attributes—from the angle of your logo's
                stroke to the hexadecimal codes of your colors—with your brand's
                core destiny number, ensuring your first impression is also a
                lasting vibrational impact.
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-primary/30" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIdentityContent;
