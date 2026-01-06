# 📊 Navigation Structure Visualization

## Complete Navigation Hierarchy

```
🏠 HOME (/)
│
├── 🛠️ SERVICES (/services)
│   │
│   ├── 👤 Personal Numerology (/services/personal)
│   │   ├── Name Analysis (/services/personal/name-analysis)
│   │   ├── Life Path Analysis (/services/personal/life-path)
│   │   ├── Personal Year Forecast (/services/personal/year-forecast)
│   │   ├── Mobile Number (/services/personal/mobile-number)
│   │   ├── House/Address Number (/services/personal/house-number)
│   │   └── Compatibility Report (/services/personal/compatibility)
│   │
│   ├── 💼 Business Numerology (/services/business)
│   │   ├── Company Naming (/services/business/company-naming)
│   │   ├── Brand Identity (/services/business/brand-identity)
│   │   ├── Startup Naming (/services/business/startup-naming)
│   │   ├── Business Timing (/services/business/timing-strategy)
│   │   └── Team Compatibility (/services/business/team-compatibility)
│   │
│   ├── 🏢 Property Numerology (/services/property)
│   │   ├── Commercial Property (/services/property/commercial)
│   │   ├── Residential Property (/services/property/residential)
│   │   └── Opening Dates (/services/property/opening-dates)
│   │
│   ├── 💬 Consultations (/services/consultation)
│   │   ├── 1-on-1 Session (/services/consultation/one-on-one)
│   │   ├── Annual Planning (/services/consultation/annual-planning)
│   │   └── Coaching Program (/services/consultation/coaching)
│   │
│   └── 📅 Subscriptions (/services/subscription)
│       ├── Monthly Forecast (/services/subscription/monthly)
│       ├── VIP Coaching (/services/subscription/vip)
│       └── Community Access (/services/subscription/community)
│
├── 🔧 TOOLS (/tools)
│   ├── Name Calculator (/tools/name-calculator)
│   ├── Life Path Calculator (/tools/life-path-calculator)
│   ├── Personal Year Calculator (/tools/personal-year-calculator)
│   ├── Mobile Number Audit (/tools/mobile-number-audit)
│   ├── Business Name Audit (/tools/business-name-audit)
│   ├── House Number Calculator (/tools/house-number-calculator)
│   └── Compatibility Calculator (/tools/compatibility-calculator)
│
├── 📄 REPORTS (/reports)
│   │
│   ├── 👤 Personal Reports (/reports/personal)
│   │   ├── Name Analysis Report (/reports/personal/name-analysis)
│   │   ├── Life Path Report (/reports/personal/life-path)
│   │   ├── Personal Year Report (/reports/personal/year-forecast)
│   │   └── Career Report (/reports/personal/career)
│   │
│   ├── 💼 Business Reports (/reports/business)
│   │   ├── Business Name Report (/reports/business/name-report)
│   │   ├── Brand Identity Package (/reports/business/brand-package)
│   │   └── Startup Roadmap (/reports/business/startup)
│   │
│   ├── 🏢 Property Reports (/reports/property)
│   │   ├── Commercial Audit (/reports/property/commercial)
│   │   └── Residential Audit (/reports/property/residential)
│   │
│   └── 📋 Sample Reports (/reports/samples)
│
├── 📚 LEARN (/learn)
│   │
│   ├── 🎓 Courses (/learn/courses)
│   │   ├── Beginner Course (/learn/courses/beginner)
│   │   ├── Advanced Course (/learn/courses/advanced)
│   │   ├── Business Numerology (/learn/courses/business)
│   │   └── Practitioner Program (/learn/courses/practitioner)
│   │
│   ├── 📖 Resources (/learn/resources)
│   │   ├── eBooks (/learn/resources/ebooks)
│   │   ├── Templates (/learn/resources/templates)
│   │   ├── Methodology (/learn/resources/methodology)
│   │   └── FAQ (/learn/resources/faq)
│   │
│   ├── 🏢 B2B Solutions (/b2b)
│   │   ├── API Licensing (/b2b/api-licensing)
│   │   ├── White-Label Tools (/b2b/white-label)
│   │   ├── Real Estate Partners (/b2b/real-estate)
│   │   └── HR Solutions (/b2b/hr-solutions)
│   │
│   └── 📝 Blog (/blog)
│
└── ℹ️ ABOUT (/about)
    ├── Our Story (/about/story)
    ├── Our Experts (/about/experts)
    ├── Case Studies (/about/case-studies)
    ├── 💰 Pricing (/pricing)
    └── 📧 Contact (/contact)
```

---

## Folder Structure Mapping

### Services Section (21 pages)

```
src/pages/services/
├── Services.jsx                    # Main services page
├── personal/
│   ├── Personal.jsx
│   ├── NameAnalysis.jsx
│   ├── LifePath.jsx
│   ├── YearForecast.jsx
│   ├── MobileNumber.jsx
│   ├── HouseNumber.jsx
│   └── Compatibility.jsx
├── business/
│   ├── Business.jsx
│   ├── CompanyNaming.jsx
│   ├── BrandIdentity.jsx
│   ├── StartupNaming.jsx
│   ├── TimingStrategy.jsx
│   └── TeamCompatibility.jsx
├── property/
│   ├── Property.jsx
│   ├── Commercial.jsx
│   ├── Residential.jsx
│   └── OpeningDates.jsx
├── consultation/
│   ├── Consultation.jsx
│   ├── OneOnOne.jsx
│   ├── AnnualPlanning.jsx
│   └── Coaching.jsx
└── subscription/
    ├── Subscription.jsx
    ├── Monthly.jsx
    ├── Vip.jsx
    └── Community.jsx
```

### Tools Section (8 pages)

```
src/pages/tools/
├── Tools.jsx
├── NameCalculator.jsx
├── LifePathCalculator.jsx
├── PersonalYearCalculator.jsx
├── MobileNumberAudit.jsx
├── BusinessNameAudit.jsx
├── HouseNumberCalculator.jsx
└── CompatibilityCalculator.jsx
```

### Reports Section (11 pages)

```
src/pages/reports/
├── Reports.jsx
├── Samples.jsx
├── personal/
│   ├── PersonalReports.jsx
│   ├── NameAnalysis.jsx
│   ├── LifePath.jsx
│   ├── YearForecast.jsx
│   └── Career.jsx
├── business/
│   ├── BusinessReports.jsx
│   ├── NameReport.jsx
│   ├── BrandPackage.jsx
│   └── Startup.jsx
└── property/
    ├── PropertyReports.jsx
    ├── Commercial.jsx
    └── Residential.jsx
```

### Learn Section (13 pages)

```
src/pages/learn/
├── Learn.jsx
├── courses/
│   ├── Courses.jsx
│   ├── Beginner.jsx
│   ├── Advanced.jsx
│   ├── Business.jsx
│   └── Practitioner.jsx
└── resources/
    ├── Resources.jsx
    ├── Ebooks.jsx
    ├── Templates.jsx
    ├── Methodology.jsx
    └── Faq.jsx
```

### B2B Section (5 pages)

```
src/pages/b2b/
├── B2B.jsx
├── ApiLicensing.jsx
├── WhiteLabel.jsx
├── RealEstate.jsx
└── HrSolutions.jsx
```

### About Section (4 pages)

```
src/pages/about/
├── Story.jsx
├── Experts.jsx
└── CaseStudies.jsx
```

### Other Pages (3 pages)

```
src/pages/
├── Pricing.jsx
├── Blog.jsx
└── Contact.jsx
```

---

## Component Organization

```
src/components/PagesComp/
├── Home/
│   ├── HomeHero.jsx
│   ├── HomeFeatures.jsx
│   └── HomeTestimonials.jsx
│
├── Services/
│   ├── ServicesHero.jsx
│   ├── ServiceCard.jsx
│   └── ServiceFeatures.jsx
│
├── Tools/
│   ├── Calculator.jsx
│   ├── ResultDisplay.jsx
│   └── InputForm.jsx
│
├── Reports/
│   ├── ReportPreview.jsx
│   ├── ReportDownload.jsx
│   └── ReportSample.jsx
│
├── Learn/
│   ├── CourseCard.jsx
│   ├── ResourceCard.jsx
│   └── LearningPath.jsx
│
├── B2B/
│   ├── B2BFeatures.jsx
│   ├── PricingTable.jsx
│   └── ApiDocs.jsx
│
├── About/
│   ├── AboutHero.jsx
│   ├── TeamMember.jsx
│   └── Timeline.jsx
│
└── Pricing/
    ├── PricingCard.jsx
    └── PricingComparison.jsx
```

---

## Quick Stats

| Category           | Count    |
| ------------------ | -------- |
| **Main Sections**  | 6        |
| **Total Pages**    | 65       |
| **Services Pages** | 21       |
| **Tools Pages**    | 8        |
| **Reports Pages**  | 11       |
| **Learn Pages**    | 13       |
| **B2B Pages**      | 5        |
| **About Pages**    | 4        |
| **Other Pages**    | 3        |
| **Max Depth**      | 3 levels |

---

## Navigation Depth

- **Level 1**: 6 main sections (Home, Services, Tools, Reports, Learn, About)
- **Level 2**: 15 subsections (Personal, Business, Property, etc.)
- **Level 3**: 44 individual pages

**Total Unique Routes**: 65 pages
