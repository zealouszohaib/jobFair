import React from "react";
import qr from "../assets/qr.png";

const Footer = () => {
  return (
    <div>
      <footer
        aria-label="Site Footer"
        className=" bg-gray-900  text-white font-medium"
      >
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Bank Details Section */}
            <div>
              <p className="text-xl font-bold">Bank Details</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>
                  Bank and Branch Name: Habib Bank Limited, Punjab University
                  Old Campus Branch
                </li>
                <li>Account Number: 01337900215401</li>
                <li>Beneficiary: Principal PUCIT</li>
              </ul>
            </div>

            {/* Event Details Section */}
            <div>
              <p className="text-xl font-bold">Event Details</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>
                  Deadline:{" "}
                  <span className="text-yellow-400">February 02, 2025</span>
                </li>
                <li>
                  Event Date:{" "}
                  <span className="text-yellow-400">February 20, 2025</span>
                </li>
                <li>
                  Location: Faculty of Computing & Information Technology,
                  Quaid-e-Azam Campus, Punjab University
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-xl font-bold">Scan Here</p>
              <div className="mt-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfUZLkMvf8eOyk7MjMT_-jXr5K9bEewL97YEWSMMejjybJDKQ/viewform"
                  target="_blank" 
                  rel="noopener noreferrer" 
                >
                  <img
                    src={qr}
                    alt="QR Code for 14th FCIT Career Fair 2025"
                    className="w-40 h-40"
                  />
                </a>
              </div>
              <p className="mt-2 text-gray-300">14th FCIT Career Fair 2025</p>
            </div>
          </div>

          <p className="font-bold text-center bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-clip-text text-transparent italic">
            &copy; 2025. Job Fair. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
