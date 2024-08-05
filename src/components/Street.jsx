import React from 'react';
import streetfest from '../assets/streetfest.jpg';

const Street = () => {
  const photos = [
    { 
      src: streetfest, 
      title: 'Pokhara Street Festival',
      description: 'The Pokhara Street Festival is held in Pokhara, Nepal, over the course of five days during the New Year\'s holiday every year. One of the most well-liked tourist destinations in the nation, it is run by the Restaurant and Bar Association of Nepal (REBAN). Offering a rare chance to take in the finest of Nepali cuisine, music, dance, and crafts, the festival offers a wide range of activities and events. The festival advertises Pokhara as a year-round tourist destination. Thousand people attended the first Pokhara Street Festival, a one-day New Year\'s Eve party that was a hit. It became five days the next year. This has become one of Nepal\'s greatest celebrations. The Street Festival offers live music, dance performance, food stalls, art and craft stalls, games and activities, concerts, and cultural performance.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Pokhara Street Festival
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {photos.map((photo, index) => (
          <div key={index} className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="lg:w-1/2">
              <img src={photo.src} alt={photo.title} className="w-full h-full object-cover" />
            </div>
            <div className="lg:w-1/2 p-6 flex flex-col justify-center">
              <p className="text-xl text-center lg:text-left text-gray-700 font-semibold mb-4">{photo.title}</p>
              <p className="text-sm text-gray-600">{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Street;
