import React from 'react';
import Carousel from './Carousel';
import Main from './Main';

import Content from './Content';
import Temples from './Temples';
import Security from './Security';


const Home = () => {
  return (
    <div>
      <Carousel />
      <Main />
      
      <Content />
      <Temples />
      <Security />
     
    </div>
  );
};

export default Home;
