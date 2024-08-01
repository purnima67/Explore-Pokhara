import React from 'react'
import hiking from '../assets/hiking.jpg';
const Hiking = () => {
    const photos =  [
    {src:hiking, title: ''},
    ];

  return (
    <div>
        Hiking
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

export default Hiking