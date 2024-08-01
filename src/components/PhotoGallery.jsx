// // PhotoGallery.jsx
// import React from 'react';
// import boat from '../assets/boat.jpg'; 
// import sky from '../assets/sky.jpg';
// import mountains from '../assets/mountains.jpg';
// import stupa from '../assets/stupa.jpg';
// import village from '../assets/village.jpg';

// const PhotoGallery = ({ onClickScenicMountains, onClickBoatingAdventure, onClickSunriseBliss }) => {
//   const photos = [
//     { src: mountains, title: 'Scenic Mountains', onClick: onClickScenicMountains },
//     { src: boat, title: 'Boating Adventure', onClick: onClickBoatingAdventure },
//     { src: sky, title: 'Sunrise Bliss', onClick: onClickSunriseBliss },
//     { src: stupa, title: 'Peace' },
//     { src: village, title: 'Feel The Greenery' },
//   ];

//   return (
//     <div className='p-10'>
//       <h1 className='text-6xl'>Where to visit?</h1>
//       <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
//         {photos.map((photo, index) => (
//           <div key={index} className="group relative overflow-hidden rounded-lg shadow-md" onClick={photo.onClick}>
//             <img
//               src={photo.src}
//               alt={photo.title}
//               className="w-full h-64 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
//               {photo.title}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// //

// export default PhotoGallery;
