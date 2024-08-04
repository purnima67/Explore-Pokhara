import React from 'react';
import Carousel from './Carousel';


import Content from './Content';
import Otherinfo from './Otherinfo';
import WeatherWidget from './WeatherWidget';
import PhotoGallery from './PhotoGallery';
import Explore from './Explore';
import Collaborations from './Collaborations'
const Home = () => {
  return (
    <div>
      <Carousel />
  
      
      <Content />
      <div className="container mx-auto p-4 md:w-[60rem]">
      
      <WeatherWidget />
    </div>
    <PhotoGallery />
     <Explore />
    <Otherinfo />
     <Collaborations />
    </div>
  );
};

export default Home;
