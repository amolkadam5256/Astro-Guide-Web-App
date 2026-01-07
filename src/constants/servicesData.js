import {
  User,
  Map,
  Calendar,
  Phone,
  Home,
  Users,
  Briefcase,
  Settings,
  Zap,
  Target,
  Clock,
  ShieldCheck,
  FileText,
  Search,
  MessageSquare,
  BarChart3,
  TrendingUp,
  Gem,
  CheckCircle2,
  Star,
  MessageCircle,
} from "lucide-react";

export const SERVICES_DATA = {
  "/services": {
    hero: {
      title: "Holistic Numerology Solutions",
      subtitle:
        "Scientific analysis across personal, professional, and environmental dimensions of your life.",
      authority: "Premier Numerology Consultation",
      ctaLink: "/contact",
      ctaText: "Book Your Session",
    },
    explanation: {
      title: "Comprehensive Guidance",
      description: [
        "Numerology is more than just numbers; it's a language of vibrations that influences every aspect of human experience. From your birth date to the name of your company, every numerical value carries a specific energy frequency.",
        "Our comprehensive services are designed to decode these frequencies, providing you with a roadmap for success, harmony, and purposeful growth in an increasingly complex world.",
      ],
      highlights: [
        "Personal Alignment",
        "Business Growth",
        "Property Harmony",
        "Expert Guidance",
      ],
      symbol: "01",
    },
    deliverables: [
      {
        icon: User,
        title: "Personal Insights",
        desc: "Deep dive into your personality traits, life purpose, and karmic lessons.",
      },
      {
        icon: Briefcase,
        title: "Business Strategy",
        desc: "Optimize brand names, launch dates, and team dynamics for maximum ROI.",
      },
      {
        icon: Home,
        title: "Property Audits",
        desc: "Align your living and working spaces with supportive numerical vibrations.",
      },
    ],
    examples: [
      {
        scenario: "Individual feeling stuck in their career despite hard work.",
        resolution:
          "Name vibration alignment unlocked hidden opportunities and improved professional perception.",
      },
      {
        scenario: "New startup struggling to gain brand recognition.",
        resolution:
          "Strategic brand name selection based on owner's numbers led to increased market trust.",
      },
    ],
    whoItsFor: [
      "Ambitious Professionals",
      "Conscious Entrepreneurs",
      "New Homeowners",
      "Individuals seeking clarity",
    ],
    finalCTA: {
      title: "Begin Your Transformation",
      subtitle: "Choose the path that resonates with your current needs.",
      primaryButton: "View All Services",
    },
  },

  // PERSONAL NUMEROLOGY
  "/services/personal": {
    hero: {
      title: "Personal Numerology Mastery",
      subtitle:
        "Discover the hidden blueprint of your identity and destiny through your unique numbers.",
      authority: "Self-Discovery Analysis",
      ctaText: "Start My Journey",
    },
    explanation: {
      title: "The Personal Blueprint",
      description: [
        "Your life is not a series of random events. It is a carefully orchestrated journey defined by the core numbers present at your birth and expressed through your name.",
        "Our personal numerology services help you understand your primary strengths, navigate life's challenges, and align your daily actions with your higher purpose.",
      ],
      highlights: [
        "Core Number Analysis",
        "Life Timing",
        "Relationship Dynamics",
        "Self-Awareness",
      ],
      symbol: "09",
    },
    deliverables: [
      {
        icon: FileText,
        title: "Destiny Report",
        desc: "A comprehensive PDF report detailing your core numbers and their implications.",
      },
      {
        icon: Target,
        title: "Action Plan",
        desc: "Practical steps to leverage your strengths and mitigate numerical weaknesses.",
      },
      {
        icon: MessageSquare,
        title: "Guidance Session",
        desc: "Brief interpretation session to clarify complex aspects of your reading.",
      },
    ],
    examples: [
      {
        scenario:
          "Client confused about their life purpose during a mid-life crisis.",
        resolution:
          "Detailed Life Path analysis provided clarity on natural talents and optimal career paths.",
      },
      {
        scenario: "Person experiencing recurring relationship patterns.",
        resolution:
          "Compatibility report highlighted karmic lessons and suggested behavioral adjustments.",
      },
    ],
    whoItsFor: [
      "Truth Seekers",
      "Growth-Oriented Individuals",
      "Parents planning for children",
      "Anyone at a crossroad",
    ],
    finalCTA: {
      title: "Unlock Your Potential",
      subtitle: "The answers you seek are coded within your own identity.",
      primaryButton: "Book Personal Consultation",
    },
  },

  "/services/personal/name-analysis": {
    hero: {
      title: "Name Analysis & Correction",
      subtitle:
        "Align your name's vibration with your birth data for effortless success.",
      authority: "Vibrational Realignment",
    },
    explanation: {
      title: "Vibrational Harmony",
      description: [
        "Your name is the most repeated sound in your life. It creates a vibrational field that either supports or hinders your growth based on its compatibility with your core numbers.",
        "We analyze the spelling and numerical value of your name to ensure it resonates harmoniously with your Life Path and Destiny numbers.",
      ],
      highlights: [
        "Spelling Optimization",
        "Signature Analysis",
        "Lucky Initials",
        "Public Resonance",
      ],
      symbol: "ABC",
    },
    deliverables: [
      {
        icon: Search,
        title: "Phonetic Audit",
        desc: "Analysis of how your name's sound influences public perception.",
      },
      {
        icon: CheckCircle2,
        title: "Correction Strategy",
        desc: "Specific spelling adjustments to enhance your success frequency.",
      },
      {
        icon: Star,
        title: "Signature Guide",
        desc: "Recommendations for a signature that projects confidence and authority.",
      },
    ],
    examples: [
      {
        scenario: "Professional whose name had a '16' karmic debt vibration.",
        resolution:
          "Subtle spelling change shifted the energy to '1', leading to better leadership recognition.",
      },
      {
        scenario: "Aspiring artist struggling to get their brand noticed.",
        resolution:
          "Adopted a stage name aligned with their Destiny Number, resulting in higher engagement.",
      },
    ],
    whoItsFor: ["Job Seekers", "Public Figures", "Students", "Entrepreneurs"],
    finalCTA: {
      title: "Update Your Identity",
      subtitle:
        "Small changes in spelling can lead to massive shifts in results.",
      primaryButton: "Analyze My Name",
    },
  },

  "/services/personal/life-path": {
    hero: {
      title: "Life Path Analysis",
      subtitle:
        "Deep-dive into your soul's purpose and the major themes of your life journey.",
      authority: "Soul Blueprint Reading",
    },
    explanation: {
      title: "Soul Journey Decoding",
      description: [
        "The Life Path number is the most significant number in your chart. It reveals the path you were born to walk and the lessons you are here to learn.",
        "Our analysis goes beyond basic definitions to provide a secondary and tertiary level of insight into your life's 'Master Plan'.",
      ],
      highlights: [
        "Core Purpose",
        "Innate Talents",
        "Obstacle Identification",
        "Spiritual Growth",
      ],
      symbol: "33",
    },
    deliverables: [
      {
        icon: Map,
        title: "Life Roadmap",
        desc: "Detailed breakdown of the three major phases of your life.",
      },
      {
        icon: Zap,
        title: "Power Periods",
        desc: "Identification of years where your Life Path energy is strongest.",
      },
      {
        icon: ShieldCheck,
        title: "Karmic Lessons",
        desc: "Understanding the challenges you are meant to overcome.",
      },
    ],
    examples: [
      {
        scenario:
          "A high-achiever feeling a sense of emptiness despite success.",
        resolution:
          "Realized their career was misaligned with their Life Path 7 soul mission for research/spirituality.",
      },
      {
        scenario: "Someone constantly facing the same financial hurdles.",
        resolution:
          "Identified Life Path 4 challenges and implemented structural changes to overcome them.",
      },
    ],
    whoItsFor: [
      "Spiritual Seekers",
      "Career Switchers",
      "Personal Growth Enthusiasts",
      "Youth starting their journey",
    ],
    finalCTA: {
      title: "Discover Your Path",
      subtitle: "Stop wandering and start walking with purpose.",
      primaryButton: "Decode My Path",
    },
  },

  "/services/personal/year-forecast": {
    hero: {
      title: "Personal Year Forecast",
      subtitle:
        "Understand the current cycle of your life and plan your major moves with precision.",
      authority: "Strategic Timing Guide",
    },
    explanation: {
      title: "Cyclical Wisdom",
      description: [
        "Life moves in 9-year cycles. Every year has a specific theme—some are for action, some for introspection, some for harvesting, and some for rest.",
        "A Year Forecast helps you understand 'the weather' of your immediate future so you can prepare accordingly.",
      ],
      highlights: [
        "Month-by-Month Guide",
        "Key Focus Areas",
        "Critical Warning Dates",
        "Opportunity Windows",
      ],
      symbol: "2025",
    },
    deliverables: [
      {
        icon: Calendar,
        title: "12-Month Roadmap",
        desc: "Detailed guide for each month of your personal year.",
      },
      {
        icon: TrendingUp,
        title: "Growth Indicators",
        desc: "Strategic focus points for financial and personal growth.",
      },
      {
        icon: Clock,
        title: "Timing Strategy",
        desc: "When to launch, when to wait, and when to conclude.",
      },
    ],
    examples: [
      {
        scenario: "Entrepreneur wanting to launch a major startup.",
        resolution:
          "Analysis showed they were in a Year 9 (Conclusion); advised waiting for Year 1 (New Beginnings).",
      },
      {
        scenario: "Individual planning a major relocation.",
        resolution:
          "Identified a Year 5 (Change/Travel) as the perfect window for a smooth transition.",
      },
    ],
    whoItsFor: [
      "Decision Makers",
      "Strategic Planners",
      "Business Owners",
      "Anyone planning a major life change",
    ],
    finalCTA: {
      title: "Plan Your Year",
      subtitle:
        "Align your efforts with the universal flow for better results.",
      primaryButton: "Get My Forecast",
    },
  },

  "/services/personal/mobile-number": {
    hero: {
      title: "Mobile Number Analysis",
      subtitle:
        "Ensure your primary communication device carries the vibration of prosperity and connection.",
      authority: "Digital Contact Resonance",
    },
    explanation: {
      title: "Digital Energy Alignment",
      description: [
        "In the modern age, your phone number is a key identifier. Every time someone dials your number, a specific frequency is broadcasted into the universe.",
        "We analyze the total and sequential combinations of your mobile number to see if they attract opportunities or unwanted calls and obstacles.",
      ],
      highlights: [
        "Total Value Impact",
        "Sequential Analysis",
        "Luck Multipliers",
        "Negative Pattern Cleansing",
      ],
      symbol: "DIG",
    },
    deliverables: [
      {
        icon: Phone,
        title: "Number Audit",
        desc: "Detailed analysis of your current mobile number's energy.",
      },
      {
        icon: Target,
        title: "Selection Guide",
        desc: "Specific criteria for choosing a new, high-vibration number.",
      },
      {
        icon: Gem,
        title: "Prosperity Codes",
        desc: "Identification of lucky sequences for your specific birth data.",
      },
    ],
    examples: [
      {
        scenario: "Sales professional struggling to close deals via phone.",
        resolution:
          "Switching to a '3' vibration mobile number improved persuasive communication and closing rate.",
      },
      {
        scenario:
          "Business owner receiving constant wrong calls and nuisance complaints.",
        resolution:
          "Identified '88' patterns in mobile number and advised a change to '6' for better harmony.",
      },
    ],
    whoItsFor: [
      "Sales & Marketing Pros",
      "Public Figures",
      "Business Owners",
      "Individuals facing communication blocks",
    ],
    finalCTA: {
      title: "Upgrade Your Signal",
      subtitle:
        "Your phone number is more than digits; it's a magnet for energy.",
      primaryButton: "Audit My Number",
    },
  },

  "/services/personal/house-number": {
    hero: {
      title: "House/Address Numerology",
      subtitle:
        "Analyze the energy of your space to ensure it supports the residents' well-being and prosperity.",
      authority: "Residential Vibrational Analysis",
    },
    explanation: {
      title: "Sacred Space Alignment",
      description: [
        "Your home is your sanctuary. The address or house number under which you live influences the energy of the household members.",
        "Certain house numbers are better for creative work, while others support family harmony or financial growth. We help you understand yours.",
      ],
      highlights: [
        "Address Decoding",
        "Resident Compatibility",
        "Space Energy Correction",
        "Prosperity Grids",
      ],
      symbol: "HOME",
    },
    deliverables: [
      {
        icon: Home,
        title: "Residential Audit",
        desc: "Comprehensive analysis of your current or potential home number.",
      },
      {
        icon: Zap,
        title: "Remedy Suite",
        desc: "Simple numerology-based remedies for incompatible addresses.",
      },
      {
        icon: ShieldCheck,
        title: "Harmony Plan",
        desc: "Strategies to align the space with the main breadwinner's numbers.",
      },
    ],
    examples: [
      {
        scenario:
          "Family experiencing health issues and frequent arguments after moving.",
        resolution:
          "Address audit revealed a clash between house number '4' and the family's '9' birth dates; remedies applied.",
      },
      {
        scenario: "Freelancer struggling with focus while working from home.",
        resolution:
          "Recommended a '3' vibration flat for creative flow during their next lease.",
      },
    ],
    whoItsFor: [
      "Home Buyers",
      "Renters",
      "Architects & Designers",
      "Families seeking harmony",
    ],
    finalCTA: {
      title: "Harmonize Your Home",
      subtitle:
        "Live in a space that nurtures your dreams and protects your peace.",
      primaryButton: "Check My House Number",
    },
  },

  "/services/personal/compatibility": {
    hero: {
      title: "Relationship Compatibility",
      subtitle:
        "Understand the synergy between your numbers and those of your partner, family, or friends.",
      authority: "Relational Dynamics Audit",
    },
    explanation: {
      title: "Numerical Synergy",
      description: [
        "Relationships are a dance of vibrations. Compatibility isn't just about 'liking' someone; it's about how your core energies interact.",
        "We compare Life Path and Destiny numbers to identify areas of natural ease and potential friction points.",
      ],
      highlights: [
        "Core Match Analysis",
        "Communication Styles",
        "Conflict Resolution",
        "Growth Potential",
      ],
      symbol: "CO-",
    },
    deliverables: [
      {
        icon: Users,
        title: "Synergy Report",
        desc: "A detailed comparison of both individuals' numerological charts.",
      },
      {
        icon: MessageCircle,
        title: "Dynamics Map",
        desc: "Identification of potential triggers and supportive behaviors.",
      },
      {
        icon: Gem,
        title: "Bonding Guide",
        desc: "Recommended activities and periods for strengthening the bond.",
      },
    ],
    examples: [
      {
        scenario: "Couple planning for marriage but facing communication gaps.",
        resolution:
          "Highlighted the '1' vs '2' dynamic, providing tools for balanced decision-making.",
      },
      {
        scenario: "Business partners struggling with leadership roles.",
        resolution:
          "Identified overlapping '8' vibrations and restructured duties to avoid power struggles.",
      },
    ],
    whoItsFor: [
      "Couples",
      "Business Partners",
      "Family Members",
      "Collaborators",
    ],
    finalCTA: {
      title: "Enhance Your Bonds",
      subtitle:
        "Build relationships based on deep understanding, not just assumptions.",
      primaryButton: "Check Compatibility",
    },
  },

  // BUSINESS NUMEROLOGY
  "/services/business": {
    hero: {
      title: "Strategic Business Numerology",
      subtitle:
        "Leverage the power of numbers to build a brand that resonates with success and market authority.",
      authority: "Corporate Growth Consulting",
    },
    explanation: {
      title: "The Business Blueprint",
      description: [
        "In the competitive business landscape, every advantage counts. Business numerology is used by some of the most successful global brands to ensure their names and identities are energetically aligned with growth.",
        "From startups to established corporations, we provide scientific analysis to optimize brand names, launch dates, and corporate identity.",
      ],
      highlights: [
        "Brand Vibrational Audit",
        "Corporate Timing",
        "Logo Energy",
        "Team Alignment",
      ],
      symbol: "BIZ",
    },
    deliverables: [
      {
        icon: BarChart3,
        title: "Strategic Audit",
        desc: "Comprehensive analysis of existing brand assets and their performance.",
      },
      {
        icon: Briefcase,
        title: "Growth Roadmap",
        desc: "Step-by-step implementation guide for numerical alignment.",
      },
      {
        icon: TrendingUp,
        title: "Market Fit Guide",
        desc: "Aligning brand vibration with the target demographic's energy.",
      },
    ],
    examples: [
      {
        scenario:
          "Tech startup with a name that sounded great but failed to gain traction.",
        resolution:
          "Audit showed a '7' (Introspective) name for a '1' (Fast-paced) product; corrected to a '3' vibration.",
      },
      {
        scenario: "Established business facing stagnation after 20 years.",
        resolution:
          "Rebranded under a name aligned with current market cycles, resulting in a 25% revenue jump.",
      },
    ],
    whoItsFor: [
      "CEOs & Founders",
      "Marketing Agencies",
      "Brand Consultants",
      "Serial Entrepreneurs",
    ],
    finalCTA: {
      title: "Scale Your Vision",
      subtitle:
        "Build a business that isn't just profitable, but intrinsically successful.",
      primaryButton: "Book Business Audit",
    },
  },

  "/services/business/company-naming": {
    hero: {
      title: "Company Naming Strategy",
      subtitle:
        "Create a powerful first impression with a name that carries the frequency of leadership and trust.",
      authority: "Brand Naming Authority",
    },
    explanation: {
      title: "Engineering the Brand",
      description: [
        "A company name is more than a creative choice; it's a foundational vibration. It dictates how the market perceives your value and how efficiently your team projects authority.",
        "We use advanced Chaldean and Pythagorean systems to engineer names that are both creative and numerically potent.",
      ],
      highlights: [
        "Phonetic Precision",
        "Industry Relevance",
        "Owner Compatibility",
        "Global Appeal",
      ],
      symbol: "INC",
    },
    deliverables: [
      {
        icon: Search,
        title: "Name Options",
        desc: "3-5 curated, numerically optimized name suggestions.",
      },
      {
        icon: ShieldCheck,
        title: "Vibration Score",
        desc: "Detailed breakdown of the 'Success Potential' of chosen names.",
      },
      {
        icon: Settings,
        title: "Implementation Kit",
        desc: "Guidelines for usage across digital and physical platforms.",
      },
    ],
    examples: [
      {
        scenario: "Consultancy firm choosing between three possible names.",
        resolution:
          "Identified one name as a perfect '1' vibration for leadership, which eventually became the market leader.",
      },
      {
        scenario: "E-commerce store wanting a 'viral' brand name.",
        resolution:
          "Developed a name with '5' (Movement) energy, leading to high social sharing and growth.",
      },
    ],
    whoItsFor: [
      "New Founders",
      "Serial Innovators",
      "Product Managers",
      "Venture Capitalists",
    ],
    finalCTA: {
      title: "Name Your Success",
      subtitle:
        "Small shifts in your brand name can redefine your market position.",
      primaryButton: "Start Naming Process",
    },
  },

  "/services/business/brand-identity": {
    hero: {
      title: "Brand Identity Alignment",
      subtitle:
        "Harmonize your visual identity and messaging with the core purpose of your business.",
      authority: "Visual-Vibrational Synergy",
    },
    explanation: {
      title: "Cohesive Branding",
      description: [
        "Identity goes beyond names. It includes your tagline, color palette, and the dates you choose for major brand announcements.",
        "We ensure all these elements work together to create a singular, powerful frequency that attracts your ideal clients effortlessly.",
      ],
      highlights: [
        "Tagline Optimization",
        "Logo Symbolism",
        "Color Frequency",
        "Launch Sequence",
      ],
      symbol: "ID",
    },
    deliverables: [
      {
        icon: Zap,
        title: "Identity Audit",
        desc: "Analysis of current logos and taglines for vibrational consistency.",
      },
      {
        icon: Gem,
        title: "Creative Brief",
        desc: "Numerological guidelines for your design and marketing teams.",
      },
      {
        icon: Target,
        title: "Persona Match",
        desc: "Ensuring brand frequency matches the desired customer segment.",
      },
    ],
    examples: [
      {
        scenario: "Luxury brand struggling to attract high-net-worth clients.",
        resolution:
          "Adjusted brand tagline and launch dates to '8' (Power/Wealth) vibrations; lead quality increased.",
      },
      {
        scenario: "Wellness brand feeling too 'corporate'.",
        resolution:
          "Introduced '6' (Care/Service) vibrational elements in their messaging for a softer, trustworthy feel.",
      },
    ],
    whoItsFor: [
      "Marketing Directors",
      "Creative Agencies",
      "Solopreneurs",
      "Established Brands rebranding",
    ],
    finalCTA: {
      title: "Refine Your Identity",
      subtitle:
        "Make your brand unforgettable by making it energetically sound.",
      primaryButton: "Align My Brand",
    },
  },

  "/services/business/startup-naming": {
    hero: {
      title: "Startup Naming & Launch",
      subtitle:
        "Specially tailored naming solutions for fast-growth, tech-heavy, and innovative new ventures.",
      authority: "Innovation Naming Specialist",
    },
    explanation: {
      title: "Growth-Ready Naming",
      description: [
        "Startups face unique challenges—rapid scaling, investor relations, and high-velocity entry. Your name needs to be flexible yet strong.",
        "We focus on '1' and '5' vibrations that support innovation and expansion, ensuring your startup starts with its best numerical foot forward.",
      ],
      highlights: [
        "Scalability Analysis",
        "Digital Presence Fit",
        "Founder-Startup Synergy",
        "Early-Stage Luck",
      ],
      symbol: "🚀",
    },
    deliverables: [
      {
        icon: Zap,
        title: "Launch Blueprint",
        desc: "Optimal dates and times for your platform launch or funding round.",
      },
      {
        icon: FileText,
        title: "Startup Naming Docs",
        desc: "Selection of 'short-path' names optimized for digital SEO and memory.",
      },
      {
        icon: ShieldCheck,
        title: "Risk Mitigation",
        desc: "Analysis to avoid 'karmic debt' numbers in your legal entities.",
      },
    ],
    examples: [
      {
        scenario: "SaaS startup needing a short, punchy, and lucky name.",
        resolution:
          "Selected a 4-letter name with a '1' total, leading to immediate investor interest.",
      },
      {
        scenario:
          "Fintech company worried about trust and security perception.",
        resolution:
          "Verified name against '4' and '8' vibrations for an aura of stability and institutional trust.",
      },
    ],
    whoItsFor: [
      "Tech Founders",
      "Incubator Participants",
      "App Developers",
      "Disruptive Innovators",
    ],
    finalCTA: {
      title: "Launch With Power",
      subtitle:
        "Give your startup the energetic edge it needs to disrupt the market.",
      primaryButton: "Naming Consultation",
    },
  },

  "/services/business/timing-strategy": {
    hero: {
      title: "Business Timing Strategy",
      subtitle:
        "Never launch a product or sign a contract during a numerically 'dead' period again.",
      authority: "Corporate Timing Analyst",
    },
    explanation: {
      title: "Temporal Advantage",
      description: [
        "When you do something is often more important than what you do. Every day, month, and year has a specific 'business climate'.",
        "We identify your 'Lucky Windows' for expansion, hiring, fundraising, and mergers to ensure the universe is at your back.",
      ],
      highlights: [
        "Launch Optimization",
        "Contractual Timing",
        "Hiring Cycles",
        "Fiscal Year Planning",
      ],
      symbol: "TIME",
    },
    deliverables: [
      {
        icon: Clock,
        title: "Timing Calendar",
        desc: "A 6-month customized calendar of green, yellow, and red days.",
      },
      {
        icon: Calendar,
        title: "Milestone Guide",
        desc: "The best months for specific business actions (selling, buying, pivoting).",
      },
      {
        icon: TrendingUp,
        title: "Expansion Forecast",
        desc: "Identifying the best years for high-risk growth.",
      },
    ],
    examples: [
      {
        scenario: "Retailer planning a nationwide store rollout.",
        resolution:
          "Shifted the rollout date by 3 weeks to hit a '3' (Abundance) day, resulting in record opening sales.",
      },
      {
        scenario: "Founder signing a partnership agreement.",
        resolution:
          "Avoided a '9' (Ending) day signature, preserving the partnership for long-term growth.",
      },
    ],
    whoItsFor: [
      "Operations Managers",
      "Entrepreneurs",
      "Project Leads",
      "Investors",
    ],
    finalCTA: {
      title: "Master Your Timing",
      subtitle: "Stop fighting the currents and start sailing with them.",
      primaryButton: "Get Timing Strategy",
    },
  },

  "/services/business/team-compatibility": {
    hero: {
      title: "Team Compatibility Audit",
      subtitle:
        "Build high-performance teams by aligning the numerical profiles of your key personnel.",
      authority: "Corporate Human Dynamics",
    },
    explanation: {
      title: "Engineered Collaboration",
      description: [
        "Friction between key executives can sink even the best brands. Team numerology helps you understand the natural dynamics between your leaders.",
        "We analyze how individual Life Paths interact, identifying potential power struggles before they happen and highlighting complementary skill sets.",
      ],
      highlights: [
        "Executive Compatibility",
        "Departmental Harmony",
        "Conflict Forecasting",
        "Role Optimization",
      ],
      symbol: "TEAM",
    },
    deliverables: [
      {
        icon: Users,
        title: "Dynamics Matrix",
        desc: "A visual map of team interactions and collaboration potential.",
      },
      {
        icon: Settings,
        title: "Leadership Guide",
        desc: "Custom management tips for different numerical profiles.",
      },
      {
        icon: ShieldCheck,
        title: "Role Audit",
        desc: "Verifying if managers are in the right roles based on their Destiny numbers.",
      },
    ],
    examples: [
      {
        scenario: "CEO and CTO constantly clashing over product direction.",
        resolution:
          "Identified '1' vs '1' leadership dominance; adjusted roles to give each clear 'sovereign' zones.",
      },
      {
        scenario: "Sales team underperforming despite high talent.",
        resolution:
          "Restructured team to pair '3' (Communicators) with '8' (Closers) for a 30% boost in efficiency.",
      },
    ],
    whoItsFor: [
      "HR Directors",
      "Department Heads",
      "Company Owners",
      "Managers",
    ],
    finalCTA: {
      title: "Optimize Your Team",
      subtitle:
        "Turn team friction into team fire by understanding the numbers that drive them.",
      primaryButton: "Book Team Audit",
    },
  },

  // PROPERTY NUMEROLOGY
  "/services/property": {
    hero: {
      title: "Property & Space Numerology",
      subtitle:
        "Ensure your physical environments support your physical health and financial growth.",
      authority: "Architectural Vastu-Numerology",
    },
    explanation: {
      title: "Energetic Architecture",
      description: [
        "Your building is a living entity with its own numerical frequency. Whether it's a shop, a factory, or a home, the 'address energy' filters everything that happens within.",
        "We provide detailed audits to harmonize spaces with their intended purpose—wealth for business, and peace for home.",
      ],
      highlights: [
        "Land Vibration Audit",
        "Unit Number Alignment",
        "Entrance Energy",
        "Prosperity Flow",
      ],
      symbol: "PROP",
    },
    deliverables: [
      {
        icon: Map,
        title: "Site Insight",
        desc: "Analysis of the land's vibration and history before you build.",
      },
      {
        icon: ShieldCheck,
        title: "Remedy Guide",
        desc: "Non-destructive numerology remedies for existing spaces.",
      },
      {
        icon: Gem,
        title: "Selection Criteria",
        desc: "What to look for in your next property investment.",
      },
    ],
    examples: [
      {
        scenario: "Commercial complex with high vacancy rates.",
        resolution:
          "Applied entrance energy remedies; vacancy dropped from 40% to 5% in six months.",
      },
      {
        scenario: "Homeowner feeling drained and anxious in their new house.",
        resolution:
          "Audit revealed the house was a '7' (Solitude) while they needed a '6' (Family) vibration.",
      },
    ],
    whoItsFor: [
      "Real Estate Investors",
      "Business Owners",
      "Interior Designers",
      "Architects",
    ],
    finalCTA: {
      title: "Align Your Space",
      subtitle: "Success begins with the ground you stand on.",
      primaryButton: "Audit My Property",
    },
  },

  "/services/property/commercial": {
    hero: {
      title: "Commercial Property Audit",
      subtitle:
        "Optimize your retail, office, or industrial space for maximum customer flow and profitability.",
      authority: "Commercial Success Specialist",
    },
    explanation: {
      title: "Business Space Engineering",
      description: [
        "In commercial real estate, location is just one factor. The vibration of the unit number and the entrance direction can significantly impact footfall and staff productivity.",
        "We specialize in 'Asset Alignment'—ensuring your workplace energy matches your quarterly goals.",
      ],
      highlights: [
        "Footfall Optimization",
        "Wealth Corner Activation",
        "Inventory Energy",
        "Staff Retention Grids",
      ],
      symbol: "COM",
    },
    deliverables: [
      {
        icon: TrendingUp,
        title: "Commercial Roadmap",
        desc: "Detailed audit for multi-unit or large scale commercial spaces.",
      },
      {
        icon: Target,
        title: "Entrance Analysis",
        desc: "Specific recommendations for signage and entrance vibration.",
      },
      {
        icon: Zap,
        title: "Remedy Suite",
        desc: "Practical, subtle remedies that don't interfere with decor.",
      },
    ],
    examples: [
      {
        scenario: "Restaurant failing despite great food and location.",
        resolution:
          "Shifted the billing counter and adjusted the unit number vibration; became a local hotspot.",
      },
      {
        scenario: "Manufacturing unit facing frequent machinery breakdowns.",
        resolution:
          "Identified 'negative sequence' in plot number; applied stabilization remedies.",
      },
    ],
    whoItsFor: [
      "Shop Owners",
      "Industrialists",
      "Office Managers",
      "Developers",
    ],
    finalCTA: {
      title: "Boost Your Business",
      subtitle: "Your office should work as hard as you do.",
      primaryButton: "Audit Commercial Space",
    },
  },

  "/services/property/residential": {
    hero: {
      title: "Residential Space Audit",
      subtitle:
        "Create a home that supports every family member's health, studies, and emotional well-being.",
      authority: "Domestic Harmony Consultant",
    },
    explanation: {
      title: "Family Well-being",
      description: [
        "A home is more than a roof; it's a battery that recharges your life. If the house number doesn't resonate with the residents, exhaustion and conflict can occur.",
        "We help you turn your house into a 'Power Spot' that supports everyone who lives there.",
      ],
      highlights: [
        "Resident Match Audit",
        "Study Corner Alignment",
        "Sleep Quality Grids",
        "Entry/Exit Energy",
      ],
      symbol: "RES",
    },
    deliverables: [
      {
        icon: Home,
        title: "Home Harmony Report",
        desc: "Individual analysis for up to 4 family members in the space.",
      },
      {
        icon: ShieldCheck,
        title: "Protective Remedies",
        desc: "Techniques to block adjacent negative energies from nearby properties.",
      },
      {
        icon: Gem,
        title: "Decoration Guide",
        desc: "Numerical colors and symbols to enhance specific rooms.",
      },
    ],
    examples: [
      {
        scenario: "Child struggling with studies in a new home.",
        resolution:
          "Aligned study desk with their 'intellectual lucky number'; grades improved significantly.",
      },
      {
        scenario: "Couple experiencing sudden friction after years of harmony.",
        resolution:
          "Found the bedroom was in a 'clashing' sector of the house number; applied color remedies.",
      },
    ],
    whoItsFor: ["Young Families", "Retirees", "New Homeowners", "Renovators"],
    finalCTA: {
      title: "Secure Your Sanctuary",
      subtitle: "Your home should be your greatest source of strength.",
      primaryButton: "Audit Residential Space",
    },
  },

  "/services/property/opening-dates": {
    hero: {
      title: "Opening & Inauguration Timing",
      subtitle:
        "Start your new venture or move into your new home on a day that guarantees long-term success.",
      authority: "Muhurat & Timing Specialist",
    },
    explanation: {
      title: "Foundational Timing",
      description: [
        "The first moment you step into a new office or open your shop to the public is the 'Birth' of that venture. A weak birth chart can lead to a struggling business.",
        "We identify the 'Golden Window'—a precise date and time that aligns with both the property and the owner for maximum longevity.",
      ],
      highlights: [
        "Ribbon-Cutting Timing",
        "First Entry Muhurat",
        "Public Launch Cycles",
        "Ritual Timing Guidance",
      ],
      symbol: "OPEN",
    },
    deliverables: [
      {
        icon: Calendar,
        title: "Date Selection",
        desc: "3 optimal dates for your opening or move-in.",
      },
      {
        icon: Clock,
        title: "Precision Tithi",
        desc: "The exact 2-hour window (Lagna) for the primary event.",
      },
      {
        icon: Target,
        title: "First Action Guide",
        desc: "The most auspicious first activity to perform in the space.",
      },
    ],
    examples: [
      {
        scenario: "New corporate office opening with high expectations.",
        resolution:
          "Curated a '1' day opening; firm secured its largest contract within 30 days.",
      },
      {
        scenario: "Moving into a new home during a busy schedule.",
        resolution:
          "Pinned a 'Short-Window' muhurat that was convenient yet numerically powerful for peace.",
      },
    ],
    whoItsFor: [
      "New Business Owners",
      "Home Owners",
      "Project Managers",
      "Event Planners",
    ],
    finalCTA: {
      title: "Start Right",
      subtitle: "The way you start determines the way you finish.",
      primaryButton: "Select Opening Date",
    },
  },

  "/services/consultation": {
    hero: {
      title: "One-on-One Expert Consultations",
      subtitle:
        "Get direct access to senior numerologists for deep-dive analysis and personalized life strategy.",
      authority: "Premium Advisory Service",
    },
    explanation: {
      title: "Direct Human Insight",
      description: [
        "While reports are fantastic, a consultation allows for nuanced, real-time strategy. In these sessions, we look at the 'Total Picture' of your life.",
        "Our experts help you connect the dots between your career, relationships, and health using multiple numerological systems simultaneously.",
      ],
      highlights: [
        "Video/Audio Sessions",
        "Recorded Strategy",
        "Follow-up Support",
        "Deep Privacy",
      ],
      symbol: "LIVE",
    },
    deliverables: [
      {
        icon: MessageSquare,
        title: "60-Min Deep Dive",
        desc: "Concentrated session focused on your primary questions.",
      },
      {
        icon: FileText,
        title: "Summary Notes",
        desc: "Quick-reference sheet of the key findings and remedies discussed.",
      },
      {
        icon: Zap,
        title: "Immediate Action",
        desc: "Practical guidance you can implement the very same day.",
      },
    ],
    examples: [
      {
        scenario: "High-level executive facing a moral and career dilemma.",
        resolution:
          "Consultation revealed hidden karmic timing; advised a 3-month pause which saved their reputation.",
      },
      {
        scenario:
          "Individual feeling overwhelmed by a series of unfortunate events.",
        resolution:
          "Human-led analysis provided emotional reassurance and a clear escape route via simple number shifts.",
      },
    ],
    whoItsFor: [
      "Executives",
      "Public Figures",
      "Serious Seekers",
      "Anyone needing immediate clarity",
    ],
    finalCTA: {
      title: "Talk to an Expert",
      subtitle:
        "Sometimes the most complex problems just need a deep conversation.",
      primaryButton: "Schedule Consultation",
    },
  },
};
