import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import images
import FewaLakeInPokharaImg from '../assets/fewaLake.jpg';
import BegnasLakeInPokhara from '../assets/BegnasLakeInPokhara.jpg';

const Lakes = () => {
  const navigate = useNavigate();

  // Array of lake options with corresponding images
  const options = [
    {
      name: 'Fewa Lake',
      img: FewaLakeInPokharaImg,
      link: '/TouristAttractions/FewaLake'
    },
    {
      name: 'Begnas Lake',
      img: BegnasLakeInPokhara,
      link: '/TouristAttractions/BegnasLake'
    },
  ];

  // Function to handle click events on options
  const handleOptionClick = (link) => {
    navigate(link);
  };

  return (
    <div className='p-10 bg-gradient-to-br from-gray-100 to-gray-300'>
      <h1 className='text-3xl font-semibold text-center mb-8 text-gray-800'>Lakes in Pokhara</h1>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {options.map((option, index) => (
          <div
            key={index}
            className='group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl hover:scale-105 cursor-pointer'
            onClick={() => handleOptionClick(option.link)}
          >
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src={option.img}
                alt={option.name}
                className='w-full h-40 object-cover transition-transform duration-300 transform group-hover:scale-110'
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-40"></div>
            </div>
            <div className='p-4 text-center text-gray-900 bg-gradient-to-b from-gray-100 to-white rounded-b-2xl'>
              <h2 className='text-lg font-bold mb-2 group-hover:text-yellow-500 transition-colors duration-300'>{option.name}</h2>
              <p className='text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300'>Discover the serene beauty of Pokhara's lakes.</p>
            </div>
            <div className='absolute top-2 right-2 bg-green-500 text-white p-2 rounded-full shadow-lg transform transition-transform group-hover:rotate-180'>
              <span className='text-xs font-bold'>View</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lakes;
