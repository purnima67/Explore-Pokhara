import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

import Carousel from './components/Carousel' 
import Content from './components/Content'
import Temples from './components/Temples'
import PhotoGallery from './components/PhotoGallery'
import Security from './components/Security'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Carousel />
        <Main />
        <Content />
        <Temples />
        <PhotoGallery />
        <Security />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
