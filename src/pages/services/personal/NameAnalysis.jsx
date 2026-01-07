import React from "react";
import MainLayout from "../../../components/layout/MainLayout";
import NameAnalysisHero from "../../../components/PagesComp/services/personal/name-analysis/NameAnalysisHero";
import NameAnalysisContent from "../../../components/PagesComp/services/personal/name-analysis/NameAnalysisContent";
import NameAnalysisDeliverables from "../../../components/PagesComp/services/personal/name-analysis/NameAnalysisDeliverables";
import NameAnalysisExamples from "../../../components/PagesComp/services/personal/name-analysis/NameAnalysisExamples";
import NameAnalysisWhoItsFor from "../../../components/PagesComp/services/personal/name-analysis/NameAnalysisWhoItsFor";
import NameAnalysisCTA from "../../../components/PagesComp/services/personal/name-analysis/NameAnalysisCTA";
import Testimonials from "../../../components/Common/Testimonials";

const NameAnalysis = () => {
  return (
    <MainLayout
      title="Name Analysis & Correction | Scientific Numerology | Astroworlds"
      description="Unlock the vibrational power of your name. Our scientific analysis helps you align your name with your birth destiny for maximum success."
      keywords="Name Analysis, Name Correction, Scientific Numerology, Lucky Name Change, Business Name Vibration"
    >
      <div className="bg-white dark:bg-[#050a15]">
        <NameAnalysisHero />
        <NameAnalysisContent />
        <NameAnalysisDeliverables />
        <NameAnalysisExamples />
        <NameAnalysisWhoItsFor />
        <NameAnalysisCTA />
        <Testimonials />
      </div>
    </MainLayout>
  );
};

export default NameAnalysis;
