import React from 'react';
import CyclingImage from '../assets/CyclingInPokhara.jpg'; // Rename the import

const Cycling = () => {
  const photos = [
    { src: CyclingImage, title: 'Cycling in Pokhara' }, // Update the title
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">Cycling In Pokhara</h1>
      <div className="mt-6">
        {photos.map((photo, index) => (
          <div key={index} className="mb-4">
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-auto rounded-md shadow-lg object-cover"
            />
            <p className="mt-2 text-center text-xl font-semibold text-gray-700">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cycling;
