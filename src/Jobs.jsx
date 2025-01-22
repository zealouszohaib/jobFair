import React from "react";
import CountUp from "react-countup";

function Jobs() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-blue-600 mb-4">
            Who Would Attend?
          </h2>
          <p className="text-lg text-gray-600">
            Discover the attendees and opportunities that make this event truly
            unique.
          </p>
        </div>

        {/* Department Information Section */}
        <div>
          <h3 className="text-3xl font-semibold text-orange-500 mb-6">
            Department Information
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h4 className="text-2xl font-bold text-blue-600">
                <CountUp end={100} duration={2} />
              </h4>
              <a
                href="https://pucit.edu.pk/department-of-computer-science/"
                className="block"
              >
                <p className="text-gray-700 font-medium">BSCS Students</p>
              </a>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-blue-600">
                <CountUp end={100} duration={2} />
              </h4>

              <a
                href="https://pucit.edu.pk/department-of-software-engineering-2/"
                className="block"
              >
                <p className="text-gray-700 font-medium">BSSE Students</p>
              </a>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-blue-600">
                <CountUp end={100} duration={2} />
              </h4>

              <a
                href="https://pucit.edu.pk/department-of-information-technology/"
                className="block"
              >
                <p className="text-gray-700 font-medium">BSIT Students</p>
              </a>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-blue-600">
                <CountUp end={100} duration={2} />
              </h4>
              <a
                href="https://pucit.edu.pk/department-of-data-science/"
                className="block"
              >
                <p className="text-gray-700 font-medium">BSDS Students</p>
              </a>
            </div>
          </div>
        </div>

        <div>
         

          {/* Faculty Summary Section */}
          <div>
            <h3 className="text-3xl font-semibold text-orange-500 mb-6">
              Faculty Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {/* CS Faculty */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h4 className="text-2xl font-bold text-blue-600 mb-4">Computer Science</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    <span className="font-bold">Professor:</span>{" "}
                    <CountUp end={1} duration={2} />
                  </li>
                  <li>
                    <span className="font-bold">Associate Professors:</span>{" "}
                    <CountUp end={2} duration={2} />
                  </li>
                  <li>
                    <span className="font-bold">Assistant Professors:</span>{" "}
                    <CountUp end={15} duration={2} />
                  </li>
                  <li>
                    <span className="font-bold">Lecturers:</span>{" "}
                    <CountUp end={2} duration={2} />
                  </li>
                </ul>
              </div>
              {/* SE Faculty */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h4 className="text-2xl font-bold text-blue-600 mb-4">Software Engineering</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    <span className="font-bold">Professor:</span>{" "}
                    <CountUp end={1} duration={2} />
                  </li>
                  <li>
                    <span className="font-bold">Associate Professors:</span>{" "}
                    <CountUp end={1} duration={2} />
                  </li>
                  <li>
                    <span className="font-bold">Assistant Professors:</span>{" "}
                    <CountUp end={13} duration={2} />
                  </li>
                  <li>
                    <span className="font-bold">Lecturers:</span>{" "}
                    <CountUp end={1} duration={2} />
                  </li>
                </ul>
              </div>
              {/* IT Faculty */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h4 className="text-2xl font-bold text-blue-600 mb-4">Information technology</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    <span className="font-bold">Professor:</span>{" "}
                    <CountUp end={1} duration={2} />
                  </li>
                  <li>
                    <span className="font-bold">Associate Professors:</span>{" "}
                    <CountUp end={1} duration={2} />
                  </li>
                  <li>
                    <span className="font-bold">Assistant Professors:</span>{" "}
                    <CountUp end={10} duration={2} />
                  </li>
                  <li>
                    <span className="font-bold">Lecturers:</span>{" "}
                    <CountUp end={1} duration={2} />
                  </li>
                </ul>
              </div>
              {/* DS Faculty */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h4 className="text-2xl font-bold text-blue-600 mb-4">Data Science</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    <span className="font-bold">Professor:</span>{" "}
                    <CountUp end={1} duration={2} />
                  </li>
                  <li>
                    <span className="font-bold">Associate Professors:</span>{" "}
                    <CountUp end={5} duration={2} />
                  </li>
                  <li>
                    <span className="font-bold">Assistant Professors:</span>{" "}
                    <CountUp end={7} duration={2} />
                  </li>
                  <li>
                    <span className="font-bold">Lecturers:</span>{" "}
                    <CountUp end={0} duration={2} />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 mt-6 md:grid-cols-2 gap-8">
            {/* Area of Research */}
            <div>
              <h4 className="text-xl font-semibold text-gray-700 mb-3">
                Area of Research
              </h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <ul>
                  <li>Natural Language Processing </li>
                  <li>Computer Vision</li>
                  <li>Cloud Computing</li>
                  <li>Internet of Things</li>
                  <li>Artificial Intelligence (AI)</li>
                </ul>
              </ul>
            </div>
            {/* Distinctions */}
            <div>
              <h4 className="text-xl font-semibold text-gray-700 mb-3">
                Distinctions
              </h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Patent</li>
                <li>Full Bright Scholarship</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center">
          <p className="text-2xl text-red-600 font-bold">
            <CountUp end={100} duration={2} />+ companies are expected to attend
          </p>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
