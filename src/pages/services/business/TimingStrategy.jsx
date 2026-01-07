import React from "react";
import MainLayout from "../../../components/layout/MainLayout";
import TimingStrategyHero from "../../../components/PagesComp/services/business/timing-strategy/TimingStrategyHero";
import TimingStrategyContent from "../../../components/PagesComp/services/business/timing-strategy/TimingStrategyContent";
import TimingStrategyDeliverables from "../../../components/PagesComp/services/business/timing-strategy/TimingStrategyDeliverables";
import TimingStrategyExamples from "../../../components/PagesComp/services/business/timing-strategy/TimingStrategyExamples";
import TimingStrategyWhoItsFor from "../../../components/PagesComp/services/business/timing-strategy/TimingStrategyWhoItsFor";
import TimingStrategyCTA from "../../../components/PagesComp/services/business/timing-strategy/TimingStrategyCTA";
import Testimonials from "../../../components/Common/Testimonials";

const TimingStrategy = () => {
  return (
    <MainLayout
      title="Business Timing Strategy | Peak Performance Numerology | Astroworlds"
      description="Success is all about timing. Our strategic business timing analysis identifies your 12-month expansion windows and consolidation cycles for maximum ROI."
      keywords="Business Timing, Strategic Calendar, Growth Cycles, Product Launch Timing, Corporate Numerology"
    >
      <div className="bg-white dark:bg-[#050a15]">
        <TimingStrategyHero />
        <TimingStrategyContent />
        <TimingStrategyDeliverables />
        <TimingStrategyExamples />
        <TimingStrategyWhoItsFor />
        <TimingStrategyCTA />
        <Testimonials />
      </div>
    </MainLayout>
  );
};

export default TimingStrategy;
