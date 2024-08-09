import React from 'react';
import { useNavigate } from 'react-router-dom';


import templesImg from '../assets/temples-and-monuments-in-pokhara.jpg';
import cavesImg from '../assets/caves-in-pokhara.jpg';
import lakesImg from '../assets/lakes-in-pokhara.jpg';
import homestayImg from '../assets/homestay-in-pokhara.jpg';
import yogaRetreatImg from '../assets/yoga-retreat-in-pokhara.jpg';

const TouristAttractions = () => {
  const navigate = useNavigate();

  
  const attractions = [
    { name: 'Temples & Monuments', img: templesImg, link: '/TouristAttractions/Temples' },
    { name: 'Caves', img: cavesImg, link: '/TouristAttractions/Caves' },
    { name: 'Lakes', img: lakesImg, link: '/TouristAttractions/Lakes' },
    { name: 'Homestay', img: homestayImg, link: '/TouristAttractions/Homestay' },
    { name: 'Yoga Retreat', img: yogaRetreatImg, link: '/TouristAttractions/Yoga' },
  ];

  const handleAttractionClick = (link) => {
    navigate(link);
  };

  return (
    <div className='p-10'>
      <h1 className='text-3xl font-semibold text-center mb-8 text-gray-800'>Tourist Attractions in Pokhara</h1>
      <div className='container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6'>
        {attractions.map((attraction, index) => (
          <div
            key={index}
            className='bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-2xl hover:scale-105 cursor-pointer'
            onClick={() => handleAttractionClick(attraction.link)}
          >
            <img
              src={attraction.img}
              alt={attraction.name}
              className='w-full h-36 sm:h-40 object-cover rounded-t-xl'
            />
            <div className='p-2 text-center text-gray-800 bg-gray-100'>
              <h2 className='text-xs sm:text-sm font-semibold'>{attraction.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouristAttractions;
