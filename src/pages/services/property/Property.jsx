import React from "react";
import MainLayout from "../../../components/layout/MainLayout";
import PropertyHero from "../../../components/PagesComp/services/property/main/PropertyHero";
import PropertyContent from "../../../components/PagesComp/services/property/main/PropertyContent";
import PropertyDeliverables from "../../../components/PagesComp/services/property/main/PropertyDeliverables";
import PropertyExamples from "../../../components/PagesComp/services/property/main/PropertyExamples";
import PropertyWhoItsFor from "../../../components/PagesComp/services/property/main/PropertyWhoItsFor";
import PropertyCTA from "../../../components/PagesComp/services/property/main/PropertyCTA";
import Testimonials from "../../../components/Common/Testimonials";

const Property = () => {
  return (
    <MainLayout
      title="Property & Space Numerology | Architectural Vastu | Astroworlds"
      description="Ensure your physical environments support your physical health and financial growth. Architectural vastu-numerology for residential and commercial spaces."
      keywords="Property Numerology, Space Energy, Vastu Numerology, Commercial Property Audit, Residential Home Numerology"
    >
      <div className="bg-white dark:bg-[#050a15]">
        <PropertyHero />
        <PropertyContent />
        <PropertyDeliverables />
        <PropertyExamples />
        <PropertyWhoItsFor />
        <PropertyCTA />
        <Testimonials />
      </div>
    </MainLayout>
  );
};

export default Property;
