import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


import localSpecialitiesImg from '../assets/local-specialities-in-pokhara.jpg';
import fishCuisineImg from '../assets/fish-cuisine-in-pokhara.jpg';
import barsAndPubsImg from '../assets/bars-and-pubs-in-pokhara.jpg';
import restaurantsImg from '../assets/restaurants-in-pokhara.jpg';
import cafesImg from '../assets/cafes-in-pokhara.jpg';

const EatAndDrink = () => {
  const navigate = useNavigate();

  // Array of eat & drink options with corresponding images
  const options = [
    { name: 'Local Specialities', img: localSpecialitiesImg, link: '/EatDrink/LocalSpecialities' },
    { name: 'Fish Cuisine', img: fishCuisineImg, link: '/EatDrink/FishCuisine' },
    { name: 'Bars and Pubs', img: barsAndPubsImg, link: '/EatDrink/BarsAndPubs' },
    { name: 'Restaurants', img: restaurantsImg, link: '/EatDrink/Restaurants' },
    { name: 'Cafes', img: cafesImg, link: '/EatDrink/Cafes' },
  ];

  // Function to handle click events on options
  const handleOptionClick = (link) => {
    navigate(link);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <div className='p-10 bg-gradient-to-br from-gray-100 to-gray-300'>
      <h1 className='text-3xl font-semibold text-center mb-8 text-gray-800'>Eat & Drink in Pokhara</h1>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
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
              <p className='text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300'>Explore the rich flavors and dining experiences of Pokhara.</p>
            </div>
            <div className='absolute top-2 right-2 bg-yellow-500 text-white p-2 rounded-full shadow-lg transform transition-transform group-hover:rotate-180'>
              <span className='text-xs font-bold'>View</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EatAndDrink;
