import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = ({closeModal}) => {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => setIsOpen(true);

  // Validation Schema using Yup
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    university: Yup.string().required("University name is required"),
    degree: Yup.string().required("Degree program is required"),
    gradYear: Yup.string().required("Graduation year is required"),
    internships: Yup.string(),
    skills: Yup.string().required("Skills are required"),
    cv: Yup.mixed()
      .required("Resume/CV is required")
      .test(
        "fileSize",
        "File size is too large",
        (value) => value && value.size <= 5 * 1024 * 1024
      ) // max 5MB
      .test(
        "fileType",
        "Invalid file format",
        (value) =>
          value &&
          [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ].includes(value.type)
      ),
  });

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
        Register for Job Fair
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
          <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg max-h-screen overflow-y-auto">
            <div className="p-6 border-b">
              <h1 className="text-2xl font-semibold text-center text-gray-800">
                Job Fair Registration
              </h1>
              <p className="mt-2 text-center text-gray-600">
                Kickstart your career journey with us
              </p>
            </div>

            <Formik
              initialValues={{
                fullName: "",
                email: "",
                phone: "",
                university: "",
                degree: "",
                gradYear: "",
                internships: "",
                skills: "",
                cv: null,
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log("Form submitted:", values);
                closeModal(); // Close modal after submission
              }}
            >
              {({ setFieldValue }) => (
                <Form className="p-4 md:p-6 lg:p-8 space-y-6">
                  {/* Personal Details */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">
                      Personal Details
                    </h3>
                    <div className="space-y-4">
                      <Field
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      />
                      <ErrorMessage
                        name="fullName"
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

                  {/* Education */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">
                      Educational Background
                    </h3>
                    <div className="space-y-4">
                      <Field
                        type="text"
                        name="university"
                        placeholder="University Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      />
                      <ErrorMessage
                        name="university"
                        component="div"
                        className="text-red-500 text-sm"
                      />

                      <Field
                        type="text"
                        name="degree"
                        placeholder="Degree Program"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      />
                      <ErrorMessage
                        name="degree"
                        component="div"
                        className="text-red-500 text-sm"
                      />

                      <Field
                        as="select"
                        name="gradYear"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                      >
                        <option value="">Graduation Year</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                      </Field>
                      <ErrorMessage
                        name="gradYear"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* Skills & Experience */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">
                      Skills & Experience
                    </h3>
                    <div className="space-y-4">
                      <Field
                        as="textarea"
                        name="internships"
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="Internship Experience"
                      />
                      <ErrorMessage
                        name="internships"
                        component="div"
                        className="text-red-500 text-sm"
                      />

                      <Field
                        as="textarea"
                        name="skills"
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="Technical Skills"
                      />
                      <ErrorMessage
                        name="skills"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* CV Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Upload Resume/CV
                    </label>
                    <input
                      type="file"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                      onChange={(event) =>
                        setFieldValue("cv", event.currentTarget.files[0])
                      }
                    />
                    <ErrorMessage
                      name="cv"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Accepted formats: PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Register for Job Fair
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}

                      className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              &times;hhh
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
