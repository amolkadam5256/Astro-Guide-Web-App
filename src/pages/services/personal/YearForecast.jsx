import React from "react";
import MainLayout from "../../../components/layout/MainLayout";
import YearForecastHero from "../../../components/PagesComp/services/personal/year-forecast/YearForecastHero";
import YearForecastContent from "../../../components/PagesComp/services/personal/year-forecast/YearForecastContent";
import YearForecastDeliverables from "../../../components/PagesComp/services/personal/year-forecast/YearForecastDeliverables";
import YearForecastExamples from "../../../components/PagesComp/services/personal/year-forecast/YearForecastExamples";
import YearForecastWhoItsFor from "../../../components/PagesComp/services/personal/year-forecast/YearForecastWhoItsFor";
import YearForecastCTA from "../../../components/PagesComp/services/personal/year-forecast/YearForecastCTA";
import Testimonials from "../../../components/Common/Testimonials";

const YearForecast = () => {
  return (
    <MainLayout
      title="Annual Personal Forecast 2025 | Timing Optimization | Astroworlds"
      description="Stop guessing and start planning. Our 12-month personal numerology forecast identifies your power periods and 'wait-and-watch' cycles for the year ahead."
      keywords="Yearly Forecast, Personal Year Number, 2025 Numerology, Timing Strategy, Luck Audit"
    >
      <div className="bg-white dark:bg-[#050a15]">
        <YearForecastHero />
        <YearForecastContent />
        <YearForecastDeliverables />
        <YearForecastExamples />
        <YearForecastWhoItsFor />
        <YearForecastCTA />
        <Testimonials />
      </div>
    </MainLayout>
  );
};

export default YearForecast;
