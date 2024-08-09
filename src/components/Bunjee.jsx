import React from 'react';
import BunjeeInPokhara from '../assets/BunjeeInPokhara.jpg'; // Rename the import

const Bunjee = () => {
  const photos = [
    { src:BunjeeInPokhara, title: 'Bunjee Jumping in Pokhara' }, // Update the title
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">Bunjee  In Pokhara</h1>
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

export default Bunjee;
