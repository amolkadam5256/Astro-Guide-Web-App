# Astrology Website - Folder Structure

## Based on Navigation Menu Structure

This document outlines the complete folder structure for pages and components based on the navigation menu defined in `Navbar.jsx`.

---

## 📁 Pages Structure (`src/pages/`)

```
src/pages/
├── Home.jsx                          # Main landing page (/)
│
├── services/                         # Services section (/services)
│   ├── Services.jsx                  # Main services page
│   │
│   ├── personal/                     # Personal Numerology (/services/personal)
│   │   ├── Personal.jsx              # Personal services overview
│   │   ├── NameAnalysis.jsx          # /services/personal/name-analysis
│   │   ├── LifePath.jsx              # /services/personal/life-path
│   │   ├── YearForecast.jsx          # /services/personal/year-forecast
│   │   ├── MobileNumber.jsx          # /services/personal/mobile-number
│   │   ├── HouseNumber.jsx           # /services/personal/house-number
│   │   └── Compatibility.jsx         # /services/personal/compatibility
│   │
│   ├── business/                     # Business Numerology (/services/business)
│   │   ├── Business.jsx              # Business services overview
│   │   ├── CompanyNaming.jsx         # /services/business/company-naming
│   │   ├── BrandIdentity.jsx         # /services/business/brand-identity
│   │   ├── StartupNaming.jsx         # /services/business/startup-naming
│   │   ├── TimingStrategy.jsx        # /services/business/timing-strategy
│   │   └── TeamCompatibility.jsx     # /services/business/team-compatibility
│   │
│   ├── property/                     # Property Numerology (/services/property)
│   │   ├── Property.jsx              # Property services overview
│   │   ├── Commercial.jsx            # /services/property/commercial
│   │   ├── Residential.jsx           # /services/property/residential
│   │   └── OpeningDates.jsx          # /services/property/opening-dates
│   │
│   ├── consultation/                 # Consultations (/services/consultation)
│   │   ├── Consultation.jsx          # Consultation overview
│   │   ├── OneOnOne.jsx              # /services/consultation/one-on-one
│   │   ├── AnnualPlanning.jsx        # /services/consultation/annual-planning
│   │   └── Coaching.jsx              # /services/consultation/coaching
│   │
│   └── subscription/                 # Subscriptions (/services/subscription)
│       ├── Subscription.jsx          # Subscription overview
│       ├── Monthly.jsx               # /services/subscription/monthly
│       ├── Vip.jsx                   # /services/subscription/vip
│       └── Community.jsx             # /services/subscription/community
│
├── tools/                            # Tools section (/tools)
│   ├── Tools.jsx                     # Main tools page
│   ├── NameCalculator.jsx            # /tools/name-calculator
│   ├── LifePathCalculator.jsx        # /tools/life-path-calculator
│   ├── PersonalYearCalculator.jsx    # /tools/personal-year-calculator
│   ├── MobileNumberAudit.jsx         # /tools/mobile-number-audit
│   ├── BusinessNameAudit.jsx         # /tools/business-name-audit
│   ├── HouseNumberCalculator.jsx     # /tools/house-number-calculator
│   └── CompatibilityCalculator.jsx   # /tools/compatibility-calculator
│
├── reports/                          # Reports section (/reports)
│   ├── Reports.jsx                   # Main reports page
│   ├── Samples.jsx                   # /reports/samples
│   │
│   ├── personal/                     # Personal Reports (/reports/personal)
│   │   ├── PersonalReports.jsx       # Personal reports overview
│   │   ├── NameAnalysis.jsx          # /reports/personal/name-analysis
│   │   ├── LifePath.jsx              # /reports/personal/life-path
│   │   ├── YearForecast.jsx          # /reports/personal/year-forecast
│   │   └── Career.jsx                # /reports/personal/career
│   │
│   ├── business/                     # Business Reports (/reports/business)
│   │   ├── BusinessReports.jsx       # Business reports overview
│   │   ├── NameReport.jsx            # /reports/business/name-report
│   │   ├── BrandPackage.jsx          # /reports/business/brand-package
│   │   └── Startup.jsx               # /reports/business/startup
│   │
│   └── property/                     # Property Reports (/reports/property)
│       ├── PropertyReports.jsx       # Property reports overview
│       ├── Commercial.jsx            # /reports/property/commercial
│       └── Residential.jsx           # /reports/property/residential
│
├── learn/                            # Learn section (/learn)
│   ├── Learn.jsx                     # Main learn page
│   │
│   ├── courses/                      # Courses (/learn/courses)
│   │   ├── Courses.jsx               # Courses overview
│   │   ├── Beginner.jsx              # /learn/courses/beginner
│   │   ├── Advanced.jsx              # /learn/courses/advanced
│   │   ├── Business.jsx              # /learn/courses/business
│   │   └── Practitioner.jsx          # /learn/courses/practitioner
│   │
│   └── resources/                    # Resources (/learn/resources)
│       ├── Resources.jsx             # Resources overview
│       ├── Ebooks.jsx                # /learn/resources/ebooks
│       ├── Templates.jsx             # /learn/resources/templates
│       ├── Methodology.jsx           # /learn/resources/methodology
│       └── Faq.jsx                   # /learn/resources/faq
│
├── b2b/                              # B2B Solutions (/b2b)
│   ├── B2B.jsx                       # Main B2B page
│   ├── ApiLicensing.jsx              # /b2b/api-licensing
│   ├── WhiteLabel.jsx                # /b2b/white-label
│   ├── RealEstate.jsx                # /b2b/real-estate
│   └── HrSolutions.jsx               # /b2b/hr-solutions
│
├── about/                            # About section (/about)
│   ├── About.jsx                     # Main about page
│   ├── Story.jsx                     # /about/story
│   ├── Experts.jsx                   # /about/experts
│   └── CaseStudies.jsx               # /about/case-studies
│
├── Pricing.jsx                       # Pricing page (/pricing)
├── Contact.jsx                       # Contact page (/contact)
└── Blog.jsx                          # Blog page (/blog)
```

---

## 📁 Components Structure (`src/components/`)

```
src/components/
├── layout/                           # Layout components
│   ├── Navbar.jsx                    # Main navigation
│   ├── Footer.jsx                    # Footer
│   └── Layout.jsx                    # Main layout wrapper
│
├── common/                           # Shared/common components
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Modal.jsx
│   ├── Loading.jsx
│   └── SEO.jsx
│
├── Shared/                           # Shared UI components
│   └── (utility components)
│
└── PagesComp/                        # Page-specific components
    ├── Home/                         # Home page components
    │   ├── HomeHero.jsx
    │   ├── HomeFeatures.jsx
    │   ├── HomeTestimonials.jsx
    │   └── HomeCTA.jsx
    │
    ├── Services/                     # Services components
    │   ├── ServicesHero.jsx
    │   ├── ServiceCard.jsx
    │   ├── Personal/
    │   ├── Business/
    │   ├── Property/
    │   ├── Consultation/
    │   └── Subscription/
    │
    ├── Tools/                        # Tools components
    │   ├── Calculator.jsx
    │   ├── ResultDisplay.jsx
    │   └── InputForm.jsx
    │
    ├── Reports/                      # Reports components
    │   ├── ReportPreview.jsx
    │   ├── ReportDownload.jsx
    │   └── ReportSample.jsx
    │
    ├── Learn/                        # Learn components
    │   ├── CourseCard.jsx
    │   ├── ResourceCard.jsx
    │   └── LearningPath.jsx
    │
    ├── B2B/                          # B2B components
    │   ├── B2BFeatures.jsx
    │   ├── PricingTable.jsx
    │   └── ApiDocs.jsx
    │
    ├── About/                        # About components
    │   ├── AboutHero.jsx
    │   ├── TeamMember.jsx
    │   └── Timeline.jsx
    │
    ├── Contact/                      # Contact components
    │   ├── ContactForm.jsx
    │   └── ContactInfo.jsx
    │
    └── Blog/                         # Blog components
        ├── BlogCard.jsx
        ├── BlogPost.jsx
        └── BlogSidebar.jsx
```

---

## 📋 Navigation Mapping

### Main Menu Items:

1. **Home** → `/` → `pages/Home.jsx`
2. **Services** → `/services` → `pages/services/Services.jsx`
3. **Tools** → `/tools` → `pages/tools/Tools.jsx`
4. **Reports** → `/reports` → `pages/reports/Reports.jsx`
5. **Learn** → `/learn` → `pages/learn/Learn.jsx`
6. **About** → `/about` → `pages/about/About.jsx`

### Additional Pages:

- **Pricing** → `/pricing` → `pages/Pricing.jsx`
- **Contact** → `/contact` → `pages/Contact.jsx`
- **Blog** → `/blog` → `pages/Blog.jsx`
- **B2B** → `/b2b` → `pages/b2b/B2B.jsx`

---

## 🎯 Naming Conventions

### Files:

- **PascalCase** for component files: `NameAnalysis.jsx`, `LifePath.jsx`
- **camelCase** for folders: `personal/`, `business/`, `property/`

### Components:

- Export default component with PascalCase name matching filename
- Use descriptive names that match the navigation menu

### Paths:

- **kebab-case** for URLs: `/services/personal/name-analysis`
- Match exactly with navigation menu paths

---

## 📝 Notes

1. Each main section has an index/overview page (e.g., `Services.jsx`, `Tools.jsx`)
2. Nested routes follow the same pattern as navigation hierarchy
3. Components are organized by page/feature in `PagesComp/`
4. Shared components go in `common/` or `Shared/`
5. Layout components stay in `layout/`

---

## 🚀 Implementation Priority

1. ✅ Create folder structure for all pages
2. ✅ Create placeholder components for each route
3. ✅ Update routing in `App.jsx`
4. ✅ Organize page-specific components in `PagesComp/`
5. ✅ Test all navigation links
