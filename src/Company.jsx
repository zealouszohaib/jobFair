import React, { useState } from "react";
import { motion } from "framer-motion";

const CompanyCard = ({ title, price, benefits, discount, badge, bgColor = "from-indigo-500 via-indigo-600 to-indigo-800" }) => {
  return (
    <motion.div
      className="relative max-w-sm w-full bg-white rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 
        shadow-lg hover:shadow-xl md:h-[35rem] "
      whileHover={{ scale: 1.05 }}
    >
      <div className="bg-white flex flex-col">
        <div className={`bg-gradient-to-r ${bgColor} p-8  text-white relative overflow-hidden rounded-t-xl`}> 
          <div className="relative">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-3xl font-bold">{price}</p>
          </div>
          {badge && (
            <div className="absolute top-4 right-4 animate-pulse">
              <span className="relative bg-gradient-to-r from-red-600 via-pink-500 to-red-300 text-white text-sm px-4 py-1.5 rounded-full font-semibold shadow-md">
                {badge}
              </span>
            </div>
          )}
          {discount && (
            <div className="absolute top-4 left-1 transform -rotate-12 animate-bounce">
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 text-white text-sm px-3 py-1 rounded-full font-semibold shadow-lg">
                {discount}
              </span>
            </div>
          )}
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 transition-transform duration-300 hover:translate-x-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-600 text-lg">✓</span>
                </span>
                <span className="text-gray-600">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
const CompanyPackages = () => {
  const packages = [
    {
      title: "Green Stall",
      price: "RS 150K",
      bgColor: "from-green-500 via-green-600 to-green-800",
      benefits: [
        "Stall size dimension: 4 x 3 meters",
        "Seating for 5 company representatives",
        "Premium location with high visibility",
        "1 Dedicated classroom for recruitment",
        "Priority placement in listings",
        "Extended setup and teardown time"
      ],
      discount: "Early Bird 25% Off",
      badge: "Premium"
    },
    {
      title: "Purple Stall",
      price: "RS 75K",
      bgColor: "from-purple-500 via-purple-600 to-purple-800",
      benefits: [
        "Stall size dimension: 3 x 3 meters",
        "Seating for 3 company representatives",
        "Standard location placement",
        "Shared classroom access for recruitment",
        "Special rate for startups under 1 year"
      ],
      discount: "Startup Discount",
      badge: "Popular"
    }
  ];

  const companies = [
    "7Vals", "Tajir", "Nextbridge Ltd", "Motive", "PakWheels.com", "Northbay Solutions", "Rolustech",
    "Techtimize Private Limited", "Big Entities", "HR Force International", "MCB Bank Limited", "NetSol Technologies",
    "tkxel", "Machine Learning 1 Pvt Limited", "Educative Axis SMC Limited", "BrainX Technologies", "Dubizzle Labs",
    "TBox Solutionz SMC Pvt Ltd", "Global Software Consulting", "STAUNCH", "NKU Technologies (Pvt) Ltd",
    "Coderzhunt", "WebNcodes (Private) Limited", "Marshub", "WhiteBox", "EWS Pvt Ltd", "Innovaxel (pvt) Ltd.",
    "Techtics AI", "Mergestack", "Focusteck", "Tech Bridge Consultancy", "D' Educationist Pvt Ltd", "Folium AI",
    "Stewart Pakistan", "Devsinc", "Cinnova Technologies", "i2c Inc", "CodeFulcrum"
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex p-8">
      <div className="container mx-auto flex gap-8 flex-wrap justify-center"> {/* Added justify-center and flex-wrap */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 w-full sm:w-3/4 lg:w-1/2"> {/* Adjusted width */}
          {packages.map((pkg, index) => (
            <CompanyCard key={index} {...pkg} />
          ))}
        </div>
        <motion.div className="hidden lg:block w-1/4 bg-gray-800 p-6 rounded-xl overflow-y-auto h-[35rem] shadow-lg" animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
          <h2 className="text-xl font-bold mb-4 text-center border-b pb-2"> Companies</h2>
          <ul className="space-y-2">
            {companies.map((company, index) => (
              <motion.li key={index} className="p-2 bg-gray-700 rounded-lg text-center" whileHover={{ scale: 1.05 }}>
                {company}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};


export default CompanyPackages;
