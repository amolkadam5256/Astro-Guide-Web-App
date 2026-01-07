import React from "react";
import { Lightbulb, Compass, Users, Clock } from "lucide-react";

const benefits = [
  {
    icon: Lightbulb,
    title: "Deep Self-Awareness",
    desc: "Understand your core personality, hidden talents, and inner motivations.",
  },
  {
    icon: Compass,
    title: "Life Direction",
    desc: "Gain clarity on your life path and the lessons you are here to learn.",
  },
  {
    icon: Users,
    title: "Relationship Harmony",
    desc: "Improve your interactions by understanding compatibility and emotional needs.",
  },
  {
    icon: Clock,
    title: "Strategic Timing",
    desc: "Know the best times to act, wait, or change direction based on your cycles.",
  },
];

const PersonalBenefits = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-[#050a15]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-purple-200 dark:hover:border-purple-900 transition-colors"
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalBenefits;
