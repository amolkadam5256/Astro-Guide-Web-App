# Page Generation Script
# This script creates all missing page files for the astrology website

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

# Services - Personal
Create-PageFile "$baseDir\services\personal\NameAnalysis.jsx" "NameAnalysis" "Name Analysis" "Discover the hidden meanings and vibrations in your name" "../../../components/layout/Layout"
Create-PageFile "$baseDir\services\personal\LifePath.jsx" "LifePath" "Life Path Analysis" "Understand your life's purpose and destiny through your birth date" "../../../components/layout/Layout"
Create-PageFile "$baseDir\services\personal\YearForecast.jsx" "YearForecast" "Personal Year Forecast" "Get insights into what the current year holds for you" "../../../components/layout/Layout"
Create-PageFile "$baseDir\services\personal\MobileNumber.jsx" "MobileNumber" "Mobile Number Analysis" "Optimize your mobile number for success and prosperity" "../../../components/layout/Layout"
Create-PageFile "$baseDir\services\personal\HouseNumber.jsx" "HouseNumber" "House/Address Number" "Ensure your home address supports your goals and wellbeing" "../../../components/layout/Layout"
Create-PageFile "$baseDir\services\personal\Compatibility.jsx" "Compatibility" "Compatibility Report" "Discover compatibility with partners, friends, and colleagues" "../../../components/layout/Layout"

# Services - Business
Create-PageFile "$baseDir\services\business\Business.jsx" "Business" "Business Numerology Services" "Transform your business with strategic numerology solutions" "../../../components/layout/Layout"
Create-PageFile "$baseDir\services\business\CompanyNaming.jsx" "CompanyNaming" "Company Naming" "Choose the perfect name for your company's success" "../../../components/layout/Layout"
Create-PageFile "$baseDir\services\business\BrandIdentity.jsx" "BrandIdentity" "Brand Identity" "Build a powerful brand identity through numerology" "../../../components/layout/Layout"
Create-PageFile "$baseDir\services\business\StartupNaming.jsx" "StartupNaming" "Startup Naming" "Launch your startup with a numerologically optimized name" "../../../components/layout/Layout"
Create-PageFile "$baseDir\services\business\TimingStrategy.jsx" "TimingStrategy" "Business Timing Strategy" "Choose the right timing for important business decisions" "../../../components/layout/Layout"
Create-PageFile "$baseDir\services\business\TeamCompatibility.jsx" "TeamCompatibility" "Team Compatibility" "Build harmonious and productive teams" "../../../components/layout/Layout"

# Services - Property
Create-PageFile "$baseDir\services\property\Property.jsx" "Property" "Property Numerology Services" "Enhance your property's energy and success potential" "../../../components/layout/Layout"
Create-PageFile "$baseDir\services\property\Commercial.jsx" "Commercial" "Commercial Property" "Optimize commercial properties for business success" "../../../components/layout/Layout"
Create-PageFile "$baseDir\services\property\Residential.jsx" "Residential" "Residential Property" "Create harmony in your residential spaces" "../../../components/layout/Layout"
Create-PageFile "$baseDir\services\property\OpeningDates.jsx" "OpeningDates" "Opening Dates" "Choose auspicious dates for property openings" "../../../components/layout/Layout"

# Services - Consultation
Create-PageFile "$baseDir\services\consultation\Consultation.jsx" "Consultation" "Consultation Services" "Get personalized guidance from expert numerologists" "../../../components/layout/Layout"
Create-PageFile "$baseDir\services\consultation\OneOnOne.jsx" "OneOnOne" "1-on-1 Session" "Private consultation sessions tailored to your needs" "../../../components/layout/Layout"
Create-PageFile "$baseDir\services\consultation\AnnualPlanning.jsx" "AnnualPlanning" "Annual Planning" "Plan your year ahead with numerological insights" "../../../components/layout/Layout"
Create-PageFile "$baseDir\services\consultation\Coaching.jsx" "Coaching" "Coaching Program" "Comprehensive coaching for personal transformation" "../../../components/layout/Layout"

# Services - Subscription
Create-PageFile "$baseDir\services\subscription\Subscription.jsx" "Subscription" "Subscription Services" "Stay connected with ongoing numerology support" "../../../components/layout/Layout"
Create-PageFile "$baseDir\services\subscription\Monthly.jsx" "Monthly" "Monthly Forecast" "Receive monthly numerology forecasts and guidance" "../../../components/layout/Layout"
Create-PageFile "$baseDir\services\subscription\Vip.jsx" "Vip" "VIP Coaching" "Exclusive VIP coaching and priority support" "../../../components/layout/Layout"
Create-PageFile "$baseDir\services\subscription\Community.jsx" "Community" "Community Access" "Join our exclusive numerology community" "../../../components/layout/Layout"

Write-Host "`nAll service pages created successfully!" -ForegroundColor Cyan
