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
      },
    ],
  },
  {
    name: "About",
    path: "/about",
    children: [
      { name: "Our Story", path: "/about/story" },
      { name: "Our Experts", path: "/about/experts" },
      { name: "Case Studies", path: "/about/case-studies" },
    ],
  },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
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
