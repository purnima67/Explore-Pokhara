import React from 'react';
import map from '../assets/map.jpg';

const Content = () => {
  return (
    <div className="container mx-auto md:p-8 p-2">
      <div className="bg-gray-100 rounded-lg shadow-lg md:p-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Pokhara, Nepal</h1>
        <div className="flex flex-col md:flex-row items-center">
          {/* Map Section */}
          <div className="w-full md:w-3/4 p-6">
            <img 
              src={map} 
              alt="Map of Nepal with Pokhara highlighted" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          {/* Description Card */}
          <div className="w-full md:w-1/2 md:p-6">
            <div className=" md:p-8 rounded-lg shadow-lg">
              <h2 className="md:text-xl font-bold mb-4">Pokhara</h2>
              <p className="text-gray-700  w-full">
                Pokhara is a city in central Nepal, known for its stunning natural beauty, including the Phewa Lake, panoramic views of the Himalayan peaks, and numerous adventure sports like paragliding and trekking. It serves as a gateway to the Annapurna Circuit, a popular Himalayan trekking route.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
