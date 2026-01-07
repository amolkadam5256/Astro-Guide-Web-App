import React from "react";
import MainLayout from "../../../components/layout/MainLayout";
import MobileNumberHero from "../../../components/PagesComp/services/personal/mobile-number/MobileNumberHero";
import MobileNumberContent from "../../../components/PagesComp/services/personal/mobile-number/MobileNumberContent";
import MobileNumberDeliverables from "../../../components/PagesComp/services/personal/mobile-number/MobileNumberDeliverables";
import MobileNumberExamples from "../../../components/PagesComp/services/personal/mobile-number/MobileNumberExamples";
import MobileNumberWhoItsFor from "../../../components/PagesComp/services/personal/mobile-number/MobileNumberWhoItsFor";
import MobileNumberCTA from "../../../components/PagesComp/services/personal/mobile-number/MobileNumberCTA";
import Testimonials from "../../../components/Common/Testimonials";

const MobileNumber = () => {
  return (
    <MainLayout
      title="Mobile Number Numerology | Digital Frequency Audit | Astroworlds"
      description="Is your mobile number attracting success or blocks? Our telephonic vibration audit analyzes your number's frequency to align it with your destiny path."
      keywords="Mobile Numerology, Phone Number Analysis, Digital Identity, Lucky Number Audit, Telephonic Frequency"
    >
      <div className="bg-white dark:bg-[#050a15] overflow-hidden">
        <MobileNumberHero />
        <MobileNumberContent />
        <MobileNumberDeliverables />
        <MobileNumberExamples />
        <MobileNumberWhoItsFor />
        <MobileNumberCTA />
        <Testimonials />
      </div>
    </MainLayout>
  );
};

export default MobileNumber;
