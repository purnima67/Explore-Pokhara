import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

// Importing images for each activity
import boatingImg from '../assets/boat.jpg';
import HikingInPokhara from '../assets/hiking.jpg';
import CyclingInPokhara from '../assets/CyclingInPokhara.jpg';
import ParaglidingInPokhara from '../assets/paragliding.jpg';
import BunjeeInPokhara from '../assets/BunjeeInPokhara.jpg';
import ZipFlyerInPokhara from '../assets/ZipFlyerInPokhara.jpg';

const ThingsToDo = () => {
  const navigate = useNavigate();

  // Array of activities with corresponding images
  const activities = [
    { name: 'Boating', img: boatingImg, link: '/ThingsToDo/Boating' },
    { name: 'Hiking', img: HikingInPokhara, link: '/ThingsToDo/Hiking' },
    { name: 'Cycling', img: CyclingInPokhara, link: '/ThingsToDo/Cycling' },
    { name: 'Paragliding', img: ParaglidingInPokhara, link: '/ThingsToDo/Adventure/Paragliding' },
    { name: 'Bungee Jump', img: BunjeeInPokhara, link: '/ThingsToDo/Bunjee' },
    { name: 'Zip Flyer', img: ZipFlyerInPokhara, link: '/ThingsToDo/ZipFlyer' },
  ];

  // Function to handle click events on activities
  const handleActivityClick = (link) => {
    navigate(link);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <div className='p-10'>
      <h1 className='text-3xl font-semibold text-center mb-8 text-gray-800'>Things to Do in Pokhara</h1>
      <div className='container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6'>
        {activities.map((activity, index) => (
          <div
            key={index}
            className='bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-2xl hover:scale-105 cursor-pointer'
            onClick={() => handleActivityClick(activity.link)}
          >
            <img
              src={activity.img}
              alt={activity.name}
              className='w-full h-36 sm:h-40 object-cover rounded-t-xl'
            />
            <div className='p-2 text-center text-gray-800 bg-gray-100'>
              <h2 className='text-xs sm:text-sm font-semibold'>{activity.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThingsToDo;
