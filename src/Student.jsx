import React from "react";

const Student = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md sm:max-w-2xl bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-indigo-400">Event Guidelines</h2>
        <p className="text-sm sm:text-base text-gray-300">
          <br /> <strong>Timing:</strong> 9:00 AM - 4:30 PM
          <br /> <strong>Venue:</strong> FCIT NC
          <br /> <strong>Eligibility:</strong>
          <br /> - 8th semester students: Open attendance throughout the day
          <br /> - 6th semester students: Attendance allowed from 2:00 PM onwards
          <br /> <strong>Dress Code:</strong> Formal attire is mandatory for all attendees (preferably business casual)
          <br /> <strong>Test Schedule:</strong> Details regarding the test schedule will be communicated separately by the Event Management Society.
        </p>

        <h3 className="text-lg sm:text-xl font-bold text-indigo-300">Preparation</h3>
        <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
          <li><strong>Resume:</strong> Bring multiple copies of your updated resume.</li>
          <li><strong>Copies of Documents:</strong> Carry copies of academic transcripts, certificates, and other relevant documents.</li>
          <li><strong>Research:</strong> Familiarize yourself with participating companies and job requirements.</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-bold text-indigo-300">Conduct</h3>
        <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
          <li><strong>Punctuality:</strong> Arrive on time to maximize interactions with company representatives.</li>
          <li><strong>Professionalism:</strong> Maintain a professional demeanor throughout the event.</li>
          <li><strong>Networking:</strong> Take advantage of networking opportunities with company representatives, alumni, and peers.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-bold text-center text-indigo-400">Registration Links</h2>
        <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
          <li><a href="https://forms.gle/NgEQB3dtYeDAfcKz8" className="text-blue-300 hover:underline">BSSEF21-OC Form</a></li>
          <li><a href="https://forms.gle/BL5fdMYjfea1WiFZA" className="text-blue-300 hover:underline">BSSEF21-NC Form</a></li>
          <li><a href="https://forms.gle/pHhMMkbL2HRUfmZD7" className="text-blue-300 hover:underline">BSITF21-OC Form</a></li>
          <li><a href="https://forms.gle/jZRQdhePgQuVASJE7" className="text-blue-300 hover:underline">BSITF21-NC Form</a></li>
          <li><a href="https://forms.gle/hw44TPoeCQRizfPp8" className="text-blue-300 hover:underline">BSCSF21 Form</a></li>
          <li><a href="https://forms.gle/MwKUM79DpL1jE2PRA" className="text-blue-300 hover:underline">BSDSF21 Form</a></li>
        </ul>

      </div>
    </div>
  );
};

export default Student;
