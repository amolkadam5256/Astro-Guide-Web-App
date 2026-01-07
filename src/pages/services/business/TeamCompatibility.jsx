import React from "react";
import MainLayout from "../../../components/layout/MainLayout";
import TeamCompatibilityHero from "../../../components/PagesComp/services/business/team-compatibility/TeamCompatibilityHero";
import TeamCompatibilityContent from "../../../components/PagesComp/services/business/team-compatibility/TeamCompatibilityContent";
import TeamCompatibilityDeliverables from "../../../components/PagesComp/services/business/team-compatibility/TeamCompatibilityDeliverables";
import TeamCompatibilityExamples from "../../../components/PagesComp/services/business/team-compatibility/TeamCompatibilityExamples";
import TeamCompatibilityWhoItsFor from "../../../components/PagesComp/services/business/team-compatibility/TeamCompatibilityWhoItsFor";
import TeamCompatibilityCTA from "../../../components/PagesComp/services/business/team-compatibility/TeamCompatibilityCTA";
import Testimonials from "../../../components/Common/Testimonials";

const TeamCompatibility = () => {
  return (
    <MainLayout
      title="Team Compatibility & Synergy Audit | Corporate Human Capital | Astroworlds"
      description="Maximize your team's collective output. Our team compatibility analysis aligns individual soul paths with corporate objectives to reduce friction and boost efficiency."
      keywords="Team Compatibility, Corporate Synergy, Human Capital Audit, Leadership Alignment, Office Harmony"
    >
      <div className="bg-white dark:bg-[#050a15]">
        <TeamCompatibilityHero />
        <TeamCompatibilityContent />
        <TeamCompatibilityDeliverables />
        <TeamCompatibilityExamples />
        <TeamCompatibilityWhoItsFor />
        <TeamCompatibilityCTA />
        <Testimonials />
      </div>
    </MainLayout>
  );
};

export default TeamCompatibility;
