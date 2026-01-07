import React from "react";
import MainLayout from "../../../components/layout/MainLayout";
import OpeningDatesHero from "../../../components/PagesComp/services/property/opening-dates/OpeningDatesHero";
import OpeningDatesContent from "../../../components/PagesComp/services/property/opening-dates/OpeningDatesContent";
import OpeningDatesDeliverables from "../../../components/PagesComp/services/property/opening-dates/OpeningDatesDeliverables";
import OpeningDatesExamples from "../../../components/PagesComp/services/property/opening-dates/OpeningDatesExamples";
import OpeningDatesWhoItsFor from "../../../components/PagesComp/services/property/opening-dates/OpeningDatesWhoItsFor";
import OpeningDatesCTA from "../../../components/PagesComp/services/property/opening-dates/OpeningDatesCTA";
import Testimonials from "../../../components/Common/Testimonials";

const OpeningDates = () => {
  return (
    <MainLayout
      title="Property Opening Dates | Griha Pravesh & Showroom Muhurta | Astroworlds"
      description="Calculate highly auspicious dates and times for starting your new home journey or business showroom. Ensure success from the very first step."
      keywords="Opening Dates, Muhurta Numerology, Griha Pravesh Dates, Showroom Launch Timing, Property Inauguration"
    >
      <div className="bg-white dark:bg-[#050a15]">
        <OpeningDatesHero />
        <OpeningDatesContent />
        <OpeningDatesDeliverables />
        <OpeningDatesExamples />
        <OpeningDatesWhoItsFor />
        <OpeningDatesCTA />
        <Testimonials />
      </div>
    </MainLayout>
  );
};

export default OpeningDates;
