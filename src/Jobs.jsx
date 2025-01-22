import React from "react";
import CountUp from "react-countup";

function Jobs() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-6 text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Title Section */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-extrabold text-blue-400 mb-4">
            Who Would Attend?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover the attendees and opportunities that make this event truly
            extraordinary. Join us to explore, connect, and innovate.
          </p>
        </div>

        {/* Department Information Section */}
        <div className="space-y-8">
          <h3 className="text-4xl font-semibold text-orange-400 text-center">
            Department Information
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "BSCS Students", link: "department-of-computer-science/" },
              { label: "BSSE Students", link: "department-of-software-engineering-2/" },
              { label: "BSIT Students", link: "department-of-information-technology/" },
              { label: "BSDS Students", link: "department-of-data-science/" },
            ].map((dept, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <h4 className="text-3xl font-bold text-blue-400 mb-2">
                  <CountUp end={100} duration={2} />
                </h4>
                <a href={`https://pucit.edu.pk/${dept.link}`} className="text-gray-300 font-medium hover:text-blue-400">
                  {dept.label}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Summary Section */}
        <div className="space-y-8">
          <h3 className="text-4xl font-semibold text-orange-400 text-center">
            Faculty Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Computer Science",
                data: [1, 2, 15, 2],
              },
              {
                title: "Software Engineering",
                data: [1, 1, 13, 1],
              },
              {
                title: "Information Technology",
                data: [1, 1, 10, 1],
              },
              {
                title: "Data Science",
                data: [1, 5, 7, 0],
              },
            ].map((faculty, index) => (
              <div
                key={index}
                className="p-8 bg-gray-800 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-2xl font-bold text-blue-400 mb-4">
                  {faculty.title}
                </h4>
                <ul className="text-gray-300 space-y-2">
                  {[
                    "Professor",
                    "Associate Professors",
                    "Assistant Professors",
                    "Lecturers",
                  ].map((role, idx) => (
                    <li key={idx}>
                      <span className="font-bold">{role}:</span>{" "}
                      <CountUp end={faculty.data[idx]} duration={2} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Research and Distinctions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-2xl font-semibold text-gray-100 mb-4">
              Areas of Research
            </h4>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              {[
                "Natural Language Processing",
                "Computer Vision",
                "Cloud Computing",
                "Internet of Things",
                "Artificial Intelligence (AI)",
              ].map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-gray-100 mb-4">
              Distinctions
            </h4>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              {[
                "Patent",
                "Fullbright Scholarship",
              ].map((distinction, index) => (
                <li key={index}>{distinction}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-12">
          <p className="text-3xl text-white-400 font-bold">
            <CountUp end={100} duration={2} />+ companies are expected to attend
          </p>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
