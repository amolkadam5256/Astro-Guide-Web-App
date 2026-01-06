import React from "react";
import MainLayout from "../../../components/layout/MainLayout";

const StartupNaming = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Startup Naming
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Launch your startup with a numerologically optimized name
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                Content coming soon...
              </p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default StartupNaming;
