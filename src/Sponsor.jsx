import React, { useState } from "react";

const AnimatedBadgeStyles = () => (
  <style>
    {`
      @keyframes twinkle {
        0%, 100% { opacity: 0; transform: scale(0.5); }
        50% { opacity: 1; transform: scale(1.2); }
      }

      @keyframes shine {
        0% { opacity: 1; }
        50% { opacity: 0.7; }
        100% { opacity: 1; }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0) rotate(-12deg); }
        50% { transform: translateY(-5px) rotate(-12deg); }
      }

      /* Pulse animation for badges */
      @keyframes pulseBadge {
        0% { opacity: 0.6; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.1); }
        100% { opacity: 0.6; transform: scale(1); }
      }

      /* Glow effect for hover state */
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.5); }
        50% { box-shadow: 0 0 20px rgba(255, 255, 255, 1); }
      }
    `}
  </style>
);

const SponsorshipCard = ({ title, price, benefits, discount, badge }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`max-w-xs mx-auto bg-white rounded-xl overflow-hidden transform transition-all duration-500 ${
        isHovered ? "scale-105 shadow-2xl bg-gradient-to-r from-indigo-600 to-purple-700" : "shadow-lg"
      } hover:shadow-2xl hover:bg-gradient-to-r from-indigo-600 to-purple-700`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Border Effect */}
      <div className="p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full flex flex-col">
        <div className="bg-white h-full flex flex-col justify-between rounded-lg">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-800 p-4 text-white relative overflow-hidden">
            {/* Title Section */}
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-1 mt-8 text-shadow-lg">
                {title}
              </h2>
              <div className="flex items-baseline gap-1">
                <p className="text-lg sm:text-xl font-bold">{price}</p>
              </div>
            </div>

            {/* Badges */}
            {badge && (
              <div className="absolute top-2 right-2">
                <span className="relative inline-flex">
                  {/* Animated pulsating background */}
                  <span className="absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-red-500 opacity-75 animate-pulse"></span>
                  {/* Main badge with pulse animation */}
                  <span className="relative bg-gradient-to-r from-red-600 via-pink-500 to-red-300 text-white text-sm px-4 py-1 rounded-full font-semibold shadow-lg transform hover:scale-110 transition-all duration-200 ease-in-out animate-pulse">
                    {badge}
                  </span>
                </span>
              </div>
            )}

            {discount && (
              <div className="absolute top-2 left-1 transform -rotate-12">
                <span
                  className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full font-semibold shadow-lg 
                  animate-pulse hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  {discount}
                </span>
              </div>
            )}
          </div>

          {/* Card Body */}
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div className="space-y-2 text-sm sm:text-base">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 transform transition-transform duration-300 hover:translate-x-2"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600 text-lg">✓</span>
                  </span>
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
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
        "Extensive publicity on FCIT + PU website, social media, electronic/print media.",
      ],
      discount: "Sold out",
      badge: "Platinum",
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
        "Publicity on FCIT + PU website, social media.",
      ],
      discount: "Alumni Discount 33% on All Packages",
      badge: "Gold",
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
        "Publicity on FCIT + PU website, social media.",
      ],
      discount: "Alumni Discount 33% on All Packages",
      badge: "Silver",
    },
    {
      title: "Bronze Sponsor",
      price: "RS 2.5 Lacs",
      benefits: [
        "Promotional video display provided by the company on social media.",
        "Logo on Participation Certificates.",
        "Enclosure dimensions: 6 x 3 meter.",
        "Accommodation for up to 15 representatives from the company.",
        "One room for recruitment activities.",
        "One 01-hour workshop in March 2025.",
      ],
      discount: "Early Bird Discount: 5% if paid by 31st January 2025",
      badge: "Bronze",
    },
  ];

  return (
    <div className="bg-gray-900 py-12">
      <div className="container mx-auto p-6">
        <h1 className="text-5xl font-bold mb-12 text-center text-white">
          Sponsorship Packages
        </h1>
        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-8">
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
    </div>
  );
};

export default SponsorshipPackages;
