import React from "react";
import photo from "./assets/image.png";
import company from "./assets/company.png";

const CareerFairHighlights = () => {
  const stats = [
    {
      label: "\nVisitors",
      value: "1000+",
      bgColor: "bg-gray-800",
      textColor: "text-white",
    },
    {
      label: "\nAlumni",
      value: "200+",
      bgColor: "bg-gray-700",
      textColor: "text-gray-300",
    },
    {
      label: "\nStudents Hired",
      value: "200+",
      bgColor: "bg-gray-700",
      textColor: "text-white",
    },
    {
      label: "\nEmployer Stalls",
      value: "60+",
      bgColor: "bg-gray-600",
      textColor: "text-gray-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-300">
          CAREER FAIR 2024 HIGHLIGHTS
        </h1>

        <div className="bg-gray-800 py-12">
          <div className="container mx-auto px-4">
            {/* Image Section - Side by Side on Larger Screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First Photo */}
              <div className="group relative rounded-lg overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105">
                <img
                  src={photo}
                  alt="Career Fair Highlight"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-4">
                    <p className="text-white text-lg font-semibold">
                      Celebrating Connections at Career Fair 2024
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Photo */}
              <div className="group relative rounded-lg overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105">
                <img
                  src={company}
                  alt="Company Highlight"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-4">
                    <p className="text-white text-lg font-semibold">
                      Building Future Opportunities with Leading Companies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} ${stat.textColor} rounded-xl flex flex-col items-center justify-center p-8 shadow-2xl transform transition-all duration-500 hover:scale-110`}
            >
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-center whitespace-pre-line text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerFairHighlights;



