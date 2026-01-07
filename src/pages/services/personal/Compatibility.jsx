import React from "react";
import MainLayout from "../../../components/layout/MainLayout";
import CompatibilityHero from "../../../components/PagesComp/services/personal/compatibility/CompatibilityHero";
import CompatibilityContent from "../../../components/PagesComp/services/personal/compatibility/CompatibilityContent";
import CompatibilityDeliverables from "../../../components/PagesComp/services/personal/compatibility/CompatibilityDeliverables";
import CompatibilityExamples from "../../../components/PagesComp/services/personal/compatibility/CompatibilityExamples";
import CompatibilityWhoItsFor from "../../../components/PagesComp/services/personal/compatibility/CompatibilityWhoItsFor";
import CompatibilityCTA from "../../../components/PagesComp/services/personal/compatibility/CompatibilityCTA";
import Testimonials from "../../../components/Common/Testimonials";

const Compatibility = () => {
  return (
    <MainLayout
      title="Soul Compatibility & Synergy Audit | Relationship Numerology | Astroworlds"
      description="Discover the numerical resonance between souls. Our deep-dive compatibility analysis helps harmonize relationships, business partnerships, and family dynamics."
      keywords="Relationship Compatibility, Soul Synergy, Marriage Numerology, Partner Audit, Business Compatibility"
    >
      <div className="bg-white dark:bg-[#050a15]">
        <CompatibilityHero />
        <CompatibilityContent />
        <CompatibilityDeliverables />
        <CompatibilityExamples />
        <CompatibilityWhoItsFor />
        <CompatibilityCTA />
        <Testimonials />
      </div>
    </MainLayout>
  );
};

export default Compatibility;
