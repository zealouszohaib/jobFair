import React from "react";
import { Calendar, MapPin, Users, Phone, Mail } from "lucide-react";

const Details = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="inline-block">
            <div className="flex items-center gap-2 bg-indigo-900/50 text-indigo-300 px-4 py-2 rounded-full border border-indigo-700/50 backdrop-blur-sm">
              <Calendar size={20} />
              <span className="font-semibold">February 20, 2025</span>
            </div>
          </div>

          <h3 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
            FCIT 14
            <sup className="align-super text-base font-semibold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              th
            </sup>{" "}
            Annual Career Fair 2025
          </h3>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Empowering Futures: Connect, Inspire, and Transform at Career Fair
            2025! Build connections and explore opportunities to shape your
            future.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-lg border border-gray-700 bg-gray-800/40 backdrop-blur p-4">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-indigo-400" />
                <div className="text-gray-100">
                  <p className="font-semibold">Expected Attendance</p>
                  <p className="text-2xl font-bold text-indigo-300">2,500+</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/PUCIT-New+Campus/@31.4804787,74.265199,17z/data=!3m1!4b1!4m6!3m5!1s0x391903ccac08143b:0x9b0637753efd261e!8m2!3d31.4804787!4d74.265199!16s%2Fg%2F11cjqdpj0_?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-700 bg-gray-800/40 backdrop-blur p-4 block hover:bg-gray-700/40 transition"
            >
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-indigo-400" />
                <div className="text-gray-100">
                  <p className="font-semibold">Location</p>
                  <p className="text-lg text-indigo-300">FCIT New Campus</p>
                </div>
              </div>
            </a>

            <div className="rounded-lg border border-gray-700 bg-gray-800/40 backdrop-blur p-4">
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-indigo-400" />
                <div className="text-gray-100">
                  <p className="font-semibold">Mr. Faheem</p>
                  <a
                    href="tel:03014786754"
                    className="text-lg text-indigo-300 hover:underline"
                  >
                    0301-4786754
                  </a>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border border-gray-700 bg-gray-800/40 backdrop-blur p-4">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-indigo-400" />
                <div className="text-gray-100">
                  <p className="font-semibold">Placement Office</p>
                  <p className="text-lg text-indigo-300">
                    <a
                      href="mailto:placementoffice@pucit.edu.pk"
                      className="hover:underline"
                    >
                      placementoffice@pucit.edu.pk
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
