import React from "react";

// SponsorshipCard Component for Reusability
const SponsorshipCard = ({ title, price, benefits, discount, badge }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Card Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-800 p-6 text-white relative">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-xl mt-2">{price}</p>

        {badge && (
          <span className="bg-gray-800 text-white text-sm px-2 py-1 rounded-full absolute top-4 right-4">
            {badge}
          </span>
        )}

        {discount && (
          <div className="absolute top-1 left-1">
            <span className="bg-red-500 text-white text-xs px-2 py-1  rounded-full">
              {discount}
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6">
        <p className="text-gray-700 text-base">
          {benefits.map((benefit, index) => (
            <span key={index}>
              - {benefit}
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

const SponsorshipPackages = () => {
  const packages = [
    {
      title: "Platinum Sponsor",
      price: "RS 10 Lacs",
      benefits: [
        "Promotional video provided...",
        "Location on Participation Certificates.",
        "Entrance dimensions: 8 x 3 meter.",
        "Accommodation for up to 25 representatives from the company.",
        "Capacity of 100+ participants for recruitment activities.",
        "Two 1.5-hour Workshops in March 2025.",
        "Exclusive 10ft x 25ft banner space.",
        "Event name after Company Name.",
        "Extensive publicity on FCIT + PU website, social media, electronic/print media."
      ],
      discount: "Alumni Discount 33% on All Packages",
      badge: "Platinum"
    },
    {
      title: "Gold Sponsor",
      price: "RS 7 Lacs",
      benefits: [
        "Promotional video provided...",
        "Location on Participation Certificates.",
        "Entrance dimensions: 6 x 3 meter.",
        "Accommodation for up to 15 representatives from the company.",
        "Capacity of 50+ participants for recruitment activities.",
        "One 1-hour Workshop in March 2025.",
        "Exclusive 8ft x 20ft banner space.",
        "Publicity on FCIT + PU website, social media."
      ],
      discount: "Alumni Discount 25% on All Packages",
      badge: "Gold"
    },
    {
      title: "Silver Sponsor",
      price: "RS 5 Lacs",
      benefits: [
        "Promotional video provided...",
        "Location on Participation Certificates.",
        "Entrance dimensions: 4 x 2 meter.",
        "Accommodation for up to 10 representatives from the company.",
        "Capacity of 30+ participants for recruitment activities.",
        "Publicity on FCIT + PU website, social media."
      ],
      badge: "Silver"
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-indigo-700 my-6">Sponsorship Packages</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <SponsorshipCard
            key={index}
            title={pkg.title}
            price={pkg.price}
            benefits={pkg.benefits}
            discount={pkg.discount}
            badge={pkg.badge}
          />
        ))}
      </div>
    </div>
  );
};

export default SponsorshipPackages;
