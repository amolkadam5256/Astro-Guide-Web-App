import React from "react";
import MainLayout from "../../../components/layout/MainLayout";
import CompanyNamingHero from "../../../components/PagesComp/services/business/company-naming/CompanyNamingHero";
import CompanyNamingContent from "../../../components/PagesComp/services/business/company-naming/CompanyNamingContent";
import CompanyNamingDeliverables from "../../../components/PagesComp/services/business/company-naming/CompanyNamingDeliverables";
import CompanyNamingExamples from "../../../components/PagesComp/services/business/company-naming/CompanyNamingExamples";
import CompanyNamingWhoItsFor from "../../../components/PagesComp/services/business/company-naming/CompanyNamingWhoItsFor";
import CompanyNamingCTA from "../../../components/PagesComp/services/business/company-naming/CompanyNamingCTA";
import Testimonials from "../../../components/Common/Testimonials";

const CompanyNaming = () => {
  return (
    <MainLayout
      title="Company Naming & Brand Numerology | Corporate Brand Audit | Astroworlds"
      description="Engineer your brand for market dominance. Our scientific company naming analysis ensures your brand resonates with your sector and founder destinies."
      keywords="Company Naming, Brand Numerology, Corporate Identity, Business Name Analysis, Scientific Branding"
    >
      <div className="bg-white dark:bg-[#050a15]">
        <CompanyNamingHero />
        <CompanyNamingContent />
        <CompanyNamingDeliverables />
        <CompanyNamingExamples />
        <CompanyNamingWhoItsFor />
        <CompanyNamingCTA />
        <Testimonials />
      </div>
    </MainLayout>
  );
};

export default CompanyNaming;
