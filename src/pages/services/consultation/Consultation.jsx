import React from "react";
import MainLayout from "../../../components/layout/MainLayout";
import ConsultationHero from "../../../components/PagesComp/services/consultation/main/ConsultationHero";
import ConsultationContent from "../../../components/PagesComp/services/consultation/main/ConsultationContent";
import ConsultationDeliverables from "../../../components/PagesComp/services/consultation/main/ConsultationDeliverables";
import ConsultationExamples from "../../../components/PagesComp/services/consultation/main/ConsultationExamples";
import ConsultationWhoItsFor from "../../../components/PagesComp/services/consultation/main/ConsultationWhoItsFor";
import ConsultationCTA from "../../../components/PagesComp/services/consultation/main/ConsultationCTA";
import Testimonials from "../../../components/Common/Testimonials";

const Consultation = () => {
  return (
    <MainLayout
      title="Expert Numerology Consultation | One-on-One Advisory | Astroworlds"
      description="Get direct access to senior numerologists for deep-dive analysis and personalized life strategy. One-on-one sessions for serious seekers."
      keywords="Numerology Consultation, Expert Advice, Personalized Reading, Life Strategy Session, Private Numerology Session"
    >
      <div className="bg-white dark:bg-[#050a15]">
        <ConsultationHero />
        <ConsultationContent />
        <ConsultationDeliverables />
        <ConsultationExamples />
        <ConsultationWhoItsFor />
        <ConsultationCTA />
        <Testimonials />
      </div>
    </MainLayout>
  );
};

export default Consultation;
