import React from "react";
import MainLayout from "../../../components/layout/MainLayout";
import BusinessHero from "../../../components/PagesComp/services/business/main/BusinessHero";
import BusinessContent from "../../../components/PagesComp/services/business/main/BusinessContent";
import BusinessDeliverables from "../../../components/PagesComp/services/business/main/BusinessDeliverables";
import BusinessExamples from "../../../components/PagesComp/services/business/main/BusinessExamples";
import BusinessWhoItsFor from "../../../components/PagesComp/services/business/main/BusinessWhoItsFor";
import BusinessCTA from "../../../components/PagesComp/services/business/main/BusinessCTA";
import Testimonials from "../../../components/Common/Testimonials";

const Business = () => {
  return (
    <MainLayout
      title="Strategic Business Numerology | Corporate Growth | Astroworlds"
      description="Leverage the power of numbers to build a brand that resonates with success and market authority. Scientific analysis for startups and corporations."
      keywords="Business Numerology, Brand Naming, Corporate Timing, Team Alignment, Startup Numerology, Market Synergy"
    >
      <div className="bg-white dark:bg-[#050a15]">
        <BusinessHero />
        <BusinessContent />
        <BusinessDeliverables />
        <BusinessExamples />
        <BusinessWhoItsFor />
        <BusinessCTA />
        <Testimonials />
      </div>
    </MainLayout>
  );
};

export default Business;
