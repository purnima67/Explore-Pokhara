import React from 'react';
import fewaLakeImage from '../assets/fewaLake.jpg';
import trishuliRaftingImage from '../assets/trishuliRafting.jpg';
import upperSetiRaftingImage from '../assets/upperSetiRafting.jpg';
import exploreFewaLakeImage from '../assets/exploreFewaLake.jpg';
import lowerSetiRaftingImage from '../assets/lowerSetiRafting.jpg';
import guidedAdventureImage from '../assets/guidedAdventure.jpg';

const BoatingAdventure = () => {
  const adventures = [
    {
      title: '1 Hour Fewa Lake Rowing Trip From Pokhara',
      description: '1 Hour World Famous Phewa (Fewa) Lake Rowing Trip From Pokhara is best trip for 1 Hour into beautiful Fewa lake to explore Fewa lake on a rowing boat with family and friends. Enjoy typical rowing boat with a boatman to see the amazing landscape view, island temple, fish farming, and more.',
      image: fewaLakeImage,
      price: 'from $35 (price varies by group size)',
      duration: '1–2 hours',
      language: 'English',
    },
    {
      title: '1 Day Trishuli Rafting from Pokhara',
      description: 'This trip is ideal for combining with travel between Kathmandu, Pokhara, and Chitwan. Trishuli river rafting is one of the most famous rafting in Nepal with turbulent rapids and grades of 2 to 3, suitable for young age as well. It also offers picturesque scenery with stunning gorges, rock formations, traditional villages, and lush forests.',
      image: trishuliRaftingImage,
      price: 'from $51 (price varies by group size)',
      duration: '6+ hours',
      language: 'English',
    },
    {
      title: 'Upper Seti Half Day Rafting from Pokhara',
      description: 'Experience the thrill of white-water rafting on the Upper Seti River, featuring turbulent rapids and breathtaking scenery. This half-day adventure is perfect for those looking for a quick, exhilarating experience on the water.',
      image: upperSetiRaftingImage,
      price: 'from $69 (price varies by group size)',
      duration: '3–4 hours',
      language: 'English',
    },
    {
      title: '3/4 Hours Explore Fewa Lake with Boating, Walking & Evening Spiritual Chanting',
      description: '3/4 Hours explore Fewa lake with walking, boating and evening Spiritual Chanting Program is one of the best, relax and hassle-free evening tours in Pokhara. Our Experienced Tour Guide will explain more about it during the trip.',
      image: exploreFewaLakeImage,
      price: 'from $69 (price varies by group size)',
      duration: '3–4 hours',
      language: 'English',
    },
    {
      title: '2 Days Family Friendly Lower Seti Rafting From Pokhara',
      description: 'Flowing from Mount Fishtail, this picturesque river passes through two contrasting scenic areas with white beaches and warm blue water. This 2-day trip is perfect and unique for the entire family. Overnight in the tent at the bank of the river.',
      image: lowerSetiRaftingImage,
      price: 'from $154 (price varies by group size)',
      duration: '2 days',
      language: 'English',
    },
    {
      title: 'Nepal Private Guided Adventure Tour',
      description: 'Embark on a private guided adventure tour in Nepal, exploring the country\'s breathtaking landscapes and cultural heritage in the comfort of a private tour.',
      image: guidedAdventureImage,
    },
  ];

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Boating Adventure in Pokhara</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {adventures.map((adventure, index) => (
          <div key={index} className="border rounded-lg shadow-lg overflow-hidden">
            <div className="w-full flex justify-center">
              <img src={adventure.image} alt={adventure.title} className="w-3/4 h-64 object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{adventure.title}</h2>
              <p className="text-base mb-2">{adventure.description}</p>
              {adventure.price && <p className="text-base"><strong>Price:</strong> {adventure.price}</p>}
              {adventure.duration && <p className="text-base"><strong>Duration:</strong> {adventure.duration}</p>}
              {adventure.language && <p className="text-base"><strong>Language:</strong> {adventure.language}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoatingAdventure;
