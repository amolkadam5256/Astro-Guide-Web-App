/**
 * Navigation Menu Data
 * Centralized navigation structure for the entire application
 * Used by Navbar and routing configuration
 */

export const NAVIGATION_MENU = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
    children: [
      {
        name: "Personal Numerology",
        path: "/services/personal",
        children: [
          { name: "Name Analysis", path: "/services/personal/name-analysis" },
          {
            name: "Life Path Analysis",
            path: "/services/personal/life-path",
          },
          {
            name: "Personal Year Forecast",
            path: "/services/personal/year-forecast",
          },
          { name: "Mobile Number", path: "/services/personal/mobile-number" },
          {
            name: "House/Address Number",
            path: "/services/personal/house-number",
          },
          {
            name: "Compatibility Report",
            path: "/services/personal/compatibility",
          },
        ],
      },
      {
        name: "Business Numerology",
        path: "/services/business",
        children: [
          {
            name: "Company Naming",
            path: "/services/business/company-naming",
          },
          {
            name: "Brand Identity",
            path: "/services/business/brand-identity",
          },
          {
            name: "Startup Naming",
            path: "/services/business/startup-naming",
          },
          {
            name: "Business Timing",
            path: "/services/business/timing-strategy",
          },
          {
            name: "Team Compatibility",
            path: "/services/business/team-compatibility",
          },
        ],
      },
      {
        name: "Property Numerology",
        path: "/services/property",
        children: [
          {
            name: "Commercial Property",
            path: "/services/property/commercial",
          },
          {
            name: "Residential Property",
            path: "/services/property/residential",
          },
          { name: "Opening Dates", path: "/services/property/opening-dates" },
        ],
      },
      {
        name: "Consultations",
        path: "/services/consultation",
        children: [
          {
            name: "1-on-1 Session",
            path: "/services/consultation/one-on-one",
          },
          {
            name: "Annual Planning",
            path: "/services/consultation/annual-planning",
          },
          {
            name: "Coaching Program",
            path: "/services/consultation/coaching",
          },
        ],
      },
      {
        name: "Subscriptions",
        path: "/services/subscription",
        children: [
          {
            name: "Monthly Forecast",
            path: "/services/subscription/monthly",
          },
          { name: "VIP Coaching", path: "/services/subscription/vip" },
          {
            name: "Community Access",
            path: "/services/subscription/community",
          },
        ],
      },
    ],
  },
  {
    name: "Tools",
    path: "/tools",
    children: [
      { name: "Name Calculator", path: "/tools/name-calculator" },
      { name: "Life Path Calculator", path: "/tools/life-path-calculator" },
      {
        name: "Personal Year Calculator",
        path: "/tools/personal-year-calculator",
      },
      { name: "Mobile Number Audit", path: "/tools/mobile-number-audit" },
      { name: "Business Name Audit", path: "/tools/business-name-audit" },
      {
        name: "House Number Calculator",
        path: "/tools/house-number-calculator",
      },
      {
        name: "Compatibility Calculator",
        path: "/tools/compatibility-calculator",
      },
    ],
  },
  {
    name: "Reports",
    path: "/reports",
    children: [
      {
        name: "Personal Reports",
        path: "/reports/personal",
        children: [
          {
            name: "Name Analysis Report",
            path: "/reports/personal/name-analysis",
          },
          { name: "Life Path Report", path: "/reports/personal/life-path" },
          {
            name: "Personal Year Report",
            path: "/reports/personal/year-forecast",
          },
          { name: "Career Report", path: "/reports/personal/career" },
        ],
      },
      {
        name: "Business Reports",
        path: "/reports/business",
        children: [
          {
            name: "Business Name Report",
            path: "/reports/business/name-report",
          },
          {
            name: "Brand Identity Package",
            path: "/reports/business/brand-package",
          },
          { name: "Startup Roadmap", path: "/reports/business/startup" },
        ],
      },
      {
        name: "Property Reports",
        path: "/reports/property",
        children: [
          { name: "Commercial Audit", path: "/reports/property/commercial" },
          {
            name: "Residential Audit",
            path: "/reports/property/residential",
          },
        ],
      },
      { name: "Sample Reports", path: "/reports/samples" },
    ],
  },
  {
    name: "Learn",
    path: "/learn",
    children: [
      {
        name: "Courses",
        path: "/learn/courses",
        children: [
          { name: "Beginner Course", path: "/learn/courses/beginner" },
          { name: "Advanced Course", path: "/learn/courses/advanced" },
          { name: "Business Numerology", path: "/learn/courses/business" },
          {
            name: "Practitioner Program",
            path: "/learn/courses/practitioner",
          },
        ],
      },
      {
        name: "Resources",
        path: "/learn/resources",
        children: [
          { name: "eBooks", path: "/learn/resources/ebooks" },
          { name: "Templates", path: "/learn/resources/templates" },
          { name: "Methodology", path: "/learn/resources/methodology" },
          { name: "FAQ", path: "/learn/resources/faq" },
        ],
      },
      {
        name: "B2B Solutions",
        path: "/learn/b2b",
        children: [
          { name: "API Licensing", path: "/learn/b2b/api-licensing" },
          { name: "White-Label Tools", path: "/learn/b2b/white-label" },
          { name: "Real Estate Partners", path: "/learn/b2b/real-estate" },
          { name: "HR Solutions", path: "/learn/b2b/hr-solutions" },
        ],
      },
      { name: "Blog", path: "/blog" },
    ],
  },
  {
    name: "About",
    path: "/about",
    children: [
      { name: "Our Story", path: "/about/story" },
      { name: "Our Experts", path: "/about/experts" },
      { name: "Case Studies", path: "/about/case-studies" },
      { name: "Pricing", path: "/pricing" },
      { name: "Contact", path: "/contact" },
    ],
  },
];

/**
 * Helper function to get all routes from navigation menu
 * Flattens the nested structure into a single array of routes
 */
export const getAllRoutes = () => {
  const routes = [];

  const extractRoutes = (items) => {
    items.forEach((item) => {
      routes.push({
        name: item.name,
        path: item.path,
      });
      if (item.children) {
        extractRoutes(item.children);
      }
    });
  };

  extractRoutes(NAVIGATION_MENU);
  return routes;
};

/**
 * Helper function to find a route by path
 */
export const findRouteByPath = (path) => {
  const routes = getAllRoutes();
  return routes.find((route) => route.path === path);
};
