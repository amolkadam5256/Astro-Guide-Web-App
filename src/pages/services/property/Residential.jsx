import React from "react";
import MainLayout from "../../../components/layout/MainLayout";
import ResidentialHero from "../../../components/PagesComp/services/property/residential/ResidentialHero";
import ResidentialContent from "../../../components/PagesComp/services/property/residential/ResidentialContent";
import ResidentialDeliverables from "../../../components/PagesComp/services/property/residential/ResidentialDeliverables";
import ResidentialExamples from "../../../components/PagesComp/services/property/residential/ResidentialExamples";
import ResidentialWhoItsFor from "../../../components/PagesComp/services/property/residential/ResidentialWhoItsFor";
import ResidentialCTA from "../../../components/PagesComp/services/property/residential/ResidentialCTA";
import Testimonials from "../../../components/Common/Testimonials";

const Residential = () => {
  return (
    <MainLayout
      title="Residential Numerology | Home Prosperity Audit | Astroworlds"
      description="Does your home address support your success? Our domestic prosperity audit analyzes your residence frequency to ensure health, wealth, and family harmony."
      keywords="Residential Numerology, House Analysis, Home Energy, Vastu Numerology, Domestic Harmony"
    >
      <div className="bg-white dark:bg-[#050a15]">
        <ResidentialHero />
        <ResidentialContent />
        <ResidentialDeliverables />
        <ResidentialExamples />
        <ResidentialWhoItsFor />
        <ResidentialCTA />
        <Testimonials />
      </div>
    </MainLayout>
  );
};

export default Residential;
