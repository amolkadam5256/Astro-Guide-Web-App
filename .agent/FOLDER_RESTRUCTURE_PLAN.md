# Folder Structure Restructuring Plan

## Current Issues

1. Old `numerology` folder exists but is not in the navigation
2. Many empty folders in services, reports, learn, b2b, and about
3. App.jsx has old routes that don't match the navigation structure
4. Missing page files for all navigation items

## Target Folder Structure

Based on the navigation structure, here's the complete folder organization:

### 1. Services Section (21 pages)

```
src/pages/services/
├── Services.jsx                    # Main /services page
├── personal/
│   ├── Personal.jsx               # /services/personal
│   ├── NameAnalysis.jsx          # /services/personal/name-analysis
│   ├── LifePath.jsx              # /services/personal/life-path
│   ├── YearForecast.jsx          # /services/personal/year-forecast
│   ├── MobileNumber.jsx          # /services/personal/mobile-number
│   ├── HouseNumber.jsx           # /services/personal/house-number
│   └── Compatibility.jsx         # /services/personal/compatibility
├── business/
│   ├── Business.jsx              # /services/business
│   ├── CompanyNaming.jsx         # /services/business/company-naming
│   ├── BrandIdentity.jsx         # /services/business/brand-identity
│   ├── StartupNaming.jsx         # /services/business/startup-naming
│   ├── TimingStrategy.jsx        # /services/business/timing-strategy
│   └── TeamCompatibility.jsx    # /services/business/team-compatibility
├── property/
│   ├── Property.jsx              # /services/property
│   ├── Commercial.jsx            # /services/property/commercial
│   ├── Residential.jsx           # /services/property/residential
│   └── OpeningDates.jsx          # /services/property/opening-dates
├── consultation/
│   ├── Consultation.jsx          # /services/consultation
│   ├── OneOnOne.jsx              # /services/consultation/one-on-one
│   ├── AnnualPlanning.jsx        # /services/consultation/annual-planning
│   └── Coaching.jsx              # /services/consultation/coaching
└── subscription/
    ├── Subscription.jsx          # /services/subscription
    ├── Monthly.jsx               # /services/subscription/monthly
    ├── Vip.jsx                   # /services/subscription/vip
    └── Community.jsx             # /services/subscription/community
```

### 2. Tools Section (8 pages)

```
src/pages/tools/
├── Tools.jsx                     # Main /tools page
├── NameCalculator.jsx           # /tools/name-calculator
├── LifePathCalculator.jsx       # /tools/life-path-calculator
├── PersonalYearCalculator.jsx   # /tools/personal-year-calculator
├── MobileNumberAudit.jsx        # /tools/mobile-number-audit
├── BusinessNameAudit.jsx        # /tools/business-name-audit
├── HouseNumberCalculator.jsx    # /tools/house-number-calculator
└── CompatibilityCalculator.jsx  # /tools/compatibility-calculator
```

### 3. Reports Section (11 pages)

```
src/pages/reports/
├── Reports.jsx                   # Main /reports page
├── Samples.jsx                   # /reports/samples
├── personal/
│   ├── PersonalReports.jsx      # /reports/personal
│   ├── NameAnalysis.jsx         # /reports/personal/name-analysis
│   ├── LifePath.jsx             # /reports/personal/life-path
│   ├── YearForecast.jsx         # /reports/personal/year-forecast
│   └── Career.jsx               # /reports/personal/career
├── business/
│   ├── BusinessReports.jsx      # /reports/business
│   ├── NameReport.jsx           # /reports/business/name-report
│   ├── BrandPackage.jsx         # /reports/business/brand-package
│   └── Startup.jsx              # /reports/business/startup
└── property/
    ├── PropertyReports.jsx      # /reports/property
    ├── Commercial.jsx           # /reports/property/commercial
    └── Residential.jsx          # /reports/property/residential
```

### 4. Learn Section (13 pages)

```
src/pages/learn/
├── Learn.jsx                     # Main /learn page
├── courses/
│   ├── Courses.jsx              # /learn/courses
│   ├── Beginner.jsx             # /learn/courses/beginner
│   ├── Advanced.jsx             # /learn/courses/advanced
│   ├── Business.jsx             # /learn/courses/business
│   └── Practitioner.jsx         # /learn/courses/practitioner
└── resources/
    ├── Resources.jsx            # /learn/resources
    ├── Ebooks.jsx               # /learn/resources/ebooks
    ├── Templates.jsx            # /learn/resources/templates
    ├── Methodology.jsx          # /learn/resources/methodology
    └── Faq.jsx                  # /learn/resources/faq
```

### 5. B2B Section (5 pages)

```
src/pages/b2b/
├── B2B.jsx                       # Main /b2b page
├── ApiLicensing.jsx             # /b2b/api-licensing
├── WhiteLabel.jsx               # /b2b/white-label
├── RealEstate.jsx               # /b2b/real-estate
└── HrSolutions.jsx              # /b2b/hr-solutions
```

### 6. About Section (4 pages)

```
src/pages/about/
├── Story.jsx                     # /about/story
├── Experts.jsx                   # /about/experts
└── CaseStudies.jsx              # /about/case-studies
```

### 7. Root Pages (5 pages)

```
src/pages/
├── Home.jsx                      # /
├── About.jsx                     # /about (main about page)
├── Pricing.jsx                   # /pricing
├── Blog.jsx                      # /blog
└── Contact.jsx                   # /contact
```

## Files to Delete

- `src/pages/Numerology.jsx` (old structure)
- `src/pages/numerology/` folder (entire folder - old structure)
- `src/pages/services/AngelCards.jsx` (not in navigation)
- `src/pages/services/SoulPath.jsx` (not in navigation)
- `src/pages/services/BraveProgram.jsx` (not in navigation)
- `src/pages/services/Healing.jsx` (not in navigation)
- `src/pages/services/VastuOffice.jsx` (not in navigation)

## Implementation Steps

1. ✅ Create this plan document
2. Create all missing page files with proper structure
3. Delete old/unused files
4. Update App.jsx with all new routes
5. Verify all routes work correctly

## Total Pages: 65

- Services: 21 pages
- Tools: 8 pages
- Reports: 11 pages
- Learn: 13 pages
- B2B: 5 pages
- About: 4 pages
- Root: 5 pages (Home, About main, Pricing, Blog, Contact)
