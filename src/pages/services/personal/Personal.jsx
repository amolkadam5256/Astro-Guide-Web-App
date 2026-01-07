import React from "react";
import MainLayout from "../../../components/layout/MainLayout";
import PersonalHero from "../../../components/PagesComp/services/personal/main/PersonalHero";
import PersonalContent from "../../../components/PagesComp/services/personal/main/PersonalContent";
import PersonalDeliverables from "../../../components/PagesComp/services/personal/main/PersonalDeliverables";
import PersonalExamples from "../../../components/PagesComp/services/personal/main/PersonalExamples";
import PersonalWhoItsFor from "../../../components/PagesComp/services/personal/main/PersonalWhoItsFor";
import PersonalCTA from "../../../components/PagesComp/services/personal/main/PersonalCTA";
import Testimonials from "../../../components/Common/Testimonials";

const Personal = () => {
  return (
    <MainLayout
      title="Personal Numerology Services | Soul Journey Decoding | Astroworlds"
      description="Discover your true potential with our personal numerology services. Get detailed name analysis, life path readings, year forecasts, and compatibility reports."
      keywords="Personal Numerology, Name Analysis, Life Path Number, Personal Year Forecast, Numerology Reading, Destiny Number"
    >
      <div className="bg-white dark:bg-[#050a15]">
        <PersonalHero />
        <PersonalContent />
        <PersonalDeliverables />
        <PersonalExamples />
        <PersonalWhoItsFor />
        <PersonalCTA />
        <Testimonials />
      </div>
    </MainLayout>
  );
};

export default Personal;
