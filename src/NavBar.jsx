import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Logo"
            />
            <span className="text-2xl font-semibold">FCIT</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded-lg"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/highlights"
              className={`text-gray-400 hover:text-white transition duration-300 ${
                isActive("/highlights") ? "text-blue-500 font-bold" : ""
              }`}
            >
              Highlights
            </Link>
            <Link
              to="/companies"
              className={`text-gray-400 hover:text-white transition duration-300 ${
                isActive("/companies") ? "text-blue-500 font-bold" : ""
              }`}
            >
              Company
            </Link>
            <Link
              to="/sponsors"
              className={`text-gray-400 hover:text-white transition duration-300 ${
                isActive("/sponsors") ? "text-blue-500 font-bold" : ""
              }`}
            >
              Sponsor
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link
                to="/highlights"
                className={`block px-3 py-2 rounded-md transition duration-300 ${
                  isActive("/highlights")
                    ? "bg-blue-700 text-white font-bold"
                    : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                Highlights
              </Link>
            </li>
            <li>
              <Link
                to="/companies"
                className={`block px-3 py-2 rounded-md transition duration-300 ${
                  isActive("/companies")
                    ? "bg-blue-700 text-white font-bold"
                    : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                to="/sponsors"
                className={`block px-3 py-2 rounded-md transition duration-300 ${
                  isActive("/sponsors")
                    ? "bg-blue-700 text-white font-bold"
                    : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                Sponsor
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
