import React, { useState } from "react";

const StallCard = ({ title, price, benefits, discount, badge, bgColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-sm  bg-white rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 
        shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_rgba(66,99,235,0.3)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Border Effect */}
      <div className="p-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="bg-white">
          {/* Card Header */}
          <div
            className={`bg-gradient-to-r p-8 text-white relative overflow-hidden ${bgColor}`}
          >
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
                  <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative bg-red-500 text-white text-sm px-4 py-1.5 rounded-full font-semibold shadow-lg">
                    {badge}
                  </span>
                </span>
              </div>
            )}

            {/* Discount */}
            {discount && (
              <div className="absolute top-4 left-1 transform -rotate-12">
                <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full font-semibold shadow-md animate-[bounce_2s_infinite]">
                  {discount}
                </span>
              </div>
            )}
          </div>

          {/* Card Body */}
          <div className="p-8">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 transform transition-transform duration-300 hover:translate-x-2"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-lg">✓</span>
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

function Company() {
  const stallData = [
    {
      title: "Green",
      price: "RS 150K",
      bgColor: "bg-green-600",
      discount: "Alumni Discount 33% on All Packages",
      badge: "Popular",
      benefits: [
        "Stall size dimension: 4 x 3 meters.",
        "Seating arrangement of 5 company representatives.",
        "Premium location.",
        "1 Classroom for on-spot recruitment test/preliminary interview or any other recruitment activity."
      ]
    },
    {
      title: "Purple",
      price: "RS 75K",
      bgColor: "bg-purple-600",
      discount: "Early Bird Discount 25% on All Packages",
      badge: "New",
      benefits: [
        "Stall size dimension: 3 x 3 meters.",
        "Seating arrangement of 3 company representatives.",
        "Flat of 50k for startups with less than 1 year."
      ]
    }
  ];

  return (
    <div className="dark:bg-gray-800">
      <div className="container  mx-auto p-6 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Stall Packages</h1>
        <div className="grid grid-cols-1 mx-auto w-1/2 sm:grid-cols-2 gap-20 ">
          {stallData.map((stall, index) => (
            <StallCard
              key={index}
              title={stall.title}
              price={stall.price}
              bgColor={stall.bgColor}
              discount={stall.discount}
              badge={stall.badge}
              benefits={stall.benefits}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Company;
