import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const CompanyRegistration = ({ closeModal }) => {
  const [isOpen, setIsOpen] = useState(true);

  const stallTypes = [
    {
      type: "green",
      price: "150,000",
      features: [
        "Stall size dimension: 4 x 3 meter",
        "Seating arrangement of 5 company representatives",
        "Premium location",
        "1 Classroom for on-spot recruitment test/preliminary interview or any other recruitment activity",
      ],
    },
    {
      type: "purple",
      price: "75,000",
      features: [
        "Stall size dimension: 3 x 3 meter",
        "Seating arrangement of 3 company representatives",
        "Flat of 50k for startups with less than two years duration",
      ],
    },
  ];

  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required("Company name is required"),
    industry: Yup.string().required("Industry is required"),
    website: Yup.string().url("Invalid URL").required("Website is required"),
    contactPerson: Yup.string().required("Contact person is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Must be a valid phone number")
      .required("Phone number is required"),
    stallType: Yup.string().required("Please select a stall type"),
    positions: Yup.string().required("Please specify open positions"),
    requirements: Yup.string().required("Candidate requirements are required"),
    companyLogo: Yup.mixed()
      .required("Company logo is required")
      .test(
        "fileSize",
        "File size must be less than 2MB",
        (value) => !value || (value && value.size <= 2 * 1024 * 1024)
      )
      .test(
        "fileType",
        "Only .png, .jpg, .jpeg are allowed",
        (value) =>
          !value ||
          (value &&
            ["image/png", "image/jpeg", "image/jpg"].includes(value.type))
      ),
  });

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
    closeModal(); // Close modal after submission
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
        <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg max-h-screen overflow-y-auto">
          <div className="p-6 border-b">
            <h1 className="text-2xl font-semibold text-center text-gray-800">
              Company Registration - Job Fair
            </h1>
            <p className="mt-2 text-center text-gray-600">
              Connect with top graduate talent at our upcoming job fair
            </p>
          </div>

          <Formik
            initialValues={{
              companyName: "",
              industry: "",
              website: "",
              contactPerson: "",
              email: "",
              phone: "",
              stallType: "",
              positions: "",
              requirements: "",
              companyLogo: null,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
              <Form className="p-4 md:p-6 lg:p-8 space-y-6">
                  {/* Company Information */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4">
                  Company Information
                </h3>
                <div className="space-y-4">
                  <Field
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                  <ErrorMessage
                    name="companyName"
                    component="div"
                    className="text-red-500 text-sm"
                  />

                  <Field
                    as="select"
                    name="industry"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                  >
                    <option value="">Select Industry</option>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance & Banking</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </Field>
                  <ErrorMessage
                    name="industry"
                    component="div"
                    className="text-red-500 text-sm"
                  />

                  <Field
                    type="url"
                    name="website"
                    placeholder="Company Website"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                  <ErrorMessage
                    name="website"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Contact Person Details */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4">
                  Contact Person Details
                </h3>
                <div className="space-y-4">
                  <Field
                    type="text"
                    name="contactPerson"
                    placeholder="Contact Person Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                  <ErrorMessage
                    name="contactPerson"
                    component="div"
                    className="text-red-500 text-sm"
                  />

                  <Field
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />

                  <Field
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Stall Type */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4">
                  Select Your Stall
                </h3>
                <div className="space-y-4">
                  {stallTypes.map((stall, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer"
                    >
                      <Field
                        type="radio"
                        name="stallType"
                        value={stall.type}
                        id={`stall-${stall.type}`}
                        className="hidden"
                      />
                      <label htmlFor={`stall-${stall.type}`} className="block">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-medium text-gray-800">
                            {stall.type.charAt(0).toUpperCase() +
                              stall.type.slice(1)}{' '}
                            Stall
                          </span>
                          <span className="text-gray-600 font-medium">
                            RS.{stall.price}
                          </span>
                        </div>
                        <ul className="mt-2 text-sm text-gray-600">
                          {stall.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </label>
                    </div>
                  ))}
                </div>
                <ErrorMessage
                  name="stallType"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* File Upload */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4">
                  Upload Logo
                </h3>
                <input
                  type="file"
                  name="companyLogo"
                  accept=".png,.jpg,.jpeg"
                  onChange={(e) =>
                    setFieldValue('companyLogo', e.currentTarget.files[0])
                  }
                />
                <ErrorMessage
                  name="companyLogo"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
                {/* Form Fields */}
                {/* Similar to the fields provided earlier */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                  Register Company
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </Form>
            )}
          </Formik>

          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
        </div>
      </div>
    )
  );
};

export default CompanyRegistration;
