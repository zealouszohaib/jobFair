import React from 'react';
import photo from './assets/image.png'

const CareerFairHighlights = () => {
  const stats = [
    { label: 'Number of\nVisitors', value: '1000+', bgColor: 'bg-slate-800', textColor: 'text-white' },
    { label: 'Number of\nAlumni', value: '200+', bgColor: 'bg-white', textColor: 'text-slate-800' },
    { label: 'Students\nHired', value: '200+', bgColor: 'bg-slate-800', textColor: 'text-white' },
    { label: 'Employer\nStalls', value: '60+', bgColor: 'bg-white', textColor: 'text-slate-800' }
  ];

  return (
    <div className="min-h-screen dark:bg-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          CAREER FAIR 2024 HIGHLIGHTS
        </h1>
        
        {/* Single Photo */}
        <div className="mb-12">
          <div className="rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto">
            <img 
              src={photo}
              alt="Career Fair 2024 Highlight"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} ${stat.textColor} rounded-full aspect-square flex flex-col items-center justify-center p-4 shadow-lg`}
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