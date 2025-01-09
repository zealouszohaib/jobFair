import React from 'react';
import bannerImage from './assets/boy.png';

function Details() {
  return (
    <div className=' dark:bg-gray-900'>
    <div className=" container  mx-auto px-6">
      <div className='md:flex items-center mb-12'>
        <div className="header-details md:w-3/5 tracking-wider">
          <h1 className='text-5xl md:text-7xl font-bold'>
            FCIT Annual Career Fair 2025
          </h1>
          <p className='mt-2 text-lg md:text-xl'>
            <strong>Saturday, 5 Feb 2025</strong>
          </p>
          <p className='mt-6 leading-relaxed text-lg md:text-xl'>
            “We're excited to invite you to participate in the FCIT Annual Career Fair 2025. With an expected attendance of 2500+ students and alumni from diverse academic backgrounds, this unparalleled event can give you the chance to make lasting connections and showcase your opportunities to top-tier talent.”
          </p>
          <button className='custom-btn m-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300'>
            Reserve Your Spot
          </button>
        </div>
        <div className="image-section hidden sm:block md:w-1/2 mt-6 md:mt-0">
          <img src={bannerImage} alt="Career Fair" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Details;