import React from "react";

const Student = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex items-center justify-center p-6">
      <div className="max-w-2xl bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-indigo-400">
          Job Fair Preparation Tips
        </h1>
        <p className="text-gray-300 text-center">
          Maximize your opportunities at the job fair with these essential tips!
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-300">
          <li>
            <span className="font-semibold text-indigo-300">Update your resume:</span> Bring multiple copies.
          </li>
          <li>
            <span className="font-semibold text-indigo-300">Research companies:</span> Know their mission and roles.
          </li>
          <li>
            <span className="font-semibold text-indigo-300">Prepare your elevator pitch:</span> Highlight your skills and goals.
          </li>
          <li>
            <span className="font-semibold text-indigo-300">Dress professionally:</span> First impressions matter.
          </li>
          <li>
            <span className="font-semibold text-indigo-300">Practice common questions:</span> Be confident and concise.
          </li>
          <li>
            <span className="font-semibold text-indigo-300">Bring a notepad:</span> Jot down key insights and contact info.
          </li>
          <li>
            <span className="font-semibold text-indigo-300">Follow up:</span> Send thank-you notes or emails post-event.
          </li>
        </ul>

        <a  href="#" className="py-6 text-blue-100">register here</a>
        <div className="text-center">
          <a
            href="/path-to-dummy-guide.pdf" // Replace with the actual path to the guide
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300"
            download="Job_Fair_Guide.pdf"
          >
            <span className="font-bold">Download the Job Fair Guide (PDF)</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Student;
