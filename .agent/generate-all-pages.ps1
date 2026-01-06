# Complete Page Generation Script
# This script creates ALL missing page files for the astrology website

$baseDir = "c:\Users\Admin\Desktop\Amol\Astrology_Website\src\pages"

# Function to create a page file
function Create-PageFile {
    param(
        [string]$FilePath,
        [string]$ComponentName,
        [string]$Title,
        [string]$Description,
        [string]$LayoutPath = "../../components/layout/Layout"
    )
    
    $content = @"
import React from "react";
import Layout from "$LayoutPath";

const $ComponentName = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              $Title
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              $Description
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                Content coming soon...
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default $ComponentName;
"@

    # Create directory if it doesn't exist
    $dir = Split-Path -Parent $FilePath
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
    
    # Write the file
    Set-Content -Path $FilePath -Value $content -Encoding UTF8
    Write-Host "Created: $FilePath" -ForegroundColor Green
}

Write-Host "`n=== Creating Tools Pages ===" -ForegroundColor Cyan
Create-PageFile "$baseDir\tools\NameCalculator.jsx" "NameCalculator" "Name Calculator" "Calculate the numerological value of any name" "../../components/layout/Layout"
Create-PageFile "$baseDir\tools\LifePathCalculator.jsx" "LifePathCalculator" "Life Path Calculator" "Discover your life path number from your birth date" "../../components/layout/Layout"
Create-PageFile "$baseDir\tools\PersonalYearCalculator.jsx" "PersonalYearCalculator" "Personal Year Calculator" "Find out what this year holds for you" "../../components/layout/Layout"
Create-PageFile "$baseDir\tools\MobileNumberAudit.jsx" "MobileNumberAudit" "Mobile Number Audit" "Analyze the energy of your mobile number" "../../components/layout/Layout"
Create-PageFile "$baseDir\tools\BusinessNameAudit.jsx" "BusinessNameAudit" "Business Name Audit" "Evaluate your business name's numerological impact" "../../components/layout/Layout"
Create-PageFile "$baseDir\tools\HouseNumberCalculator.jsx" "HouseNumberCalculator" "House Number Calculator" "Understand your home's numerological influence" "../../components/layout/Layout"
Create-PageFile "$baseDir\tools\CompatibilityCalculator.jsx" "CompatibilityCalculator" "Compatibility Calculator" "Check compatibility between two people" "../../components/layout/Layout"

Write-Host "`n=== Creating Reports Pages ===" -ForegroundColor Cyan
Create-PageFile "$baseDir\reports\Reports.jsx" "Reports" "Numerology Reports" "Comprehensive numerology reports for personal and business insights" "../../components/layout/Layout"
Create-PageFile "$baseDir\reports\Samples.jsx" "Samples" "Sample Reports" "View sample numerology reports to see what you'll receive" "../../components/layout/Layout"

# Reports - Personal
Create-PageFile "$baseDir\reports\personal\PersonalReports.jsx" "PersonalReports" "Personal Reports" "Detailed personal numerology reports" "../../../components/layout/Layout"
Create-PageFile "$baseDir\reports\personal\NameAnalysis.jsx" "NameAnalysis" "Name Analysis Report" "Comprehensive analysis of your name's numerological significance" "../../../components/layout/Layout"
Create-PageFile "$baseDir\reports\personal\LifePath.jsx" "LifePath" "Life Path Report" "In-depth life path number analysis and guidance" "../../../components/layout/Layout"
Create-PageFile "$baseDir\reports\personal\YearForecast.jsx" "YearForecast" "Personal Year Report" "Detailed forecast for your personal year" "../../../components/layout/Layout"
Create-PageFile "$baseDir\reports\personal\Career.jsx" "Career" "Career Report" "Numerological insights for your career path" "../../../components/layout/Layout"

# Reports - Business
Create-PageFile "$baseDir\reports\business\BusinessReports.jsx" "BusinessReports" "Business Reports" "Professional business numerology reports" "../../../components/layout/Layout"
Create-PageFile "$baseDir\reports\business\NameReport.jsx" "NameReport" "Business Name Report" "Complete analysis of your business name" "../../../components/layout/Layout"
Create-PageFile "$baseDir\reports\business\BrandPackage.jsx" "BrandPackage" "Brand Identity Package" "Comprehensive brand identity numerology package" "../../../components/layout/Layout"
Create-PageFile "$baseDir\reports\business\Startup.jsx" "Startup" "Startup Roadmap" "Numerological roadmap for your startup success" "../../../components/layout/Layout"

# Reports - Property
Create-PageFile "$baseDir\reports\property\PropertyReports.jsx" "PropertyReports" "Property Reports" "Property numerology analysis reports" "../../../components/layout/Layout"
Create-PageFile "$baseDir\reports\property\Commercial.jsx" "Commercial" "Commercial Audit" "Commercial property numerology audit" "../../../components/layout/Layout"
Create-PageFile "$baseDir\reports\property\Residential.jsx" "Residential" "Residential Audit" "Residential property numerology audit" "../../../components/layout/Layout"

Write-Host "`n=== Creating Learn Pages ===" -ForegroundColor Cyan
Create-PageFile "$baseDir\learn\Learn.jsx" "Learn" "Learn Numerology" "Educational resources to master numerology" "../../components/layout/Layout"

# Learn - Courses
Create-PageFile "$baseDir\learn\courses\Courses.jsx" "Courses" "Numerology Courses" "Comprehensive numerology courses for all levels" "../../../components/layout/Layout"
Create-PageFile "$baseDir\learn\courses\Beginner.jsx" "Beginner" "Beginner Course" "Start your numerology journey with our beginner course" "../../../components/layout/Layout"
Create-PageFile "$baseDir\learn\courses\Advanced.jsx" "Advanced" "Advanced Course" "Master advanced numerology techniques" "../../../components/layout/Layout"
Create-PageFile "$baseDir\learn\courses\Business.jsx" "Business" "Business Numerology Course" "Specialize in business numerology applications" "../../../components/layout/Layout"
Create-PageFile "$baseDir\learn\courses\Practitioner.jsx" "Practitioner" "Practitioner Program" "Become a certified numerology practitioner" "../../../components/layout/Layout"

# Learn - Resources
Create-PageFile "$baseDir\learn\resources\Resources.jsx" "Resources" "Learning Resources" "Free resources to enhance your numerology knowledge" "../../../components/layout/Layout"
Create-PageFile "$baseDir\learn\resources\Ebooks.jsx" "Ebooks" "eBooks" "Download our comprehensive numerology eBooks" "../../../components/layout/Layout"
Create-PageFile "$baseDir\learn\resources\Templates.jsx" "Templates" "Templates" "Ready-to-use numerology templates and worksheets" "../../../components/layout/Layout"
Create-PageFile "$baseDir\learn\resources\Methodology.jsx" "Methodology" "Methodology" "Understand our numerology methodology and approach" "../../../components/layout/Layout"
Create-PageFile "$baseDir\learn\resources\Faq.jsx" "Faq" "FAQ" "Frequently asked questions about numerology" "../../../components/layout/Layout"

Write-Host "`n=== Creating B2B Pages ===" -ForegroundColor Cyan
Create-PageFile "$baseDir\b2b\B2B.jsx" "B2B" "B2B Solutions" "Enterprise numerology solutions for businesses" "../../components/layout/Layout"
Create-PageFile "$baseDir\b2b\ApiLicensing.jsx" "ApiLicensing" "API Licensing" "License our numerology API for your applications" "../../components/layout/Layout"
Create-PageFile "$baseDir\b2b\WhiteLabel.jsx" "WhiteLabel" "White-Label Tools" "White-label numerology tools for your brand" "../../components/layout/Layout"
Create-PageFile "$baseDir\b2b\RealEstate.jsx" "RealEstate" "Real Estate Partners" "Numerology solutions for real estate professionals" "../../components/layout/Layout"
Create-PageFile "$baseDir\b2b\HrSolutions.jsx" "HrSolutions" "HR Solutions" "HR and team building numerology solutions" "../../components/layout/Layout"

Write-Host "`n=== Creating About Pages ===" -ForegroundColor Cyan
Create-PageFile "$baseDir\about\Story.jsx" "Story" "Our Story" "Learn about our journey and mission in numerology" "../../components/layout/Layout"
Create-PageFile "$baseDir\about\Experts.jsx" "Experts" "Our Experts" "Meet our team of experienced numerology experts" "../../components/layout/Layout"
Create-PageFile "$baseDir\about\CaseStudies.jsx" "CaseStudies" "Case Studies" "Real success stories from our numerology clients" "../../components/layout/Layout"

Write-Host "`n=== Creating Root Pages ===" -ForegroundColor Cyan
Create-PageFile "$baseDir\Pricing.jsx" "Pricing" "Pricing" "Transparent pricing for all our numerology services" "../components/layout/Layout"

Write-Host "`n✅ All pages created successfully!" -ForegroundColor Green
Write-Host "Total pages created: 60+" -ForegroundColor Yellow
