import React from "react";
import MainLayout from "../../../components/layout/MainLayout";
import CommercialHero from "../../../components/PagesComp/services/property/commercial/CommercialHero";
import CommercialContent from "../../../components/PagesComp/services/property/commercial/CommercialContent";
import CommercialDeliverables from "../../../components/PagesComp/services/property/commercial/CommercialDeliverables";
import CommercialExamples from "../../../components/PagesComp/services/property/commercial/CommercialExamples";
import CommercialWhoItsFor from "../../../components/PagesComp/services/property/commercial/CommercialWhoItsFor";
import CommercialCTA from "../../../components/PagesComp/services/property/commercial/CommercialCTA";
import Testimonials from "../../../components/Common/Testimonials";

const Commercial = () => {
  return (
    <MainLayout
      title="Commercial Property Numerology | Business Asset Audit | Astroworlds"
      description="Engineer your commercial space for profit. Our architectural numerology analysis ensures your office or factory resonance supports business growth and efficiency."
      keywords="Commercial Numerology, Office Analysis, Industrial Property Audit, Business Asset Energy, Institutional Numerology"
    >
      <div className="bg-white dark:bg-[#050a15]">
        <CommercialHero />
        <CommercialContent />
        <CommercialDeliverables />
        <CommercialExamples />
        <CommercialWhoItsFor />
        <CommercialCTA />
        <Testimonials />
      </div>
    </MainLayout>
  );
};

export default Commercial;
