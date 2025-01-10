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
    `}
  </style>
);

const SponsorshipCard = ({ title, price, benefits, discount, badge }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 
        shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_rgba(66,99,235,0.3)] flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Border Effect */}
      <div className="p-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full flex flex-col">
        <div className="bg-white h-full flex flex-col justify-between">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-800 p-8 text-white relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute w-40 h-40 bg-white rounded-full -top-20 -left-20 transform rotate-45" />
              <div className="absolute w-40 h-40 bg-white rounded-full -bottom-20 -right-20 transform rotate-45" />
              {isHovered && (
                <>
                  <div className="absolute w-full h-1 bg-white/20 top-1/4 -translate-x-full animate-[slideRight_3s_linear_infinite]" />
                  <div className="absolute w-full h-1 bg-white/20 top-3/4 translate-x-full animate-[slideLeft_3s_linear_infinite]" />
                </>
              )}
            </div>

            {/* Title Section */}
            <div className="relative">
              <h2 className="text-3xl pt-7 font-bold mb-2">{title}</h2>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold">{price}</p>
                <span className="text-sm opacity-75">/year</span>
              </div>
            </div>

            {/* Badges */}
            {badge && (
              <div className="absolute top-4 right-4">
                <span className="relative inline-flex">
                  {/* Animated pulsating background */}
                  <span className="absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-red-500 opacity-75 animate-ping"></span>

                  {/* Main badge */}
                  <span className="relative bg-gradient-to-r from-red-600 via-pink-500 to-red-300 text-white text-sm px-4 py-1.5 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out">
                    {badge}
                  </span>
                </span>
              </div>
            )}

            {discount && (
             <div className="absolute top-4 left-1 transform -rotate-12">
             <span
               className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 text-white text-sm px-3 py-1 rounded-full font-semibold shadow-lg 
               animate-pulse hover:scale-110 transition-all duration-300 ease-in-out"
             >
               {discount}
             </span>
           </div>
           
            
            )}
          </div>

          {/* Card Body */}
          <div className="p-8 flex flex-col justify-between flex-grow">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 transform transition-transform duration-300 hover:translate-x-2"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600 text-lg">✓</span>
                  </span>
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Bottom Line Section */}
            {/* <div className="mt-8 border-t pt-4 text-gray-500 text-sm text-center">
              Additional information or disclaimers can go here.
            </div> */}
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
      discount: "Alumni Discount 33% on All Packages",
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
  ];

  return (
    <div className=" dark:bg-gray-800">
      <div className="container  mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Sponsorship Packages
        </h1>

        <div className="grid  md:grid-cols-3 gap-8">
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
