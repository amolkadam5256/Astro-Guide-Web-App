import React from "react";
import { CheckCircle2, Heart } from "lucide-react";

const CompatibilityWhoItsFor = () => {
  const users = [
    "Engaged Couples",
    "Long-term Partners",
    "Business Co-founders",
    "Parents & Children",
    "Teams & Executive Boards",
  ];

  return (
    <section className="py-32 px-4 bg-dark text-white relative border-y-4 border-rose-600/30 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-rose-950/20 via-transparent to-pink-950/20" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12" data-aos="fade-right">
            <div className="space-y-4 text-center lg:text-left">
              <h4 className="text-rose-500 font-black uppercase tracking-[0.5em] text-[10px]">
                Soul Pairing
              </h4>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Who Is This <br />
                <span className="text-rose-600">Sync</span> For?
              </h2>
            </div>

            <div className="grid gap-4">
              {users.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-6 p-8 bg-white/5 border border-white/10 hover:bg-rose-900/30 transition-all group"
                >
                  <Heart className="w-6 h-6 text-rose-600 group-hover:scale-125 transition-transform" />
                  <span className="text-sm font-black uppercase tracking-widest leading-none">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="absolute inset-0 bg-rose-600/10 blur-[150px] rounded-full scale-125" />
            <div className="relative bg-white/5 p-16 border border-white/10 backdrop-blur-3xl space-y-16">
              <h3 className="text-3xl font-black uppercase tracking-tight italic text-rose-500">
                Synergy Indicators
              </h3>
              <ul className="space-y-10">
                {[
                  "Recurrent trivial arguments without cause.",
                  "Mismatch in life/career goals and timing.",
                  "Feeling 'blocked' by a partner's energy.",
                  "Major joint decisions (Marriage/Buying property).",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-8 items-start group">
                    <div className="w-10 h-10 rounded-full bg-rose-600 text-dark flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(225,29,72,0.4)]">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <p className="text-gray-400 font-bold text-lg tracking-wide leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="pt-12 flex items-center gap-6">
                <span className="w-20 h-px bg-white/20" />
                <span className="text-xs font-black uppercase tracking-widest text-rose-500">
                  Expert Synergy Analysis Recommended
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompatibilityWhoItsFor;
