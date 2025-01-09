import React from "react";

function StudentPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold">Welcome, Zohaib!</h1>
          <p className="text-lg mt-2">Discover opportunities and track your applications.</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">My Profile</h2>
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700 text-center font-medium">John Doe</p>
            <p className="text-gray-600 text-center text-sm">Computer Science, Final Year</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Edit Profile
            </button>
          </div>

          {/* Job Listings Section */}
          <div className="md:col-span-2 bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Available Jobs</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg border">
                <h3 className="font-bold text-lg">Software Engineer Intern</h3>
                <p className="text-gray-600">Company: XYZ Tech</p>
                <p className="text-gray-600">Location: Remote</p>
                <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Apply Now
                </button>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <h3 className="font-bold text-lg">Marketing Associate</h3>
                <p className="text-gray-600">Company: ABC Marketing</p>
                <p className="text-gray-600">Location: On-site</p>
                <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">My Applications</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4">Job Title</th>
                <th className="py-2 px-4">Company</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4">Software Engineer Intern</td>
                <td className="py-2 px-4">XYZ Tech</td>
                <td className="py-2 px-4 text-green-600">Accepted</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Marketing Associate</td>
                <td className="py-2 px-4">ABC Marketing</td>
                <td className="py-2 px-4 text-yellow-600">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StudentPage;
