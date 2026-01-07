import React from "react";
import MainLayout from "../../../components/layout/MainLayout";
import StartupNamingHero from "../../../components/PagesComp/services/business/startup-naming/StartupNamingHero";
import StartupNamingContent from "../../../components/PagesComp/services/business/startup-naming/StartupNamingContent";
import StartupNamingDeliverables from "../../../components/PagesComp/services/business/startup-naming/StartupNamingDeliverables";
import StartupNamingExamples from "../../../components/PagesComp/services/business/startup-naming/StartupNamingExamples";
import StartupNamingWhoItsFor from "../../../components/PagesComp/services/business/startup-naming/StartupNamingWhoItsFor";
import StartupNamingCTA from "../../../components/PagesComp/services/business/startup-naming/StartupNamingCTA";
import Testimonials from "../../../components/Common/Testimonials";

const StartupNaming = () => {
  return (
    <MainLayout
      title="Startup Naming & Scaleability Numerology | Unicorn Brand Audit | Astroworlds"
      description="Engineer your startup for exponential growth. Our scientific startup naming analysis ensures your brand attracts investors and early adopters through numerical velocity."
      keywords="Startup Naming, Unicorn Branding, Exponential Growth, Business Scalability, Tech Startup Numerology"
    >
      <div className="bg-white dark:bg-[#050a15]">
        <StartupNamingHero />
        <StartupNamingContent />
        <StartupNamingDeliverables />
        <StartupNamingExamples />
        <StartupNamingWhoItsFor />
        <StartupNamingCTA />
        <Testimonials />
      </div>
    </MainLayout>
  );
};

export default StartupNaming;
