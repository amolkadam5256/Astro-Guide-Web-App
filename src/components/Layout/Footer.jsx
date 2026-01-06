import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SITE_DATA } from "../../constants/siteData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Numerology & Names",
      links: [
        { name: "Personal Numerology", path: "/services/personal" },
        { name: "Name Analysis", path: "/services/personal/name-analysis" },
        { name: "Life Path Analysis", path: "/services/personal/life-path" },
        { name: "Personal Year", path: "/services/personal/year-forecast" },
        { name: "Compatibility", path: "/services/personal/compatibility" },
      ],
    },
    {
      title: "Business Services",
      links: [
        { name: "Company Naming", path: "/services/business/company-naming" },
        { name: "Brand Identity", path: "/services/business/brand-identity" },
        { name: "Startup Naming", path: "/services/business/startup-naming" },
        { name: "Business Timing", path: "/services/business/timing-strategy" },
        {
          name: "Team Compatibility",
          path: "/services/business/team-compatibility",
        },
      ],
    },
    {
      title: "Property & More",
      links: [
        { name: "Commercial Property", path: "/services/property/commercial" },
        {
          name: "Residential Property",
          path: "/services/property/residential",
        },
        { name: "Opening Dates", path: "/services/property/opening-dates" },
        { name: "Mobile Number Audit", path: "/tools/mobile-number-audit" },
        { name: "Business Name Audit", path: "/tools/business-name-audit" },
      ],
    },
  ];

  return (
    <footer className="relative bg-gray-50 dark:bg-[#050505] border-t border-gray-200 dark:border-white/5 pt-5 pb-5 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="group inline-block">
              <span className="text-3xl font-black tracking-tighter text-dark dark:text-white">
                {SITE_DATA.brand.name}
                <span className="text-primary">
                  {SITE_DATA.brand.highlight}
                </span>
              </span>
              <div className="w-12 h-1 bg-primary mt-1 group-hover:w-full transition-all duration-500"></div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-[14px] leading-relaxed max-w-md font-medium">
              {SITE_DATA.brand.tagline}
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-gray-400">
                    {SITE_DATA.contact.emailLabel}
                  </p>
                  <p className="font-bold dark:text-gray-200 text-gray-800 text-[14px]">
                    {SITE_DATA.contact.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-gray-400">
                    {SITE_DATA.contact.supportLabel}
                  </p>
                  <p className="font-bold dark:text-gray-200 text-gray-800 text-[14px]">
                    {SITE_DATA.contact.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-[12px] uppercase tracking-[0.3em] font-black text-dark dark:text-white">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center group/link"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter & Bottom Bar */}
        <div className="pt-5 border-t border-gray-200 dark:border-white/5">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            {/* Newsletter */}
            <div className="w-full lg:w-max space-y-4">
              <h5 className="flex items-center text-sm font-black dark:text-white text-gray-900 uppercase tracking-widest">
                <Sparkles className="w-4 h-4 mr-3 text-primary" />
                Subscribe to Cosmic Updates
              </h5>
              <div className="flex w-full">
                <input
                  type="email"
                  placeholder="Your cosmic email"
                  className="w-full lg:w-80 px-5 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-primary transition-colors font-bold text-[13px]"
                />
                <button className="px-8 py-4 bg-primary hover:bg-primary-dark-1 text-white font-black text-[13px] transition-all">
                  JOIN
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {SITE_DATA.socials.map((social) => {
                const Icon = {
                  Facebook: Facebook,
                  Twitter: Twitter,
                  Instagram: Instagram,
                  Youtube: Youtube,
                }[social.name];

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-400 hover:text-primary hover:border-primary transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] gap-5 text-center">
            <p>
              © {currentYear}{" "}
              <Link to="/" className="hover:text-primary transition-colors">
                {SITE_DATA.brand.name}
                <span className="text-primary">
                  {SITE_DATA.brand.highlight}
                </span>
              </Link>{" "}
              Cosmic Portal. All Celestial rights reserved.
            </p>
            <div className="flex items-center space-x-10">
              <a
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a
                href="/disclaimer"
                className="hover:text-primary transition-colors"
              >
                Astrology Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
