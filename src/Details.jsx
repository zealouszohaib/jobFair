import React from 'react';
import { Calendar, MapPin, Users,Phone,Mail } from 'lucide-react';

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
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            FCIT Annual Career Fair 2025
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            We're excited to invite you to participate in the FCIT Annual Career Fair 2025. Connect with top-tier talent and shape the future of technology together.
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
            
            <div className="rounded-lg border border-gray-700 bg-gray-800/40 backdrop-blur p-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-indigo-400" />
                <div className="text-gray-100">
                  <p className="font-semibold">Location</p>
                  <p className="text-lg text-indigo-300">FCIT New Campus</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-700 bg-gray-800/40 backdrop-blur p-4">
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-indigo-400" />
                <div className="text-gray-100">
                  <p className="font-semibold">Mr. Faheem</p>
                  <p className="text-lg text-indigo-300">0301-4786754</p>
                </div>
              </div>
            </div>
            

            <div className="rounded-lg border border-gray-700 bg-gray-800/40 backdrop-blur p-4">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-indigo-400" />
                <div className="text-gray-100">
                  <p className="font-semibold">Placement Office</p>
                  <p className="text-lg text-indigo-300">placementoffice@pucit.edu.pk</p>
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