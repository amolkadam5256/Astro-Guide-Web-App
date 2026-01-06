import React from "react";
import MainLayout from "../../components/layout/MainLayout";

const Services = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover comprehensive numerology services tailored to transform
              your personal and professional life
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Personal Numerology */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Personal Numerology
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Unlock your personal potential with name analysis, life path
                  readings, and compatibility reports
                </p>
                <a
                  href="/services/personal"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Explore Personal Services →
                </a>
              </div>

              {/* Business Numerology */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Business Numerology
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Optimize your business success with strategic naming,
                  branding, and timing solutions
                </p>
                <a
                  href="/services/business"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Explore Business Services →
                </a>
              </div>

              {/* Property Numerology */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Property Numerology
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Enhance your property's energy with commercial and residential
                  numerology audits
                </p>
                <a
                  href="/services/property"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Explore Property Services →
                </a>
              </div>

              {/* Consultations */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Consultations
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Get personalized guidance through one-on-one sessions and
                  coaching programs
                </p>
                <a
                  href="/services/consultation"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Explore Consultation Services →
                </a>
              </div>

              {/* Subscriptions */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Subscriptions
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Stay connected with monthly forecasts, VIP coaching, and
                  community access
                </p>
                <a
                  href="/services/subscription"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Explore Subscription Services →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Services;
