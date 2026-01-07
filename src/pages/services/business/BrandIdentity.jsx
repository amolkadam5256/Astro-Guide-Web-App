import React from "react";
import MainLayout from "../../../components/layout/MainLayout";
import BrandIdentityHero from "../../../components/PagesComp/services/business/brand-identity/BrandIdentityHero";
import BrandIdentityContent from "../../../components/PagesComp/services/business/brand-identity/BrandIdentityContent";
import BrandIdentityDeliverables from "../../../components/PagesComp/services/business/brand-identity/BrandIdentityDeliverables";
import BrandIdentityExamples from "../../../components/PagesComp/services/business/brand-identity/BrandIdentityExamples";
import BrandIdentityWhoItsFor from "../../../components/PagesComp/services/business/brand-identity/BrandIdentityWhoItsFor";
import BrandIdentityCTA from "../../../components/PagesComp/services/business/brand-identity/BrandIdentityCTA";
import Testimonials from "../../../components/Common/Testimonials";

const BrandIdentity = () => {
  return (
    <MainLayout
      title="Brand Identity Numerology | Visual Resonance Audit | Astroworlds"
      description="Refine your brand's visual impact. Our brand identity analysis aligns your logo, colors, and design language with your core business frequency."
      keywords="Brand Identity, Logo Numerology, Color Psychology, Visual Branding, Design Resonance"
    >
      <div className="bg-white dark:bg-[#050a15]">
        <BrandIdentityHero />
        <BrandIdentityContent />
        <BrandIdentityDeliverables />
        <BrandIdentityExamples />
        <BrandIdentityWhoItsFor />
        <BrandIdentityCTA />
        <Testimonials />
      </div>
    </MainLayout>
  );
};

export default BrandIdentity;
