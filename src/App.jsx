import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/common/ErrorPage";
// --- ROOT PAGES ---
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

// --- SERVICES ---
import Services from "./pages/services/Services";
// Personal
import Personal from "./pages/services/personal/Personal";
import NameAnalysis from "./pages/services/personal/NameAnalysis";
import LifePath from "./pages/services/personal/LifePath";
import YearForecast from "./pages/services/personal/YearForecast";
import MobileNumber from "./pages/services/personal/MobileNumber";
import HouseNumber from "./pages/services/personal/HouseNumber";
import Compatibility from "./pages/services/personal/Compatibility";
// Business
import Business from "./pages/services/business/Business";
import CompanyNaming from "./pages/services/business/CompanyNaming";
import BrandIdentity from "./pages/services/business/BrandIdentity";
import StartupNaming from "./pages/services/business/StartupNaming";
import TimingStrategy from "./pages/services/business/TimingStrategy";
import TeamCompatibility from "./pages/services/business/TeamCompatibility";
// Property
import Property from "./pages/services/property/Property";
import Commercial from "./pages/services/property/Commercial";
import Residential from "./pages/services/property/Residential";
import OpeningDates from "./pages/services/property/OpeningDates";
// Consultation
import Consultation from "./pages/services/consultation/Consultation";
import OneOnOne from "./pages/services/consultation/OneOnOne";
import AnnualPlanning from "./pages/services/consultation/AnnualPlanning";
import Coaching from "./pages/services/consultation/Coaching";
// Subscription
import Subscription from "./pages/services/subscription/Subscription";
import Monthly from "./pages/services/subscription/Monthly";
import Vip from "./pages/services/subscription/Vip";
import Community from "./pages/services/subscription/Community";

// --- TOOLS ---
import Tools from "./pages/tools/Tools";
import NameCalculator from "./pages/tools/NameCalculator";
import LifePathCalculator from "./pages/tools/LifePathCalculator";
import PersonalYearCalculator from "./pages/tools/PersonalYearCalculator";
import MobileNumberAudit from "./pages/tools/MobileNumberAudit";
import BusinessNameAudit from "./pages/tools/BusinessNameAudit";
import HouseNumberCalculator from "./pages/tools/HouseNumberCalculator";
import CompatibilityCalculator from "./pages/tools/CompatibilityCalculator";

// --- REPORTS ---
import Reports from "./pages/reports/Reports";
import Samples from "./pages/reports/Samples";
// Personal Reports
import PersonalReports from "./pages/reports/personal/PersonalReports";
import RepNameAnalysis from "./pages/reports/personal/NameAnalysis";
import RepLifePath from "./pages/reports/personal/LifePath";
import RepYearForecast from "./pages/reports/personal/YearForecast";
import RepCareer from "./pages/reports/personal/Career";
// Business Reports
import BusinessReports from "./pages/reports/business/BusinessReports";
import RepNameReport from "./pages/reports/business/NameReport";
import RepBrandPackage from "./pages/reports/business/BrandPackage";
import RepStartup from "./pages/reports/business/Startup";
// Property Reports
import RepPropertyReports from "./pages/reports/property/PropertyReports";
import RepCommercial from "./pages/reports/property/Commercial";
import RepResidential from "./pages/reports/property/Residential";

// --- LEARN ---
import Learn from "./pages/learn/Learn";
// Courses
import Courses from "./pages/learn/courses/Courses";
import Beginner from "./pages/learn/courses/Beginner";
import Advanced from "./pages/learn/courses/Advanced";
import LearnBusiness from "./pages/learn/courses/Business";
import Practitioner from "./pages/learn/courses/Practitioner";
// Resources
import Resources from "./pages/learn/resources/Resources";
import Ebooks from "./pages/learn/resources/Ebooks";
import Templates from "./pages/learn/resources/Templates";
import Methodology from "./pages/learn/resources/Methodology";
import Faq from "./pages/learn/resources/Faq";
// B2B
import B2B from "./pages/learn/b2b/B2B";
import ApiLicensing from "./pages/learn/b2b/ApiLicensing";
import WhiteLabel from "./pages/learn/b2b/WhiteLabel";
import RealEstate from "./pages/learn/b2b/RealEstate";
import HrSolutions from "./pages/learn/b2b/HrSolutions";

// --- ABOUT SUBPAGES ---
import Story from "./pages/about/Story";
import Experts from "./pages/about/Experts";
import CaseStudies from "./pages/about/CaseStudies";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Root Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        {/* Services Section */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/personal" element={<Personal />} />
        <Route
          path="/services/personal/name-analysis"
          element={<NameAnalysis />}
        />
        <Route path="/services/personal/life-path" element={<LifePath />} />
        <Route
          path="/services/personal/year-forecast"
          element={<YearForecast />}
        />
        <Route
          path="/services/personal/mobile-number"
          element={<MobileNumber />}
        />
        <Route
          path="/services/personal/house-number"
          element={<HouseNumber />}
        />
        <Route
          path="/services/personal/compatibility"
          element={<Compatibility />}
        />

        <Route path="/services/business" element={<Business />} />
        <Route
          path="/services/business/company-naming"
          element={<CompanyNaming />}
        />
        <Route
          path="/services/business/brand-identity"
          element={<BrandIdentity />}
        />
        <Route
          path="/services/business/startup-naming"
          element={<StartupNaming />}
        />
        <Route
          path="/services/business/timing-strategy"
          element={<TimingStrategy />}
        />
        <Route
          path="/services/business/team-compatibility"
          element={<TeamCompatibility />}
        />

        <Route path="/services/property" element={<Property />} />
        <Route path="/services/property/commercial" element={<Commercial />} />
        <Route
          path="/services/property/residential"
          element={<Residential />}
        />
        <Route
          path="/services/property/opening-dates"
          element={<OpeningDates />}
        />

        <Route path="/services/consultation" element={<Consultation />} />
        <Route
          path="/services/consultation/one-on-one"
          element={<OneOnOne />}
        />
        <Route
          path="/services/consultation/annual-planning"
          element={<AnnualPlanning />}
        />
        <Route path="/services/consultation/coaching" element={<Coaching />} />

        <Route path="/services/subscription" element={<Subscription />} />
        <Route path="/services/subscription/monthly" element={<Monthly />} />
        <Route path="/services/subscription/vip" element={<Vip />} />
        <Route
          path="/services/subscription/community"
          element={<Community />}
        />

        {/* Tools Section */}
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/name-calculator" element={<NameCalculator />} />
        <Route
          path="/tools/life-path-calculator"
          element={<LifePathCalculator />}
        />
        <Route
          path="/tools/personal-year-calculator"
          element={<PersonalYearCalculator />}
        />
        <Route
          path="/tools/mobile-number-audit"
          element={<MobileNumberAudit />}
        />
        <Route
          path="/tools/business-name-audit"
          element={<BusinessNameAudit />}
        />
        <Route
          path="/tools/house-number-calculator"
          element={<HouseNumberCalculator />}
        />
        <Route
          path="/tools/compatibility-calculator"
          element={<CompatibilityCalculator />}
        />

        {/* Reports Section */}
        <Route path="/reports" element={<Reports />} />
        <Route path="/reports/samples" element={<Samples />} />
        <Route path="/reports/personal" element={<PersonalReports />} />
        <Route
          path="/reports/personal/name-analysis"
          element={<RepNameAnalysis />}
        />
        <Route path="/reports/personal/life-path" element={<RepLifePath />} />
        <Route
          path="/reports/personal/year-forecast"
          element={<RepYearForecast />}
        />
        <Route path="/reports/personal/career" element={<RepCareer />} />

        <Route path="/reports/business" element={<BusinessReports />} />
        <Route
          path="/reports/business/name-report"
          element={<RepNameReport />}
        />
        <Route
          path="/reports/business/brand-package"
          element={<RepBrandPackage />}
        />
        <Route path="/reports/business/startup" element={<RepStartup />} />

        <Route path="/reports/property" element={<RepPropertyReports />} />
        <Route
          path="/reports/property/commercial"
          element={<RepCommercial />}
        />
        <Route
          path="/reports/property/residential"
          element={<RepResidential />}
        />

        {/* Learn Section */}
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/courses" element={<Courses />} />
        <Route path="/learn/courses/beginner" element={<Beginner />} />
        <Route path="/learn/courses/advanced" element={<Advanced />} />
        <Route path="/learn/courses/business" element={<LearnBusiness />} />
        <Route path="/learn/courses/practitioner" element={<Practitioner />} />

        <Route path="/learn/resources" element={<Resources />} />
        <Route path="/learn/resources/ebooks" element={<Ebooks />} />
        <Route path="/learn/resources/templates" element={<Templates />} />
        <Route path="/learn/resources/methodology" element={<Methodology />} />
        <Route path="/learn/resources/faq" element={<Faq />} />

        <Route path="/learn/b2b" element={<B2B />} />
        <Route path="/learn/b2b/api-licensing" element={<ApiLicensing />} />
        <Route path="/learn/b2b/white-label" element={<WhiteLabel />} />
        <Route path="/learn/b2b/real-estate" element={<RealEstate />} />
        <Route path="/learn/b2b/hr-solutions" element={<HrSolutions />} />

        {/* About Section Subpages */}
        <Route path="/about/story" element={<Story />} />
        <Route path="/about/experts" element={<Experts />} />
        <Route path="/about/case-studies" element={<CaseStudies />} />

        {/* Error Page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
