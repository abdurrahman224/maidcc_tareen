import heroImg from "../assets/heroothers.webp";

export const servicesData = {
  "maid-visa": {
    hero: {
      title: "Get Your Maid Visa in 7 Days",
      subtitle: "No Deposit. Fully Online. Stress-Free Process.",
      image: heroImg
    },
    pricing: [
      {
        title: "Standard Maid Visa",
        subtitle: "AED 8,500 /year",
        btnText: "Apply For Visa",
        features: [
          "Visa issuance",
          "Emirates ID Processing",
          "Medical test",
          "Typing & documentation",
          "PRO Services Support"
        ]
      },
      {
        title: "Fast Maid Visa",
        subtitle: "AED 10,950 /year",
        btnText: "Get Fast Visa",
        features: [
          "Everything in Standard",
          "Priority Visa Issuance",
          "Priority Emirates ID",
          "Priority Medical",
          "Dedicated Account Manager",
          "VIP Support Access"
        ],
        highlight: true
      }
    ],
    comparison: [
      { category: "Cost", us: "AED 8,500 - AED 10,950", them: "AED 12,000 - AED 15,000" },
      { category: "Hassles for you", us: "Pay online in 5 minutes", them: "Visit centers and wait in line 5 times" },
      { category: "Documents required", us: "Maid passport & photo through Whatsapp", them: "Maid passport, photo, sponsor passport, visa, EID, salary cert, Ejari & marriage attestation" },
      { category: "Visa issuance", us: "7 days", them: "30 days" },
      { category: "Salary transfer", us: "Automatic monthly transfer", them: "Manual cash transfer" },
      { category: "Gratuity & Ticket", us: "Included by maids.cc", them: "You pay for it" },
      { category: "Travel Documents", us: "Free Complete Travel Visa Preparation including NOC", them: "You prepare it" }
    ]
  },
  "full-time-maid": {
    hero: {
      title: "Hire a Full-Time Maid in Days",
      subtitle: "Live-in or live-out. Fully managed. No stress. No paperwork.",
      image: heroImg
    },
    pricing: [
      {
        title: "Get a Full-time Maid in your home",
        subtitle: "AED 2,980 /month",
        btnText: "Select Maid",
        features: [
          "Monthly salary included",
          "Visa, Emirates ID, Medical & insurance included",
          "1 flight ticket home guaranteed",
          "24/7 dedicated support & free replacements",
          "Fully Managed by maids.cc zero hassle"
        ],
        highlight: true
      }
    ],
    comparison: [
      { category: "Money Back Guarantee", us: "7-day full refund", them: "No refund whatsoever" },
      { category: "Maid Availability", us: "200+ available maids, immediate hire replacements", them: "Very few maids available to choose from" },
      { category: "Payment Structure", us: "Pay monthly, zero you hired the right maid, Premium AED 500/m with cheap extra plan", them: "Huge upfront payment. Be requested to pay 25,000 AED to 35,000 AED fees and agency fees" },
      { category: "Hiring Process", us: "10+ selected/top choice over Whatsapp", them: "At least 3 visits required for CV screening and shortlisting" },
      { category: "Cancellation Policy", us: "Cancel anytime, no fees", them: "30 days notice or lose money" },
      { category: "Customer Support", us: "24/7 Whatsapp support", them: "Limited hours. Call and wait." },
      { category: "Replacement Process", us: "Free+ immediate anytime", them: "Minimal or no return options" },
      { category: "Visa & Documents", us: "Free Complete Travel Visa Preparation including NOC", them: "1000 AED/Visa, 250 AED NOC deposit. You cover assistance" }
    ]
  },
  "home-cleaning": {
    hero: {
      title: "Professional Home Cleaning. Book in Minutes.",
      subtitle: "Experience the gold standard of home care. Vetted professionals, transparent pricing, and a seamless booking experience designed for your busy life.",
      image: heroImg
    },
    pricing: [
      {
        title: "Standard Clean",
        subtitle: "AED 39 /hour",
        btnText: "Select Plan",
        features: [
          "Dusting & wiping",
          "Floor cleaning",
          "General tidying"
        ]
      },
      {
        title: "Deep Clean",
        subtitle: "AED 59 /hour",
        btnText: "Select Plan",
        features: [
          "Everything in standard",
          "Inside cabinets & fridge",
          "Interior windows",
          "Detailed Bathroom Cleaning"
        ],
        highlight: true
      },
      {
        title: "Move-in/Out",
        subtitle: "AED 1,980 /job",
        btnText: "Select Plan",
        features: [
          "Empty home deep clean",
          "Appliance interior",
          "Baseboards & doors",
          "Heavy duty scrubbing"
        ]
      }
    ],
    comparison: [
      { category: "Money Back Guarantee", us: "Full refund if not satisfied", them: "Limited refunds" },
      { category: "Maid Availability", us: "100+ vetted professionals available immediately", them: "Workers assigned arbitrarily by current schedules" },
      { category: "Cancellation & Rescheduling Policies", us: "Reschedule or cancel anytime, no fees", them: "Late notice fees up to full charges" },
      { category: "Hiring Process", us: "5-minute booking process over Whatsapp. Fast to schedule", them: "Lengthy forms, filling. Wait for a reply" },
      { category: "Included Extras Guarantee", us: "Cleaning, basic care, attention to detail, daily spotless cleaning solutions", them: "Limited scope approach" },
      { category: "Insurance & Docs", us: "Protecting, filings, renewals, visas, and more for peace of mind", them: "Additional charges applied" }
    ]
  }
};
