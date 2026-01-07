import React from "react";
import MainLayout from "../../../components/layout/MainLayout";
import LifePathHero from "../../../components/PagesComp/services/personal/life-path/LifePathHero";
import LifePathContent from "../../../components/PagesComp/services/personal/life-path/LifePathContent";
import LifePathDeliverables from "../../../components/PagesComp/services/personal/life-path/LifePathDeliverables";
import LifePathExamples from "../../../components/PagesComp/services/personal/life-path/LifePathExamples";
import LifePathWhoItsFor from "../../../components/PagesComp/services/personal/life-path/LifePathWhoItsFor";
import LifePathCTA from "../../../components/PagesComp/services/personal/life-path/LifePathCTA";
import Testimonials from "../../../components/Common/Testimonials";

const LifePath = () => {
  return (
    <MainLayout
      title="Life Path Masterplan | Soul Journey Decoding | Astroworlds"
      description="Discover the energetic architecture of your soul's purpose. Our deep-dive Life Path analysis reveals your innate talents and karmic roadmap."
      keywords="Life Path Number, Soul Purpose, Numerology Reading, Life Journey, Identity Audit"
    >
      <div className="bg-white dark:bg-[#050a15] overflow-hidden">
        <LifePathHero />
        <LifePathContent />
        <LifePathDeliverables />
        <LifePathExamples />
        <LifePathWhoItsFor />
        <LifePathCTA />
        <Testimonials />
      </div>
    </MainLayout>
  );
};

export default LifePath;
