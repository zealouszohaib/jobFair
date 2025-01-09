import React from 'react'

function Company() {
  return (
    <div className="container mx-auto py-6 px-4 mt-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Green Stall Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-green-600 p-6 text-white relative">
          <h2 className="text-2xl font-bold">Green</h2>
          <p className="text-xl mt-2">RS 150K</p>
          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            Alumni Discount 33% on All Packages
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-700 text-base">
            - Stall size dimension: 4 x 3 meters.<br />
            - Seating arrangement of 5 company representatives.<br />
            - Premium location.<br />
            - 1 Classroom for on-spot recruitment test/preliminary interview or any other recruitment activity.
          </p>
        </div>
      </div>

      {/* Purple Stall Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-purple-600 p-6 text-white relative">
          <h2 className="text-2xl font-bold">Purple</h2>
          <p className="text-xl mt-2">RS 75K</p>
          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            Early Bird Discount 25% on All Packages
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-700 text-base">
            - Stall size dimension: 3 x 3 meters.<br />
            - Seating arrangement of 3 company representatives.<br />
            - Flat of 50k for startups with less than 1 year.
          </p>
        </div>
      </div>
    </div>
  </div>  )
}

export default Company