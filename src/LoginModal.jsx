import React, { useState } from "react";
import Register from "./Register";
import Company from "./company";
import CompanyRegistration from "./CompanyRegisteration";

function LoginModal({ isModalOpen, setIsModalOpen }) {
  const [modalType, setModalType] = useState("login");
  const [isOpenRegister, setIsOpenResgister] = useState(false);
  const [isOpenCompanyRegister, setIsOpenCompanyRegister] = useState(false);

  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div
            className={`bg-white rounded-lg shadow-lg w-96 p-6 transform transition-all duration-300 ease-out ${
              isModalOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-90 translate-y-10"
            }`}
          >
            {modalType === "login" && (
              <>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  Login
                </h2>
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="block w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Login
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-900"
                    >
                      Cancel
                    </button>
                  </div>
                </form>

                {/* Register Section */}
                <div className="mt-4 border-t pt-4">
                  <p className="text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setModalType("registerType")}
                      className="text-blue-600 hover:underline"
                    >
                      Register here
                    </button>
                  </p>
                </div>
              </>
            )}

            {modalType === "registerType" && (
              <>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  Register as:
                </h2>
                <div className="space-y-4">
                  <button
                    type="button"
                    onClick={() => setIsOpenResgister(true)}
                    className="block w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
                  >
                    Student
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpenCompanyRegister(true)}
                    className="block w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                  >
                    Company
                  </button>
                  <button
                    type="button"
                    onClick={() => alert("Register as Sponsor")}
                    className="block w-full px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700"
                  >
                    Sponsor
                  </button>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => setModalType("login")}
                    className="text-gray-600 hover:underline"
                  >
                    Back to Login
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {isOpenRegister && (
        <Register closeModal={() => setIsOpenResgister(false)} />
        // <Register/>
      )}{" "}
      {isOpenCompanyRegister && (
        <CompanyRegistration closeModal={() => setIsOpenCompanyRegister(false)} />
        // <Register/>
      )}
    </div>
  );
}

export default LoginModal;
