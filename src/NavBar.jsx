import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="bg-white border-gray-200 bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              FCIT
            </span>
          </Link>

       
          {/* Navigation Links */}
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <Link
                  to="/highlights"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  Highlights
                </Link>
              </li>
              <li>
                <Link
                  to="/companies"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  to="/sponsors"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  Sponsor
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

     
    </div>
  );
}

export default NavBar;
