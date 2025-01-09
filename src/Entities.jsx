import React from 'react'

function Entities() {
  return (
    <div className="container mx-auto px-4 text-center my-6">
    <h1 className="text-5xl custom-text p-4">Career Fair Entities</h1>
    <p className="text-lg mt-4">
      Explore thousands of opportunities with all the information you need. It's your future.
    </p>
    <div className="grid md:grid-cols-3 gap-4 p-2 mt-4">
      {/* Student Card */}
      <div>
        <div className="border-2 bg-slate-800 p-4 rounded-3xl">
          <img className="w-20 mx-auto mb-2 rounded-xl" src={logo} alt="Students" />
          <h1 className="text-lg tracking-wider">Students</h1>
          <p>Explore job opportunities and connect with top companies.</p>
        </div>
      </div>
      
      {/* Company Card */}
      <div>
        <div className="border-2  bg-slate-800 p-4 rounded-3xl">
          <img className="w-20 mx-auto mb-2 rounded-xl" src={logo} alt="Companies" />
          <h1 className="text-lg tracking-wider">Companies</h1>
          <p>Showcase your brand and find top talent at the fair.</p>
        </div>
      </div>
      
      {/* Sponsor Card */}
      <div>
        <div className="border-2  bg-slate-800 p-4 rounded-3xl">
          <img className="w-20 mx-auto mb-2 rounded-xl" src={logo} alt="Sponsors" />
          <h1 className="text-lg tracking-wider">Sponsors</h1>
          <p>Support the event and gain visibility among participants.</p>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Entities