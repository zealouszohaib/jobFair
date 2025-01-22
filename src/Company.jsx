import React, { useState } from "react";

const CompanyCard = ({ title, price, benefits, discount, badge, bgColor = "from-indigo-500 via-indigo-600 to-indigo-800" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative max-w-sm w-full mx-auto bg-white rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 
        shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_rgba(66,99,235,0.3)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Content */}
      <div className="bg-white flex flex-col">
        {/* Card Header */}
        <div className={`bg-gradient-to-r ${bgColor} p-8 text-white relative overflow-hidden`}>
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
            </div>
          </div>

          {/* Badge */}
          {badge && (
          <div className="absolute top-4 right-4">
          <span className="relative inline-flex">
            {/* Animated pulsating background */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-red-600 via-pink-600 to-purple-500 opacity-75 animate-ping"></span>
        
            {/* Main badge with hover effects and soft glow */}
            <span className="relative bg-gradient-to-r from-red-600 via-pink-500 to-red-300 text-white text-sm px-4 py-1.5 rounded-full font-semibold shadow-md transform hover:scale-105 transition-transform duration-200 ease-in-out">
              {badge}
            </span>
          </span>
        </div>
        
          )}

          {/* Discount Badge */}
          {discount && (
           <div className="absolute top-4 left-1 transform -rotate-12">
           <span
             className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 text-white text-sm px-3 py-1 rounded-full font-semibold shadow-lg 
             animate-pulse hover:scale-110 hover:animate-[bounce_1s_infinite] transition-all duration-300 ease-in-out ring-2 ring-green-400"
           >
             {discount}
           </span>
         </div>
         
          )}
        </div>

        {/* Card Body */}
        <div className="p-8 flex flex-col flex-grow">
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
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
    </div>
  );
};


const CompanyPackages = () => {
  const packages = [
    {
      title: "Premium Stall",
      price: "RS 150K",
      bgColor: "from-green-500 via-green-600 to-green-800",
      benefits: [
        "Stall size dimension: 4 x 3 meters",
        "Seating arrangement for 5 company representatives",
        "Premium location with high visibility",
        "1 Dedicated classroom for recruitment activities",
        "Priority placement in company listings",
        "Extended setup and teardown time"
      ],
      discount: "Early Bird 25% Off",
      badge: "Premium"
    },
    {
      title: "Standard Stall",
      price: "RS 75K",
      bgColor: "from-purple-500 via-purple-600 to-purple-800",
      benefits: [
        "Stall size dimension: 3 x 3 meters",
        "Seating arrangement for 3 company representatives",
        "Standard location placement",
        "Shared classroom access for recruitment",
        "Special rate for startups under 1 year"
      ],
      discount: "Startup Discount",
      badge: "Popular"
    }
  ];

  return (
    <div className="bg-gray-50 bg-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
          Company Stall Packages
        </h1>

        <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto md:max-w-full md:grid-cols-2 lg:max-w-6xl lg:mx-auto">
          {packages.map((pkg, index) => (
            <CompanyCard
              key={index}
              title={pkg.title}
              price={pkg.price}
              benefits={pkg.benefits}
              discount={pkg.discount}
              badge={pkg.badge}
              bgColor={pkg.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyPackages;