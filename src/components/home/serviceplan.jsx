import React from "react";

// Shared Button Component
const Button = ({ text, bgColor = "bg-blue-600", textColor = "text-white", className = "" }) => (
  <button
    className={`px-6 py-2 rounded-full font-semibold text-lg font-dm-sans tracking-tight ${bgColor} ${textColor} ${className}`}
  >
    {text}
  </button>
);

// Reusable Pricing Card Component
const PricingCard = ({
    title,
    price,
    period = "/week",
    features,
    buttonText = "Get Started →",
    isPopular = false,
    bgColor = "bg-white",
    borderColor = "border-blue-600",
  }) => (
    <div
      className={`relative max-w-[30%] flex flex-col gap-6 p-8 rounded-3xl border-2 ${borderColor} ${bgColor}`}
    >
      <div className="flex flex-col items-start gap-8 w-full">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-3xl font-semibold font-dm-sans text-primary">{title}</h3>
          {isPopular && (
            <span className="bg-blue-100 text-primary text-sm font-medium px-4 py-1 rounded-full border border-blue-600">
              Popular
            </span>
          )}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold font-dm-sans text-primary">{price}</span>
          <span className="text-2xl font-bold font-dm-sans text-primary">{period}</span>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-y dark:bg-gray-700" />
      </div>
      <ul className="flex flex-col gap-4 w-full flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <img src="assets/images/check_icon.svg" alt="Check" className="w-3 h-3 mt-1" />
            <span className="text-primary text-lg font-medium font-dm-sans">{feature}</span>
          </li>
        ))}
      </ul>
      <Button text={buttonText} />
    </div>
  );

// Main Pricing Section Component
const Serviceplan = () => {
  const pricingPlans = [
    {
      title: "April Promo",
      price: "$35",
      features: [
        "Curated jobs from 1M+ listings, refreshed every 48 hours",
        "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
        "Need more? Add extra apps for just $1.5 each",
        "Your own dedicated application analyst",
        "Personalized with up to 10 filters & 5 job titles",
      ],
    },
    {
      title: "Starter",
      price: "$50",
      isPopular: true,
      bgColor: "bg-blue-50",
      features: [
        "All the perks of the Promo Plan, plus:",
        "Resume review & story-focused feedback",
        "Dedicated search specialist",
        "Up to 50 job apps/week",
        "Extra apps at $1.5 each",
        "Analyst support within 6 hours (SLA/PST hours)",
      ],
    },
    {
      title: "Plus",
      price: "$100",
      features: [
        "Everything in Starter, with more muscle:",
        "Up to 75 apps/week",
        "Apply to 15 job titles",
        "Analyst + full application team on Pacific hours",
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col items-start gap-28 px-4 py-8">
      <h2 className="text-4xl font-semibold font-dm-sans text-primary">
        Job Application Service Plans
      </h2>
      <div className="flex flex-row justify-start gap-12 w-full">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Serviceplan;