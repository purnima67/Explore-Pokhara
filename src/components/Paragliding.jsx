import React from 'react'
import paragliding from '../assets/paragliding.jpg';
const Paragliding = () => {
    const photos = [
      { src: paragliding, title: '' },
     
    ];
  return (
    <div>
      <p>have fun , touch the sky</p>
      <div className="mt-6">
        {photos.map((photo, index) => (
          <div key={index} className="mb-4">
            <img src={photo.src} alt={photo.title} className="w-30 h-30 rounded-md shadow-lg" />
            <p className="mt-2 text-center text-xl">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Paragliding