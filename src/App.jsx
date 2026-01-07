import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/Common/ErrorPage";
import ScrollToTop from "./components/Common/ScrollToTop";
// --- ROOT PAGES ---
import Home from "./pages/Home";
import About from "./pages/About";
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

// --- ABOUT SUBPAGES ---
import Story from "./pages/about/Story";
import Experts from "./pages/about/Experts";
import CaseStudies from "./pages/about/CaseStudies";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Root Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
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
