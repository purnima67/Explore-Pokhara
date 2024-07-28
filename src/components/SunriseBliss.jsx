// SunriseBliss.jsx
import React from 'react';
import sunrise1 from '../assets/sunrise1.jpg';
import sunrise2 from '../assets/sunrise2.jpg';
import sunrise3 from '../assets/sunrise3.jpg';
import sunrise4 from '../assets/sunrise4.jpg';

const SunriseBliss = () => {
  const photos = [
    { src: sunrise1, title: 'Sunrise 1' },
    { src: sunrise2, title: 'Sunrise 2' },
    { src: sunrise3, title: 'Sunrise 3' },
    { src: sunrise4, title: 'Sunrise 4' },
  ];

  return (
    <div className="container mx-auto p-10 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <h1 className="text-6xl mb-4">Sarangkot </h1>
        <p className="text-lg mb-2">
          <strong>Pokhara</strong>
        </p>
        <p className="text-lg mb-4">
         The best place for morning person.
        </p>
        <p className="text-lg mb-2">
          <strong>Tourist attraction in Pokhara</strong>
        </p>
        <p className="text-lg mb-2">
          <strong>Address:</strong> 6XV5+J25, Sarangkot Rd, Pokhara 33700
        </p>
        <p className="text-lg mb-4">
          <strong>Hours:</strong> Open ⋅ Closes 10 PM
        </p>
        <p className="text-lg mb-4">
          For more info about time and date, visit{' '}
          <a 
            href="https://www.timeanddate.com/sun/nepal/pokhara" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Time and Date
          </a>.
        </p>
        <p className="text-lg">
          Sarangkot provides a panoramic view of the surrounding hills, valleys, and mountains. The view from the View Tower is simply breathtaking, with the Annapurna ranges dominating the skyline. Visitors can also see the beautiful Phewa Lake, the second-largest lake in Nepal, and the city of Pokhara.
        </p>
      </div>
      <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-64 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
              {photo.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SunriseBliss;
