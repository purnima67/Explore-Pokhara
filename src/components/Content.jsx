import React from 'react';
import { useNavigate } from 'react-router-dom';
import map from '../assets/map.jpg';

const Content = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate('/pokhara-details'); // Adjust the route as necessary
  };

  return (
    <div className="container mx-auto md:p-8 p-2 mt-2">
      <div className="text-center p-6 mx-auto">
        <p className="mt-2 mb-6 w-full md:mx-auto text-sm md:text-base ">
          Nestled in the heart of Nepal, Pokhara is renowned for its breathtaking greenery, majestic mountains, and serene lakes. As the most beautiful city in Nepal, Pokhara attracts visitors from around the globe seeking tranquility amidst nature's splendor.
         
          
        </p>
      </div>

      <div className="bg-gray-100 rounded-lg shadow-lg md:p-10">
        <h1 className="md:text-4xl font-bold mb-6 text-center text-2xl">Pokhara, Nepal</h1>
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
            <div className="md:p-8 rounded-lg shadow-lg">
              <h2 className="md:text-xl font-bold mb-4 text-lg">Pokhara</h2>
              <p className="text-gray-700 text-sm md:text-base">
                Pokhara is a city in central Nepal, known for its stunning natural beauty, including the Phewa Lake, panoramic views of the Himalayan peaks, and numerous adventure sports like paragliding and trekking. 
                <br />
                <a 
                  onClick={handleViewMore}
                  className="text-blue-500 cursor-pointer hover:underline mt-2 inline-block"
                >
                  View More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
