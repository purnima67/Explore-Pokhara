import React from 'react';
import { Link } from 'react-router-dom';


import hiddenGems from '../assets/hidden-gems.jpg';
import homeStay from '../assets/home-stay.jpg';
import trekking from '../assets/trekking.jpg';
import adventures from '../assets/adventures.jpg';


const attractions = [
  {
    name: 'Hidden Gems',
    description: 'Explore the lesser-known beauty of Pokhara.',
    image: hiddenGems,
    link: '/hidden-gems', 
  },
  {
    name: 'Home Stay',
    description: 'Experience local life by staying with a host family.',
    image: homeStay,
    link: '/home-stay', 
  },
  {
    name: 'Beyond Pokhara(Trekking, Travel, Hiking)',
    description: 'Discover breathtaking treks around Pokhara.',
    image: trekking,
    link: '/trekking-around-pokhara', 
  },
  {
    name: 'Adventures',
    description: 'Thrilling adventure activities in Pokhara.',
    image: adventures,
    link: '/adventures', 
  }
];


const AttractionCard = ({ attraction }) => (
  <Link
    to={attraction.link}
    className="block relative overflow-hidden rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 bg-white"
    style={{ height: '200px', width: '200px' }} 
  >
    <img
      src={attraction.image}
      alt={`Attraction in Pokhara: ${attraction.name}`}
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white p-2">
      <div className="text-lg font-semibold text-center">{attraction.name}</div>
      {attraction.description && (
        <p className="text-xs mt-1 text-center">{attraction.description}</p>
      )}
    </div>
  </Link>
);

const OtherAttractions = () => (
  <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
    <h1 className="md:text-4xl font-bold mb-6 text-gray-800 text-2xl italic">Other Attractions</h1>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {attractions.map((attraction, index) => (
        <AttractionCard key={index} attraction={attraction} />
      ))}
    </div>
  </div>
);

export default OtherAttractions;
