import React from 'react';
import spring from '../assets/spring.jpg';
import summer from '../assets/summer.jpg';
import autumn from '../assets/autumn.jpg';
import winter from '../assets/winter.jpg';

const Explore = () => {
  const seasons = [
    {
      name: 'Spring',
      months: 'March - May',
      image: spring,
      link: '/spring', 
    },
    {
      name: 'Summer',
      months: 'June - August',
      image: summer,
      link: '/summer', 
    },
    {
      name: 'Autumn',
      months: 'September - November',
      image: autumn,
      link: '/autumn', 
    },
    {
      name: 'Winter',
      months: 'December - February',
      image: winter,
      link: '/winter', 
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="md:text-4xl font-bold mb-6 text-gray-800 text-2xl italic">Pokhara on all Season</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {seasons.map((season, index) => (
          <a
            key={index}
            href={season.link} 
            className="block relative overflow-hidden rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 bg-white"
            style={{ height: '250px', width: '100%' }} 
          >
            <img
              src={season.image}
              alt={`Scenic view of Pokhara during ${season.name}`}
              className="h-full w-full object-cover md:w-full md:h-full" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white p-4">
              <h2 className="text-xl font-semibold">{season.name}</h2>
              <p className="text-sm mt-1">{season.months}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Explore;
