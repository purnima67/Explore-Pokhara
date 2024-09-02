import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import boat from '../assets/boat.jpg'; 
import sky from '../assets/sky.jpg';
import mountains from '../assets/mountains.jpg';
import {Link} from 'react-router-dom'


const PokharaCarousel = () => {
  return (
    <div className="container mx-auto">
      <Carousel
        showArrows={false} // Hide arrows
        showThumbs={false} // Hide thumbnails
        infiniteLoop={true} // Enable infinite loop
        autoPlay={true} // Enable auto play
        interval={3000} // 3 seconds interval
        transitionTime={600} // 600ms transition time
        className="shadow-md"//for medium device
        stopOnHover={false} // Pause on hover
        dynamicHeight={true} // Enable dynamic height
        swipeable={true} // Enable swipe for touch devices
        emulateTouch={true} // Enable touch emulation for desktops
        renderIndicator={(onClickHandler, isSelected, index, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            className={`rounded-full inline-block h-2 w-2 mx-1 mb-2 ${
              isSelected ? 'bg-blue-500' : 'bg-gray-300'
            } focus:outline-none`}
            title={`${label} ${index + 1}`}
            style={{ padding: '5px' }}
          />
        )}
      >
        <div className="relative">
          <img
            src={mountains}
            alt="Scenic View of Pokhara"
            className="object-cover w-full h-60 md:h-[40rem]"
          />
          <div className="absolute inset-0 flex items-center justify-center w-full h-full">
            <div className="text-center text-white">
              <h2 className="md:text-5xl font-bold mb-2 mt-20 md:mt-40 text-2xl">Find your paradise</h2>
              <p className="md:text-lg mb-4">Discover the serene lakes and majestic mountains.</p>
             <Link to="/Mountains" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Explore</Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={boat}
            alt="Boating in Pokhara"
            className="object-cover w-full h-60 md:h-[40rem]"
          />
          <div className="absolute inset-0 flex items-center justify-center w-full h-full">
            <div className="text-center text-white">
              <h2 className="md:text-5xl font-bold mb-2 mt-20 md:mt-40 text-2xl">Boating Adventure</h2>
              <p className="md:text-lg mb-4">Experience boating amidst stunning landscapes.</p>
              <Link to="/Boating" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Explore</Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={sky}
            alt="Sunrise in Pokhara"
            className="object-cover w-full h-60 md:h-[40rem]"
          />
          <div className="absolute inset-0 flex items-center justify-center w-full h-full">
            <div className="text-center text-white">
              <h2 className="md:text-5xl font-bold mb-2 mt-20 md:mt-40 text-2xl">Morning Bliss</h2>
              <p className="md:text-lg mb-4">Witness the breathtaking sunrise over Pokhara.</p>
              <Link to="/SunriseBliss" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Explore</Link>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default PokharaCarousel;
