// PhotoGallery.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Importing images
import bindhyabasini from '../assets/bindhyabasini.jpg'; 
import barahiTemple from '../assets/barahiTemple.jpg';
import mountainMuseum from '../assets/mountainMuseum.jpg';
import sarangkot from '../assets/sarangkot.jpg';
import phewaLake from '../assets/phewaLake.jpg';
import devisFall from '../assets/devisFall.jpg';
import gupteshworCave from '../assets/gupteshworCave.jpg';
import pumdikot from '../assets/pumdikot.jpg';  // Replaced Gurkha Museum with Pumdikot

const PhotoGallery = () => {
  const navigate = useNavigate();

  const places = [
    { name: 'Shree Bindhyabasini Temple', img: bindhyabasini },
    { name: 'Tal Barahi Temple', img: barahiTemple },
    { name: 'International Mountain Museum', img: mountainMuseum },
    { name: 'Sarangkot', img: sarangkot },
    { name: 'Phewa Lake', img: phewaLake },
    { name: "Devi's Fall", img: devisFall },
    { name: 'Gupteshwor Mahadev Cave', img: gupteshworCave },
    { name: 'Pumdikot', img: pumdikot }  // Updated with Pumdikot
  ];

  const handlePlaceClick = (placeName) => {
    // Navigate to the page for the clicked place
    navigate(`/places/${placeName.toLowerCase().replace(/ /g, '-')}`);
  };

  return (
    <div className='p-10'>
      <h1 className='text-3xl font-semibold text-center mb-8 text-gray-800'>Most Visited Places in Pokhara</h1>
      <div className='container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
        {places.map((place, index) => (
          <div 
            key={index} 
            className='bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-2xl hover:scale-105 cursor-pointer'
            onClick={() => handlePlaceClick(place.name)}
          >
            <img
              src={place.img}
              alt={place.name}
              className='w-full h-36 sm:h-40 object-cover rounded-t-xl'
            />
            <div className='p-2 text-center text-gray-800 bg-gray-100'>
              <h2 className='text-xs sm:text-sm font-semibold'>{place.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
