import React from "react";
import MainLayout from "../../../components/layout/MainLayout";
import HouseNumberHero from "../../../components/PagesComp/services/personal/house-number/HouseNumberHero";
import HouseNumberContent from "../../../components/PagesComp/services/personal/house-number/HouseNumberContent";
import HouseNumberDeliverables from "../../../components/PagesComp/services/personal/house-number/HouseNumberDeliverables";
import HouseNumberExamples from "../../../components/PagesComp/services/personal/house-number/HouseNumberExamples";
import HouseNumberWhoItsFor from "../../../components/PagesComp/services/personal/house-number/HouseNumberWhoItsFor";
import HouseNumberCTA from "../../../components/PagesComp/services/personal/house-number/HouseNumberCTA";
import Testimonials from "../../../components/Common/Testimonials";

const HouseNumber = () => {
  return (
    <MainLayout
      title="House & Address Numerology | Domestic Harmony Audit | Astroworlds"
      description="Does your home address support your success? Our domestic prosperity audit analyzes your house number's frequency to ensure health, wealth, and family harmony."
      keywords="House Numerology, Address Analysis, Home Energy, Vastu Numerology, Domestic Harmony"
    >
      <div className="bg-white dark:bg-[#050a15]">
        <HouseNumberHero />
        <HouseNumberContent />
        <HouseNumberDeliverables />
        <HouseNumberExamples />
        <HouseNumberWhoItsFor />
        <HouseNumberCTA />
        <Testimonials />
      </div>
    </MainLayout>
  );
};

export default HouseNumber;
