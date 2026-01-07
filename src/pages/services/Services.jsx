import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import NumerologyHero from "../../components/PagesComp/services/NumerologyHero";
import ServiceStats from "../../components/PagesComp/services/ServiceStats";
import NumerologyServicesGrid from "../../components/PagesComp/services/NumerologyServicesGrid";
import ServiceProcess from "../../components/PagesComp/services/ServiceProcess";
import ServiceCTA from "../../components/PagesComp/services/ServiceCTA";
import Testimonials from "../../components/Common/Testimonials";

const Services = () => {
  return (
    <MainLayout
      title="Professional Numerology Services | Astroworlds"
      description="Explore our range of numerology services. Personal, Business, and Property analysis designed for clarity and success."
      keywords="Numerology Services, Business Numerology, Personal Numerology, Property Audit, Expert Guidance"
    >
      <div className="bg-white dark:bg-[#050a15]">
        <NumerologyHero />
        <ServiceStats />
        <NumerologyServicesGrid />
        <ServiceProcess />
        <ServiceCTA />
        <Testimonials />
      </div>
    </MainLayout>
  );
};

export default Services;
