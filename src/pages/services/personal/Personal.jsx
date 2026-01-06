import React from "react";
import MainLayout from "../../../components/layout/MainLayout";

const Personal = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-linear-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Personal Numerology Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover your true potential through personalized numerology
              analysis
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Name Analysis"
                description="Discover the hidden meanings and vibrations in your name"
                link="/services/personal/name-analysis"
              />
              <ServiceCard
                title="Life Path Analysis"
                description="Understand your life's purpose and destiny through your birth date"
                link="/services/personal/life-path"
              />
              <ServiceCard
                title="Personal Year Forecast"
                description="Get insights into what the current year holds for you"
                link="/services/personal/year-forecast"
              />
              <ServiceCard
                title="Mobile Number"
                description="Optimize your mobile number for success and prosperity"
                link="/services/personal/mobile-number"
              />
              <ServiceCard
                title="House/Address Number"
                description="Ensure your home address supports your goals and wellbeing"
                link="/services/personal/house-number"
              />
              <ServiceCard
                title="Compatibility Report"
                description="Discover compatibility with partners, friends, and colleagues"
                link="/services/personal/compatibility"
              />
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

const ServiceCard = ({ title, description, link }) => (
  <a
    href={link}
    className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
  >
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    <span className="text-blue-600 dark:text-blue-400 font-semibold">
      Learn More →
    </span>
  </a>
);

export default Personal;
