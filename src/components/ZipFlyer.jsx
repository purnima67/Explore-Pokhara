import React from 'react';
import ZipFlyerImage from '../assets/ZipFlyerInPokhara.jpg'; // Rename the import

const ZipFlyer = () => {
  const photos = [
    { src: ZipFlyerImage, title: 'Zip Flyer in Pokhara' }, // Update the title
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-xs mx-auto mt-6">
      <h1 className="text-xl font-bold text-center mb-2 text-gray-800">Zip Flyer in Pokhara</h1>
      <div className="mt-4">
        {photos.map((photo, index) => (
          <div key={index} className="mb-2">
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-32 rounded-md shadow-lg object-cover"
            />
            <p className="mt-1 text-center text-lg font-semibold text-gray-700">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZipFlyer;
