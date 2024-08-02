import React from 'react';
import Carousel from './Carousel';


import Content from './Content';
import Otherinfo from './Otherinfo';
import WeatherWidget from './WeatherWidget';
import PhotoGallery from './PhotoGallery';
const Home = () => {
  return (
    <div>
      <Carousel />
  
      
      <Content />
      <div className="container mx-auto p-4 md:w-[60rem]">
      
      <WeatherWidget />
    </div>
    <PhotoGallery />
     
    <Otherinfo />
     
    </div>
  );
};

export default Home;
