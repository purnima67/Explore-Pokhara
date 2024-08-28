import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import placeholder images (replace with actual images later)
import homestay1Img from '../assets/homestay1.jpg';
import homestay2Img from '../assets/homestay2.jpg';
import homestay3Img from '../assets/homestay3.jpg';
import homestay4Img from '../assets/homestay4.jpg';
import homestay5Img from '../assets/homestay5.jpg';
import homestay6Img from '../assets/homestay6.jpg';

const Homestay = () => {
  const navigate = useNavigate();

  // Array of homestay options with corresponding images
  const options = [
    { name: 'Homestay 1', img: homestay1Img, link: '/Homestay/Homestay1' },
    { name: 'Homestay 2', img: homestay2Img, link: '/Homestay/Homestay2' },
    { name: 'Homestay 3', img: homestay3Img, link: '/Homestay/Homestay3' },
    { name: 'Homestay 4', img: homestay4Img, link: '/Homestay/Homestay4' },
    { name: 'Homestay 5', img: homestay5Img, link: '/Homestay/Homestay5' },
    { name: 'Homestay 6', img: homestay6Img, link: '/Homestay/Homestay6' },
  ];

  // Function to handle click events on options
  const handleOptionClick = (link) => {
    navigate(link);
  };

  return (
    <div className='p-10 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100'>
      <h1 className='text-4xl font-bold text-center mb-12 text-gray-800'>Discover Homestays in Pokhara</h1>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {options.map((option, index) => (
          <div
            key={index}
            className='group relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:shadow-2xl hover:scale-110 cursor-pointer'
            onClick={() => handleOptionClick(option.link)}
          >
            <div className="relative overflow-hidden rounded-t-3xl">
              <img
                src={option.img}
                alt={option.name}
                className='w-full h-48 object-cover transition-transform duration-500 transform group-hover:scale-110'
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-70"></div>
            </div>
            <div className='p-6 text-center bg-white rounded-b-3xl'>
              <h2 className='text-2xl font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors duration-500'>{option.name}</h2>
              <p className='text-md text-gray-600 group-hover:text-gray-800 transition-colors duration-500'>Experience the warmth and comfort of Pokhara's homestays.</p>
            </div>
            <div className='absolute top-4 right-4 bg-pink-500 text-white p-3 rounded-full shadow-lg transform transition-transform duration-500 group-hover:rotate-180'>
              <span className='text-sm font-bold'>Explore</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homestay;
